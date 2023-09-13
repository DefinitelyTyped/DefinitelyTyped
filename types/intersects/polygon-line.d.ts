declare function polygonLine(
    points: ReadonlyArray<number>,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    tolerance: number,
): boolean;

export = polygonLine;
