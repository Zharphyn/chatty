
import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './NavBar.jsx';

const defaultState = {
  defaultValue: {name: 'Anonymous'},
  messages: [],
  userCount: 0
};

class App extends Component {

  render() {
    console.log('Inside App.jsx Render');
    return (
      <h1>CHATTY</h1>
    );
  }
}

export default App;
