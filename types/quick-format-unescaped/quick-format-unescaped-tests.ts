import format = require('quick-format-unescaped');

format('%o %s', [{ foo: 1 }, 'Hello World']);

const options: format.Options = { stringify: o => JSON.stringify(o) };
format('Hello world!', [], options);
