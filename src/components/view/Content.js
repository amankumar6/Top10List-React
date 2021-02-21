import React, { Component } from "react";
import PropType from "prop-types";
import animeContent from "../../content/animeContent";
import gamesContent from "../../content/gamesContent";
import moviesContent from "../../content/moviesContent";
import musicVideoContent from "../../content/musicVideoContent";
import webSeriesContent from "../../content/webSeriesContent";
import "../../style/list.sass";

export class Content extends Component {
  static propType = {
    whatContentShouldBeShown: PropType.string,
  };

  listContent = (title, content, src, ratting) => {
    return (
      <li key={title}>
        <p className="listTitle"> {title}: </p>
        {(typeof ratting == 'string') ? <p className="ratting"> IMDB ratting {ratting} </p> : '' }

        {(typeof ratting == 'number') ? <p className="views"> {ratting} Billion Views on Youtube </p> : '' }

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
      listItems = moviesContent.map(({ title, content, src, ratting }) =>
        this.listContent(title, content, src, ratting)
      );
    }
    if (this.props.whatContentShouldBeShown === "MusicVideo") {
      listItems = musicVideoContent.map(({ title, content, src, views}) =>
        this.listContent(title, content, src, views)
      );
    }
    if (this.props.whatContentShouldBeShown === "WebSeries") {
      listItems = webSeriesContent.map(({ title, content, src, ratting }) =>
        this.listContent(title, content, src, ratting)
      );
    }

    return <ol className="list">{listItems}</ol>;
  }
}

export default Content;
