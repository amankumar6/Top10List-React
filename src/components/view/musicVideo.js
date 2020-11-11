import React, { Component } from 'react'
import musicVideoContent from '../Content/musicVideoContent'
import '../style/list.css'

export class musicVideo extends Component {
    render() {

        let listItems = musicVideoContent.map(({title,views,content,src}) => 
        <li key={title}>
            <p className = "listTitle"> {title}: </p>
           
            <p className = "views"> {views} Billion Views on YouTube</p>
            
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

export default musicVideo
