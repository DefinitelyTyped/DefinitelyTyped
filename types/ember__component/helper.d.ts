import EmberObject from "@ember/object";
import { Opaque } from 'ember/-private/type-utils';

export interface HelperSignature {
    NamedArgs?: Record<string, unknown>;
    PositionalArgs?: unknown[];
    Return?: unknown;
}

/**
 * Ember Helpers are functions that can compute values, and are used in templates.
 * For example, this code calls a helper named `format-currency`:
 */
export default class Helper<S extends HelperSignature = HelperSignature> extends EmberObject {
    /**
     * In many cases, the ceremony of a full `Ember.Helper` class is not required.
     * The `helper` method create pure-function helpers without instances. For
     * example:
     */
    static helper<
        P extends HelperSignature['PositionalArgs'],
        N extends HelperSignature['NamedArgs'],
        R extends HelperSignature['Return']
    >(
        helper: (positional: P, named: N) => R
    ): Helper<{ PositionalArgs: P, NamedArgs: N, Return: R }>;
    /**
     * Override this function when writing a class-based helper.
     */
    compute(positional: S['PositionalArgs'], named: S['NamedArgs']): S['Return'];
    /**
     * On a class-based helper, it may be useful to force a recomputation of that
     * helpers value. This is akin to `rerender` on a component.
     */
    recompute(): void;
}

interface FunctionBasedHelper<S extends HelperSignature>
    extends Opaque<S> {}

/**
 * In many cases, the ceremony of a full `Helper` class is not required.
 * The `helper` method create pure-function helpers without instances. For
 * example:
 * ```app/helpers/format-currency.js
 * import { helper } from '@ember/component/helper';
 * export default helper(function(params, hash) {
 *   let cents = params[0];
 *   let currency = hash.currency;
 *   return `${currency}${cents * 0.01}`;
 * });
 * ```
 */
export function helper<
    P extends HelperSignature['PositionalArgs'],
    N extends HelperSignature['NamedArgs'],
    R extends HelperSignature['Return'],
>(
    helperFn: (positional: P, named: N) => R
): FunctionBasedHelper<{
    PositionalArgs: P,
    NamedArgs: N,
    Return: R
}>;

// We don't want `FunctionBasedHelper` exported, as it's not a "real" type
// (yet), just a way of representing the type relations correctly.
export {};
