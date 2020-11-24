import React, { Component, Fragment } from 'react';
import Banner from './Banner';

const url = "http://localhost:8000/get_artist"

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
            </Fragment>
        )
    }

    componentDidMount() {
        fetch(url, {
            method: "GET"
        })
            .then(data => {

            })
    }
}

export default Home;
