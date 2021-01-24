import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/navBarAlt.css"

export class NavBarAlt extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navBarAlt">
          <div className="nav-wrapper">
            <span className="brand-logo">
              <Link to="/">Top 10 List</Link>
            </span>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/feedback">FeedBack</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/feedback">FeedBack</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default NavBarAlt;
