// Type definitions for double-hmac 1.0
// Project: https://github.com/emilbayes/double-hmac
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = compare;

/**
 * Compare two Buffers using Double HMAC to protect against timing attacks.
 *
 * @example
 * import * as assert from 'assert'
 * import compare = require('double-hmac')
 *
 * const a = Buffer.from('some string')
 * const b = Buffer.from('some other string')
 * const c = Buffer.from('some string')
 *
 * compare(a, b, (err, equal) => {
 *   assert.ifError(err)
 *   assert.ok(!equal)
 * })
 *
 * compare(a, c, (err, equal) => {
 *   assert.ifError(err)
 *   assert.ok(equal)
 * })
 */
declare function compare(a: Buffer, b: Buffer, cb: (err: Error | null, equal: boolean) => void): void;
