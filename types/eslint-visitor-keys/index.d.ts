// Type definitions for eslint-visitor-keys 1.0
// Project: https://github.com/eslint/eslint-visitor-keys#readme
// Definitions by: Toru Nagashima <https://github.com/mysticatea>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export type VisitorKeys = Readonly<{
    [type: string]: ReadonlyArray<string> | undefined
}>;

export const KEYS: VisitorKeys;
export function getKeys(node: {}): ReadonlyArray<string>;
export function unionWith(keys: VisitorKeys): VisitorKeys;
