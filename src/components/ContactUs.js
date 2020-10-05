import React from 'react';

import './styles/ContactUs.scss';

function ContactUs () {
    return(
        <React.Fragment>
            <div className="ContactUs w-full flex flex-wrap justify-center bg-black z-10 pb-64 lg:pb-12" id='Contactenos'>
                <div className="container">
                    <div className=" contact_title text-4xl lg:text-2xl xl:text-5xl mb-4 mt-20 xl:mt-40 text-center text-white">
                        Cuentanos tu experiencia
                    </div>
                    <h3 className="contact_description text-center text-white px-12 text-xl xl:text-3xl mb-5">
                    Don't miss out on our great offers & Receive deals from all our top restaurants via e-mail.
                    </h3>
                </div>
                <div className="form_container">
                    <div className="name-mail">
                        <div className="name">Nombre y Apellido</div>
                        <input type='text' placeholder='John Doe' className="f-na" />
                        <div className="mail">Correo electrónico</div>
                        <input type='email' placeholder='j.doe@correo.com' className="f-mail" />
                    </div>
                    <div className="message-container">
                        <div className="message">Mensaje</div>
                        <textarea placeholder='El día de ahora mi experiencia fue...' type="text" className="f-message"/>
                        <button className="send">Enviar comentarios</button>
                    </div>
                </div>
            </div>
            <div className="app">
                <div className="tele">
                    <img src="https://res.cloudinary.com/joeln7/image/upload/v1601795028/Foodies/Onboarding_3_Mockup_vnzh99.svg" alt="cellphone" className="phone"/>
                </div>
                <div className="phone-container">
                    <div className="phone-title">
                    Obten más beneficios
                    <span className="highlighted">Descarga nuestra App</span>
                    </div>
                    <div className="unodos">
                        <div className="solicita">
                            <div className="ellipse-container">
                                <img src="https://res.cloudinary.com/joeln7/image/upload/v1601825402/Foodies/Ellipse_fa91ux.svg" alt="ellipse amarilla" className="ellipse"/>
                                <div className="p-number">01</div>
                            </div>
                            <div className="phone-subtitle">Solicita rápido</div>
                            <div className="phone-text">Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.</div>
                            <img src="https://res.cloudinary.com/joeln7/image/upload/v1601825402/Foodies/flechita-iquierda_tcvgmp.svg" alt="flecha izquierda" className="left-a"/>
                        </div>
                        <div className="facil">
                            <div className="ellipse-container">
                                <img src="https://res.cloudinary.com/joeln7/image/upload/v1601825402/Foodies/Ellipse_fa91ux.svg" alt="ellipse amarilla" className="ellipse"/>
                                <div className="p-number">02</div>
                            </div>
                            <div className="phone-subtitle">Fácil de Usar</div>
                            <div className="phone-text">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
                            <img src="https://res.cloudinary.com/joeln7/image/upload/v1601825402/Foodies/flechita-derecha_aduvpe.svg" alt="flecha izquierda" className="right-a"/>
                        </div>
                    </div>
                    <div className="promos">
                            <div className="ellipse-container">
                                <img src="https://res.cloudinary.com/joeln7/image/upload/v1601825402/Foodies/Ellipse_fa91ux.svg" alt="ellipse amarilla" className="ellipse"/>
                                <div className="p-number">03</div>
                            </div>
                            <div className="phone-subtitle">Promociones especiales</div>
                            <div className="phone-text"> Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContactUs;