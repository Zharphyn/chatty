import React, { Component } from 'react';


export default class ChatBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: props.currentUser,
      inputValue: ''
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onNameEnter = this.onNameEnter.bind(this);
    this.callNameChange = this.callNameChange.bind(this);
  }
  
  callNameChange() {
    this.props.changeUserName(this.state);
    this.setState({username: this.state.username});
  }

  onNameEnter(event) {
    if(event.key === 'Enter') {
      this.callNameChange();
    }
  }

  onNameChange(event) {
    this.callNameChange();
  }

  onSubmit(event) {
    if(event.key === 'Enter') {
      this.props.addMessage(this.state);
      this.setState({inputValue: event.target.value, username: this.state.username});
    }
  }

  render() {
    let props = this.props;

    const messageOnChange = (event) => {
      this.setState({inputValue: event.target.value, username: this.state.username});
    };

    const nameOnChange = (event) => {
      this.setState({inputValue: this.state.inputValue, username: event.target.value});
    };

    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={props.currentUser} onChange={nameOnChange} onBlur={this.onNameChange} onKeyPress={this.onNameEnter} value={this.state.username}/>
       <input className="chatbar-message" placeholder="Type a message and hit ENTER" onChange={messageOnChange} onKeyPress={this.onSubmit} value={this.state.inputValue}/>
      </footer>
    );
  }

}
