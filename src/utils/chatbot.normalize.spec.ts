import { Normalize } from '@/utils/chatbot.normalize';

const normalize = new Normalize();

describe('chatbot normalize', () => {
  it('should transform text to lowercase', () => {
    const input = `Você apenas disse que era o preferido?`;
    const expectedOutput = `você apenas disse que era o preferido?`;

    expect(normalize.toLowerCase(input)).toBe(expectedOutput);
  });

  it('should remove special characters', () => {
    const input = `você apenas disse que era  o preferido?`;
    const expectedOutput = `voce apenas disse que era o preferido`;

    expect(normalize.removeSpecialCharactersAndAscii(input)).toBe(expectedOutput);
  });

  it('should transform differents phrases in some based in synonimous', () => {
    expect(normalize.isSynonymous('favorito', 'preferido')).toBeTruthy();
  });

  it('should transform differents phrases in some based in synonimous', () => {
    expect(normalize.isSynonymous('amigavel', 'preferido')).toBeFalsy();
  });

  it('should transform preferido in last synonymous', () => {
    expect(normalize.lastSynonymous('preferido')).toEqual('preferido');
  });

  it('should transform favorito in last synonymous', () => {
    expect(normalize.lastSynonymous('favorito')).toEqual('preferido');
  });

  it('should normalize phrase', () => {
    expect(normalize.normalizeSentences('meu doce favorito é favor')).toEqual('meu suave preferido e obsequio');
  });

  it('should extract stepWorlds', () => {
    expect(normalize.extractSteps('meu doce favorito é favor')).toEqual({
      phrase: 'doce favorito',
      steps: 'meu e favor',
    });
  });

  it('should extract stepWorlds', () => {
    expect(normalize.fullStep('Meu docinho favorito pra voce é goiabada!')).toEqual({
      phrase: 'docinho preferido goiabada',
      steps: 'meu para voce e',
    });
  });
});
