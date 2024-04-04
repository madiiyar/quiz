// const btn = document.querySelector(".btn");
// const hexCode = document.querySelector(".hexCode");

// const randomColorCode = ["#BBA6DD", "#FFB88A", "#FBC2C2", "#B4CFA4", "#A0C5E3"];

// btn.addEventListener("click", () => {
//   const random =
//     randomColorCode[Math.floor(Math.random() * randomColorCode.length)];
//   document.body.style.background = random;

//   hexCode.textContent = random;
// });

// const btn = document.querySelector(".btn");
// const hexCode = document.querySelector(".hexCode");

// const list = ["#BBA6DD", "#FFB88A", "#FBC2C2", "#B4CFA4", "#A0C5E3"];

// btn.addEventListener("click", () => {
//   const random = list[Math.floor(Math.random() * list.length)];
//   document.body.style.background = random;

//   hexCode.textContent = random;
// });

// const list = ["#BBA6DD", "#FFB88A", "#FBC2C2", "#B4CFA4", "#A0C5E3"];

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   const random = list[Math.floor(Math.random() * list.length)];
//   document.body.style.background = random;
// });

// const list = ["#BBA6DD", "#FFB88A", "#FBC2C2", "#B4CFA4", "#A0C5E3"];

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   const random = list[Math.floor(Math.random() * list.length)];
//   document.body.style.background = random;
// });

const list = ["#BBA6DD", "#FFB88A", "#FBC2C2", "#B4CFA4", "#A0C5E3"];
const hexCode = document.querySelector(".hexCode");

document.querySelector(".btn").onclick = function () {
  const random = list[Math.floor(Math.random() * list.length)];
  document.body.style.background = random;
  hexCode.textContent = random;
};
