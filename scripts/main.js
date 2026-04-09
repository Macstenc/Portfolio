(function () {
  const App = window.PortfolioApp || (window.PortfolioApp = {});

  App.app = window.PORTFOLIO_DATA;
  App.reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  App.compactNavBreakpoint = 1024;
  App.state = {
    lang: null,
    theme: null,
    filter: "all",
    revealObserver: null,
    sectionObserver: null
  };
  App.dom = {};

  App.init = function init() {
    App.state.lang = App.getInitialLanguage();
    App.state.theme = App.getInitialTheme();

    App.cacheDom();
    App.bindEvents();
    App.applyTheme(App.state.theme, { persist: false });
    App.render();
    App.updateYear();
    App.updateBackToTop(App.getPage());

    window.addEventListener("scroll", App.handleScroll, { passive: true });
    window.addEventListener("resize", App.handleResize);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(App.handleResize).catch(() => {});
    }
  };

  App.cacheDom = function cacheDom() {
    App.dom.brand = document.querySelector(".brand");
    App.dom.siteHeader = document.querySelector(".site-header");
    App.dom.headerInner = document.querySelector(".header-inner");
    App.dom.headerTools = document.querySelector(".header-tools");
    App.dom.headerPreferencesSlot = document.getElementById("header-preferences-slot");
    App.dom.preferenceSwitches = document.getElementById("preference-switches");
    App.dom.siteNav = document.getElementById("site-nav");
    App.dom.navToggle = document.getElementById("nav-toggle");
    App.dom.navPanel = document.getElementById("nav-panel");
    App.dom.navList = document.getElementById("primary-menu");
    App.dom.navPreferencesSlot = document.getElementById("nav-preferences-slot");
    App.dom.themeSwitch = document.getElementById("theme-switch");
    App.dom.themeButtons = Array.from(App.dom.themeSwitch.querySelectorAll("[data-theme]"));
    App.dom.langSwitch = document.getElementById("lang-switch");
    App.dom.langButtons = Array.from(App.dom.langSwitch.querySelectorAll("[data-lang]"));
    App.dom.brandName = document.getElementById("brand-name");
    App.dom.brandRole = document.getElementById("brand-role");
    App.dom.heroEyebrow = document.getElementById("hero-eyebrow");
    App.dom.heroName = document.getElementById("hero-name");
    App.dom.heroRole = document.getElementById("hero-role");
    App.dom.heroSummary = document.getElementById("hero-summary");
    App.dom.heroStatus = document.getElementById("hero-status");
    App.dom.heroHighlights = document.getElementById("hero-highlights");
    App.dom.heroProjectsCta = document.getElementById("hero-projects-cta");
    App.dom.heroCvCta = document.getElementById("hero-cv-cta");
    App.dom.heroStats = document.getElementById("hero-stats");
    App.dom.profileImage = document.getElementById("profile-image");
    App.dom.profileCaptionLabel = document.getElementById("profile-caption-label");
    App.dom.profileMeta = document.getElementById("profile-meta");
    App.dom.aboutStoryTitle = document.getElementById("about-story-title");
    App.dom.aboutStory = document.getElementById("about-story");
    App.dom.aboutPrinciplesTitle = document.getElementById("about-principles-title");
    App.dom.aboutPrinciples = document.getElementById("about-principles");
    App.dom.skillsGroups = document.getElementById("skills-groups");
    App.dom.workflowGrid = document.getElementById("workflow-grid");
    App.dom.experienceTimeline = document.getElementById("experience-timeline");
    App.dom.projectFilterLabel = document.getElementById("project-filter-label");
    App.dom.projectFilters = document.getElementById("project-filters");
    App.dom.projectFeatured = document.getElementById("projects-featured");
    App.dom.projectGrid = document.getElementById("project-grid");
    App.dom.educationGrid = document.getElementById("education-grid");
    App.dom.developmentGrid = document.getElementById("development-grid");
    App.dom.contactLinks = document.getElementById("contact-links");
    App.dom.contactNote = document.getElementById("contact-note");
    App.dom.footerName = document.getElementById("footer-name");
    App.dom.footerRole = document.getElementById("footer-role");
    App.dom.footerSummary = document.getElementById("footer-summary");
    App.dom.footerNav = document.getElementById("footer-nav");
    App.dom.footerLinks = document.getElementById("footer-links");
    App.dom.footerCopy = document.getElementById("footer-copy");
    App.dom.currentYear = document.getElementById("current-year");
    App.dom.backToTop = document.getElementById("back-to-top");
    App.dom.backToTopLabel = document.getElementById("back-to-top-label");
  };

  App.bindEvents = function bindEvents() {
    App.dom.navToggle.addEventListener("click", App.toggleMenu);
    App.dom.themeSwitch.addEventListener("click", App.handleThemeClick);
    App.dom.themeSwitch.addEventListener("keydown", App.handleThemeKeydown);
    App.dom.langSwitch.addEventListener("click", App.handleLanguageClick);
    App.dom.langSwitch.addEventListener("keydown", App.handleLanguageKeydown);
    App.dom.projectFilters.addEventListener("click", App.handleFilterClick);
    App.dom.siteNav.addEventListener("click", App.handleNavClick);
    App.dom.backToTop.addEventListener("click", App.scrollToTop);
    document.addEventListener("keydown", App.handleGlobalKeydown);
    document.addEventListener("click", App.handleDocumentClick);
  };

  App.render = function render() {
    const page = App.getPage();

    document.documentElement.lang = App.state.lang;
    App.state.filter = page.projects.filters.includes(App.state.filter) ? App.state.filter : "all";

    App.applySeo(page);
    App.renderHeader(page);
    App.renderHero(page);
    App.renderSectionHeadings(page.sections);
    App.renderAbout(page);
    App.renderSkills(page);
    App.renderWorkflow(page);
    App.renderExperience(page);
    App.renderProjects(page);
    App.renderEducation(page);
    App.renderDevelopment(page);
    App.renderContact(page);
    App.renderFooter(page);
    App.updateLanguageButtons();
    App.updateThemeButtons(page);
    App.syncHeaderLayout();
    App.updateNavToggleLabel(page);
    App.updateBackToTop(page);
    App.setupProfileImage(page);
    App.setupRevealObserver();
    App.setupSectionObserver();
    App.handleScroll();
  };
})();

document.addEventListener("DOMContentLoaded", function bootstrapPortfolio() {
  window.PortfolioApp.init();
});
