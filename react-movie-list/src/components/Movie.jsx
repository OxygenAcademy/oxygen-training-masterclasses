import React from 'react';
import { useState, useContext } from 'react';
import UserContext from "../contexts/UserContext";
 
const Movie = ({title, year}) => {
    const [titleMovie, setTitleMovie] = useState(title);

    const changeTitle = (e) => {
        setTitleMovie(e.target.value);
    }

    const user = useContext(UserContext);

    return (
        <div>
            <h1>Título: {titleMovie}</h1>
            <h1>Año: {year}</h1>

            <input type="text" value={titleMovie} onChange={(e) => changeTitle(e)} />

            <h2>{user.name}</h2>
        </div>
    );
};

export default Movie;