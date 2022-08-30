import sample = require('secure-weighted-sample');
import sampleInteger = require('secure-weighted-sample/integer');

sample([0.1, 0.5, 0.2, 0.05, 0.15] as const); // $ExpectType number
sampleInteger([8, 40, 16, 4, 6] as const); // $ExpectType number
