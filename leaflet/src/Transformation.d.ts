/// <reference path="Point.d.ts" />
declare module L {

    export class Transformation {

        /**
          * Creates a transformation object with the given coefficients.
          */
        constructor(a: number, b: number, c: number, d: number);
    
        /**
          * Returns a transformed point, optionally multiplied by the given scale.
          * Only accepts real L.Point instances, not arrays.
          */
        transform(point: Point, scale?: number): Point;
    
        /**
          * Returns the reverse transformation of the given point, optionally divided
          * by the given scale. Only accepts real L.Point instances, not arrays.
          */
        untransform(point: Point, scale?: number): Point;
    }
}
