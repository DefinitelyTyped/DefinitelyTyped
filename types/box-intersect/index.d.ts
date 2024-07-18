export = boxIntersect;

declare function boxIntersect(
    x: ReadonlyArray<readonly number[]>,
    visit?: (i: number, j: number) => void,
): Array<[number, number]>;

declare function boxIntersect<T extends number[]>(
    red: readonly T[],
    blue?: readonly T[],
    visit?: (i: number, j: number) => void,
): Array<[number, number]>;
