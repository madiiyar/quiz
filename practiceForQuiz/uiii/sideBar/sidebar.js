// function openSidebar() {
//   document.getElementById("sidebar").style.width = "250px";
//   document.getElementsByClassName("content")[0].style.marginLeft = "250px";
// }

// function closeSidebar() {
//   document.getElementById("sidebar").style.width = "0px";
//   document.getElementsByClassName("content")[0].style.marginLeft = "0px";
// }

// function openSidebar() {
//   document.getElementById("sidebar").style.width = "250px";
// }

// function closeSidebar() {
//   document.getElementById("sidebar").style.width = "0px";
// }

// function openSidebar() {
//   document.getElementById("sidebar").style.width = "250px";
// }

// function closeSidebar() {
//   document.getElementById("sidebar").style.width = "0px";
// }

let openBtn = document.getElementById("open")
let sidebar = document.getElementById("sidebar")
let closeBtn = document.getElementById("close")

openBtn.onclick = function () {
  sidebar.style.width = "250px"
}

closeBtn.onclick = function () {
  sidebar.style.width = "0px"
}
