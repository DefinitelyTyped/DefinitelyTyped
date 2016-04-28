
import status = require('statuses');

var code: number;

code = status(403) // => 403
code = status('403') // => 403
code = status('forbidden') // => 403
code = status('Forbidden') // => 403
code = status(306) // throws, as it's not supported by node.js

var codes: Array<number>;
codes = status.codes;

var msg: string;
msg = status[404] // => 'Not Found'

code = status['not found'] // => 404
code = status['Not Found'] // => 404

var isRedirect: boolean;
isRedirect = status.redirect[200] // => undefined
isRedirect = status.redirect[301] // => true

var isEmpty: boolean;
isEmpty = status.empty[200] // => undefined
isEmpty = status.empty[204] // => true
isEmpty = status.empty[304] // => true

var isRetry: boolean;
isRetry = status.retry[501] // => undefined
isRetry = status.retry[503] // => true
