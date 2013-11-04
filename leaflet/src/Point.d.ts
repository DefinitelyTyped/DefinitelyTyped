declare module L {

    /**
      * Creates a Point object with the given x and y coordinates. If optional round
      * is set to true, rounds the x and y values.
      */
    function point(x: number, y: number, round?: boolean): Point;

    export class Point {

        /**
          * Creates a Point object with the given x and y coordinates. If optional round
          * is set to true, rounds the x and y values.
          */
        constructor(x: number, y: number, round?: boolean);

        /**
          * Returns the result of addition of the current and the given points.
          */
        add(otherPoint: Point): Point;
    
        /**
          * Returns the result of subtraction of the given point from the current.
          */
        subtract(otherPoint: Point): Point;
    
        /**
          * Returns the result of multiplication of the current point by the given number.
          */
        multiplyBy(number: number): Point;
    
        /**
          * Returns the result of division of the current point by the given number. If
          * optional round is set to true, returns a rounded result.
          */
        divideBy(number: number, round?: boolean): Point;
    
        /**
          * Returns the distance between the current and the given points.
          */
        distanceTo(otherPoint: Point): number;
    
        /**
          * Returns a copy of the current point.
          */
        clone(): Point;
    
        /**
          * Returns a copy of the current point with rounded coordinates.
          */
        round(): Point;
    
        /**
          * Returns true if the given point has the same coordinates.
          */
        equals(otherPoint: Point): boolean;
    
        /**
          * Returns a string representation of the point for debugging purposes.
          */
        toString(): string;
   
        /**
          * The x coordinate.
          */
        x: number;

        /**
          * The y coordinate.
          */
        y: number;
    }
}
