import express from 'express';
import ChatbotController from './chatbot.controller';
import ChatbotService from '@/application/chatbot/chatbot.service';

const router = express.Router();

const chatbotService = new ChatbotService();
const chatbotController = new ChatbotController(chatbotService);

router.post('/ask', (req, res) => chatbotController.askQuestion(req, res));

export default router;
