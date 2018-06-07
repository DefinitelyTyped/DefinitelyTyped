import serializeError = require('serialize-error');

const error = new Error('unicorn');

const serializedError = serializeError(error);
