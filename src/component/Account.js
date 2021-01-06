import React, { Component } from 'react';
import './Account.css';

class Account extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div className="Account">
                <img alt="vctr_jeeho's profile picture" class="_6q-tv" data-testid="user-avatar" draggable="false" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/69320658_499968874134656_3492344513760854016_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=UELlE86fzV8AX-tIM0c&amp;tp=1&amp;oh=5dffa8a94e6142365f93375ceaacfa44&amp;oe=601FB328"></img>
                <div className="AccountFont">
                    <strong>{this.props.username}</strong>
                    <br/>
                    <div className="AccountEmail">{this.props.email}</div>
                </div>
            </div>
        );
    }
}

export default Account;