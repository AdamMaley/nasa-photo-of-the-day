import React from 'react'
import "./Card.scss";

function Card() {
    return (
        <div>
            <h1>{props.title}</h1>
            <img>{props.image}</img>
            <p>{props.text}</p>
        </div>
    )
}

export default Card;