const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

const PORT = 3000;

// Our own logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const deltaTime = Date.now() - start;
  console.log(`method: ${req.method}, url: ${req.baseUrl}${req.url}, request time: ${deltaTime}ms`);
});


app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
