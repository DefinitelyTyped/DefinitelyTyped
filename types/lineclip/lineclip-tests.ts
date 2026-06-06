import {
    type BoundingBox,
    clipPolygon,
    clipPolyline,
    type LineClipResult,
    type Point,
    type PolygonClipResult,
} from "lineclip";

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

const polygon: Point[] = [
    [-10, 10],
    [0, 10],
    [10, 10],
    [10, 5],
    [10, -5],
    [10, -10],
    [20, -10],
    [-10, 10],
];

const bbox: BoundingBox = [0, 0, 30, 30];

const result: LineClipResult = clipPolyline(line, bbox);
const withOptionalResult: LineClipResult = clipPolyline(line, bbox, [[[0, 1], [2, 3]]]);

const polygonResult: PolygonClipResult = clipPolygon(polygon, bbox);

const onePoint: Point = result[0][0];
const onePolygonPoint: Point = polygonResult[0];
