import React, {Component} from 'react';
import './App.css';
import {Header} from "./components/header";
import {WeatherDisplay} from "./components/weatherDisplay";
import {PLACES} from "./components/weatherDisplay";

class App extends Component {
    constructor() {
        super();
        this.state = {
            activePlace: 0,
        };
    }

    render() {
        const activePlace = this.state.activePlace;
        return (
            <div>
                <Header/>
                <section>
                    <div className="container">
                        <div className="row main">
                            <nav className="city-menu">
                                <span className="city-menu__title">My Cities</span>
                                {PLACES.map((place, index) => (
                                    <button
                                        className="city-menu__button"
                                        key={index}
                                        onClick={() => {
                                            this.setState({activePlace: index});
                                        }}
                                    >
                                        {place.name}
                                    </button>
                                ))}
                            </nav>
                            <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip}/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
