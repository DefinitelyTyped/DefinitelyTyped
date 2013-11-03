//// <reference path="Point.d.ts" />
/// <reference path="Bounds.d.ts" />
declare module L {

    export class LineUtil {

        /**
          * Dramatically reduces the number of points in a polyline while retaining
          * its shape and returns a new array of simplified points. Used for a huge performance
          * boost when processing/displaying Leaflet polylines for each zoom level
          * and also reducing visual noise. tolerance affects the amount of simplification
          * (lesser value means higher quality but slower and with more points). Also
          * released as a separated micro-library Simplify.js.
          */
        static simplify(points: Point[], tolerance: number): Point[];
    
        /**
          * Returns the distance between point p and segment p1 to p2.
          */
        static pointToSegmentDistance(p: Point, p1: Point, p2: Point): number;
    
        /**
          * Returns the closest point from a point p on a segment p1 to p2.
          */
        static closestPointOnSegment(p: Point, p1: Point, p2: Point): number;
    
        /**
          * Clips the segment a to b by rectangular bounds (modifying the segment points
          * directly!). Used by Leaflet to only show polyline points that are on the screen
          * or near, increasing performance.
          */
        static clipSegment(a: Point, b: Point, bounds: Bounds): void;
    
    }
}
