import AggregateError = require('aggregate-error');

const err = new AggregateError([new Error('foo'), 'bar']);

for (const el of Array.from(err)) {
    let err: Error = el;
}

throw err;
