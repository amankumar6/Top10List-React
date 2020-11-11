import React, { Component } from 'react'
import moviesContent from '../Content/moviesContent'
import '../style/list.css'

export class movies extends Component {
    render() {

        let listItems = moviesContent.map(({title,ratting,content,src}) => 
        <li key={title}>
            <p className = "listTitle"> {title}: </p>
           
            <p className = "ratting"> IMDB Ratting {ratting} </p>
            
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

export default movies
