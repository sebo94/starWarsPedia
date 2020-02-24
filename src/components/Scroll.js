import React from 'react';

function Scroll(props) {
    return(
        <div style={{ overflowY: 'scroll', border : '5px solid black', height: '300px', width: '50%', margin: 'auto' }}>
            {props.children}
        </div>
    );
}

export default Scroll;