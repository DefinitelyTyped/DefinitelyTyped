type Accessor<T> = (item: T, idx: number) => number | null;

declare function lcm(a: number, b: number): number | null;
declare function lcm(a: readonly number[]): number | null;
// Function to extract number from an element from the data array
declare function lcm<T>(dataArr: readonly T[], a: Accessor<T>): number | null;

//  Original package uses module.exports
export = lcm;
