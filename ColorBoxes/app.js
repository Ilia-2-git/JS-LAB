// variables / nodes
const boxes = document.querySelectorAll(".box");
let counter = document.querySelector("p");
let counts = 0;

// functions
function makeRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function handleRandomBackground() {

  if (window.getComputedStyle(this).backgroundColor === "rgb(145, 137, 137)") {
    const r = makeRandomNumber(0, 225);
    const g = makeRandomNumber(0, 225);
    const b = makeRandomNumber(0, 225);
    this.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    counts++;
  } else {
    this.style.backgroundColor = "rgb(145, 137, 137)";
    counts--;
  }
  counter.innerText=counts
}

// events
for (let index = 0; index < boxes.length; index++) {
  boxes[index].addEventListener("click", handleRandomBackground);
}
