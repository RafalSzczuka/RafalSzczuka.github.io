// elements selection from html
const menuBar = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu ul li");
const burgerBtn = document.querySelector(".burger");
const burgerOn = document.querySelector(".fas.fa-bars");
const burgerOff = document.querySelector(".fas.fa-times");
const arrowUp = document.querySelector(".arrowup");

// sections selection
const aboutSection = document.querySelector(".about");
const aboutSectionFromTop = aboutSection.offsetTop;

export function menuScripts() {
  // change menu bar size after scroll
  document.addEventListener("scroll", function () {
    if (window.scrollY > 500 && window.innerWidth > 1024) {
      menuBar.classList.add("menu-small");
    } else {
      menuBar.classList.remove("menu-small");
    }
  });

  // burger menu icon toggler
  function burgerToggler() {
    menuBar.classList.toggle("active");
    burgerOn.classList.toggle("active");
    burgerOff.classList.toggle("active");
  }

  // menu toggler
  function menuToggler() {
    if (menuBar.classList.contains("active")) {
      burgerToggler();
    }
  }

  // burger menu active class trigger
  burgerBtn.addEventListener("click", function () {
    burgerToggler();
  });

  // scroll from menu to sections implementation
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      const offset = document.querySelector(`.${this.id}`).offsetTop;
      window.scrollTo(0, offset);
      menuToggler();
    });
  });

  // arrow up show up implementation
  window.addEventListener("scroll", function () {
    if (window.scrollY >= aboutSectionFromTop / 2) {
      arrowUp.classList.add("active");
    } else {
      arrowUp.classList.remove("active");
    }
  });

  // scroll to top after arrow up is clicked
  arrowUp.addEventListener("click", function () {
    window.scrollTo(0, 0);
    menuToggler();
  });
}
