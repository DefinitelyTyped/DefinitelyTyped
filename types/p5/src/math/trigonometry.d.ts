// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   The inverse of cos(), returns the arc cosine of a
         *   value. This function expects arguments in the
         *   range -1 to 1. By default, acos() returns values
         *   in the range 0 to π (about 3.14). If the
         *   angleMode() is DEGREES, then values are returned
         *   in the range 0 to 180.
         *   @param value value whose arc cosine is to be
         *   returned.
         *   @return arc cosine of the given value.
         */
        acos(value: number): number;

        /**
         *   The inverse of sin(), returns the arc sine of a
         *   value. This function expects input values in the
         *   range of -1 to 1. By default, asin() returns
         *   values in the range -π ÷ 2 (about -1.57) to π ÷ 2
         *   (about 1.57). If the angleMode() is DEGREES then
         *   values are returned in the range -90 to 90.
         *   @param value value whose arc sine is to be
         *   returned.
         *   @return arc sine of the given value.
         */
        asin(value: number): number;

        /**
         *   The inverse of tan(), returns the arc tangent of a
         *   value. This function expects input values in the
         *   range of -Infinity to Infinity. By default, atan()
         *   returns values in the range -π ÷ 2 (about -1.57)
         *   to π ÷ 2 (about 1.57). If the angleMode() is
         *   DEGREES then values are returned in the range -90
         *   to 90.
         *   @param value value whose arc tangent is to be
         *   returned.
         *   @return arc tangent of the given value.
         */
        atan(value: number): number;

        /**
         *   Calculates the angle formed by a specified point,
         *   the origin, and the positive x-axis. By default,
         *   atan2() returns values in the range -π (about
         *   -3.14) to π (3.14). If the angleMode() is DEGREES,
         *   then values are returned in the range -180 to 180.
         *   The atan2() function is most often used for
         *   orienting geometry to the mouse's position. Note:
         *   The y-coordinate of the point is the first
         *   parameter and the x-coordinate is the second
         *   parameter.
         *   @param y y-coordinate of the point.
         *   @param x x-coordinate of the point.
         *   @return arc tangent of the given point.
         */
        atan2(y: number, x: number): number;

        /**
         *   Calculates the cosine of an angle. cos() is useful
         *   for many geometric tasks in creative coding. The
         *   values returned oscillate between -1 and 1 as the
         *   input angle increases. cos() takes into account
         *   the current angleMode.
         *   @param angle the angle.
         *   @return cosine of the angle.
         */
        cos(angle: number): number;

        /**
         *   Calculates the sine of an angle. sin() is useful
         *   for many geometric tasks in creative coding. The
         *   values returned oscillate between -1 and 1 as the
         *   input angle increases. sin() takes into account
         *   the current angleMode.
         *   @param angle the angle.
         *   @return sine of the angle.
         */
        sin(angle: number): number;

        /**
         *   Calculates the tangent of an angle. tan() is
         *   useful for many geometric tasks in creative
         *   coding. The values returned range from -Infinity
         *   to Infinity and repeat periodically as the input
         *   angle increases. tan() takes into account the
         *   current angleMode.
         *   @param angle the angle.
         *   @return tangent of the angle.
         */
        tan(angle: number): number;

        /**
         *   Converts an angle measurement in radians to its
         *   corresponding value in degrees. Degrees and
         *   radians are two ways of measuring the same thing.
         *   There are 360 degrees in a circle and 2 × π (about
         *   6.28) radians in a circle. For example, 90° = π ÷
         *   2 (about 1.57) radians. This function doesn't take
         *   into account the current angleMode().
         *   @param radians radians value to convert to
         *   degrees.
         *   @return converted angle.
         */
        degrees(radians: number): number;

        /**
         *   Converts an angle measurement in degrees to its
         *   corresponding value in radians. Degrees and
         *   radians are two ways of measuring the same thing.
         *   There are 360 degrees in a circle and 2 × π (about
         *   6.28) radians in a circle. For example, 90° = π ÷
         *   2 (about 1.57) radians. This function doesn't take
         *   into account the current angleMode().
         *   @param degrees degree value to convert to radians.
         *   @return converted angle.
         */
        radians(degrees: number): number;

        /**
         *   Changes the way trigonometric functions interpret
         *   angle values. By default, the mode is RADIANS.
         *   Calling angleMode() with no arguments returns
         *   current angle mode.
         *   @param mode either RADIANS or DEGREES.
         */
        angleMode(mode: ANGLE_MODE): void;

        /**
         *   Changes the way trigonometric functions interpret
         *   angle values. By default, the mode is RADIANS.
         *   Calling angleMode() with no arguments returns
         *   current angle mode.
         *   @return mode either RADIANS or DEGREES
         */
        angleMode(): UNKNOWN_P5_CONSTANT;
    }
}
