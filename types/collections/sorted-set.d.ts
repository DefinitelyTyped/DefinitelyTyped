declare const SortedSet: internal.SortedSetStatic;

declare namespace SortedSet {
    type Iterator<T> = internal.Iterator<T>;
    type Node<T> = internal.Node<T>;
    type SortedSet<T> = internal.SortedSet<T>;
}

declare namespace internal {
    interface SortedSetStatic {
        <T>(
            values?: T[],
            equals?: (a: T, b: T) => boolean,
            compare?: (a: T, b: T) => number,
            getDefault?: any,
        ): SortedSet<T>;
        new<T>(
            values?: T[],
            equals?: (a: T, b: T) => boolean,
            compare?: (a: T, b: T) => number,
            getDefault?: any,
        ): SortedSet<T>;
    }

    // TODO: move somewhere else
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

    class Iterator<T> {
        constructor(set: SortedSet<T>, start?: T, end?: T);

        next(): { done: boolean; value: T | undefined };
    }

    class Node<T> {
        readonly value: T;
        readonly left: Node<T> | null;
        readonly right: Node<T> | null;
        readonly length: number;

        constructor(value: T);

        checkIntegrity(): number;
        getNext(): Node<T> | undefined;
        getPrevious(): Node<T> | undefined;
        log(
            charmap: {
                branchUp: string;
                branchDown: string;
                fromAbove: string;
                fromBelow: string;
                fromBoth: string;
                intersection: string;
                strafe: string;
                through: string;
            },
            logNode: (n: Node<T>, innerWrite: (line: string) => void, innerWriteAbove: (line: string) => void) => void,
            log: (line: string) => void,
            logAbove: (line: string) => void,
        ): void;
        reduce<U>(
            callback: (accumulator: U, currentValue: T, index: number, set: SortedSet<T>) => U,
            initialValue: U,
            index: number,
            thisArg: any,
            tree: SortedSet<T>,
            depth?: number,
        ): U;
        reduceRight<U>(
            callback: (accumulator: U, currentValue: T, index: number, set: SortedSet<T>) => U,
            initialValue: U,
            index: number,
            thisArg: any,
            tree: SortedSet<T>,
            depth?: number,
        ): U;
        summary(): string;
        touch(): void;
    }

    class SortedSet<T> extends AbstractSet {
        readonly length: number;

        constructor(values?: T[], equals?: (a: T, b: T) => boolean, compare?: (a: T, b: T) => number, getDefault?: any);
        constructClone(values?: T[]): SortedSet<T>;

        add(value: T): boolean;
        clear(): void;
        delete(value: T): boolean;

        find(value: T): Node<T> | undefined;
        findGreatest(): Node<T> | undefined;
        findGreatestLessThan(value: T): Node<T> | undefined;
        findGreatestLessThanOrEqual(value: T): Node<T> | undefined;
        findLeast(): Node<T> | undefined;
        findLeastGreaterThan(value: T): Node<T> | undefined;
        findLeastGreaterThanOrEqual(value: T): Node<T> | undefined;

        get(elt: T): T | undefined;
        has(elt: T): boolean;
        indexOf(value: T): number;

        max(): T | undefined;
        min(): T | undefined;
        one(): T | undefined;

        pop(): T | undefined;
        push(...values: T[]): void;

        shift(): T | undefined;
        unshift(...values: T[]): void;

        slice(start?: number, end?: number): T[];
        splice(start: number, length: number, ...values: T[]): T[];
        swap(start: number, length: number, ...values: T[]): T[];

        splay(value: T): void;
        splayIndex(index: number): boolean;

        reduce<U>(
            callback: (accumulator: U, currentValue: T, index: number, set: SortedSet<T>) => U,
            initialValue?: U,
            thisArg?: any,
        ): U;
        reduceRight<U>(
            callback: (accumulator: U, currentValue: T, index: number, set: SortedSet<T>) => U,
            initialValue?: U,
            thisArg?: any,
        ): U;

        iterate(): Iterator<T>;
    }
}

export = SortedSet;
