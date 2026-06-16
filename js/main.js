// Smart Computer Training Center — Main JS
// =================================================
// Handles: navbar injection, footer injection, floating WhatsApp,
// toast notifications, tabs, accordion, lightbox, course rendering,
// contact form, newsletter, and scroll-aware effects.

(function () {
  "use strict";

  // ---------- Helpers ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function getCurrentPage() {
    const body = document.body;
    return body.dataset.page || "home";
  }

  function refreshIcons() {
    if (window.lucide && lucide.createIcons) {
      lucide.createIcons();
    }
  }

  // ---------- Toast ----------
  function ensureToastContainer() {
    let c = $("#toast-container");
    if (!c) {
      c = document.createElement("div");
      c.id = "toast-container";
      c.className = "toast-container";
      document.body.appendChild(c);
    }
    return c;
  }

  function toast(message, type = "success", timeout = 3500) {
    const c = ensureToastContainer();
    const t = document.createElement("div");
    t.className = `toast toast-${type}`;
    const iconName = type === "error" ? "circle-x" : "circle-check";
    const color = type === "error" ? "#ef4444" : "#22c55e";
    t.innerHTML = `<i data-lucide="${iconName}" style="color:${color};flex-shrink:0;margin-top:1px;" width="18" height="18"></i><span>${message}</span>`;
    c.appendChild(t);
    refreshIcons();
    setTimeout(() => {
      t.style.opacity = "0";
      t.style.transform = "translateY(-6px)";
      t.style.transition = "all 0.2s ease";
      setTimeout(() => t.remove(), 220);
    }, timeout);
  }
  window.SCTC_toast = toast;

  // ---------- Navbar ----------
  function renderNavbar() {
    const page = getCurrentPage();
    const linksHtml = NAV_LINKS.map(
      (l) =>
        `<a href="${l.href}" class="nav-link ${l.page === page ? "active" : ""}" data-testid="nav-link-${l.label.toLowerCase()}">${l.label}</a>`
    ).join("");

    const mobileLinksHtml = NAV_LINKS.map(
      (l) =>
        `<a href="${l.href}" class="nav-mobile-link ${l.page === page ? "active" : ""}">${l.label}</a>`
    ).join("");

    const enrollLink = WHATSAPP_LINK(`Hi! I want to enrol at ${BUSINESS.name}. Please share details.`);

    return `
      <header id="site-navbar" class="navbar">
        <div class="container-x" style="display:flex;align-items:center;justify-content:space-between;height:64px;">
          <a href="index.html" style="display:flex;align-items:center;gap:0.625rem;text-decoration:none;">
            <span style="display:inline-flex;height:40px;width:40px;align-items:center;justify-content:center;border-radius:0.75rem;background:linear-gradient(135deg,#1e3a8a,#1e40af);color:#fff;box-shadow:0 4px 10px rgba(30,58,138,0.25);">
              <i data-lucide="monitor-smartphone" width="20" height="20"></i>
            </span>
            <span style="display:flex;flex-direction:column;line-height:1.1;">
              <span class="font-display" style="font-weight:700;font-size:1rem;color:#0f172a;">Smart Computer</span>
              <span style="font-size:0.625rem;color:#ea580c;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;">Training Center</span>
            </span>
          </a>

          <nav class="nav-desktop" style="display:none;align-items:center;gap:0.125rem;">
            ${linksHtml}
          </nav>

          <div class="nav-cta-desktop" style="display:none;align-items:center;gap:0.5rem;">
            <a href="tel:${BUSINESS.phoneRaw}" style="display:inline-flex;align-items:center;gap:0.375rem;font-size:0.8125rem;font-weight:500;color:#334155;text-decoration:none;padding:0 0.75rem;">
              <i data-lucide="phone" width="14" height="14" style="color:#ea580c;"></i>${BUSINESS.phone}
            </a>
            <a href="${enrollLink}" target="_blank" rel="noreferrer" class="btn btn-primary">Enroll Now</a>
          </div>

          <button id="mobile-toggle" class="nav-mobile-btn" aria-label="Toggle menu" style="display:inline-flex;align-items:center;justify-content:center;height:40px;width:40px;border-radius:0.5rem;background:transparent;border:0;color:#334155;cursor:pointer;">
            <i data-lucide="menu" width="22" height="22" id="mobile-toggle-icon"></i>
          </button>
        </div>

        <div id="mobile-drawer" style="display:none;background:#fff;border-top:1px solid #e2e8f0;padding:1rem;box-shadow:0 10px 20px rgba(0,0,0,0.06);">
          <div style="display:flex;flex-direction:column;gap:0.125rem;">${mobileLinksHtml}</div>
          <div style="margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
            <a href="tel:${BUSINESS.phoneRaw}" style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;border:1px solid #e2e8f0;border-radius:0.5rem;font-size:0.875rem;color:#334155;text-decoration:none;"><i data-lucide="phone" width="14" height="14" style="color:#ea580c;"></i>${BUSINESS.phone}</a>
            <a href="${enrollLink}" target="_blank" rel="noreferrer" class="btn btn-primary">Enroll Now</a>
          </div>
        </div>
      </header>

      <style>
        @media (min-width: 1024px) {
          .nav-desktop { display: flex !important; }
          .nav-cta-desktop { display: flex !important; }
          .nav-mobile-btn { display: none !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .nav-cta-desktop { display: flex !important; }
        }
      </style>
    `;
  }

  function initNavbar() {
    const slot = $("#nav-slot");
    if (!slot) return;
    slot.outerHTML = renderNavbar();

    // Mobile toggle
    const btn = $("#mobile-toggle");
    const drawer = $("#mobile-drawer");
    const icon = $("#mobile-toggle-icon");
    if (btn && drawer) {
      btn.addEventListener("click", () => {
        const isOpen = drawer.style.display === "block";
        drawer.style.display = isOpen ? "none" : "block";
        icon.setAttribute("data-lucide", isOpen ? "menu" : "x");
        refreshIcons();
      });
    }

    // Scroll state
    const navEl = $("#site-navbar");
    if (navEl) {
      const onScroll = () => {
        if (window.scrollY > 8) navEl.classList.add("scrolled");
        else navEl.classList.remove("scrolled");
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
  }

  // ---------- Footer ----------
  function renderFooter() {
    const linksHtml = NAV_LINKS.map(
      (l) => `<li><a href="${l.href}" style="color:#94a3b8;text-decoration:none;font-size:0.875rem;" onmouseover="this.style.color='#fb923c'" onmouseout="this.style.color='#94a3b8'">${l.label}</a></li>`
    ).join("");

    return `
      <footer style="background:#0f172a;color:#cbd5e1;margin-top:6rem;">
        <div class="container-x" style="padding:4rem 1rem;">
          <div class="footer-grid" style="display:grid;grid-template-columns:1fr;gap:2.5rem;">
            <div>
              <div style="display:flex;align-items:center;gap:0.625rem;margin-bottom:1rem;">
                <span style="display:inline-flex;height:40px;width:40px;align-items:center;justify-content:center;border-radius:0.75rem;background:linear-gradient(135deg,#1d4ed8,#3b82f6);color:#fff;"><i data-lucide="monitor-smartphone" width="20" height="20"></i></span>
                <div>
                  <p class="font-display" style="font-weight:700;color:#fff;margin:0;">Smart Computer</p>
                  <p style="font-size:0.625rem;color:#fb923c;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;margin:0;">Training Center</p>
                </div>
              </div>
              <p style="font-size:0.875rem;color:#94a3b8;margin:0 0 1rem;line-height:1.6;">${BUSINESS.nameHi}. Empowering students with digital skills since 2020.</p>
              <div style="display:flex;gap:0.625rem;">
                ${["facebook", "instagram", "youtube", "linkedin"].map((s) => `<a href="#" class="social-link" style="height:36px;width:36px;border-radius:9999px;background:#1e293b;color:#cbd5e1;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;transition:all 0.2s ease;" onmouseover="this.style.background='#f97316';this.style.color='#fff';" onmouseout="this.style.background='#1e293b';this.style.color='#cbd5e1';"><i data-lucide="${s}" width="16" height="16"></i></a>`).join("")}
              </div>
            </div>

            <div>
              <h3 class="font-display" style="color:#fff;font-weight:600;margin:0 0 1rem;">Quick Links</h3>
              <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem;">${linksHtml}</ul>
            </div>

            <div>
              <h3 class="font-display" style="color:#fff;font-weight:600;margin:0 0 1rem;">Get In Touch</h3>
              <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.75rem;font-size:0.875rem;color:#94a3b8;">
                <li style="display:flex;gap:0.5rem;align-items:flex-start;"><i data-lucide="map-pin" width="16" height="16" style="color:#fb923c;flex-shrink:0;margin-top:2px;"></i><span>${BUSINESS.address}</span></li>
                <li style="display:flex;gap:0.5rem;align-items:flex-start;"><i data-lucide="phone" width="16" height="16" style="color:#fb923c;flex-shrink:0;margin-top:2px;"></i><a href="tel:${BUSINESS.phoneRaw}" style="color:inherit;text-decoration:none;">${BUSINESS.phone}</a></li>
                <li style="display:flex;gap:0.5rem;align-items:flex-start;"><i data-lucide="mail" width="16" height="16" style="color:#fb923c;flex-shrink:0;margin-top:2px;"></i><a href="mailto:${BUSINESS.email}" style="color:inherit;text-decoration:none;">${BUSINESS.email}</a></li>
                <li style="display:flex;gap:0.5rem;align-items:flex-start;"><i data-lucide="clock" width="16" height="16" style="color:#fb923c;flex-shrink:0;margin-top:2px;"></i><span>${BUSINESS.hours}</span></li>
              </ul>
            </div>

            <div>
              <h3 class="font-display" style="color:#fff;font-weight:600;margin:0 0 1rem;">Newsletter</h3>
              <p style="font-size:0.875rem;color:#94a3b8;margin:0 0 0.75rem;">Get monthly tips & new course announcements.</p>
              <form id="newsletter-form" style="display:flex;gap:0.5rem;margin-bottom:1.25rem;">
                <input type="email" id="newsletter-email" class="input" placeholder="you@email.com" style="background:#1e293b;border-color:#334155;color:#fff;" />
                <button type="submit" class="btn btn-primary" style="border-radius:0.5rem;">Subscribe</button>
              </form>
              <div style="border-radius:0.75rem;overflow:hidden;border:1px solid #1e293b;">
                <iframe title="map" src="https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.mapsQuery)}&output=embed" width="100%" height="140" style="border:0;filter:grayscale(0.2) contrast(1.1);" loading="lazy"></iframe>
              </div>
            </div>
          </div>

          <div style="margin-top:3rem;padding-top:1.5rem;border-top:1px solid #1e293b;display:flex;flex-direction:column;gap:0.5rem;align-items:center;justify-content:space-between;font-size:0.875rem;color:#64748b;">
            <p style="margin:0;">© ${new Date().getFullYear()} ${BUSINESS.name}. All rights reserved.</p>
            <p style="margin:0;">Made with <span style="color:#fb923c;">♥</span> in Bihar, India</p>
          </div>
        </div>
        <style>
          @media (min-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (min-width: 1024px) { .footer-grid { grid-template-columns: repeat(4, 1fr) !important; } footer .container-x > div + div { } }
        </style>
      </footer>
    `;
  }

  function initFooter() {
    const slot = $("#footer-slot");
    if (!slot) return;
    slot.outerHTML = renderFooter();

    const form = $("#newsletter-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = $("#newsletter-email").value.trim();
        if (!email || !email.includes("@")) {
          toast("Please enter a valid email", "error");
          return;
        }
        toast("Subscribed! We'll keep you updated.");
        form.reset();
      });
    }
  }

  // ---------- Floating WhatsApp ----------
  function initWhatsAppFloat() {
    const link = WHATSAPP_LINK(`Hello! I'd like to know more about courses at ${BUSINESS.name}.`);
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.className = "whatsapp-float pulse-ring";
    a.setAttribute("aria-label", "Chat on WhatsApp");
    a.innerHTML = `<i data-lucide="message-circle" width="26" height="26"></i>`;
    document.body.appendChild(a);
  }

  // ---------- Tabs (Courses page) ----------
  function initTabs() {
    const tabs = $$("[data-tab]");
    if (!tabs.length) return;
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.tab;
        tabs.forEach((t) => t.classList.toggle("active", t === tab));
        $$("[data-tab-panel]").forEach((p) => {
          p.style.display = p.dataset.tabPanel === target ? "" : "none";
        });
      });
    });
  }

  // ---------- Accordion (FAQ) ----------
  function initAccordion() {
    const items = $$(".accordion-item");
    items.forEach((item) => {
      const trigger = item.querySelector(".accordion-trigger");
      if (!trigger) return;
      trigger.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        // close all
        items.forEach((i) => i.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
      });
    });
  }

  // ---------- Lightbox (Gallery) ----------
  function initLightbox() {
    const grid = $("#gallery-grid");
    if (!grid) return;
    const overlay = $("#lightbox");
    const img = $("#lightbox-img");
    const caption = $("#lightbox-caption");
    const closeBtn = $("#lightbox-close");

    grid.addEventListener("click", (e) => {
      const item = e.target.closest("[data-gallery-index]");
      if (!item) return;
      const idx = +item.dataset.galleryIndex;
      const g = GALLERY[idx];
      img.src = g.url;
      img.alt = g.caption;
      caption.textContent = g.caption;
      overlay.classList.add("open");
    });

    const close = () => overlay.classList.remove("open");
    closeBtn && closeBtn.addEventListener("click", close);
    overlay && overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  // ---------- Course card render ----------
  function courseCardHtml(c) {
    return `
      <article class="card card-hover" style="display:flex;flex-direction:column;overflow:hidden;">
        <div style="aspect-ratio:16/10;overflow:hidden;background:#f1f5f9;position:relative;">
          <img src="${c.image}" alt="${c.title}" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" loading="lazy" />
          <span style="position:absolute;top:0.75rem;left:0.75rem;background:#f97316;color:#fff;font-size:0.75rem;font-weight:600;padding:0.25rem 0.625rem;border-radius:9999px;">₹${c.fee.toLocaleString()}</span>
        </div>
        <div style="padding:1.5rem;flex:1;display:flex;flex-direction:column;">
          <h3 class="font-display" style="font-weight:600;font-size:1.125rem;color:#0f172a;margin:0;">${c.title}</h3>
          ${c.titleFull ? `<p style="font-size:0.75rem;color:#64748b;margin:0.125rem 0 0;">${c.titleFull}</p>` : ""}
          <p style="font-size:0.75rem;color:#ea580c;font-weight:600;margin:0.25rem 0 0;">${c.titleHi}</p>

          <div style="margin-top:1rem;display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;font-size:0.75rem;color:#475569;">
            <span style="display:inline-flex;align-items:center;gap:0.375rem;"><i data-lucide="clock" width="14" height="14" style="color:#1e3a8a;"></i>${c.duration}</span>
            <span style="display:inline-flex;align-items:center;gap:0.375rem;"><i data-lucide="graduation-cap" width="14" height="14" style="color:#1e3a8a;"></i>${c.eligibility}</span>
          </div>

          <div style="margin-top:1.25rem;padding-top:1rem;border-top:1px solid #f1f5f9;display:flex;align-items:center;justify-content:space-between;gap:0.5rem;">
            <button class="btn btn-ghost btn-sm" data-syllabus="${c.slug}">Syllabus</button>
            <a class="btn btn-primary btn-sm" href="${WHATSAPP_LINK(`Hello! I'd like to enrol in the ${c.title} course at ${BUSINESS.name}. Please share details.`)}" target="_blank" rel="noreferrer">Apply Now <i data-lucide="arrow-right" width="14" height="14"></i></a>
          </div>
        </div>
      </article>
    `;
  }

  function syllabusModalHtml(c) {
    return `
      <div style="padding:1.5rem;">
        <h3 class="font-display" style="font-size:1.25rem;font-weight:600;color:#0f172a;margin:0 0 0.5rem;">${c.title} — Syllabus</h3>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.75rem;">
          <span style="display:inline-flex;align-items:center;gap:0.25rem;padding:0.25rem 0.625rem;border-radius:9999px;background:#eff6ff;color:#1e3a8a;font-size:0.8125rem;"><i data-lucide="clock" width="12" height="12"></i> ${c.duration}</span>
          <span style="display:inline-flex;align-items:center;gap:0.25rem;padding:0.25rem 0.625rem;border-radius:9999px;background:#fff7ed;color:#c2410c;font-size:0.8125rem;"><i data-lucide="indian-rupee" width="12" height="12"></i> ${c.feeNote}</span>
        </div>
        <ul style="list-style:none;padding:0;margin:1.25rem 0 0;display:flex;flex-direction:column;gap:0.5rem;">
          ${c.syllabus.map((s) => `<li style="display:flex;align-items:flex-start;gap:0.5rem;font-size:0.875rem;color:#334155;"><i data-lucide="check-circle-2" width="16" height="16" style="color:#16a34a;flex-shrink:0;margin-top:2px;"></i>${s}</li>`).join("")}
        </ul>
        <a href="${WHATSAPP_LINK(`Hello! I'd like to enrol in the ${c.title} course. Please share fee details and timing.`)}" target="_blank" rel="noreferrer" class="btn btn-primary" style="width:100%;margin-top:1.25rem;">
          <i data-lucide="message-circle" width="16" height="16"></i> Apply via WhatsApp
        </a>
      </div>
    `;
  }

  function openSyllabusDialog(c) {
    let dlg = $("#syllabus-dialog");
    if (!dlg) {
      dlg = document.createElement("div");
      dlg.id = "syllabus-dialog";
      dlg.className = "dialog-overlay";
      dlg.innerHTML = `<div class="dialog-content" id="syllabus-content"></div>`;
      document.body.appendChild(dlg);
      dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.classList.remove("open"); });
    }
    $("#syllabus-content").innerHTML = syllabusModalHtml(c);
    dlg.classList.add("open");
    refreshIcons();
  }

  function renderCoursesGrid() {
    const grid = $("#courses-grid");
    if (!grid) return;

    const renderList = (list) =>
      `<div style="display:grid;grid-template-columns:1fr;gap:1.5rem;" class="courses-grid-inner">${list.map(courseCardHtml).join("")}</div>`;

    grid.innerHTML = `
      <div data-tab-panel="all">${renderList(ALL_COURSES())}</div>
      <div data-tab-panel="basic" style="display:none;">${renderList(COURSES.basic)}</div>
      <div data-tab-panel="professional" style="display:none;">${renderList(COURSES.professional)}</div>
      <div data-tab-panel="advanced" style="display:none;">${renderList(COURSES.advanced)}</div>
    `;

    // Apply responsive grid
    const style = document.createElement("style");
    style.textContent = `
      @media (min-width:640px) { .courses-grid-inner { grid-template-columns: 1fr 1fr !important; } }
      @media (min-width:1024px) { .courses-grid-inner { grid-template-columns: repeat(3, 1fr) !important; } }
    `;
    document.head.appendChild(style);

    // Bind syllabus buttons
    $$("[data-syllabus]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const c = FIND_COURSE(btn.dataset.syllabus);
        if (c) openSyllabusDialog(c);
      });
    });
  }

  // ---------- Contact Form ----------
  function initContactForm() {
    const form = $("#contact-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#contact-name").value.trim();
      const phone = $("#contact-phone").value.trim();
      const email = $("#contact-email").value.trim();
      const course = $("#contact-course").value.trim();
      const message = $("#contact-message").value.trim();
      if (!name || !phone) {
        toast("Please fill in your name and phone number.", "error");
        return;
      }
      const msg = `Hello ${BUSINESS.name}!

I would like to enquire about your courses.

Name: ${name}
Phone: ${phone}${email ? `\nEmail: ${email}` : ""}${course ? `\nInterested in: ${course}` : ""}

Message:
${message || "Please share details."}`;
      window.open(WHATSAPP_LINK(msg), "_blank");
      toast("Opening WhatsApp — your details are pre-filled!");
    });
  }

  // ---------- Boot ----------
  document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initFooter();
    initWhatsAppFloat();
    renderCoursesGrid();
    initTabs();
    initAccordion();
    initLightbox();
    initContactForm();
    refreshIcons();
  });
})();
