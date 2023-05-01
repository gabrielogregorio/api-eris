import request from 'supertest';
import app from '../infrastructure/api/server';

describe('Chatbot Controller', () => {
  test('POST /api/chatbot/ask should return a valid response', async () => {
    const question = 'Qual é o seu nome?';
    const expectedOutput = 'Meu nome é Chatbot.';

    const response = await request(app).post('/api/chatbot/ask').send({ question });

    expect(response.statusCode).toBe(200);
    expect(response.body.answer).toContain(expectedOutput);
  });
});
