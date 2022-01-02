import React, { useState, useEffect } from 'react';
import MovieElement from './MovieElement';

import axios from 'axios';
import { v4 as uuid } from 'uuid';

import style from './DCMovie.module.css';


const DCMovie = () => {
    const [movieData, setMovieData] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/movies`);
                setMovieData(data.data);
            } catch (err) {
                console.log(err);
            }
        })()
    }, []);


    const DC = movieData.slice(0, 30);
    // console.log(DC);
    return (<>
        <div className={style.cards}>
            {DC.map((movie) => <MovieElement key={uuid()} details={movie} />
            )}
        </div>
    </>);
}

export default DCMovie;