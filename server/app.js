const express = require('express');
const cors = require('cors')
const logger = require('./logger')

const app = express();

//Middleware
app.use(cors())
app.use(express.json())
app.use(logger)

module.exports = app;
