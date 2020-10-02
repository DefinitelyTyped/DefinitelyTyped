// Type definitions for box-intersect 1.0
// Project: https://github.com/mikolalysenko/box-intersect
// Definitions by: Sankaku <https://github.com/sankaku-deltalab>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = boxIntersect;

declare function boxIntersect(
    x: ReadonlyArray<ReadonlyArray<number>>,
    visit?: (i: number, j: number) => void,
): Array<[number, number]>;

declare function boxIntersect<T extends number[]>(
    red: ReadonlyArray<T>,
    blue?: ReadonlyArray<T>,
    visit?: (i: number, j: number) => void,
): Array<[number, number]>;
