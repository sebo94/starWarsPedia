import React from 'react';

function SearchBox({ searchChange }) {
    return(
        <div className='pa2'>
            <input
            className='pa2 ma4 ba b--green bg-lightest-blue' 
            type='search' 
            placeholder='search characters'
            onChange={searchChange} 
            />
        </div>
    );
}

export default SearchBox;