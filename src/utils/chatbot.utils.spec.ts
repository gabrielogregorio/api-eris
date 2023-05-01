import { sanitizeQuestion } from '@/utils/chatbot.utils';

describe('sanitizeQuestion', () => {
  test('sanitizeQuestion should return a empty', () => {
    const input = '';
    const expectedOutput = '';

    const result = sanitizeQuestion(input);

    expect(result).toBe(expectedOutput);
  });

  test('sanitizeQuestion should sanitize string', () => {
    const input = ' ask ';
    const expectedOutput = 'ask';

    const result = sanitizeQuestion(input);

    expect(result).toBe(expectedOutput);
  });
});
