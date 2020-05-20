import asyncPool = require('tiny-async-pool');

const expected = JSON.stringify(['A', 'B', 'C']);

asyncPool(5, ['a', 'b', 'c'], (value) => {
  return new Promise((resolve) => {
    resolve(value.toUpperCase);
  });
}).then((results) => {
  if (JSON.stringify(results) !== expected) {
    throw new Error('Result is not equal to expected result!');
  }
});
