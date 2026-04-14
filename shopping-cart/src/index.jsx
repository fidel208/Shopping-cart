import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./style.css";

export default function Homepage() {
  return (
    <>
      <header>
        <h1>Shopping Cart</h1>
        <nav className="top-nav">
          <a href="#" className="active">Homepage</a>
          <a href="shop.html">Shop</a>
          <a href="cart.html">
            Cart (<span id="cart-count">0</span>)
          </a>
        </nav>
      </header>
      <aside>
        <nav className="aside-nav">
          <div>Profile</div>
          <div>Settings</div>
          <div>Help</div>
          <div>Contact us</div>
          <div>Log out</div>
        </nav>
      </aside>
      <main>
        <section className="search">
          <form>
            <input
              type="search"
              placeholder="Search for items, products and gadgets"
            />
            <button type="submit">Search</button>
          </form>
        </section>
        <section className="slide">
          <div className="slider"></div>
          <p>
            Hello, Welcome to our online store. <br /> We offer a variety of
            products that you can choose from
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2026 Fidempa</p>
        <p>Finora Technologies</p>
      </footer>
    </>
  );
}
