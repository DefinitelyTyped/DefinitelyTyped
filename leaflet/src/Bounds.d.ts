/// <reference path="Point.d.ts" />
declare module L {

    /**
        * Creates a Bounds object from two coordinates (usually top-left and bottom-right
        * corners).
        */
    export function bounds(topLeft: Point, bottomRight: Point): Bounds;

    /**
        * Creates a Bounds object defined by the points it contains.
        */
    export function bounds(points: Point[]): Bounds;

    export class Bounds {

        /**
          * Creates a Bounds object from two coordinates (usually top-left and bottom-right
          * corners).
          */
        constructor(topLeft: Point, bottomRight: Point);
    
        /**
          * Creates a Bounds object defined by the points it contains.
          */
        constructor(points: Point[]);

        /**
          * Extends the bounds to contain the given point.
          */
        extend(point: Point): void;
    
        /**
          * Returns the center point of the bounds.
          */
        getCenter(): Point;
    
        /**
          * Returns true if the rectangle contains the given one.
          */
        contains(otherBounds: Bounds): boolean;
    
        /**
          * Returns true if the rectangle contains the given point.
          */
        contains(point: Point): boolean;
    
        /**
          * Returns true if the rectangle intersects the given bounds.
          */
        intersects(otherBounds: Bounds): boolean;
    
        /**
          * Returns true if the bounds are properly initialized.
          */
        isValid(): boolean;
    
        /**
          * Returns the size of the given bounds.
          */
        getSize(): Point;
    
        /**
          * The top left corner of the rectangle.
          */
        min: Point;
    
        /**
          * The bottom right corner of the rectangle.
          */
        max: Point;
    }
}
