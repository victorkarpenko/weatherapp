import React, {Component} from "react";

export class Button extends Component{

    render() {
        return (<button
            className={this.props.activeBtn===this.props.actPlace ? 'city-menu__button active' : 'city-menu__button'}
            onClick={this.props.clickHandler.bind(this, this.props)}
        >
            {this.props.name}
        </button>);
    }
}