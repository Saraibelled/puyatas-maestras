const containers = document.querySelectorAll(".scroll-horizontal");
let active = null;

function isFullyVisible(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

window.addEventListener("wheel", (e) => {
  containers.forEach((el) => {

    if (!active && isFullyVisible(el)) {
      active = el;
    }


    if (active !== el) return;

    const delta = e.deltaY;
    const atStart = el.scrollLeft <= 0;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

    if ((delta > 0 && !atEnd) || (delta < 0 && !atStart)) {
      e.preventDefault();
      el.scrollLeft += delta * 1.2;
    } else {
      active = null;
    }
  });
}, { passive: false });
