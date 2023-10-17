export = isSymbol;

/**
 * Is this an ES6 Symbol value?
 *
 * @example
 * import assert = require('node:assert');
 * import isSymbol = require('is-symbol');
 *
 * assert(!isSymbol(function () {}));
 * assert(!isSymbol(null));
 * assert(!isSymbol(function* () { yield 42; return Infinity; });
 *
 * assert(isSymbol(Symbol.iterator));
 * assert(isSymbol(Symbol('foo')));
 * assert(isSymbol(Symbol.for('foo')));
 * assert(isSymbol(Object(Symbol('foo'))));
 */
declare function isSymbol(value: any): value is symbol;
