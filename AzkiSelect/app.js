// DOM nodes
const select = document.querySelector("#main");
const secondSelect = document.querySelector("#secondary");
let handleCreateOption = (list, targetElement) => {
  targetElement.innerHTML = "";
  for (let option of list) {
    const node = document.createElement("option");
    node.innerText = option.title;
    node.setAttribute("value", option.title);
    targetElement.appendChild(node);
  }
};

let handleChangeOption = (event) => {
  let valueOfOption = event.target.value;
  let list = VEHICLES.find((item)=>{
    return (item.title == valueOfOption)
  });
  handleCreateOption(list.usages, secondSelect);
};
window.addEventListener("load", () => {
  handleCreateOption(VEHICLES, select);
  handleCreateOption(VEHICLES[0].usages,secondSelect)
});
select.addEventListener("change", handleChangeOption);
