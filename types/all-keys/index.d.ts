// Type definitions for all-keys 2.0
// Project: https://github.com/sindresorhus/all-keys#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export = allKeys;

/**
 * Get all property keys of an object including non-enumerable and inherited ones.
 * Like [Reflect.ownKeys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)
 * but traverses up the prototype-chain.
 */
declare function allKeys(obj: object, options?: allKeys.Options): Set<string>;

declare namespace allKeys {
    interface Options {
        /**
         * Include `Object.prototype` properties like `isPrototypeOf`.
         * @default true
         */
        includeObjectPrototype?: boolean;
        /**
         * Include [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) keys.
         * @default true
         */
        includeSymbols?: boolean;
    }
}
