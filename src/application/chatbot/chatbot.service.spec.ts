import ChatbotService from './chatbot.service';

describe('ChatbotService', () => {
  let chatbotService: ChatbotService;

  beforeEach(() => {
    chatbotService = new ChatbotService();
  });

  test('getAnswer should return a valid response', () => {
    const question = 'Qual é o seu nome?';
    const expectedOutput = 'Meu nome é Chatbot.';

    const answer = chatbotService.getAnswer(question);

    expect(answer).toContain(expectedOutput);
  });
});
