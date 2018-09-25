/**
 * Display a deprecation warning with the provided message and a stack trace
 * (Chrome and Firefox only).
 */
export function deprecate(
    message: string,
    test: boolean,
    options: { id: string; until: string }
): any;

/**
 * @deprecated Missing deprecation options: https://emberjs.com/deprecations/v2.x/#toc_ember-debug-function-options
 */
export function deprecate(
    message: string,
    test: boolean,
    options?: { id?: string; until?: string }
): any;

/**
 * @deprecated Missing deprecation options: https://emberjs.com/deprecations/v2.x/#toc_ember-debug-function-options
 */
export function deprecateFunc<Func extends ((...args: any[]) => any)>(
    message: string,
    func: Func
): Func;

/**
 * Alias an old, deprecated method with its new counterpart.
 */
export function deprecateFunc<Func extends ((...args: any[]) => any)>(
    message: string,
    options: { id: string; until: string },
    func: Func
): Func;
