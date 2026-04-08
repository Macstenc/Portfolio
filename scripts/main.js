(function () {
  const app = window.PORTFOLIO_DATA;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const state = {
    lang: getInitialLanguage(),
    filter: "all",
    revealObserver: null,
    sectionObserver: null
  };

  const dom = {};

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    cacheDom();
    bindEvents();
    render();
    updateYear();
    updateBackToTop();
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    window.addEventListener("resize", handleResize);
  }

  function cacheDom() {
    dom.siteNav = document.getElementById("site-nav");
    dom.navToggle = document.getElementById("nav-toggle");
    dom.navList = document.getElementById("primary-menu");
    dom.langSwitch = document.getElementById("lang-switch");
    dom.brandName = document.getElementById("brand-name");
    dom.brandRole = document.getElementById("brand-role");
    dom.heroEyebrow = document.getElementById("hero-eyebrow");
    dom.heroName = document.getElementById("hero-name");
    dom.heroRole = document.getElementById("hero-role");
    dom.heroSummary = document.getElementById("hero-summary");
    dom.heroStatus = document.getElementById("hero-status");
    dom.heroHighlights = document.getElementById("hero-highlights");
    dom.heroProjectsCta = document.getElementById("hero-projects-cta");
    dom.heroCvCta = document.getElementById("hero-cv-cta");
    dom.heroStats = document.getElementById("hero-stats");
    dom.profileImage = document.getElementById("profile-image");
    dom.profileCaptionLabel = document.getElementById("profile-caption-label");
    dom.profileMeta = document.getElementById("profile-meta");
    dom.aboutStoryTitle = document.getElementById("about-story-title");
    dom.aboutStory = document.getElementById("about-story");
    dom.aboutPrinciplesTitle = document.getElementById("about-principles-title");
    dom.aboutPrinciples = document.getElementById("about-principles");
    dom.skillsGroups = document.getElementById("skills-groups");
    dom.experienceTimeline = document.getElementById("experience-timeline");
    dom.projectFilterLabel = document.getElementById("project-filter-label");
    dom.projectFilters = document.getElementById("project-filters");
    dom.projectGrid = document.getElementById("project-grid");
    dom.educationGrid = document.getElementById("education-grid");
    dom.developmentGrid = document.getElementById("development-grid");
    dom.contactLinks = document.getElementById("contact-links");
    dom.contactNote = document.getElementById("contact-note");
    dom.contactForm = document.getElementById("contact-form");
    dom.contactFormTitle = document.getElementById("contact-form-title");
    dom.contactFormIntro = document.getElementById("contact-form-intro");
    dom.contactFormFields = document.getElementById("contact-form-fields");
    dom.contactSubmit = document.getElementById("contact-submit");
    dom.formStatus = document.getElementById("form-status");
    dom.footerName = document.getElementById("footer-name");
    dom.footerRole = document.getElementById("footer-role");
    dom.footerSummary = document.getElementById("footer-summary");
    dom.footerNav = document.getElementById("footer-nav");
    dom.footerLinks = document.getElementById("footer-links");
    dom.footerCopy = document.getElementById("footer-copy");
    dom.currentYear = document.getElementById("current-year");
    dom.backToTop = document.getElementById("back-to-top");
    dom.backToTopLabel = document.getElementById("back-to-top-label");
  }

  function bindEvents() {
    dom.navToggle.addEventListener("click", toggleMenu);
    dom.langSwitch.addEventListener("click", handleLanguageClick);
    dom.projectFilters.addEventListener("click", handleFilterClick);
    dom.contactForm.addEventListener("submit", handleContactSubmit);
    dom.siteNav.addEventListener("click", handleNavClick);
    dom.backToTop.addEventListener("click", scrollToTop);
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("click", handleDocumentClick);
  }

  function render() {
    const page = getPage();
    document.documentElement.lang = state.lang;
    state.filter = page.projects.filters.includes(state.filter) ? state.filter : "all";
    applySeo(page);
    renderHeader(page);
    renderHero(page);
    renderSectionHeadings(page.sections);
    renderAbout(page);
    renderSkills(page);
    renderExperience(page);
    renderProjects(page);
    renderEducation(page);
    renderDevelopment(page);
    renderContact(page);
    renderFooter(page);
    updateLanguageButtons();
    updateNavToggleLabel(page);
    updateBackToTop();
    setupProfileImage(page);
    setupRevealObserver();
    setupSectionObserver();
  }

  function renderHeader(page) {
    dom.brandName.textContent = app.settings.fullName;
    dom.brandRole.textContent = page.header.brandRole;
    dom.langSwitch.setAttribute("aria-label", page.header.langLabel);
    dom.navList.innerHTML = page.header.nav
      .map((item) => `<li><a href="#${item.id}" data-section="${item.id}">${item.label}</a></li>`)
      .join("");
  }

  function renderHero(page) {
    dom.heroEyebrow.textContent = page.hero.eyebrow;
    dom.heroName.textContent = app.settings.fullName;
    dom.heroRole.textContent = page.hero.role;
    dom.heroSummary.textContent = page.hero.summary;
    dom.heroStatus.textContent = page.hero.status;
    dom.heroProjectsCta.textContent = page.hero.primaryCta;
    dom.heroCvCta.textContent = page.hero.secondaryCta;
    dom.heroCvCta.href = app.settings.cvFile;
    dom.heroCvCta.setAttribute("download", "");
    dom.heroHighlights.innerHTML = page.hero.highlights.map((item) => `<li>${item}</li>`).join("");
    dom.heroStats.innerHTML = page.hero.stats
      .map((item) => `<div><dd>${item.value}</dd><dt>${item.label}</dt></div>`)
      .join("");
    dom.profileCaptionLabel.textContent = page.hero.profileLabel;
    dom.profileMeta.innerHTML = page.hero.profileMeta
      .map((item) => `<li><span class="meta-label">${item.label}</span><span class="meta-value">${item.value}</span></li>`)
      .join("");
  }

  function renderSectionHeadings(sections) {
    Object.entries(sections).forEach(([key, value]) => {
      setText(`${key}-tag`, value.tag);
      setText(`${key}-heading`, value.heading);
      setText(`${key}-intro`, value.intro);
    });
  }

  function renderAbout(page) {
    dom.aboutStoryTitle.textContent = page.about.storyTitle;
    dom.aboutStory.innerHTML = page.about.story.map((item) => `<p>${item}</p>`).join("");
    dom.aboutPrinciplesTitle.textContent = page.about.principlesTitle;
    dom.aboutPrinciples.innerHTML = page.about.principles.map((item) => `<li>${item}</li>`).join("");
  }

  function renderSkills(page) {
    dom.skillsGroups.innerHTML = page.skills.groups
      .map(
        (group) => `
          <article class="panel skill-card reveal">
            <h3>${group.title}</h3>
            <p class="card-copy">${group.copy}</p>
            <ul class="skill-tags">
              ${group.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </article>
        `
      )
      .join("");
  }

  function renderExperience(page) {
    dom.experienceTimeline.innerHTML = page.experience.items
      .map(
        (item) => `
          <li class="timeline-item reveal">
            <article class="timeline-card">
              <div class="timeline-topline">
                <span class="timeline-period">${item.period}</span>
                <span class="timeline-type">${item.type}</span>
              </div>
              <h3>${item.role}</h3>
              <p class="timeline-company">${item.company}</p>
              <p class="timeline-summary">${item.summary}</p>
              <ul class="timeline-list">
                ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
              </ul>
            </article>
          </li>
        `
      )
      .join("");
  }

  function renderProjects(page) {
    dom.projectFilterLabel.textContent = page.projects.filterLabel;
    dom.projectFilters.innerHTML = [
      `<button class="filter-button${state.filter === "all" ? " is-active" : ""}" type="button" data-filter="all">${page.projects.allLabel}</button>`,
      ...page.projects.filters.map(
        (item) =>
          `<button class="filter-button${state.filter === item ? " is-active" : ""}" type="button" data-filter="${item}">${item}</button>`
      )
    ].join("");

    const visibleProjects = page.projects.items.filter(
      (project) => state.filter === "all" || project.filters.includes(state.filter)
    );

    dom.projectGrid.innerHTML = visibleProjects
      .map(
        (project) => `
          <article class="project-card reveal">
            <div class="project-media">
              <img src="${project.image}" alt="${project.imageAlt}" loading="lazy" decoding="async">
            </div>
            <div class="project-body">
              <div class="project-topline">
                <span class="project-type">${project.type}</span>
              </div>
              <h3>${project.title}</h3>
              <p class="project-summary">${project.summary}</p>
              <ul class="project-stack">
                ${project.stack.map((item) => `<li>${item}</li>`).join("")}
              </ul>
              <ul class="project-feature-list">
                ${project.features.map((item) => `<li>${item}</li>`).join("")}
              </ul>
              <div class="project-actions">
                <a class="link-inline" href="${project.repoUrl}" target="_blank" rel="noreferrer">${page.projects.repositoryLabel}</a>
                ${
                  project.liveUrl
                    ? `<a class="button button-secondary" href="${project.liveUrl}" target="_blank" rel="noreferrer">${page.projects.liveLabel}</a>`
                    : `<span class="action-muted">${page.projects.codeOnlyLabel}</span>`
                }
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderEducation(page) {
    dom.educationGrid.innerHTML = page.education.items
      .map(
        (item) => `
          <article class="panel info-card reveal">
            <h3>${item.title}</h3>
            <p class="meta-label">${item.meta}</p>
            <p><strong>${item.subtitle}</strong></p>
            <p>${item.description}</p>
          </article>
        `
      )
      .join("");
  }

  function renderDevelopment(page) {
    dom.developmentGrid.innerHTML = page.development.items
      .map(
        (item) => `
          <article class="panel growth-card reveal">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </article>
        `
      )
      .join("");
  }

  function renderContact(page) {
    dom.contactLinks.innerHTML = `
      <div class="contact-links-block">
        <h3>${page.contact.cardsTitle}</h3>
        <div class="contact-methods">
          ${page.contact.cards.map(renderContactCard).join("")}
        </div>
      </div>
    `;
    dom.contactNote.innerHTML = `
      <div class="contact-note-block">
        <h3>${page.contact.noteTitle}</h3>
        ${page.contact.noteText.map((item) => `<p class="contact-description">${item}</p>`).join("")}
      </div>
    `;
    dom.contactFormTitle.textContent = page.contact.formTitle;
    dom.contactFormIntro.textContent = page.contact.formIntro;
    dom.contactSubmit.textContent = page.contact.submitLabel;
    dom.contactFormFields.innerHTML = page.contact.fields
      .map((field) => renderFormField(field))
      .join("");
    dom.formStatus.textContent = "";
  }

  function renderFooter(page) {
    const navLinks = page.header.nav.map((item) => `<li><a href="#${item.id}">${item.label}</a></li>`).join("");
    const resourceLinks = page.footer.resources
      .map((item) => `<li><a href="${item.href}"${getAnchorAttrs(item.href)}${item.href.endsWith(".pdf") ? " download" : ""}>${item.label}</a></li>`)
      .join("");

    dom.footerName.textContent = app.settings.fullName;
    dom.footerRole.textContent = page.header.brandRole;
    dom.footerSummary.textContent = page.footer.summary;
    dom.footerNav.innerHTML = `<strong>${page.footer.quickLinksTitle}</strong><ul class="footer-link-list">${navLinks}</ul>`;
    dom.footerLinks.innerHTML = `<strong>${page.footer.resourcesTitle}</strong><ul class="footer-social-list">${resourceLinks}</ul>`;
    dom.footerCopy.innerHTML = `&copy; <span id="current-year">${new Date().getFullYear()}</span> ${app.settings.fullName}. ${page.footer.copy}`;
    dom.currentYear = document.getElementById("current-year");
  }

  function renderContactCard(item) {
    const wrapper = item.href ? "a" : "div";
    return `
      <${wrapper} class="contact-card" ${item.href ? `href="${item.href}"${getAnchorAttrs(item.href)}` : ""}>
        <span class="contact-icon" aria-hidden="true">${getIcon(item.kind)}</span>
        <span>
          <strong>${item.label}</strong>
          <span class="meta-value">${item.value}</span>
          <span class="contact-description">${item.description}</span>
        </span>
      </${wrapper}>
    `;
  }

  function renderFormField(field) {
    if (field.type === "textarea") {
      return `
        <div class="form-field">
          <label for="contact-${field.name}">${field.label}</label>
          <textarea id="contact-${field.name}" name="${field.name}" placeholder="${field.placeholder}" autocomplete="${field.autocomplete}" ${field.required ? "required" : ""}></textarea>
        </div>
      `;
    }

    return `
      <div class="form-field">
        <label for="contact-${field.name}">${field.label}</label>
        <input id="contact-${field.name}" name="${field.name}" type="${field.type}" placeholder="${field.placeholder}" autocomplete="${field.autocomplete}" ${field.required ? "required" : ""}>
      </div>
    `;
  }

  function handleLanguageClick(event) {
    const button = event.target.closest("[data-lang]");
    if (!button || button.dataset.lang === state.lang) {
      return;
    }
    state.lang = button.dataset.lang;
    state.filter = "all";
    persistLanguage(state.lang);
    render();
    closeMenu();
  }

  function handleFilterClick(event) {
    const button = event.target.closest("[data-filter]");
    if (!button) {
      return;
    }
    state.filter = button.dataset.filter;
    renderProjects(getPage());
    setupRevealObserver();
  }

  function handleContactSubmit(event) {
    event.preventDefault();
    const page = getPage();
    if (!dom.contactForm.reportValidity()) {
      return;
    }

    const formData = new FormData(dom.contactForm);
    const name = String(formData.get("name")).trim();
    const email = String(formData.get("email")).trim();
    const subject = String(formData.get("subject")).trim();
    const message = String(formData.get("message")).trim();
    const body = [
      page.contact.bodyIntro,
      "",
      `${page.contact.fields[0].label}: ${name}`,
      `${page.contact.fields[1].label}: ${email}`,
      `${page.contact.fields[2].label}: ${subject}`,
      "",
      message
    ].join("\n");

    window.location.href = `mailto:macstenc@gmail.com?subject=${encodeURIComponent(
      `${page.contact.subjectPrefix}: ${subject}`
    )}&body=${encodeURIComponent(body)}`;
    dom.formStatus.textContent = page.contact.statusMessage;
  }

  function handleNavClick(event) {
    if (event.target.closest('a[href^="#"]')) {
      closeMenu();
    }
  }

  function handleKeydown(event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  }

  function handleDocumentClick(event) {
    if (!dom.siteNav.contains(event.target) && !dom.langSwitch.contains(event.target)) {
      closeMenu();
    }
  }

  function toggleMenu() {
    dom.siteNav.classList.toggle("is-open");
    const isOpen = dom.siteNav.classList.contains("is-open");
    dom.navToggle.setAttribute("aria-expanded", String(isOpen));
    updateNavToggleLabel(getPage());
  }

  function closeMenu() {
    dom.siteNav.classList.remove("is-open");
    dom.navToggle.setAttribute("aria-expanded", "false");
    updateNavToggleLabel(getPage());
  }

  function handleResize() {
    if (window.innerWidth > 920) {
      closeMenu();
    }
  }

  function updateNavToggleLabel(page) {
    const isOpen = dom.siteNav.classList.contains("is-open");
    dom.navToggle.setAttribute("aria-label", isOpen ? page.header.closeMenuLabel : page.header.menuLabel);
  }

  function setupProfileImage(page) {
    dom.profileImage.alt = page.hero.profileAlt;
    dom.profileImage.onerror = function () {
      if (!this.src.endsWith(app.settings.profileFallback)) {
        this.src = app.settings.profileFallback;
        this.alt = page.hero.profileFallbackAlt;
      }
    };
    dom.profileImage.src = app.settings.profileImage;
  }

  function applySeo(page) {
    const siteUrl = ensureTrailingSlash(app.settings.siteUrl);
    const canonical = siteUrl;
    const imageUrl = new URL(page.meta.ogImage, siteUrl).href;
    document.title = page.meta.title;
    setMeta('meta[name="description"]', "content", page.meta.description);
    setMeta('link[rel="canonical"]', "href", canonical);
    setMeta('meta[property="og:title"]', "content", page.meta.title);
    setMeta('meta[property="og:description"]', "content", page.meta.description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:image"]', "content", imageUrl);
    setMeta('meta[property="og:locale"]', "content", page.meta.locale);
    setMeta('meta[name="twitter:title"]', "content", page.meta.title);
    setMeta('meta[name="twitter:description"]', "content", page.meta.description);
    setMeta('meta[name="twitter:image"]', "content", imageUrl);
  }

  function setupRevealObserver() {
    if (state.revealObserver) {
      state.revealObserver.disconnect();
    }

    const elements = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    state.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            state.revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    elements.forEach((element) => state.revealObserver.observe(element));
  }

  function setupSectionObserver() {
    if (state.sectionObserver) {
      state.sectionObserver.disconnect();
    }

    const sections = document.querySelectorAll("main section[id]");
    const links = dom.navList.querySelectorAll("a[data-section]");
    if (!("IntersectionObserver" in window)) {
      if (links[0]) {
        links[0].classList.add("is-active");
      }
      return;
    }

    state.sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => state.sectionObserver.observe(section));
  }

  function setActiveNav(id) {
    dom.navList.querySelectorAll("a[data-section]").forEach((link) => {
      const isActive = link.dataset.section === id;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function updateBackToTop() {
    const page = getPage();
    dom.backToTop.hidden = window.scrollY < 640;
    dom.backToTopLabel.textContent = page.ui.backToTop;
    dom.backToTop.setAttribute("aria-label", page.ui.backToTop);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  function updateLanguageButtons() {
    dom.langSwitch.querySelectorAll("[data-lang]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.lang === state.lang);
    });
  }

  function updateYear() {
    if (dom.currentYear) {
      dom.currentYear.textContent = String(new Date().getFullYear());
    }
  }

  function getPage() {
    return app.content[state.lang];
  }

  function setText(id, value) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  }

  function setMeta(selector, attribute, value) {
    const element = document.querySelector(selector);
    if (element) {
      element.setAttribute(attribute, value);
    }
  }

  function getAnchorAttrs(href) {
    return /^https?:\/\//.test(href) ? ' target="_blank" rel="noreferrer"' : "";
  }

  function ensureTrailingSlash(url) {
    return url.endsWith("/") ? url : `${url}/`;
  }

  function getInitialLanguage() {
    try {
      const stored = window.localStorage.getItem("portfolio-lang");
      if (stored && app.content[stored]) {
        return stored;
      }
    } catch (error) {
      // Ignore storage issues and fall back to browser language.
    }
    return navigator.language.toLowerCase().startsWith("pl") ? "pl" : app.settings.defaultLang;
  }

  function persistLanguage(lang) {
    try {
      window.localStorage.setItem("portfolio-lang", lang);
    } catch (error) {
      // Ignore storage issues in restricted browsing contexts.
    }
  }

  function getIcon(kind) {
    const icons = {
      email: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 6.5h16v11H4z" stroke="currentColor" stroke-width="1.6"/><path d="m5 7 7 6 7-6" stroke="currentColor" stroke-width="1.6"/></svg>',
      phone: '<svg viewBox="0 0 24 24" fill="none"><path d="M7.2 4h2.4l1.2 4-1.5 1.5a14.7 14.7 0 0 0 5.2 5.2L16 13l4 1.2v2.4a1.6 1.6 0 0 1-1.6 1.6A14.4 14.4 0 0 1 4 5.6 1.6 1.6 0 0 1 5.6 4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
      github: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3.8a8.6 8.6 0 0 0-2.7 16.8c.4.1.5-.2.5-.4v-1.5c-2.2.5-2.7-.9-2.7-.9-.4-.9-.9-1.2-.9-1.2-.7-.5 0-.5 0-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.8 2.3.6.1-.5.3-.8.5-1-1.8-.2-3.6-.9-3.6-4a3.2 3.2 0 0 1 .8-2.2 2.9 2.9 0 0 1 .1-2.2s.7-.2 2.3.8a7.8 7.8 0 0 1 4.2 0c1.6-1 2.3-.8 2.3-.8.3.8.2 1.7.1 2.2a3.2 3.2 0 0 1 .8 2.2c0 3.1-1.9 3.8-3.6 4 .3.2.6.7.6 1.5v2.2c0 .2.2.5.5.4A8.6 8.6 0 0 0 12 3.8Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>',
      linkedin: '<svg viewBox="0 0 24 24" fill="none"><path d="M7 9.5V19M7 6.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM11.3 19v-5.3a2.7 2.7 0 1 1 5.4 0V19M11.3 10h5.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      location: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 20s6-5 6-10a6 6 0 1 0-12 0c0 5 6 10 6 10Z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="10" r="2.2" stroke="currentColor" stroke-width="1.6"/></svg>'
    };
    return icons[kind] || icons.location;
  }
})();
