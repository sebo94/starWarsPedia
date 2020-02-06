import React from 'react';

function Character({ name }) {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='characters' src={`https://robohash.org/${name}test?200x200`} />
            <header>
                <h2>{name}</h2>
            </header>
        </div>
    );
}

export default Character;