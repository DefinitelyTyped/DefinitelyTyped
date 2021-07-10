// tslint:disable-next-line:strict-export-declare-modifiers
interface DeprecationOptions {
  id: string;
  until: string;
  url?: string | undefined;
}

/**
 * Display a deprecation warning with the provided message and a stack trace
 * (Chrome and Firefox only).
 */
export function deprecate(
    message: string,
    test: boolean,
    options: DeprecationOptions
): any;

/**
 * Alias an old, deprecated method with its new counterpart.
 */
export function deprecateFunc<Func extends ((...args: any[]) => any)>(
    message: string,
    options: DeprecationOptions,
    func: Func
): Func;
