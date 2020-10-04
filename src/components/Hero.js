import React from 'react';

import NavBar from './NavBar';
import './styles/Hero.scss';

function Hero() {
    return(
        <div className="Hero" id='Hero'>
            <NavBar />
            <div className="hero_container">
                <img src="https://res.cloudinary.com/joeln7/image/upload/v1601650989/Foodies/mask_hero_hvad2c.svg" alt="mask_hero" className='mask_hero' />
                <div className=" flex-column hero_description">
                    <div className=" title">Un nuevo sabor está en <span className='city'>la ciudad</span> </div>
                    <div className="descrip2">Estamos a puntos de descubrir un mundo lleno de sabores y de emociones inigualables</div>
                    <div className="descrip3">
                        <span className='mr-3'>Encuentranos</span>
                        <span className='icon-arrow-right'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;