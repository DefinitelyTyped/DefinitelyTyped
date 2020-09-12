// Type definitions for rfdc 1.1
// Project: https://github.com/davidmarkclements/rfdc#readme
// Definitions by: Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = rfdc;

/**
 * Really Fast Deep Clone
 *
 * ### Types
 *
 * `rdfc` clones all JSON types:
 *
 * * `Object`
 * * `Array`
 * * `Number`
 * * `String`
 * * `null`
 *
 * With additional support for:
 *
 * * `Date` (copied)
 * * `undefined` (copied)
 * * `Function` (referenced)
 * * `AsyncFunction` (referenced)
 * * `GeneratorFunction` (referenced)
 * * `arguments` (copied to a normal object)
 *
 * All other types have output values that match the output
 * of `JSON.parse(JSON.stringify(o))`.
 *
 * For instance:
 *
 * ```js
 * const rdfc = require('rdfc')()
 * const err = Error()
 * err.code = 1
 * JSON.parse(JSON.stringify(e)) // {code: 1}
 * rdfc(e) // {code: 1}
 *
 * JSON.parse(JSON.stringify(new Uint8Array([1, 2, 3]))) //  {'0': 1, '1': 2, '2': 3 }
 * rdfc(new Uint8Array([1, 2, 3])) //  {'0': 1, '1': 2, '2': 3 }
 *
 * JSON.parse(JSON.stringify({rx: /foo/})) // {rx: {}}
 * rdfc({rx: /foo/}) // {rx: {}}
 * ```
 */
declare function rfdc(opts?: rfdc.Options): <T>(obj: T) => T;

declare namespace rfdc {
    interface Options {
        /**
         * Copy prototype properties as well as own properties into the new
         * object.
         *
         * It's marginally faster to allow enumerable properties on the
         * prototype to be copied into the cloned object (not onto it's
         * prototype, directly onto the object).
         *
         * To explain by way of code:
         *
         * ```js
         * require('rfdc')({ proto: false })(Object.create({a: 1})) // => {}
         * require('rfdc')({ proto: true })(Object.create({a: 1})) // => {a: 1}
         * ```
         *
         * Setting `proto` to `true` will provide an additional 2% performance
         * boost.
         */
        proto?: boolean;
        /**
         * Keeping track of circular references will slow down performance with
         * an additional 25% overhead. Even if an object doesn't have any
         * circular references, the tracking overhead is the cost. By default if
         * an object with a circular reference is passed to `rfdc`, it will
         * throw (similar to how `JSON.stringify` would throw).
         *
         * Use the `circles` option to detect and preserve circular references
         * in the object. If performance is important, try removing the circular
         * reference from the object (set to `undefined`) and then add it back
         * manually after cloning instead of using this option.
         */
        circles?: boolean;
    }
}
