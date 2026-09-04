(() => {
  const caseHero = document.querySelector(".hero-content.case");
  if (!caseHero) {
    return;
  }

  const headings = Array.from(document.querySelectorAll("h2, h3"));
  const quickOverview = headings.find((heading) =>
    heading.textContent.trim().toLowerCase().includes("quick overview"),
  );
  const fullStory = headings.find((heading) =>
    heading.textContent.trim().toLowerCase().includes("full story"),
  );
  const conclusion = headings.findLast((heading) =>
    heading.textContent.trim().toLowerCase().includes("conclusion"),
  );
  const outcomes =
    conclusion ||
    headings.find((heading) => heading.textContent.trim().toLowerCase().includes("outcomes"));

  const sections = [
    { label: "Overview", target: quickOverview },
    { label: "Story", target: fullStory },
    { label: "Outcome", target: outcomes },
  ].filter((section) => section.target);

  if (sections.length < 2) {
    return;
  }

  const slugify = (text) =>
    text
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  sections.forEach(({ target, label }) => {
    if (!target.id) {
      target.id = `case-${slugify(label)}`;
    }

    target.classList.add("case-rail-target");
  });

  const rail = document.createElement("nav");
  rail.className = "case-progress-rail";
  rail.setAttribute("aria-label", "Case study sections");

  const links = sections.map(({ label, target }) => {
    const link = document.createElement("a");
    link.className = "case-progress-rail__link";
    link.href = `#${target.id}`;
    link.textContent = label;
    rail.appendChild(link);
    return { link, target };
  });

  const homeLink = document.createElement("a");
  homeLink.className = "case-progress-rail__link case-progress-rail__home";
  homeLink.href = "/";
  homeLink.textContent = "Back home";
  rail.appendChild(homeLink);
  document.body.appendChild(rail);

  const setActiveLink = () => {
    const scrollPosition = window.scrollY + window.innerHeight * 0.38;
    const activeItem =
      links.findLast(({ target }) => target.offsetTop <= scrollPosition) || links[0];

    links.forEach(({ link }) => {
      link.classList.toggle("is-active", link === activeItem.link);
    });
  };

  setActiveLink();
  window.addEventListener("scroll", setActiveLink, { passive: true });
  window.addEventListener("resize", setActiveLink);
})();
