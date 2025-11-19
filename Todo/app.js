// JS
const textInput = document.querySelector("#name-input");
const typeInput = document.querySelector("#task-selector");
let taskList = document.querySelector("ul");
function handleSubmitTask() {
  let taskName = textInput.value;
  let taskType = typeInput.value;
  let li = document.createElement("li");
  li.innerHTML=taskName;
  taskList.appendChild(li)

  //   conditions for types :
  if (taskType === "todo") {
    li.style.color = "gray";
  }
  if (taskType === "in progress") {
    li.style.color = "orange";
  }
  if (taskType === "done") {
    li.style.color = "green";
  }
  textInput.value = "";
  textInput.focus()
}
