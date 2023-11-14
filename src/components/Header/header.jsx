import React, { useState } from 'react';
import Logo from "../../Imgs/Logo.png";
import Toggler from "./Burger/Toggler/toggler"
import BurgerMenu from "./Burger/burger";
import './header.scss';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuClass = menuOpen ? 'menu-open' : '';

  return (
    <div className={`Body ${menuClass}`}>
      <div className="Header">
        {menuOpen ? (
          <Toggler />
        ) : (
          <img src={Logo} alt="Casa-Calda Logo" className='CasaLogo'/>
        )}
        <div className="burgerdiv" onClick={toggleMenu}>
          <BurgerMenu menuOpen={menuOpen} />
        </div>
      </div>
    </div>
  );
}