// Type definitions for mori 0.3
// Project: https://github.com/swannodette/mori
// Definitions by: Toby Ho <https://github.com/airportyh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module "mori" {
    // Marker interfaces for the basic collection types. The
    // special properties such as $vector are $list are
    // totally made up and are not really there. They are only
    // created to enforce type checking of code using this library
    // so as to not allow anything value to satisfy these interfaces
    // as would be the case if they were left empty.
    export interface Vector<T> extends Associative<number, T> {
        $vector: T;
    }

    export interface List<T> extends Seq<T> {
        $list: T;
    }

    export interface Seq<T> extends Collection<T> {
        $seq: T;
    }

    export interface HashMap<K, T> extends Associative<K, T> {
        $hashMap: [K, T];
    }

    export interface Set<T> extends Collection<T> {
        $set: T;
    }

    export interface Range extends Seq<number> {
        $range: true;
    }

    export interface Queue<T> extends Collection<T> {
        $queue: T;
    }

    export interface Associative<K, T> extends Collection<T> {
        $associative: [K, T];
    }

    export interface Collection<T> {
        $collection: T;
    }

    // Fundamentals
    export function equals(one: any, other: any): boolean;
    export function hash<T>(collection: T): number;

    // Type Predicates
    export function isList<T>(thing: any): thing is List<T>;
    export function isSeq<T>(thing: any): thing is Seq<T>;
    export function isVector<T>(thing: any): thing is Vector<T>;
    export function isMap<K, T>(thing: any): thing is HashMap<K, T>;
    export function isSet<T>(thing: any): thing is Set<T>;
    export function isCollection<T>(thing: any): thing is Collection<T>;
    export function isSequential<T>(thing: any): boolean;
    export function isAssociative<K, T>(thing: any): thing is Associative<K, T>;
    export function isCounted<T>(coll: Collection<T>): boolean;
    export function isIndexed<T>(coll: Collection<T>): boolean;
    export function isReduceable<T>(coll: Collection<T>): boolean;
    export function isSeqable<T>(coll: Collection<T>): boolean;
    export function isReversible<T>(coll: Collection<T>): boolean;

    // Collections Constructors

    export function list<T>(...args: T[]): List<T>;
    export function list(...args: any[]): List<any>;

    export function vector<T>(...args: T[]): Vector<T>;
    export function vector(...args: any[]): Vector<any>;

    export function hashMap<K, T>(): HashMap<K, T>;
    export function hashMap<K, T>(key: K, value: T): HashMap<K, T>;
    export function hashMap<K, T>(key1: K, value1: T, key2: string, value2: T): HashMap<K, T>;
    export function hashMap<K, T>(
        key1: K, value1: T,
        key2: K, value2: T,
        key3: K, value3: T): HashMap<K, T>;
    export function hashMap<K, T>(
        key1: K, value1: T,
        key2: K, value2: T,
        key3: K, value3: T,
        key4: K, value4: T): HashMap<K, T>;
    export function hashMap(...args: any[]): HashMap<any, any>;

    export function set<T>(arr: T[]): Set<T>;
    export function set<T>(str: string): Set<T>;
    export function set<T>(coll: Collection<T>): Set<T>;

    export function sortedSet<T>(...args: T[]): Set<T>;

    export function range(start?: number, end?: number, step?: number): Range;

    export function queue<T>(...args: T[]): Queue<T>;

    // Collection Operations

    export function conj<T, C extends Collection<T>>(coll: C, arg: T, ...moreArgs: T[]): C;
    export function conj<C extends Collection<any>>(coll: C, ...args: any[]): C;

    // Known problem: T is erased and is ignored in the type constraint
    export function into<T, C1 extends Collection<T>, C2 extends Collection<T>>
    (coll1: C1, coll2: C2): C1;

    export function assoc<K, T, A extends Associative<K, T>>(coll: A, key: K, value: T): A;
    export function assoc<K, T, A extends Associative<K, T>>(
        coll: A,
        key1: K, value1: T,
        key2: K, value2: T
        ): A;
    export function assoc<K, T, A extends Associative<K, T>>(
        coll: A,
        key1: K, value1: T,
        key2: K, value2: T,
        key3: K, value3: T
        ): A;

    export function dissoc<K, T, A extends Associative<K, T>>
        (coll: A, key: K, ...moreKeys: K[]): A;

    export function distinct<T, C extends Collection<T>>(coll: C): C;

    export function empty<T, C extends Collection<T>>(coll: C): C;

    export function get<K, T, >(
        coll: Associative<K, T>, key: K): T;
    export function get<K, T>(
        coll: Associative<K, T>, key: K, valueIfNotFound?: T): T;
    export function get<K, T, D>(
        coll: Associative<K, T>, key: K, valueIfNotFound?: D): T | D;

    export function getIn<K, T>(
        coll: Associative<K, T>, keys: K[], valueIfNotFound?: T): T;
    export function getIn<K, T, D>(
        coll: Associative<K, T>, keys: K[], valueIfNotFound?: D): T | D;

    export function hasKey<K, T, A extends Associative<K, T>>(coll: A, key: K): boolean;
    export function hasKey<T, C extends Collection<T>>(coll: C, val: T): boolean;

    export function find<K, T, A extends Associative<K, T>>(coll: A, key: K): Vector<T> | null;

    export function nth<K, T, A extends Associative<K, T>>(coll: A, index: K): T;

    export function last<T>(coll: Collection<T>): T;
    export function last<T>(arr: T[]): T;
    export function last(str: string): string;

    export function assocIn<A extends Associative<any, any>>
        (coll: A, keys: any[], val: any): A;

    export function updateIn<T, A extends Associative<any, any>>
        (coll: A, keys: any[], fn: (val: T) => T): A;

    export function count<T, C extends Collection<T>>(coll: T): number;

    export function isEmpty<T, C extends Collection<T>>(coll: T): boolean;

    export function peek<T, C extends Collection<T>>(coll: T): T;

    export function pop<T, C extends Collection<T>>(coll: T): C;

    export function zipmap<K, T>
        (coll1: Collection<K>| K[], coll2: Collection<T> | T[]): HashMap<K, T>;

    export function reverse<T, C extends Collection<T>>(coll: T): C;

    // Vector Operations
    export function subvec<T>(vector: Vector<T>, start: number, end?: number): Vector<T>;

    // HashMap Operations
    export function keys<K, T>(hashMap: HashMap<K, T>): Seq<K>;

    export function vals<K, T>(hashMap: HashMap<K, T>): Seq<T>;

    export function merge<K, T>
        (hashMap1: HashMap<K, T>, hashMap2: HashMap<K, T>,
            ...moreHashMaps: Array<HashMap<K, T>>): HashMap<K, T>;

    // Set Operations
    export function disj<T>(set: Set<T>, item: T): Set<T>;

    export function union<T>
        (set1: Set<T>, set2: Set<T>, ...moreSets: Array<Set<T>>): Set<T>;

    export function intersection<T>
        (set1: Set<T>, set2: Set<T>, ...moreSets: Array<Set<T>>): Set<T>;

    export function difference<T>
        (set1: Set<T>, set2: Set<T>, ...moreSets: Array<Set<T>>): Set<T>;

    export function isSubset<T>
        (set1: Set<T>, set2: Set<T>): boolean;

    export function isSuperset<T>
        (set1: Set<T>, set2: Set<T>): boolean;

    // Sequence Operations
    export function first<T, C extends Collection<T>>(coll: C): T;
    export function first<T>(arr: T[]): T;
    export function first(str: string): string;

    export function rest<T, C extends Collection<T>>(coll: C): C;
    export function rest<T>(arr: T[]): T[];
    export function rest(str: string): string;

    export function seq<T, C extends Collection<T>>
        (coll: C): Seq<T>;
    export function seq<T>
        (arr: T[]): Seq<T>;
    export function seq(str: string): Seq<string>;

    export function cons<T, C extends Collection<T>>
        (val: T, coll: C): C;

    export function concat<T>
        (coll1: Collection<T> | T[], coll2: Collection<T> | T[],
            ...moreColls: Array<Collection<T> | T[]>): Seq<T>;
    export function concat
        (coll1: Collection<string> | string[] | string, coll2: Collection<string> | string[] | string,
            ...moreColls: Array<Collection<string> | string[] | string>): Seq<string>;

    export function flatten<T, C extends Collection<any>, S extends Seq<T>>(coll: C): S;

    export function intoArray<T>(coll: Collection<T>): T[];

    export function each<T, C extends Collection<T>>(coll: C, fn: (val: T) => void): void;

    export function map<T, U, C extends Collection<T>>
        (fn: (val: T, ...morVals: T[]) => U, coll: Collection<T> | T[],
            ...moreColls: Array<Collection<T> | T[]>): Seq<U>;

    export function mapcat<
        T, U, S extends Seq<T>, C extends Collection<U>, S2 extends Seq<U>>
        (fn: (val1: T, val2: T) => C,
        seq: S, ...moreSeqs: S[]
        ): S2;

    export function filter<T, C extends Collection<T>>(pred: (val: T) => boolean, coll: C): C;
    export function filter<T>(pred: (val: T) => boolean, arr: T[]): Seq<T>;
    export function filter(pred: (chr: string) => boolean, str: string): Seq<string>;

    export function remove<T, C extends Collection<T>>(pred: (val: T) => boolean, coll: C): C;
    export function remove<T>(pred: (val: T) => boolean, arr: T[]): Seq<T>;
    export function remove(pred: (chr: string) => boolean, str: string): Seq<string>;

    export function reduce<T, C extends Collection<T>, R>
        (acc: (curr: R, val: T) => R, init: R, seq: C): R;
    export function reduce<T, C extends Collection<T>, R>
        (acc: (curr: R, val: T) => R, seq: C): R;

    export function reduceKV<K, T, R>
        (acc: (curr: R, key: K, val: T) => R, init: R, map: Associative<K, T>): R;

    export function take<T, S extends Seq<T>>
        (n: number, seq: S): S;

    export function takeWhile<T, C extends Collection<T>>
        (pred: (val: T) => boolean, coll: C): C;
    export function takeWhile<T>
        (pred: (val: T) => boolean, arr: T[]): Seq<T>;
    export function takeWhile
        (pred: (val: string) => boolean, str: string): Seq<string>;

    export function drop<T, C extends Collection<T>>
        (n: number, coll: C): C;
    export function drop<T>
        (n: number, arr: T[]): Seq<T>;
    export function drop
        (n: number, str: string): Seq<string>;

    export function dropWhile<T, C extends Collection<T>>
        (pred: (val: T) => boolean, coll: C): C;
    export function dropWhile<T>
        (pred: (val: T) => boolean, arr: T[]): Seq<T>;
    export function dropWhile
        (pred: (val: string) => boolean, str: string): Seq<string>;

    export function some<T, C extends Collection<T>>
        (pred: (val: T) => T, coll: C): T;
    export function some<T>
        (pred: (val: T) => T, arr: T[]): Seq<T>;
    export function some
        (pred: (val: string) => string | null | undefined | boolean, str: string): Seq<string>;

    export function every<T, C extends Collection<T>>
        (pred: (val: T) => boolean, seq: C): boolean;
    export function every<T>
        (pred: (val: T) => boolean, arr: T[]): boolean;
    export function every
        (pred: (val: string) => boolean, str: string): boolean;

    export function sort<T, C extends Collection<T>>
        (coll: C): C;
    export function sort<T>
        (arr: T[]): Seq<T>;
    export function sort
        (str: string): Seq<string>;
    export function sort<T, C extends Collection<T>>
        (cmp: (val1: T, val2: T) => number, coll: C): C;
    export function sort<T>
        (cmp: (val1: T, val2: T) => number, arr: T[]): Seq<T>;
    export function sort
        (cmp: (val1: string, val2: string) => number, str: string): Seq<string>;

    export function sortBy<T, K, C extends Collection<T>>
        (keyFn: (val: T) => K, coll: C): C;
    export function sortBy<T, K>
        (keyFn: (val: T) => K, arr: T[]): Seq<T>;
    export function sortBy<K>
        (keyFn: (val: string) => K, str: string): Seq<string>;
    export function sortBy<T, K, C extends Collection<T>>
        (keyFn: (val: T) => K, cmp: (val1: K, val2: K) => number, coll: C): C;
    export function sortBy<T, K>
        (keyFn: (val: T) => K, cmp: (val1: K, val2: K) => number, arr: T[]): Seq<T>;
    export function sortBy<K>
        (keyFn: (val: string) => K, cmp: (val1: K, val2: K) => number, str: string): Seq<string>;

    export function interpose<T, C extends Collection<T>>
        (val: T, coll: C): C;
    export function interpose<T>
        (val: T, arr: T[]): Seq<T>;
    export function interpose
        (val: string, str: string): Seq<string>;
    export function interpose
        (val: any, str: any): Seq<any>;

    export function interleave<T, C extends Collection<T>>
        (coll1: C, coll2: C, ...moreColls: C[]): C;
    export function interleave
        (seq1: Collection<any> | any[] | string, seq2: Seq<any> | any[] | string,
            ...moreSeqs: Array<Collection<any> | any[] | string>): Collection<any>;

    export function iterate<T, C extends Collection<T>>
        (fn: (val: T) => T, init: T): C;

    export function repeat<T, C extends Collection<T>>
        (n: number, val: T): C;
    export function repeat<T>
        (val: T): Seq<T>;

    export function repeatedly<T, C extends Collection<T>>
        (fn: () => T): C;
    export function repeatedly<T, C extends Collection<T>>
        (n: number, fn: () => T): C;

    export function partition<T>
        (n: number, coll: Collection<T>): Seq<Seq<T>>;
    export function partition<T>
        (n: number, arr: T[]): Seq<Seq<T>>;
    export function partition
        (n: number, str: string): Seq<Seq<string>>;
    export function partition<T>
        (n: number, step: number, coll: Collection<T>): Seq<Seq<T>>;
    export function partition<T>
        (n: number, step: number, arr: T[]): Seq<Seq<T>>;
    export function partition
        (n: number, step: number, str: string): Seq<Seq<string>>;
    export function partition<T>
        (n: number, step: number, pad: T, coll: Collection<T>): Seq<Seq<T>>;
    export function partition<T>
        (n: number, step: number, pad: T, arr: T[]): Seq<Seq<T>>;
    export function partition
        (n: number, step: number, pad: string, str: string): Seq<Seq<string>>;

    export function partitionBy<T, K>
        (fn: (val: T) => K, coll: Collection<T>): Seq<Seq<T>>;
    export function partitionBy<T, K>
        (fn: (val: T) => K, arr: T[]): Seq<Seq<T>>;
    export function partitionBy<K>
        (fn: (val: string) => K, str: string): Seq<Seq<string>>;

    export function groupBy<T, K>
        (fn: (val: T) => K, coll: Collection<T>): HashMap<K, T>;
    export function groupBy<T, K>
        (fn: (val: T) => K, arr: T[]): HashMap<K, T>;
    export function groupBy<K>
        (fn: (val: string) => K, str: string): HashMap<K, string>;

    // Helpers

    export function primSeq<T>
        (coll: Collection<T>, index?: number): Seq<T>;
    export function primSeq<T>
        (arr: T[], index?: number): Seq<T>;
    export function primSeq
        (str: string, index?: number): Seq<string>;
    export function primSeq
        (args: { [index: number]: any; length: number; }, index?: number): Seq<any>;

    export function identity<T>(x: T): T;

    export function constantly<T>(x: T): () => T;

    export function inc(n: number): number;

    export function dec(n: number): number;

    export function sum(a: number, b: number): number;

    export function isEven(n: number): boolean;

    export function isOdd(n: number): boolean;

    export function comp<T, U, V>
        (f: (val: U) => V, g: (val: T) => U): (val: T) => V;

    export function juxt<T, U>
        (f0: (val: Collection<T> | T[]) => U,
        f1: (val: Collection<T> | T[]) => U,
        ...moreFs: Array<(val: Collection<T> | T[]) => U>):
        (coll: Collection<T> | T[]) => U[];
    export function juxt<U>
        (f0: (val: string) => U,
        f1: (val: string) => U,
        ...moreFs: Array<(val: string) => U>):
        (str: Collection<string> | string[] | string) => U[];

    export function knit<T, U>
        (f0: (val: Collection<T>) => U, f1: (val: Collection<T>) => U, ...moreFs: Array<(val: Collection<T>) => U>):
        (coll: Collection<Collection<T>>) => U[];
    export function knit<U>
        (f0: (val: string) => U, f1: (val: string) => U, ...moreFs: Array<(val: string) => U>):
        (str: Collection<string> | string[] | string) => U[];

    export function pipeline<T, U>
        (x: T, f: (val: T) => U): U;
    export function pipeline<T, U1, U2>
        (x: T, f1: (val: T) => U1, f2: (val: U1) => U2): U2;
    export function pipeline<T, U1, U2, U3>
        (x: T, f1: (val: T) => U1, f2: (val: U1) => U2,
        f3: (val: U2) => U3
        ): U3;
    export function pipeline<T, U1, U2, U3, U4>
        (x: T, f1: (val: T) => U1, f2: (val: U1) => U2,
        f3: (val: U2) => U3, f4: (val: U3) => U4
        ): U4;
    export function pipeline
        (x: any, ...fns: Array<(val: any) => any>): any;

    export function partial<T, U>
        (f: (val: T) => U, arg: T):
        () => U;
    export function partial<T, A, U>
        (f: (val: T, arg: A) => U, arg: T):
        (arg: A) => U;
    export function partial<T, A1, A2, U>
        (f: (val: T, arg1: A1, arg2: A2) => U, arg: T):
        (arg1: A1, arg2: A2) => U;
    export function partial<T, A1, A2, A3, U>
        (f: (val: T, arg1: A1, arg2: A2, arg3: A3) => U, arg: T):
        (arg1: A1, arg2: A2, arg3: A3) => U;
    export function partial<T, U>
        (f: (val: T, ...moreArgs: any[]) => U, arg: T):
        (args: any[]) => U;

    export function curry<T, U>
        (f: (val: T) => U, arg: T):
        () => U;
    export function curry<T, A, U>
        (f: (arg: A, val: T) => U, arg: T):
        (arg: A) => U;
    export function curry<T, A1, A2, U>
        (f: (arg1: A1, arg2: A2, val: T) => U, arg: T):
        (arg1: A1, arg2: A2) => U;
    export function curry<T, A1, A2, A3, U>
        (f: (arg1: A1, arg2: A2, arg3: A3, val: T) => U, arg: T):
        (arg1: A1, arg2: A2, arg3: A3) => U;
    export function curry<U>
        (f: (...args: any[]) => U, val: any):
        (...args: any[]) => U;

    export function fnil<T>
        (f: () => T): (val: T) => T;
    export function fnil<T, A>
        (f: (arg: A) => T, arg: A): (val: T) => T;
    export function fnil<T, A1, A2>
        (f: (arg1: A1, arg2: A2) => T, arg1: A1, arg2: A2): (val: T) => T;
    export function fnil<T, A1, A2, A3>
        (f: (arg1: A1, arg2: A2, arg3: A3) => T, arg1: A1, arg2: A2, arg3: A3): (val: T) => T;

    export function toClj(data: any): any;

    export function toJs(data: any): any;
}
