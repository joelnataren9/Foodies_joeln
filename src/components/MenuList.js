import React from 'react';


import Categories from './Categories';
import MenuItems from './MenuItems';
import './styles/MenuList.scss';

const MenuList = () => {
    return (
        <div className="menu-list">
            <div className="search-list-cont">
                <div className="search">
                    <span className='ml-4 icon-search mr-4 i-search'></span>
                    <input className="form-search" type="search" placeholder="Buscar nombre o dirección" aria-label="Search" />
                </div>
                <div className="search-list">
                    <button className="todas">Todas</button>
                    <Categories />
                </div>
            </div>
            <MenuItems />
        </div>
    );
}

export default MenuList;