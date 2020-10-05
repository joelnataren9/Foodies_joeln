import React from 'react';

import './styles/MenuItems.scss';

class MenuItems extends React.Component {
    state = {
        loading: false,
        info: {
            data: [],
            links: [],
            meta: [],
        },
        error: null,
    }

    fetchMenu = async () => {
        this.setState({loading: true, error:null});

        try {
            let response = await fetch('https://api.elaniin.dev/api/menu');
            let dat =  await response.json();
            console.log(dat.data);
            this.setState({
                loading: false,
                info: {
                    data: dat.data,
                    links: dat.links,
                    meta: dat.meta,
                },
            });

        } catch (error) {
            this.setState({
                loading: false,
                error:error,
                })
            }
    }

    // ${this.activate()}

    displayMenuItems = (props) => {
        let dat = props.data;
        return (
            <React.Fragment>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                        {dat.map( (menu) => {
                            return (
                                    <div className="col-md-3">
                                        <div class="card mb-4 shadow-sm" key={menu.id}>
                                        {/* style="width: 18rem; */}
                                            <img src={`${menu.image}`} class="bd-placeholder-img card-img-top" alt={`${menu.name}`}/>
                                            <div class="card-body">
                                                <h5 class="card-title title-menu">{menu.name}</h5>
                                                <p class="card-text">
                                                    {menu.description}
                                                </p>
                                            </div>
                                            <ul class="list-group list-group-flush inline-block">
                                                <div class="list-group-item inline-block menu-item">
                                                    <div className="category inline-block">
                                                        {menu.category}
                                                    </div>

                                                    <div className="yellowed inline-block">
                                                    ${menu.price}
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                            );
                        })}
                        </div>
                        <div className="menu-numbers">
                            <button  className={`number`}> {props.meta.current_page} </button>
                            <button className="number isActive">2</button>
                            <button className="number">3</button>
                            <button className="number">4</button>
                            <button className="next">Siguiente</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.fetchMenu();
    }

    render() {
        return (
            <React.Fragment>
                {this.displayMenuItems(this.state.info)}
            </React.Fragment>
        );
    }
}

export default MenuItems;