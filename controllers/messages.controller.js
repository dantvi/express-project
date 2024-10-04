function getMessages(req, res){
  res.send('<ul><li>Hello! You are a cat!</li></ul>');
}

function postMessage(req, res) {
  console.log('Updating messages...');
  res.send('Message updated');
}

module.exports = {
  getMessages, 
  postMessage,
};
