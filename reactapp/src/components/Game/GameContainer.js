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
)

/*

class GameContainer extends Component {
    state = {
        cards: [],
        guessed: []
    };

    componentDidMount() {
        let cards = [];
        [...Array(12).keys()].forEach(i => {
            cards.push({ id: i, order: i });
        });

        this.setState({
            cards: cards
        });
    }

    shuffleCards = () => {
        let shuffledCards = [];
        let randomOrder = [...Array(12).keys()].sort( () => Math.random() - 0.5 );
        this.state.cards.forEach((card, index) => {
            card.order = randomOrder[index];
            shuffledCards.push(card);
        });

        shuffledCards.sort( (a, b) => { return a.order - b.order } );

        this.setState({
            cards: shuffledCards
        });
    }

    handleClick = (event) => {
        console.log(`I've been clicked! - ${event.target.getAttribute("data-value")}`);

        if (this.state.guessed.indexOf(event.target.getAttribute("data-value")) !== -1) {
            console.log("Oops, you lost");
            this.setState({
                guessed: []
            });
        } else {
            this.setState({
                guessed: [...this.state.guessed, event.target.getAttribute("data-value")]
            });
        }

        this.shuffleCards();
    }

    render() {
        return (
            <div className="container">
                <div className="cardgrid">
                    {this.state.cards.map(card => 
                        <GameCard
                            handleClick={this.handleClick}
                            key={card.id}
                        >
                            {card.id}
                        </GameCard>
                    )}
                </div>
            </div>
        );
    }
}

*/

export default GameContainer;