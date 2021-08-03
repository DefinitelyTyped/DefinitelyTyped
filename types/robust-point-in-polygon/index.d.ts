// Type definitions for robust-point-in-polygon 1.0
// Project: https://github.com/mikolalysenko/robust-point-in-polygon
// Definitions by: Matthew Boman <https://github.com/matthewboman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Point = [number, number];

declare function robustPointInPolygon(vs: Point[], point: Point): -1 | 0 | 1;
export = robustPointInPolygon;
