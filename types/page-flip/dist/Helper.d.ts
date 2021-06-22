import { Point, Rect, Segment } from './BasicTypes';
/**
 * A class containing helping mathematical methods
 */
export namespace Helper {
    /**
     * Get the distance between two points
     */
    function GetDistanceBetweenTwoPoint(point1: Point, point2: Point): number;
    /**
     * Get the length of the line segment
     */
    function GetSegmentLength(segment: Segment): number;
    /**
     * Get the angle between two lines
     */
    function GetAngleBetweenTwoLine(line1: Segment, line2: Segment): number;
    /**
     * Check for a point in a rectangle
     */
    function PointInRect(rect: Rect, pos: Point): Point;
    /**
     * Transform point coordinates to a given angle
     */
    function GetRotatedPoint(transformedPoint: Point, startPoint: Point, angle: number): Point;
    /**
     * Limit a point "linePoint" to a given circle centered at point "startPoint" and a given radius
     */
    function LimitPointToCircle(startPoint: Point, radius: number, limitedPoint: Point): Point;
    /**
     * Find the intersection of two lines bounded by a rectangle "rectBorder"
     */
    function GetIntersectBetweenTwoSegment(rectBorder: Rect, one: Segment, two: Segment): Point;
    /**
     * Find the intersection point of two lines
     *
     * @throws Error if the segments are on the same line
     */
    function GetIntersectBeetwenTwoLine(one: Segment, two: Segment): Point;
    /**
     * Get a list of coordinates (step: 1px) between two points
     */
    function GetCordsFromTwoPoint(pointOne: Point, pointTwo: Point): Point[];
}
