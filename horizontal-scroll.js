const containers = document.querySelectorAll(".scroll-horizontal");

containers.forEach((el) => {
  el.addEventListener("wheel", (e) => {
    const delta = e.deltaY;
    const atStart = el.scrollLeft <= 0;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

    // Si podemos seguir scrolleando en horizontal, lo hacemos
    if ((delta > 0 && !atEnd) || (delta < 0 && !atStart)) {
      e.preventDefault();
      el.scrollLeft += delta * 1.2;
    }
    // Si estamos en los límites, NO prevenimos:
    // el scroll vertical de la página funciona normal
  }, { passive: false });
});
