import React from 'react';

const Movie = ({ id, titulo, overview, img }) => {
    return (
        <li>
            <h3>{titulo}</h3>
            <img src={`http://image.tmdb.org/t/p/w500/${img}`}/>
            <p>{overview}</p>
        </li>
    );
}

export default Movie;
