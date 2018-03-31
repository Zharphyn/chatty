
import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './NavBar.jsx';
import Footer from './footer.jsx';
import Header from './Header.jsx';

const state = {
  username: {name: 'Anonymous'},
  messages: [],
  userCount: 0
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: 'Anonymous'},
      messages: [
        {
          id: 1,
          type: "incomingMessage",
          content: "I won't be impressed with technology until I can download food.",
          username: "Anonymous1"
        },
        {
          id: 2,
          type: "incomingNotification",
          content: "Anonymous1 changed their name to nomnom",
        },
        {
          id: 3,
          type: "incomingMessage",
          content: "I wouldn't want to download Kraft Dinner. I'd be scared of cheese packet loss.",
          username: "Anonymous2"
        },
        {
          id: 4,
          type: "incomingMessage",
          content: "...",
          username: "nomnom"
        },
        {
          id: 5,
          type: "incomingMessage",
          content: "I'd love to download a fried egg, but I'm afraid encryption would scramble it",
          username: "Anonymous2"
        },
        {
          id: 6,
          type: "incomingMessage",
          content: "This isn't funny. You're not funny",
          username: "nomnom"
        },
        {
          id: 7,
          type: "incomingNotification",
          content: "Anonymous2 changed their name to NotFunny",

        }
      ]
    };
  }

  render() {
     return (

      <div className="entire-app">
        <Header />
        <div className="container">
          <MessageList messages={this.state.messages}/>
        </div>
        <div>
          <Footer currentUser={this.state.currentUser} />
        </div>
      </div>
     );
   }
}

export default App;
