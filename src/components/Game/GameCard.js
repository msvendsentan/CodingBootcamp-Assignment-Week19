import React from "react";
import "./GameCard.css";

const GameCard = props => (
    <div 
        className="card shadow-lg d-flex"
        onClick={props.handleClick}
        data-value={props.children}
    >
        <div 
            className="card-body align-items-center d-flex justify-content-center"
            data-value={props.children}
        >
            {props.children}
        </div>
    </div>
);

export default GameCard;