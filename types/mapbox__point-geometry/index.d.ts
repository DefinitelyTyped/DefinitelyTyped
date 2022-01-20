// Type definitions for @mapbox/point-geometry 0.1
// Project: https://github.com/mapbox/point-geometry
// Definitions by: Mathieu Maes <https://github.com/webberig>
//                 Harel Mazor <https://github.com/HarelM>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Point {
    constructor(x: number, y: number);
    clone: () => Point;
    add: (p: Point) => Point;
    sub: (p: Point) => Point;
    multiByPoint: (p: Point) => Point;
    divByPoint: (p: Point) => Point;
    mult: (k: number) => Point;
    div: (k: number) => Point;
    rotate: (k: number) => Point;
    rotateAround: (k: number, p: Point) => Point;
    matMult: (m: number[]) => Point;
    unit: () => Point;
    perp: () => Point;
    round: () => Point;
    mag: () => number;
    equals: (other: Point) => boolean;
    dist: (p: Point) => number;
    distSqr: (p: Point) => number;
    angle: () => number;
    angleTo: (b: Point) => number;
    angleWith: (b: Point) => number;
    angleWithSep: (x: number, y: number) => number;

    static convert<T extends unknown>(a: T): T extends number[] ? Point : T extends Point ? Point : T;
}

export = Point;
