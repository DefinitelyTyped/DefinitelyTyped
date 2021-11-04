import LosslessJSON = require('lossless-json');

LosslessJSON.config({ circularRefs: false });

const parsed = LosslessJSON.parse('{ "n": 123 }', (key, value) => {
    if (key && value && value instanceof LosslessJSON.LosslessNumber) {
        return value.valueOf();
    }
    return value;
});

const str = LosslessJSON.stringify({ n: new LosslessJSON.LosslessNumber(parsed.n) }, undefined, 2);
if (typeof str !== 'string') throw new Error('not a string');
