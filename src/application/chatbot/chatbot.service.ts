import Chatbot from '@/domain/chatbot/chatbot.entity';

export default class ChatbotService {
  chatbot: Chatbot;

  constructor() {
    this.chatbot = new Chatbot();
  }

  getAnswer(question: string) {
    return this.chatbot.askQuestion(question);
  }
}
