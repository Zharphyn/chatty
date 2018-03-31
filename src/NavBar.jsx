import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    console.log('Inside the NavBar!');
    return (
      <nav className="navbar">
        <a href="/" className="navbar-link">Chatty</a>
      </nav>
    );
  }
}
