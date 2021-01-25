import React, { Component } from "react";
import animeContent from "../Content/animeContent";
import gamesContent from "../Content/gamesContent";
import moviesContent from "../Content/moviesContent";
import musicVideoContent from "../Content/musicVideoContent";
import webSeriesContent from "../Content/webSeriesContent";
import "../../css/list.css";

export class Content extends Component {
  listContent = (title, content, src) => {
    return (
      <li key={title}>
        <p className="listTitle"> {title}: </p>
        <div className="main-content">
          <iframe
            title={title}
            width="560"
            height="315"
            src={src}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="content"> {content} </p>
        </div>
      </li>
    );
  };
  render() {
    let listItems;
    if (this.props.whatContentShouldBeShown === "Anime") {
      listItems = animeContent.map(({ title, content, src }) =>
        this.listContent(title, content, src)
      );
    }
    if (this.props.whatContentShouldBeShown === "Games") {
      listItems = gamesContent.map(({ title, content, src }) =>
        this.listContent(title, content, src)
      );
    }
    if (this.props.whatContentShouldBeShown === "Movies") {
      listItems = moviesContent.map(({ title, content, src }) =>
        this.listContent(title, content, src)
      );
    }
    if (this.props.whatContentShouldBeShown === "MusicVideo") {
      listItems = musicVideoContent.map(({ title, content, src }) =>
        this.listContent(title, content, src)
      );
    }
    if (this.props.whatContentShouldBeShown === "WebSeries") {
      listItems = webSeriesContent.map(({ title, content, src }) =>
        this.listContent(title, content, src)
      );
    }

    return <ol className="List">{listItems}</ol>;
  }
}

export default Content;
