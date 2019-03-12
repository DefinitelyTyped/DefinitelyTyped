declare namespace AMap {
    namespace GeometryUtil {
        function distance(
            point1: LocationValue,
            point2: LocationValue | LocationValue[]
        ): number;

        function ringArea(ring: LocationValue[]): number;

        function isClockwise(path: LocationValue[]): boolean;

        function distanceOfLine(line: LocationValue[]): number;

        function ringRingClip(
            ring1: LocationValue[],
            ring2: LocationValue[]
        ): Array<[number, number]>;

        function doesRingRingIntersect(
            ring1: LocationValue[],
            ring2: LocationValue[]
        ): boolean;

        function doesLineRingIntersect(
            line: LocationValue[],
            ring: LocationValue[]
        ): boolean;

        function doesLineLineIntersect(
            line1: LocationValue[],
            line2: LocationValue[]
        ): boolean;

        function doesSegmentPolygonIntersect(
            point1: LocationValue,
            point2: LocationValue,
            polygon: LocationValue[][]
        ): boolean;

        function doesSegmentRingIntersect(
            point1: LocationValue,
            point2: LocationValue,
            ring: LocationValue[]
        ): boolean;

        function doesSegmentLineIntersect(
            point1: LocationValue,
            point2: LocationValue,
            line: LocationValue[]
        ): boolean;

        function doesSegmentsIntersect(
            point1: LocationValue,
            point2: LocationValue,
            point3: LocationValue,
            point4: LocationValue
        ): boolean;

        function isPointInRing(point: LocationValue, ring: LocationValue[]): boolean;

        function isRingInRing(ring1: LocationValue[], ring2: LocationValue[]): boolean;

        function isPointInPolygon(point: LocationValue, polygon: LocationValue[][]): boolean;

        function makesureClockwise(path: Array<[number, number]>): Array<[number, number]>;

        function makesureAntiClockwise(path: Array<[number, number]>): Array<[number, number]>;

        function closestOnSegment(
            point1: LocationValue,
            point2: LocationValue,
            point3: LocationValue
        ): [number, number];

        function closestOnLine(point: LocationValue, line: LocationValue[]): [number, number];

        function distanceToSegment(
            point1: LocationValue,
            point2: LocationValue,
            point3: LocationValue
        ): number;

        function distanceToLine(point: LocationValue, line: LocationValue[]): number;

        function isPointOnSegment(
            point1: LocationValue,
            point2: LocationValue,
            point3: LocationValue,
            tolerance?: number
        ): boolean;

        function isPointOnLine(
            point: LocationValue,
            line: LocationValue[],
            tolerance?: number
        ): boolean;

        function isPointOnRing(
            point: LocationValue,
            ring: LocationValue[],
            tolerance?: number
        ): boolean;

        function isPointOnPolygon(
            point: LocationValue,
            polygon: LocationValue[][],
            tolerance?: number
        ): boolean;

        function doesPolygonPolygonIntersect(
            polygon1: LocationValue[],
            polygon2: LocationValue[]
        ): boolean;

        function distanceToPolygon(point: LocationValue, polygon: LocationValue[]): number;

        function triangulateShape(
            shape1: LngLat[] | Pixel[] | [number, number],
            shape2: LngLat[] | Pixel[] | [number, number]
        ): number[];
    }
}
