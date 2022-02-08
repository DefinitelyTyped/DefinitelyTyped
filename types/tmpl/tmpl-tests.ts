import tmpl = require('tmpl');

tmpl('the answer is {answer}'); // $ExpectType (args: object) => string
tmpl('the answer is {answer}')({ answer: 42 }); // $ExpectType string
tmpl('the answer is {answer}', { answer: 42 }); // $ExpectType string
tmpl(); // $ExpectError
tmpl('the answer is {answer}')(); // $ExpectError
