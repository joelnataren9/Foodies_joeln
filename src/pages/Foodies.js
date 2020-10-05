import React from 'react';

import Hero from '../components/Hero.js';
import AboutUs from '../components/About-Us';
import Locations from '../components/Locations.js';
import Testimonies from '../components/Testimonies.js';
import ContactUs from '../components/ContactUs.js';
import Footer from '../components/Footer.js';

import './styles/Foodies.scss';

function Foodies() {
    return(
        <div className='Foodies-container'>
            <Hero />
            <AboutUs />
            <Locations />
            <Testimonies />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Foodies;