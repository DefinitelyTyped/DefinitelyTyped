import AggregateError = require('aggregate-error');

const err = new AggregateError([new Error('foo'), 'bar']);

for (const el of Array.from(err)) {
    const err: Error = el;
}

throw err;
