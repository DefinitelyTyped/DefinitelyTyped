type Point = [number, number];

declare function robustPointInPolygon(vs: Point[], point: Point): -1 | 0 | 1;
export = robustPointInPolygon;
