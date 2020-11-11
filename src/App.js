import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/home'
import Help from './components/pages/help'
import Feedback from './components/pages/feedback'
import NavBarAlt from './components/view/navBarAlt'
import Footer from './components/view/footer'


export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={props =>(
            <React.Fragment>
              <Home/>
            </React.Fragment>
          )}/>
          <Route exact path="/feedback" render={props =>(
            <React.Fragment>
              <NavBarAlt/>
              <Feedback/>
            </React.Fragment>
          )}/>
          <Route exact path="/help" render={props =>(
            <React.Fragment>
              <NavBarAlt/>
              <Help/>
            </React.Fragment>
          )}/>
          <Footer/>
        </div>
    </Router>
    )
  }
}

export default App
