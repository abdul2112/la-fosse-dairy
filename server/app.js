const express = require('express');
const cors = require('cors');
const logger = require('./logger');
const diaryRouter = require('./routers/diaryRouter');

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/diary', diaryRouter);

module.exports = app;
