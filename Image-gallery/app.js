// js
let display = document.querySelector(".DisplayImage");
let currentImage = 1;
let counter = document.querySelector(".counter");
function changeBg(Value) {
  if (currentImage === 5) {
    currentImage = 0;
  }
  if (Value) {
    currentImage++;
    display.setAttribute("src", "./images/" + String(currentImage) + ".jpg");
  } else {
    currentImage--;
    display.setAttribute("src", "./images/" + String(currentImage) + ".jpg");
  }
  counter.innerHTML = String(currentImage) + "/5";
}
// next Hw
let displayImage = document.querySelector(".display");
function changeImg(Value) {
  displayImage.setAttribute("src", "./images/" + String(Value) + ".jpg");
}
