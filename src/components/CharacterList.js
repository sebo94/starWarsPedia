import React from 'react';
import Character from './Character';

function CharacterList({ characters }) {
    // Testing ErrorBoundry

    /*if(true) {
        throw new Error("Fuck fuck fuck fuck!!!");
    }*/
    
    return(
        <div>
            {
                characters.map((character, i) => {
                    return (
                        <Character 
                            key={i}  
                            name={characters[i].name}
                        />
                    );
                })
            }
        </div>
    );
}

export default CharacterList;