import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./style.css";

export default function Homepage() {
  return (
    <>
      <header>
        <h1>
          Shopping <br /> Cart
        </h1>
        <nav className="top-nav">
          <div className="active">
            <a href="#">Home</a>
          </div>
          <div>
            <a href="shop.html">Shop</a>
          </div>
          <div>
            <a href="cart.html">Cart</a>
          </div>
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
    </>
  );
}
