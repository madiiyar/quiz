// let popup = document.getElementById("popup");

//       function openPopup() {
//         popup.classList.add("open-popup");
//         // popup.classList.add("open-popup");
//       }
//       function closePopup() {
//         popup.classList.remove("open-popup");
//       }


// let modal = document.getElementById("popup")


// document.getElementById("btnSub").onclick = function () {
//    modal.classList.add("open-popup")
// }

// document.getElementById("ok").onclick = function () {
//    modal.classList.remove("open-popup")
// }


let modal = document.getElementById("popup")
let btnSub = document.getElementById("btnSub")
let btnOk = document.getElementById("ok")

btnSub.onclick = function () {
   modal.classList.add("open-popup")
}

btnOk.onclick = function () {
   modal.classList.remove("open-popup")
}
