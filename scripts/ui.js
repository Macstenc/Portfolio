(function () {
  const App = window.PortfolioApp || (window.PortfolioApp = {});

  App.handleThemeClick = function handleThemeClick(event) {
    const button = event.target.closest("[data-theme]");
    if (!button) {
      return;
    }

    App.applyTheme(button.dataset.theme);
  };

  App.handleThemeKeydown = function handleThemeKeydown(event) {
    const currentButton = event.target.closest("[data-theme]");
    if (!currentButton) {
      return;
    }

    const index = App.dom.themeButtons.indexOf(currentButton);
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % App.dom.themeButtons.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + App.dom.themeButtons.length) % App.dom.themeButtons.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = App.dom.themeButtons.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    App.dom.themeButtons[nextIndex].focus();
    App.applyTheme(App.dom.themeButtons[nextIndex].dataset.theme);
  };

  App.handleLanguageClick = function handleLanguageClick(event) {
    const button = event.target.closest("[data-lang]");
    if (!button || button.dataset.lang === App.state.lang) {
      return;
    }

    App.state.lang = button.dataset.lang;
    App.persistLanguage(App.state.lang);
    App.closeMenu();
    App.render();
  };

  App.handleLanguageKeydown = function handleLanguageKeydown(event) {
    const currentButton = event.target.closest("[data-lang]");
    if (!currentButton) {
      return;
    }

    const index = App.dom.langButtons.indexOf(currentButton);
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % App.dom.langButtons.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + App.dom.langButtons.length) % App.dom.langButtons.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = App.dom.langButtons.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    App.dom.langButtons[nextIndex].focus();

    if (App.dom.langButtons[nextIndex].dataset.lang !== App.state.lang) {
      App.state.lang = App.dom.langButtons[nextIndex].dataset.lang;
      App.persistLanguage(App.state.lang);
      App.closeMenu();
      App.render();
    }
  };

  App.handleFilterClick = function handleFilterClick(event) {
    const button = event.target.closest("[data-filter]");
    if (!button || button.dataset.filter === App.state.filter) {
      return;
    }

    App.state.filter = button.dataset.filter;
    App.renderProjects(App.getPage());
    App.setupRevealObserver();
  };

  App.handleNavClick = function handleNavClick(event) {
    const link = event.target.closest("a[href^='#']");
    if (!link) {
      return;
    }

    App.closeMenu();
  };

  App.handleGlobalKeydown = function handleGlobalKeydown(event) {
    if (event.key === "Escape") {
      App.closeMenu();
    }
  };

  App.handleDocumentClick = function handleDocumentClick(event) {
    if (!App.dom.siteNav.classList.contains("is-open")) {
      return;
    }

    if (!App.dom.siteNav.contains(event.target)) {
      App.closeMenu();
    }
  };

  App.toggleMenu = function toggleMenu() {
    const willOpen = !App.dom.siteNav.classList.contains("is-open");
    App.dom.siteNav.classList.toggle("is-open", willOpen);
    App.dom.navToggle.setAttribute("aria-expanded", String(willOpen));
    App.updateNavToggleLabel(App.getPage());
  };

  App.closeMenu = function closeMenu() {
    App.dom.siteNav.classList.remove("is-open");
    App.dom.navToggle.setAttribute("aria-expanded", "false");
    App.updateNavToggleLabel(App.getPage());
  };

  App.handleResize = function handleResize() {
    App.syncHeaderLayout();
  };

  App.handleScroll = function handleScroll() {
    App.updateBackToTop(App.getPage());
  };

  App.updateNavToggleLabel = function updateNavToggleLabel(page) {
    const isOpen = App.dom.siteNav.classList.contains("is-open");
    App.dom.navToggle.setAttribute("aria-label", isOpen ? page.header.closeMenuLabel : page.header.menuLabel);
  };

  App.syncHeaderLayout = function syncHeaderLayout() {
    if (!App.dom.siteHeader || !App.dom.headerInner) {
      return;
    }

    App.dom.siteHeader.classList.remove("is-compact");
    App.syncPreferencePlacement(false);

    const shouldCompact = window.innerWidth <= App.compactNavBreakpoint;
    App.dom.siteHeader.classList.toggle("is-compact", shouldCompact);
    App.syncPreferencePlacement(shouldCompact);

    if (!shouldCompact) {
      App.closeMenu();
      return;
    }

    if (!App.dom.siteNav.classList.contains("is-open")) {
      App.dom.navToggle.setAttribute("aria-expanded", "false");
      App.updateNavToggleLabel(App.getPage());
    }
  };

  App.syncPreferencePlacement = function syncPreferencePlacement(isCompact) {
    if (!App.dom.preferenceSwitches || !App.dom.headerPreferencesSlot || !App.dom.navPreferencesSlot) {
      return;
    }

    const target = isCompact ? App.dom.navPreferencesSlot : App.dom.headerPreferencesSlot;

    if (App.dom.preferenceSwitches.parentElement !== target) {
      target.appendChild(App.dom.preferenceSwitches);
    }
  };

  App.applyTheme = function applyTheme(theme, options = {}) {
    const { persist = true } = options;
    const allowedThemes = Object.keys(App.app.settings.themes);
    const nextTheme = allowedThemes.includes(theme) ? theme : App.app.settings.defaultTheme;
    const themeConfig = App.app.settings.themes[nextTheme];

    App.state.theme = nextTheme;
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = themeConfig.colorScheme;
    App.setMeta("theme-color", themeConfig.themeColor, "name");

    if (persist) {
      App.persistTheme(nextTheme);
    }

    App.updateThemeButtons(App.getPage());
  };

  App.updateThemeButtons = function updateThemeButtons(page) {
    App.dom.themeButtons.forEach((button) => {
      const isActive = button.dataset.theme === App.state.theme;
      const themeName = page.header.themes[button.dataset.theme];
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
      button.setAttribute("aria-label", themeName);
    });
  };

  App.setupProfileImage = function setupProfileImage(page) {
    App.dom.profileImage.src = App.app.settings.profileFallback;
    App.dom.profileImage.alt = page.hero.profileFallbackAlt;

    const previewImage = new Image();

    previewImage.onload = function onload() {
      App.dom.profileImage.src = App.app.settings.profileImage;
      App.dom.profileImage.alt = page.hero.profileAlt;
    };

    previewImage.onerror = function onerror() {
      App.dom.profileImage.src = App.app.settings.profileFallback;
      App.dom.profileImage.alt = page.hero.profileFallbackAlt;
    };

    previewImage.src = App.app.settings.profileImage;
  };

  App.applySeo = function applySeo(page) {
    const siteUrl = App.ensureTrailingSlash(App.app.settings.siteUrl);
    const ogImageUrl = new URL(page.meta.ogImage, siteUrl).href;

    document.title = page.meta.title;
    App.setMeta("description", page.meta.description, "name");
    App.setMeta("og:title", page.meta.title, "property");
    App.setMeta("og:description", page.meta.description, "property");
    App.setMeta("og:url", siteUrl, "property");
    App.setMeta("og:image", ogImageUrl, "property");
    App.setMeta("og:locale", page.meta.locale, "property");
    App.setMeta("twitter:title", page.meta.title, "name");
    App.setMeta("twitter:description", page.meta.description, "name");
    App.setMeta("twitter:image", ogImageUrl, "name");

    const canonical = document.querySelector("link[rel='canonical']");
    if (canonical) {
      canonical.href = siteUrl;
    }
  };

  App.setupRevealObserver = function setupRevealObserver() {
    const elements = Array.from(document.querySelectorAll(".reveal"));

    if (App.state.revealObserver) {
      App.state.revealObserver.disconnect();
      App.state.revealObserver = null;
    }

    if (App.reduceMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    App.state.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            App.state.revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    elements.forEach((element) => App.state.revealObserver.observe(element));
  };

  App.setupSectionObserver = function setupSectionObserver() {
    const sections = Array.from(document.querySelectorAll("main section[id]"));

    if (App.state.sectionObserver) {
      App.state.sectionObserver.disconnect();
      App.state.sectionObserver = null;
    }

    App.state.sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visible) {
          App.setActiveNav(visible.target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.65],
        rootMargin: "-18% 0px -52% 0px"
      }
    );

    sections.forEach((section) => App.state.sectionObserver.observe(section));
  };

  App.setActiveNav = function setActiveNav(id) {
    const links = Array.from(App.dom.navList.querySelectorAll("a[data-section]"));
    links.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.section === id);
    });
  };

  App.updateBackToTop = function updateBackToTop(page) {
    const show = window.scrollY > 640;
    App.dom.backToTop.hidden = !show;
    App.dom.backToTopLabel.textContent = page.ui.backToTop;
    App.dom.backToTop.setAttribute("aria-label", page.ui.backToTop);
  };

  App.scrollToTop = function scrollToTop() {
    window.scrollTo({ top: 0, behavior: App.reduceMotion ? "auto" : "smooth" });
  };

  App.updateLanguageButtons = function updateLanguageButtons() {
    App.dom.langButtons.forEach((button) => {
      const isActive = button.dataset.lang === App.state.lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (App.dom.langSwitch) {
      App.dom.langSwitch.dataset.lang = App.state.lang;
    }
  };
})();
