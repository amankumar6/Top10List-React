import React, { Component } from 'react'
import '../style/other.css'

export class feedback extends Component {
    render() {
        return (
            <div className="feedback">
                <div className="container">
                    <h1>
                        FeedBack
                    </h1>
                    <p>
                        We would love to hear your thoughts, suggestions, concerns or problems with anything so we can improve!
                    </p>
                    <form action="#">
                        <div className="row">
                            <div className="col s12">
                                <p>Feedback Type</p>
                                <br/>
                                <div className="col s12 m7 feedbackType">
                                    <label>
                                        <input name="group1" type="radio"/>
                                        <span>Comments</span>
                                    </label>
                                    <label>
                                        <input name="group1" type="radio" />
                                        <span>Suggestions</span>
                                    </label>
                                    <label>
                                        <input name="group1" type="radio" />
                                        <span>Questions</span>
                                    </label>
                                </div>
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="describe" className="materialize-textarea"></textarea>
                                <label for="describe">Describe Your Feedback:</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="first_name" type="text"/>
                                <label for="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text"/>
                                <label for="last_name">Last Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="email" type="email" className="validate"/>
                                <label for="email">Email</label>
                                <span className="helper-text" data-error="We can’t quite understand that email address. Can you try again?" data-success=""></span>
                            </div>
                            <div className="input-field col s6">
                                <input id="icon_contact" type="tel"/>
                                <label for="icon_contact">Contact Number</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s2 offset-s5">
                                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default feedback
