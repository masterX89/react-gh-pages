import React from 'react';
import './RGBstyle.css';

class ColorBlock extends React.Component {
    render() {
        return (
            <div>
                <h1>The FUNKY
                    <span id="colorDisplay">RGB</span>
                    Color Game</h1>

                <div id="stripe">
                    <button id="reset">Change Colors</button>
                    <span id="message"></span>
                    <button className="mode">Easy</button>
                    <button className="mode selected">Hard</button>
                </div>
                <div id="container">
                    <div className="square" ></div>
                    <div className="square" ></div>
                    <div className="square" ></div>
                    <div className="square" ></div>
                    <div className="square" ></div>
                    <div className="square" ></div>
                </div>
            </div>

        )
    }
}

export default ColorBlock;
