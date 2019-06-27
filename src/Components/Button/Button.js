import React, { Component } from "react"
// import "./Button.scss"

class Button extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div
        id={this.props.id}
        className="Button"
        style={{
          width: `${this.props.width}`,
          height: `${this.props.height}`,
          backgroundColor: `red`
        }}
      >
        {this.props.text}
      </div>
    )
  }
}

export default Button
