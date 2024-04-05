
// var tabButtons = document.querySelectorAll(
//   ".tabContainer .buttonContainer button"
// );
// var tabPanels = document.querySelectorAll(".tabContainer  .tabPanel");

// function showPanel(panelIndex, colorCode) {
//   tabButtons.forEach(function (node) {
//     node.style.backgroundColor = "";
//     node.style.color = "";
//   });
//   tabButtons[panelIndex].style.backgroundColor = colorCode;
//   tabButtons[panelIndex].style.color = "white";
//   tabPanels.forEach(function (node) {
//     node.style.display = "none";
//   });
//   tabPanels[panelIndex].style.display = "block";
//   tabPanels[panelIndex].style.backgroundColor = colorCode;
// }
// showPanel(0, "#f44336");


let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")

let panel1 = document.getElementById("panel1")
let panel2 = document.getElementById("panel2")
let panel3 = document.getElementById("panel3")
let panel4 = document.getElementById("panel4")

btn1.onclick = function () {
  btn1.style.backgroundColor = '#f44336';
  btn1.style.color = "white";
  panel1.style.display = "block";
  panel1.style.backgroundColor = '#f44336'
  panel2.style.display = "none"
  panel3.style.display = "none"
  panel4.style.display = "none"
  btn2.style.backgroundColor = "";
  btn2.style.color = "";
  btn3.style.backgroundColor = "";
  btn3.style.color = "";
  btn4.style.backgroundColor = "";
  btn4.style.color = "";
  
}

btn2.onclick = function () {
  btn2.style.backgroundColor = '#4caf50';
  btn2.style.color = "white";
  panel2.style.display = "block";
  panel2.style.backgroundColor = '#4caf50'
  panel1.style.display = "none"
  panel3.style.display = "none"
  panel4.style.display = "none"
  btn1.style.backgroundColor = "";
  btn1.style.color = "";
  btn3.style.backgroundColor = "";
  btn3.style.color = "";
  btn4.style.backgroundColor = "";
  btn4.style.color = "";
}

btn3.onclick = function () {
  btn3.style.backgroundColor = '#2196f3';
  btn3.style.color = "white";
  panel3.style.display = "block";
  panel3.style.backgroundColor = '#2196f3'
  panel1.style.display = "none"
  panel2.style.display = "none"
  panel4.style.display = "none"
  btn2.style.backgroundColor = "";
  btn2.style.color = "";
  btn1.style.backgroundColor = "";
  btn1.style.color = "";
  btn4.style.backgroundColor = "";
  btn4.style.color = "";
}

btn4.onclick = function () {
  btn4.style.backgroundColor = '#ff5722';
  btn4.style.color = "white";
  panel4.style.display = "block";
  panel4.style.backgroundColor = '#ff5722'
  panel2.style.display = "none"
  panel3.style.display = "none"
  panel1.style.display = "none"
  btn2.style.backgroundColor = "";
  btn2.style.color = "";
  btn3.style.backgroundColor = "";
  btn3.style.color = "";
  btn1.style.backgroundColor = "";
  btn1.style.color = "";
}


