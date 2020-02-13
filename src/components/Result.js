import React from 'react';

const Result = (props) => {

    const { date, city, sunrise, temp, sunset, pressure, wind, err } = props.weather
    
    let content = null;

    if(!err && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        const tempMath = temp.toFixed(0) + "°C"

        content = (
        <div>
            <h3>Wyniki wyszukiwania dla <em>{city}</em></h3>
            <h4>Dane dla dnia i godziny: {date}</h4>
            <h4>Aktualna temperatura: {tempMath}</h4>
            <h4>Wschód słońca dzisiaj o {sunriseTime}</h4>
            <h4>Zachód słońca dzisiaj o {sunsetTime}</h4>
            <h4>Aktualna siła wiatru: {wind} m/s</h4>
            <h4>Aktualne ciśnienie: {pressure} hPa</h4>

        </div>
        )
    }
    
    return (
       <div className="result">
        {err ? `Nie mamy w bazie ${city}` : content}
       </div>
    );
}

export default Result;