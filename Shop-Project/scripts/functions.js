// All Functions are here
const renderCards = (list, target) => {
  target.innerHTML = "";
  cartCounter.innerHTML = Cart.length;
  const template = list.map((card) => {
    let btn = Cart.find((Id) => card.id === Id)
      ? `<button onclick="handleRemoveFromCart(${card.id} ,0)" class="remove-btn">Remove from Cart</button>`
      : `<button onclick="handleAddToCart(${card.id})" class="add-btn">Add to Cart</button>`;

    return `<div class="card">
        <img src="${card.img}" />
        <div class="card-info">
          <p class="card-title">${card.title}</p>
          <span class="card-price">${card.price}</span><br />
          <span class="category">${card.category}</span>
        </div>
        ${btn}
      </div>`;
  });
  target.innerHTML = template.join("");
};
const handleAddToCart = (CardId) => {
  Cart.push(CardId);
  renderCards(shopItems, cards);
  renderCart()
};
const handleRemoveFromCart = (CardId,price) => {
  const index = Cart.findIndex((id) => {
    return id === CardId;
  });
  Cart.splice(index, 1);
  renderCards(shopItems, cards);
  total -= price;
  renderCart()
};
const renderCart = () => {
  const template = Cart.map((itemId) => {
    const targetCard = shopItems.find((item) => item.id === itemId);
    total += targetCard.price;
    return `<div class="Cart--Card">
            <h3>${targetCard.title}</h3>
            <span>price: ${targetCard.price}</span>
            <button onclick="handleRemoveFromCart(${targetCard.id},${targetCard.price})" class="remove-btn">Remove</button>
        </div>`;
  });
  
  cartStatus.innerHTML = template.join("");
  numbers.innerHTML = Cart.length;
  Total.innerHTML=total;
};
