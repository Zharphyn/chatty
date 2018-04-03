/* jshint esversion: 6 */

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${PORT}`));
// Create the WebSockets server
const wss = new SocketServer({
  server
});

const userCount = {
  type: 'userCount',
  connected: 0
};

wss.broadcast = function broadcast(messageObject) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === 1) {
      client.send(JSON.stringify(messageObject));
    }
  });
};

wss.on('connection', (ws) => {
  console.log("Connection Made!!");
  userCount.connected++;
  wss.broadcast(userCount);

  ws.on('message', (message) => {
    let messageObject = JSON.parse(message);
    messageObject.key = uuidv4();
    wss.broadcast(messageObject);
  });

  // Set up a callback for when a client closes the socket. 
  ws.on('close', () => {
    console.log('Connection Lost!!');
    userCount.connected--;
    wss.broadcast(userCount);
  });
});