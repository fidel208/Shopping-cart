fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    displayProducts(products);
  });

function displayProducts(products) {
  const container = document.getElementById("products-container");
  container.innerHTML = "";

  products.forEach((product) => {
    container.innerHTML += `
      <div class="product-card" data-id="${product.id}">
        <h3>${product.title}</h3>
        <p>Ksh ${product.price}</p>

        <div>
          <button class="decrement">-</button>
          <input type="number" value="1" min="1" class="quantity-input">
          <button class="increment">+</button>
        </div>

        <button class="add-to-cart">Add To Cart</button>
      </div>
    `;
  });

  attachEvents();
}

function attachEvents() {
  document.querySelectorAll(".product-card").forEach((card) => {
    const input = card.querySelector(".quantity-input");

    card.querySelector(".increment").onclick = () => {
      input.value = parseInt(input.value) + 1;
    };

    card.querySelector(".decrement").onclick = () => {
      if (input.value > 1) input.value--;
    };

    input.addEventListener("input", () => {
      if (input.value < 1 || isNaN(input.value)) {
        input.value = 1;
      }
    });

    card.querySelector(".add-to-cart").onclick = () => {
      const id = card.dataset.id;
      const name = card.querySelector("h3").textContent;
      const price = parseFloat(
        card.querySelector("p").textContent.replace("Ksh ", ""),
      );
      const quantity = parseInt(input.value);

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      let existing = cart.find((item) => item.id == id);

      if (existing) {
        existing.quantity += quantity;
      } else {
        cart.push({ id, name, price, quantity });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      updateCartCount();

      input.value = 1;
    };
  });
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total = cart.reduce((sum, item) => sum + item.quantity, 0);

  const el = document.getElementById("cart-count");
  if (el) el.textContent = total;
}

updateCartCount();
