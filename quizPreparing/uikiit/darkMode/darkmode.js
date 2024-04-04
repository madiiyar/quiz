// function darkMode() {
//   let element = document.body;
//   let content = document.getElementById("DarkMode");
//   element.className = "dark-mod";
//   content.innerText = "Dark Mode is ON";
// }
// function lightMode() {
//   let element = document.body;
//   let content = document.getElementById("DarkMode");
//   element.className = "light-mod";
//   content.innerText = "Dark Mode is OFF";
// }

// function darkMode() {
//   let back = document.body;
//   let button = document.getElementById("DarkMode");
//   back.className = "dark-mod";
//   button.innerText = "Dark Mode is ON";
// }

// function lightMode() {
//   let back = document.body;
//   let button = document.getElementById("DarkMode");
//   back.className = "light-mod";
//   button.innerText = "Dark Mode is OFF";
// }

document.querySelector(".dark").onclick = function () {
  document.body.classList = "dark-mod";
  document.getElementById("DarkMode").innerHTML = "Dark Mode is ON";
};

document.querySelector(".light").onclick = function () {
  document.body.classList = "light-mod";
  document.getElementById("DarkMode").innerHTML = "Dark Mode is OFF";
};
