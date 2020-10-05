import React from 'react';

import MenuHero from '../components/MenuHero';
import MenuList from '../components/MenuList';
import NavBar from '../components/NavBar';

const Menu = () => {
    return (
        <div className="Menu">
            <NavBar color="text-light" />
            <MenuHero />
            <MenuList />
        </div>
    );
}

export default Menu;