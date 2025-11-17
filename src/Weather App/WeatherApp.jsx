import { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './infoBox'

export default function WeatherApp () {
    const [weatherInfo, setWeatherInfo] = useState(
    {
        // city: "Delhi",
        // feelslike : 11.77,
        // humidity :  94,
        // temp  :     12.05,
        // tempMax :   12.05,
        // tempMin :   12.05,
        // weather :   "mist",
    }
)

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}