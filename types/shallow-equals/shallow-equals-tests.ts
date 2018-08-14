import shallowEquals = require('shallow-equals');

interface A {
  foo: string;
}

interface B {
  foo: string;
  bar?: string;
}

const a: A = { foo: 'bar' };
const b: B = { foo: 'baz' };
function compare(a: A, b: B) {
  return false;
}

shallowEquals(a, b);
shallowEquals(a, b, compare);
