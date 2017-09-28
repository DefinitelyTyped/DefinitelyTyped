import deprecate = require('util-deprecate');

function foo() {}

const deprecated = deprecate(foo, 'foo() is deprecated, use bar() instead');
deprecated; // $ExpectType () => void

function foo2(i: number) { return Promise.resolve('foo'); }
const deprecated2 = deprecate(foo2, 'foo() is deprecated, use bar() instead');
deprecated2; // $ExpectType (i: number) => Promise<string>
