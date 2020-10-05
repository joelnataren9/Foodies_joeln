import React from 'react';

import Footer from '../components/Footer';
import MenuHero from '../components/MenuHero';
import MenuList from '../components/MenuList';
import NavBar from '../components/NavBar';

const Menu = () => {
    return (
        <div className="Menu">
            <NavBar color="text-light" />
            <MenuHero />
            <MenuList />
            <Footer />
        </div>
    );
}

export default Menu;