// Type definitions for get-intrinsic 1.0
// Project: https://github.com/ljharb/get-intrinsic#readme
// Definitions by: Jordan Harband <https://github.com/ljharb>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9

import { Intrinsics } from './internal/intrinsics';

/**
 * Returns the ECMAScript intrinsic for the name.
 *
 * @param name The ECMAScript intrinsic name
 * @param allowMissing Whether the intrinsic can be missing in this environment
 *
 * @throws {SyntaxError} If the ECMAScript intrinsic doesn't exist
 * @throws {TypeError} If the ECMAScript intrinsic exists, but not in this environment and `allowMissing` is `false`.
 */
declare function GetIntrinsic<K extends keyof Intrinsics>(
    name: K,
    allowMissing?: false,
): Intrinsics[K];
declare function GetIntrinsic<K extends keyof Intrinsics>(
    name: K,
    allowMissing?: boolean,
): Intrinsics[K] | undefined;
declare function GetIntrinsic(name: string, allowMissing?: boolean): unknown;
export = GetIntrinsic;

declare namespace GetIntrinsic {
    export { Intrinsics };
}
