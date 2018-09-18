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
