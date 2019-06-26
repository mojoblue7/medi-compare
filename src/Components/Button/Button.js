import React, { Component } from "react";
import "./Components/Button/Button.scss";

class Button extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div
        id={this.props.id}
        className={this.props.className}
        style={`width: ${this.props.width}; 
    height: ${this.props.height};`}
      />
    );
  }
}

export default Button;
