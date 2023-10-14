// Type definitions for agadoo 2.0
// Project: https://github.com/Rich-Harris/agadoo#readme
// Definitions by: Artem Klyuev <https://github.com/ArtemKlyuev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Result {
    shaken: boolean;
}

/**
 * Check whether a package is tree-shakeable
 *
 * @param input path to package
 *
 * @example
 *
 * import { check } from 'agadoo';
 *
 * const { shaken } = await check('./some-module.js');
 */
export function check(input: string): Promise<Result>;
