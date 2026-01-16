let handleCheckValid = () => {
  let isError = "";
  if (!inpName.value.trim()) {
    AlertP.textContent = "لطفا نام غذا را وارد کنید!";
    inpName.focus();
    isError = "validationError";
  }
  if (!inpPrice.value.trim()) {
    AlertP.textContent = "لطفا قیمت غذا را وارد کنید!";
    inpPrice.focus();
    isError = "validationError";
  }
  if (!inpKal.value.trim()) {
    AlertP.textContent = "لطفا میزان کالری غذا را وارد کنید!";
    inpKal.focus();
    isError = "validationError";
  }
  if (inpType.value === "placeholder") {
    AlertP.textContent = "لطفا دسته بندی غذا را انتخاب کنید!";
    inpType.focus();
    isError = "validationError";
  }

  if (isError === "validationError") {
    return "ValidationError";
  }
};

let handleGetInfo = () => {
  let newCard = {
    Name: inpName.value,
    type: inpType.value,
    price: inpPrice.value,
    kal: inpKal.value,
  };
  inpName.value = "";
  inpPrice.value = "";
  inpKal.value = "";
  inpName.focus();
  AlertP.innerText = "";
  return newCard;
};
let createNewCard = (obj) => {
  // making the card including the card Class.
  let card = document.createElement("div");
  card.classList.add("card");
  // create Elements
  let img = document.createElement("img");
  let h1 = document.createElement("h1");
  let spanPrice = document.createElement("span");
  let spanKal = document.createElement("span");
  //inserting data to the card
  h1.textContent = obj.Name;
  spanPrice.textContent = ` قیمت:${obj.price}`;
  spanKal.textContent = ` کالری:${obj.kal}`;
  img.setAttribute("src", `./Images/${obj.type}.jpg`);
  // append Elements to the card
  card.appendChild(img);
  card.appendChild(h1);
  card.appendChild(spanPrice);
  card.appendChild(spanKal);
  // append the card to the Cards section.
  cards.appendChild(card);
};

// Final function
let handleBtnClicked = () => {
  // check if inputs are valid.
  const valid = handleCheckValid();
  // get the values of the inputs.

  // add a new card to the display.
  if (!(valid === "ValidationError")) {
    const newObj = handleGetInfo();
    createNewCard(newObj);
  }
};
