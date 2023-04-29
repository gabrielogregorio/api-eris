import Chatbot from './chatbot.entity';

describe('Chatbot', () => {
  let chatbot: Chatbot;

  beforeEach(() => {
    chatbot = new Chatbot();
  });

  test('askQuestion should return a specific answer for a known question', () => {
    const question = 'Qual é o seu nome?';
    const answer = chatbot.askQuestion(question);
    expect(answer).toBe('Meu nome é Chatbot.');
  });

  test('askQuestion should return a default answer for an unknown question', () => {
    const question = 'Qual é a sua cor favorita?';
    const answer = chatbot.askQuestion(question);
    expect(answer).toBe('Desculpe, não entendi a sua pergunta.');
  });
});
