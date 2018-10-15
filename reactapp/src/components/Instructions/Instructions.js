import React from "react";

const Instructions = (props) => (
    <div>
        <p>
            Some instructions here.
        </p>
        <p>
            Current Score: {props.currentScore} |
            Top Score: {props.topScore}
        </p>
    </div>
);

export default Instructions;