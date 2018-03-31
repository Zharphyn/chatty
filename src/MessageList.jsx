import React, { Component } from 'react';
import Message from './message.jsx';

export default class MessageList extends Component {
  render() {
    const props = this.props;
    const messages = props.messages.map(({ usercount, username, content }) => (
      <Message
        key={usercount}
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