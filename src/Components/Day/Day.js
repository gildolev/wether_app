import React from 'react'
import './Day.css';

export default function Day(props) {
    const { icon, temperature, description} = props.dayinfo;
    return (
        <div className={`day  ${description}`}>
            <h1>{props.dayName}</h1>
            <img src={require(`../../icons/${icon}.png`).default} alt={props.dayName}  />
            <p className='description'>
                <span className='temperature'>{temperature}</span>
                <span>{description}</span>
            </p>
        </div>
    )
}
