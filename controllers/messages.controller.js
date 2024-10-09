const path = require('path');
// /folder/files.jpg   \folder\files.jpg   The path is different depending on your operating system

function getMessages(req, res){
  res.render('messages', {
    title: 'Messages to my friends!',
    friend: 'Alan Turing'
  });
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
}

function postMessage(req, res) {
  console.log('Updating messages...');
  res.send('Message updated');
}

module.exports = {
  getMessages, 
  postMessage,
};
