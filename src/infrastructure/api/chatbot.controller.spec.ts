import request from 'supertest';
import app from './server';

describe('ChatbotController', () => {
  test('POST /api/chatbot/ask should return a valid response', async () => {
    const question = 'Qual é o seu nome?';
    const response = await request(app).post('/api/chatbot/ask').send({ question });

    expect(response.statusCode).toBe(200);
    expect(response.body.answer).toContain('Meu nome é Chatbot.');
  });
});
