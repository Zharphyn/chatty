import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ChatBar extends Component {
  constructor(props){
    super(props);
    this.state = {inputValue: '', username: props.defaultValue};
  }
  render() {
    console.log('Inside ChatBar.jsx Render');
  }
}

ChatBar.propTypes = {
  defaultValue: PropTypes.string,
  addMessage: PropTypes.func
};