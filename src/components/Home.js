import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import ArtistList from './ArtistList';

const url = "http://localhost:8000/get_artist"

class Home extends Component {
    constructor() {
        super()

        this.state = {
            artists: ""
        }
    }
    render() {
        console.log(">>>",this.state.artists)
        return (
            <Fragment>
                <Banner />
                <ArtistList artistData={this.state.artists}/>
            </Fragment>
        )
    }

    componentDidMount() {
        fetch(url, {
            method: "GET"
        })
            .then((res) => res.json())
            .then((data)=>{
                this.setState({artists: data})
            })
    }
}

export default Home;
