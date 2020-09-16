import assert = require('assert');
import sortObject = require('sort-object-keys');

assert.equal(JSON.stringify({
    c: 1,
    b: 1,
    d: 1,
    a: 1,
}), JSON.stringify({
    a: 1,
    b: 1,
    c: 1,
    d: 1,
}));

assert.equal(JSON.stringify(sortObject({
    c: 1,
    b: 1,
    d: 1,
    a: 1,
}, ['b', 'a', 'd', 'c'])), JSON.stringify({
    b: 1,
    a: 1,
    d: 1,
    c: 1,
}));

function removeKeyAncCompareIndex(keyA: string, keyB: string) {
    const a = parseInt(keyA.slice(4), 10);
    const b = parseInt(keyB.slice(4), 10);
    return a - b;
}

assert.equal(JSON.stringify(sortObject({
    "key-1": 1,
    "key-3": 1,
    "key-10": 1,
    "key-2": 1,
}, removeKeyAncCompareIndex)), JSON.stringify({
    "key-1": 1,
    "key-2": 1,
    "key-3": 1,
    "key-10": 1,
}));
