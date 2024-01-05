declare function linePolygon(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    points: readonly number[],
    tolerance: number,
): boolean;

export = linePolygon;
