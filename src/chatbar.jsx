import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "", 
      storeName: "", 
      email: "", 
      address: "", 
      city: "", 
      category: "", 
      password: ""
    };
  }
  
  render() {
    return (
      <chatbar>
        <input type="text" className="chatbar-username" placeholder="Your name (Optional)" />
        <input type="text" className="chatbar-message" placeholder="Type your message and hit enter" />
      </chatbar>
    );
    
  }
}

ChatBar.propTypes = {
  defaultValue: PropTypes.string,
  addMessage: PropTypes.func
};


