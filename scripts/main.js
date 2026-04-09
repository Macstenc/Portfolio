(function () {
  const app = window.PORTFOLIO_DATA;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const stackedNavBreakpoint = 1480;
  const compactNavBreakpoint = 1180;
  const state = {
    lang: getInitialLanguage(),
    theme: getInitialTheme(),
    filter: "all",
    revealObserver: null,
    sectionObserver: null
  };

  const dom = {};

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    cacheDom();
    bindEvents();
    applyTheme(state.theme, { persist: false });
    render();
    updateYear();
    updateBackToTop(getPage());
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(handleResize).catch(() => {});
    }
  }

  function cacheDom() {
    dom.brand = document.querySelector(".brand");
    dom.siteHeader = document.querySelector(".site-header");
    dom.headerInner = document.querySelector(".header-inner");
    dom.headerTools = document.querySelector(".header-tools");
    dom.headerPreferencesSlot = document.getElementById("header-preferences-slot");
    dom.preferenceSwitches = document.getElementById("preference-switches");
    dom.siteNav = document.getElementById("site-nav");
    dom.navToggle = document.getElementById("nav-toggle");
    dom.navPanel = document.getElementById("nav-panel");
    dom.navList = document.getElementById("primary-menu");
    dom.navPreferencesSlot = document.getElementById("nav-preferences-slot");
    dom.themeSwitch = document.getElementById("theme-switch");
    dom.themeButtons = Array.from(dom.themeSwitch.querySelectorAll("[data-theme]"));
    dom.langSwitch = document.getElementById("lang-switch");
    dom.langButtons = Array.from(dom.langSwitch.querySelectorAll("[data-lang]"));
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
    dom.themeSwitch.addEventListener("click", handleThemeClick);
    dom.themeSwitch.addEventListener("keydown", handleThemeKeydown);
    dom.langSwitch.addEventListener("click", handleLanguageClick);
    dom.langSwitch.addEventListener("keydown", handleLanguageKeydown);
    dom.projectFilters.addEventListener("click", handleFilterClick);
    dom.siteNav.addEventListener("click", handleNavClick);
    dom.backToTop.addEventListener("click", scrollToTop);
    document.addEventListener("keydown", handleGlobalKeydown);
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
    updateThemeButtons(page);
    syncHeaderLayout();
    updateNavToggleLabel(page);
    updateBackToTop(page);
    setupProfileImage(page);
    setupRevealObserver();
    setupSectionObserver();
    handleScroll();
  }

  function renderHeader(page) {
    dom.brandName.textContent = app.settings.fullName;
    dom.brandRole.textContent = page.header.brandRole;
    dom.langSwitch.setAttribute("aria-label", page.header.langLabel);
    dom.themeSwitch.setAttribute("aria-label", page.header.themeLabel);
    dom.navList.innerHTML = page.header.nav
      .map((item) => `<li><a href="#${item.id}" data-section="${item.id}">${item.label}</a></li>`)
      .join("");

    dom.themeButtons.forEach((button) => {
      const themeName = button.dataset.theme;
      const label = page.header.themes[themeName];
      const labelElement = button.querySelector(".theme-button-label");
      if (labelElement) {
        labelElement.textContent = label;
      }
      button.setAttribute("aria-label", label);
      button.title = label;
    });
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
    const activeFilter = state.filter;
    const items = activeFilter === "all"
      ? page.projects.items
      : page.projects.items.filter((item) => item.filters.includes(activeFilter));

    dom.projectFilterLabel.textContent = page.projects.filterLabel;
    dom.projectFilters.innerHTML = [
      `<button class="filter-button${activeFilter === "all" ? " is-active" : ""}" type="button" data-filter="all">${page.projects.allLabel}</button>`,
      ...page.projects.filters.map(
        (filter) => `
          <button class="filter-button${activeFilter === filter ? " is-active" : ""}" type="button" data-filter="${filter}">
            ${filter}
          </button>
        `
      )
    ].join("");

    dom.projectGrid.innerHTML = items
      .map((item) => {
        const repoAction = item.repoUrl
          ? `<a class="link-inline" href="${item.repoUrl}"${getAnchorAttrs(item.repoUrl)}>${page.projects.repositoryLabel}</a>`
          : "";
        const liveAction = item.liveUrl
          ? `<a class="link-inline" href="${item.liveUrl}"${getAnchorAttrs(item.liveUrl)}>${page.projects.liveLabel}</a>`
          : `<span class="action-muted">${page.projects.codeOnlyLabel}</span>`;

        return `
          <article class="project-card reveal">
            <div class="project-media">
              <img src="${item.image}" alt="${item.imageAlt}" width="960" height="600" loading="lazy" decoding="async">
            </div>
            <div class="project-body">
              <div class="project-topline">
                <span class="project-type">${item.type}</span>
              </div>
              <h3>${item.title}</h3>
              <p class="project-summary">${item.summary}</p>
              <ul class="project-stack">
                ${item.stack.map((stackItem) => `<li>${stackItem}</li>`).join("")}
              </ul>
              <ul class="project-feature-list">
                ${item.features.map((feature) => `<li>${feature}</li>`).join("")}
              </ul>
              <div class="project-actions">
                ${repoAction}
                ${liveAction}
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderEducation(page) {
    dom.educationGrid.innerHTML = page.education.items
      .map(
        (item) => `
          <article class="panel info-card reveal">
            <h3>${item.title}</h3>
            <p class="meta-label">${item.meta}</p>
            <p class="meta-value">${item.subtitle}</p>
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
          ${page.contact.cards.map((item) => renderContactCard(item)).join("")}
        </div>
      </div>
    `;

    dom.contactNote.innerHTML = `
      <div class="contact-note-block">
        <div class="contact-note-header">
          <h3>${page.contact.noteTitle}</h3>
          <p class="card-copy">${page.contact.noteText[0]}</p>
        </div>
        <div class="contact-note-grid">
          <div class="contact-copy-group">
            ${page.contact.noteText.slice(1).map((item) => `<p class="card-copy">${item}</p>`).join("")}
          </div>
          <div class="contact-copy-group">
            <h4 class="contact-subtitle">${page.contact.availabilityTitle}</h4>
          ${page.contact.availabilityText.map((item) => `<p class="card-copy">${item}</p>`).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderFooter(page) {
    dom.footerName.textContent = app.settings.fullName;
    dom.footerRole.textContent = page.header.brandRole;
    dom.footerSummary.textContent = page.footer.summary;
    dom.footerNav.innerHTML = `
      <strong>${page.footer.quickLinksTitle}</strong>
      <ul class="footer-link-list">
        ${page.header.nav.map((item) => `<li><a href="#${item.id}">${item.label}</a></li>`).join("")}
      </ul>
    `;
    dom.footerLinks.innerHTML = `
      <strong>${page.footer.resourcesTitle}</strong>
      <ul class="footer-social-list">
        ${page.footer.resources
          .map((item) => `<li><a href="${item.href}"${getAnchorAttrs(item.href)}>${item.label}</a></li>`)
          .join("")}
      </ul>
    `;
    dom.footerCopy.innerHTML = `&copy; <span id="current-year"></span> ${app.settings.fullName}. ${page.footer.copy}`;
    dom.currentYear = document.getElementById("current-year");
    updateYear();
  }

  function renderContactCard(item) {
    const icon = getIcon(item.kind);
    const inner = `
      <span class="contact-icon" aria-hidden="true">${icon}</span>
      <span>
        <strong>${item.label}</strong>
        <span class="meta-value">${item.value}</span>
        <span class="contact-description">${item.description}</span>
      </span>
    `;

    if (item.href) {
      return `<a class="contact-card" href="${item.href}"${getAnchorAttrs(item.href)}>${inner}</a>`;
    }

    return `<article class="contact-card">${inner}</article>`;
  }

  function handleThemeClick(event) {
    const button = event.target.closest("[data-theme]");
    if (!button) {
      return;
    }

    applyTheme(button.dataset.theme);
  }

  function handleThemeKeydown(event) {
    const currentButton = event.target.closest("[data-theme]");
    if (!currentButton) {
      return;
    }

    const index = dom.themeButtons.indexOf(currentButton);
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % dom.themeButtons.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + dom.themeButtons.length) % dom.themeButtons.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = dom.themeButtons.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    dom.themeButtons[nextIndex].focus();
    applyTheme(dom.themeButtons[nextIndex].dataset.theme);
  }

  function handleLanguageClick(event) {
    const button = event.target.closest("[data-lang]");
    if (!button || button.dataset.lang === state.lang) {
      return;
    }

    state.lang = button.dataset.lang;
    persistLanguage(state.lang);
    closeMenu();
    render();
  }

  function handleLanguageKeydown(event) {
    const currentButton = event.target.closest("[data-lang]");
    if (!currentButton) {
      return;
    }

    const index = dom.langButtons.indexOf(currentButton);
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % dom.langButtons.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + dom.langButtons.length) % dom.langButtons.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = dom.langButtons.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    dom.langButtons[nextIndex].focus();

    if (dom.langButtons[nextIndex].dataset.lang !== state.lang) {
      state.lang = dom.langButtons[nextIndex].dataset.lang;
      persistLanguage(state.lang);
      closeMenu();
      render();
    }
  }

  function handleFilterClick(event) {
    const button = event.target.closest("[data-filter]");
    if (!button || button.dataset.filter === state.filter) {
      return;
    }

    state.filter = button.dataset.filter;
    renderProjects(getPage());
    setupRevealObserver();
  }

  function handleNavClick(event) {
    const link = event.target.closest("a[href^='#']");
    if (!link) {
      return;
    }

    closeMenu();
  }

  function handleGlobalKeydown(event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  }

  function handleDocumentClick(event) {
    if (!dom.siteNav.classList.contains("is-open")) {
      return;
    }

    if (!dom.siteNav.contains(event.target)) {
      closeMenu();
    }
  }

  function toggleMenu() {
    const willOpen = !dom.siteNav.classList.contains("is-open");
    dom.siteNav.classList.toggle("is-open", willOpen);
    dom.navToggle.setAttribute("aria-expanded", String(willOpen));
    updateNavToggleLabel(getPage());
  }

  function closeMenu() {
    dom.siteNav.classList.remove("is-open");
    dom.navToggle.setAttribute("aria-expanded", "false");
    updateNavToggleLabel(getPage());
  }

  function handleResize() {
    syncHeaderLayout();
  }

  function handleScroll() {
    updateBackToTop(getPage());
  }

  function updateNavToggleLabel(page) {
    const isOpen = dom.siteNav.classList.contains("is-open");
    dom.navToggle.setAttribute("aria-label", isOpen ? page.header.closeMenuLabel : page.header.menuLabel);
  }

  function syncHeaderLayout() {
    if (!dom.siteHeader || !dom.headerInner) {
      return;
    }

    dom.siteHeader.classList.remove("is-compact");
    dom.siteHeader.classList.remove("is-stacked");
    syncPreferencePlacement(false);

    const headerWidth = dom.headerInner.clientWidth;
    const brandWidth = dom.brand ? dom.brand.scrollWidth : 0;
    const toolsWidth = dom.headerTools ? dom.headerTools.scrollWidth : 0;
    const headerIsTight = brandWidth + toolsWidth > headerWidth - 24;
    const navIsTight = dom.navList && dom.siteNav
      ? dom.navList.scrollWidth > dom.siteNav.clientWidth - 8
      : false;
    const forceCompact = window.innerWidth <= compactNavBreakpoint;
    const forceStacked = window.innerWidth <= stackedNavBreakpoint;
    const shouldCompact = forceCompact;
    const shouldStack = !shouldCompact && (forceStacked || headerIsTight || navIsTight);

    dom.siteHeader.classList.toggle("is-stacked", shouldStack);
    dom.siteHeader.classList.toggle("is-compact", shouldCompact);
    syncPreferencePlacement(shouldCompact);

    if (!shouldCompact) {
      closeMenu();
      return;
    }

    if (!dom.siteNav.classList.contains("is-open")) {
      dom.navToggle.setAttribute("aria-expanded", "false");
      updateNavToggleLabel(getPage());
    }
  }

  function syncPreferencePlacement(isCompact) {
    if (!dom.preferenceSwitches || !dom.headerPreferencesSlot || !dom.navPreferencesSlot) {
      return;
    }

    const target = isCompact ? dom.navPreferencesSlot : dom.headerPreferencesSlot;

    if (dom.preferenceSwitches.parentElement !== target) {
      target.appendChild(dom.preferenceSwitches);
    }
  }

  function applyTheme(theme, options = {}) {
    const { persist = true } = options;
    const allowedThemes = Object.keys(app.settings.themes);
    const nextTheme = allowedThemes.includes(theme) ? theme : app.settings.defaultTheme;
    const themeConfig = app.settings.themes[nextTheme];

    state.theme = nextTheme;
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = themeConfig.colorScheme;
    setMeta("theme-color", themeConfig.themeColor, "name");

    if (persist) {
      persistTheme(nextTheme);
    }

    updateThemeButtons(getPage());
  }

  function updateThemeButtons(page) {
    dom.themeButtons.forEach((button) => {
      const isActive = button.dataset.theme === state.theme;
      const themeName = page.header.themes[button.dataset.theme];
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
      button.setAttribute("aria-label", themeName);
    });
  }

  function setupProfileImage(page) {
    dom.profileImage.src = app.settings.profileFallback;
    dom.profileImage.alt = page.hero.profileFallbackAlt;

    const previewImage = new Image();

    previewImage.onload = function () {
      dom.profileImage.src = app.settings.profileImage;
      dom.profileImage.alt = page.hero.profileAlt;
    };

    previewImage.onerror = function () {
      dom.profileImage.src = app.settings.profileFallback;
      dom.profileImage.alt = page.hero.profileFallbackAlt;
    };

    previewImage.src = app.settings.profileImage;
  }

  function applySeo(page) {
    const siteUrl = ensureTrailingSlash(app.settings.siteUrl);
    const ogImageUrl = new URL(page.meta.ogImage, siteUrl).href;

    document.title = page.meta.title;
    setMeta("description", page.meta.description, "name");
    setMeta("og:title", page.meta.title, "property");
    setMeta("og:description", page.meta.description, "property");
    setMeta("og:url", siteUrl, "property");
    setMeta("og:image", ogImageUrl, "property");
    setMeta("og:locale", page.meta.locale, "property");
    setMeta("twitter:title", page.meta.title, "name");
    setMeta("twitter:description", page.meta.description, "name");
    setMeta("twitter:image", ogImageUrl, "name");

    const canonical = document.querySelector("link[rel='canonical']");
    if (canonical) {
      canonical.href = siteUrl;
    }
  }

  function setupRevealObserver() {
    const elements = Array.from(document.querySelectorAll(".reveal"));

    if (state.revealObserver) {
      state.revealObserver.disconnect();
      state.revealObserver = null;
    }

    if (reduceMotion) {
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
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    elements.forEach((element) => state.revealObserver.observe(element));
  }

  function setupSectionObserver() {
    const sections = Array.from(document.querySelectorAll("main section[id]"));

    if (state.sectionObserver) {
      state.sectionObserver.disconnect();
      state.sectionObserver = null;
    }

    state.sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visible) {
          setActiveNav(visible.target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.65],
        rootMargin: "-18% 0px -52% 0px"
      }
    );

    sections.forEach((section) => state.sectionObserver.observe(section));
  }

  function setActiveNav(id) {
    const links = Array.from(dom.navList.querySelectorAll("a[data-section]"));
    links.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.section === id);
    });
  }

  function updateBackToTop(page) {
    const show = window.scrollY > 640;
    dom.backToTop.hidden = !show;
    dom.backToTopLabel.textContent = page.ui.backToTop;
    dom.backToTop.setAttribute("aria-label", page.ui.backToTop);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  function updateLanguageButtons() {
    dom.langButtons.forEach((button) => {
      const isActive = button.dataset.lang === state.lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
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

  function setMeta(name, value, attribute) {
    const selector = attribute === "property" ? `meta[property='${name}']` : `meta[name='${name}']`;
    const element = document.querySelector(selector);
    if (element) {
      element.setAttribute("content", value);
    }
  }

  function getAnchorAttrs(href) {
    if (!href) {
      return "";
    }

    if (href.startsWith("http")) {
      return ' target="_blank" rel="noreferrer noopener"';
    }

    return "";
  }

  function ensureTrailingSlash(url) {
    return url.endsWith("/") ? url : `${url}/`;
  }

  function getInitialLanguage() {
    const allowed = Object.keys(app.content);

    try {
      const storedLang = window.localStorage.getItem(app.settings.languageStorageKey);
      if (allowed.includes(storedLang)) {
        return storedLang;
      }
    } catch (error) {
      return app.settings.defaultLang;
    }

    return app.settings.defaultLang;
  }

  function persistLanguage(lang) {
    try {
      window.localStorage.setItem(app.settings.languageStorageKey, lang);
    } catch (error) {
      return;
    }
  }

  function getInitialTheme() {
    const allowed = Object.keys(app.settings.themes);
    const htmlTheme = document.documentElement.dataset.theme;

    if (allowed.includes(htmlTheme)) {
      return htmlTheme;
    }

    try {
      const storedTheme = window.localStorage.getItem(app.settings.themeStorageKey);
      if (allowed.includes(storedTheme)) {
        return storedTheme;
      }
    } catch (error) {
      return app.settings.defaultTheme;
    }

    return app.settings.defaultTheme;
  }

  function persistTheme(theme) {
    try {
      window.localStorage.setItem(app.settings.themeStorageKey, theme);
    } catch (error) {
      return;
    }
  }

  function getIcon(kind) {
    const icons = {
      email:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16v12H4z"></path><path d="m4 8 8 6 8-6"></path></svg>',
      phone:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 4h3l1.5 4-2 1.8a14 14 0 0 0 5.2 5.2l1.8-2L20 14.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4z"></path></svg>',
      github:
        '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.7.5 12.1c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.5 1.3-3.4-.1-.3-.6-1.5.1-3.2 0 0 1.1-.4 3.5 1.3 1-.3 2.1-.4 3.1-.4 1.1 0 2.1.1 3.1.4 2.4-1.7 3.5-1.3 3.5-1.3.7 1.7.2 2.9.1 3.2.8.9 1.3 2.1 1.3 3.4 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.7 18.3.5 12 .5Z"></path></svg>',
      linkedin:
        '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a1.49 1.49 0 1 0 0 2.99 1.49 1.49 0 0 0 0-2.99ZM3.5 8h3v12h-3V8Zm5 0h2.88v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V20h-3v-6.35c0-1.52-.03-3.47-2.11-3.47-2.11 0-2.43 1.65-2.43 3.36V20h-3V8Z"></path></svg>',
      location:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s6-5.6 6-11a6 6 0 1 0-12 0c0 5.4 6 11 6 11Z"></path><circle cx="12" cy="10" r="2.2"></circle></svg>'
    };

    return icons[kind] || icons.location;
  }
})();
