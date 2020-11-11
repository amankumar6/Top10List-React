import React, { Component } from 'react'
import gamesContent from '../Content/gamesContent'
import '../style/list.css'

export class games extends Component {
    render() {

        let listItems = gamesContent.map(({title,content,src}) => 
        <li key={title}>
            <p className = "listTitle"> {title}: </p>
            <br/>
            <div className="main-content">
                <iframe title = {title} width="560" height="315" src={src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                
                <p className="content"> {content} </p>
            </div>
            <br/><br/>
        </li> );
        
        return (
            <ol className="List">{listItems}</ol>
        )
    }
}

export default games
