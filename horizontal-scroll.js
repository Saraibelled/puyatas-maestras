document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".scroll-horizontal");
  if (!el) return;

  function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  window.addEventListener("wheel", (e) => {
    if (!isInView(el)) return;

    const delta = e.deltaY;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const next = el.scrollLeft + delta;

    // Solo interceptamos si realmente podemos mover en horizontal
    if ((delta > 0 && el.scrollLeft < maxScroll) ||
        (delta < 0 && el.scrollLeft > 0)) {

      e.preventDefault();
      el.scrollLeft = Math.max(0, Math.min(maxScroll, next));
    }
  }, { passive: false });
});
