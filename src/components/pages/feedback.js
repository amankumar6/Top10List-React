import React, { Component } from "react";
import "../../css/other.css";

export class Feedback extends Component {
  // Save my name, email, and website in this browser for the next time I comment.
  nameRef = React.createRef();
  emailRef = React.createRef();
  contactRef = React.createRef();
  describeRef = React.createRef();

  createData = (e) => {
    e.preventDefault();
    const formData = {
      name: this.nameRef.current.value,
      email: this.emailRef.current.value,
      contact: parseFloat(this.contactRef.current.value),
      describe: this.describeRef.current.value,
    };
    this.props.formData(formData);
    e.currentTarget.reset();
  };

  render() {
    return (
      <div className="feedback">
        <div className="container">
          <h1>FeedBack</h1>
          <p>
            We would love to hear your thoughts, suggestions, concerns or
            problems with anything so we can improve!
          </p>
          <form onSubmit={this.createData}>
            <div className="row">
              <div className="inputName col s12">
                <div className="input-field col s6">
                  <input id="name" ref={this.nameRef} type="text" required />
                  <label for="name">Name</label>
                </div>
              </div>
              <div className="input-field col s6 offset-s0">
                <input
                  id="email"
                  ref={this.emailRef}
                  type="email"
                  className="validate"
                  required
                />
                <label for="email">Email</label>
                <span
                  className="helper-text"
                  data-error="We can’t quite understand that email address. Can you try again?"
                  data-success=""
                ></span>
              </div>
              <div className="input-field col s6">
                <input id="contact" ref={this.contactRef} type="tel" required />
                <label for="contact">Contact Number</label>
              </div>
              <div className="input-field col s12">
                <textarea
                  id="describe"
                  ref={this.describeRef}
                  className="materialize-textarea"
                ></textarea>
                <label for="describe">Describe</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s2 offset-s5">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Feedback;
