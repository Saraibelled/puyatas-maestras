const container = document.querySelector(".scroll-horizontal");

if (container) {
  container.addEventListener("wheel", function (e) {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  }, { passive: false });
}
