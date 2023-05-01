import ChatbotController from '@/infrastructure/api/chatbot.controller';
import ChatbotService from '@/application/chatbot/chatbot.service';
import { getMockReq, getMockRes } from '@jest-mock/express';

describe('Chatbot Controller', () => {
  let chatbotController: ChatbotController;
  let chatbotService: ChatbotService;

  const { res, clearMockRes } = getMockRes();

  beforeEach(() => {
    clearMockRes();

    chatbotService = new ChatbotService();
    chatbotController = new ChatbotController(chatbotService);
  });

  it('askQuestion should return a valid response', async () => {
    const input = { question: 'Qual é o seu nome?' };
    const expectedOutput = 'Meu nome é Chatbot.';

    const req = getMockReq({ body: input });

    chatbotController.askQuestion(req, res);

    expect(res.json).toHaveBeenCalledWith({ answer: expectedOutput });
  });
});
