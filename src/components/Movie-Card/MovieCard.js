import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import style from './MovieCard.module.css';

// import Card from './../UI/Card';
import MovieElement from './MovieElement';

const MovieCard = () => {
    const [movieData, setMovieData] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [searchedData, setSearchedData] = useState([]);
    const searchInput = useRef();
    // let DC_MOVIES;
    // let MARVEL_MOVIES;
    const handleChange = async () => {

        const search = searchInput.current.value;
        if (!search || search === '') {
            setIsSearching(false);
            return;
        }
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/movies/search`, { search: search });
            if (data.movie.length > 0) {
                setSearchedData(data.movie);
                setIsSearching(true);
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => (async () => {
        const { data } = await axios(`${process.env.REACT_APP_BACKEND_URL}api/movies`);
        setMovieData(data.data);
        // console.log(data.data);
    })(), []);

    const DC_MOVIES = movieData.slice(0, 6);
    const MARVEL_MOVIES = movieData.slice(31, 37);

    return (
        <div>
            <form className={style.form}>
                <input onChange={handleChange} ref={searchInput} className={style.search} placeholder="Search for your favorite Marvel or DC movie"></input>
            </form>
            {
                isSearching && <div className={style.cardOver}>
                    {searchedData.map(movie => <MovieElement key={uuid()} details={movie} />)}

                </div>
            }
            {!isSearching &&
                <div>
                    <h1><Link className={style.link} to="/DC"> DC MOVIES </Link></h1>
                    <br />

                    <div className={style.cardOver}>
                        {DC_MOVIES.map(movie => <MovieElement key={uuid()} details={movie} />)}
                        <Link className={style.linkMore} to="/DC">...more</Link>
                    </div>
                    <h1><Link className={style.link} to="/Marvel"> MARVEL MOVIES </Link></h1>
                    <br />

                    <div className={style.cardOver}>
                        {MARVEL_MOVIES.map(movie => <MovieElement key={uuid()} details={movie} />)}
                        <Link to="/Marvel" className={style.linkMore}>...more</Link>
                    </div>
                </div>}
        </div>)


}


export default MovieCard;