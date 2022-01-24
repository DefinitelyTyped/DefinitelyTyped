import Mixin from '@ember/object/mixin';
import ComputedProperty from '@ember/object/computed';

/**
 * Map type `T` to a plain object hash with the identity mapping.
 *
 * Discards any additional object identity like the ability to `new()` up the class.
 * The `new()` capability is added back later by merging `EmberClassConstructor<T>`
 *
 * Implementation is carefully chosen for the reasons described in
 * https://github.com/typed-ember/ember-typings/pull/29
 */
export type Objectify<T> = Readonly<T>;

export type ExtractPropertyNamesOfType<T, S> = {
    [K in keyof T]: T[K] extends S ? K : never;
}[keyof T];

export type Fix<T> = { [K in keyof T]: T[K] };

/**
 * Used to capture type information about a computed property, both
 * the type of its value and (if it differs) the type its setter expects
 * to receive.
 *
 * Note that this is intentionally a `class` and not a `type` or
 * `interface` so that we can sneak in private fields that capture
 * type info for the computed property without impacting the
 * user-visible type.
 */
declare class ComputedPropertyMarker<Get, Set = Get> {
    // Necessary in order to avoid losing type information
    //    see: https://github.com/typed-ember/ember-cli-typescript/issues/246#issuecomment-414812013
    private [GetType]: Get;
    private [SetType]: Set;
}

export type { ComputedPropertyMarker };

declare const GetType: unique symbol;
declare const SetType: unique symbol;

/**
 * Used to infer the type of ember classes of type `T`.
 *
 * Generally you would use `EmberClass.create()` instead of `new EmberClass()`.
 *
 * The single-arg constructor is required by the typescript compiler.
 * The multi-arg constructor is included for better ergonomics.
 *
 * Implementation is carefully chosen for the reasons described in
 * https://github.com/typed-ember/ember-typings/pull/29
 */
export type EmberClassConstructor<T> = (new (properties?: object) => T) & (new (...args: any[]) => T);

/**
 * Check that any arguments to `create()` match the type's properties.
 *
 * Accept any additional properties and add merge them into the instance.
 */
export type EmberInstanceArguments<T> = Partial<T> & {
    [key: string]: any;
};

/**
 * Accept any additional properties and add merge them into the prototype.
 */
export interface EmberClassArguments {
    [key: string]: any;
}

/**
 * Ember.Object.extend(...) accepts any number of mixins or literals.
 */
export type MixinOrLiteral<T, Base> = Mixin<T, Base> | T;

/**
 * Deconstructs computed properties into the types which would be returned by `.get()`.
 */
export type UnwrapComputedPropertyGetter<T> = T extends ComputedPropertyMarker<infer U, any> ? U : T;
export type UnwrapComputedPropertyGetters<T> = {
    [P in keyof T]: UnwrapComputedPropertyGetter<T[P]>;
};

export type UnwrapComputedPropertySetter<T> = T extends ComputedPropertyMarker<any, infer V> ? V : T;
export type UnwrapComputedPropertySetters<T> = {
    [P in keyof T]: UnwrapComputedPropertySetter<T[P]>;
};

export type ComputedPropertyGetterFunction<T> = (this: any, key: string) => T;
export type ComputedPropertySetterFunction<T> = (this: any, key: string, newVal: T, oldVal: T) => T;

export interface ComputedPropertyGetterObj<T> {
    get(this: any, key: string): T;
}

export interface ComputedPropertySetterObj<T> {
    set(this: any, key: string, value: T): T;
}
export type ComputedPropertyObj<Get, Set> =
    | ComputedPropertyGetterObj<Get>
    | ComputedPropertySetterObj<Set>
    | (ComputedPropertyGetterObj<Get> & ComputedPropertySetterObj<Set>);

export type ComputedPropertyGetter<T> = ComputedPropertyGetterFunction<T> | ComputedPropertyGetterObj<T>;
export type ComputedPropertySetter<T> = ComputedPropertySetterFunction<T> | ComputedPropertySetterObj<T>;

export type ComputedPropertyCallback<Get, Set = Get> = ComputedPropertyGetterFunction<Get> | ComputedPropertyObj<Get, Set>;

export type ObserverMethod<Target, Sender> =
    | keyof Target
    | ((this: Target, sender: Sender, key: string, value: any, rev: number) => void);

// This type looks weird, but is correct: from a list of "bottom" to "top", in
// type theory terms.
export type AnyFunction = (...args: never[]) => unknown;
