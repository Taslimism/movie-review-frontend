import React, { useState, useEffect } from 'react';
import MovieElement from './MovieElement';

import axios from 'axios';
import { v4 as uuid } from 'uuid';

import style from './MarvelMovie.module.css';


const MarvelMovie = () => {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}movies`);
                setMovieData(data.data);
            } catch (err) {
                console.log(err);
            }
        })()
    }, []);

    const MARVEL = movieData.slice(31, 70);
    // console.log(MARVEL);
    return (<><div className={style.cards}>
        {MARVEL.map((movie) => <MovieElement key={uuid()} details={movie} />)}
    </div></>);
}

export default MarvelMovie;