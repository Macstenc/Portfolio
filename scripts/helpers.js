(function () {
  const App = window.PortfolioApp || (window.PortfolioApp = {});

  App.getPage = function getPage() {
    return App.app.content[App.state.lang];
  };

  App.setText = function setText(id, value) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  };

  App.setMeta = function setMeta(name, value, attribute) {
    const selector = attribute === "property" ? `meta[property='${name}']` : `meta[name='${name}']`;
    const element = document.querySelector(selector);
    if (element) {
      element.setAttribute("content", value);
    }
  };

  App.getAnchorAttrs = function getAnchorAttrs(href) {
    if (!href) {
      return "";
    }

    if (href.startsWith("http")) {
      return ' target="_blank" rel="noreferrer noopener"';
    }

    return "";
  };

  App.ensureTrailingSlash = function ensureTrailingSlash(url) {
    return url.endsWith("/") ? url : `${url}/`;
  };

  App.getInitialLanguage = function getInitialLanguage() {
    const allowed = Object.keys(App.app.content);

    try {
      const storedLang = window.localStorage.getItem(App.app.settings.languageStorageKey);
      if (allowed.includes(storedLang)) {
        return storedLang;
      }
    } catch (error) {
      return App.app.settings.defaultLang;
    }

    return App.app.settings.defaultLang;
  };

  App.persistLanguage = function persistLanguage(lang) {
    try {
      window.localStorage.setItem(App.app.settings.languageStorageKey, lang);
    } catch (error) {
      return;
    }
  };

  App.getInitialTheme = function getInitialTheme() {
    const allowed = Object.keys(App.app.settings.themes);
    const htmlTheme = document.documentElement.dataset.theme;

    if (allowed.includes(htmlTheme)) {
      return htmlTheme;
    }

    try {
      const storedTheme = window.localStorage.getItem(App.app.settings.themeStorageKey);
      if (allowed.includes(storedTheme)) {
        return storedTheme;
      }
    } catch (error) {
      return App.app.settings.defaultTheme;
    }

    return App.app.settings.defaultTheme;
  };

  App.persistTheme = function persistTheme(theme) {
    try {
      window.localStorage.setItem(App.app.settings.themeStorageKey, theme);
    } catch (error) {
      return;
    }
  };

  App.applyBalancedGrid = function applyBalancedGrid(container) {
    if (!container) {
      return;
    }

    container.classList.remove("balance-2", "balance-3");

    const count = container.children.length;

    if (count === 2 || count === 4) {
      container.classList.add("balance-2");
      return;
    }

    if (count === 3 || count === 6) {
      container.classList.add("balance-3");
    }
  };

  App.updateYear = function updateYear() {
    if (App.dom.currentYear) {
      App.dom.currentYear.textContent = String(new Date().getFullYear());
    }
  };

  App.getSkillIcon = function getSkillIcon(label) {
    const value = String(label || "").toLowerCase();
    const icons = {
      code:
        '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7 6-4 4 4 4"></path><path d="m13 6 4 4-4 4"></path></svg>',
      layout:
        '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="14" height="12" rx="2"></rect><path d="M3 8.5h14"></path><path d="M8 8.5V16"></path></svg>',
      server:
        '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="14" height="5" rx="1.6"></rect><rect x="3" y="11" width="14" height="5" rx="1.6"></rect><path d="M6 6.5h.01"></path><path d="M6 13.5h.01"></path><path d="M9 6.5h4"></path><path d="M9 13.5h4"></path></svg>',
      api:
        '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 5 3.5 10 7 15"></path><path d="m13 5 3.5 5-3.5 5"></path><path d="m11.2 4-2.4 12"></path></svg>',
      database:
        '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="10" cy="5.5" rx="5.5" ry="2.5"></ellipse><path d="M4.5 5.5v6c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-6"></path><path d="M4.5 8.5c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5"></path></svg>',
      deploy:
        '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3v8"></path><path d="m6.8 6.3 3.2-3.3 3.2 3.3"></path><rect x="4" y="12" width="12" height="4" rx="1.5"></rect></svg>',
      shield:
        '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3 15 5v4.6c0 3-1.9 5.8-5 7.4-3.1-1.6-5-4.4-5-7.4V5l5-2Z"></path><path d="m7.7 9.9 1.6 1.6 3.1-3.3"></path></svg>',
      terminal:
        '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="14" height="12" rx="2"></rect><path d="m6.2 8 2 2-2 2"></path><path d="M10 12h3.5"></path></svg>',
      review:
        '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5h12"></path><path d="M4 10h7"></path><path d="M4 14.5h6"></path><path d="m12.8 13.8 1.5 1.5 2.7-3.1"></path></svg>',
      search:
        '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8.5" cy="8.5" r="4.5"></circle><path d="m12 12 4 4"></path></svg>',
      spark:
        '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m10 2 1.4 4.1L15.5 7.5l-4.1 1.4L10 13l-1.4-4.1L4.5 7.5l4.1-1.4L10 2Z"></path><path d="m15.2 13.6.7 2 .7-2 2-.7-2-.7-.7-2-.7 2-2 .7 2 .7Z"></path></svg>',
      docs:
        '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3.5h5l3 3V16a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 5 16V5A1.5 1.5 0 0 1 6.5 3.5Z"></path><path d="M11 3.5V7h3"></path><path d="M7.5 10h5"></path><path d="M7.5 13h4"></path></svg>'
    };

    let icon = icons.code;

    if (value.includes("html") || value.includes("javascript") || value.includes("typescript") || value.includes("angular")) {
      icon = icons.code;
    } else if (value.includes("css") || value.includes("design system") || value.includes("responsive") || value.includes("accessible ui") || value.includes("interaction")) {
      icon = icons.layout;
    } else if (value.includes("python") || value.includes("django") || (value.includes("java") && !value.includes("javascript")) || value.includes("spring")) {
      icon = icons.server;
    } else if (value.includes("rest")) {
      icon = icons.api;
    } else if (value.includes("data-driven")) {
      icon = icons.database;
    } else if (value.includes("docker") || value.includes("nginx") || value.includes("vps") || value.includes("deployment")) {
      icon = icons.deploy;
    } else if (value.includes("linux") || value.includes("git") || value.includes("github")) {
      icon = icons.terminal;
    } else if (value.includes("ssl") || value.includes("authentication") || value.includes("stripe")) {
      icon = icons.shield;
    } else if (value.includes("review")) {
      icon = icons.review;
    } else if (value.includes("debug")) {
      icon = icons.search;
    } else if (value.includes("refactor")) {
      icon = icons.code;
    } else if (value.includes("documentation") || value.includes("dokumentacja")) {
      icon = icons.docs;
    } else if (value.includes("codex") || value.includes("cursor") || value.includes("claude") || value.includes("ai")) {
      icon = icons.spark;
    }

    return `<span class="skill-tag-icon" aria-hidden="true">${icon}</span>`;
  };

  App.getIcon = function getIcon(kind) {
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
  };
})();
