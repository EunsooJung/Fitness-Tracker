const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const logger = require('morgan');

const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 2000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require('./routes/htmlRoutes')(app, path);
require('./routes/apiRoutes')(app);

// MongoDB URI
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.listen(PORT, () => {
  console.log('Listening on PORT ' + PORT);
});
