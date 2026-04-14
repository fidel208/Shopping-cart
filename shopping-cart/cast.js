// Display cart items
function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cart-container");

  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty</p>";
    return;
  }

  cart.forEach((item) => {
    container.innerHTML += `
      <div class="cart-item" data-id="${item.id}">
        <h3>${item.name}</h3>
        <p>Ksh ${item.price}</p>

        <button class="decrement">-</button>
        <span>${item.quantity}</span>
        <button class="increment">+</button>

        <button class="remove">Remove</button>
      </div>
    `;
  });

  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  container.innerHTML += `<h2>Total: Ksh ${total.toFixed(2)}</h2>`;

  attachCartEvents();
}

function attachCartEvents() {
  document.querySelectorAll(".cart-item").forEach((card) => {
    const id = card.dataset.id;

    card.querySelector(".increment").onclick = () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      let item = cart.find((i) => i.id == id);
      item.quantity++;

      save(cart);
    };

    card.querySelector(".decrement").onclick = () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      let item = cart.find((i) => i.id == id);
      item.quantity--;

      if (item.quantity <= 0) {
        cart = cart.filter((i) => i.id != id);
      }

      save(cart);
    };

    card.querySelector(".remove").onclick = () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart = cart.filter((i) => i.id != id);

      save(cart);
    };
  });
}

function save(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  updateCartCount();
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total = cart.reduce((sum, item) => sum + item.quantity, 0);

  const el = document.getElementById("cart-count");
  if (el) el.textContent = total;
}

displayCart();
updateCartCount();
