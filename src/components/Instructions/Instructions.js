import React from "react";

const Instructions = (props) => (
    <div className="bg-info text-white text-center container">
        <p>
            {props.instructions}
        </p>
        <p>
            Current Score: {props.currentScore} |
            Top Score: {props.topScore}
        </p>
    </div>
);

export default Instructions;