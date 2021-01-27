import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import "../../style/home.sass";
import Content from "../view/Content";

export class Home extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".tabs"),
      elems2 = document.querySelectorAll(".sidenav");
    M.Tabs.init(elems, {});
    M.Sidenav.init(elems2, {});
  }

  render() {
    return (
      <div className="home">
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <span className="brand-logo">
              <Link to="/">Top 10 List</Link>
            </span>
            <a href="/#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/feedback">Feedback</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
            </ul>
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li className="tab">
                <a className="active" href="#anime">
                  Anime
                </a>
              </li>
              <li className="tab">
                <a href="#games">Games</a>
              </li>
              <li className="tab">
                <a href="#movies">Movies</a>
              </li>
              <li className="tab">
                <a href="#musicVideo">Music Video</a>
              </li>
              <li className="tab">
                <a href="#webSeries">Web Series</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
        </ul>

        <div id="anime" className="col s12">
          <Content whatContentShouldBeShown="Anime" />
        </div>
        <div id="games" className="col s12">
          <Content whatContentShouldBeShown="Games" />
        </div>
        <div id="movies" className="col s12">
          <Content whatContentShouldBeShown="Movies" />
        </div>
        <div id="musicVideo" className="col s12">
          <Content whatContentShouldBeShown="MusicVideo" />
        </div>
        <div id="webSeries" className="col s12">
          <Content whatContentShouldBeShown="WebSeries" />
        </div>
      </div>
    );
  }
}

export default Home;
