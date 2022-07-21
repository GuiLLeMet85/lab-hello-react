import React from 'react';

import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'

const Bottom = () => {
    return (
        <div className='bottom-st'>
            <div class = "blurb">
                <img src = {icon1} alt="djdJS"></img>
                <h3>Declarative</h3>
                <p>React males in painless to create interactive UIs.</p>
            </div>
            <div class = "blurb">
                <img src = {icon2} alt="sdadDA"></img>
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div class = "blurb">
                <img src = {icon3} alt="sDddd"></img>
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the components.</p>
            </div>  
            <div class = "blurb">
                <img src = {icon3} alt="ddD"></img>
                <h3>JSX</h3>
                <p>Statically-tyred, designed to run on modern browsers</p>
            </div>     

        </div>
    )
} 

export default Bottom;