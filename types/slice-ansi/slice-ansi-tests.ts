import sliceAnsi = require('slice-ansi');

// $ExpectType string
sliceAnsi('The quick brown \u001b[31mfox jumped over \u001b[39mthe lazy \u001b[32mdog and then ran away with the unicorn.\u001b[39m', 20, 30);

// $ExpectType string
sliceAnsi('test', 1);

// $ExpectError
sliceAnsi();

// $ExpectError
sliceAnsi(5);
