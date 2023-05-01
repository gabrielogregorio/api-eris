import Chatbot from './chatbot.entity';

describe('Chatbot Entity', () => {
  let chatbot: Chatbot;

  beforeEach(() => {
    chatbot = new Chatbot();
  });

  it('askQuestion should return a specific answer for a known question', () => {
    const question = 'Qual é o seu nome?';
    const expectedOutput = 'Meu nome é Chatbot.';

    const answer = chatbot.askQuestion(question);

    expect(answer).toBe(expectedOutput);
  });

  it('askQuestion should return a default answer for an unknown question', () => {
    const question = 'Qual é a sua cor favorita?';
    const expectedOutput = 'Desculpe, não entendi a sua pergunta.';

    const answer = chatbot.askQuestion(question);

    expect(answer).toBe(expectedOutput);
  });
});
