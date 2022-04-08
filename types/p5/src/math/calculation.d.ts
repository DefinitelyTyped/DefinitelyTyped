// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Calculates the absolute value (magnitude) of a
         *   number. Maps to Math.abs(). The absolute value of
         *   a number is always positive.
         *   @param n number to compute
         *   @return absolute value of given number
         */
        abs(n: number): number;

        /**
         *   Calculates the closest int value that is greater
         *   than or equal to the value of the parameter. Maps
         *   to Math.ceil(). For example, ceil(9.03) returns
         *   the value 10.
         *   @param n number to round up
         *   @return rounded up number
         */
        ceil(n: number): number;

        /**
         *   Constrains a value between a minimum and maximum
         *   value.
         *   @param n number to constrain
         *   @param low minimum limit
         *   @param high maximum limit
         *   @return constrained number
         */
        constrain(n: number, low: number, high: number): number;

        /**
         *   Calculates the distance between two points, in
         *   either two or three dimensions.
         *   @param x1 x-coordinate of the first point
         *   @param y1 y-coordinate of the first point
         *   @param x2 x-coordinate of the second point
         *   @param y2 y-coordinate of the second point
         *   @return distance between the two points
         */
        dist(x1: number, y1: number, x2: number, y2: number): number;

        /**
         *   Calculates the distance between two points, in
         *   either two or three dimensions.
         *   @param x1 x-coordinate of the first point
         *   @param y1 y-coordinate of the first point
         *   @param z1 z-coordinate of the first point
         *   @param x2 x-coordinate of the second point
         *   @param y2 y-coordinate of the second point
         *   @param z2 z-coordinate of the second point
         *   @return distance between the two points
         */
        dist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

        /**
         *   Returns Euler's number e (2.71828...) raised to
         *   the power of the n parameter. Maps to Math.exp().
         *   @param n exponent to raise
         *   @return e^n
         */
        exp(n: number): number;

        /**
         *   Calculates the closest int value that is less than
         *   or equal to the value of the parameter. Maps to
         *   Math.floor().
         *   @param n number to round down
         *   @return rounded down number
         */
        floor(n: number): number;

        /**
         *   Calculates a number between two numbers at a
         *   specific increment. The amt parameter is the
         *   amount to interpolate between the two values where
         *   0.0 equal to the first point, 0.1 is very near the
         *   first point, 0.5 is half-way in between, and 1.0
         *   is equal to the second point. If the value of amt
         *   is more than 1.0 or less than 0.0, the number will
         *   be calculated accordingly in the ratio of the two
         *   given numbers. The lerp function is convenient for
         *   creating motion along a straight path and for
         *   drawing dotted lines.
         *   @param start first value
         *   @param stop second value
         *   @param amt number
         *   @return lerped value
         */
        lerp(start: number, stop: number, amt: number): number;

        /**
         *   Calculates the natural logarithm (the base-e
         *   logarithm) of a number. This function expects the
         *   n parameter to be a value greater than 0.0. Maps
         *   to Math.log().
         *   @param n number greater than 0
         *   @return natural logarithm of n
         */
        log(n: number): number;

        /**
         *   Calculates the magnitude (or length) of a vector.
         *   A vector is a direction in space commonly used in
         *   computer graphics and linear algebra. Because it
         *   has no "start" position, the magnitude of a vector
         *   can be thought of as the distance from the
         *   coordinate 0,0 to its x,y value. Therefore, mag()
         *   is a shortcut for writing dist(0, 0, x, y).
         *   @param a first value
         *   @param b second value
         *   @return magnitude of vector from (0,0) to (a,b)
         */
        mag(a: number, b: number): number;

        /**
         *   Re-maps a number from one range to another.  In
         *   the first example above, the number 25 is
         *   converted from a value in the range of 0 to 100
         *   into a value that ranges from the left edge of the
         *   window (0) to the right edge (width).
         *   @param value the incoming value to be converted
         *   @param start1 lower bound of the value's current
         *   range
         *   @param stop1 upper bound of the value's current
         *   range
         *   @param start2 lower bound of the value's target
         *   range
         *   @param stop2 upper bound of the value's target
         *   range
         *   @param [withinBounds] constrain the value to the
         *   newly mapped range
         *   @return remapped number
         */
        map(
            value: number,
            start1: number,
            stop1: number,
            start2: number,
            stop2: number,
            withinBounds?: boolean
        ): number;

        /**
         *   Determines the largest value in a sequence of
         *   numbers, and then returns that value. max()
         *   accepts any number of Number parameters, or an
         *   Array of any length.
         *   @param n0 Number to compare
         *   @param n1 Number to compare
         *   @return maximum Number
         */
        max(n0: number, n1: number): number;

        /**
         *   Determines the largest value in a sequence of
         *   numbers, and then returns that value. max()
         *   accepts any number of Number parameters, or an
         *   Array of any length.
         *   @param nums Numbers to compare
         */
        max(nums: number[]): number;

        /**
         *   Determines the smallest value in a sequence of
         *   numbers, and then returns that value. min()
         *   accepts any number of Number parameters, or an
         *   Array of any length.
         *   @param n0 Number to compare
         *   @param n1 Number to compare
         *   @return minimum Number
         */
        min(n0: number, n1: number): number;

        /**
         *   Determines the smallest value in a sequence of
         *   numbers, and then returns that value. min()
         *   accepts any number of Number parameters, or an
         *   Array of any length.
         *   @param nums Numbers to compare
         */
        min(nums: number[]): number;

        /**
         *   Normalizes a number from another range into a
         *   value between 0 and 1. Identical to map(value,
         *   low, high, 0, 1). Numbers outside of the range are
         *   not clamped to 0 and 1, because out-of-range
         *   values are often intentional and useful. (See the
         *   example above.)
         *   @param value incoming value to be normalized
         *   @param start lower bound of the value's current
         *   range
         *   @param stop upper bound of the value's current
         *   range
         *   @return normalized number
         */
        norm(value: number, start: number, stop: number): number;

        /**
         *   Facilitates exponential expressions. The pow()
         *   function is an efficient way of multiplying
         *   numbers by themselves (or their reciprocals) in
         *   large quantities. For example, pow(3, 5) is
         *   equivalent to the expression 33333 and pow(3, -5)
         *   is equivalent to 1 / 33333. Maps to Math.pow().
         *   @param n base of the exponential expression
         *   @param e power by which to raise the base
         *   @return n^e
         */
        pow(n: number, e: number): number;

        /**
         *   Calculates the integer closest to the n parameter.
         *   For example, round(133.8) returns the value 134.
         *   Maps to Math.round().
         *   @param n number to round
         *   @return rounded number
         */
        round(n: number): number;

        /**
         *   Squares a number (multiplies a number by itself).
         *   The result is always a positive number, as
         *   multiplying two negative numbers always yields a
         *   positive result. For example, -1 * -1 = 1.
         *   @param n number to square
         *   @return squared number
         */
        sq(n: number): number;

        /**
         *   Calculates the square root of a number. The square
         *   root of a number is always positive, even though
         *   there may be a valid negative root. The square
         *   root s of number a is such that s*s = a. It is the
         *   opposite of squaring. Maps to Math.sqrt().
         *   @param n non-negative number to square root
         *   @return square root of number
         */
        sqrt(n: number): number;
    }
}
