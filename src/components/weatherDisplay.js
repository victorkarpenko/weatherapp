import React, {Component} from "react";

export const PLACES = [
    {name: "Kyiv", zip: "703448"},
    {name: "Kharkiv", zip: "706483"},
    {name: "Chernihiv", zip: "710735"},
    {name: "Odessa", zip: "698740"}
];

export class WeatherDisplay extends Component {
    constructor() {
        super();
        this.state = {
            weatherData: null,
        };
    }

    componentDidMount() {
        const zip = this.props.zip;
        const URL = "http://api.openweathermap.org/data/2.5/weather?id=" +
            zip +
            "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric";
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({weatherData: json});
        })
    }

    render() {
        const weatherData = this.state.weatherData;
        if (!weatherData) return <div className="weather">Loading</div>;
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        return (
            <div className="weather">
                <div className="weather__header">
                    <div>
                        <span className="weather__status">{weather.main} in </span>
                        <span className="weather__city">{weatherData.name}</span>
                    </div>
                    <img className="weather__status-img" src={iconUrl} alt={weatherData.description}/>
                </div>
                <div className="weather__data">
                    <div className="weather__temp">
                        Temperature:
                        <span>Current: {weatherData.main.temp}°</span>
                        <span>High: {weatherData.main.temp_max}°</span>
                        <span>Low: {weatherData.main.temp_min}°</span>
                    </div>
                    <span>Humidity: {weatherData.main.humidity} %</span>
                    <span>Pressure: {weatherData.main.pressure} mm Hg</span>
                    <span>Wind Speed: {weatherData.wind.speed} mi/hr</span>

                </div>
            </div>
        );
    }
}