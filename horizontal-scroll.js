const containers = document.querySelectorAll(".scroll-container");

containers.forEach((el) => {
  el.addEventListener("wheel", (e) => {
    const canScroll = el.scrollWidth > el.clientWidth;
    if (!canScroll) return;

    e.preventDefault();
    el.scrollLeft += e.deltaY * 1.2;
  }, { passive: false });
});
