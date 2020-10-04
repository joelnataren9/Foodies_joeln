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
    state = {
        currentSlide: 0,
        data: info,
    }

    // actions = () => {
    //     const toggleNext = () => {
    //         console.log("something worked");
    //         var current = this.state.currentSlide;
    //         var next = current + 1;
    //         if (next > state.data.length - 1) {
    //         next = 0;
    //         }
    //         state.currentSlide = next;
    //         render(state)
    //     },
    //     togglePrev: function() {
    //         console.log("something worked");
    //         var current = state.currentSlide;
    //         var prev = current - 1;
    //         if (prev < 0) {
    //         prev = state.data.length - 1;
    //         }
    //         state.currentSlide = prev;
    //         render(state);
    //     },
    //     toggleSlide: function(id) {
    //         console.log("something worked");
    //     var index = state.data.map(function (el) {
    //         return (
    //             el.id
    //         );
    //     });
    //     var currentIndex = index.indexOf(id);
    //     state.currentSlide = currentIndex;
    //     render(state);
    //     }
    // }

    // togglePrev= () => {
    //     actions.togglePrev();
    // }
    // toggleNext= () => {
    //     actions.toggleNext();
    // }

    render() {
        return(
            <div className="testimonies">
                <div className="Carousel">
                        {/* {this.state.data.map( (data, index) => { */}
                            {/* let isActive = this.state.currentSlide === index; */}
                        {this.state.data.map( (data) => {
                            return(
                                <div className='car-item'>
                                    <div className="title-item"> {data.title} </div>
                                    <div className="description-item">
                                        {data.description}
                                    </div>
                                    <div>
                                        <span className="icon-arrow-left2" onClick={this.previousSlide}></span>
                                        <div className="numbers">{data.numbers}</div>
                                        <span className="icon-arrow-right" onClick={this.nextSlide}></span>
                                    </div>
                                </div>
                            );
                        })}
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