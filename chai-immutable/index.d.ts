// Type definitions for chai-immutable 1.6
// Project: https://github.com/astorije/chai-immutable
// Definitions by: Joeri Sebrechts <https://github.com/jsebrech>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="chai" />
/// <reference types="immutable" />

declare namespace Chai {

    interface Assertion {
        /**
         * ### .size(value)
         *
         * Asserts that the immutable collection has the expected size.
         *
         * ```js
         * expect(List.of(1, 2, 3)).to.have.size(3);
         * ```
         *
         * It can also be used as a chain precursor to a value comparison for the
         * `size` property.
         *
         * ```js
         * expect(List.of(1, 2, 3)).to.have.size.least(3);
         * expect(List.of(1, 2, 3)).to.have.size.most(3);
         * expect(List.of(1, 2, 3)).to.have.size.above(2);
         * expect(List.of(1, 2, 3)).to.have.size.below(4);
         * expect(List.of(1, 2, 3)).to.have.size.within(2,4);
         * ```
         *
         * Similarly to `length`/`lengthOf`, `sizeOf` is an alias of `size`:
         *
         * ```js
         * expect(List.of(1, 2, 3)).to.have.sizeOf(3);
         * ```
         *
         * @name size
         * @param {Number} size
         */
        size: Length;
        /**
         * ### .sizeOf(collection, length)
         *
         * Asserts that the immutable collection has the expected size.
         *
         * ```js
         * assert.sizeOf(List.of(1, 2, 3), 3);
         * assert.sizeOf(new List(), 0);
         * ```
         *
         * @name sizeOf
         * @param {Collection} collection
         * @param {Number} size
         */
        sizeOf: Length;
    }
}

declare module "chai-immutable" {

    function chaiImmutable(chai: any, utils: any): void;

    namespace chaiImmutable {
    }

    export = chaiImmutable;
}
