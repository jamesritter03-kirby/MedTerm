// =============================================================================
// atlas.js — Anatomy Atlas & open study resources.
// Embeds the Open 3D Model project's interactive, *labeled* 3D viewer
// (open-source, CC BY-SA models) and links to their open video lessons,
// presentations, and image repository.
// =============================================================================

const VIEWER_BASE = "https://caskanatomy.info/open3dviewer/";

// Models the embedded viewer can open (slug -> label).
const atlasModels = [
  { slug: "overview-skeleton", label: "Full skeleton" },
  { slug: "upper-limb", label: "Upper limb" },
  { slug: "hand", label: "Hand" },
  { slug: "lower-limb", label: "Lower limb" },
];

const videoLessons = [
  { title: "Pelvis — bony parts, ligaments, passageways", url: "https://anatomytool.org/content/leiden-video-pelvis-bony-parts-ligaments-passways" },
  { title: "Pelvis — obturator internus & piriformis muscles", url: "https://anatomytool.org/content/leiden-video-pelvis-obturator-internus-and-piriformis-muscles-rotating" },
  { title: "Pelvis — pelvic floor & pudendal canal", url: "https://anatomytool.org/content/leiden-video-pelvis-pelvic-floor-seen-above-and-below-and-pudendal-canal" },
];

const presentations = [
  { title: "Pelvis — bony parts, ligaments, passageways", url: "https://anatomytool.org/content/leiden-presentation-pelvis-bony-parts-ligaments-passways" },
  { title: "Building up the pelvic floor", url: "https://anatomytool.org/content/leiden-presentation-pelvis-pelvic-floor" },
  { title: "Pelvis — blood vessels", url: "https://anatomytool.org/content/leiden-presentation-pelvis-blood-vessels" },
];

const moreResources = [
  { title: "All labeled 3D models (browse)", url: "https://anatomytool.org/open3dmodel-learn", desc: "The full set of interactive, labeled anatomy sub-models." },
  { title: "AnatomyTOOL image repository", url: "https://anatomytool.org/", desc: "Thousands of open-licensed anatomical images and diagrams." },
];

// Labeled, public-domain anatomy plates (Gray's Anatomy / Wikimedia Commons),
// bundled locally so they load reliably and work offline. `commons` is the
// Commons filename used to build a source link.
const diagrams = [
  { system: "Skeletal", title: "Human skeleton (labeled)", file: "images/skeleton.svg", commons: "Human_skeleton_front_en.svg" },
  { system: "Skull", title: "Skull — lateral view", file: "images/skull.png", commons: "Gray188_skull_left_lateral_index.png" },
  { system: "Cardiovascular", title: "Heart — anterior surface", file: "images/heart.png", commons: "Gray490.png" },
  { system: "Respiratory", title: "Lungs, trachea & bronchi", file: "images/lungs.png", commons: "Gray965.png" },
  { system: "Nervous", title: "Brain — medial surface", file: "images/brain.png", commons: "Gray518.png" },
  { system: "Digestive", title: "Stomach", file: "images/stomach.png", commons: "Gray1050-stomach.png" },
  { system: "Urinary", title: "Kidneys", file: "images/kidney.png", commons: "Gray1120-kidneys.png" },
  { system: "Muscular", title: "Abdominal wall — surface anatomy", file: "images/muscles.png", commons: "Gray_abdomen_front_surface_en.png" },
  { system: "Sensory", title: "Eyeball — horizontal section", file: "images/eye.png", commons: "Gray869.png" },
  { system: "Sensory", title: "The ear", file: "images/ear.png", commons: "Gray926.png" },
];

export function renderAtlas(root) {
  let activeSlug = atlasModels[0].slug;

  root.innerHTML = `
    <h1 class="view-title">Anatomy Atlas</h1>
    <p class="view-subtitle">
      Labeled anatomy diagrams and interactive 3D anatomy, plus open study material from the
      <a href="https://anatomytool.org/open3dmodel" target="_blank" rel="noopener">Open 3D Model</a> project.
    </p>

    <section class="atlas-section">
      <h2>📑 Labeled diagrams</h2>
      <p class="atlas-note">Classic public-domain anatomy plates. Click any diagram to zoom.</p>
      <div class="diagram-grid" id="diagramGrid">
        ${diagrams
          .map(
            (d, i) => `
          <button class="diagram-card" data-idx="${i}">
            <img src="${d.file}" alt="${d.title}" loading="lazy" />
            <span class="diagram-cap"><span class="badge-sys">${d.system}</span>${d.title}</span>
          </button>`
          )
          .join("")}
      </div>
    </section>

    <section class="atlas-section">
      <div class="atlas-model-tabs" id="atlasTabs">
        ${atlasModels
          .map(
            (m) =>
              `<button class="pill ${m.slug === activeSlug ? "active" : ""}" data-slug="${m.slug}">${m.label}</button>`
          )
          .join("")}
        <a class="atlas-fullscreen" id="atlasFullscreen" href="${VIEWER_BASE}?model=${activeSlug}"
           target="_blank" rel="noopener">Open full screen ↗</a>
      </div>
      <div class="atlas-viewer-frame">
        <iframe id="atlasIframe" title="Interactive labeled 3D anatomy viewer"
          src="${VIEWER_BASE}?model=${activeSlug}"
          loading="lazy" allow="fullscreen; xr-spatial-tracking"></iframe>
      </div>
      <p class="atlas-note">
        Tip: use the viewer's own menu to toggle structure labels and show/hide parts.
      </p>
    </section>

    ${resourceSection("🎬 Video lessons", videoLessons)}
    ${resourceSection("📊 Presentations", presentations)}

    <section class="atlas-section">
      <h2>More open resources</h2>
      <div class="atlas-grid">
        ${moreResources
          .map(
            (r) => `
          <a class="atlas-card" href="${r.url}" target="_blank" rel="noopener">
            <strong>${r.title} ↗</strong>
            <span>${r.desc}</span>
          </a>`
          )
          .join("")}
      </div>
    </section>

    <p class="atlas-credit">
      Labeled diagrams are public-domain plates from Gray's Anatomy via
      <a href="https://commons.wikimedia.org/" target="_blank" rel="noopener">Wikimedia Commons</a>.
      3D models, videos, and presentations © the anatomy departments of Leiden UMC,
      UMC Utrecht, Maastricht UMC, KU Leuven KULAK and collaborators
      (<a href="https://anatomytool.org/open3dmodel" target="_blank" rel="noopener">Open 3D Model</a>),
      licensed <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0</a>.
      Viewer software by D. Jansma (GPL-3.0).
    </p>
  `;

  const iframe = root.querySelector("#atlasIframe");
  const fullscreen = root.querySelector("#atlasFullscreen");

  const lightbox = setupLightbox();
  root.querySelector("#diagramGrid").addEventListener("click", (e) => {
    const btn = e.target.closest(".diagram-card");
    if (btn) lightbox.open(Number(btn.dataset.idx));
  });

  root.querySelector("#atlasTabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".pill");
    if (!btn) return;
    activeSlug = btn.dataset.slug;
    root.querySelectorAll("#atlasTabs .pill").forEach((p) =>
      p.classList.toggle("active", p.dataset.slug === activeSlug)
    );
    const url = `${VIEWER_BASE}?model=${activeSlug}`;
    iframe.src = url;
    fullscreen.href = url;
  });

  // Free the lightbox overlay/listeners when leaving the Atlas view.
  return () => lightbox.destroy();
}

// Full-screen zoomable viewer for the labeled diagrams.
function setupLightbox() {
  let idx = 0;
  const el = document.createElement("div");
  el.className = "lightbox";
  el.hidden = true;
  el.innerHTML = `
    <button class="lb-close" aria-label="Close">×</button>
    <button class="lb-nav lb-prev" aria-label="Previous">‹</button>
    <img class="lb-img" alt="" />
    <button class="lb-nav lb-next" aria-label="Next">›</button>
    <div class="lb-caption"></div>`;
  document.body.appendChild(el);
  const img = el.querySelector(".lb-img");
  const cap = el.querySelector(".lb-caption");

  function show() {
    const d = diagrams[idx];
    img.src = d.file;
    img.alt = d.title;
    img.classList.remove("zoomed");
    cap.innerHTML = `<strong>${d.title}</strong> · ${d.system} · Public domain · <a href="https://commons.wikimedia.org/wiki/File:${d.commons}" target="_blank" rel="noopener">source ↗</a>`;
  }
  function open(i) {
    idx = i;
    show();
    el.hidden = false;
    document.addEventListener("keydown", onKey);
  }
  function close() {
    el.hidden = true;
    document.removeEventListener("keydown", onKey);
  }
  function move(step) {
    idx = (idx + step + diagrams.length) % diagrams.length;
    show();
  }
  function onKey(e) {
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") move(1);
    else if (e.key === "ArrowLeft") move(-1);
  }
  el.querySelector(".lb-close").addEventListener("click", close);
  el.querySelector(".lb-prev").addEventListener("click", () => move(-1));
  el.querySelector(".lb-next").addEventListener("click", () => move(1));
  img.addEventListener("click", () => img.classList.toggle("zoomed"));
  el.addEventListener("click", (e) => {
    if (e.target === el) close();
  });
  return { open, destroy() { close(); el.remove(); } };
}

function resourceSection(title, items) {
  return `
    <section class="atlas-section">
      <h2>${title}</h2>
      <ul class="atlas-links">
        ${items
          .map(
            (i) =>
              `<li><a href="${i.url}" target="_blank" rel="noopener">${i.title} ↗</a></li>`
          )
          .join("")}
      </ul>
    </section>`;
}
