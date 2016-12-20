// Type definitions for d3JS plugins
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* tslint:disable */

import * as d3 from 'd3';

declare module 'd3' {
    export function superformula<T>(): Superformula<T>;

    export namespace superformula {
        interface Type {
            m: number;
            n1: number;
            n2: number;
            n3: number;
            a: number;
            b: number;
        }
    }

    export interface Superformula<T> {
        (datum: T, index: number): string;

        type(): (datum: T, index: number) => string;
        type(type: string): Superformula<T>;
        type(type: (datum: T, index: number) => string): Superformula<T>;

        size(): (datum: T, index: number) => number;
        size(size: number): Superformula<T>;
        size(size: (datum: T, index: number) => number): Superformula<T>;

        segments(): (datum: T, index: number) => number;
        segments(segments: number): Superformula<T>;
        segments(segments: (datum: T, index: number) => number): Superformula<T>;

        param(name: string): number;
        param(name: string, value: number): Superformula<T>;
    }

    export var superformulaTypes: string[];
}
