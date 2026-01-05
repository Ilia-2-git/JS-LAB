// vars
let sentence = "The quick brown fox jumps over the lazy dog.";
let chars = sentence.split("");
let userInp = [];
let errors = 0;
let acc = 0;
let time = 60;
let isStarted = false;
let isKeyDown = false;
let intervalID = null;
let keyEvent = null;

// DomNodes
let display = document.querySelector(".main-display");
let startBtn = document.querySelector(".start");
let timer = document.querySelector(".timer");

// functions
function render(list) {
  display.innerHTML = ""; // Clear existing content
  timer.innerText = `${time}`;
  for (let char of chars) {
    let span = document.createElement("span");
    span.innerText = char;
    display.appendChild(span);
  }
}

function getInp(event) {
  // Only process printable characters
  if (event.key.length === 1 || event.key === " " || event.key === "Backspace") {
    keyEvent = event;
  }
}

function InpAccVisual() {
  let spans = document.querySelectorAll(".main-display span");
  let result = calcInput(chars, userInp);
  let index = result[1];
  
  // Reset all spans to default color
  spans.forEach(span => span.style.color = "black");
  
  // Color the current and previous characters
  for (let i = 0; i < userInp.length; i++) {
    if (i < spans.length) {
      if (chars[i] === userInp[i]) {
        spans[i].style.color = "green";
      } else {
        spans[i].style.color = "red";
      }
    }
  }
  
  // Highlight the next character
  if (userInp.length < chars.length) {
    spans[userInp.length].style.backgroundColor = "#f0f0f0";
  }
}

function calcInput(chars, userInp) {
  if (userInp.length === 0) return [false, 0];
  
  let lastIndex = userInp.length - 1;
  if (lastIndex >= chars.length) {
    return [false, chars.length - 1];
  }
  
  let isCorrect = chars[lastIndex] === userInp[lastIndex];
  if (!isCorrect) {
    errors += 1;
  }
  
  return [isCorrect, lastIndex];
}

function start() {
  if (!isStarted) {
    isStarted = true;
    time = 60;
    userInp = [];
    errors = 0;
    render(chars);
    
    if (intervalID) {
      clearInterval(intervalID);
    }
    
    intervalID = setInterval(main, 100);
  }
}

function main() {
  if (time <= 0) {
    clearInterval(intervalID);
    isStarted = false;
    calculateAccuracy();
    return;
  }
  
  if (isStarted && keyEvent) {
    if (keyEvent.key === "Backspace") {
      if (userInp.length > 0) {
        userInp.pop();
      }
    } else if (keyEvent.key.length === 1 || keyEvent.key === " ") {
      if (userInp.length < chars.length) {
        userInp.push(keyEvent.key);
      }
    }
    
    InpAccVisual();
    keyEvent = null;
  }
}

function calculateAccuracy() {
  let correct = 0;
  for (let i = 0; i < userInp.length && i < chars.length; i++) {
    if (chars[i] === userInp[i]) {
      correct++;
    }
  }
  
  acc = chars.length > 0 ? (correct / chars.length) * 100 : 0;
  console.log(`Test finished! Accuracy: ${acc.toFixed(2)}%, Errors: ${errors}`);
  alert(`Test finished! Accuracy: ${acc.toFixed(2)}%`);
}

function updateTimer() {
  if (isStarted && time > 0) {
    time -= 1;
    timer.innerText = `${time}`;
    
    if (time <= 0) {
      clearInterval(intervalID);
      calculateAccuracy();
    }
  }
}

function windowHandler(e) {
  isKeyDown = false;
  keyEvent = e;
}

// events
window.addEventListener("load", () => {
  render(chars);
});

startBtn.addEventListener('click', start);

window.addEventListener('keydown', (e) => {
  if (!isStarted) return;
  isKeyDown = true;
  getInp(e);
  e.preventDefault(); 
});

window.addEventListener('keyup', (e) => {
  isKeyDown = false;
});


setInterval(updateTimer, 1000);