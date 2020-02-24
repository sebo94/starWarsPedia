import React from 'react';

function Character({ name }) {
    const url = name.split(" ").join("_") + ".jpg";
    const image = import(`../images/${url}`).then(image => image);
    const source = require(`../images//${url}`);

    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            {image && <img src={source} alt="se mi vedi non funziona un cazzo ahah" style={{ height: "10rem", width: "10rem" }} />}
            <header>
                <h2>{name}</h2>
            </header>
        </div>
    );
}

export default Character;

//<img alt='characters' src={Luke_Skywalker} />
