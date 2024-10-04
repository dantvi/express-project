const express = require('express');

const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

const app = express();

const PORT = 3000;

// Our own logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const deltaTime = Date.now() - start;
  console.log(`method: ${req.method}, url: ${req.url}, request time: ${deltaTime}ms`);
});

// JSON parsing middleware from express
app.use(express.json());

app.post('/friends', friendsController.postFriend);
app.get('/friends', friendsController.getFriends);
app.get('/friends/:friendId', friendsController.getFriend);

app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessage)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
