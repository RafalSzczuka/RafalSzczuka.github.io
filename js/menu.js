// elements selection from html
const menuBar = document.querySelector(".menu");
const burgerBtn = document.querySelector(".burger");
const burgerOn = document.querySelector(".fas.fa-bars");
const burgerOff = document.querySelector(".fas.fa-times");

const menuAbout = document.getElementById("about");
const menuSkills = document.getElementById("skills");
const menuPortfolio = document.getElementById("portfolio");
const menuContact = document.getElementById("contact");

// sections selection
const aboutSection = document.querySelector(".about");
const skillsSection = document.querySelector(".skills");
const portfolioSection = document.querySelector(".portfolio");
const contactSection = document.querySelector(".contact");

// sections from top of the page (in px)
const aboutSectionFromTop = aboutSection.offsetTop;
const skillsSectionFromTop = skillsSection.offsetTop;
const portfolioSectionFromTop = portfolioSection.offsetTop;
const contactSectionFromTop = contactSection.offsetTop;

// change menu bar size after scroll
document.addEventListener("scroll", function() {
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
burgerBtn.addEventListener("click", function() {
  burgerToggler();
});

menuAbout.addEventListener("click", function() {
  window.scrollTo(0, aboutSectionFromTop);
  menuToggler();
});
menuSkills.addEventListener("click", function() {
  window.scrollTo(0, skillsSectionFromTop);
  menuToggler();
});
menuPortfolio.addEventListener("click", function() {
  window.scrollTo(0, portfolioSectionFromTop);
  menuToggler();
});
menuContact.addEventListener("click", function() {
  window.scrollTo(0, contactSectionFromTop);
  menuToggler();
});
