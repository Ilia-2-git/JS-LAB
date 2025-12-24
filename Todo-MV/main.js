//general data -> Vars & Nodes
let tasks = document.querySelector(".tasks");
let btn = document.querySelector("button");
let InpName = document.querySelector("#task-name");

// controller
function controller() {
  
  let name = InpName.value;

  model(name);
}
//model
function model(name) {
  let task = document.createElement("div");

  task.innerText = name;

  render(task);
}

//view
function render(taskChild) {
  tasks.appendChild(taskChild);
}

// events
btn.addEventListener("click", controller);
