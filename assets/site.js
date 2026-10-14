(function () {
  "use strict";

  const PENDING = "To be added";

  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs || {})) {
      if (value === null || value === undefined || value === false) continue;
      if (key === "class") node.className = value;
      else node.setAttribute(key, value);
    }
    for (const child of children.flat()) {
      if (child === null || child === undefined || child === false) continue;
      node.append(child);
    }
    return node;
  }

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  // Image folders may contain spaces.
  function src(path) {
    return encodeURI(path);
  }

  // Ledger codes (U-01, C-02, A-01, ...) follow the order of PROJECTS.
  function assignCodes() {
    const counts = {};
    for (const project of PROJECTS) {
      const category = CATEGORIES.find((c) => c.id === project.category);
      const sub = category && (category.subs || []).find((s) => s.id === project.sub);
      const group = sub || category;
      if (!group) continue;
      counts[group.id] = (counts[group.id] || 0) + 1;
      project.code = group.code + "-" + pad(counts[group.id]);
      project.groupLabel = sub ? category.label + " / " + sub.label : category.label;
    }
  }

  function projectUrl(project) {
    return "project.html?p=" + encodeURIComponent(project.slug);
  }

  /* Shared chrome */

  function fillSite() {
    const values = {
      name: SITE.name,
      tagline: SITE.role + " / " + SITE.location,
      intro: SITE.intro,
      issued: SITE.issued,
      status: SITE.status,
      email: SITE.email,
      phone: SITE.phone,
    };
    document.querySelectorAll("[data-site]").forEach((node) => {
      const value = values[node.dataset.site];
      if (value) node.textContent = value;
    });
    document.querySelectorAll("[data-site-email]").forEach((node) => {
      node.href = "mailto:" + SITE.email;
    });
    document.querySelectorAll("[data-site-tel]").forEach((node) => {
      if (SITE.phone) node.href = "tel:" + SITE.phone.replace(/\s+/g, "");
      else node.closest("[data-optional]")?.remove();
    });
    document.querySelectorAll("[data-site-link]").forEach((node) => {
      const href = SITE[node.dataset.siteLink];
      if (!href) {
        node.closest("[data-optional]")?.remove();
        return;
      }
      node.href = href;
      // data-show-url: use the address itself as the link text
      if (node.hasAttribute("data-show-url")) {
        node.textContent = href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
      }
    });
  }

  function setupTheme() {
    const button = document.querySelector(".theme-toggle");
    if (!button) return;
    button.addEventListener("click", () => {
      const root = document.documentElement;
      const next = root.dataset.theme === "light" ? "dark" : "light";
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* storage unavailable: the choice just won't persist */
      }
    });
  }

  /* Homepage */

  function row(project) {
    return el(
      "a",
      { class: "row", href: projectUrl(project) },
      el("span", { class: "row-code" }, project.code),
      el(
        "span",
        {},
        el("span", { class: "row-title" }, project.title),
        el(
          "span",
          { class: "row-sum" + (project.summary ? "" : " pending") },
          project.summary || "Summary to be added"
        )
      ),
      el(
        "span",
        { class: "row-side" },
        [project.role, project.year].filter(Boolean).join(" · ") || "Details pending"
      )
    );
  }

  function renderHome() {
    const indexBody = document.querySelector("[data-index]");
    const work = document.querySelector("[data-work]");
    if (!work) return;

    CATEGORIES.forEach((category, i) => {
      const all = PROJECTS.filter((p) => p.category === category.id);
      const main = all.filter((p) => !p.sub);

      if (indexBody) {
        const subCounts = (category.subs || [])
          .map((sub) => {
            const n = all.filter((p) => p.sub === sub.id).length;
            return n ? " + " + n + " " + sub.label.toLowerCase() : "";
          })
          .join("");
        indexBody.append(
          el(
            "tr",
            {},
            el("td", {}, pad(i + 1)),
            el("td", {}, el("a", { href: "#" + category.id }, category.label)),
            el("td", {}, main.length + " " + (main.length === 1 ? "entry" : "entries") + subCounts)
          )
        );
      }

      const section = el(
        "section",
        { class: "block", id: category.id },
        el(
          "div",
          { class: "block-head" },
          el("h2", {}, category.label),
          el("p", {}, category.note)
        ),
        el("div", { class: "rows" }, main.map(row))
      );

      for (const sub of category.subs || []) {
        const entries = all.filter((p) => p.sub === sub.id);
        if (!entries.length) continue;
        section.append(
          el(
            "div",
            { class: "sub-head", id: sub.id },
            el("h3", {}, sub.label),
            el("span", {}, sub.note)
          ),
          el("div", { class: "rows" }, entries.map(row))
        );
      }

      work.append(section);
    });
  }

  /* Project page */

  const DEFAULT_SECTIONS = [
    ["overview", "Overview"],
    ["build", "My role & implementation"],
    ["impact", "Impact"],
  ];

  // sections is either { overview, build, impact } or [{ label, body }, ...].
  function sectionsOf(entity) {
    const sections = entity.sections || {};
    if (Array.isArray(sections)) return sections;
    return DEFAULT_SECTIONS.map(([key, label]) => ({ label: label, body: sections[key] }));
  }

  // Strings become paragraphs, { title, text } objects become labelled points,
  // and { list: [...] } becomes a bullet list.
  function sectionBody(value) {
    const list = (Array.isArray(value) ? value : [value]).filter(Boolean);
    if (!list.length) return [el("p", { class: "pending" }, PENDING)];
    const out = [];
    let points = null;
    for (const item of list) {
      if (typeof item === "string") {
        points = null;
        out.push(el("p", {}, item));
        continue;
      }
      if (item.list) {
        points = null;
        out.push(el("ul", { class: "bullets" }, item.list.map((text) => el("li", {}, text))));
        continue;
      }
      if (!points) {
        points = el("dl", { class: "points" });
        out.push(points);
      }
      points.append(el("div", {}, el("dt", {}, item.title), el("dd", {}, item.text)));
    }
    return out;
  }

  function tags(list) {
    if (!(list || []).length) return el("p", { class: "pending" }, PENDING);
    return el("ul", { class: "tags" }, list.map((item) => el("li", {}, item)));
  }

  // "wide" puts the heading above a full-width body.
  function detail(label, body, extraClass) {
    return el(
      "section",
      { class: "detail" + (extraClass ? " " + extraClass : "") },
      el("h2", {}, label),
      el("div", { class: "detail-body" }, body)
    );
  }

  function metaRow(label, value) {
    if (!value) return null;
    return el("div", {}, el("dt", {}, label + ":"), el("dd", {}, value));
  }

  /* Lightbox: one shared dialog, optionally stepping through a gallery */

  let lightbox = null;
  let lightboxStep = null;

  function openLightbox(path, alt, step) {
    if (!lightbox) {
      lightbox = el("dialog", { class: "lightbox", "aria-label": "Full size image" }, el("img", { alt: "" }));
      lightbox.addEventListener("click", () => lightbox.close());
      lightbox.addEventListener("keydown", (event) => {
        if (!lightboxStep) return;
        if (event.key === "ArrowRight") lightboxStep(1);
        if (event.key === "ArrowLeft") lightboxStep(-1);
      });
      document.body.append(lightbox);
    }
    const img = lightbox.querySelector("img");
    img.src = src(path);
    img.alt = alt;
    lightboxStep = step || null;
    if (!lightbox.open) lightbox.showModal();
  }

  // cover is one image path, or several to show side by side.
  function cover(project) {
    const paths = Array.isArray(project.cover) ? project.cover : [project.cover];
    const buttons = paths.map((path, i) => {
      const alt = project.title + " main image" + (paths.length > 1 ? " " + (i + 1) : "");
      const button = el(
        "button",
        { type: "button", "aria-label": "View " + alt + " full size" },
        el("img", { src: src(path), alt: alt })
      );
      button.addEventListener("click", () => openLightbox(path, alt));
      return button;
    });
    return el("figure", { class: "cover" + (paths.length > 1 ? " multi" : "") }, buttons);
  }

  function sectionDetails(entity) {
    return sectionsOf(entity).map((section) => detail(section.label, sectionBody(section.body)));
  }

  // Stack, type and gallery. showEmpty adds "to be added" slots for missing ones.
  function closingDetails(entity, showEmpty) {
    const hasShots = (entity.shots || []).length > 0;
    return [
      (entity.stack || []).length || showEmpty ? detail("Tech stack & skills", tags(entity.stack)) : null,
      (entity.type || []).length ? detail("Project type", tags(entity.type)) : null,
      hasShots
        ? detail(
            entity.shotsLabel || "Screenshots",
            [entity.shotsNote ? el("p", { class: "gallery-note" }, entity.shotsNote) : null, gallery(entity)],
            "wide"
          )
        : null,
      !hasShots && showEmpty && !entity.noShots
        ? detail(
            "Screenshots",
            el(
              "div",
              { class: "shots" },
              [1, 2, 3].map(() => el("div", { class: "shot-empty" }, "Screenshot pending"))
            )
          )
        : null,
    ];
  }

  // One app inside a multi-app project such as the mobile portfolio.
  function appBlock(app, i) {
    return el(
      "section",
      { class: "app" },
      el(
        "header",
        { class: "app-head" },
        el("p", { class: "eyebrow" }, "App " + pad(i + 1)),
        el("h2", { class: "app-title" }, app.title),
        app.summary ? el("p", { class: "lede" }, app.summary) : null
      ),
      sectionDetails(app),
      closingDetails(app, false)
    );
  }

  function gallery(project) {
    const list = project.shots;
    let current = 0;

    const stageImg = el("img", { alt: "" });
    const stage = el("button", { class: "gallery-stage", type: "button", "aria-label": "View full size" }, stageImg);
    const count = el("span", { class: "gallery-count" });
    const caption = el("span", { class: "gallery-caption" });
    const prev = el("button", { class: "btn", type: "button" }, "← Prev");
    const next = el("button", { class: "btn", type: "button" }, "Next →");
    const strip = el("div", { class: "thumbs" });

    const thumbs = list.map((shot, i) => {
      const thumb = el(
        "button",
        { class: "thumb", type: "button", "aria-label": "Show image " + (i + 1) },
        el("img", { src: src(shot.src), alt: "", loading: "lazy" })
      );
      thumb.addEventListener("click", () => show(i));
      return thumb;
    });
    strip.append(...thumbs);

    function altFor(i) {
      return list[i].caption || project.title + " screenshot " + (i + 1);
    }

    function show(i) {
      current = (i + list.length) % list.length;
      stageImg.src = src(list[current].src);
      stageImg.alt = altFor(current);
      count.textContent = pad(current + 1) + " / " + pad(list.length);
      caption.textContent = list[current].caption || "";
      thumbs.forEach((thumb, j) => thumb.setAttribute("aria-current", j === current ? "true" : "false"));
      const active = thumbs[current];
      strip.scrollLeft = active.offsetLeft - (strip.clientWidth - active.clientWidth) / 2;
    }

    function step(delta) {
      show(current + delta);
      if (lightbox && lightbox.open) openLightbox(list[current].src, altFor(current), step);
    }

    prev.addEventListener("click", () => step(-1));
    next.addEventListener("click", () => step(1));
    stage.addEventListener("click", () => openLightbox(list[current].src, altFor(current), step));

    const root = el(
      "div",
      { class: "gallery" },
      stage,
      el("div", { class: "gallery-bar" }, prev, el("span", {}, count, caption), next),
      strip
    );
    root.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    });
    show(0);
    return root;
  }

  function renderProject() {
    const main = document.querySelector("[data-project]");
    if (!main) return;

    const slug = new URLSearchParams(location.search).get("p");
    const index = PROJECTS.findIndex((p) => p.slug === slug);
    const project = PROJECTS[index];

    if (!project) {
      document.title = "Not found - " + SITE.name;
      main.append(
        el(
          "div",
          { class: "hero project" },
          el(
            "div",
            {},
            el("p", { class: "eyebrow" }, "No such entry"),
            el("h1", {}, "Not in the ledger"),
            el("div", { class: "actions" }, el("a", { class: "btn", href: "index.html" }, "Back to index"))
          )
        )
      );
      return;
    }

    document.title = project.title + " - " + SITE.name;
    const apps = project.apps || [];

    const parts = [
      el("a", { class: "back", href: "index.html#" + (project.sub || project.category) }, "← " + project.groupLabel),
      el(
        "div",
        { class: "hero project" },
        el(
          "div",
          {},
          el("p", { class: "eyebrow" }, project.code),
          el("h1", {}, project.title),
          el("p", { class: "lede" + (project.summary ? "" : " pending") }, project.summary || "Summary to be added"),
          (project.links || []).length
            ? el(
                "div",
                { class: "actions" },
                project.links.map((link) => el("a", { class: "btn", href: link.href }, link.label))
              )
            : null
        ),
        el(
          "dl",
          { class: "meta-box" },
          metaRow("Document", project.code),
          metaRow("Section", project.groupLabel),
          metaRow("Client", project.client),
          metaRow("With", project.org),
          metaRow("Role", project.role),
          metaRow("Year", project.year)
        )
      ),
      project.cover ? cover(project) : null,
      ...sectionDetails(project),
      ...closingDetails(project, !apps.length),
      ...apps.map(appBlock),
    ];
    main.append(...parts.filter(Boolean));

    const prev = PROJECTS[index - 1];
    const next = PROJECTS[index + 1];
    main.append(
      el(
        "nav",
        { class: "pager", "aria-label": "Projects" },
        prev ? el("a", { href: projectUrl(prev) }, el("small", {}, "Previous"), prev.title) : null,
        next ? el("a", { href: projectUrl(next) }, el("small", {}, "Next"), next.title) : null
      )
    );
  }

  assignCodes();
  fillSite();
  setupTheme();
  renderHome();
  renderProject();
})();
