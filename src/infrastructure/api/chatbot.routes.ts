import express from 'express';
import ChatbotController from './chatbot.controller';

const router = express.Router();

const chatbotController = new ChatbotController();
router.post('/ask', chatbotController.askQuestion);

export default router;
