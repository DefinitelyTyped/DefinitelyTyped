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
