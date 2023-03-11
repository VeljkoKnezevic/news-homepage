const hamburger = document.querySelector(".header__button");
const background = document.querySelector("#background");
const nav = document.querySelector(".header__nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");

  if (hamburger.classList.contains("active")) {
    background.style.display = "block";
    hamburger.children[0].src = "./assets/images/icon-menu-close.svg";
    nav.style.display = "flex";
  } else {
    background.style.display = "none";
    hamburger.children[0].src = "./assets/images/icon-menu.svg";
    nav.style.display = "none";
  }
});
