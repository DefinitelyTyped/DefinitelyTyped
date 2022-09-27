// Type definitions for hifo 1.0
// Project: https://github.com/derhuerst/hifo
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = hifo;

/**
 * Remembers the highest/lowest values in a data set of any size. Useful if you have a large number of values,
 * but are only interested in the `n` highest (or lowest) ones.
 *
 * @example
 * import hifo = require('hifo');
 *
 * interface Person {
 *     name: string;
 *     age: number;
 * }
 *
 * const people: Person[] = [
 *   { name: 'Alice', age: 23 },
 *   { name: 'Eve', age: 45 },
 *   { name: 'Jane', age: 19 },
 *   { name: 'Bob', age: 30 },
 *   { name: 'John', age: 60 },
 *   // thousands of others
 * ];
 *
 * const oldest = hifo<Person>(hifo.highest('age'), 3);
 * for (const person of people) {
 *   oldest.add(person);
 * }
 *
 * console.log(oldest.data);
 * // =>
 * // [
 * //   { name: 'John', age: 60 },
 * //   { name: 'Eve', age: 45 },
 * //   { name: 'Bob', age: 30 }
 * // ]
 */
declare function hifo<T>(compareFn: hifo.CompareFn<T>, size?: number): hifo.Hifo<T>;

declare namespace hifo {
    function lowest<
        TKeyPrimary extends ObjectKey,
        TObject extends ObjectWithNumericValue<TKeyPrimary | TKeySecondary>,
        TKeySecondary extends ObjectKey = never,
        // tslint:disable-next-line no-unnecessary-generics
    >(primary: TKeyPrimary, secondary?: TKeySecondary): CompareFn<TObject>;
    function lowest(): CompareFn<number>;
    function highest<
        TKeyPrimary extends ObjectKey,
        TObject extends ObjectWithNumericValue<TKeyPrimary | TKeySecondary>,
        TKeySecondary extends ObjectKey = never,
        // tslint:disable-next-line no-unnecessary-generics
    >(primary: TKeyPrimary, secondary?: TKeySecondary): CompareFn<TObject>;
    function highest(): CompareFn<number>;
    const Hifo: Hifo<unknown>;

    interface Hifo<T> {
        readonly size: number;
        readonly data: readonly T[];
        readonly sort: CompareFn<T>;

        init(sort: CompareFn<T>, size?: number): this;
        add(entry: T): this;
        insert(entry: T): number;
        reset(): this;
    }

    type CompareFn<T> = (left: T, right: T) => number;

    type ObjectKey = string | number | symbol;
    type ObjectWithNumericValue<TKey extends ObjectKey> = {
        [key in TKey]: number;
    };
}
