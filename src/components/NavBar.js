import React from 'react'
import {Link} from 'react-router-dom';
import './styles/NavBar.scss';

function NavBar () {
    return (
        <div className="">
            <div className="nav-container">
                <div className="navbar navbar-light bg-transparent ">
                    <a className='navbar-brand Foodies' href='/#Hero'>Foodies</a>
                    <a className='nav-item nav-link menu' href='/#AboutUs'>Acerca de</a>
                    <a className='nav-item nav-link menu2' href='/#Locations'>Restaurantes</a>
                    <Link className='nav-item nav-link menu3' to='/Acerca de'>Menú</Link>
                    <Link className='nav-item nav-link menu4' to='/Acerca de'>Contáctenos</Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;