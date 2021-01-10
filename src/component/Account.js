import React, { Component } from 'react';
import './Account.css';

class Account extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div className="Account">
                <img alt="" draggable="false" src={this.props.userImgUrl}></img>
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