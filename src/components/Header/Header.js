import React from "react";

const styles = {
    margins: {
        margin: "0 0 10px 0"
    }
};

const Header = () => (
    <div className="jumbotron jumbotron-fluid bg-primary text-white text-center" style={styles.margins}>
        <h1 className="display-4">React Memory Game</h1>
    </div>

);

export default Header;
