import React from 'react';
import './Character.css'

function Character({ name }) {
    const url = name.split(" ").join("_") + ".jpg";
    const image = import(`../images/${url}`).then(image => image);
    const source = require(`../images//${url}`);

    return(
        <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5 custom'>
                { 
                image && <img src={source} alt="characters" 
                style={{ 
                    height: "10rem",
                    width: "10rem",
                    borderRadius: 10,
                    border: "2px solid white" 
                    }} />
                }
            <header>
                <h2>{name}</h2>
            </header>
        </div>
    );
}

export default Character;