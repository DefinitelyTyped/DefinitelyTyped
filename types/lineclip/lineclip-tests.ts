import { type BoundingBox, type Point, polyline } from "lineclip";

const line: Point[] = [
    [-10, 10],
    [0, 10],
    [10, 10],
    [10, 5],
    [10, -5],
    [10, -10],
    [20, -10],
    [20, 10],
    [40, 10],
    [40, 20],
    [20, 20],
    [20, 40],
    [10, 40],
    [10, 20],
    [5, 20],
    [-10, 20],
];

const bbox: BoundingBox = [0, 0, 30, 30];

polyline(line, bbox);
