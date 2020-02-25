import React from 'react';

function CharacterInfo({ infos }) {
    console.log(infos.name);              //Object { name: "R5-D4", … }
    return (
        <div>
            <header>{infos.name}</header>
        </div>
    );
}

export default CharacterInfo;