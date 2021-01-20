// Type definitions for heft-jest 1.0
// Project: https://github.com/octogonz/heft-jest
// Definitions by: Pete Gonzalez <https://github.com/octogonz>
//                 Ian Clanton-Thuon <https://github.com/iclanton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

/// <reference types="jest" />
/// <reference path="./mocked.d.ts" />

/**
 * Tests can use the `mocked()` function to access additional properties that
 * Jest adds to a mocked object.
 *
 * @remarks
 *
 * In the example below, `mockClear()` is not part of the type signature for the
 * real `SoundPlayer` class.  It is added by Jest.  The `mocked()` function returns
 * its input object but extends the type signature with these additional members.
 *
 * ```ts
 * jest.mock('./SoundPlayer');
 * import SoundPlayer from './SoundPlayer';
 *
 * // mockClear() is provided by Jest's API:
 * mocked(SoundPlayer).mockClear();
 * ```
 *
 * Heft's API is based on `mocked()` from `ts-jest`, but provided as a global API
 * so you don't need to explicitly import it.  For more information, see the `ts-jest`
 * documentation here:
 *
 * https://kulshekhar.github.io/ts-jest/user/test-helpers
 */
declare function mocked<T>(item: T, deep?: false): mocked.MaybeMocked<T>;
declare function mocked<T>(item: T, deep: true): mocked.MaybeMockedDeep<T>;
