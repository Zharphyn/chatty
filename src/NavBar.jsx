import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <headerName className="navbar-link">Chatty</headerName>
        <userCount className="user-count">{this.props.userCount} user(s) online</userCount>
      </nav>
    );
  }
}
