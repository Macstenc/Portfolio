(function () {
  const App = window.PortfolioApp || (window.PortfolioApp = {});

  App.renderHeader = function renderHeader(page) {
    App.dom.brandName.textContent = App.app.settings.fullName;
    App.dom.brandRole.textContent = page.header.brandRole;
    App.dom.langSwitch.setAttribute("aria-label", page.header.langLabel);
    App.dom.themeSwitch.setAttribute("aria-label", page.header.themeLabel);
    App.dom.navList.innerHTML = page.header.nav
      .map((item) => `<li><a href="#${item.id}" data-section="${item.id}">${item.label}</a></li>`)
      .join("");

    App.dom.themeButtons.forEach((button) => {
      const themeName = button.dataset.theme;
      const label = page.header.themes[themeName];
      const labelElement = button.querySelector(".theme-button-label");
      if (labelElement) {
        labelElement.textContent = label;
      }
      button.setAttribute("aria-label", label);
      button.title = label;
    });
  };

  App.renderHero = function renderHero(page) {
    App.dom.heroEyebrow.textContent = page.hero.eyebrow;
    App.dom.heroName.textContent = App.app.settings.fullName;
    App.dom.heroRole.textContent = page.hero.role;
    App.dom.heroSummary.textContent = page.hero.summary;
    App.dom.heroStatus.textContent = page.hero.status;
    App.dom.heroProjectsCta.textContent = page.hero.primaryCta;
    App.dom.heroCvCta.textContent = page.hero.secondaryCta;
    App.dom.heroCvCta.href = App.app.settings.cvFile;
    App.dom.heroCvCta.setAttribute("download", "");
    App.dom.heroHighlights.innerHTML = page.hero.highlights.map((item) => `<li>${item}</li>`).join("");
    App.dom.heroStats.innerHTML = page.hero.stats
      .map((item) => `<div><dd>${item.value}</dd><dt>${item.label}</dt></div>`)
      .join("");
    App.dom.profileCaptionLabel.textContent = page.hero.profileLabel;
    App.dom.profileMeta.innerHTML = page.hero.profileMeta
      .map((item) => `<li><span class="meta-label">${item.label}</span><span class="meta-value">${item.value}</span></li>`)
      .join("");
  };

  App.renderSectionHeadings = function renderSectionHeadings(sections) {
    Object.entries(sections).forEach(([key, value]) => {
      App.setText(`${key}-tag`, value.tag);
      App.setText(`${key}-heading`, value.heading);
      App.setText(`${key}-intro`, value.intro);
    });
  };

  App.renderAbout = function renderAbout(page) {
    App.dom.aboutStoryTitle.textContent = page.about.storyTitle;
    App.dom.aboutStory.innerHTML = page.about.story.map((item) => `<p>${item}</p>`).join("");
    App.dom.aboutPrinciplesTitle.textContent = page.about.principlesTitle;
    App.dom.aboutPrinciples.innerHTML = page.about.principles.map((item) => `<li>${item}</li>`).join("");
  };

  App.renderSkills = function renderSkills(page) {
    App.dom.skillsGroups.innerHTML = page.skills.groups
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
    App.applyBalancedGrid(App.dom.skillsGroups);
  };

  App.renderWorkflow = function renderWorkflow(page) {
    if (!App.dom.workflowGrid || !page.workflow) {
      return;
    }

    App.dom.workflowGrid.innerHTML = page.workflow.items
      .map(
        (item, index) => `
          <article class="panel workflow-card reveal">
            <div class="workflow-head">
              <span class="workflow-step">${String(index + 1).padStart(2, "0")}</span>
              <h3>${item.title}</h3>
            </div>
            <p class="card-copy">${item.copy}</p>
            <ul class="workflow-list">
              ${item.points.map((point) => `<li>${point}</li>`).join("")}
            </ul>
          </article>
        `
      )
      .join("");
    App.applyBalancedGrid(App.dom.workflowGrid);
  };

  App.renderExperience = function renderExperience(page) {
    App.dom.experienceTimeline.innerHTML = page.experience.items
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
  };

  App.renderProjects = function renderProjects(page) {
    const activeFilter = App.state.filter;
    const items = activeFilter === "all"
      ? page.projects.items
      : page.projects.items.filter((item) => item.filters.includes(activeFilter));
    const featuredItems = items.filter((item) => item.featured);
    const regularItems = items.filter((item) => !item.featured);

    App.dom.projectFilterLabel.textContent = page.projects.filterLabel;
    App.dom.projectFilters.innerHTML = [
      `<button class="filter-button${activeFilter === "all" ? " is-active" : ""}" type="button" data-filter="all">${page.projects.allLabel}</button>`,
      ...page.projects.filters.map(
        (filter) => `
          <button class="filter-button${activeFilter === filter ? " is-active" : ""}" type="button" data-filter="${filter}">
            ${filter}
          </button>
        `
      )
    ].join("");

    App.dom.projectFeatured.innerHTML = featuredItems
      .map((item) => App.renderProjectCard(item, page, true))
      .join("");
    App.dom.projectFeatured.toggleAttribute("hidden", featuredItems.length === 0);

    App.dom.projectGrid.innerHTML = regularItems
      .map((item) => App.renderProjectCard(item, page, false))
      .join("");
    App.applyBalancedGrid(App.dom.projectGrid);
  };

  App.renderEducation = function renderEducation(page) {
    App.dom.educationGrid.innerHTML = page.education.items
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
    App.applyBalancedGrid(App.dom.educationGrid);
  };

  App.renderDevelopment = function renderDevelopment(page) {
    App.dom.developmentGrid.innerHTML = page.development.items
      .map(
        (item) => `
          <article class="panel growth-card reveal">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </article>
        `
      )
      .join("");
    App.applyBalancedGrid(App.dom.developmentGrid);
  };

  App.renderProjectCard = function renderProjectCard(item, page, isFeatured) {
    const repoAction = item.repoUrl
      ? `<a class="link-inline" href="${item.repoUrl}"${App.getAnchorAttrs(item.repoUrl)}>${page.projects.repositoryLabel}</a>`
      : "";
    const liveAction = item.liveUrl
      ? `<a class="link-inline" href="${item.liveUrl}"${App.getAnchorAttrs(item.liveUrl)}>${page.projects.liveLabel}</a>`
      : !item.repoUrl
        ? `<span class="action-muted">${page.projects.codeOnlyLabel}</span>`
        : "";
    const showActions = !item.hideActions && Boolean(repoAction || liveAction);
    const highlight = item.highlight ? `<p class="project-highlight">${item.highlight}</p>` : "";

    return `
      <article class="project-card${isFeatured ? " is-featured" : ""} reveal">
        <div class="project-media">
          <img src="${item.image}" alt="${item.imageAlt}" width="960" height="600" loading="lazy" decoding="async">
        </div>
        <div class="project-body">
          <div class="project-topline">
            <span class="project-type">${item.type}</span>
          </div>
          <h3>${item.title}</h3>
          <p class="project-summary">${item.summary}</p>
          ${highlight}
          <ul class="project-stack">
            ${item.stack.map((stackItem) => `<li>${stackItem}</li>`).join("")}
          </ul>
          <ul class="project-feature-list">
            ${item.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
          ${showActions
            ? `<div class="project-actions">
                ${repoAction}
                ${liveAction}
              </div>`
            : ""}
        </div>
      </article>
    `;
  };

  App.renderContact = function renderContact(page) {
    App.dom.contactLinks.innerHTML = `
      <div class="contact-links-block">
        <h3>${page.contact.cardsTitle}</h3>
        <div class="contact-methods">
          ${page.contact.cards.map((item) => App.renderContactCard(item)).join("")}
        </div>
      </div>
    `;

    App.dom.contactNote.innerHTML = `
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
  };

  App.renderFooter = function renderFooter(page) {
    App.dom.footerName.textContent = App.app.settings.fullName;
    App.dom.footerRole.textContent = page.header.brandRole;
    App.dom.footerSummary.textContent = page.footer.summary;
    App.dom.footerNav.innerHTML = `
      <strong>${page.footer.quickLinksTitle}</strong>
      <ul class="footer-link-list">
        ${page.header.nav.map((item) => `<li><a href="#${item.id}">${item.label}</a></li>`).join("")}
      </ul>
    `;
    App.dom.footerLinks.innerHTML = `
      <strong>${page.footer.resourcesTitle}</strong>
      <ul class="footer-social-list">
        ${page.footer.resources
          .map((item) => `<li><a href="${item.href}"${App.getAnchorAttrs(item.href)}>${item.label}</a></li>`)
          .join("")}
      </ul>
    `;
    App.dom.footerCopy.innerHTML = `&copy; <span id="current-year"></span> ${App.app.settings.fullName}. ${page.footer.copy}`;
    App.dom.currentYear = document.getElementById("current-year");
    App.updateYear();
  };

  App.renderContactCard = function renderContactCard(item) {
    const icon = App.getIcon(item.kind);
    const inner = `
      <span class="contact-icon" aria-hidden="true">${icon}</span>
      <span>
        <strong>${item.label}</strong>
        <span class="meta-value">${item.value}</span>
        <span class="contact-description">${item.description}</span>
      </span>
    `;

    if (item.href) {
      return `<a class="contact-card" href="${item.href}"${App.getAnchorAttrs(item.href)}>${inner}</a>`;
    }

    return `<article class="contact-card">${inner}</article>`;
  };
})();
