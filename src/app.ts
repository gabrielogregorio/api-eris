// import app from "./infrastructure/api/server";

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   // eslint-disable-next-line no-console
//   console.log(`Server running on port ${PORT}`);
// });

import fs from 'fs';

const exampleItems = JSON.parse(fs.readFileSync('./src/example.json', { encoding: 'utf-8' }).toString());

const model: any = {};
exampleItems.forEach((item) => {
  item.split(' ').forEach((word, index) => {
    const nextWord = item.split(' ').slice(index + 1, index + 2) || '';

    const prevWord = item.split(' ').slice(0, index) || '';

    try {
      model[word].next.push(nextWord);
      model[word].prev.push(prevWord);
    } catch (error) {
      model[word] = { next: [nextWord], prev: [prevWord] };
    }
  });
});

fs.writeFileSync('./model.json', JSON.stringify(model), { encoding: 'utf-8' });

function sortItem(listItems: any[]): any {
  if (listItems.length === 0) {
    return '';
  }

  const randomIndex = Math.floor(Math.random() * listItems.length);
  return listItems[randomIndex];
}

const generateNext = (items: string[]) => {
  const lastItem = items[items.length - 1];
  const prevItem = items.slice(0, items.length - 1);

  const nextItem = [];
  const fullModel = model[lastItem];
  fullModel.prev.forEach((item, index) => {
    if (prevItem.join('') === item.join('')) {
      nextItem.push(fullModel.next[index][0]);
    }
  });

  return sortItem(nextItem);
};

const originalAsk = 'me diga';

let pergunta = originalAsk;
let onlyResponse = '';

while (true) {
  const nextItem = generateNext(pergunta.split(' '));
  if (nextItem) {
    onlyResponse = onlyResponse ? onlyResponse + ' ' + nextItem : nextItem;
    pergunta = pergunta + ' ' + nextItem;
  } else {
    break;
  }
}

console.log(originalAsk);
console.log(onlyResponse);
