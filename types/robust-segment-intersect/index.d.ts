// Type definitions for robust-segment-intersect 1.0
// Project: https://github.com/mikolalysenko/robust-segment-intersect
// Definitions by: masx200 <https://github.com/masx200>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Coordinate = [number, number];
declare function a (
        a0: Coordinate,
        a1: Coordinate,
        b0: Coordinate,
        b1: Coordinate
    ) :boolean;
export = a;
