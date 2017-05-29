// Type definitions for prelude.ls 1.1.1
// Project: http://www.preludels.com
// Definitions by: Aya Morisawa <https://github.com/AyaMorisawa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Change [0]: 2015/06/14 - Marcelo Camargo <https://github.com/haskellcamargo>


declare namespace PreludeLS {
    export function id<A>(x: A): A;
    export function isType<A>(type: string): (x: A) => boolean;
    export function isType<A>(type: string, x: A): boolean;
    export function replicate<A>(n: number): (x: A) => A[];
    export function replicate<A>(n: number, x: A): A[];


    // List

    export function each<A>(f: (x: A) => void): (xs: A[]) => A[];
    export function each<A>(f: (x: A) => void, xs: A[]): A[];
    export function map<A, B>(f: (x: A) => B): (xs: A[]) => B[];
    export function map<A, B>(f: (x: A) => B, xs: A[]): B[];
    export function compact<A>(xs: A[]): A[];
    export function filter<A>(f: (x: A) => boolean): (xs: A[]) => A[];
    export function filter<A>(f: (x: A) => boolean, xs: A[]): A[];
    export function reject<A>(f: (x: A) => boolean): (xs: A[]) => A[];
    export function reject<A>(f: (x: A) => boolean, xs: A[]): A[];
    export function partition<A>(f: (x: A) => Boolean): (xs: A[]) => [A[], A[]];
    export function partition<A>(f: (x: A) => Boolean, xs: A[]): [A[], A[]];
    export function find<A>(f: (x: A) => Boolean): (xs: A[]) => A;
    export function find<A>(f: (x: A) => Boolean, xs: A[]): A;
    export function head<A>(xs: A[]): A;
    export function tail<A>(xs: A[]): A[];
    export function last<A>(xs: A[]): A;
    export function initial<A>(xs: A[]): A[];
    export function empty<A>(xs: A[]): boolean;
    export function reverse<A>(xs: A[]): A[];
    export function unique<A>(xs: A[]): A[];
    export function uniqueBy<A, B>(f: (x: A) => B): (xs: A[]) => A[];
    export function uniqueBy<A, B>(f: (x: A) => B, xs: A[]): A[];
    export function fold<A, B>(f: (x: A) => (y: B) => A): (memo: A) => (xs: B[]) => A;
    export function fold<A, B>(f: (x: A) => (y: B) => A, memo: A): (xs: B[]) => A;
    export function fold<A, B>(f: (x: A) => (y: B) => A, memo: A, xs: B[]): A;
    export function foldl<A, B>(f: (x: A) => (y: B) => A): (memo: A) => (xs: B[]) => A;
    export function foldl<A, B>(f: (x: A) => (y: B) => A, memo: A): (xs: B[]) => A;
    export function foldl<A, B>(f: (x: A) => (y: B) => A, memo: A, xs: B[]): A;
    export function fold1<A>(f: (x: A) => (y: A) => A): (xs: A[]) => A;
    export function fold1<A>(f: (x: A) => (y: A) => A, xs: A[]): A;
    export function foldl1<A>(f: (x: A) => (y: A) => A): (xs: A[]) => A;
    export function foldl1<A>(f: (x: A) => (y: A) => A, xs: A[]): A;
    export function foldr<A, B>(f: (x: A) => (y: B) => B): (memo: B) => (xs: A[]) => B;
    export function foldr<A, B>(f: (x: A) => (y: B) => B, memo: B): (xs: A[]) => B;
    export function foldr<A, B>(f: (x: A) => (y: B) => B, memo: B, xs: A[]): B;
    export function foldr1<A>(f: (x: A) => (y: A) => A): (xs: A[]) => A;
    export function foldr1<A>(f: (x: A) => (y: A) => A, xs: A[]): A;
    export function unfoldr<A, B>(f: (x: B) => ([A, B] | void)): (x: B) => A[];
    export function unfoldr<A, B>(f: (x: B) => ([A, B] | void), x: B): A[];
    export function concat<A>(xss: A[][]): A[];
    export function concatMap<A, B>(f: (x: A) => B[]): (xs: A[]) => B[];
    export function concatMap<A, B>(f: (x: A) => B[], xs: A[]): B[];
    export function flatten(xs: any[]): any[];
    export function difference<A>(...xss: A[][]): A[];
    export function intersection<A>(...xss: A[][]): A[];
    export function union<A>(...xss: A[][]): A[];
    export function countBy<A, B>(f: (x: A) => B): (xs: A[]) => any;
    export function countBy<A, B>(f: (x: A) => B, xs: A[]): any;
    export function groupBy<A, B>(f: (x: A) => B): (xs: A[]) => any;
    export function groupBy<A, B>(f: (x: A) => B, xs: A[]): any;
    export function andList<A>(xs: A[]): boolean;
    export function orList<A>(xs: A[]): boolean;
    export function any<A>(f: (x: A) => boolean): (xs: A[]) => boolean;
    export function any<A>(f: (x: A) => boolean, xs: A[]): boolean;
    export function all<A>(f: (x: A) => boolean): (xs: A[]) => boolean;
    export function all<A>(f: (x: A) => boolean, xs: A[]): boolean;
    export function sort<A>(xs: A[]): A[];
    export function sortWith<A>(f: (x: A) => (y: A) => number): (xs: A[]) => A[];
    export function sortWith<A>(f: (x: A) => (y: A) => number, xs: A[]): A[];
    export function sortBy<A, B>(f: (x: A) => B): (xs: A[]) => A[];
    export function sortBy<A, B>(f: (x: A) => B, xs: A[]): A[];
    export function sum(xs: number[]): number;
    export function product(xs: number[]): number;
    export function mean(xs: number[]): number;
    export function maximum<A>(xs: A[]): A;
    export function minimum<A>(xs: A[]): A;
    export function maximumBy<A, B>(f: (x: A) => B): (xs: A[]) => A;
    export function maximumBy<A, B>(f: (x: A) => B, xs: A[]): A;
    export function minimumBy<A, B>(f: (x: A) => B): (xs: A[]) => A;
    export function minimumBy<A, B>(f: (x: A) => B, xs: A[]): A;
    export function scan<A, B>(f: (x: A) => (y: B) => A): (memo: A) => (xs: B[]) => A[];
    export function scan<A, B>(f: (x: A) => (y: B) => A, memo: A): (xs: B[]) => A[];
    export function scan<A, B>(f: (x: A) => (y: B) => A, memo: A, xs: B[]): A[];
    export function scanl<A, B>(f: (x: A) => (y: B) => A): (memo: A) => (xs: B[]) => A[];
    export function scanl<A, B>(f: (x: A) => (y: B) => A, memo: A): (xs: B[]) => A[];
    export function scanl<A, B>(f: (x: A) => (y: B) => A, memo: A, xs: B[]): A[];
    export function scan1<A>(f: (x: A) => (y: A) => A): (xs: A[]) => A[];
    export function scan1<A>(f: (x: A) => (y: A) => A, xs: A[]): A[];
    export function scanl1<A>(f: (x: A) => (y: A) => A): (xs: A[]) => A[];
    export function scanl1<A>(f: (x: A) => (y: A) => A, xs: A[]): A[];
    export function scanr<A, B>(f: (x: A) => (y: B) => B): (memo: B) => (xs: A[]) => B[];
    export function scanr<A, B>(f: (x: A) => (y: B) => B, memo: B): (xs: A[]) => B[];
    export function scanr<A, B>(f: (x: A) => (y: B) => B, memo: B, xs: A[]): B[];
    export function scanr1<A>(f: (x: A) => (y: A) => A): (xs: A[]) => A[];
    export function scanr1<A>(f: (x: A) => (y: A) => A, xs: A[]): A[];
    export function slice<A>(x: number): (y: number) => (xs: A[]) => A[];
    export function slice<A>(x: number, y: number): (xs: A[]) => A[];
    export function slice<A>(x: number, y: number, xs: A[]): A[];
    export function take<A>(n: number): (xs: A[]) => A[];
    export function take<A>(n: number, xs: A[]): A[];
    export function drop<A>(n: number): (xs: A[]) => A[];
    export function drop<A>(n: number, xs: A[]): A[];
    export function splitAt<A>(n: number): (xs: A[]) => [A[], A[]];
    export function splitAt<A>(n: number, xs: A[]): [A[], A[]];
    export function takeWhile<A>(p: (x: A) => boolean): (xs: A[]) => A[];
    export function takeWhile<A>(p: (x: A) => boolean, xs: A[]): A[];
    export function dropWhile<A>(p: (x: A) => boolean): (xs: A[]) => A[];
    export function dropWhile<A>(p: (x: A) => boolean, xs: A[]): A[];
    export function span<A>(p: (x: A) => boolean): (xs: A[]) => [A[], A[]];
    export function span<A>(p: (x: A) => boolean, xs: A[]): [A[], A[]];
    export function breakList<A>(p: (x: A) => boolean): (xs: A[]) => [A[], A[]];
    export function breakList<A>(p: (x: A) => boolean, xs: A[]): [A[], A[]];
    export function zip<A, B>(xs: A[]): (ys: B[]) => [A, B][];
    export function zip<A, B>(xs: A[], ys: B[]): [A, B][];
    export function zipWith<A, B, C>(f: (x: A) => (y: B) => C): (xs: A[]) => (ys: B[]) => C[];
    export function zipWith<A, B, C>(f: (x: A) => (y: B) => C, xs: A[]): (ys: B[]) => C[];
    export function zipWith<A, B, C>(f: (x: A) => (y: B) => C, xs: A[], ys: B[]): C[];
    export function zipAll<A>(...xss: A[][]): A[][];
    export function zipAllWith<A, B>(f: (...xs: A[]) => B, ...xss: A[][]): B[];
    export function at<A>(n: number): (xs: A[]) => A;
    export function at<A>(n: number, xs: A[]): A;
    export function elemIndex<A>(x: A): (xs: A[]) => number;
    export function elemIndex<A>(x: A, xs: A[]): number;
    export function elemIndices<A>(x: A): (xs: A[]) => number[];
    export function elemIndices<A>(x: A, xs: A[]): number[];
    export function findIndex<A>(f: (x: A) => boolean): (xs: A[]) => number;
    export function findIndex<A>(f: (x: A) => boolean, xs: A[]): number;
    export function findIndices<A>(f: (x: A) => boolean): (xs: A[]) => number[];
    export function findIndices<A>(f: (x: A) => boolean, xs: A[]): number[];


    // Obj

    export function keys<A>(object: { [key: string]: A }): string[];
    export function keys<A>(object: { [key: number]: A }): number[];
    export function values<A>(object: { [key: string]: A }): A[];
    export function values<A>(object: { [key: number]: A }): A[];
    export function pairsToObj<A>(object: [string, A][]): { [key: string]: A };
    export function pairsToObj<A>(object: [number, A][]): { [key: number]: A };
    export function objToPairs<A>(object: { [key: string]: A }): [string, A][];
    export function objToPairs<A>(object: { [key: number]: A }): [number, A][];
    export function listsToObj<A>(keys: string[]): (values: A[]) => { [key: string]: A };
    export function listsToObj<A>(keys: string[], values: A[]): { [key: string]: A };
    export function listsToObj<A>(keys: number[]): (values: A[]) => { [key: number]: A };
    export function listsToObj<A>(keys: number[], values: A[]): { [key: number]: A };
    export function objToLists<A>(object: { [key: string]: A }): [string[], A[]];
    export function objToLists<A>(object: { [key: number]: A }): [number[], A[]];
    export function empty<A>(object: any): boolean;
    export function each<A>(f: (x: A) => void): (object: { [key: string]: A }) => { [key: string]: A };
    export function each<A>(f: (x: A) => void, object: { [key: string]: A }): { [key: string]: A };
    export function each<A>(f: (x: A) => void): (object: { [key: number]: A }) => { [key: number]: A };
    export function each<A>(f: (x: A) => void, object: { [key: number]: A }): { [key: number]: A };
    export function map<A, B>(f: (x: A) => B): (object: { [key: string]: A }) => { [key: string]: B };
    export function map<A, B>(f: (x: A) => B, object: { [key: string]: A }): { [key: string]: B };
    export function map<A, B>(f: (x: A) => B): (object: { [key: number]: A }) => { [key: number]: B };
    export function map<A, B>(f: (x: A) => B, object: { [key: number]: A }): { [key: number]: B };
    export function compact<A>(object: { [key: string]: A }): { [key: string]: A };
    export function compact<A>(object: { [key: number]: A }): { [key: number]: A };
    export function filter<A>(f: (x: A) => boolean): (object: { [key: string]: A }) => { [key: string]: A };
    export function filter<A>(f: (x: A) => boolean, object: { [key: string]: A }): { [key: string]: A };
    export function filter<A>(f: (x: A) => boolean): (object: { [key: number]: A }) => { [key: number]: A };
    export function filter<A>(f: (x: A) => boolean, object: { [key: number]: A }): { [key: number]: A };
    export function reject<A>(f: (x: A) => boolean): (object: { [key: string]: A }) => { [key: string]: A };
    export function reject<A>(f: (x: A) => boolean, object: { [key: string]: A }): { [key: string]: A };
    export function reject<A>(f: (x: A) => boolean): (object: { [key: number]: A }) => { [key: number]: A };
    export function reject<A>(f: (x: A) => boolean, object: { [key: number]: A }): { [key: number]: A };
    export function partition<A>(f: (x: A) => boolean): (object: { [key: string]: A }) => [{ [key: string]: A }, { [key: string]: A }];
    export function partition<A>(f: (x: A) => boolean, object: { [key: string]: A }): [{ [key: string]: A }, { [key: string]: A }];
    export function partition<A>(f: (x: A) => boolean): (object: { [key: number]: A }) => [{ [key: number]: A }, { [key: number]: A }];
    export function partition<A>(f: (x: A) => boolean, object: { [key: number]: A }): [{ [key: number]: A }, { [key: number]: A }];
    export function find<A>(f: (x: A) => boolean): (object: { [key: string]: A }) => A;
    export function find<A>(f: (x: A) => boolean, object: { [key: string]: A }): A;
    export function find<A>(f: (x: A) => boolean): (object: { [key: number]: A }) => A;
    export function find<A>(f: (x: A) => boolean, object: { [key: number]: A }): A;

    export module Obj {
        export function empty<A>(object: any): boolean;
        export function each<A>(f: (x: A) => void): (object: { [key: string]: A }) => { [key: string]: A };
        export function each<A>(f: (x: A) => void, object: { [key: string]: A }): { [key: string]: A };
        export function each<A>(f: (x: A) => void): (object: { [key: number]: A }) => { [key: number]: A };
        export function each<A>(f: (x: A) => void, object: { [key: number]: A }): { [key: number]: A };
        export function map<A, B>(f: (x: A) => B): (object: { [key: string]: A }) => { [key: string]: B };
        export function map<A, B>(f: (x: A) => B, object: { [key: string]: A }): { [key: string]: B };
        export function map<A, B>(f: (x: A) => B): (object: { [key: number]: A }) => { [key: number]: B };
        export function map<A, B>(f: (x: A) => B, object: { [key: number]: A }): { [key: number]: B };
        export function compact<A>(object: { [key: string]: A }): { [key: string]: A };
        export function compact<A>(object: { [key: number]: A }): { [key: number]: A };
        export function filter<A>(f: (x: A) => boolean): (object: { [key: string]: A }) => { [key: string]: A };
        export function filter<A>(f: (x: A) => boolean, object: { [key: string]: A }): { [key: string]: A };
        export function filter<A>(f: (x: A) => boolean): (object: { [key: number]: A }) => { [key: number]: A };
        export function filter<A>(f: (x: A) => boolean, object: { [key: number]: A }): { [key: number]: A };
        export function reject<A>(f: (x: A) => boolean): (object: { [key: string]: A }) => { [key: string]: A };
        export function reject<A>(f: (x: A) => boolean, object: { [key: string]: A }): { [key: string]: A };
        export function reject<A>(f: (x: A) => boolean): (object: { [key: number]: A }) => { [key: number]: A };
        export function reject<A>(f: (x: A) => boolean, object: { [key: number]: A }): { [key: number]: A };
        export function partition<A>(f: (x: A) => boolean): (object: { [key: string]: A }) => [{ [key: string]: A }, { [key: string]: A }];
        export function partition<A>(f: (x: A) => boolean, object: { [key: string]: A }): [{ [key: string]: A }, { [key: string]: A }];
        export function partition<A>(f: (x: A) => boolean): (object: { [key: number]: A }) => [{ [key: number]: A }, { [key: number]: A }];
        export function partition<A>(f: (x: A) => boolean, object: { [key: number]: A }): [{ [key: number]: A }, { [key: number]: A }];
        export function find<A>(f: (x: A) => boolean): (object: { [key: string]: A }) => A;
        export function find<A>(f: (x: A) => boolean, object: { [key: string]: A }): A;
        export function find<A>(f: (x: A) => boolean): (object: { [key: number]: A }) => A;
        export function find<A>(f: (x: A) => boolean, object: { [key: number]: A }): A;
    }


    // Str

    export function split(separator: string): (str: string) => string[];
    export function split(separator: string, str: string): string[];
    export function join(separator: string): (xs: string[]) => string;
    export function join(separator: string, xs: string[]): string;
    export function lines(str: string): string[];
    export function unlines(xs: string[]): string;
    export function words(str: string): string[];
    export function unwords(xs: string[]): string;
    export function chars(str: string): string[];
    export function unchars(xs: string[]): string;
    export function repeat(n: number): (str: string) => string;
    export function repeat(n: number, str: string): string;
    export function capitalize(str: string): string;
    export function camelize(str: string): string;
    export function dasherize(str: string): string;
    export function empty(str: string): boolean;
    export function reverse(str: string): string;
    export function slice(x: number): (y: number) => (str: string) => string;
    export function slice(x: number, y: number): (str: string) => string;
    export function slice(x: number, y: number, str: string): string;
    export function take(n: number): (str: string) => string;
    export function take(n: number, str: string): string;
    export function drop(n: number): (str: string) => string;
    export function drop(n: number, str: string): string;
    export function splitAt(n: number): (str: string) => [string, string];
    export function splitAt(n: number, str: string): [string, string];
    export function takeWhile(f: (str: string) => boolean): (str: string) => string;
    export function takeWhile(f: (str: string) => boolean, str: string): string;
    export function dropWhile(f: (str: string) => boolean): (str: string) => string;
    export function dropWhile(f: (str: string) => boolean, str: string): string;
    export function span(f: (str: string) => boolean): (str: string) => [string, string];
    export function span(f: (str: string) => boolean, str: string): [string, string];
    export function breakStr(f: (str: string) => boolean): (str: string) => [string, string];
    export function breakStr(f: (str: string) => boolean, str: string): [string, string];

    export module Str {
        export function empty(str: string): boolean;
        export function reverse(str: string): string;
        export function slice(x: number): (y: number) => (str: string) => string;
        export function slice(x: number, y: number): (str: string) => string;
        export function slice(x: number, y: number, str: string): string;
        export function take(n: number): (str: string) => string;
        export function take(n: number, str: string): string;
        export function drop(n: number): (str: string) => string;
        export function drop(n: number, str: string): string;
        export function splitAt(n: number): (str: string) => [string, string];
        export function splitAt(n: number, str: string): [string, string];
        export function takeWhile(f: (str: string) => boolean): (str: string) => string;
        export function takeWhile(f: (str: string) => boolean, str: string): string;
        export function dropWhile(f: (str: string) => boolean): (str: string) => string;
        export function dropWhile(f: (str: string) => boolean, str: string): string;
        export function span(f: (str: string) => boolean): (str: string) => [string, string];
        export function span(f: (str: string) => boolean, str: string): [string, string];
        export function breakStr(f: (str: string) => boolean): (str: string) => [string, string];
        export function breakStr(f: (str: string) => boolean, str: string): [string, string];
    }


    // Func

    export function apply<A, B>(f: (...args: A[]) => B): (args: A[]) => B;
    export function apply<A, B>(f: (...args: A[]) => B, args: A[]): B;
    export function curry(f: Function): Function;
    export function flip<A, B, C>(f: (x: A) => (y: B) => C): (y: B) => (x: A) => C;
    export function flip<A, B, C>(f: (x: A) => (y: B) => C, y: B): (x: A) => C;
    export function flip<A, B, C>(f: (x: A) => (y: B) => C, y: B, x: A): C;
    export function fix(f: Function): Function;

    export function over<A, B, C>(f: (x: B) => (y: B) => C | ((x: B, y: B) => C), g: (x: A) => B, x: A, y: A): C;
    export function over<A, B, C>(f: (x: B, y: B) => C | ((x: B) => (y: B) => C), g: (x: A) => B, x: A): (y: A) => C;
    export function over<A, B, C>(f: (x: B, y: B) => C, g: (x: A) => B): (x: A, y: A) => C;
    export function over<A, B, C>(f: (x: B) => (y: B) => C, g: (x: A) => B): (x: A) => (y: A) => C;
    export function over<A, B, C>(f: (x: B, y: B) => C): (g: (x: A) => B) => (x: A, y: A) => C;
    export function over<A, B, C>(f: (x: B) => (y: B) => C): (g: (x: A) => B) => (x: A) => (y: A) => C;


    // Num

    export function max<Comparable>(x: Comparable): (y: Comparable) => Comparable;
    export function max<Comparable>(x: Comparable, y: Comparable): Comparable;
    export function min<Comparable>(x: Comparable): (y: Comparable) => Comparable;
    export function min<Comparable>(x: Comparable, y: Comparable): Comparable;
    export function negate(x: number): number;
    export function abs(x: number): number;
    export function signum(x: number): number;
    export function quot(x: number): (y: number) => number;
    export function quot(x: number, y: number): number;
    export function rem(x: number): (y: number) => number;
    export function rem(x: number, y: number): number;
    export function div(x: number): (y: number) => number;
    export function div(x: number, y: number): number;
    export function mod(x: number): (y: number) => number;
    export function mod(x: number, y: number): number;
    export function recip(x: number): number;
    export var pi: number;
    export var tau: number;
    export function exp(x: number): number;
    export function sqrt(x: number): number;
    export function ln(x: number): number;
    export function pow(x: number): (y: number) => number;
    export function pow(x: number, y: number): number;
    export function sin(x: number): number;
    export function cos(x: number): number;
    export function tan(x: number): number;
    export function asin(x: number): number;
    export function acos(x: number): number;
    export function atan(x: number): number;
    export function atan2(x: number, y: number): number;
    export function truncate(x: number): number;
    export function round(x: number): number;
    export function ceiling(x: number): number;
    export function floor(x: number): number;
    export function isItNaN(x: number): boolean;
    export function even(x: number): boolean;
    export function odd(x: number): boolean;
    export function gcd(x: number): (y: number) => number;
    export function gcd(x: number, y: number): number;
    export function lcm(x: number): (y: number) => number;
    export function lcm(x: number, y: number): number;
}

export = PreludeLS;
