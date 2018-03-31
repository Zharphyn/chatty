import React, { Component } from 'react';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.currentUser,
      content: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onKeypress = this.onKeypress.bind(this);
  }
  
  onChange(event) {
    console.log(event.target.value);
    this.setState({
    });
  }

  onKeypress(event) {
    if (event.key === 'Enter') {
      console.log(event.target.value);
    this.setState({
      content: event.target.value
      });
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={this.props.currentUser} onChange={this.onChange}/> 
        <input className="chatbar-message" placeholder={this.props.content} onKeyPress={this.onKeypress} />
      </footer>
    );
  }
}