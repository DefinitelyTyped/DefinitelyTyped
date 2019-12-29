import isObject = require('is-object');

isObject({});
isObject(null);
isObject(undefined);
isObject(9);
isObject(new Object());
isObject(Array);
