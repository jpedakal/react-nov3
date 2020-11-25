import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {
  
    const renderList = ({ artistData }) => {
        if (artistData) {
            return artistData.map((item,index) => {
                return (
                    <div>
                        <Link to="/" key={index}>
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
