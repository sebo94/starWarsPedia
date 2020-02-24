import React from 'react';

function CharacterInfo({ infos }) {
    return (
        <div>
            <header>{`${infos.name}`}</header>
        </div>
    );
}

export default CharacterInfo;