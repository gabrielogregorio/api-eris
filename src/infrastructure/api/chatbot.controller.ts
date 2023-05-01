import { Request, Response } from 'express';
import ChatbotService from '@/application/chatbot/chatbot.service';
import { IAskQuestionRequestBody } from './types/chatbot.types';
import { messageSchema } from '@/domain/chatbot/validation/message.schema';

export default class ChatbotController {
  private chatbotService: ChatbotService;

  constructor(chatbotService: ChatbotService) {
    this.chatbotService = chatbotService;
  }

  askQuestion(req: Request<unknown, unknown, IAskQuestionRequestBody>, res: Response) {
    const { error, value } = messageSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const answer = this.chatbotService.getAnswer(value.question);

    return res.status(200).json({ answer });
  }
}
