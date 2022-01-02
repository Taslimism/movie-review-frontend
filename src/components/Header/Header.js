import React from 'react';
import style from './Header.module.css';

import { Link } from 'react-router-dom';

import Navigation from './../Navigation/Navigation'


const Header = (props) => {


    return <div className={style.header}>
        <Link className={style["brand-name"]} to="/"><h3 className={style.title}>GoodMovies</h3></Link>
        <Navigation />
    </div>

}

export default Header;