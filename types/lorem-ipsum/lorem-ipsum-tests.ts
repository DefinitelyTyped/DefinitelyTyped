import * as loremIpsum from 'lorem-ipsum';

let result: string;
result = loremIpsum();
result = loremIpsum({});
result = loremIpsum({ count: 20 });
result = loremIpsum({ count: 20, units: 'words' });
result = loremIpsum({ count: 3, units: 'paragraphs' });
result = loremIpsum({ random: () => Math.random() * Math.random() });
result = loremIpsum({ paragraphLowerBound: 3, paragraphUpperBound: 6, count: 3, units: 'paragraphs' });
result = loremIpsum({ sentenceLowerBound: 10, sentenceUpperBound: 15, count: 5, units: 'sentences' });
result = loremIpsum({ words: ['a', 'b', 'c'] });
result = loremIpsum({ suffix: '-' });
result = loremIpsum({ format: 'html' });
