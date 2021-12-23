require('../database');
const express = require('express');
const router = express.Router();

var messages = []

router.get('/', (req, res) => {
  res.render('index.html', { messages: messages });
});

router.post('/', function(req, res) {
  messages.push(req.body.message);
  console.log(messages);
  res.render('index.html', { messages: messages });
});

module.exports = router;