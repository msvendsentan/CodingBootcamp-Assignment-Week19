import React from "react";
import "./GameContainer.css";
import GameCard from "./GameCard";

const GameContainer = props => (
    <div className="container">
        <div className="cardgrid">
            {props.cards.map(card => 
                <GameCard
                    handleClick={props.handleClick}
                    cardId={card.id}
                    guessed={props.guessed}
                    cheat={props.cheat}
                    key={card.id}
                >
                    <img src={require(`../../../public/images/${card.src}.jpg`)} alt={card.id} data-value={card.id} height="200" width="300"></img>
                </GameCard>
            )}
        </div>
    </div>
);

export default GameContainer;