import React from 'react';
// import {Link} from 'react-router-dom'

import './styles/Locations.scss';

class Locations extends React.Component {
    state = {
        toGoActivate: true,
        DeliveryActivate: false,
        loading: false,
        error: null,
        datatake: {
            data: [],
        },
        delivery: {
            data: [],
        }
    }

    fetchLocations = async () => {
        this.setState({loading: true, error:null});

        try {
            let response = await fetch('https://api.elaniin.dev/api/locations?type=takeaway');
            let data =  await response.json();
            console.log(data.data)
            this.setState({
                loading: false,
                datatake: {
                    data: data.data,
                },
            });

        } catch (error) {
            this.setState({
                loading: false,
                error:error,
                })
            }
    }
    fetchDelivery = async () => {
        this.setState({loading: true, error:null});

        try {
            let response = await fetch('https://api.elaniin.dev/api/locations?type=delivery');
            let dat =  await response.json();
            console.log(dat.data)
            this.setState({
                loading: false,
                delivery: {
                    data: dat.data,
                },
            });

        } catch (error) {
            this.setState({
                loading: false,
                error:error,
                })
            }
    }

    HandleClicktoGo = () => {
        this.setState({
            toGoActivate: true,
            DeliveryActivate: false,
        });
    }

    activatetoGo = () => {
        return (
            this.state.toGoActivate
            ? "isActive"
            : ""
        );
    }

    HandleClickDelivery = () => {
        this.setState({
            DeliveryActivate: true,
            toGoActivate: false,
        });
    }

    activateDel = () => {
        return (
            this.state.DeliveryActivate
            ? "isActive"
            : ""
        );
    }

    componentDidMount() {
        this.fetchLocations();
        this.fetchDelivery();
    }

    locations = (props) => {
        let loca = props.data;
        return (
            <div className="badge-container">
                {loca.map((loc) => {
                        return(
                        <div className="badge" key={loc.id}>
                            <div className="loc-title">
                                {loc.name}
                            </div>
                            <div className="takeaway_description">
                                Abierto de {loc.opening_time} m.d. - {loc.closing_time} p.m.
                            </div>
                            <div className="takeaway_description">
                                {loc.address}
                            </div>
                        </div>
                        )
                    })}
            </div>
        );
    }


    render() {
        return(
            <div className="d-sm-flex" id='Locations'>
                <div className="location">
                    <div className="title t-l">Estamos para ti</div>
                    <div className="d-flex">
                        <button className={`toGo ${this.activatetoGo()}`} onClick={this.HandleClicktoGo}>
                            <img src="https://res.cloudinary.com/joeln7/image/upload/v1601701769/Foodies/hamburguesa_xgkdxf.png" alt="delivery" className='mr-3 img-fluid toGoImg' />
                            <span className='toGo-delivery'>Para Llevar</span>
                        </button>
                        <button className={`delivery ${this.activateDel()}`} onClick={this.HandleClickDelivery}>
                        <img src="https://res.cloudinary.com/joeln7/image/upload/v1601688134/Foodies/delivery_f5kt6f.svg" alt="delivery" className='mr-3 img-fluid del' />
                            <span className='toGo-delivery'>Domicilio</span>
                        </button>
                    </div>
                    <div className="search">
                        <span className='ml-4 icon-search mr-4 i-search'></span>
                    <input className="form-search" type="search" placeholder="Buscar nombre o dirección" aria-label="Search">
                    </input>
                    </div>
                    {this.state.toGoActivate && this.locations(this.state.datatake)}
                    {this.state.DeliveryActivate && this.locations(this.state.delivery)}
                </div>
                <div className="img_location-container">
                    <img src="https://res.cloudinary.com/joeln7/image/upload/v1601686736/Foodies/Rectangle_4_su8jjz.svg" alt="San Salvador" className="img_location"/>
                </div>
            </div>
        );
    }

}

export default Locations;