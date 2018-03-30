
import React from 'react';

export default (props) => {
  console.log ('Inside the NavBar');
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <span>{props.userCount} user(s) online</span>
    </nav>
  )
};