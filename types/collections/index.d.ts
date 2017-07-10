// Type definitions for collections v5.0.6
// Project: http://www.collectionsjs.com/
// Definitions by: Scarabe Dore <https://github.com/scarabedore>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'collections/sorted-set' {
    namespace internal {
        // TODO: These methods can be similar in others collection. One's should make some
        // class model.
        abstract class AbstractSet {
            union(...plus: any[]): any;
            intersection(...plus: any[]): any;
            difference(...plus: any[]): any;
            symmetricDifference(...plus: any[]): any;
            remove(...plus: any[]): any;
            contains(...plus: any[]): any;
            toggle(...plus: any[]): any;
            addEach(...plus: any[]): any;
            deleteEach(...plus: any[]): any;
            deleteAll(...plus: any[]): any;
            findValue(...plus: any[]): any;
            iterator(...plus: any[]): any;
            forEach(...plus: any[]): any;
            map(...plus: any[]): any;

            filter(...plus: any[]): any;
            group(...plus: any[]): any;
            some(...plus: any[]): any;
            every(...plus: any[]): any;
            any(...plus: any[]): any;
            all(...plus: any[]): any;
            only(...plus: any[]): any;
            sorted(...plus: any[]): any;
            reversed(...plus: any[]): any;
            join(...plus: any[]): any;
            sum(...plus: any[]): any;
            average(...plus: any[]): any;
            zip(...plus: any[]): any;
            enumerate(...plus: any[]): any;
            concat(...plus: any[]): any;
            flatten(...plus: any[]): any;
            toArray(...plus: any[]): any;
            toObject(...plus: any[]): any;
            toJSON(...plus: any[]): any;
            equals(...plus: any[]): any;
            clone(...plus: any[]): any;
            contentCompare(...plus: any[]): any;
            contentEquals(...plus: any[]): any;
            sortedSetLog(...plus: any[]): any;
            addRangeChangeListener(...plus: any[]): any;
            removeRangeChangeListener(...plus: any[]): any;
            dispatchRangeChange(...plus: any[]): any;
            addBeforeRangeChangeListener(...plus: any[]): any;
            removeBeforeRangeChangeListener(...plus: any[]): any;
            dispatchBeforeRangeChange(...plus: any[]): any;
            addOwnPropertyChangeListener(...plus: any[]): any;
            addBeforeOwnPropertyChangeListener(...plus: any[]): any;
            removeOwnPropertyChangeListener(...plus: any[]): any;
            removeBeforeOwnPropertyChangeListener(...plus: any[]): any;
            dispatchOwnPropertyChange(...plus: any[]): any;
            dispatchBeforeOwnPropertyChange(...plus: any[]): any;
            makePropertyObservable(...plus: any[]): any;
        }

        class Node<T> {
            reduce(cb: (result?: any, val?: any, key?: any, collection?: any) => any,
                   basis: any, index: number, thisp: any, tree: any, depth: number): any;
            touch(...plus: any[]): void;
            checkIntegrity(...plus: any[]): number;
            getNext(...plus: any[]): Node<T> | undefined;
            getPrevious(...plus: any[]): Node<T> | undefined;
            summary(...plus: any[]): string;
            log(charmap: any, logNode: any, log: any, logAbove: any): any;
        }

        class Iterator<T> {
            next(): {done: true, value: T | null | undefined};
        }

        export class SortedSet<T> extends AbstractSet {
            constructor(
                values?: T[],
                equals?:  (a: T, b: T) => boolean,
                compare?: (a: T, b: T) => number,
                getDefault?: any
            );
            constructClone(values?: T[]): SortedSet<T>;

            add(value: T): boolean;
            clear(): void;
            ['delete'](value: T): boolean;

            find(value: T): Node<T> | undefined;
            findGreatest(n?: Node<T> | undefined): Node<T> | undefined;
            findGreatestLessThan(value: T): Node<T> | undefined;
            findGreatestLessThanOrEqual(value: T): Node<T> | undefined;
            findLeast(n?: Node<T> | undefined): Node<T> | undefined;
            findLeastGreaterThan(value: T): Node<T> | undefined;
            findLeastGreaterThanOrEqual(value: T): Node<T> | undefined;
            max(n?: Node<T>): T | undefined;
            min(n?: Node<T>): T | undefined;
            one(): T | undefined;

            get(elt: T): T | undefined;
            has(elt: T): boolean;
            indexOf(value: T): number;

            pop(): T | undefined;
            push(...rest: T[]): void;

            shift(): T | undefined;
            unshift(...rest: T[]): void;

            slice(start?: number, end?: number): T[];
            splice(start: Node<T>, length: number, ...values: T[]): T[];
            swap(start: number, length: number, values?: T[]): T[];

            splay(value: T): void;
            splayIndex(index: number): boolean;

            reduce(callback: (result?: any, val?: any, key?: any, collection?: any) => any,
                   basis?: any, thisp?: any): any;
            reduceRight(
                callback: (result?: any, val?: any, key?: any, collection?: any) => any,
                basis?: any, thisp?: any
            ): any;

            iterate(start: number, stop: number): Iterator<T>;
        }
    }

    export = internal.SortedSet;
}
