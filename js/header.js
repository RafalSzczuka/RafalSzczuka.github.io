const headerBcg = document.querySelector(".header-background");
const welcome = document.querySelector(".welcome");
const header = document.querySelector("header");

export function headAnimation() {
  document.addEventListener("scroll", function () {
    if (window.scrollY > header.clientHeight / 2) {
      [headerBcg, welcome].forEach((elem) => elem.classList.add("fade"));
    } else {
      [headerBcg, welcome].forEach((elem) => elem.classList.remove("fade"));
    }
  });
}
