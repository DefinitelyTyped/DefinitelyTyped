import tmpl = require('tmpl');

tmpl('the answer is {answer}'); // $ExpectType (args: object) => string
tmpl('the answer is {answer}')({ answer: 42 }); // $ExpectType string
tmpl('the answer is {answer}', { answer: 42 }); // $ExpectType string
// @ts-expect-error
tmpl();
// @ts-expect-error
tmpl('the answer is {answer}')();
