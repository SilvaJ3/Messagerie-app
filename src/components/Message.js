import React, { Component } from 'react'

class Message extends Component {
    
    render() {
        if(this.props.isUser(this.props.pseudo)) {
            return (
                <p className="user-message">
                    {this.props.message}
                </p>
            )
        } else {
            return (
                <p className="not-user-message">
                    <strong>{this.props.pseudo} : </strong>{this.props.message}
                </p>
            )
        }
    }
}

export default Message