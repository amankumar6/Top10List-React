import React, { Component } from "react";
import PropType from "prop-types";
import "../../style/other.sass";

export class Feedback extends Component {
  nameRef = React.createRef();
  emailRef = React.createRef();
  contactRef = React.createRef();
  discRef = React.createRef();
  checkBoxRef = React.createRef();

  static propType = {
    formData: PropType.func,
  };

  componentDidMount() {
    const localStorageDetails = JSON.parse(
      localStorage.getItem("FeedbackDetails")
    );
    if (localStorageDetails) {
      this.nameRef.current.value = localStorageDetails.name;
      this.emailRef.current.value = localStorageDetails.email;
      this.contactRef.current.value = localStorageDetails.contact;
      this.checkBoxRef.current.checked = true;
    }
  }

  createData = (e) => {
    const formData = {
      name: this.nameRef.current.value,
      email: this.emailRef.current.value,
      contact: parseFloat(this.contactRef.current.value),
      disc: this.discRef.current.value,
    };
    if (this.checkBoxRef.current.checked) {
      const localData = {
        name: this.nameRef.current.value,
        email: this.emailRef.current.value,
        contact: parseFloat(this.contactRef.current.value),
      };
      localStorage.setItem("FeedbackDetails", JSON.stringify(localData));
    }
    if (
      localStorage.getItem("FeedbackDetails") &&
      !this.checkBoxRef.current.checked
    )
      localStorage.removeItem("FeedbackDetails");

    this.props.formData(formData);
    e.currentTarget.reset();
  };

  checkClassName = () => {
    return localStorage.getItem("FeedbackDetails") ? "active" : null;
  };

  render() {
    return (
      <div className="feedback">
        <div className="container">
          <form onSubmit={this.createData}>
            <h1>Feedback</h1>
            <p>
              We would love to hear your thoughts, suggestions, concerns or
              problems with anything so we can improve!
            </p>
            <div className="row">
              <div className="inputName col s12">
                <div className="input-field col m6 s12">
                  <input id="name" ref={this.nameRef} type="text" required />
                  <label htmlFor="name" className={this.checkClassName()}>
                    Name
                  </label>
                </div>
              </div>
              <div className="input-field col m6 s12">
                <input
                  id="email"
                  ref={this.emailRef}
                  type="email"
                  className="validate"
                  required
                />
                <label htmlFor="email" className={this.checkClassName()}>
                  Email
                </label>
                <span
                  className="helper-text"
                  data-error="We can’t quite understand that email address. Can you try again?"
                  data-success=""
                ></span>
              </div>
              <div className="input-field col m6 s12">
                <input id="contact" ref={this.contactRef} type="tel" required />
                <label htmlFor="contact" className={this.checkClassName()}>
                  Contact Number
                </label>
              </div>
              <div className="input-field col s12">
                <textarea
                  id="disc"
                  ref={this.discRef}
                  className="materialize-textarea"
                ></textarea>
                <label htmlFor="disc">Your Feedback</label>
              </div>
              <div className="input-field col s12">
                <p>
                  <label>
                    <input type="checkbox" ref={this.checkBoxRef} />
                    <span>
                      Save my name, contact number, and email in this browser
                      for the next time when I give feedback.
                    </span>
                  </label>
                </p>
              </div>
            </div>
            <div className="row button">
              <div className="input-field">
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
