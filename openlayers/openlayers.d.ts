// Type definitions for OpenLayers.js 2.10
// Project: https://github.com/openlayers/openlayers
// Definitions by: Ilya Bolkhovsky <https://github.com/bolhovsky>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module OpenLayers {
    export class Geometry {
        static Point: new () => Point;
    }

    export class Point extends Geometry {

    }

    export class Projection {
        /**
          *This class offers several methods for interacting with a wrapped pro4js projection object.
          */
        constructor(projCode: string, options?: any);

        /**
          *Get the string SRS code.
          */
        getCode(): string;

        /**
          *Get the units string for the projection -- returns null if proj4js is not available.
          */
        getUnits(): string;

        /**
          *Set a custom transform method between two projections.  Use this method in cases where the proj4js lib is not available or where custom projections need to be handled.
          */
        addTransform(from: string, to: string, method: Function);

        /**
          *Transform a point coordinate from one projection to another. Note that the input point is transformed in place.
          */
        transform(point: OpenLayers.Geometry.Point, source: Projection, dest: OpenLayers.Projection): Object;

        /**
          *Transform a point coordinate from one projection to another. Note that the input point is transformed in place.
          */
        transform(point: Object, source: Projection, dest: OpenLayers.Projection): Object;

        /**
          *A null transformation useful for defining projection aliases when proj4js is not available:
          */
        nullTransform(point: Object): Function;
    }

    export class Bounds {

    }

    export class LonLat {
        /**
          *Create a new map location.  Coordinates can be passed either as two arguments, or as a single argument.
          */
        constructor(lon: number, lat: number);

        /**
          *Create a new map location.  Coordinates can be passed either as two arguments, or as a single argument.
          */
        constructor(lonlat: number[]);

        /**
          *Shortened String representation of OpenLayers.LonLat object.
          */
        toShortString(): string;

        /**
          *New OpenLayers.LonLat object with the same lon and lat values
          */
        clone(): LonLat;

        /**   
          *A new OpenLayers.LonLat object with the lon and lat passed-in added to this’s.
          */
        add(lon: number, lat: number): LonLat;

        /**   
          *Boolean value indicating whether the passed-in OpenLayers.LonLat object has the same lon and lat components as this.  Note: if ll passed in is null, returns false.
          */
        equals(ll: LonLat): boolean;

        /**   
          *Transform the LonLat object from source to dest.  This transformation is in place: if you want a new lonlat, use .clone() first.
          */
        transform(source: Projection, dest: Projection): LonLat;

        /**
          *Returns a copy of this lonlat, but wrapped around the "dateline" (as specified by the borders of maxExtent).
          */
        wrapDateLine(maxExtend: Bounds): LonLat;
    }

    export interface MapOptions {

        projection?: string;

        maxExtend?: Bounds;

        center?: LonLat;
    }

    export class Map {

        constructor(id: HTMLElement, options?: MapOptions);

        constructor(id: string, options?: MapOptions);
    }
}