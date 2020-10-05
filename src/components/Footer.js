import React from 'react';

import './styles/Footer.scss';

function Footer () {
    return (
        <div className="footer">
            <div className="footer-title">
                <img src="https://res.cloudinary.com/joeln7/image/upload/v1601848105/Foodies/Foodies_dh9pwb.svg" alt="Foodies" className="foodies-img"/>
            </div>
            <div className="play-appstore">
                <img src="https://res.cloudinary.com/joeln7/image/upload/v1601832753/Foodies/appstore_rnagn8.svg" alt="" className="appstore"/>
                <img src="https://res.cloudinary.com/joeln7/image/upload/v1601832753/Foodies/playstore_g0j2qt.svg" alt="" className="playstore"/>
            </div>
            <div className="line"></div>
            <div className="links">
                <button className="footer_last">Conoce nuestras sucursales</button>
                <button className="footer_last">Acerca de</button>
                <button className="footer_last">Conoce nuestras sucursales</button>
                <button className="footer_last">¿Qué hablan de nosotros?</button>
                <button className="footer_last">Contáctanos</button>
            </div>
        </div>
    );
}

export default Footer;