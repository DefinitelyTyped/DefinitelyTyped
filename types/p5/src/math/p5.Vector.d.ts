// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class Vector {
        /**
         *   A class to describe a two or three-dimensional
         *   vector. A vector is like an arrow pointing in
         *   space. Vectors have both magnitude (length) and
         *   direction. p5.Vector objects are often used to
         *   program motion because they simplify the math. For
         *   example, a moving ball has a position and a
         *   velocity. Position describes where the ball is in
         *   space. The ball's position vector extends from the
         *   origin to the ball's center. Velocity describes
         *   the ball's speed and the direction it's moving. If
         *   the ball is moving straight up, its velocity
         *   vector points straight up. Adding the ball's
         *   velocity vector to its position vector moves it,
         *   as in pos.add(vel). Vector math relies on methods
         *   inside the p5.Vector class.
         *
         *   @param [x] x component of the vector.
         *   @param [y] y component of the vector.
         *   @param [z] z component of the vector.
         */
        constructor(x?: number, y?: number, z?: number);

        /**
         *   Returns a copy of the p5.Vector object.
         *   @param v the p5.Vector to create a copy of
         *   @return the copy of the p5.Vector object
         */
        static copy(v: Vector): Vector;

        /**
         *   Adds to a vector's x, y, and z components using
         *   separate numbers, another p5.Vector object, or an
         *   array of numbers. Calling add() with no arguments
         *   has no effect. The static version of add(), as in
         *   p5.Vector.add(v2, v1), returns a new p5.Vector
         *   object and doesn't change the originals.
         *   @param v1 A p5.Vector to add
         *   @param v2 A p5.Vector to add
         *   @param [target] vector to receive the result.
         *   @return resulting p5.Vector.
         */
        static add(v1: Vector, v2: Vector, target?: Vector): Vector;

        /**
         *   Performs modulo (remainder) division with a
         *   vector's x, y, and z components using separate
         *   numbers, another p5.Vector object, or an array of
         *   numbers. The static version of rem() as in
         *   p5.Vector.rem(v2, v1), returns a new p5.Vector
         *   object and doesn't change the originals.
         *   @param v1 The dividend p5.Vector
         *   @param v2 The divisor p5.Vector
         */
        static rem(v1: Vector, v2: Vector): void;

        /**
         *   Performs modulo (remainder) division with a
         *   vector's x, y, and z components using separate
         *   numbers, another p5.Vector object, or an array of
         *   numbers. The static version of rem() as in
         *   p5.Vector.rem(v2, v1), returns a new p5.Vector
         *   object and doesn't change the originals.
         *   @param v1 The dividend p5.Vector
         *   @param v2 The divisor p5.Vector
         *   @return The resulting p5.Vector
         */
        static rem(v1: Vector, v2: Vector): Vector;

        /**
         *   Subtracts from a vector's x, y, and z components
         *   using separate numbers, another p5.Vector object,
         *   or an array of numbers. Calling sub() with no
         *   arguments has no effect. The static version of
         *   sub(), as in p5.Vector.sub(v2, v1), returns a new
         *   p5.Vector object and doesn't change the originals.
         *   @param v1 A p5.Vector to subtract from
         *   @param v2 A p5.Vector to subtract
         *   @param [target] vector to receive the result.
         *   @return The resulting p5.Vector
         */
        static sub(v1: Vector, v2: Vector, target?: Vector): Vector;

        /**
         *   Multiplies a vector's x, y, and z components by
         *   the same number, separate numbers, the components
         *   of another p5.Vector object, or an array of
         *   numbers. Calling mult() with no arguments has no
         *   effect. The static version of mult(), as in
         *   p5.Vector.mult(v, 2), returns a new p5.Vector
         *   object and doesn't change the originals.
         *   @param x number to multiply with the x component
         *   of the vector.
         *   @param y number to multiply with the y component
         *   of the vector.
         *   @param [z] number to multiply with the z component
         *   of the vector.
         *   @return resulting new p5.Vector.
         */
        static mult(x: number, y: number, z?: number): Vector;

        /**
         *   Multiplies a vector's x, y, and z components by
         *   the same number, separate numbers, the components
         *   of another p5.Vector object, or an array of
         *   numbers. Calling mult() with no arguments has no
         *   effect. The static version of mult(), as in
         *   p5.Vector.mult(v, 2), returns a new p5.Vector
         *   object and doesn't change the originals.
         *   @param v vector to multiply with the components of
         *   the original vector.
         *   @param n The number to multiply with the vector
         *   @param [target] vector to receive the result.
         */
        static mult(v: Vector, n: number, target?: Vector): void;

        /**
         *   Multiplies a vector's x, y, and z components by
         *   the same number, separate numbers, the components
         *   of another p5.Vector object, or an array of
         *   numbers. Calling mult() with no arguments has no
         *   effect. The static version of mult(), as in
         *   p5.Vector.mult(v, 2), returns a new p5.Vector
         *   object and doesn't change the originals.
         *   @param [target] vector to receive the result.
         */
        static mult(v0: Vector, v1: Vector, target?: Vector): void;

        /**
         *   Multiplies a vector's x, y, and z components by
         *   the same number, separate numbers, the components
         *   of another p5.Vector object, or an array of
         *   numbers. Calling mult() with no arguments has no
         *   effect. The static version of mult(), as in
         *   p5.Vector.mult(v, 2), returns a new p5.Vector
         *   object and doesn't change the originals.
         *   @param arr array to multiply with the components
         *   of the vector.
         *   @param [target] vector to receive the result.
         */
        static mult(v0: Vector, arr: number[], target?: Vector): void;

        /**
         *   Divides a vector's x, y, and z components by the
         *   same number, separate numbers, the components of
         *   another p5.Vector object, or an array of numbers.
         *   Calling div() with no arguments has no effect. The
         *   static version of div(), as in p5.Vector.div(v,
         *   2), returns a new p5.Vector object and doesn't
         *   change the originals.
         *   @param x number to divide with the x component of
         *   the vector.
         *   @param y number to divide with the y component of
         *   the vector.
         *   @param [z] number to divide with the z component
         *   of the vector.
         *   @return The resulting new p5.Vector
         */
        static div(x: number, y: number, z?: number): Vector;

        /**
         *   Divides a vector's x, y, and z components by the
         *   same number, separate numbers, the components of
         *   another p5.Vector object, or an array of numbers.
         *   Calling div() with no arguments has no effect. The
         *   static version of div(), as in p5.Vector.div(v,
         *   2), returns a new p5.Vector object and doesn't
         *   change the originals.
         *   @param v vector to divide the components of the
         *   original vector by.
         *   @param n The number to divide the vector by
         *   @param [target] The vector to receive the result
         */
        static div(v: Vector, n: number, target?: Vector): void;

        /**
         *   Divides a vector's x, y, and z components by the
         *   same number, separate numbers, the components of
         *   another p5.Vector object, or an array of numbers.
         *   Calling div() with no arguments has no effect. The
         *   static version of div(), as in p5.Vector.div(v,
         *   2), returns a new p5.Vector object and doesn't
         *   change the originals.
         *   @param [target] The vector to receive the result
         */
        static div(v0: Vector, v1: Vector, target?: Vector): void;

        /**
         *   Divides a vector's x, y, and z components by the
         *   same number, separate numbers, the components of
         *   another p5.Vector object, or an array of numbers.
         *   Calling div() with no arguments has no effect. The
         *   static version of div(), as in p5.Vector.div(v,
         *   2), returns a new p5.Vector object and doesn't
         *   change the originals.
         *   @param arr array to divide the components of the
         *   vector by.
         *   @param [target] The vector to receive the result
         */
        static div(v0: Vector, arr: number[], target?: Vector): void;

        /**
         *   Returns the magnitude (length) of the vector.
         *   @param vecT The vector to return the magnitude of
         *   @return The magnitude of vecT
         */
        static mag(vecT: Vector): number;

        /**
         *   Returns the magnitude (length) of the vector
         *   squared.
         *   @param vecT the vector to return the squared
         *   magnitude of
         *   @return the squared magnitude of vecT
         */
        static magSq(vecT: Vector): number;

        /**
         *   Returns the dot product of two vectors. The dot
         *   product is a number that describes the overlap
         *   between two vectors. Visually, the dot product can
         *   be thought of as the "shadow" one vector casts on
         *   another. The dot product's magnitude is largest
         *   when two vectors point in the same or opposite
         *   directions. Its magnitude is 0 when two vectors
         *   form a right angle. The version of dot() with one
         *   parameter interprets it as another p5.Vector
         *   object.
         *
         *   The version of dot() with multiple parameters
         *   interprets them as the x, y, and z components of
         *   another vector.
         *
         *   The static version of dot(), as in
         *   p5.Vector.dot(v1, v2), is the same as calling
         *   v1.dot(v2).
         *   @param v1 first p5.Vector.
         *   @param v2 second p5.Vector.
         *   @return dot product.
         */
        static dot(v1: Vector, v2: Vector): number;

        /**
         *   Returns the cross product of two vectors. The
         *   cross product is a vector that points straight out
         *   of the plane created by two vectors. The cross
         *   product's magnitude is the area of the
         *   parallelogram formed by the original two vectors.
         *   The static version of cross(), as in
         *   p5.Vector.cross(v1, v2), is the same as calling
         *   v1.cross(v2).
         *   @param v1 first p5.Vector.
         *   @param v2 second p5.Vector.
         *   @return cross product.
         */
        static cross(v1: Vector, v2: Vector): number;

        /**
         *   Returns the distance between two points
         *   represented by vectors. A point's coordinates can
         *   be thought of as a vector's components. The static
         *   version of dist(), as in p5.Vector.dist(v1, v2),
         *   is the same as calling v1.dist(v2).
         *
         *   Use dist() to calculate the distance between
         *   points using coordinates as in dist(x1, y1, x2,
         *   y2).
         *   @param v1 The first p5.Vector
         *   @param v2 The second p5.Vector
         *   @return The distance
         */
        static dist(v1: Vector, v2: Vector): number;

        /**
         *   Scales the components of a p5.Vector object so
         *   that its magnitude is 1. The static version of
         *   normalize(), as in p5.Vector.normalize(v), returns
         *   a new p5.Vector object and doesn't change the
         *   original.
         *   @param v The vector to normalize
         *   @param [target] The vector to receive the result
         *   @return The vector v, normalized to a length of 1
         */
        static normalize(v: Vector, target?: Vector): Vector;

        /**
         *   Limits a vector's magnitude to a maximum value.
         *   The static version of limit(), as in
         *   p5.Vector.limit(v, 5), returns a new p5.Vector
         *   object and doesn't change the original.
         *   @param v the vector to limit
         *   @param max maximum magnitude for the vector.
         *   @param [target] the vector to receive the result
         *   (Optional)
         *   @return v with a magnitude limited to max
         */
        static limit(v: Vector, max: number, target?: Vector): Vector;

        /**
         *   Sets a vector's magnitude to a given value. The
         *   static version of setMag(), as in
         *   p5.Vector.setMag(v, 10), returns a new p5.Vector
         *   object and doesn't change the original.
         *   @param v the vector to set the magnitude of
         *   @param len new length for this vector.
         *   @param [target] the vector to receive the result
         *   (Optional)
         *   @return v with a magnitude set to len
         */
        static setMag(v: Vector, len: number, target?: Vector): Vector;

        /**
         *   Calculates the angle a 2D vector makes with the
         *   positive x-axis. Angles increase in the clockwise
         *   direction. If the vector was created with
         *   createVector(), heading() returns angles in the
         *   units of the current angleMode().
         *
         *   The static version of heading(), as in
         *   p5.Vector.heading(v), works the same way.
         *   @param v the vector to find the angle of
         *   @return the angle of rotation
         */
        static heading(v: Vector): number;

        /**
         *   Rotates a 2D vector by an angle without changing
         *   its magnitude. By convention, the positive x-axis
         *   has an angle of 0. Angles increase in the
         *   clockwise direction. If the vector was created
         *   with createVector(), rotate() uses the units of
         *   the current angleMode().
         *
         *   The static version of rotate(), as in
         *   p5.Vector.rotate(v, PI), returns a new p5.Vector
         *   object and doesn't change the original.
         *   @param angle angle of rotation.
         *   @param [target] The vector to receive the result
         */
        static rotate(v: Vector, angle: number, target?: Vector): void;

        /**
         *   Returns the angle between two vectors. The angles
         *   returned are signed, which means that
         *   v1.angleBetween(v2) === -v2.angleBetween(v1). If
         *   the vector was created with createVector(),
         *   angleBetween() returns angles in the units of the
         *   current angleMode().
         *   @param v1 the first vector.
         *   @param v2 the second vector.
         *   @return angle between the two vectors.
         */
        static angleBetween(v1: Vector, v2: Vector): number;

        /**
         *   Calculates new x, y, and z components that are
         *   proportionally the same distance between two
         *   vectors. The amt parameter is the amount to
         *   interpolate between the old vector and the new
         *   vector. 0.0 keeps all components equal to the old
         *   vector's, 0.5 is halfway between, and 1.0 sets all
         *   components equal to the new vector's. The static
         *   version of lerp(), as in p5.Vector.lerp(v0, v1,
         *   0.5), returns a new p5.Vector object and doesn't
         *   change the original.
         *   @param amt amount of interpolation between 0.0
         *   (old vector) and 1.0 (new vector). 0.5 is halfway
         *   between.
         *   @param [target] The vector to receive the result
         *   @return The lerped value
         */
        static lerp(v1: Vector, v2: Vector, amt: number, target?: Vector): Vector;

        /**
         *   Calculates a new heading and magnitude that are
         *   between two vectors. The amt parameter is the
         *   amount to interpolate between the old vector and
         *   the new vector. 0.0 keeps the heading and
         *   magnitude equal to the old vector's, 0.5 sets them
         *   halfway between, and 1.0 sets the heading and
         *   magnitude equal to the new vector's. slerp()
         *   differs from lerp() because it interpolates
         *   magnitude. Calling v0.slerp(v1, 0.5) sets v0's
         *   magnitude to a value halfway between its original
         *   magnitude and v1's. Calling v0.lerp(v1, 0.5) makes
         *   no such guarantee.
         *
         *   The static version of slerp(), as in
         *   p5.Vector.slerp(v0, v1, 0.5), returns a new
         *   p5.Vector object and doesn't change the original.
         *   @param v1 old vector.
         *   @param v2 new vector.
         *   @param amt amount of interpolation between 0.0
         *   (old vector) and 1.0 (new vector). 0.5 is halfway
         *   between.
         *   @param [target] vector to receive the result.
         *   @return slerped vector between v1 and v2
         */
        static slerp(v1: Vector, v2: Vector, amt: number, target?: Vector): Vector;

        /**
         *   Reflects a vector about a line in 2D or a plane in
         *   3D. The orientation of the line or plane is
         *   described by a normal vector that points away from
         *   the shape. The static version of reflect(), as in
         *   p5.Vector.reflect(v, n), returns a new p5.Vector
         *   object and doesn't change the original.
         *   @param incidentVector vector to be reflected.
         *   @param surfaceNormal p5.Vector to reflect about.
         *   @param [target] vector to receive the result.
         *   @return the reflected vector
         */
        static reflect(incidentVector: Vector, surfaceNormal: Vector, target?: Vector): Vector;

        /**
         *   Returns the vector's components as an array of
         *   numbers.
         *   @param v the vector to convert to an array
         *   @return an Array with the 3 values
         */
        static array(v: Vector): number[];

        /**
         *   Returns true if the vector's components are all
         *   the same as another vector's and false if not. The
         *   version of equals() with one parameter interprets
         *   it as another p5.Vector object.
         *
         *   The version of equals() with multiple parameters
         *   interprets them as the components of another
         *   vector. Any missing parameters are assigned the
         *   value 0.
         *
         *   The static version of equals(), as in
         *   p5.Vector.equals(v0, v1), interprets both
         *   parameters as p5.Vector objects.
         *   @param v1 the first vector to compare
         *   @param v2 the second vector to compare
         */
        static equals(v1: Vector | any[], v2: Vector | any[]): boolean;

        /**
         *   Make a new 2D vector from an angle.
         *   @param angle desired angle, in radians. Unaffected
         *   by angleMode().
         *   @param [length] length of the new vector (defaults
         *   to 1).
         *   @return new p5.Vector object.
         */
        static fromAngle(angle: number, length?: number): Vector;

        /**
         *   Make a new 3D vector from a pair of ISO spherical
         *   angles.
         *   @param theta polar angle in radians (zero is up).
         *   @param phi azimuthal angle in radians (zero is out
         *   of the screen).
         *   @param [length] length of the new vector (defaults
         *   to 1).
         *   @return new p5.Vector object.
         */
        static fromAngles(theta: number, phi: number, length?: number): Vector;

        /**
         *   Make a new 2D unit vector with a random heading.
         *   @return new p5.Vector object.
         */
        static random2D(): Vector;

        /**
         *   Make a new 3D unit vector with a random heading.
         *   @return new p5.Vector object.
         */
        static random3D(): Vector;

        /**
         *   Returns a string representation of a vector. This
         *   method is useful for printing vectors to the
         *   console while debugging.
         *   @return string representation of the vector.
         */
        toString(): string;

        /**
         *   Sets the x, y, and z components of the vector
         *   using separate numbers, a p5.Vector object, or an
         *   array of numbers. Calling set() with no arguments
         *   sets the vector's components to 0.
         *   @param [x] x component of the vector.
         *   @param [y] y component of the vector.
         *   @param [z] z component of the vector.
         *   @chainable
         */
        set(x?: number, y?: number, z?: number): Vector;

        /**
         *   Sets the x, y, and z components of the vector
         *   using separate numbers, a p5.Vector object, or an
         *   array of numbers. Calling set() with no arguments
         *   sets the vector's components to 0.
         *   @param value vector to set.
         *   @chainable
         */
        set(value: Vector | number[]): Vector;

        /**
         *   Returns a copy of the p5.Vector object.
         *   @return copy of the p5.Vector object.
         */
        copy(): Vector;

        /**
         *   Adds to a vector's x, y, and z components using
         *   separate numbers, another p5.Vector object, or an
         *   array of numbers. Calling add() with no arguments
         *   has no effect. The static version of add(), as in
         *   p5.Vector.add(v2, v1), returns a new p5.Vector
         *   object and doesn't change the originals.
         *   @param x x component of the vector to be added.
         *   @param [y] y component of the vector to be added.
         *   @param [z] z component of the vector to be added.
         *   @chainable
         */
        add(x: number, y?: number, z?: number): Vector;

        /**
         *   Adds to a vector's x, y, and z components using
         *   separate numbers, another p5.Vector object, or an
         *   array of numbers. Calling add() with no arguments
         *   has no effect. The static version of add(), as in
         *   p5.Vector.add(v2, v1), returns a new p5.Vector
         *   object and doesn't change the originals.
         *   @param value The vector to add
         *   @chainable
         */
        add(value: Vector | number[]): Vector;

        /**
         *   Performs modulo (remainder) division with a
         *   vector's x, y, and z components using separate
         *   numbers, another p5.Vector object, or an array of
         *   numbers. The static version of rem() as in
         *   p5.Vector.rem(v2, v1), returns a new p5.Vector
         *   object and doesn't change the originals.
         *   @param x x component of divisor vector.
         *   @param y y component of divisor vector.
         *   @param z z component of divisor vector.
         *   @chainable
         */
        rem(x: number, y: number, z: number): Vector;

        /**
         *   Performs modulo (remainder) division with a
         *   vector's x, y, and z components using separate
         *   numbers, another p5.Vector object, or an array of
         *   numbers. The static version of rem() as in
         *   p5.Vector.rem(v2, v1), returns a new p5.Vector
         *   object and doesn't change the originals.
         *   @param value divisor vector.
         *   @chainable
         */
        rem(value: Vector | number[]): Vector;

        /**
         *   Subtracts from a vector's x, y, and z components
         *   using separate numbers, another p5.Vector object,
         *   or an array of numbers. Calling sub() with no
         *   arguments has no effect. The static version of
         *   sub(), as in p5.Vector.sub(v2, v1), returns a new
         *   p5.Vector object and doesn't change the originals.
         *   @param x x component of the vector to subtract.
         *   @param [y] y component of the vector to subtract.
         *   @param [z] z component of the vector to subtract.
         *   @chainable
         */
        sub(x: number, y?: number, z?: number): Vector;

        /**
         *   Subtracts from a vector's x, y, and z components
         *   using separate numbers, another p5.Vector object,
         *   or an array of numbers. Calling sub() with no
         *   arguments has no effect. The static version of
         *   sub(), as in p5.Vector.sub(v2, v1), returns a new
         *   p5.Vector object and doesn't change the originals.
         *   @param value the vector to subtract
         *   @chainable
         */
        sub(value: Vector | number[]): Vector;

        /**
         *   Multiplies a vector's x, y, and z components by
         *   the same number, separate numbers, the components
         *   of another p5.Vector object, or an array of
         *   numbers. Calling mult() with no arguments has no
         *   effect. The static version of mult(), as in
         *   p5.Vector.mult(v, 2), returns a new p5.Vector
         *   object and doesn't change the originals.
         *   @param n The number to multiply with the vector
         *   @chainable
         */
        mult(n: number): Vector;

        /**
         *   Multiplies a vector's x, y, and z components by
         *   the same number, separate numbers, the components
         *   of another p5.Vector object, or an array of
         *   numbers. Calling mult() with no arguments has no
         *   effect. The static version of mult(), as in
         *   p5.Vector.mult(v, 2), returns a new p5.Vector
         *   object and doesn't change the originals.
         *   @param x number to multiply with the x component
         *   of the vector.
         *   @param y number to multiply with the y component
         *   of the vector.
         *   @param [z] number to multiply with the z component
         *   of the vector.
         *   @chainable
         */
        mult(x: number, y: number, z?: number): Vector;

        /**
         *   Multiplies a vector's x, y, and z components by
         *   the same number, separate numbers, the components
         *   of another p5.Vector object, or an array of
         *   numbers. Calling mult() with no arguments has no
         *   effect. The static version of mult(), as in
         *   p5.Vector.mult(v, 2), returns a new p5.Vector
         *   object and doesn't change the originals.
         *   @param arr array to multiply with the components
         *   of the vector.
         *   @chainable
         */
        mult(arr: number[]): Vector;

        /**
         *   Multiplies a vector's x, y, and z components by
         *   the same number, separate numbers, the components
         *   of another p5.Vector object, or an array of
         *   numbers. Calling mult() with no arguments has no
         *   effect. The static version of mult(), as in
         *   p5.Vector.mult(v, 2), returns a new p5.Vector
         *   object and doesn't change the originals.
         *   @param v vector to multiply with the components of
         *   the original vector.
         *   @chainable
         */
        mult(v: Vector): Vector;

        /**
         *   Divides a vector's x, y, and z components by the
         *   same number, separate numbers, the components of
         *   another p5.Vector object, or an array of numbers.
         *   Calling div() with no arguments has no effect. The
         *   static version of div(), as in p5.Vector.div(v,
         *   2), returns a new p5.Vector object and doesn't
         *   change the originals.
         *   @param n The number to divide the vector by
         *   @chainable
         */
        div(n: number): Vector;

        /**
         *   Divides a vector's x, y, and z components by the
         *   same number, separate numbers, the components of
         *   another p5.Vector object, or an array of numbers.
         *   Calling div() with no arguments has no effect. The
         *   static version of div(), as in p5.Vector.div(v,
         *   2), returns a new p5.Vector object and doesn't
         *   change the originals.
         *   @param x number to divide with the x component of
         *   the vector.
         *   @param y number to divide with the y component of
         *   the vector.
         *   @param [z] number to divide with the z component
         *   of the vector.
         *   @chainable
         */
        div(x: number, y: number, z?: number): Vector;

        /**
         *   Divides a vector's x, y, and z components by the
         *   same number, separate numbers, the components of
         *   another p5.Vector object, or an array of numbers.
         *   Calling div() with no arguments has no effect. The
         *   static version of div(), as in p5.Vector.div(v,
         *   2), returns a new p5.Vector object and doesn't
         *   change the originals.
         *   @param arr array to divide the components of the
         *   vector by.
         *   @chainable
         */
        div(arr: number[]): Vector;

        /**
         *   Divides a vector's x, y, and z components by the
         *   same number, separate numbers, the components of
         *   another p5.Vector object, or an array of numbers.
         *   Calling div() with no arguments has no effect. The
         *   static version of div(), as in p5.Vector.div(v,
         *   2), returns a new p5.Vector object and doesn't
         *   change the originals.
         *   @param v vector to divide the components of the
         *   original vector by.
         *   @chainable
         */
        div(v: Vector): Vector;

        /**
         *   Returns the magnitude (length) of the vector.
         *   @return magnitude of the vector.
         */
        mag(): number;

        /**
         *   Returns the magnitude (length) of the vector
         *   squared.
         *   @return squared magnitude of the vector.
         */
        magSq(): number;

        /**
         *   Returns the dot product of two vectors. The dot
         *   product is a number that describes the overlap
         *   between two vectors. Visually, the dot product can
         *   be thought of as the "shadow" one vector casts on
         *   another. The dot product's magnitude is largest
         *   when two vectors point in the same or opposite
         *   directions. Its magnitude is 0 when two vectors
         *   form a right angle. The version of dot() with one
         *   parameter interprets it as another p5.Vector
         *   object.
         *
         *   The version of dot() with multiple parameters
         *   interprets them as the x, y, and z components of
         *   another vector.
         *
         *   The static version of dot(), as in
         *   p5.Vector.dot(v1, v2), is the same as calling
         *   v1.dot(v2).
         *   @param x x component of the vector.
         *   @param [y] y component of the vector.
         *   @param [z] z component of the vector.
         *   @return dot product.
         */
        dot(x: number, y?: number, z?: number): number;

        /**
         *   Returns the dot product of two vectors. The dot
         *   product is a number that describes the overlap
         *   between two vectors. Visually, the dot product can
         *   be thought of as the "shadow" one vector casts on
         *   another. The dot product's magnitude is largest
         *   when two vectors point in the same or opposite
         *   directions. Its magnitude is 0 when two vectors
         *   form a right angle. The version of dot() with one
         *   parameter interprets it as another p5.Vector
         *   object.
         *
         *   The version of dot() with multiple parameters
         *   interprets them as the x, y, and z components of
         *   another vector.
         *
         *   The static version of dot(), as in
         *   p5.Vector.dot(v1, v2), is the same as calling
         *   v1.dot(v2).
         *   @param v p5.Vector to be dotted.
         */
        dot(v: Vector): number;

        /**
         *   Returns the cross product of two vectors. The
         *   cross product is a vector that points straight out
         *   of the plane created by two vectors. The cross
         *   product's magnitude is the area of the
         *   parallelogram formed by the original two vectors.
         *   The static version of cross(), as in
         *   p5.Vector.cross(v1, v2), is the same as calling
         *   v1.cross(v2).
         *   @param v p5.Vector to be crossed.
         *   @return cross product as a p5.Vector.
         */
        cross(v: Vector): Vector;

        /**
         *   Returns the distance between two points
         *   represented by vectors. A point's coordinates can
         *   be thought of as a vector's components. The static
         *   version of dist(), as in p5.Vector.dist(v1, v2),
         *   is the same as calling v1.dist(v2).
         *
         *   Use dist() to calculate the distance between
         *   points using coordinates as in dist(x1, y1, x2,
         *   y2).
         *   @param v x, y, and z coordinates of a p5.Vector.
         *   @return distance.
         */
        dist(v: Vector): number;

        /**
         *   Scales the components of a p5.Vector object so
         *   that its magnitude is 1. The static version of
         *   normalize(), as in p5.Vector.normalize(v), returns
         *   a new p5.Vector object and doesn't change the
         *   original.
         *   @return normalized p5.Vector.
         */
        normalize(): Vector;

        /**
         *   Limits a vector's magnitude to a maximum value.
         *   The static version of limit(), as in
         *   p5.Vector.limit(v, 5), returns a new p5.Vector
         *   object and doesn't change the original.
         *   @param max maximum magnitude for the vector.
         *   @chainable
         */
        limit(max: number): Vector;

        /**
         *   Sets a vector's magnitude to a given value. The
         *   static version of setMag(), as in
         *   p5.Vector.setMag(v, 10), returns a new p5.Vector
         *   object and doesn't change the original.
         *   @param len new length for this vector.
         *   @chainable
         */
        setMag(len: number): Vector;

        /**
         *   Calculates the angle a 2D vector makes with the
         *   positive x-axis. Angles increase in the clockwise
         *   direction. If the vector was created with
         *   createVector(), heading() returns angles in the
         *   units of the current angleMode().
         *
         *   The static version of heading(), as in
         *   p5.Vector.heading(v), works the same way.
         *   @return angle of rotation.
         */
        heading(): number;

        /**
         *   Rotates a 2D vector to a specific angle without
         *   changing its magnitude. By convention, the
         *   positive x-axis has an angle of 0. Angles increase
         *   in the clockwise direction. If the vector was
         *   created with createVector(), setHeading() uses the
         *   units of the current angleMode().
         *   @param angle angle of rotation.
         *   @chainable
         */
        setHeading(angle: number): Vector;

        /**
         *   Rotates a 2D vector by an angle without changing
         *   its magnitude. By convention, the positive x-axis
         *   has an angle of 0. Angles increase in the
         *   clockwise direction. If the vector was created
         *   with createVector(), rotate() uses the units of
         *   the current angleMode().
         *
         *   The static version of rotate(), as in
         *   p5.Vector.rotate(v, PI), returns a new p5.Vector
         *   object and doesn't change the original.
         *   @param angle angle of rotation.
         *   @chainable
         */
        rotate(angle: number): Vector;

        /**
         *   Returns the angle between two vectors. The angles
         *   returned are signed, which means that
         *   v1.angleBetween(v2) === -v2.angleBetween(v1). If
         *   the vector was created with createVector(),
         *   angleBetween() returns angles in the units of the
         *   current angleMode().
         *   @param value x, y, and z components of a
         *   p5.Vector.
         *   @return angle between the vectors.
         */
        angleBetween(value: Vector): number;

        /**
         *   Calculates new x, y, and z components that are
         *   proportionally the same distance between two
         *   vectors. The amt parameter is the amount to
         *   interpolate between the old vector and the new
         *   vector. 0.0 keeps all components equal to the old
         *   vector's, 0.5 is halfway between, and 1.0 sets all
         *   components equal to the new vector's. The static
         *   version of lerp(), as in p5.Vector.lerp(v0, v1,
         *   0.5), returns a new p5.Vector object and doesn't
         *   change the original.
         *   @param x x component.
         *   @param y y component.
         *   @param z z component.
         *   @param amt amount of interpolation between 0.0
         *   (old vector) and 1.0 (new vector). 0.5 is halfway
         *   between.
         *   @chainable
         */
        lerp(x: number, y: number, z: number, amt: number): Vector;

        /**
         *   Calculates new x, y, and z components that are
         *   proportionally the same distance between two
         *   vectors. The amt parameter is the amount to
         *   interpolate between the old vector and the new
         *   vector. 0.0 keeps all components equal to the old
         *   vector's, 0.5 is halfway between, and 1.0 sets all
         *   components equal to the new vector's. The static
         *   version of lerp(), as in p5.Vector.lerp(v0, v1,
         *   0.5), returns a new p5.Vector object and doesn't
         *   change the original.
         *   @param v p5.Vector to lerp toward.
         *   @param amt amount of interpolation between 0.0
         *   (old vector) and 1.0 (new vector). 0.5 is halfway
         *   between.
         *   @chainable
         */
        lerp(v: Vector, amt: number): Vector;

        /**
         *   Calculates a new heading and magnitude that are
         *   between two vectors. The amt parameter is the
         *   amount to interpolate between the old vector and
         *   the new vector. 0.0 keeps the heading and
         *   magnitude equal to the old vector's, 0.5 sets them
         *   halfway between, and 1.0 sets the heading and
         *   magnitude equal to the new vector's. slerp()
         *   differs from lerp() because it interpolates
         *   magnitude. Calling v0.slerp(v1, 0.5) sets v0's
         *   magnitude to a value halfway between its original
         *   magnitude and v1's. Calling v0.lerp(v1, 0.5) makes
         *   no such guarantee.
         *
         *   The static version of slerp(), as in
         *   p5.Vector.slerp(v0, v1, 0.5), returns a new
         *   p5.Vector object and doesn't change the original.
         *   @param v p5.Vector to slerp toward.
         *   @param amt amount of interpolation between 0.0
         *   (old vector) and 1.0 (new vector). 0.5 is halfway
         *   between.
         */
        slerp(v: Vector, amt: number): Vector;

        /**
         *   Reflects a vector about a line in 2D or a plane in
         *   3D. The orientation of the line or plane is
         *   described by a normal vector that points away from
         *   the shape. The static version of reflect(), as in
         *   p5.Vector.reflect(v, n), returns a new p5.Vector
         *   object and doesn't change the original.
         *   @param surfaceNormal p5.Vector to reflect about.
         *   @chainable
         */
        reflect(surfaceNormal: Vector): Vector;

        /**
         *   Returns the vector's components as an array of
         *   numbers.
         *   @return array with the vector's components.
         */
        array(): number[];

        /**
         *   Returns true if the vector's components are all
         *   the same as another vector's and false if not. The
         *   version of equals() with one parameter interprets
         *   it as another p5.Vector object.
         *
         *   The version of equals() with multiple parameters
         *   interprets them as the components of another
         *   vector. Any missing parameters are assigned the
         *   value 0.
         *
         *   The static version of equals(), as in
         *   p5.Vector.equals(v0, v1), interprets both
         *   parameters as p5.Vector objects.
         *   @param [x] x component of the vector.
         *   @param [y] y component of the vector.
         *   @param [z] z component of the vector.
         *   @return whether the vectors are equal.
         */
        equals(x?: number, y?: number, z?: number): boolean;

        /**
         *   Returns true if the vector's components are all
         *   the same as another vector's and false if not. The
         *   version of equals() with one parameter interprets
         *   it as another p5.Vector object.
         *
         *   The version of equals() with multiple parameters
         *   interprets them as the components of another
         *   vector. Any missing parameters are assigned the
         *   value 0.
         *
         *   The static version of equals(), as in
         *   p5.Vector.equals(v0, v1), interprets both
         *   parameters as p5.Vector objects.
         *   @param value vector to compare.
         */
        equals(value: Vector | any[]): boolean;

        /**
         *   The x component of the vector
         */
        x: number;

        /**
         *   The y component of the vector
         */
        y: number;

        /**
         *   The z component of the vector
         */
        z: number;
    }
}
