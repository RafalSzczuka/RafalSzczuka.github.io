const menuBar = document.querySelector(".menu");
const menuUl = document.querySelector(".menu ul li");

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
