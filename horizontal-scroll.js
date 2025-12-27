document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".scroll-horizontal");
  if (!el) return;

  function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  document.addEventListener("wheel", (e) => {
    if (!isInView(el)) return;

    // En trackpad a veces hay deltaX también
    const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const atStart = el.scrollLeft <= 0;
    const atEnd = el.scrollLeft >= maxScroll - 1;

    // 👉 Solo interceptar si AÚN podemos mover en horizontal
    if ((delta > 0 && !atEnd) || (delta < 0 && !atStart)) {
      e.preventDefault();
      e.stopPropagation();
      el.scrollLeft += delta;
    }
    // Si estamos en inicio o fin → NO hacemos nada:
    // el scroll vertical de la página funciona normal
  }, { passive: false, capture: true });
});
