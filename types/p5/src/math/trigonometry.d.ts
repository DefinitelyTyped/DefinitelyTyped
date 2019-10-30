// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   The inverse of cos(), returns the arc cosine of a
         *   value. This function expects the values in the
         *   range of -1 to 1 and values are returned in the
         *   range 0 to PI (3.1415927).
         *   @param value the value whose arc cosine is to be
         *   returned
         *   @return the arc cosine of the given value
         */
        acos(value: number): number;

        /**
         *   The inverse of sin(), returns the arc sine of a
         *   value. This function expects the values in the
         *   range of -1 to 1 and values are returned in the
         *   range -PI/2 to PI/2.
         *   @param value the value whose arc sine is to be
         *   returned
         *   @return the arc sine of the given value
         */
        asin(value: number): number;

        /**
         *   The inverse of tan(), returns the arc tangent of a
         *   value. This function expects the values in the
         *   range of -Infinity to Infinity (exclusive) and
         *   values are returned in the range -PI/2 to PI/2.
         *   @param value the value whose arc tangent is to be
         *   returned
         *   @return the arc tangent of the given value
         */
        atan(value: number): number;

        /**
         *   Calculates the angle (in radians) from a specified
         *   point to the coordinate origin as measured from
         *   the positive x-axis. Values are returned as a
         *   float in the range from PI to -PI. The atan2()
         *   function is most often used for orienting geometry
         *   to the position of the cursor.  Note: The
         *   y-coordinate of the point is the first parameter,
         *   and the x-coordinate is the second parameter, due
         *   the the structure of calculating the tangent.
         *   @param y y-coordinate of the point
         *   @param x x-coordinate of the point
         *   @return the arc tangent of the given point
         */
        atan2(y: number, x: number): number;

        /**
         *   Calculates the cosine of an angle. This function
         *   takes into account the current angleMode. Values
         *   are returned in the range -1 to 1.
         *   @param angle the angle
         *   @return the cosine of the angle
         */
        cos(angle: number): number;

        /**
         *   Calculates the sine of an angle. This function
         *   takes into account the current angleMode. Values
         *   are returned in the range -1 to 1.
         *   @param angle the angle
         *   @return the sine of the angle
         */
        sin(angle: number): number;

        /**
         *   Calculates the tangent of an angle. This function
         *   takes into account the current angleMode. Values
         *   are returned in the range -1 to 1.
         *   @param angle the angle
         *   @return the tangent of the angle
         */
        tan(angle: number): number;

        /**
         *   Converts a radian measurement to its corresponding
         *   value in degrees. Radians and degrees are two ways
         *   of measuring the same thing. There are 360 degrees
         *   in a circle and 2*PI radians in a circle. For
         *   example, 90° = PI/2 = 1.5707964. This function
         *   does not take into account the current angleMode.
         *   @param radians the radians value to convert to
         *   degrees
         *   @return the converted angle
         */
        degrees(radians: number): number;

        /**
         *   Converts a degree measurement to its corresponding
         *   value in radians. Radians and degrees are two ways
         *   of measuring the same thing. There are 360 degrees
         *   in a circle and 2*PI radians in a circle. For
         *   example, 90° = PI/2 = 1.5707964. This function
         *   does not take into account the current angleMode.
         *   @param degrees the degree value to convert to
         *   radians
         *   @return the converted angle
         */
        radians(degrees: number): number;

        /**
         *   Sets the current mode of p5 to given mode. Default
         *   mode is RADIANS.
         *   @param mode either RADIANS or DEGREES
         */
        angleMode(mode: ANGLE_MODE): void;
    }
}
