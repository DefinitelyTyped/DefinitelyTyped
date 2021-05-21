// Type definitions for unix-permissions 2.0
// Project: https://github.com/ehmicky/unix-permissions
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

export const convert: {
    /**
     * @returns `permission` converted to `'octal'`.
     * @throws An exception if the `permission` argument is invalid.
     *
     * @example
     * import { convert, positive } from 'unix-permissions';
     *
     * console.log(convert.octal('a=x')); // '0111'
     * console.log(positive(convert.octal('a=x'))); // '+0111'
     * console.log(convert.octal('o+x')); // '+0001'
     * console.log(convert.octal('o=x')); // '0001'
     *
     * try {
     *   convert.octal('z+x'); // Throws an exception (permission syntax is invalid)
     * } catch (error) {
     *   console.log(error.message);
     * }
     */
    octal(permission: Permission): string;

    /**
     * Note that this function doesn't make a distinction between:
     * - leaving unset parts unchanged
     * - actually unsetting them
     *
     * If you convert permission between `'number'` and `'stat'` representations, you might lose
     * this information as we assume `0` mean "unset permissions". However you can use `positive()`
     * to overcome this issue.
     *
     * @returns `permission` converted to `'number'`.
     * @throws An exception if the `permission` argument is invalid.
     *
     * @example
     * import { convert, positive } from 'unix-permissions';
     *
     * console.log(convert.number('111')); // 73
     * console.log(positive(convert.number('111'))); // 73
     * console.log(convert.number('o+x')); // 1
     * console.log(convert.number('o=x')); // 1
     *
     * try {
     *   convert.number('z+x'); // Throws an exception (permission syntax is invalid)
     * } catch (error) {
     *   console.log(error.message);
     * }
     */
    number(permission: Permission): number;

    /**
     * Note that this function doesn't make a distinction between:
     * - leaving unset parts unchanged
     * - actually unsetting them
     *
     * If you convert permission between `'number'` and `'stat'` representations, you might lose
     * this information as we assume `-` mean "unset permissions". However you can use `positive()`
     * to overcome this issue.
     *
     * @returns `permission` converted to `'stat'`.
     * @throws An exception if the `permission` argument is invalid.
     *
     * @example
     * import { convert, positive } from 'unix-permissions';
     *
     * console.log(convert.stat('111')); // '--x--x--x'
     * console.log(positive(convert.stat('111'))); // '--x--x--x'
     * console.log(convert.stat('o+x')); // '--------x'
     * console.log(convert.stat('o=x')); // '--------x'
     *
     * try {
     *   convert.stat('z+x'); // Throws an exception (permission syntax is invalid)
     * } catch (error) {
     *   console.log(error.message);
     * }
     */
    stat(permission: Permission): string;

    /**
     * Note that this function distinguishes between:
     * - leaving permissions as is (omitting them)
     * - unsetting them (using `-`)
     *
     * @returns `permission` converted to `'symbolic'`.
     * @throws An exception if the `permission` argument is invalid.
     *
     * @example
     * import { convert, positive } from 'unix-permissions';
     *
     * console.log(convert.symbolic('111')); // 'a=x'
     * console.log(positive(convert.symbolic('111'))); // 'a+x'
     * console.log(convert.symbolic({ others: { execute: true } })); // 'o+x'
     * console.log(
     *     convert.object({
     *         others: { read: false, write: false, execute: true },
     *         special: { sticky: false }
     *     }),
     * );
     * // 'o=x'
     *
     * try {
     *   convert.symbolic('z+x'); // Throws an exception (permission syntax is invalid)
     * } catch (error) {
     *   console.log(error.message);
     * }
     */
    symbolic(permission: Permission): string;

    /**
     * Note that this function distinguishes between:
     * - leaving permissions as is (omitting them)
     * - unsetting them (using `-`)
     *
     * @returns `permission` converted to `'object'`.
     * @throws An exception if the `permission` argument is invalid.
     *
     * @example
     * import { convert, positive } from 'unix-permissions';
     *
     * console.log(convert.object('111'));
     * // {
     * //     user: { read: false, write: false, execute: true },
     * //     group: { read: false, write: false, execute: true },
     * //     others: { read: false, write: false, execute: true },
     * //     special: { setuid: false, setgid: false, sticky: false }
     * // }
     *
     * console.log(positive(convert.object('111')));
     * // {
     * //     user: { execute: true },
     * //     group: { execute: true },
     * //     others: { execute: true }
     * // }
     *
     * console.log(convert.object('o+x'));
     * // { others: { execute: true } }
     *
     * console.log(convert.object('o=x'));
     * // {
     * //     others: { read: false, write: false, execute: true },
     * //     special: { sticky: false }
     * // }
     *
     * try {
     *   convert.object('z+x'); // Throws an exception (permission syntax is invalid)
     * } catch (error) {
     *   console.log(error.message);
     * }
     */
    object(permission: Permission): ObjectPermission;
};

/**
 * @returns The `permission`'s type.
 *
 * @example
 * import { type } from 'unix-permissions';
 *
 * console.log(type('1')); // 'octal'
 * console.log(type(1)); // 'number'
 * console.log(type('a+x')); // 'symbolic'
 * console.log(type('a+i')); // 'invalid'
 */
export function type(permission: Permission): PermissionType | "invalid";

/**
 * Normalizes a `permission` to its canonical shape.
 *
 * @throws An exception if the `permission` argument is invalid.
 *
 * @example
 * import { normalize } from 'unix-permissions';
 *
 * console.log(normalize('1')); // '0001'
 * console.log(normalize('g+x,o+x')); // 'go+x'
 * console.log(normalize('d--- --- ---')); // '---------'
 * console.log(normalize({ user: { read: undefined, write: true } }));
 * // { user: { write: true } }
 *
 * try {
 *   normalize('z+x'); // Throws an exception (permission syntax is invalid)
 * } catch (error) {
 *   console.log(error.message);
 * }
 */
export function normalize<T extends Permission>(permission: T): PermissionTransformResult<T>;

/**
 * Removes all negative permissions. See `convert.octal|number|stat|symbolic|object()` for more
 * explanation.
 *
 * @throws An exception if the `permission` argument is invalid.
 *
 * @example
 * import { positive, invert } from 'unix-permissions';
 *
 * console.log(positive('o+x,o-rw')); // 'o+x'
 * console.log(positive('o=x')); // 'o+x'
 * console.log(positive('660')); // '+0660'
 * console.log(invert('660')); // '0117'
 * console.log(invert(positive('660'))); // '-0660'
 */
export function positive<T extends Permission>(permission: T): PermissionTransformResult<T>;

/**
 * Tests whether `permission` includes `permissions`.
 *
 * @throws An exception if the `permission` or `permissions` arguments are invalid.
 *
 * @example
 * import { contain } from 'unix-permissions';
 *
 * console.log(contain('--x--x--x', 'a=x')); // `true`
 * console.log(contain('--x--x--x', 'a+x')); // `true`
 * console.log(contain('--x--x--x', 'a-x')); // `false`
 * console.log(contain('--x--x--x', 'a-w')); // `true`
 * console.log(contain('o+x', 'o+x')); // `true`
 * console.log(contain('o+x', 'o+x,o+x')); // `true`
 * console.log(contain('o+x', 'o=w')); // `false`
 * console.log(contain('o+x,o-w', 'o-w,o+x')); // `true`
 * console.log(contain('o+x,o-w', 'o-w')); // `true`
 * console.log(contain('o+x,o-w', 'o+x', 'o-w')); // `true`
 */
export function contain(permission: Permission, ...permissions: Permission[]): boolean;

/**
 * Tests whether `permission` equals exactly `permissions`.
 *
 * @throws An exception if the `permission` or `permissions` arguments are invalid.
 *
 * @example
 * import { equal } from 'unix-permissions';
 *
 * console.log(equal('--x--x--x', 'a=x')); // `true`
 * console.log(equal('--x--x--x', 'a+x')); // `false`
 * console.log(equal('--x--x--x', 'a-x')); // `false`
 * console.log(equal('--x--x--x', 'a-w')); // `false`
 * console.log(equal('o+x', 'o+x')); // `true`
 * console.log(equal('o+x', 'o+x,o+x')); // `true`
 * console.log(equal('o+x', 'o=w')); // `false`
 * console.log(equal('o+x,o-w', 'o-w,o+x')); // `true`
 * console.log(equal('o+x,o-w', 'o-w')); // `false`
 * console.log(equal('o+x,o-w', 'o+x', 'o-w')); // `false`
 */
export function equal(permission: Permission, ...permissions: Permission[]): boolean;

/**
 * Useful to avoid error-prone bitwise operations (`|`, `&`, `^`, `~`).
 *
 * This can also be used to remove special permissions using `set(permission, 'a-st')` since some
 * functions like [`umask`](https://linux.die.net/man/2/umask) do not allow them.
 *
 * @returns The result of setting `permissions` on `permission`.
 * @throws An exception if the `permission` or `permissions` arguments are invalid.
 *
 * @example
 * import { set } from 'unix-permissions';
 *
 * console.log(set('---------', 'a+x')); // '--x--x--x'
 * console.log(set('---------', 'a+x', 'a+r')); // 'r-xr-xr-x'
 * console.log(set('--x--x--x', 'o-x')); // '--x--x---'
 * console.log(set('a+x', 'a+r')); // 'a+rx'
 * console.log(set('4660', 'a-st')); // '0660'
 */
export function set<T extends Permission>(permission: T, ...permissions: Permission[]): PermissionTransformResult<T>;

/**
 * Inverts `permission` including special `permissions`.
 *
 * This can be used in combination with `set()` to unset `permissions` instead of setting them.
 *
 * @throws An exception if the `permission` or `permissions` arguments are invalid.
 *
 * @example
 * import { not, set } from 'unix-permissions';
 *
 * console.log(not('u+xs')); // 'u-xs'
 * console.log(not('u-xs')); // 'u+xs'
 * console.log(not('u=x')); // 'u=rws'
 * console.log(not('a=x')); // 'ug=rws,o=rwt'
 * console.log(not('rws-ws-w-')); // '---r--r-t'
 * console.log(not('0660')); // '7117'
 * console.log(not('1660')); // '6117'
 * console.log(set('rwxrwxrwx', not('a+x'))); // 'rw-rw-rw-'
 * console.log(set('---------', not('a-x'))); // '--x--x--x'
 * console.log(set('a+xr', not('a+r'))); // 'a+x,a-r'
 */
export function not<T extends Permission>(permission: T): PermissionTransformResult<T>;

/**
 * Inverts `permission` and removes special permissions.
 *
 * For example a [`umask`](https://linux.die.net/man/2/umask) of `117` means new files will be
 * created with `661` permissions.
 *
 * @throws An exception if the `permission` argument is invalid.
 *
 * @example
 * import { invert } from 'unix-permissions';
 *
 * console.log(invert('u+xs')); // 'u-x'
 * console.log(invert('u-xs')); // 'u+x'
 * console.log(invert('u=x')); // 'u+rw,u-x'
 * console.log(invert('a=x')); // 'a+rw,a-x'
 * console.log(invert('rws-ws-w-')); // '---r--r-x'
 * console.log(invert('0660')); // '0117'
 * console.log(invert('1660')); // '0117'
 */
export function invert<T extends Permission>(permission: T): PermissionTransformResult<T>;

/**
 * Retrieves the lowest permissions among all arguments.
 *
 * This does not return the lowest argument. Instead it returns a combination of the lowest bits of
 * all arguments.
 *
 * This can be useful if you are looking for the lowest permission of a several files, e.g. during
 * a directory recursion.
 *
 * @throws An exception if the `permission` or `permissions` arguments are invalid.
 *
 * @example
 * import { min } from 'unix-permissions';
 *
 * console.log(min('404', '440', '402')); // '0400'
 */
export function min(): undefined;
export function min<T extends Permission>(permission: T, ...permissions: Permission[]): PermissionTransformResult<T>;

/**
 * Inverse of `min()`.
 *
 * @throws An exception if the `permission` or `permissions` arguments are invalid.
 *
 * @example
 * import { max } from 'unix-permissions';
 *
 * console.log(max('404', '440', '402')) // '0446'
 */
export function max(): undefined;
export function max<T extends Permission>(permission: T, ...permissions: Permission[]): PermissionTransformResult<T>;

export type Permission = string | number | ObjectPermission;

export type PermissionTransformResult<T extends Permission> = T extends string
    ? string
    : T extends number
    ? number
    : ObjectPermission;

export type PermissionType = "octal" | "number" | "stat" | "symbolic" | "object";

export interface ObjectPermission {
    user?: PermissionTriple;
    group?: PermissionTriple;
    others?: PermissionTriple;
    special?: SpecialPermissionTriple;
}

export interface PermissionTriple {
    read?: boolean;
    write?: boolean;
    execute?: boolean;
}

export interface SpecialPermissionTriple {
    setuid?: boolean;
    setgid?: boolean;
    sticky?: boolean;
}
