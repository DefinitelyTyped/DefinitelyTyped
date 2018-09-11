import elegantSpinner = require('elegant-spinner');

const frameFunction = elegantSpinner();

// $ExpectType string
frameFunction();

const frames = elegantSpinner.frames;
