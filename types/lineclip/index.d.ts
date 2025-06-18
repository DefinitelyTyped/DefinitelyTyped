declare namespace Lineclip {
    type Point = [number, number];
    type BoundingBox = [number, number, number, number];
    type LineClipResult = Point[];

    function polyline(points: Point[], bbox: BoundingBox, result?: LineClipResult[]): LineClipResult;
    function polygon(points: Point[], bbox: BoundingBox): LineClipResult;
}

declare function Lineclip(
    points: Lineclip.Point[],
    bbox: Lineclip.BoundingBox,
    result?: Lineclip.LineClipResult[],
): Lineclip.LineClipResult;
export = Lineclip;
