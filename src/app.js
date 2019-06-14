const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

/*------------------Routes-------------------*/
const index = require('./routes/index');
const Route = require('./routes/Route');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', index);
app.use('/SaoLeopoldo', Route);

module.exports = app;
