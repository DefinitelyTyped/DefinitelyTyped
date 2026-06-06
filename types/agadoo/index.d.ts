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
