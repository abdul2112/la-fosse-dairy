const { Router } = require('express');
const diaryController = require('../controllers/diaryControllers');

const diaryRouter = Router();

diaryRouter.get('/', diaryController.index);
diaryRouter.post('/', diaryController.create);

module.exports = diaryRouter