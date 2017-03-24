import isArray = require('is-array');

isArray();
isArray(null);
isArray(1);
isArray(true);
isArray([]);
isArray({});

var x = {};
if (isArray(x)) {
    x.push(0);
}
