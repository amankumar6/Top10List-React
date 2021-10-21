import React, { Component } from "react";
import Faq from "../../content/faq";
import "../../style/other.sass";

export class Help extends Component {
  render() {
    let faqContent = Faq.map(({ header, content }) => (
      <ul className="collection with-header" key={header}>
        <li className="collection-header">
          <h4>{header}</h4>
        </li>
        <li className="collection-item">{content}</li>
      </ul>
    ));
    return (
      <div className="help">
        <div className="container">
          <h1>HELP</h1>
          <div>
            <h4>Frequently Asked Questions:</h4>
            {faqContent}
          </div>
        </div>
      </div>
    );
  }
}

export default Help;
