document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".scroll-horizontal");
  let active = null;

  function isFullyVisible(el) {
    const rect = el.getBoundingClientRect();
    const margin = 40;
    return rect.top >= -margin && rect.bottom <= window.innerHeight + margin;
  }

  window.addEventListener("wheel", (e) => {
    containers.forEach((el) => {

      // Activar solo si aún no hay uno activo y este está visible
      if (!active && isFullyVisible(el)) {
        active = el;
      }

      if (active !== el) return;

      const delta = e.deltaY;
      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

      // Si puede moverse en horizontal, lo hacemos
      if ((delta > 0 && !atEnd) || (delta < 0 && !atStart)) {
        e.preventDefault();
        el.scrollLeft += delta * 1.2;
      } else {
        // Si estamos en un extremo, liberamos para que vuelva el scroll vertical
        active = null;
      }
    });
  }, { passive: false });
});
