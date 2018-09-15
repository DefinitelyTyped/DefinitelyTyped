import { Ember } from "ember";

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

export type KeysOfType<Base, Condition> = keyof Pick<Base, {
    [Key in keyof Base]: Base[Key] extends Condition ? Key : never
}[keyof Base]>;

export interface TypeLookup {
    string: string;
    number: number;
    boolean: boolean;
    regexp: RegExp;
    function: (...args: any[]) => any;
    array: any[];
    error: Error;
    filelist: FileList;
    class: typeof Ember.Object;
    instance: Ember.Object;
    date: Date;
    null: null;
    undefined: undefined;
}
