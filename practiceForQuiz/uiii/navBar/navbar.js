// const sidebar = document.querySelector(".sidebar");
// const navLink = document.querySelector(".nav__link");

// // sidebar.addEventListener("click", () => {
// //    navLink.classList.toggle("hide")
// // })

// function openPopup() {
//   navLink.classList.toggle("hide");
// }

let btn = document.getElementById("btn")
let navv = document.getElementById("navv")

btn.onclick = function () {
  navv.classList.toggle("hide")
}
