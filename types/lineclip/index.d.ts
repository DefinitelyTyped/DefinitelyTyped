export type Point = [number, number];
export type BoundingBox = [number, number, number, number];
export type LineClipResult = Point[][];
export type PolygonClipResult = Point[];

export function clipPolyline(points: Point[], bbox: BoundingBox, result?: LineClipResult): LineClipResult;
export function clipPolygon(points: Point[], bbox: BoundingBox): PolygonClipResult;
