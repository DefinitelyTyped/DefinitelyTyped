import shallowEqual = require('shallowequal');

const a = {}, b = {};
function compare(a: any, b: any, indexOrKey?: number | string) {
  return false;
}

shallowEqual(a, b);
shallowEqual(a, b, compare);
shallowEqual(a, b, compare, {});
