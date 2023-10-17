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
