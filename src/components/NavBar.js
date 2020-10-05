import React from 'react'
import {Link} from 'react-router-dom';
import './styles/NavBar.scss';

function NavBar (props) {
    return (
        <div className="">
            <div className="nav-container">
                <div className="navbar navbar-light bg-transparent ">
                    <a className={`navbar-brand Foodies ${props.color}`} href='/#Hero'>Foodies</a>
                    <a className={`nav-item nav-link menu ${props.color}`} href='/#AboutUs'>Acerca de</a>
                    <a className={`nav-item nav-link menu2 ${props.color}`} href='/#Locations'>Restaurantes</a>
                    <Link className={`nav-item nav-link menu3 ${props.color}`} to='/Menu'>Menú</Link>
                    <a className={`nav-item nav-link menu4 ${props.color}`} href='/#Contactenos'>Contáctenos</a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;