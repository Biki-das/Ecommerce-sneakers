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
const mobile_menu_btn = document.querySelector("#mobile-menu-btn");
const mobile_menu = document.querySelector("#mobile-menu");
const mobile_menu_close_btn = document.querySelector("#mobile-menu-close-btn");
const lightBox = document.querySelector("#light-box");
const carouselClosebtn = document.querySelector("#carousel-close");

mobile_menu_btn.addEventListener("click", () => {
  mobile_menu.classList.remove("hidden");
});

mobile_menu_close_btn.addEventListener("click", () => {
  mobile_menu.classList.add("hidden");
});

// cart-details toggler

cartTab.addEventListener("click", () => {
  cartDetails.classList.toggle("hidden");
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
  let initialcount = cartCount.textContent;
  let cartcount = Cart_item_count.textContent;
  let finalCount = Number(initialcount) + Number(cartcount);
  let count = finalCount;
  Cart_item_count.textContent = count;

  //
  if (count == 0) {
    Cart_item_count.classList.add("hidden");
  }

  if (count > 0) {
    checkoutBtn.classList.remove("hidden");
    checkoutBtn.classList.add("flex");
    cartInfo.classList.remove("hidden");
    cartInfo.classList.add("flex");
    cartEmpty.classList.add("hidden");
    Cart_item_count.classList.remove("hidden");
    Toastify({
      text: "Item added to cart!",
      gravity: "bottom",
      duration: 3000,
      backgroundColor: "#DB7033",
    }).showToast();
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
  Cart_item_count.classList.add("hidden");
  cartDetails.classList.add("hidden");
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
  cartDetails.classList.add("hidden");
  cartInfo.classList.add("hidden");
  cartEmpty.classList.remove("hidden");
  cartCount.textContent = count;
  Cart_item_count.textContent = count;
  Cart_item_count.classList.add("hidden");
  totalQty.textContent = count;
  totalPrice.textContent = "$" + `${count}` + ".00";
});

current.addEventListener("mouseover", () => {
  if (screen.availWidth > 975) {
    lightBox.classList.remove("hidden");
  }
});

carouselClosebtn.addEventListener("click", () => {
  lightBox.classList.add("hidden");
});
