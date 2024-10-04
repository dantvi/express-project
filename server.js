const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
  {
    id: '0',
    name: 'Albert Einstein'
  },
  {
    id: '1',
    name: 'Marie Curie'
  },
  {
    id: '2',
    name: 'Sir Isaac Newton'
  }
];

// Our own logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const deltaTime = Date.now() - start;
  console.log(`method: ${req.method}, url: ${req.url}, request time: ${deltaTime}ms`);
});

// JSON parsing middleware from express
app.use(express.json());

app.post('/friends', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend name'
    });
  }

  const newFriend = {
    id: friends.length,
    name: req.body.name       // Uses json parsing middleware
  }
  friends.push(newFriend);
  res.json(newFriend);
});

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'Friend does not exist'
    });
  }
});

app.get('/messages', (req, res) => {
  res.send('<ul><li>Hello! You are a cat!</li></ul>');
});

app.post('/messages', (req, res) => {
  console.log('Updating messages...');
  res.send('Message updated');
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
