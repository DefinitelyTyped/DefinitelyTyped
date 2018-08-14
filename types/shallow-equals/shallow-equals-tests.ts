import shallowEquals = require('shallow-equals');

const a = {};
const b = {};
function compare(a: object, b: object) {
    return false;
}

shallowEquals(a, b);
shallowEquals(a, b, compare);
