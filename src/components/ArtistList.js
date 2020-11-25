import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {
  
    const renderList = ({ artistData }) => {
        if (artistData) {
            return artistData.map((item) => {
                const myImage={
                    background:`url('/images/covers/${item.cover}.jpg')`
                }
                return (
                    <div>
                        <Link to="/" key={item.id} style={myImage}>
                            <div>{item.name}</div>
                        </Link>
                    </div>
                )
            })
        }else{
            return (
                <img src="/images/loader1.gif" alt="loader" />
            )
        }
    }

    return (
        <div className="artist_list">
            <h4>List of Artists</h4>
            {renderList(props)}
        </div>
    )
}

export default ArtistList;
