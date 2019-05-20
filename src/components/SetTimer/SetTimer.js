import React from 'react';

const SetTimer = ({ type, value, handleClick }) => (
    <div className='SetTimer'>
        <div className='setTimertitle' id={`${type}-label`}>{type === 'session' ? 'session ' : 'break '}</div>
        <div className='SetTimer-controls'>
        <button className='setTimerbtn' id={`${type}-decrement`} onClick={() => handleClick(false, `${type}Value`)}>-</button>
        <h1 id={`${type}-length`}>{value}</h1>
        <button className='setTimerbtn' id={`${type}-increment`} onClick={() => handleClick(true, `${type}Value`)}>+</button>
        </div>
    </div>
)

export default SetTimer;