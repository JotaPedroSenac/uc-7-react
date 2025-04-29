function WeatherInformations({weather}){
    return(
        <div>
            <h1>{weather.name}</h1>
            <div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description}/>
                <p>{Math.round(weather.main.temp)}°C</p>
                <p>{weather.weather[0].description}</p>
            </div>
            <div>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure}</p>
            </div>
        </div>
    )
}

export default WeatherInformations