import React from 'react';
import './RGBstyle.css';

class ColorBlock extends React.Component {
    render() {
        return (
            <div>
                <div className="square" style={{display: 'block', backgroundColor: `rgb(181, 114, 145)`}}></div>
                <div className="square" style={{display: 'block', backgroundColor: `rgb(181, 114, 145)`}}></div>
                <div className="square" style={{display: 'block', backgroundColor: `rgb(181, 114, 145)`}}></div>
                <div className="square" style={{display: 'block', backgroundColor: `rgb(181, 114, 145)`}}></div>
                <div className="square" style={{display: 'block', backgroundColor: `rgb(181, 114, 145)`}}></div>
                <div className="square" style={{display: 'block', backgroundColor: `rgb(181, 114, 145)`}}></div>
            </div>

        )
    }
}

export default ColorBlock;
