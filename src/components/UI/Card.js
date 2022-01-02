import React from "react";

import style from './Card.module.css';


const Card = (prop) => {
    return <div className={`${style.card} ${prop.className}`} >{prop.children}</div>;
}

export default Card;