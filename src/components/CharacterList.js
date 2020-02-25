import React from 'react';
import Character from './Character';


function CharacterList({ characters, showDetails }) {
    return(
        <div>
            {
                characters.map((character, i) => {
                    return (
                        <Character 
                            key={i}  
                            infos={characters[i]}
                            style={{width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                            showDetails={showDetails}
                        />
                    );
                })
            }
        </div>
    );
}



export default CharacterList;