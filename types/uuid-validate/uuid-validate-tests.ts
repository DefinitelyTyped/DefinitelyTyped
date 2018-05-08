import validate = require('uuid-validate');

console.log(validate('95ecc380-afe9-11e4-9b6c-751b66dd541e')); // => true
console.log(validate('95ecc380-afe9-11e4-9b6c-751b66dd541e', 1)); // => true (it's version 1)
console.log(validate('95ecc380-afe9-11e4-9b6c-751b66dd541e', 4)); // => false (it's not version 4)
console.log(validate.version('95ecc380-afe9-11e4-9b6c-751b66dd541e')); // => 1
