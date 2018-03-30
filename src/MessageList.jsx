import React, { Component } from 'react';
import Message from './Message.jsx';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export default class MessageList extends Component {
  render() {
    console.log('Inside MessageList.jsx Render');
        return (
      <messagelist>ChatBar</messagelist>
    );
  }
}


MessageList.propTypes = {
    messages: PropTypes.array
};