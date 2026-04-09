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
