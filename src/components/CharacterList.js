import React from 'react';
import Character from './Character';


function CharacterList({ characters }){
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