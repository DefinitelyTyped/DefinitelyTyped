// Type definitions for compute-lcm 1.1
// Project: https://github.com/compute-io/lcm#readme
// Definitions by: James Holman <https://github.com/jayy-lmao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Accessor<T> = (item: T, idx: number) => number | null;

declare function lcm(a: number, b: number): number | null;
declare function lcm(a: ReadonlyArray<number>): number | null;
// Function to extract number from an element from the data array
declare function lcm<T>(dataArr: ReadonlyArray<T>, a: Accessor<T>): number | null;

//  Original package uses module.exports
export = lcm;
