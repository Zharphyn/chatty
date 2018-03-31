
import React, { Component } from 'react';
export default class Message extends Component {
  render() {
    const props = this.props;
    return (
      <div className="message">
        <div className="username">
          <span className="message-username"><strong>{props.username}</strong></span>
        </div>
        <div className="content">
          <span className="message-content">  {props.content}</span>
        </div>
      </div>
    );
  }
}