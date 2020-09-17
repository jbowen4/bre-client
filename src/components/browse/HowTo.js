import React, { useState } from 'react';

function HowTo(props) {

    const [closed, close] = useState(false);

    return (
        <div class={closed ? '' : 'how-to'}>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}

export default HowTo;