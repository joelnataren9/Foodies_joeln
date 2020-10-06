import React from 'react';

import './styles/MenuHero.scss'
const Menu_hero = () => {
    return (
        <div className="menu_hero ">
            <div className="img-container">
                <img src="https://res.cloudinary.com/joeln7/image/upload/v1601876803/Foodies/Subtract-menu_orvjqm.svg" alt="Vector amarillo" className="vector"/>
                <img src="https://res.cloudinary.com/joeln7/image/upload/v1601878119/Foodies/foodies2/hero_hamburger_nhbply.svg" alt="hamburguesa" className="burguer"/>
            </div>
            <div className="hero-title">
                Cada Sabor es una nueva
                <span className="experiencia">experiencia</span>
            </div>
        </div>
    );
}

export default Menu_hero;