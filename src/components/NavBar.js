import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import './styles/NavBar.scss';

function NavBar (props) {
    const [Menu, setMenu] = useState(' navbar-light bg-transparent')
    const [display, setDisplay] = useState(' display-none')

    const showMenu = () => {
        if(Menu === ' navbar-light bg-transparent') {
            setMenu('active');
            setDisplay(' ');
            return (Menu, display);
        } else if (Menu === 'active') {
            setMenu(' navbar-light bg-transparent');
            setDisplay(' display-none');
            return (Menu, display);
        }
    }

    return (
        <div className="">
            <div className="nav-container">
                <div className={` menu-bar navbar  ${Menu} `}>
                    <a className={`navbar-brand Foodies ${props.color}`} href='/#Hero'>Foodies</a>
                    <a className={`nav-item nav-link menu ${props.color} ${display}`} href='/#AboutUs'>Acerca de</a>
                    <a className={`nav-item nav-link menu2 ${props.color} ${display}`} href='/#Locations'>Restaurantes</a>
                    <Link className={`nav-item nav-link menu3 ${props.color} ${display}`} to='/Menu'>Menú</Link>
                    <a className={`nav-item nav-link menu4 ${props.color} ${display}`} href='/#Contactenos'>Contáctenos</a>
                </div>
                <img alt='menu' src='https://res.cloudinary.com/joeln7/image/upload/v1601913924/Foodies/foodies2/menu_vj6z5g.svg' className="button-menu" onClick={() => showMenu()} />
            </div>
        </div>
    );
}

export default NavBar;