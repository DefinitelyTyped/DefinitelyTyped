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
