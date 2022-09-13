import EmberObject from '@ember/object';
import { Opaque } from 'ember/-private/type-utils';

// --- Type utilities for signatures --- //
// Type-only "symbol" to use with `EmptyObject` below, so that it is *not*
// equivalent to an empty interface.
declare const Empty: unique symbol;

/**
 * This provides us a way to have a "fallback" which represents an empty object,
 * without the downsides of how TS treats `{}`. Specifically: this will
 * correctly leverage "excess property checking" so that, given a component
 * which has no named args, if someone invokes it with any named args, they will
 * get a type error.
 *
 * @internal This is exported so declaration emit works (if it were not emitted,
 *   declarations which fall back to it would not work). It is *not* intended for
 *   public usage, and the specific mechanics it uses may change at any time.
 *   The location of this export *is* part of the public API, because moving it
 *   will break existing declarations, but is not legal for end users to import
 *   themselves, so ***DO NOT RELY ON IT***.
 */
export interface EmptyObject {
    [Empty]?: true;
}

type DefaultPositional = unknown[];
type DefaultNamed = EmptyObject;

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

type GetOrElse<Obj, K, Fallback> = K extends keyof Obj ? Obj[K] : Fallback;

/** Given a signature `S`, get back the `Args` type. */
type ArgsFor<S> = 'Args' extends keyof S
    ? {
          Named: GetOrElse<S['Args'], 'Named', DefaultNamed>;
          Positional: GetOrElse<S['Args'], 'Positional', []>;
      }
    : { Named: DefaultNamed; Positional: [] };

interface LegacyArgsFor<T> {
    Named: GetOrElse<T, 'NamedArgs', DefaultNamed>;
    Positional: GetOrElse<T, 'PositionalArgs', DefaultPositional>;
}

// This type allows us to present a slightly-less-obtuse error message
// when attempting to resolve the signature of a helper that doesn't have
// one declared from within a tool like Glint.
declare const BadType: unique symbol;
interface BadType<Message> {
    [BadType]: Message;
}

interface MissingSignatureArgs {
    Named: BadType<'This helper is missing a signature'>;
    Positional: unknown[];
}

/**
 * Given any allowed shorthand form of a signature, desugars it to its full
 * expanded type.
 *
 * @internal This is only exported so we can avoid duplicating it in
 *   [Glint](https://github.com/typed-ember/glint) or other such tooling. It is
 *   *not* intended for public usage, and the specific mechanics it uses may
 *   change at any time. Although the signature produced by is part of Glimmer's
 *   public API the existence and mechanics of this specific symbol are *not*,
 *   so ***DO NOT RELY ON IT***.
 */
// This is similar but not identical to the `ExpandSignature` type used in the
// Glimmer Component API: it uses the same basic mechanics, but does not have
// an identical signature because we had not yet normalized the `Signature` when
// we designed the first pass of this. In the future, we will be able to make
// all `ExpandSignature` types fully general to work with *any* invokable. But
// "future" here probably means Ember v5. :sobbing:
export interface ExpandSignature<T> {
    Args: unknown extends T // Is this the default (i.e. unspecified) signature?
        ? MissingSignatureArgs // Then return our special "missing signature" type
        : keyof T extends 'Args' | 'Return' // Is this a `Signature`?
        ? ArgsFor<T> // Then use `Signature` args
        : LegacyArgsFor<T>; // Otherwise fall back to classic `Args`.
    Return: 'Return' extends keyof T ? T['Return'] : unknown;
}

// The `unknown extends S` checks on both of these are here to preserve backward
// compatibility with the existing non-`Signature` definition. When migrating
// into Ember or otherwise making a breaking change, we can drop the "default"
// in favor of just using `ExpandSignature`.
type NamedArgs<S> = unknown extends S ? Record<string, unknown> : ExpandSignature<S>['Args']['Named'];
type PositionalArgs<S> = unknown extends S ? unknown[] : ExpandSignature<S>['Args']['Positional'];

type Return<S> = GetOrElse<S, 'Return', unknown>;

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
    static helper<P extends DefaultPositional, N = EmptyObject, R = unknown>(
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

// This type exists to provide a non-user-constructible, non-subclassable
// type representing the conceptual "instance type" of a function helper.
// The abstract field of type `never` presents subclassing in userspace of
// the value returned from `helper()`. By extending `Helper<S>`, any
// augmentations of the `Helper` type performed by tools like Glint will
// also apply to function-based helpers as well.
export abstract class FunctionBasedHelperInstance<S> extends Helper<S> {
    protected abstract __concrete__: never;
}

/**
 * The type of a function-based helper.
 *
 * @note This is *not* user-constructible: it is exported only so that the type
 *   returned by the `helper` function can be named (and indeed can be exported
 *   like `export default helper(...)` safely).
 */
// Making `FunctionBasedHelper` a bare constructor type allows for type
// parameters to be preserved when `helper()` is passed a generic function.
// By making it `abstract` and impossible to subclass (see above), we prevent
// users from attempting to instantiate a return value from `helper()`.
export type FunctionBasedHelper<S> = abstract new () => FunctionBasedHelperInstance<S>;

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
export function helper<P extends DefaultPositional, N = EmptyObject, R = unknown>(
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
