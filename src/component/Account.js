import React from 'react';
import './Account.css';

function Account({username, email, userImgUrl}) {
    
    return (
        <div className="Account">
            <img alt="" draggable="false" src={userImgUrl}></img>
            <div className="AccountFont">
                <strong>{username}</strong>
                <br/>
                <div className="AccountEmail">{email}</div>
            </div>
        </div>
    );
}

export default Account;