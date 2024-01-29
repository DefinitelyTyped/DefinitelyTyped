export = unboxPrimitive;

/**
 * Unbox a boxed JS primitive value. This function works cross-realm/iframe,
 * does not depend on `instanceof` or mutable properties, and works despite ES6 `Symbol.toStringTag`.
 *
 * @example
 * import unboxPrimitive = require('unbox-primitive');
 * import * as assert from 'node:assert';
 *
 * assert.equal(unboxPrimitive(new Boolean(false)), false);
 * assert.equal(unboxPrimitive(new String('f')), 'f');
 * assert.equal(unboxPrimitive(new Number(42)), 42);
 * const s = Symbol();
 * assert.equal(unboxPrimitive(Object(s)), s);
 * assert.equal(unboxPrimitive(Object(BigInt(42))), BigInt(42));
 */
declare function unboxPrimitive<T extends unboxPrimitive.Boxed>(value: T): unboxPrimitive.Unbox<T>;

declare namespace unboxPrimitive {
    type Boxed = String | Number | Boolean | Symbol | BigInt;
    type Unbox<T extends Boxed> = T extends String ? string
        : T extends Number ? number
        : T extends Boolean ? boolean
        : T extends Symbol ? symbol
        : T extends BigInt ? bigint
        : never;
}
