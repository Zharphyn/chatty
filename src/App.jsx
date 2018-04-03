
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
      messages: [
        {
          key: 1,
          type: "incomingMessage",
          content: "I won't be impressed with technology until I can download food.",
          username: "Anonymous"
        },
        {
          key: 2,
          type: "incomingMessage",
          content: "I wouldn't want to download Kraft Dinner. I'd be scared of cheese packet loss.",
          username: "Anonymous2"
        },
        {
          key: 3,
          type: "incomingNotification",
          content: "Anonymous changed their name to nomnom",
        },
        {
          key: 4,
          type: "incomingMessage",
          content: "...",
          username: "nomnom"
        },
        {
          key: 5,
          type: "incomingMessage",
          content: "I'd love to download a fried egg, but I'm afraid encryption would scramble it",
          username: "Anonymous2"
        },
        {
          key: 6,
          type: "incomingMessage",
          content: "This isn't funny. You're not funny",
          username: "nomnom"
        },
        {
          key: 7,
          type: "incomingNotification",
          content: "Anonymous2 changed their name to NotFunny",
        }
      ]
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

  componentDidMount() {
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      let messages = this.sendMessage({username: "Michelle", content: "Hello there!", type: "incomingMessage"});
      this.setState({messages: messages});
    }, 3000);

  }

  postNameChange(oldUsername, newUsername) {
    const messages = this.sendMessage({"type":"incomingNotification", username: 'newUsername', content:`${oldUsername} has changed their name to ${newUsername}`});
    this.setState({messages: messages});
    // Calling setState will trigger a call to render() in App and all child components.
    this.state.username.name = newUsername;
  }

  changeUserName(message) {
    const username = this.state.username.name;
     if (username !== message.username) {
      this.postNameChange (username, message.username);
    }
  }

  postNewMessage(message){
    const messages = this.sendMessage({username: message.username, content: message.inputValue, type: "incomingMessage"});
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages});

  }

  addMessage(message) {
    if (message.content !== '') {
      this.postNewMessage(message);
    }
  }

  render() {
    return (
      <div className="entire-app">
        <Header />
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

