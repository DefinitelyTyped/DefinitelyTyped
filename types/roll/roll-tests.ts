import Roll = require('roll');

// $ExpectType Roll
const roll = new Roll();

// $ExpectType number
roll.roll('d6').result;

// $ExpectType number
roll.roll({
    quantity: 2,
    sides: 6,
    transformations: [
      'sum',
      ['add', 2]
    ]
}).result;

// $ExpectType InvalidInputError
Roll.InvalidInputError;
