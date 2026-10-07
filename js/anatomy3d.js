// =============================================================================
// anatomy3d.js — Interactive 3D anatomy viewer built with Three.js.
// Each body system is generated procedurally from primitive geometry, so no
// external model files are needed and the app works fully offline/static.
// =============================================================================
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { STLLoader } from "three/addons/loaders/STLLoader.js";
import { bodySystems } from "./data.js?v=1.2.0";

// Build the system list grouped by each entry's `group` label, in first-seen order.
function groupedSystemListHTML(activeId) {
  const groups = [];
  for (const s of bodySystems) {
    const key = s.group || "Other";
    let g = groups.find((x) => x.key === key);
    if (!g) groups.push((g = { key, items: [] }));
    g.items.push(s);
  }
  return groups
    .map(
      (g) => `
      <div class="system-group-label">${g.key}</div>
      ${g.items
        .map(
          (s) => `
        <button class="system-btn ${s.id === activeId ? "active" : ""}" data-id="${s.id}">
          <strong>${s.name}</strong>
          <small>${s.summary}</small>
        </button>`
        )
        .join("")}`
    )
    .join("");
}

export function renderAnatomy(root) {
  let activeId = bodySystems[0].id;

  root.innerHTML = `
    <h1 class="view-title">3D Anatomy</h1>
    <p class="view-subtitle">
      Drag to rotate · scroll to zoom. Pick a body system to explore it in 3D.
    </p>
    <div class="anatomy-layout">
      <div class="system-list" id="systemList">
        ${groupedSystemListHTML(activeId)}
      </div>
      <div class="viewer-panel">
        <div class="viewer-canvas-wrap" id="canvasWrap">
          <div class="viewer-loading" id="viewerLoading" hidden>Loading model…</div>
          <div class="viewer-hint">Drag to rotate · scroll to zoom</div>
        </div>
        <div class="viewer-info" id="viewerInfo"></div>
      </div>
    </div>
  `;

  const viewer = new Viewer(root.querySelector("#canvasWrap"));

  function select(id) {
    activeId = id;
    const system = bodySystems.find((s) => s.id === id);
    root.querySelectorAll(".system-btn").forEach((b) =>
      b.classList.toggle("active", b.dataset.id === id)
    );
    root.querySelector("#viewerInfo").innerHTML = `
      <h3>${system.name}</h3>
      <p>${system.summary}</p>
      <div class="term-chips">
        ${system.terms
          .map((t) => `<span class="term-chip"><b>${t.term}</b> — ${t.meaning}</span>`)
          .join("")}
      </div>
    `;
    viewer.showSystem(system);
  }

  root.querySelector("#systemList").addEventListener("click", (e) => {
    const btn = e.target.closest(".system-btn");
    if (btn) select(btn.dataset.id);
  });

  select(activeId);

  // Returned to app.js so resources are freed when the user leaves this view.
  return () => viewer.dispose();
}

// -----------------------------------------------------------------------------
// Viewer — owns the Three.js scene, camera, renderer, and animation loop.
// -----------------------------------------------------------------------------
class Viewer {
  constructor(container) {
    this.container = container;
    this.clock = new THREE.Clock();
    this.modelGroup = null;
    this.animators = [];
    this.loader = new GLTFLoader();
    // Many openly-licensed GLB models are Draco-compressed; wire up the decoder.
    const draco = new DRACOLoader();
    draco.setDecoderPath("https://unpkg.com/three@0.164.0/examples/jsm/libs/draco/");
    this.loader.setDRACOLoader(draco);
    this.stlLoader = new STLLoader();
    this.loadToken = 0;
    this.loadingEl = container.querySelector("#viewerLoading");

    this.scene = new THREE.Scene();

    const { clientWidth: w, clientHeight: h } = container;
    this.camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    this.camera.position.set(0, 1.5, 8);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(w, h);
    container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.enablePan = false;
    this.controls.minDistance = 4;
    this.controls.maxDistance = 16;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 1.2;

    this._addLights();

    this._onResize = this._onResize.bind(this);
    window.addEventListener("resize", this._onResize);

    this._animate = this._animate.bind(this);
    this.frameId = requestAnimationFrame(this._animate);
  }

  _addLights() {
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(5, 6, 7);
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0x66aaff, 0.6);
    rim.position.set(-6, 2, -4);
    this.scene.add(rim);
  }

  // Show a body system. If it declares a `file` (a .glb/.gltf/.stl model) we
  // load that for a realistic look; otherwise we build the procedural fallback.
  // A load token guards against the user switching systems mid-download.
  showSystem(system) {
    this._clearModel();
    this.animators = [];
    const token = ++this.loadToken;

    if (!system.file) {
      this._buildProcedural(system.model);
      return;
    }

    const stale = () => token !== this.loadToken;
    const onReady = (object) => {
      if (stale()) return;
      this._setLoading(false);
      if (system.rotation) object.rotation.set(...system.rotation);
      frameObject(object);
      this.modelGroup = object;
      this.scene.add(object);
    };
    const onError = (err) => {
      // Missing or unreadable file: quietly fall back to the built-in model.
      if (stale()) return;
      console.warn("[anatomy3d] model load failed, using procedural fallback:", system.file, err);
      this._setLoading(false);
      this._buildProcedural(system.model);
    };

    this._setLoading(true);
    const ext = system.file.split(".").pop().toLowerCase();
    if (ext === "glb" || ext === "gltf") {
      this.loader.load(system.file, (gltf) => onReady(gltf.scene), undefined, onError);
    } else if (ext === "stl") {
      this.stlLoader.load(
        system.file,
        (geometry) => {
          geometry.computeVertexNormals();
          const material = mat(system.color || 0xcf6b6b, { roughness: 0.5, side: THREE.DoubleSide });
          onReady(new THREE.Mesh(geometry, material));
        },
        undefined,
        onError
      );
    } else {
      onError();
    }
  }

  _buildProcedural(name) {
    const builder = MODELS[name] || MODELS.skeletal;
    this.modelGroup = builder(this.animators);
    this.scene.add(this.modelGroup);
  }

  _clearModel() {
    if (this.modelGroup) {
      this.scene.remove(this.modelGroup);
      disposeGroup(this.modelGroup);
      this.modelGroup = null;
    }
  }

  _setLoading(on) {
    if (this.loadingEl) this.loadingEl.hidden = !on;
  }

  _animate() {
    this.frameId = requestAnimationFrame(this._animate);
    const t = this.clock.getElapsedTime();
    for (const fn of this.animators) fn(t);
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  _onResize() {
    const { clientWidth: w, clientHeight: h } = this.container;
    if (!w || !h) return;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  dispose() {
    cancelAnimationFrame(this.frameId);
    window.removeEventListener("resize", this._onResize);
    if (this.modelGroup) disposeGroup(this.modelGroup);
    this.controls.dispose();
    this.renderer.dispose();
    if (this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
  }
}

// -----------------------------------------------------------------------------
// Material helpers
// -----------------------------------------------------------------------------
const mat = (color, opts = {}) =>
  new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0.05, ...opts });

// -----------------------------------------------------------------------------
// Procedural model builders. Each receives the `animators` array and may push
// per-frame callbacks into it. Each returns a THREE.Group.
// -----------------------------------------------------------------------------
const MODELS = {
  // ---- Vertebrae: a short stack of vertebra rings (fallback) --------------
  vertebrae(animators) {
    const group = new THREE.Group();
    const bone = mat(0xf1ede0, { roughness: 0.75 });
    for (let i = 0; i < 4; i++) {
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.5, 24), bone);
      body.position.y = 1.5 - i;
      group.add(body);
      const arch = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.14, 12, 24), bone);
      arch.position.set(0, 1.5 - i, -0.7);
      arch.rotation.x = Math.PI / 2;
      group.add(arch);
      [-0.55, 0.55].forEach((x) => {
        const process = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.6, 8), bone);
        process.position.set(x, 1.5 - i, -0.7);
        process.rotation.z = x > 0 ? -Math.PI / 2 : Math.PI / 2;
        group.add(process);
      });
    }
    return group;
  },

  // ---- Generic long bones (fallback for limbs / hand) ---------------------
  bones(animators) {
    const group = new THREE.Group();
    const bone = mat(0xf1ede0, { roughness: 0.75 });
    for (let i = 0; i < 3; i++) {
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 2.6, 16), bone);
      shaft.position.x = (i - 1) * 0.5;
      group.add(shaft);
      [1.4, -1.4].forEach((y) => {
        const epiphysis = new THREE.Mesh(new THREE.SphereGeometry(0.26, 16, 16), bone);
        epiphysis.position.set((i - 1) * 0.5, y, 0);
        group.add(epiphysis);
      });
    }
    return group;
  },

  // ---- Skull: cranium + jaw (procedural fallback) -------------------------
  skull(animators) {
    const group = new THREE.Group();
    const bone = mat(0xf1ede0, { roughness: 0.7 });

    const cranium = new THREE.Mesh(new THREE.SphereGeometry(1.2, 40, 40), bone);
    cranium.scale.set(1, 1.1, 1.15);
    cranium.position.y = 0.6;
    group.add(cranium);

    // Eye sockets
    const socketMat = mat(0x2a2a2a, { roughness: 0.9 });
    [-0.45, 0.45].forEach((x) => {
      const socket = new THREE.Mesh(new THREE.SphereGeometry(0.3, 20, 20), socketMat);
      socket.position.set(x, 0.45, 1.05);
      socket.scale.set(1, 0.85, 0.6);
      group.add(socket);
    });

    // Nasal cavity
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.4, 4), socketMat);
    nose.position.set(0, 0.05, 1.25);
    group.add(nose);

    // Upper and lower jaw
    const maxilla = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.4, 0.9), bone);
    maxilla.position.set(0, -0.35, 0.75);
    group.add(maxilla);
    const mandible = new THREE.Mesh(
      new THREE.SphereGeometry(0.7, 24, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2),
      bone
    );
    mandible.position.set(0, -0.75, 0.55);
    mandible.scale.set(1, 1.1, 1.2);
    group.add(mandible);

    return group;
  },

  // ---- Skeletal: skull, stacked vertebrae, rib cage -----------------------
  skeletal(animators) {
    const group = new THREE.Group();
    const bone = mat(0xf1ede0, { roughness: 0.75 });

    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.85, 32, 32), bone);
    skull.position.y = 3.1;
    skull.scale.set(1, 1.15, 1.05);
    group.add(skull);
    const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.55, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), bone);
    jaw.position.y = 2.55;
    jaw.rotation.x = Math.PI;
    group.add(jaw);

    // Spine
    for (let i = 0; i < 12; i++) {
      const v = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.16, 16), bone);
      v.position.y = 2.1 - i * 0.35;
      group.add(v);
    }

    // Rib cage: paired torus arcs
    const ribMat = mat(0xeae3d2, { roughness: 0.8 });
    for (let i = 0; i < 7; i++) {
      const r = 0.95 - i * 0.03;
      const geo = new THREE.TorusGeometry(r, 0.055, 10, 40, Math.PI * 1.1);
      const left = new THREE.Mesh(geo, ribMat);
      left.position.y = 1.9 - i * 0.22;
      left.rotation.set(Math.PI / 2, 0, -Math.PI * 0.05);
      group.add(left);
    }

    // Pelvis
    const pelvis = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.18, 12, 24, Math.PI), bone);
    pelvis.position.y = -2.2;
    pelvis.rotation.x = Math.PI / 2;
    group.add(pelvis);

    animators.push((t) => (group.rotation.y = 0)); // auto-rotate handled by controls
    group.position.y = -0.3;
    group.scale.setScalar(0.95);
    return group;
  },

  // ---- Muscular: bundle of muscle fibers ----------------------------------
  muscular(animators) {
    const group = new THREE.Group();
    const fibers = [];
    for (let i = 0; i < 9; i++) {
      const angle = (i / 9) * Math.PI * 2;
      const radius = 0.55;
      const fiber = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.16, 2.6, 8, 16),
        mat(new THREE.Color().setHSL(0.99, 0.55, 0.42 + Math.random() * 0.08))
      );
      fiber.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
      group.add(fiber);
      fibers.push(fiber);
    }
    const core = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 2.8, 8, 16), mat(0xb23a48));
    group.add(core);
    fibers.push(core);

    // Tendons at each end.
    const tendonMat = mat(0xe7e2d0, { roughness: 0.9 });
    [1.9, -1.9].forEach((y) => {
      const tendon = new THREE.Mesh(new THREE.ConeGeometry(0.75, 0.8, 16), tendonMat);
      tendon.position.y = y;
      tendon.rotation.x = y > 0 ? 0 : Math.PI;
      group.add(tendon);
    });

    // Gentle "flex" pulse.
    animators.push((t) => {
      const s = 1 + Math.sin(t * 1.6) * 0.06;
      fibers.forEach((f) => (f.scale.set(s, 1, s)));
    });
    return group;
  },

  // ---- Cardiovascular: a beating heart with great vessels ------------------
  cardiovascular(animators) {
    const group = new THREE.Group();
    const muscle = mat(0xc0392b, { roughness: 0.4 });

    const heart = new THREE.Group();
    const lobeL = new THREE.Mesh(new THREE.SphereGeometry(0.95, 32, 32), muscle);
    lobeL.position.set(-0.55, 0.45, 0);
    const lobeR = new THREE.Mesh(new THREE.SphereGeometry(0.95, 32, 32), muscle);
    lobeR.position.set(0.55, 0.45, 0);
    const apex = new THREE.Mesh(new THREE.ConeGeometry(1.25, 1.9, 32), muscle);
    apex.position.set(0, -0.75, 0);
    apex.rotation.z = Math.PI;
    heart.add(lobeL, lobeR, apex);

    // Great vessels
    const aorta = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.2, 16, 32, Math.PI * 1.3), mat(0xd98880));
    aorta.position.set(0.1, 1.2, 0);
    aorta.rotation.z = -0.4;
    const pulmo = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.1, 16), mat(0x5dade2));
    pulmo.position.set(-0.5, 1.4, 0.1);
    pulmo.rotation.z = 0.3;
    const venaCava = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.0, 16), mat(0x5d6d7e));
    venaCava.position.set(0.7, 1.3, -0.1);
    group.add(heart, aorta, pulmo, venaCava);

    // Heartbeat: a quick double-pulse like lub-dub.
    animators.push((t) => {
      const beat = heartbeat(t * 1.1);
      heart.scale.setScalar(1 + beat * 0.08);
    });
    return group;
  },

  // ---- Respiratory: trachea, bronchi, two lungs ---------------------------
  respiratory(animators) {
    const group = new THREE.Group();
    const lungMat = mat(0xe8a0a8, { roughness: 0.6, transparent: true, opacity: 0.95 });

    const trachea = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.6, 20), mat(0xd7bde2));
    trachea.position.y = 1.7;
    group.add(trachea);

    const bronchusL = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 1.0, 16), mat(0xd7bde2));
    bronchusL.position.set(-0.45, 1.0, 0);
    bronchusL.rotation.z = Math.PI / 5;
    const bronchusR = bronchusL.clone();
    bronchusR.position.x = 0.45;
    bronchusR.rotation.z = -Math.PI / 5;
    group.add(bronchusL, bronchusR);

    const lungL = new THREE.Mesh(new THREE.SphereGeometry(1.05, 32, 32), lungMat);
    lungL.position.set(-0.95, 0, 0);
    lungL.scale.set(0.8, 1.55, 0.75);
    const lungR = new THREE.Mesh(new THREE.SphereGeometry(1.05, 32, 32), lungMat);
    lungR.position.set(0.95, 0, 0);
    lungR.scale.set(0.8, 1.55, 0.75);
    group.add(lungL, lungR);

    // Breathing: lungs expand and contract.
    animators.push((t) => {
      const breath = (Math.sin(t * 0.9) + 1) / 2; // 0..1
      const sx = 0.8 + breath * 0.12;
      const sy = 1.55 + breath * 0.1;
      lungL.scale.set(sx, sy, sx);
      lungR.scale.set(sx, sy, sx);
    });
    return group;
  },

  // ---- Nervous: brain, spinal cord, nerve branches ------------------------
  nervous(animators) {
    const group = new THREE.Group();
    const brainMat = mat(0xd7a9b0, { roughness: 0.65 });

    // Brain: a sphere made lumpy by displacing its vertices.
    const brainGeo = new THREE.SphereGeometry(1.1, 48, 48);
    const pos = brainGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
      const n = Math.sin(x * 6) * Math.cos(y * 6) * Math.sin(z * 6);
      const scale = 1 + n * 0.06;
      pos.setXYZ(i, x * scale, y * scale, z * scale);
    }
    brainGeo.computeVertexNormals();
    const brain = new THREE.Mesh(brainGeo, brainMat);
    brain.position.y = 2.2;
    brain.scale.set(1.1, 0.95, 1.05);
    group.add(brain);

    // Spinal cord
    const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 3.4, 16), mat(0xf5d76e));
    cord.position.y = -0.1;
    group.add(cord);

    // Nerve branches
    const nerveMat = mat(0xf7dc6f);
    for (let i = 0; i < 6; i++) {
      const y = 1.2 - i * 0.55;
      [-1, 1].forEach((dir) => {
        const nerve = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.02, 1.2, 8), nerveMat);
        nerve.position.set(dir * 0.5, y, 0);
        nerve.rotation.z = dir * Math.PI / 3;
        group.add(nerve);
      });
    }

    // Subtle signal shimmer on the brain.
    animators.push((t) => {
      brain.material.emissive = new THREE.Color(0x3a1f2a).multiplyScalar(
        (Math.sin(t * 3) + 1) / 2
      );
    });
    return group;
  },

  // ---- Digestive: stomach and winding intestines --------------------------
  digestive(animators) {
    const group = new THREE.Group();

    const stomach = new THREE.Mesh(new THREE.SphereGeometry(0.95, 32, 32), mat(0xe59866));
    stomach.position.set(-0.3, 1.5, 0);
    stomach.scale.set(0.85, 1.2, 0.8);
    stomach.rotation.z = 0.5;
    group.add(stomach);

    const esophagus = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 1.2, 16), mat(0xd7bde2));
    esophagus.position.set(0.1, 2.5, 0);
    group.add(esophagus);

    // Intestines: a wandering tube generated from a 3D curve.
    const points = [];
    for (let i = 0; i <= 90; i++) {
      const a = i / 90;
      const angle = a * Math.PI * 7;
      const radius = 1.25 * (1 - a * 0.55);
      points.push(
        new THREE.Vector3(
          Math.cos(angle) * radius,
          0.4 - a * 2.6,
          Math.sin(angle) * radius * 0.55
        )
      );
    }
    const curve = new THREE.CatmullRomCurve3(points);
    const intestine = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 240, 0.22, 14, false),
      mat(0xdc7633)
    );
    group.add(intestine);

    // Slow peristaltic sway.
    animators.push((t) => {
      stomach.scale.x = 0.85 + Math.sin(t * 1.4) * 0.04;
    });
    group.position.y = 0.3;
    return group;
  },
};

// A 0..1 "lub-dub" curve for the heartbeat animation.
function heartbeat(t) {
  const phase = t % 1;
  const lub = Math.exp(-Math.pow((phase - 0.1) * 12, 2));
  const dub = Math.exp(-Math.pow((phase - 0.35) * 14, 2)) * 0.7;
  return lub + dub;
}

// Center a loaded model at the origin and scale it to a consistent size so any
// downloaded .glb (whatever its units) frames nicely in the viewer.
function frameObject(obj, targetSize = 5) {
  const box = new THREE.Box3().setFromObject(obj);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const scale = targetSize / maxDim;
  obj.scale.setScalar(scale);
  obj.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
}

// Free geometry, material, and texture memory for every mesh in a group.
function disposeGroup(group) {
  group.traverse((obj) => {
    if (obj.geometry) obj.geometry.dispose();
    if (obj.material) {
      const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
      materials.forEach((m) => {
        for (const key in m) {
          const value = m[key];
          if (value && value.isTexture) value.dispose();
        }
        m.dispose();
      });
    }
  });
}
