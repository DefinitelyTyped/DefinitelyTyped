import extractStack = require('extract-stack');

const error = new Error('Missing unicorn');

extractStack(error); // $ExpectType string
extractStack(error.stack); // $ExpectType string
extractStack.lines(error); // $ExpectType string[]
extractStack.lines(error.stack); // $ExpectType string[]
