import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Feedback from "./pages/Feedback";
import NavBarAlt from "./view/NavBarAlt";
import Footer from "./view/Footer";
import "../style/App.sass";
import base from "../base";

export class App extends Component {
  state = {
    myData: {},
  };

  componentDidMount() {
    this.ref = base.syncState("FeedBack", {
      context: this,
      state: "myData",
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  formatDate = () => {
    let today = new Date(),
      date = String(today.getDate()).padStart(2, "0"),
      month = String(today.getMonth() + 1).padStart(2, "0"),
      year = today.getFullYear(),
      fullDate = date + "-" + month + "-" + year,
      currentTime =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return "-" + fullDate + "-" + currentTime;
  };

  formData = (data) => {
    const myNewData = { ...this.state.myData };
    myNewData[`${data.name.replace(/ /g, "_")}${this.formatDate()}`] = data;
    this.setState({
      myData: myNewData,
    });
    alert("FeedBack has been submitted Successfully!!");
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
