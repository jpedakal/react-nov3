import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {
  
    const renderList = ({ artistData }) => {
        if (artistData) {
            return artistData.map((data) => {
                return (
                    <div>
                        <Link to="/" key={data._id}>
                            <div>{data.name}</div>
                        </Link>
                    </div>
                )
            })
        }else{
            
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
