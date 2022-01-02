import React, { useContext } from 'react';


import style from './Backdrop.module.css';
import NavigationContext from './../../store/navigation-context';

const Backdrop = (props) => {
    const nctx = useContext(NavigationContext);
    return <div onClick={nctx.removeForm} className={style.backdrop}> {props.children} </div>;
}

export default Backdrop;