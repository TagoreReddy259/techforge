/*
  JavaScript responsibilities:
  - Read roadmap data from data/roadmaps.js
  - Render the index cards dynamically from the shared catalog
  - Render the dedicated roadmap detail page from the selected slug
  - Keep all content decisions in data/roadmaps.js so future roadmaps only
    require edits in the data file
*/

(function () {
  'use strict';

  const catalog = window.roadmapConfig || {};
  const roadmaps = Array.isArray(window.roadmaps) ? window.roadmaps : [];

  // Convert titles into URL-safe identifiers when a roadmap slug is missing.
  function slugify(value) {
    return String(value)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  // Resolve the canonical identifier for a roadmap entry.
  function getRoadmapSlug(roadmap) {
    return roadmap.slug || slugify(roadmap.title);
  }

  // Build a small stat card for the hero and detail summary sections.
  function createStatCard(value, label) {
    const card = document.createElement('div');
    card.className = 'stat-card reveal';

    const valueEl = document.createElement('span');
    valueEl.className = 'stat-card__value';
    valueEl.textContent = value;

    const labelEl = document.createElement('span');
    labelEl.className = 'stat-card__label';
    labelEl.textContent = label;

    card.append(valueEl, labelEl);
    return card;
  }

  // Create a compact metadata tag used on roadmap cards.
  function createMetaTag(label, value) {
    const tag = document.createElement('span');
    tag.className = 'meta-tag';

    const labelEl = document.createElement('span');
    labelEl.className = 'meta-tag__label';
    labelEl.textContent = label;

    const valueEl = document.createElement('span');
    valueEl.className = 'meta-tag__value';
    valueEl.textContent = value;

    tag.append(labelEl, valueEl);
    return tag;
  }

  // Derive a stable two-letter icon label when the data file does not provide one.
  function getRoadmapIconLabel(roadmap) {
    if (roadmap.iconLabel) {
      return roadmap.iconLabel;
    }

    const words = roadmap.title.replace(/^Microsoft\s+/i, '').match(/[A-Za-z]+/g) || [];
    const firstLetters = words.slice(0, 2).map((word) => word[0]).join('');
    return firstLetters.toUpperCase() || 'RD';
  }

  // Pick a concise subtitle so cards can be visually scanned quickly.
  function getRoadmapSubtitle(roadmap) {
    return roadmap.subtitle || roadmap.description;
  }

  // Format the difficulty label for display on cards.
  function getRoadmapDifficulty(roadmap) {
    return roadmap.difficulty || 'All levels';
  }

  // Derive visible skill tags from roadmap metadata.
  function getRoadmapTags(roadmap) {
    return Array.isArray(roadmap.tags) && roadmap.tags.length > 0
      ? roadmap.tags
      : roadmap.learningOutcomes.slice(0, 3);
  }

  // Map each roadmap to an enterprise-friendly accent color.
  function getRoadmapAccent(roadmap) {
    const title = roadmap.title.toLowerCase();

    if (title.includes('cybersecurity')) {
      return '#06B6D4';
    }

    if (title.includes('data science')) {
      return '#10B981';
    }

    if (title.includes('azure')) {
      return '#3B82F6';
    }

    return '#8B5CF6';
  }

  // Apply scroll-triggered reveal effects without noisy page-load animations.
  function observeRevealElements() {
    const revealElements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window) || revealElements.length === 0) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });

    revealElements.forEach((element) => observer.observe(element));
  }

  // Render the index hero summary from the catalog data.
  function renderIndexStats(heroStats) {
  return;
}

  // Render a focused overview card for the skills section.
  function createSkillsCard(roadmap, index) {
    const article = document.createElement('article');
    article.className = 'detail-card reveal';
    article.style.animationDelay = `${index * 70}ms`;

    const title = document.createElement('h3');
    title.className = 'detail-card__title';
    title.textContent = roadmap.title;

    const description = document.createElement('p');
    description.className = 'detail-card__description';
    description.textContent = roadmap.learningOutcomes[0];

    article.append(title, description);
    return article;
  }

  // Render a focused overview card for the careers section.
  function createCareerCard(roadmap, index) {
    const article = document.createElement('article');
    article.className = 'detail-card reveal';
    article.style.animationDelay = `${index * 70}ms`;

    const title = document.createElement('h3');
    title.className = 'detail-card__title';
    title.textContent = roadmap.title;

    const duration = document.createElement('span');
    duration.className = 'detail-card__duration';
    duration.textContent = roadmap.estimatedDuration;

    const description = document.createElement('p');
    description.className = 'detail-card__description';
    description.textContent = roadmap.learningOutcomes[1];

    article.append(title, duration, description);
    return article;
  }

  // Build the milestone cards for the detail page.
  function createMilestoneCard(milestone, index) {
    const article = document.createElement('article');
    article.className = 'detail-card detail-card--milestone reveal';
    article.style.animationDelay = `${index * 70}ms`;

    const title = document.createElement('h3');
    title.className = 'detail-card__title';
    title.textContent = milestone.name;

    const duration = document.createElement('span');
    duration.className = 'detail-card__duration';
    duration.textContent = `${milestone.duration} days`;

    const metrics = document.createElement('div');
    metrics.className = 'milestone-card__metrics';

    const moduleCount = document.createElement('span');
    moduleCount.className = 'meta-tag';
    moduleCount.innerHTML = `<span class="meta-tag__label">Modules</span><span class="meta-tag__value">${milestone.moduleCount || 1}</span>`;

    const days = document.createElement('span');
    days.className = 'meta-tag';
    days.innerHTML = `<span class="meta-tag__label">Days</span><span class="meta-tag__value">${milestone.duration}</span>`;

    metrics.append(days, moduleCount);

    const description = document.createElement('p');
    description.className = 'detail-card__description';
    description.textContent = milestone.description;

    article.append(title, duration, metrics, description);

    return article;
  }

  // Build the module cards for the detail page.
  function createModuleCard(module, index, roadmap) {
    const article = document.createElement('article');
    article.className = 'detail-card detail-card--module detail-card--expandable reveal';
    article.style.animationDelay = `${index * 70}ms`;

    const expanded = index === 0;
    if (expanded) {
      article.classList.add('is-expanded');
    }

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'module-card__button';
    trigger.setAttribute('aria-expanded', String(expanded));

    const accent = document.createElement('span');
    accent.className = 'detail-card__accent';

    const title = document.createElement('h3');
    title.className = 'detail-card__title';
    title.textContent = module.name;

    const duration = document.createElement('span');
    duration.className = 'detail-card__duration';
    duration.textContent = module.duration;

    const shell = document.createElement('div');
    shell.className = 'module-card__body-shell';

    const body = document.createElement('div');
    body.className = 'module-card__body';

    const description = document.createElement('p');
    description.className = 'detail-card__description';
    description.textContent = 'Open the matching Microsoft Learn module for guided practice.';

    const link = document.createElement('a');
    link.className = 'module-card__link';
    link.href = module.learnUrl || roadmap.microsoftLearnUrl || '#';
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.textContent = 'Open Microsoft Learn';

    body.append(description, link);
    shell.append(body);
    trigger.append(accent, title, duration);
    article.append(trigger, shell);

    trigger.addEventListener('click', () => {
      const isExpanded = article.classList.toggle('is-expanded');
      trigger.setAttribute('aria-expanded', String(isExpanded));
    });
    return article;
  }

  // Render one roadmap card on the landing page.
  function createRoadmapCard(roadmap, index) {
    const card = document.createElement('article');
    card.className = 'roadmap-card reveal';
    card.style.animationDelay = `${index * 70}ms`;
    card.setAttribute('role', 'link');
    card.tabIndex = 0;
    card.style.setProperty('--roadmap-accent', getRoadmapAccent(roadmap));

    const roadmapHref =roadmap.microsoftLearnUrl;
    const navigate = () => {
      window.open(roadmap.microsoftLearnUrl,
        "_blank"
);
    };

    card.addEventListener('click', (event) => {
      const target = event.target;

      if (target instanceof HTMLElement && target.closest('a')) {
        return;
      }

      navigate();
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        navigate();
      }
    });

    const header = document.createElement('header');
    header.className = 'roadmap-card__header';

    const icon = document.createElement('div');
    icon.className = 'roadmap-card__icon';
    icon.innerHTML = `<i data-lucide="${roadmap.iconLabel}"></i>`;  

    const content = document.createElement('div');
    content.className = 'roadmap-card__content';

    const eyebrow = document.createElement('p');
    eyebrow.className = 'roadmap-card__eyebrow';
    eyebrow.textContent = 'Microsoft roadmap';

    const title = document.createElement('h2');
    title.className = 'roadmap-card__title';
    title.textContent = roadmap.title;

    const subtitle = document.createElement('p');
    subtitle.className = 'roadmap-card__subtitle';
    subtitle.textContent = getRoadmapSubtitle(roadmap);

    const description = document.createElement('p');
    description.className = 'roadmap-card__description';
    description.textContent = roadmap.description;

    content.append(eyebrow, title, subtitle, description);

    header.append(icon, content);

    const meta = document.createElement('div');
    meta.className = 'roadmap-card__meta';
    meta.append(
      createMetaTag('Duration', roadmap.estimatedDuration),
      createMetaTag('Difficulty', getRoadmapDifficulty(roadmap))
    );

    const tags = document.createElement('div');
    tags.className = 'roadmap-card__tags';

    getRoadmapTags(roadmap).slice(0, 4).forEach((tagText) => {
      const tag = document.createElement('span');
      tag.className = 'skill-chip';
      tag.textContent = tagText;
      tags.appendChild(tag);
    });

    const footer = document.createElement('div');
    footer.className = 'roadmap-card__footer';

    const button = document.createElement('a');
    button.className = 'primary-button primary-button--compact';
    button.href = roadmapHref;
    button.textContent = 'View Roadmap';
    button.target = "_blank";
    button.rel = "noopener noreferrer";

    footer.append(button);
    card.append(header, meta, tags, footer);
    return card;
  }

  // Render the index page. Returns true when the page exists in the DOM.
  function renderIndexPage() {
    const roadmapGrid = document.getElementById('roadmapGrid');
    const heroStats = document.getElementById('heroStats');
    const homeTitle = document.getElementById('homeTitle');
    const homeLead = document.getElementById('homeLead');
    const homeEyebrow = document.getElementById('homeEyebrow');
    const skillsGrid = document.getElementById('skillsGrid');
    const careersGrid = document.getElementById('careersGrid');
    const skillsTitle = document.getElementById('skillsTitle');
    const careersTitle = document.getElementById('careersTitle');

    if (!roadmapGrid) {
      return false;
    }

    document.title = catalog.siteTitle || 'Microsoft Roadmaps';

    if (homeTitle) {
      homeTitle.textContent = catalog.heroTitle || catalog.siteTitle || 'Microsoft Roadmaps';
    }

    if (homeLead) {
      homeLead.textContent = catalog.heroSubtitle || catalog.siteSubtitle || '';
    }

    if (homeEyebrow) {
      homeEyebrow.textContent = 'Structured Learning Paths for Modern Tech Careers';
    }

    if (skillsTitle) {
      skillsTitle.textContent = 'Skills You\'ll Build';
    }

    if (careersTitle) {
      careersTitle.textContent = 'Career Opportunities';
    }

    renderIndexStats(heroStats);

    roadmapGrid.innerHTML = '';
    roadmaps.forEach((roadmap, index) => {
      roadmapGrid.appendChild(createRoadmapCard(roadmap, index));
    });

    if (skillsGrid) {
      skillsGrid.innerHTML = '';
      (catalog.skillsTracks || []).forEach((track, index) => {
        const card = document.createElement('article');
        card.className = 'detail-card reveal';
        card.style.animationDelay = `${index * 70}ms`;

        const title = document.createElement('h3');
        title.className = 'detail-card__title';
        title.textContent = track.title;

        const chipRow = document.createElement('div');
        chipRow.className = 'skill-chip-row';

        track.skills.forEach((skill) => {
          const chip = document.createElement('span');
          chip.className = 'skill-chip';
          chip.textContent = skill;
          chipRow.appendChild(chip);
        });

        card.append(title, chipRow);
        skillsGrid.appendChild(card);
      });
    }

    if (careersGrid) {
      careersGrid.innerHTML = '';
      (catalog.careerOpportunities || []).forEach((career, index) => {
        const card = document.createElement('article');
        card.className = 'detail-card career-card reveal';
        card.style.animationDelay = `${index * 70}ms`;

        const role = document.createElement('h3');
        role.className = 'detail-card__title';
        role.textContent = career.role;

        const salary = document.createElement('span');
        salary.className = 'detail-card__duration';
        salary.textContent = career.salary;

        const demandChip = document.createElement('span');
        demandChip.className = 'skill-chip skill-chip--demand';
        demandChip.textContent = career.demand;

        const demand = document.createElement('p');
        demand.className = 'detail-card__description';
        demand.textContent = career.demand;

        card.append(role, salary, demandChip);
        careersGrid.appendChild(card);
      });
    }

    observeRevealElements();

    return true;
  }

  // Render the dedicated roadmap detail page from the selected query string slug.
  

  // Render whichever page shell exists in the current document.
  const renderedIndex = renderIndexPage();
  lucide.createIcons();
  if (!renderedIndex) {
    return;
  }
})();
