(() => {
  const caseHero = document.querySelector(".hero-content.case");
  if (!caseHero) {
    return;
  }

  const lightboxLinks = Array.from(document.querySelectorAll("a.w-lightbox")).filter((link) =>
    link.querySelector("img"),
  );

  if (!lightboxLinks.length) {
    return;
  }

  const readImageData = (link) => {
    const image = link.querySelector("img");
    const json = link.querySelector(".w-json");

    if (json) {
      try {
        const data = JSON.parse(json.textContent);
        const item = data.items && data.items[0];
        if (item && item.url) {
          return {
            alt: image.alt || "",
            src: item.url,
          };
        }
      } catch {
        // Some exported lightbox JSON can be malformed; fall back to the rendered image.
      }
    }

    return {
      alt: image.alt || "",
      src: image.currentSrc || image.src,
    };
  };

  const images = lightboxLinks.map(readImageData);
  let activeIndex = 0;
  let lastFocusedElement = null;

  const overlay = document.createElement("div");
  overlay.className = "portfolio-lightbox";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <button class="portfolio-lightbox__close" type="button" aria-label="Close image">Close</button>
    <button class="portfolio-lightbox__nav portfolio-lightbox__nav--prev" type="button" aria-label="Previous image"></button>
    <figure class="portfolio-lightbox__figure">
      <img class="portfolio-lightbox__image" alt="">
    </figure>
    <button class="portfolio-lightbox__nav portfolio-lightbox__nav--next" type="button" aria-label="Next image"></button>
  `;
  document.body.appendChild(overlay);

  const lightboxImage = overlay.querySelector(".portfolio-lightbox__image");
  const closeButton = overlay.querySelector(".portfolio-lightbox__close");
  const previousButton = overlay.querySelector(".portfolio-lightbox__nav--prev");
  const nextButton = overlay.querySelector(".portfolio-lightbox__nav--next");

  const renderImage = () => {
    const image = images[activeIndex];
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
  };

  const openLightbox = (index) => {
    activeIndex = index;
    lastFocusedElement = document.activeElement;
    renderImage();
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("has-open-lightbox");
    closeButton.focus();
  };

  const closeLightbox = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("has-open-lightbox");
    lightboxImage.removeAttribute("src");

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  const showImage = (direction) => {
    activeIndex = (activeIndex + direction + images.length) % images.length;
    renderImage();
  };

  lightboxLinks.forEach((link, index) => {
    link.classList.add("portfolio-lightbox-trigger");
    link.addEventListener(
      "click",
      (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        openLightbox(index);
      },
      true,
    );
  });

  closeButton.addEventListener("click", closeLightbox);
  previousButton.addEventListener("click", () => showImage(-1));
  nextButton.addEventListener("click", () => showImage(1));

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeLightbox();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (!overlay.classList.contains("is-open")) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowLeft") {
      showImage(-1);
    }

    if (event.key === "ArrowRight") {
      showImage(1);
    }
  });
})();
