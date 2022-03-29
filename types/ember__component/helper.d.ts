import EmberObject from '@ember/object';
import { Opaque } from 'ember/-private/type-utils';

type DefaultPositional = unknown[];
type DefaultNamed = Record<string, unknown>;
type DefaultReturn = unknown;

/**
 * The public shape of a helper.
 * @deprecated Do not use this directly. Instead, write a `Signature` with the
 *   "normal" signature shape: `Args: { Named: { ... }, Positional: [...] }`.
 */
export interface HelperSignature {
    NamedArgs?: DefaultNamed;
    PositionalArgs?: DefaultPositional;
    Return?: unknown;
}

type GetWithFallback<T, K, Fallback> = K extends keyof T ? T[K] : Fallback;
type ArgsFor<S> = GetWithFallback<S, 'Args', never>;

type PositionalArgs<S> = GetWithFallback<
    ArgsFor<S>,
    'Positional',
    GetWithFallback<S, 'PositionalArgs', DefaultPositional>
>;
type NamedArgs<S> = GetWithFallback<ArgsFor<S>, 'Named', GetWithFallback<S, 'NamedArgs', DefaultNamed>>;
type Return<S> = GetWithFallback<S, 'Return', unknown>;

/**
 * Ember Helpers are functions that can compute values, and are used in templates.
 * For example, this code calls a helper named `format-currency`:
 */
export default class Helper<S = unknown> extends EmberObject {
    /**
     * In many cases, the ceremony of a full `Ember.Helper` class is not required.
     * The `helper` method create pure-function helpers without instances. For
     * example:
     */
    static helper<P extends NonNullable<DefaultPositional>, N extends NonNullable<object>, R extends DefaultReturn>(
        helper: (positional: P, named: N) => R,
    ): Helper<{ Args: { Positional: P; Named: N }; Return: R }>;
    /**
     * Override this function when writing a class-based helper.
     */
    compute(positional: PositionalArgs<S>, named: NamedArgs<S>): Return<S>;
    /**
     * On a class-based helper, it may be useful to force a recomputation of that
     * helpers value. This is akin to `rerender` on a component.
     */
    recompute(): void;
}

// The generic here is for a *signature: a way to hang information for tools
// like Glint which can provide typey checking for component templates using
// information supplied via this generic. While it may appear useless on this
// class definition and extension, it is used by external tools and should not
// be removed.
// tslint:disable-next-line:no-unnecessary-generics
export default interface Helper<S> extends Opaque<S> {}

/**
 * The type of a function-based helper.
 *
 * @note This is *not* user-constructible: it is exported only so that the type
 *   returned by the `helper` function can be named (and indeed can be exported
 *   like `export default helper(...)` safely).
 */
// The generic here is for a *signature: a way to hang information for tools
// like Glint which can provide typey checking for component templates using
// information supplied via this generic. While it may appear useless on this
// class definition and extension, it is used by external tools and should not
// be removed.
// tslint:disable-next-line:no-unnecessary-generics
export interface FunctionBasedHelper<S> extends Opaque<S> {}

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
// This overload allows users to write types directly on the callback passed to
// the `helper` function and infer the resulting type correctly.
export function helper<
    P extends NonNullable<DefaultPositional>,
    N extends NonNullable<DefaultNamed>,
    R extends NonNullable<DefaultReturn>,
>(
    helperFn: (positional: P, named: N) => R,
): FunctionBasedHelper<{
    Args: {
        Positional: P;
        Named: N;
    };
    Return: R;
}>;

// This overload allows users to provide a `Signature` type explicitly at the
// helper definition site, e.g. `helper<Sig>((pos, named) => {...})`. **Note:**
// this overload must appear second, since TS' inference engine will not
// correctly infer the type of `S` here from the types on the supplied callback.
export function helper<S>(
    helperFn: (positional: PositionalArgs<S>, named: NamedArgs<S>) => Return<S>,
): FunctionBasedHelper<{
    Args: {
        Positional: PositionalArgs<S>;
        Named: NamedArgs<S>;
    };
    Return: Return<S>;
}>;

export {};
