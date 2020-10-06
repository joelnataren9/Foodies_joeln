import React from 'react';
import './styles/MenuList.scss';

class Categories extends React.Component {
    state = {
        loading: false,
        info: {
            data: [],
        },
        error: null,
    }

    fetchCategories = async () => {
        this.setState({loading: true, error:null});

        try {
            let response = await fetch('https://api.elaniin.dev/api/categories');
            let dat =  await response.json();
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

    displayCategories = (props) => {
        let dat = props.data;
        return (
            <React.Fragment>
                {dat.map( (category) => {
                    return (
                            <button className="todas" key={category.id}> {category.name}</button>
                        );
                })}
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.fetchCategories();
    }

    render() {
        return (
            <React.Fragment>
                {this.state.loading === false && this.displayCategories(this.state.info)}
            </React.Fragment>
        );
    }

}

export default Categories;