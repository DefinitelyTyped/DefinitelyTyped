/* The raw function returns an object as-is instead of passing it through processes that will make the object immutable.
 * See: https://github.com/lorenwest/node-config/wiki/Special-features-for-JavaScript-configuration-files#using-promises-processstdout-and-other-objects-in-javascript-config-files
 */

export class RawConfig<T> {
    constructor(rawObj: T);
    resolve(): T;
}

export function raw<T>(obj: T): RawConfig<T>;
