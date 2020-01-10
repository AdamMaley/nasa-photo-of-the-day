import React from 'react'
import "./Card.scss";

function Card(props) {
    console.log(props);
    return (
        <div>
            <h1>{props.data.title}</h1>
            <p>{props.data.date}</p>
            <img src={props.data.url} alt="Perihelion to Aphelion"/>
            <p>{props.data.explanation}</p>
        </div>
    )
}

export default Card;