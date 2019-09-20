import * as TokenGenerator from 'tokgen';

const generator1 = new TokenGenerator();
const generator2 = new TokenGenerator('0-9a-f');
const generator3 = new TokenGenerator({chars: '0-9a-f'});
const generator4 = new TokenGenerator(8);
const generator5 = new TokenGenerator({length: 8});
const generator6 = new TokenGenerator({chars: '0-9a-f', length: 8});

const token1 = generator1.generate();

const token2 = generator1.generate(10);

generator1.generate((error, token) => {
  // nothing to do in this test
});

generator1.generate(8, (error, token) => {
  // nothing to do in this test
});
