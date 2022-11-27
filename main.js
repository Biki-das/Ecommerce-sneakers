import "./style.css";

const cartDetails = document.querySelector("#cart-details");
const cartTab = document.querySelector("#cart-tab");
const cartInfo = document.querySelector("#cart-info");
const ImageHolder = document.querySelectorAll("#img-gallery");
const current = document.querySelector("#active-image");
const opacity = "0.4";
const cartCount = document.querySelector("#cart-count");
const cartIncreasebtn = document.querySelector("#btn-decrease");
const cartDecreasebtn = document.querySelector("#btn-increase");
const Add_card_btn = document.querySelector("#Add-cart-btn");
const Cart_item_count = document.querySelector("#cart-item-count");
const singlePrice = document.querySelector("#item-price");
const totalQty = document.querySelector("#total-quantity");
const totalPrice = document.querySelector("#total-price");
const deleteCart = document.querySelector("#delete-cart");
const checkoutBtn = document.querySelector("#checkout-btn");
const cartEmpty = document.querySelector("#cart-empty");

// cart-details toggler

cartTab.addEventListener("click", () => {
  cartDetails.classList.remove("hidden");
});

cartDetails.addEventListener("mouseleave", () => {
  cartDetails.classList.add("hidden");
});

// ImageGallery

ImageHolder.forEach((img) =>
  img.addEventListener("click", (e) => {
    ImageHolder.forEach((img) => (img.style.opacity = 1));
    ImageHolder.forEach((img) => (img.style.border = "none"));
    current.src = e.target.src;
    e.target.style.opacity = opacity;
    e.target.style.border = "2px solid orange";
  })
);

// Cart-Holder-logic

cartIncreasebtn.addEventListener("click", () => {
  let count = cartCount.textContent;
  count++;
  cartCount.textContent = count;
});

cartDecreasebtn.addEventListener("click", () => {
  let count = cartCount.textContent;
  if (count > 0) {
    count--;
    cartCount.textContent = count;
  }
});

// cart-item-add logic

Add_card_btn.addEventListener("click", () => {
  let count = cartCount.textContent;
  Cart_item_count.textContent = count;

  //

  if (count > 0) {
    console.log(cartEmpty);
    checkoutBtn.classList.remove("hidden");
    checkoutBtn.classList.add("flex");
    cartInfo.classList.remove("hidden");
    cartInfo.classList.add("flex");
    cartEmpty.classList.add("hidden");
  }

  // setting the cart amount
  totalQty.textContent = count;
  let unitPrice = singlePrice.textContent.split("$")[1];
  let finalQuantity = totalQty.textContent;
  let finalPrice = unitPrice * finalQuantity;
  totalPrice.textContent = "$" + `${finalPrice}` + ".00";
});

// cart-delete-logic

deleteCart.addEventListener("click", () => {
  let count = 0;
  checkoutBtn.classList.add("hidden");
  cartInfo.classList.add("hidden");
  cartEmpty.classList.remove("hidden");
  Cart_item_count.textContent = count;
});

//checkout-logic

checkoutBtn.addEventListener("click", () => {
  Swal.fire(
    "Congratulations",
    "Your order has been placed successfully!",
    "success"
  );
  let count = 0;
  checkoutBtn.classList.add("hidden");
  cartInfo.classList.add("hidden");
  cartEmpty.classList.remove("hidden");
  cartCount.textContent = count;
  Cart_item_count.textContent = count;
  totalQty.textContent = count;
  totalPrice.textContent = "$" + `${count}` + ".00";
});
