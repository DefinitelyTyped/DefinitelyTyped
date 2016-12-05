
import stackTrace = require('stack-trace');

var currentStackTrace = stackTrace.get();

var err = new Error('something went wrong');
var trace = stackTrace.parse(err);

var fileName = trace[0].getFileName();
