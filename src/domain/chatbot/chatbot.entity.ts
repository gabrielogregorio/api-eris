export default class Chatbot {
  askQuestion(question: string) {
    if (question === 'Qual é o seu nome?') {
      return 'Meu nome é Chatbot.';
    }

    return 'Desculpe, não entendi a sua pergunta.';
  }
}
