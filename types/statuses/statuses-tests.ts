import status = require('statuses');

let code_msg: number | string;

code_msg = status(403); // => 'Forbidden'
code_msg = status('403'); // => 'Forbidden'
code_msg = status('forbidden'); // => 403
code_msg = status('Forbidden'); // => 403
code_msg = status(306); // throws

let codes: number[];
codes = status.codes;

let msg: string | undefined;
msg = status.message[404]; // => 'Not Found'

let code: number | undefined;
code = status.code['not found']; // => 404
code = status.code['Not Found']; // => 404

let isRedirect: boolean | undefined;
isRedirect = status.redirect[200]; // => undefined
isRedirect = status.redirect[301]; // => true

let isEmpty: boolean | undefined;
isEmpty = status.empty[200]; // => undefined
isEmpty = status.empty[204]; // => true
isEmpty = status.empty[304]; // => true

let isRetry: boolean | undefined;
isRetry = status.retry[501]; // => undefined
isRetry = status.retry[503]; // => true
