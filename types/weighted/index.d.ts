// Type definitions for weighted
// Project: https://github.com/Schoonology/weighted
// Definitions by: Craig Citro <https://github.com/ccitro>
//                 Dmitry Minkovsky <https://github.com/dminkovsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'weighted' {
    export interface RandomFunc {
        (): number;
    }  

    export default select;

    export function select<T> (set: T[], weights: number[], rand?: RandomFunc): T;
    export function select (obj: {[index: string]: number}, rand?: RandomFunc): string;
}
