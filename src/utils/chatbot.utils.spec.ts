import { sanitizeQuestion } from '@/utils/chatbot.utils';

describe('sanitizeQuestion', () => {
  test('sanitizeQuestion should return a empty', () => {
    expect(sanitizeQuestion('')).toBe('');
  });

  test('sanitizeQuestion should sanitize string', () => {
    expect(sanitizeQuestion(' ask ')).toBe('ask');
  });
});
