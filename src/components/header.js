import React, {Component} from 'react';

export class Header extends Component{
    render(){
        return(
            <header className="header">
                <div className="header__elements container">
                    <div className="header__title">React Weather App</div>
                    <div className="header__logo"></div>
                </div>
            </header>
        )
    }
}