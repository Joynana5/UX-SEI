import { useState } from "react";
import "./NavBar.css";
import Hamburger from "../Img/hamburger.svg";
import Logo from "../Img/Drunk Cup 3 Black@3x.png";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <img src={Logo} alt="logo" width="70%" height="10%" />
      </a>
      <img
        src={Hamburger}
        alt="burger"
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      />

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">Shop All Products</a>
          </li>
          <li>
            <a href="/staff">Staff Favorites</a>
          </li>
          <li>
            <a href="/floral">Floral Blend</a>
          </li>
          <li>
            <a href="/hangover">Hangover Blend</a>
          </li>
          <li>
            <a href="/wellness">Wellness Blend</a>
          </li>
          <li>
            <a href="/seasonal">Seasonal Blend</a>
          </li>
          <li>
            <a href="/locator">Store Locator</a>
          </li>
          <li>
            <a href="/contact">About Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
