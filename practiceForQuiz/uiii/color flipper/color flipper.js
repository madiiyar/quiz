let hex = document.getElementById("hex")
let btn = document.getElementById("btn")
const list = ["#BBA6DD", "#FFB88A", "#FBC2C2", "#B4CFA4", "#A0C5E3"];

btn.onclick = function () {
   const random = list[Math.floor(Math.random() * list.length)]
   document.body.style.backgroundColor = random
   hex.textContent = random
}