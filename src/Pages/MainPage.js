import React, { Component } from "react"
import IndexHeader from "../Components/IndexHeader/IndexHeader"

import Button from "../Components/Button/Button"
import "./MainPage.scss"

class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
        <IndexHeader />
        <div className="main_page_content_wrapper">
          <div className="main_page_title">
            Data Compare App
          </div>
          <div className="main_page_button">button</div>
          <Button
            id="button_test"
            className="button_test"
            width="100"
            height="100"
            text="버튼버튼"
          />
        </div>
      </div>
    )
  }
}

export default MainPage
