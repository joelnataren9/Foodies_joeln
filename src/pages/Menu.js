import React from 'react';

import Footer from '../components/Footer';
import MenuHero from '../components/MenuHero';
import MenuList from '../components/MenuList';
import NavBar from '../components/NavBar';
import './styles/Foodies.scss'

const Menu = () => {
    return (
        <div className="Foodies-container">
            <div className="Menu">
                <NavBar color="text-light" />
                <MenuHero />
                <MenuList />
                <Footer />
            </div>
        </div>
    );
}

export default Menu;