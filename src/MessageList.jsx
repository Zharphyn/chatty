import React, { Component } from 'react';
import Message from './message.jsx';

export default class MessageList extends Component {
  render() {
    const messages = this.props.messages.map(({ key, username, content }) => (
      <Message
        key={key}
        username={username}
        content={content} />
    ))
    
    return (
      <main className="messagelist">
        {messages}
      </main>
    );
  }
}