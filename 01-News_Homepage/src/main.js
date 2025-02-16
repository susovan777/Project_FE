import "../scss/style.scss";

const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const media = window.matchMedia("(width < 69.375em)");
const navContent = document.querySelector(".nav__content");
const navOverlay = document.querySelector(".nav__onerlay");

const openMobileMenu = () => {
//   console.log("open");
  btnOpen.setAttribute("aria-expanded", "true");
};

const closeMobileMenu = () => {
//   console.log("Close");
  btnOpen.setAttribute("aria-expanded", "false");
};

const setupNav = (e) => {
  if (e.matches) {
    // console.log("is Mobile");
    navContent.style.display = "block";

    setTimeout(() => {
      navContent.style.display = "block";
      navOverlay.style.display = "block";
    }, 500);
  } else {
    // console.log("is Desktop");
    navContent.style.display = "";
  }
};

setupNav(media);

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);
media.addEventListener("change", (e) => {
  setupNav(e);
});
