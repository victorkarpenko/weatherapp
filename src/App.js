import React, {Component} from 'react';
import './App.css';
import {Header} from "./components/header";
import {WeatherDisplay} from "./components/weatherDisplay";
import {PLACES} from "./components/weatherDisplay";
import {CityMenu} from "./components/cityMenu";

class App extends Component {
    constructor() {
        super();
        this.state = {
            activePlace: 0,
        };

        this.menuBtnClickHandler = this.menuBtnClickHandler.bind(this);
    }

    menuBtnClickHandler(props){
        this.setState({activePlace: props.actPlace});
    }

    render() {
        const activePlace = this.state.activePlace;
        return (
            <div>
                <Header/>
                <section>
                    <div className="container">
                        <div className="row main">
                            <CityMenu activeBtn={PLACES[0].zip} btnClickHandler={this.menuBtnClickHandler}/>
                            <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip}/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
