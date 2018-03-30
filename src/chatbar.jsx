import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ChatBar extends Component {

  render() {
    console.log('Inside ChatBar.jsx Render');
    return (
      <h1>ChatBar</h1>
    );
    
  }
}

ChatBar.propTypes = {
  defaultValue: PropTypes.string,
  addMessage: PropTypes.func
};