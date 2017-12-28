import * as isObject from 'is-object';

isObject({});
isObject(null);
isObject(undefined);
isObject(9);
isObject(new Object());
isObject(Array);
