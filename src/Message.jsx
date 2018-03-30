import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Message extends Component {
  render() {
    console.log('Inside Message.jsx Render');
        return (
      <message>ChatBar</message>
    );
  }
}

Message.propTypes = {
  messageInfo: PropTypes.object
};