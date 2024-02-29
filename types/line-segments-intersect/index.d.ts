type Point = [number, number];

type Segment = [Point, Point];

declare function linesIntersect(seg1: Segment, seg2: Segment, precision?: number): boolean;

export = linesIntersect;
