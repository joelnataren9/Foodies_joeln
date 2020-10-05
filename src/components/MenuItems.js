import React from 'react';



class MenuItems extends React.Component {
    state = {
        loading: false,
        info: {
            data: [],
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
                },
            });

        } catch (error) {
            this.setState({
                loading: false,
                error:error,
                })
            }
    }

    displayMenuItems = (props) => {
        let dat = props.data;
        return (
            <React.Fragment>
                {dat.map( (menu) => {
                    return (
                        <div class="card" style="width: 18rem;">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <div class="list-group-item">Cras justo odio</div>
                            </ul>
                        </div>
                        );
                })}
            </React.Fragment>
        );
    }

    render() {
        return (
            <React.Fragment>
                {this.fetchMenu()}
            </React.Fragment>
        );
    }
}

export default MenuItems;