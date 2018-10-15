import React, { Component } from "react";
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import GameContainer from "./components/Game/GameContainer";

class App extends Component {
    state = {
        cards: [],
        guessed: [],
        currentScore: 0,
        topScore: 0
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
                guessed: [],
                currentScore: 0,
            });
        } else {
            this.setState({
                guessed: [...this.state.guessed, event.target.getAttribute("data-value")],
                currentScore: this.state.currentScore + 1,
                topScore: Math.max(this.state.topScore, this.state.currentScore + 1)
            });
        }

        this.shuffleCards();
    }

    render() {
        return (
            <div>
                <Header />
                <Instructions 
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                />
                <GameContainer 
                    cards={this.state.cards}
                    handleClick={this.handleClick}
                />
            </div>
        )
    }
}

/*

const App = () => (
    <div>
        <Header />
        <Instructions 
            currentScore=""
            topScore=""
        />
        <GameContainer />
    </div>
);

*/

export default App;