const express = require('express');
const cors = require('cors');
const MessageController = require('./controllers/messages.controller');
const app = express();

app.use(cors());

app.get('/', async (req, res, next) => {});

app.get('/', MessageController.getAllMessages);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err);
});

module.exports = app;
