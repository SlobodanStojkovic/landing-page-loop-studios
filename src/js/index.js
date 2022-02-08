const menuBtn = document.querySelector(".navbar__wrapper__menu-icon");
const logo = document.querySelector(".navbar__wrapper__logo");
const menuIcon = document.querySelector(".navbar__wrapper__menu-icon");
const nav = document.querySelector(".navbar__hamburger");
const headerMenu = document.querySelector(".navbar__wrapper__header-menu");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.setAttribute("src", "src/img/close-btn.png");
    logo.classList.add("js-fixed-logo");
    menuIcon.classList.add("js-fixed-menu");
    nav.classList.add("js-navbar__nav");
    menuOpen = true;
  } else {
    menuBtn.setAttribute("src", "src/img/icon-hamburger.svg");
    logo.classList.remove("js-fixed-logo");
    menuIcon.classList.remove("js-fixed-menu");
    nav.classList.remove("js-navbar__nav");
    menuOpen = false;
  }
});
