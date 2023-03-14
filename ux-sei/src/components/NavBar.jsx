import { useState } from "react"
import "./NavBar.css"
import Logo from '/Users/joynae/GA/portfolio-projects/Spotify-yt-practice/UX-SEI/ux-sei/src/Img/Drunk Cup 3 Black@3x.png'
import Hamburger from '/Users/joynae/GA/portfolio-projects/Spotify-yt-practice/UX-SEI/ux-sei/src/Img/hamburger.svg'




export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <img src={Logo} alt='logo' width='70%' height='10%' />
      </a>
      <img src={Hamburger} alt="burger" className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }} />

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
        <div className="theme-toggle">
          <span>Light</span>
          <label className="switch">
            <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
            <span className="slider round"></span>
          </label>
          <span>Dark</span>
        </div>
      </div>
    </nav>
  )
}
