import { AnyFn } from "ember/-private/type-utils";

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
): void;

/**
 * Alias an old, deprecated method with its new counterpart.
 */
export function deprecateFunc<Func extends AnyFn>(
    message: string,
    options: DeprecationOptions,
    func: Func
): Func;
