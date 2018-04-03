
import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './NavBar.jsx';
import Header from './Header.jsx';

const defaultState = {
  defaultValue: {name: 'Anonymous'},
  messages: [],
  userCount: 0
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.addMessage = this.addMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.postNameChange = this.postNameChange.bind(this);
    this.postNewMessage = this.postNewMessage.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.countMessages = this.countMessages.bind(this);
    this.state = {
      username: { name: 'Anonymous'},
      messages: []
    };
  }

  countMessages() {
    return this.state.messages.length;
  }


  sendMessage(message) {
    const numMessages = this.countMessages() + 1;
    let newMessage = { key: numMessages, type: message.type, content: message.content };

    if (message.type === 'incomingMessage') {
      newMessage.username = message.username;
    } 

    // Update the state of the app component.
    return this.state.messages.concat(newMessage);
  }

  onMessageHandler(event) {
    let newMessage = JSON.parse(event.data);
    console.log(newMessage);

    if (newMessage.type === 'userCount') {
      console.log(`Number of users: ${newMessage.connected}`);
      this.setState({ userCount: newMessage.connected });
    } else {
      const msgs = this.state.messages.concat(newMessage);
      this.setState({ messages: msgs });
    }
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.onmessage = (evt) => this.onMessageHandler(evt);
  }

  postNameChange(oldUsername, newUsername) {
    const message = {"type":"incomingNotification", content:`${oldUsername} has changed their name to ${newUsername}`};
    this.socket.send(JSON.stringify(message));
  }

  changeUserName(message) {
    const username = this.state.username.name;
     if (username !== message.username) {
      this.postNameChange (username, message.username);
    }
  }

  postNewMessage(message){
    const currentMessage = {username: message.username, content: message.inputValue, type: "incomingMessage"};
    this.socket.send(JSON.stringify(currentMessage));
  }

  addMessage(message) {
    if (message.content !== '') {
      this.postNewMessage(message);
    }
  }

  render() {
    return (
      <div className="entire-app">
        <NavBar userCount={this.state.userCount}/>
        <div className="container">
          <MessageList messages={this.state.messages}/>
        </div>
        <div>
          <ChatBar currentUser={this.state.username.name} changeUserName={this.changeUserName} addMessage={this.addMessage} />
        </div>
      </div>
     );
   }
}

