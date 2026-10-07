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

export function renderAtlas(root) {
  let activeSlug = atlasModels[0].slug;

  root.innerHTML = `
    <h1 class="view-title">Anatomy Atlas</h1>
    <p class="view-subtitle">
      Interactive, labeled 3D anatomy plus open study material from the
      <a href="https://anatomytool.org/open3dmodel" target="_blank" rel="noopener">Open 3D Model</a> project.
    </p>

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
      3D models, videos, and presentations © the anatomy departments of Leiden UMC,
      UMC Utrecht, Maastricht UMC, KU Leuven KULAK and collaborators
      (<a href="https://anatomytool.org/open3dmodel" target="_blank" rel="noopener">Open 3D Model</a>),
      licensed <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0</a>.
      Viewer software by D. Jansma (GPL-3.0).
    </p>
  `;

  const iframe = root.querySelector("#atlasIframe");
  const fullscreen = root.querySelector("#atlasFullscreen");

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
