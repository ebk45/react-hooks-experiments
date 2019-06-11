import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const useWeather = (http = axios) => {
    const [fahrenheit, setFahrenheit] = useState("");
    const [celcius, setCelcius] = useState("");

    const convertToCelcius = async temperature => {
        const converted = temperature.parseInt() * 1.8
        setCelcius(converted.toString())
    };

    const fetchWeatherData = async city => {
        const params = {
            method: "GET",
            url: `api.openweathermap.org/data/2.5/weather?q=${city}`
        }
        const data = await axios(params);
        setFahrenheit(data.temp);
        convertToCelcuis(data.temp);
    };

    

    return {
        fahrenheit,
        celcius,
        setFahrenheit,
        setCelcius,
        fetchWeatherData
    }
}

export default useWeather;