import React from 'react';

import { Link } from 'react-router-dom';

import style from './MovieElement.module.css';
import Card from './../UI/Card';

const MovieElement = (prop) => {
    // console.log(prop.details._id);
    const date = prop.details.release && prop.details.release.substring(0, 10);

    return <Card className={style.card}>
        <div className={style.banner}>
            <img src={prop.details.thumbnail} alt="Poster" />
        </div>
        <div className={style["title__container"]}>
            <Link to={`/${prop.details._id}`}>
                <h2 className={style.title} >{prop.details.title}</h2>
            </Link>
            <h4 className={style.release}>{date}</h4>
        </div>
        {/* <p className={style.overView}>{prop.details.overview}</p> */}
    </Card>
}

// 
// 
// 
export default MovieElement;