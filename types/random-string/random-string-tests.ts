
import randomString = require('random-string');

console.log(randomString());
console.log(randomString({
  length: 20,
  numeric: true,
  letters: true,
  special: true
}));
