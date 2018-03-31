import React, { Component } from 'react';
import NavBar from './NavBar.jsx';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="nav-bar">
        <NavBar className="navbar"></NavBar>
      </header>
    );
  }
}