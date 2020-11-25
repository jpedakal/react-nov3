import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {

    const renderList = ({ artistData }) => {
        return artistData.map((id, index) => {
            return (
                <div>
                    <Link to="/">
                        <div>{id.name}</div>
                    </Link>
                </div>
            )
        })
    }
    return (
        <div className="artist_list">
            <h4>List of Artists</h4>
            {renderList(props)}
        </div>
    )
}

export default ArtistList;
