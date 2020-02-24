import React from 'react';
import Character from './Character';


function CharacterList({ characters }) {
    return(
        <div>
            {
                characters.map((character, i) => {
                    return (
                        <Character 
                            key={i}  
                            infos={characters[i]}
                            style={{width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                        />
                    );
                })
            }
        </div>
    );
}



export default CharacterList;