/// <reference path="LatLng.d.ts" />
/// <reference path="Point.d.ts" />
declare module L {

    export interface IProjection {

        /**
          * Projects geographical coordinates into a 2D point.
          */
        project(latlng: LatLng): Point;
    
        /**
          * The inverse of project. Projects a 2D point into geographical location.
          */
        unproject(point: Point): LatLng;
    }
}
