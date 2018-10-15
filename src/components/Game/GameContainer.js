import React from "react";
import "./GameContainer.css";
import GameCard from "./GameCard";

const GameContainer = props => (
    <div className="container">
        <div className="cardgrid">
            {props.cards.map(card => 
                <GameCard
                    handleClick={props.handleClick}
                    key={card.id}
                >
                    {card.id}
                </GameCard>
            )}
        </div>
    </div>
);

export default GameContainer;