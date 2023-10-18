declare function inside(
    point: ReadonlyArray<number>,
    polygon: ReadonlyArray<ReadonlyArray<number>> | ReadonlyArray<number>,
    start?: number,
    end?: number,
): boolean;
export = inside;
