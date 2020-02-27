import React from 'react';
import './CharacterInfo.css';

function CharacterInfo({ infos }) {
    
    if(infos !== undefined) {
        return (
            <div>
                <h1><span className="type_writer">{infos.name}</span></h1> 
                <table>
                    <tbody>
                        { 
                            Object.keys(infos).map((element, i) => {
                                return (
                                    <tr key={i}>
                                        <td>
                                            <span className="type_writer">{element}</span>
                                        </td>
                                        <td>
                                            <span className="type_writer">{infos[element]}</span>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    } else return <header>Select a character to display it's details</header>
}

export default CharacterInfo;
