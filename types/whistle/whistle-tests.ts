import startWhistle, { WhistleResult } from 'whistle';

// $ExpectType WhistleResult
const result = startWhistle({
  port: 8899,
  storage: 'test',
});
