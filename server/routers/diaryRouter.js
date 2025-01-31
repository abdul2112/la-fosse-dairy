const { Router } = require('express');
const diaryController = require('../controllers/diaryControllers');

const diaryRouter = Router();

diaryRouter.post('/', diaryController.create);

module.exports = diaryRouter