const shopItems = [
  {
    id: 1,
    img: "./assets/products/wireless-headphones.jpg",
    title: "Wireless Headphones",
    category: "Electronics",
    price: 79.99,
  },
  {
    id: 2,
    img: "./assets/products/leather-watch.jpg",
    title: "Classic Leather Watch",
    category: "Accessories",
    price: 129.99,
  },
  {
    id: 3,
    img: "./assets/products/running-sneakers.jpg",
    title: "Running Sneakers",
    category: "Shoes",
    price: 89.5,
  },
  {
    id: 4,
    img: "./assets/products/minimal-backpack.jpg",
    title: "Minimal Backpack",
    category: "Bags",
    price: 59.99,
  },
  {
    id: 5,
    img: "./assets/products/fitness-band.jpg",
    title: "Smart Fitness Band",
    category: "Electronics",
    price: 49.99,
  },
  {
    id: 6,
    img: "./assets/products/cotton-hoodie.jpg",
    title: "Cotton Hoodie",
    category: "Clothing",
    price: 39.99,
  },
  {
    id: 7,
    img: "./assets/products/sunglasses.jpg",
    title: "Sunglasses Pro",
    category: "Accessories",
    price: 24.99,
  },
  {
    id: 8,
    img: "./assets/products/gaming-mouse.jpg",
    title: "Gaming Mouse",
    category: "Electronics",
    price: 34.99,
  },
];

// Nodes &  Vars
// Vars
let total = 0;
let Cart = [];

// DOM Nodes
const cards = document.querySelector(".cards");
const cartCounter = document.querySelector(".cart-counter");
const cartStatus = document.querySelector(".cart-status");
const numbers = document.querySelector(".numbers");
const Total = document.querySelector(".total");
