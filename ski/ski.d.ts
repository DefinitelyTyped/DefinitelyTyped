// Type definitions for ski 1.1.0
// Project: https://github.com/jden/ski
// Definitions by: Aya Morisawa <https://github.com/AyaMorisawa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare export function S<T, S, U>(x: (z: U) => (y: S) => T, y: (z: U) => S, z: U): T;
declare export function K<T, S>(x: T): (y?: S) => T
declare export function I<T>(x: T): T;
