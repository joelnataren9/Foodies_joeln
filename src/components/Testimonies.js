import React from 'react';

import './styles/Testimonies.scss';

const info = [
    {
        title: '"El mejor lugar para degustar en familia y amigos!"',
        description: 'Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.',
        numbers: '1/5'
    },
    {
        title: '"El mejor lugar para degustar en familia y amigos!"',
        description: 'Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.',
        numbers: '2/5'
    },
    {
        title: '"El mejor lugar para degustar en familia y amigos!"',
        description: 'Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.',
        numbers: '3/5'
    },
    {
        title: '"El mejor lugar para degustar en familia y amigos!"',
        description: 'Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.',
        numbers: '4/5'
    },
    {
        title: '"El mejor lugar para degustar en familia y amigos!"',
        description: 'Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.',
        numbers: '5/5'
    },
]


class Testimonies extends React.Component{
    render() {
        return(
            <div className="testimonies">
                <div className="Carousel">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='car-item d-block w-50'>
                                        <div className="title-item"> El mejor lugar para degustar en familia y amigos! </div>
                                        <div className="description-item">
                                        Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.
                                        </div>
                                        <div>
                                            <a className="arrow" href="#carouselExampleIndicators" role="button" data-slide="prev" aria-hidden="true">
                                            <span className="icon-arrow-left2 " aria-hidden="true"></span>
                                            </a>
                                            <div className="numbers">1/5</div>
                                            <a className="arrow" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                <span className="icon-arrow-right"></span>
                                            </a>
                                        </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='car-item d-block w-50'>
                                            <div className="title-item"> El mejor lugar para degustar en familia y amigos! </div>
                                            <div className="description-item">
                                            Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.
                                            </div>
                                            <div>
                                                <a className="arrow" href="#carouselExampleIndicators" role="button" data-slide="prev" aria-hidden="true">
                                                <span className="icon-arrow-left2 " aria-hidden="true"></span>
                                                </a>
                                                <div className="numbers">2/5</div>
                                                <a className="arrow" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                    <span className="icon-arrow-right"></span>
                                                </a>
                                            </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='car-item d-block w-50'>
                                            <div className="title-item"> El mejor lugar para degustar en familia y amigos! </div>
                                            <div className="description-item">
                                            Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.
                                            </div>
                                            <div>
                                                <a className="arrow" href="#carouselExampleIndicators" role="button" data-slide="prev" aria-hidden="true">
                                                    <span className="icon-arrow-left2 " aria-hidden="true"></span>
                                                </a>
                                                <div className="numbers">3/5</div>
                                                <a className="arrow" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                    <span className="icon-arrow-right"></span>
                                                </a>
                                            </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='car-item d-block w-50'>
                                            <div className="title-item"> El mejor lugar para degustar en familia y amigos! </div>
                                            <div className="description-item">
                                            Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.
                                            </div>
                                            <div>
                                                <a className="arrow" href="#carouselExampleIndicators" role="button" data-slide="prev" aria-hidden="true">
                                                    <span className="icon-arrow-left2 " aria-hidden="true"></span>
                                                </a>
                                                <div className="numbers">4/5</div>
                                                <a className="arrow" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                    <span className="icon-arrow-right"></span>
                                                </a>
                                            </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='car-item d-block w-50'>
                                            <div className="title-item"> El mejor lugar para degustar en familia y amigos! </div>
                                            <div className="description-item">
                                            Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.
                                            </div>
                                            <div>
                                                <a className="arrow" href="#carouselExampleIndicators" role="button" data-slide="prev" aria-hidden="true">
                                                    <span className="icon-arrow-left2 " aria-hidden="true"></span>
                                                </a>
                                                <div className="numbers">5/5</div>
                                                <a className="arrow" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                    <span className="icon-arrow-right"></span>
                                                </a>
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="https://res.cloudinary.com/joeln7/image/upload/v1601749367/Foodies/Subtract_hw6hyd.svg" alt="substract sign left" className="substract-l"/>
                    <img src="https://res.cloudinary.com/joeln7/image/upload/v1601750013/Foodies/Subtract-derecha_vq6q1q.svg" alt="substract sign right" className="substract-r"/>
                    <img src="https://res.cloudinary.com/joeln7/image/upload/v1601749368/Foodies/testimonials_bg_ketchup_kmu8gj.svg" alt="substract sign right" className="ketchup"/>
                </div>
            </div>
        );
    }
}

export default Testimonies;