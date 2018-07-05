import status = require('statuses');

let code: number | undefined;

code = status(403); // => 403
code = status('403'); // => 403
code = status('forbidden'); // => 403
code = status('Forbidden'); // => 403
code = status(306); // throws, as it's not supported by node.js

let codes: number[];
codes = status.codes;

let msg: string | undefined;
msg = status[404]; // => 'Not Found'

code = status['not found']; // => 404
code = status['Not Found']; // => 404

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
