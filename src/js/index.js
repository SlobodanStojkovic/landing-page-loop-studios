let body = document.querySelector("body");
const menuBtn = document.querySelector(".hamburger-lines");

menuBtn.addEventListener("click", () => {
  body.classList.toggle("mobile-nav-active");
});
