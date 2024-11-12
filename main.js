const nav = document.querySelector(".main-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const isVisible = nav.getAttribute("menu-visible") === "true";

  nav.setAttribute("menu-visible", !isVisible);
  navToggle.setAttribute("expand", !isVisible);
});
