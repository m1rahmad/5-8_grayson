import Logo from "../images/logo.svg";
import DownLogo from "../images/down.svg";
import SearchLogo from "../images/search.svg";
import { useState } from "react";



function Navbar() {
    const [value,setValue] = useState('')
  return (
    <div>
        <nav className="header__nav container">
            <a href="" className="header__logo"><img src={Logo} alt="logo"/></a>
            <ul className="header__list">
                <li className="header__item"><a href="" className="header__link">HOME</a></li>
                <li className="header__item"><a href="" className="header__link">PAGES</a></li>
                <li className="header__item">
                    <a href="" className="header__link">PORTFOLIO <img src={DownLogo} alt="down"/></a>
                    <ul className="header__dropdown">
                        <li className="header__dropdown-item"><a href="" className="header__dropdown-link">SHOP</a></li>
                        <li className="header__dropdown-item"><a href="" className="header__dropdown-link">FASHION</a></li>
                        <li className="header__dropdown-item"><a href="" className="header__dropdown-link">GALLERY</a></li>
                    </ul>
                </li>
                <li className="header__item"><a href="" className="header__link">BLOG</a></li>
                <li className="header__item"><a href="" className="header__link">ABOUT</a></li>
                <li className="header__item"><a href="" className="header__link">SHORTCODES</a></li>
            </ul>
            <div className="header__search">
                <input type="text" 
                className="header__search-input" 
                placeholder="Search"
                value={value}
                onChange={(e)=>setValue(e.target.value)}/>
                <button className="header__search-button"><img src={SearchLogo} alt="search"/></button>
            </div>
        </nav>



    </div>
  )
}

export default Navbar