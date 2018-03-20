import safeJsonStringify = require('safe-json-stringify');

const obj1 = {foo: 'bar'};
safeJsonStringify(obj1);
safeJsonStringify.ensureProperties(obj1);
