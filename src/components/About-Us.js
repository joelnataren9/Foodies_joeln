import React from 'react';
// import {Link} from 'react-router-dom'

import './styles/AboutUs.scss'
function AboutUs() {
    return(
        <div className="d-sm-flex mb-5" id='AboutUs'>
            <div className="figure_img-container">
                <img src="https://res.cloudinary.com/joeln7/image/upload/v1601680034/Foodies/aGZeHyx-jfo_frso9t.svg" alt="About_us" className="figure_img"/>
            </div>
            <div className="about_Us">
                <img src="https://res.cloudinary.com/joeln7/image/upload/v1601682022/Foodies/Vector_3_nrbyhw.svg" alt="rays" className="rays"/>
                <div className="about_Us-container">
                    <div className="about_Us-title">¿Quién es Foodies?</div>
                    <div className="about_Us-description">
                    Elit irure ad nulla id elit laborum nostrud mollit irure. Velit reprehenderit sunt nulla enim aliquip duis tempor est culpa fugiat consequat culpa consectetur Lorem. Reprehenderit dolore culpa irure eiusmod minim occaecat et id minim ullamco.
                    </div>
                    <div className="descrip3">
                        <span className='mr-3'>Contáctanos</span>
                        <span className='icon-arrow-right'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
