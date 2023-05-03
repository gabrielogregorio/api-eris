import { synonymousWords } from '@/utils/sinonimos';
import { stepWorlds } from '@/utils/stepworlds';

export class Normalize {
  private worlds: Record<string, string> = {};

  private classes: Record<string, string[]> = {};

  private steps: string[];

  constructor() {
    this.steps = stepWorlds.map((step) => {
      return this.removeSpecialCharactersAndAscii(step);
    });

    Object.entries(synonymousWords).forEach(([_, words], index) => {
      this.classes[index.toString()] = words.map((word) => this.removeSpecialCharactersAndAscii(word));

      words.forEach((world) => {
        this.worlds[this.removeSpecialCharactersAndAscii(world)] = index.toString();
      });
    });
  }

  toLowerCase(value: string) {
    return value.toLowerCase();
  }

  removeSpecialCharactersAndAscii(value: string) {
    const stringWithoutAscents = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const onlyCharacters = stringWithoutAscents.replace(/[^a-zA-Z0-9\s]/g, ' ');

    return onlyCharacters.replace(/\s{1,}/g, ' ').trim();
  }

  public isSynonymous(word1: string, word2: string): boolean {
    const word1Normalized = this.removeSpecialCharactersAndAscii(word1);
    const world2Normalized = this.removeSpecialCharactersAndAscii(word2);

    const worldClass = this.worlds[word1Normalized];

    return Boolean(worldClass) && this.classes[worldClass].includes(world2Normalized);
  }

  public lastSynonymous(word: string): string {
    const wordNormalized = this.removeSpecialCharactersAndAscii(word);

    const worldClass = this.worlds[wordNormalized];

    return worldClass ? this.classes[worldClass][this.classes[worldClass].length - 1] : word;
  }

  extractSteps(word: string): { phrase: string; steps: string } {
    const inputWorlds = this.removeSpecialCharactersAndAscii(word).split(' ');

    const phrase: string[] = [];
    const steps: string[] = [];

    inputWorlds.forEach((word) => {
      if (this.steps.includes(word)) {
        steps.push(word);
      } else {
        phrase.push(word);
      }
    });

    return {
      phrase: phrase.join(' '),
      steps: steps.join(' '),
    };
  }

  normalizeSentences(inputNormalized: string): string {
    const inputWorlds = inputNormalized.split(' ');

    return inputWorlds
      .map((item) => this.lastSynonymous(item))
      .join(' ')
      .trim();
  }

  fullStep(phrase: string) {
    const phraseInLowerCase = this.toLowerCase(phrase);
    const phraseNormalized = this.removeSpecialCharactersAndAscii(phraseInLowerCase);
    const phareseNormalizedWithSynonomous = this.normalizeSentences(phraseNormalized);

    return this.extractSteps(phareseNormalizedWithSynonomous);
  }
}
