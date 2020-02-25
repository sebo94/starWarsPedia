import React from 'react';
import './Character.css';

function Character({ infos, showDetails }) {
    const url = infos.name.split(" ").join("_") + ".jpg";
    const image = import(`../images/${url}`).then(image => image);
    const source = require(`../images//${url}`);

    return(
        <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5 custom'>
            { 
            image && <img src={source} alt={ infos.name } onClick={showDetails}
            style={{ height: "10rem", width: "10rem", borderRadius: 10, border: "2px solid white" }} />
            }
            <header>
                <h2>{infos.name}</h2>
            </header>
        </div>
    );
}

export default Character;