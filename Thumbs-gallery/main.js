let cars = ["aclass", "cclass", "cla", "gclass", "sclass"];
let images = document.querySelector(".small-images");
let big = document.querySelector(".big");
let allImages = document.querySelectorAll(".small-images img");
let p = document.querySelector("p");
function render(list) {
  for (const car of cars) {
    let image = document.createElement("img");
    image.setAttribute("src", `./cars/${car}.jpg`);
    images.appendChild(image);
    image.addEventListener("click", function () {
      handleChangeImage(car);
      let allImages = document.querySelectorAll(".small-images img");
      for (let img of allImages) {
        img.classList.remove("selected");
      }
      this.classList.add("selected");
    });
  }
}

function handleChangeImage(image) {
  big.setAttribute("src", `./cars/${image}.jpg`);
  p.innerText = image;
}

window.addEventListener("load", function () {
  render(cars);
});
