// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Calculates the absolute value of a number. A
         *   number's absolute value is its distance from zero
         *   on the number line. -5 and 5 are both five units
         *   away from zero, so calling abs(-5) and abs(5) both
         *   return 5. The absolute value of a number is always
         *   positive.
         *   @param n number to compute.
         *   @return absolute value of given number.
         */
        abs(n: number): number;

        /**
         *   Calculates the closest integer value that is
         *   greater than or equal to the parameter's value.
         *   For example, calling ceil(9.03) returns the value
         *   10.
         *   @param n number to round up.
         *   @return rounded up number.
         */
        ceil(n: number): number;

        /**
         *   Constrains a number between a minimum and maximum
         *   value.
         *   @param n number to constrain.
         *   @param low minimum limit.
         *   @param high maximum limit.
         *   @return constrained number.
         */
        constrain(n: number, low: number, high: number): number;

        /**
         *   Calculates the distance between two points. The
         *   version of dist() with four parameters calculates
         *   distance in two dimensions.
         *
         *   The version of dist() with six parameters
         *   calculates distance in three dimensions.
         *
         *   Use p5.Vector.dist() to calculate the distance
         *   between two p5.Vector objects.
         *   @param x1 x-coordinate of the first point.
         *   @param y1 y-coordinate of the first point.
         *   @param x2 x-coordinate of the second point.
         *   @param y2 y-coordinate of the second point.
         *   @return distance between the two points.
         */
        dist(x1: number, y1: number, x2: number, y2: number): number;

        /**
         *   Calculates the distance between two points. The
         *   version of dist() with four parameters calculates
         *   distance in two dimensions.
         *
         *   The version of dist() with six parameters
         *   calculates distance in three dimensions.
         *
         *   Use p5.Vector.dist() to calculate the distance
         *   between two p5.Vector objects.
         *   @param x1 x-coordinate of the first point.
         *   @param y1 y-coordinate of the first point.
         *   @param z1 z-coordinate of the first point.
         *   @param x2 x-coordinate of the second point.
         *   @param y2 y-coordinate of the second point.
         *   @param z2 z-coordinate of the second point.
         *   @return distance between the two points.
         */
        dist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

        /**
         *   Returns Euler's number e (2.71828...) raised to
         *   the power of the n parameter.
         *   @param n exponent to raise.
         *   @return e^n
         */
        exp(n: number): number;

        /**
         *   Calculates the closest integer value that is less
         *   than or equal to the value of the n parameter.
         *   @param n number to round down.
         *   @return rounded down number.
         */
        floor(n: number): number;

        /**
         *   Calculates a number between two numbers at a
         *   specific increment. The amt parameter is the
         *   amount to interpolate between the two numbers. 0.0
         *   is equal to the first number, 0.1 is very near the
         *   first number, 0.5 is half-way in between, and 1.0
         *   is equal to the second number. The lerp() function
         *   is convenient for creating motion along a straight
         *   path and for drawing dotted lines. If the value of
         *   amt is less than 0 or more than 1, lerp() will
         *   return a number outside of the original interval.
         *   For example, calling lerp(0, 10, 1.5) will return
         *   15.
         *   @param start first value.
         *   @param stop second value.
         *   @param amt number.
         *   @return lerped value.
         */
        lerp(start: number, stop: number, amt: number): number;

        /**
         *   Calculates the natural logarithm (the base-e
         *   logarithm) of a number. This function expects the
         *   n parameter to be a value greater than 0.0.
         *   @param n number greater than 0.
         *   @return natural logarithm of n.
         */
        log(n: number): number;

        /**
         *   Calculates the magnitude, or length, of a vector.
         *   A vector is like an arrow pointing in space.
         *   Vectors are commonly used for programming motion.
         *   Vectors don't have a "start" position because the
         *   same arrow can be drawn anywhere. A vector's
         *   magnitude can be thought of as the distance from
         *   the origin (0, 0) to its tip at (x, y). mag(x, y)
         *   is a shortcut for calling dist(0, 0, x, y).
         *   @param x first component.
         *   @param y second component.
         *   @return magnitude of vector from (0,0) to (x,y).
         */
        mag(x: number, y: number): number;

        /**
         *   Re-maps a number from one range to another. For
         *   example, calling map(2, 0, 10, 0, 100) returns 20.
         *   The first three arguments set the original value
         *   to 2 and the original range from 0 to 10. The last
         *   two arguments set the target range from 0 to 100.
         *   20's position in the target range [0, 100] is
         *   proportional to 2's position in the original range
         *   [0, 10].
         *   @param value the incoming value to be converted.
         *   @param start1 lower bound of the value's current
         *   range.
         *   @param stop1 upper bound of the value's current
         *   range.
         *   @param start2 lower bound of the value's target
         *   range.
         *   @param stop2 upper bound of the value's target
         *   range.
         *   @param [withinBounds] constrain the value to the
         *   newly mapped range.
         *   @return remapped number.
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
         *   Returns the largest value in a sequence of
         *   numbers. The version of max() with one parameter
         *   interprets it as an array of numbers and returns
         *   the largest number.
         *
         *   The version of max() with two or more parameters
         *   interprets them as individual numbers and returns
         *   the largest number.
         *   @param n0 first number to compare.
         *   @param n1 second number to compare.
         *   @return maximum number.
         */
        max(n0: number, n1: number): number;

        /**
         *   Returns the largest value in a sequence of
         *   numbers. The version of max() with one parameter
         *   interprets it as an array of numbers and returns
         *   the largest number.
         *
         *   The version of max() with two or more parameters
         *   interprets them as individual numbers and returns
         *   the largest number.
         *   @param nums numbers to compare.
         */
        max(nums: number[]): number;

        /**
         *   Returns the smallest value in a sequence of
         *   numbers. The version of min() with one parameter
         *   interprets it as an array of numbers and returns
         *   the smallest number.
         *
         *   The version of min() with two or more parameters
         *   interprets them as individual numbers and returns
         *   the smallest number.
         *   @param n0 first number to compare.
         *   @param n1 second number to compare.
         *   @return minimum number.
         */
        min(n0: number, n1: number): number;

        /**
         *   Returns the smallest value in a sequence of
         *   numbers. The version of min() with one parameter
         *   interprets it as an array of numbers and returns
         *   the smallest number.
         *
         *   The version of min() with two or more parameters
         *   interprets them as individual numbers and returns
         *   the smallest number.
         *   @param nums numbers to compare.
         */
        min(nums: number[]): number;

        /**
         *   Maps a number from one range to a value between 0
         *   and 1. For example, norm(2, 0, 10) returns 0.2.
         *   2's position in the original range [0, 10] is
         *   proportional to 0.2's position in the range [0,
         *   1]. This is equivalent to calling map(2, 0, 10, 0,
         *   1).
         *
         *   Numbers outside of the original range are not
         *   constrained between 0 and 1. Out-of-range values
         *   are often intentional and useful.
         *   @param value incoming value to be normalized.
         *   @param start lower bound of the value's current
         *   range.
         *   @param stop upper bound of the value's current
         *   range.
         *   @return normalized number.
         */
        norm(value: number, start: number, stop: number): number;

        /**
         *   Calculates exponential expressions such as 2^3.
         *   For example, pow(2, 3) is equivalent to the
         *   expression 2 × 2 × 2. pow(2, -3) is equivalent to
         *   1 ÷ (2 × 2 × 2).
         *   @param n base of the exponential expression.
         *   @param e power by which to raise the base.
         *   @return n^e.
         */
        pow(n: number, e: number): number;

        /**
         *   Calculates the integer closest to the n parameter.
         *   For example, round(133.8) returns the value 134.
         *   @param n number to round.
         *   @param [decimals] number of decimal places to
         *   round to, default is 0.
         *   @return rounded number.
         */
        round(n: number, decimals?: number): number;

        /**
         *   Squares a number, which means multiplying the
         *   number by itself. The value returned is always a
         *   positive number. For example, sq(3) evaluates 3 ×
         *   3 which is 9. sq(-3) evaluates -3 × -3 which is
         *   also 9. Multiplying two negative numbers produces
         *   a positive number.
         *   @param n number to square.
         *   @return squared number.
         */
        sq(n: number): number;

        /**
         *   Calculates the square root of a number. A number's
         *   square root can be multiplied by itself to produce
         *   the original number. For example, sqrt(9) returns
         *   3 because 3 × 3 = 9. sqrt() always returns a
         *   positive value. sqrt() doesn't work with negative
         *   arguments such as sqrt(-9).
         *   @param n non-negative number to square root.
         *   @return square root of number.
         */
        sqrt(n: number): number;

        /**
         *   Calculates the fractional part of a number. For
         *   example, fract(12.34) returns 0.34.
         *   @param n number whose fractional part will be
         *   found.
         *   @return fractional part of n.
         */
        fract(n: number): number;
    }
}
