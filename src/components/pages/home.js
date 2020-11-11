import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Anime from '../view/anime'
import Games from '../view/games'
import Movies from '../view/movies'
import WebSeries from '../view/webSeries'
import MusicVideo from '../view/musicVideo'
import '../style/home.css'

export class home extends Component {
    render() {
        return (
            <div className="home">
                <nav className="nav-extended">
                    <div className="nav-wrapper">
                        <span className="brand-logo"><Link to ="/">Top 10 List</Link> </span>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to ="/">Home</Link></li>
                            <li><Link to ="/feedback">FeedBack</Link></li>
                            <li><Link to ="/help">Help</Link></li>
                        </ul>
                    </div>
                    <div className="nav-content">
                        <ul className="tabs tabs-transparent">
                            <li className="tab"><a href="#anime">Anime</a></li>
                            <li className="tab"><a className="active" href="#games">Games</a></li>
                            <li className="tab"><a href="#movies">Movies</a></li>
                            <li className="tab"><a href="#musicVideo">Music Video</a></li>
                            <li className="tab"><a href="#webSeries">Web Series</a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/feedback">FeedBack</Link></li>
                    <li><Link to ="/help">Help</Link></li>
                </ul>

                <div id="anime" className="col s12"><Anime/></div>
                <div id="games" className="col s12"><Games/></div>
                <div id="movies" className="col s12"><Movies/></div>
                <div id="musicVideo" className="col s12"><MusicVideo/></div>
                <div id="webSeries" className="col s12"><WebSeries/></div>

                
            </div>
            
        )
    }
}

export default home
