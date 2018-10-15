import React from "react";
import "./GameCard.css";

const GameCard = props => (
    <div 
        className="card"
        onClick={props.handleClick}
        data-value={props.children}
    >
        <div 
            className="card-body"
            data-value={props.children}
        >
            {props.children}
        </div>
    </div>
);



export default GameCard;