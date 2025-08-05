document.addEventListener("DOMContentLoaded", () => {
  // Simple slider auto-scroll
  const slider = document.querySelector(".slider .slides");
  let scrollAmount = 0;

  setInterval(() => {
    slider.scrollBy({ left: 300, behavior: "smooth" });
    scrollAmount += 300;
    if (scrollAmount >= slider.scrollWidth) {
      slider.scrollLeft = 0;
      scrollAmount = 0;
    }
  }, 4000);
});
