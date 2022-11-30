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
const slides = document.querySelectorAll("#slides");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const desktopSlides = document.querySelectorAll(".desktop-slides");
const prevdesktopBtn = document.querySelector("#prev-desktop-btn");
const nextdesktopBtn = document.querySelector("#next-desktop-btn");
const current_desktop_carousel_img = document.querySelector("#carousel-img");
const desktop_gallery_picker = document.querySelectorAll("#carousel-picker");

console.log(desktop_gallery_picker);

desktop_gallery_picker.forEach((img) =>
  img.addEventListener("click", (e) => {
    desktop_gallery_picker.forEach((img) => (img.style.opacity = 1));
    desktop_gallery_picker.forEach((img) => (img.style.border = "none"));
    current_desktop_carousel_img.src = e.target.src;
    e.target.style.opacity = opacity;
    e.target.style.border = "2px solid orange";
  })
);

let currentSlide = 0;

nextButton.addEventListener("click", () => {
  let nextSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "none";
  slides[nextSlide].style.display = "block";
  currentSlide = nextSlide;
});

prevButton.addEventListener("click", () => {
  let prevSlide = currentSlide == 0 ? slides.length - 1 : currentSlide - 1;
  slides[currentSlide].style.display = "none";
  slides[prevSlide].style.display = "block";
  currentSlide = prevSlide;
});

mobile_menu_btn.addEventListener("click", () => {
  mobile_menu.classList.remove("hidden");
});

mobile_menu_close_btn.addEventListener("click", () => {
  mobile_menu.classList.add("hidden");
});

let desktopCurrentSlide = 0;

nextdesktopBtn.addEventListener("click", () => {
  let nextSlide = (desktopCurrentSlide + 1) % desktopSlides.length;
  desktopSlides[desktopCurrentSlide].style.display = "none";
  desktopSlides[nextSlide].style.display = "block";
  desktopCurrentSlide = nextSlide;
});

prevdesktopBtn.addEventListener("click", () => {
  let prevSlide =
    desktopCurrentSlide === 0
      ? desktopSlides.length - 1
      : desktopCurrentSlide - 1;
  desktopSlides[desktopCurrentSlide].style.display = "none";
  desktopSlides[prevSlide].style.display = "block";
  desktopCurrentSlide = prevSlide;
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

if (screen.availWidth > 975) {
  current.addEventListener("click", () => {
    lightBox.classList.remove("hidden");
  });
}

carouselClosebtn.addEventListener("click", () => {
  lightBox.classList.add("hidden");
});
