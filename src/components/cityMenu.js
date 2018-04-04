import React, {Component} from "react";
import {PLACES} from "./weatherDisplay";
import {Button} from "./btn";

export class CityMenu extends Component{
    render(){
        return(
            <nav className="city-menu">
                <span className="city-menu__title">My Cities</span>
                {PLACES.map((place, index) => (
                    <Button activeBtn={false} name={place.name} key={index} actPlace={index} clickHandler={this.props.btnClickHandler}/>
                ))}
            </nav>
        )
    }
}