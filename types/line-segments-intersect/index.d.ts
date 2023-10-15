// Type definitions for line-segments-intersect 0.0
// Project: https://github.com/geosquare/line-segments-intersect
// Definitions by: Jeremy Banka <https://github.com/jeremybanka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Point = [number, number];

type Segment = [Point, Point];

declare function linesIntersect(seg1: Segment, seg2: Segment, precision?: number): boolean;

export = linesIntersect;
