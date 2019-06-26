import React, { Component } from "react";
import IndexHeader from "../Components/IndexHeader/IndexHeader";
import "./MainPage.scss";

class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
        <IndexHeader />
        <div className="main_page_content_wrapper">
          <div className="main_page_title">Data Compare App</div>
          <div className="main_page_button">button</div>
        </div>
      </div>
    );
  }
}

export default MainPage;
