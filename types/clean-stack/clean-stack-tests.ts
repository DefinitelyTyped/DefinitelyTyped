import cleanStack = require('clean-stack');

const error = new Error('Missing unicorn');

if (error.stack) {
    cleanStack(error.stack); // $ExpectType string
    cleanStack(error.stack, {pretty: true}); // $ExpectType string
}
