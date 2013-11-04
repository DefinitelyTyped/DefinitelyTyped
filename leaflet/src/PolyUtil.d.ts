/// <reference path="Point.d.ts" />
/// <reference path="Bounds.d.ts" />
declare module L {

    export class PolyUtil {

        /**
          * Clips the polygon geometry defined by the given points by rectangular bounds.
          * Used by Leaflet to only show polygon points that are on the screen or near,
          * increasing performance. Note that polygon points needs different algorithm
          * for clipping than polyline, so there's a seperate method for it.
          */
        static clipPolygon(points: Point[], bounds: Bounds): Point[];
    }
}
