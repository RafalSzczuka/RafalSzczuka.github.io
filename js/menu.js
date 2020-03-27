const menuBar = document.querySelector(".menu");
const burgerBtn = document.querySelector(".burger");
const burgerOn = document.querySelector(".fas.fa-bars");
const burgerOff = document.querySelector(".fas.fa-times");

// function showUp(element, whenScrollDistance) {
//   if (document.scrollY > whenScrollDistance) {
//     element.classList.add("active");
//   }
// }

document.addEventListener("scroll", function() {
  if (window.scrollY > 500 && window.innerWidth > 1024) {
    menuBar.classList.add("menu-small");
  } else {
    menuBar.classList.remove("menu-small");
  }
});

burgerBtn.addEventListener("click", function() {
  menuBar.classList.toggle("active");
  burgerOn.classList.toggle("active");
  burgerOff.classList.toggle("active");
});
