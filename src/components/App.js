import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../css/App.css";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Feedback from "./pages/Feedback";
import NavBarAlt from "./view/NavBarAlt";
import Footer from "./view/Footer";

export class App extends Component {
  state = {
    myData: {},
  };

  formData = (data) => {
    const myNewData = { ...this.state.myData };
    let currentDate = new Date();
    currentDate = JSON.stringify(currentDate);
    myNewData[`data${currentDate}`] = data;
    this.setState({
      myData: myNewData,
    });
  };
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/feedback">
            <NavBarAlt />
            <Feedback formData={this.formData} />
          </Route>
          <Route exact path="/help">
            <NavBarAlt />
            <Help />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
