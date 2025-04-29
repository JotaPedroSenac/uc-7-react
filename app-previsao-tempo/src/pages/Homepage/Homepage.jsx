import { useState, useRef } from "react";
import WeatherInformations from "../../components/WeatherInformations/WeatherInformations";
import axios from "axios"
import './Homepage.css'
function Homepage() {
    // cria uma referncia a um objeto (retornar um valor, ex: input)
    const inputRef = useRef();
    const [weather, setWeather] = useState();

    async function searchCity(){
        // console.log(inputRef.current.value)
        // pegar o value do input
        const city = inputRef.current.value;
        const key = "9b8e558f76ce37eefdd34a7e249ab9c3"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`
        const apiInfo = await axios.get(url)
        // console.log(apiInfo)
        setWeather(apiInfo.data)
        console.log(apiInfo.data);

    }
    return (
        <div className="container">
            <h1>Componente Homepage</h1>
            <input ref={inputRef} type="text" placeholder="Digite a cidade"/>
            <button onClick={searchCity}>Buscar</button>
            {/* primeiro weather é a da props e a segunda é a do useState */}
            {weather && <WeatherInformations weather={weather}/>}
        </div>
    )
}

export default Homepage;