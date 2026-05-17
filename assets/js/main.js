const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const filterButtons = document.querySelectorAll("[data-filter]");
const articleCards = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    articleCards.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.style.display = show ? "" : "none";
    });
  });
});

// Replace this placeholder with your real YouTube/Vimeo embed URL.
// Example: https://www.youtube.com/embed/VIDEO_ID
const featuredVideoEmbedUrl = "";

const videoDialog = document.querySelector("[data-video-dialog]");
const videoFrame = document.querySelector("[data-video-frame]");
const openVideo = document.querySelector("[data-open-video]");
const closeVideo = document.querySelector("[data-close-video]");

if (videoDialog && videoFrame && openVideo && closeVideo) {
  openVideo.addEventListener("click", () => {
    if (!featuredVideoEmbedUrl) {
      alert("Add your YouTube or Vimeo embed URL in assets/js/main.js first.");
      return;
    }
    videoFrame.src = featuredVideoEmbedUrl;
    videoDialog.showModal();
  });

  closeVideo.addEventListener("click", () => {
    videoDialog.close();
    videoFrame.src = "";
  });

  videoDialog.addEventListener("click", (event) => {
    if (event.target === videoDialog) {
      videoDialog.close();
      videoFrame.src = "";
    }
  });
}
