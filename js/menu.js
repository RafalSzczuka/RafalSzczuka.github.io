const menuBar = document.querySelector(".menu");
const menuUl = document.querySelector(".menu ul li");

// function showUp(element, whenScrollDistance) {
//   if (document.scrollY > whenScrollDistance) {
//     element.classList.add("active");
//   }
// }

document.addEventListener("scroll", function() {
  if (window.scrollY > 200) {
    menuBar.classList.add("menu-bcg");
  } else {
    menuBar.classList.remove("menu-bcg");
  }
});
