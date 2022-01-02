import React from 'react';


import style from './Banner.module.css';

const Banner = () => {
    return <div className={style.container}>
        <img className={style.hero} src="./images/hero.jpg" alt="Aesthetically pleasing"></img>
        {/* <form action="" className={style.form}>
            <input className={style.search} placeholder="Search for your favorite Marvel or DC movie"></input>
        </form> */}
    </div>
}

export default Banner;