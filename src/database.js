require('dotenv').config();

const mongoose = require('mongoose');

const MONGOBD_URI = process.env.MONGOBD_URI;

mongoose.connect(MONGOBD_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});