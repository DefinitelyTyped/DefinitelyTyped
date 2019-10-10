// Type definitions for CrossFilter
// Project: https://github.com/square/crossfilter
// Definitions by: Schmulik Raskin <https://github.com/schmuli>, Izaak Baker <https://github.com/iebaker>, Einar Norðfjörð <https://github.com/nordfjord>, Tijmen Wildervanck <https://github.com/TijmenW>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace CrossFilter {

    export interface Selector<T> {
        (value: T): any;
    }

    export interface CrossFilterStatic {
        <T>(data: T[]): CrossFilter<T>;
        version: string;
        permute<T>(array: T[], index: number[]): T[];
        bisect: {
            <T>(array: T[], value: T, lo: number, hi: number): number;
            by<T,U>(accessor: (x: T)=> U): Bisector<T,U>;
        }
        heap: {
            <T>(array: T[], lo: number, hi: number): T[];

            by<T>(value: Selector<T>): Heap<T>;
        }
        heapselect: {
            <T>(array: T[], lo: number, hi: number, k: number): T[];
            by<T>(value: Selector<T>): HeapSelect<T>;
        }
        insertionsort: {
            <T>(array: T[], lo: number, hi: number): T[];
            by<T>(value: Selector<T>): Sort<T>;
        }
        quicksort: {
            <T>(array: T[], lo: number, hi: number): T[];
            by<T>(value: Selector<T>): Sort<T>;
        }
    }

    export interface Bisection<T,U> {
        (array: T[], value: U, lo: number, hi: number): number;
    }

    export interface Bisector<T,U> extends Bisection<T,U> {
        left: Bisection<T,U>
        right: Bisection<T,U>
    }

    export interface Heap<T> {
        (array: T[], lo: number, hi: number): T[];
        sort(array: T[], lo: number, hi: number): T[];
    }

    export interface HeapSelect<T> {
        (array: T[], lo: number, hi: number, k: number): T[];
    }

    export interface Sort<T> {
        (array: T[], lo: number, hi: number): T[];
    }

    export interface GroupAll<T, TValue> {
        reduce<TValue>(add: (p: TValue, v: T) => TValue, remove: (p: TValue, v: T) => TValue, initial: () => TValue): GroupAll<T, TValue>;
        reduceCount(): GroupAll<T, TValue>;
        reduceSum(value: Selector<T>): GroupAll<T, TValue>;
        dispose(): GroupAll<T, TValue>;
        value(): TValue;
    }

    export interface Grouping<TKey, TValue> {
        key: TKey;
        value: TValue;
    }

    export interface Group<T, TKey, TValue> {
        top(k: number): Grouping<TKey, TValue>[];
        all(): ReadonlyArray<Grouping<TKey, TValue>>;
        reduce<TGroup>(add: (p: TGroup, v: T) => TGroup, remove: (p: TGroup, v: T) => TGroup, initial: () => TGroup): Group<T, TKey, TGroup>;
        reduceCount(): Group<T, TKey, number>;
        reduceSum<TGroup>(value: (data: T) => TGroup): Group<T, TKey, TGroup>;
        order(value?: Selector<TValue>): Group<T, TKey, TValue>;
        orderNatural(): Group<T, TKey, TValue>;
        size(): number;
        dispose(): Group<T, TKey, TValue>;
    }

    export interface CrossFilter<T> {
        add(records: T[]): CrossFilter<T>;
        remove(): CrossFilter<T>;
        size(): number;
        GroupAll(): GroupAll<T, T>;
        groupAll<TValue>(): GroupAll<T, TValue>;
        dimension<TDimension>(value: (data: T) => TDimension): Dimension<T, TDimension>;
    }

    export interface Dimension<T, TDimension> {
        filter(value: TDimension[]): Dimension<T, TDimension>;
        filter(value: TDimension): Dimension<T, TDimension>;
        filter(value: Selector<TDimension>): Dimension<T, TDimension>;
        filterExact(value: TDimension): Dimension<T, TDimension>;
        filterRange(value: TDimension[]): Dimension<T, TDimension>;
        filterFunction(value: Selector<TDimension>): Dimension<T, TDimension>;
        filterAll(): Dimension<T, TDimension>;
        top(k: number): T[];
        bottom(k: number): T[];
        dispose(): void;
		group(): Group<T, TDimension, TDimension>;
        group<TGroup>(groupValue: (data: TDimension) => TGroup): Group<T, TDimension, TGroup>;
        groupAll(): GroupAll<T, T>;
        groupAll<TValue>(): GroupAll<T, TValue>;
    }
}

declare module "crossfilter" {
    var crossfilter: CrossFilter.CrossFilterStatic;
    export = crossfilter;    	
}

