import implementation = require('./implementation');

declare function shimAggregateError(): typeof implementation;

export = shimAggregateError;
