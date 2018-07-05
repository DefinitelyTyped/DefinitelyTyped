// Type definitions for weighted
// Project: https://github.com/Schoonology/weighted
// Definitions by: Craig Citro <https://github.com/ccitro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'weighted' {
    export interface RandomFunc {
        (): Number;
    }  

    export function select<T> (set: T[], weights: Number[], rand?: RandomFunc): T;
    export function select<T> (obj: Object, rand?: RandomFunc): T;
}