import React, { useState, useEffect } from 'react';
import Day from '../Day/Day';

export default function Main() {
    const [wetherData, setWetherData] = useState([]);
    const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const WeakStartGap = 2;
    const URL = 'https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json';
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setWetherData(data)
            )
    }, [])


    return (<>
        <h1>React Weather App</h1>
        <div className='main'>
            {
            wetherData && wetherData.map((dayinfo, index) => (
                <Day dayinfo={dayinfo} dayName={days[dayinfo.day - WeakStartGap]} />
            ))
            }

        </div>
    </>
    )
}
