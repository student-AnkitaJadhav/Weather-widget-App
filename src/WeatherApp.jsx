import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
export default function WeatherApp(){

    const [weatherInfo , setWeatherInfo] = useState({
        city: "Delhi",
        temp: 32,
        tempMin: 20,
        tempMax: 34,
        humidity: 12,
        feelsLike: 31,
        weather: "clear-sky",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}