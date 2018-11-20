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
    [K in keyof T]: T[K] extends S ? K : never
}[keyof T];

export type Fix<T> = { [K in keyof T]: T[K] };

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
export type EmberClassConstructor<T> = (new (properties?: object) => T) &
    (new (...args: any[]) => T);

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
export type UnwrapComputedPropertyGetter<T> = T extends ComputedProperty<
    infer U,
    any
>
    ? U
    : T;
export type UnwrapComputedPropertyGetters<T> = {
    [P in keyof T]: UnwrapComputedPropertyGetter<T[P]>
};

export type UnwrapComputedPropertySetter<T> = T extends ComputedProperty<
    any,
    infer V
>
    ? V
    : T;
export type UnwrapComputedPropertySetters<T> = {
    [P in keyof T]: UnwrapComputedPropertySetter<T[P]>
};

export type ComputedPropertyGetterFunction<T> = (this: any, key: string) => T;
export type ComputedPropertySetterFunction<T> = (
    this: any,
    key: string,
    newVal: T,
    oldVal: T
) => T;

export interface ComputedPropertyGetterObj<T> {
    get(this: any, key: string): T;
}

export interface ComputedPropertySetterObj<T> {
    set(this: any, key: string, value: T): T;
}
export type ComputedPropertyObj<T> =
    | ComputedPropertyGetterObj<T>
    | ComputedPropertySetterObj<T>
    | (ComputedPropertyGetterObj<T> & ComputedPropertySetterObj<T>);

export type ComputedPropertyGetter<T> =
    | ComputedPropertyGetterFunction<T>
    | ComputedPropertyGetterObj<T>;
export type ComputedPropertySetter<T> =
    | ComputedPropertySetterFunction<T>
    | ComputedPropertySetterObj<T>;

export type ComputedPropertyCallback<T> =
    | ComputedPropertyGetterFunction<T>
    | ComputedPropertyObj<T>;

export type ObserverMethod<Target, Sender> =
    | (keyof Target)
    | ((
          this: Target,
          sender: Sender,
          key: string,
          value: any,
          rev: number
      ) => void);
