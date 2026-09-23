const express = require('express');
const interviewerController = require('../controllers/interview.controller');
const interviewRouter = express.Router();

interviewRouter.post('/interview/start',interviewerController.interviewController);
interviewRouter.post('/interview/answer',interviewerController.startMessaging);

module.exports = interviewRouter;