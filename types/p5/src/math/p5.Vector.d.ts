// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class Vector {
        /**
         *   A class to describe a two or three-dimensional
         *   vector, specifically a Euclidean (also known as
         *   geometric) vector. A vector is an entity that has
         *   both magnitude and direction. The datatype,
         *   however, stores the components of the vector (x, y
         *   for 2D; or x, y, z for 3D). The magnitude and
         *   direction can be accessed via the methods
         *   p5.Vector.mag() and heading(). In many of the
         *   p5.js examples, you will see p5.Vector used to
         *   describe a position, velocity, or acceleration.
         *   For example, if you consider a rectangle moving
         *   across the screen, at any given instant it has a
         *   position (a vector that points from the origin to
         *   its location), a velocity (the rate at which the
         *   object's position changes per time unit, expressed
         *   as a vector), and acceleration (the rate at which
         *   the object's velocity changes per time unit,
         *   expressed as a vector).
         *
         *   Since vectors represent groupings of values, we
         *   cannot simply use traditional
         *   addition/multiplication/etc. Instead, we'll need
         *   to do some "vector" math, which is made easy by
         *   the methods inside the p5.Vector class.
         *
         *   @param [x] x component of the vector
         *   @param [y] y component of the vector
         *   @param [z] z component of the vector
         */
        constructor(x?: number, y?: number, z?: number);

        /**
         *   Gets a copy of the vector, returns a p5.Vector
         *   object.
         *   @param v the p5.Vector to create a copy of
         *   @return the copy of the p5.Vector object
         */
        static copy(v: Vector): Vector;

        /**
         *   Adds x, y, and z components to a vector, adds one
         *   vector to another, or adds two independent vectors
         *   together. The version of the method that adds two
         *   vectors together is a static method and returns a
         *   p5.Vector, the others act directly on the vector.
         *   Additionally, you may provide arguments to this
         *   method as an array. See the examples for more
         *   context.
         *   @param v1 A p5.Vector to add
         *   @param v2 A p5.Vector to add
         *   @param [target] The vector to receive the result
         *   @return The resulting p5.Vector
         */
        static add(v1: Vector, v2: Vector, target?: Vector): Vector;

        /**
         *   Gives the remainder of a vector when it is divided
         *   by another vector. See examples for more context.
         *   @param v1 The dividend p5.Vector
         *   @param v2 The divisor p5.Vector
         */
        static rem(v1: Vector, v2: Vector): void;

        /**
         *   Gives the remainder of a vector when it is divided
         *   by another vector. See examples for more context.
         *   @param v1 The dividend p5.Vector
         *   @param v2 The divisor p5.Vector
         *   @return The resulting p5.Vector
         */
        static rem(v1: Vector, v2: Vector): Vector;

        /**
         *   Subtracts x, y, and z components from a vector,
         *   subtracts one vector from another, or subtracts
         *   two independent vectors. The version of the method
         *   that subtracts two vectors is a static method and
         *   returns a p5.Vector, the others act directly on
         *   the vector. Additionally, you may provide
         *   arguments to this method as an array. See the
         *   examples for more context.
         *   @param v1 A p5.Vector to subtract from
         *   @param v2 A p5.Vector to subtract
         *   @param [target] The vector to receive the result
         *   @return The resulting p5.Vector
         */
        static sub(v1: Vector, v2: Vector, target?: Vector): Vector;

        /**
         *   Multiplies the vector by a scalar, multiplies the
         *   x, y, and z components from a vector, or
         *   multiplies the x, y, and z components of two
         *   independent vectors. When multiplying a vector by
         *   a scalar, the x, y, and z components of the vector
         *   are all multiplied by the scalar. When multiplying
         *   a vector by a vector, the x, y, z components of
         *   both vectors are multiplied by each other (for
         *   example, with two vectors a and b: a.x * b.x, a.y
         *   * b.y, a.z * b.z). The static version of this
         *   method creates a new p5.Vector while the
         *   non-static version acts on the vector directly.
         *   Additionally, you may provide arguments to this
         *   function as an array. See the examples for more
         *   context.
         *   @param x The number to multiply with the x
         *   component of the vector
         *   @param y The number to multiply with the y
         *   component of the vector
         *   @param [z] The number to multiply with the z
         *   component of the vector
         *   @return The resulting new p5.Vector
         */
        static mult(x: number, y: number, z?: number): Vector;

        /**
         *   Multiplies the vector by a scalar, multiplies the
         *   x, y, and z components from a vector, or
         *   multiplies the x, y, and z components of two
         *   independent vectors. When multiplying a vector by
         *   a scalar, the x, y, and z components of the vector
         *   are all multiplied by the scalar. When multiplying
         *   a vector by a vector, the x, y, z components of
         *   both vectors are multiplied by each other (for
         *   example, with two vectors a and b: a.x * b.x, a.y
         *   * b.y, a.z * b.z). The static version of this
         *   method creates a new p5.Vector while the
         *   non-static version acts on the vector directly.
         *   Additionally, you may provide arguments to this
         *   function as an array. See the examples for more
         *   context.
         *   @param v The vector to multiply with the
         *   components of the original vector
         *   @param n The number to multiply with the vector
         *   @param [target] the vector to receive the result
         */
        static mult(v: Vector, n: number, target?: Vector): void;

        /**
         *   Multiplies the vector by a scalar, multiplies the
         *   x, y, and z components from a vector, or
         *   multiplies the x, y, and z components of two
         *   independent vectors. When multiplying a vector by
         *   a scalar, the x, y, and z components of the vector
         *   are all multiplied by the scalar. When multiplying
         *   a vector by a vector, the x, y, z components of
         *   both vectors are multiplied by each other (for
         *   example, with two vectors a and b: a.x * b.x, a.y
         *   * b.y, a.z * b.z). The static version of this
         *   method creates a new p5.Vector while the
         *   non-static version acts on the vector directly.
         *   Additionally, you may provide arguments to this
         *   function as an array. See the examples for more
         *   context.
         *   @param [target] the vector to receive the result
         */
        static mult(v0: Vector, v1: Vector, target?: Vector): void;

        /**
         *   Multiplies the vector by a scalar, multiplies the
         *   x, y, and z components from a vector, or
         *   multiplies the x, y, and z components of two
         *   independent vectors. When multiplying a vector by
         *   a scalar, the x, y, and z components of the vector
         *   are all multiplied by the scalar. When multiplying
         *   a vector by a vector, the x, y, z components of
         *   both vectors are multiplied by each other (for
         *   example, with two vectors a and b: a.x * b.x, a.y
         *   * b.y, a.z * b.z). The static version of this
         *   method creates a new p5.Vector while the
         *   non-static version acts on the vector directly.
         *   Additionally, you may provide arguments to this
         *   function as an array. See the examples for more
         *   context.
         *   @param arr The array to multiply with the
         *   components of the vector
         *   @param [target] the vector to receive the result
         */
        static mult(v0: Vector, arr: number[], target?: Vector): void;

        /**
         *   Divides the vector by a scalar, divides a vector
         *   by the x, y, and z arguments, or divides the x, y,
         *   and z components of two vectors against each
         *   other. When dividing a vector by a scalar, the x,
         *   y, and z components of the vector are all divided
         *   by the scalar. When dividing a vector by a vector,
         *   the x, y, z components of the source vector are
         *   treated as the dividend, and the x, y, z
         *   components of the argument is treated as the
         *   divisor. (For example, with two vectors a and b:
         *   a.x / b.x, a.y / b.y, a.z / b.z.) If any component
         *   of the second vector is 0, a division by 0 error
         *   will be logged, unless both two vectors have 0 in
         *   their z components, in which case only the x and y
         *   components will be divided. The static version of
         *   this method creates a new p5.Vector while the
         *   non-static version acts on the vector directly.
         *   Additionally, you may provide arguments to this
         *   method as an array. See the examples for more
         *   context.
         *   @param x The number to divide with the x component
         *   of the vector
         *   @param y The number to divide with the y component
         *   of the vector
         *   @param [z] The number to divide with the z
         *   component of the vector
         *   @return The resulting new p5.Vector
         */
        static div(x: number, y: number, z?: number): Vector;

        /**
         *   Divides the vector by a scalar, divides a vector
         *   by the x, y, and z arguments, or divides the x, y,
         *   and z components of two vectors against each
         *   other. When dividing a vector by a scalar, the x,
         *   y, and z components of the vector are all divided
         *   by the scalar. When dividing a vector by a vector,
         *   the x, y, z components of the source vector are
         *   treated as the dividend, and the x, y, z
         *   components of the argument is treated as the
         *   divisor. (For example, with two vectors a and b:
         *   a.x / b.x, a.y / b.y, a.z / b.z.) If any component
         *   of the second vector is 0, a division by 0 error
         *   will be logged, unless both two vectors have 0 in
         *   their z components, in which case only the x and y
         *   components will be divided. The static version of
         *   this method creates a new p5.Vector while the
         *   non-static version acts on the vector directly.
         *   Additionally, you may provide arguments to this
         *   method as an array. See the examples for more
         *   context.
         *   @param v The vector to divide the components of
         *   the original vector by
         *   @param n The number to divide the vector by
         *   @param [target] The vector to receive the result
         */
        static div(v: Vector, n: number, target?: Vector): void;

        /**
         *   Divides the vector by a scalar, divides a vector
         *   by the x, y, and z arguments, or divides the x, y,
         *   and z components of two vectors against each
         *   other. When dividing a vector by a scalar, the x,
         *   y, and z components of the vector are all divided
         *   by the scalar. When dividing a vector by a vector,
         *   the x, y, z components of the source vector are
         *   treated as the dividend, and the x, y, z
         *   components of the argument is treated as the
         *   divisor. (For example, with two vectors a and b:
         *   a.x / b.x, a.y / b.y, a.z / b.z.) If any component
         *   of the second vector is 0, a division by 0 error
         *   will be logged, unless both two vectors have 0 in
         *   their z components, in which case only the x and y
         *   components will be divided. The static version of
         *   this method creates a new p5.Vector while the
         *   non-static version acts on the vector directly.
         *   Additionally, you may provide arguments to this
         *   method as an array. See the examples for more
         *   context.
         *   @param [target] The vector to receive the result
         */
        static div(v0: Vector, v1: Vector, target?: Vector): void;

        /**
         *   Divides the vector by a scalar, divides a vector
         *   by the x, y, and z arguments, or divides the x, y,
         *   and z components of two vectors against each
         *   other. When dividing a vector by a scalar, the x,
         *   y, and z components of the vector are all divided
         *   by the scalar. When dividing a vector by a vector,
         *   the x, y, z components of the source vector are
         *   treated as the dividend, and the x, y, z
         *   components of the argument is treated as the
         *   divisor. (For example, with two vectors a and b:
         *   a.x / b.x, a.y / b.y, a.z / b.z.) If any component
         *   of the second vector is 0, a division by 0 error
         *   will be logged, unless both two vectors have 0 in
         *   their z components, in which case only the x and y
         *   components will be divided. The static version of
         *   this method creates a new p5.Vector while the
         *   non-static version acts on the vector directly.
         *   Additionally, you may provide arguments to this
         *   method as an array. See the examples for more
         *   context.
         *   @param arr The array to divide the components of
         *   the vector by
         *   @param [target] The vector to receive the result
         */
        static div(v0: Vector, arr: number[], target?: Vector): void;

        /**
         *   Calculates the magnitude (length) of the vector
         *   and returns the result as a float. (This is simply
         *   the equation sqrt(x*x + y*y + z*z).)
         *   @param vecT The vector to return the magnitude of
         *   @return The magnitude of vecT
         */
        static mag(vecT: Vector): number;

        /**
         *   Calculates the squared magnitude of the vector and
         *   returns the result as a float. (This is simply the
         *   equation x*x + y*y + z*z.) Faster if the real
         *   length is not required in the case of comparing
         *   vectors, etc.
         *   @param vecT the vector to return the squared
         *   magnitude of
         *   @return the squared magnitude of vecT
         */
        static magSq(vecT: Vector): number;

        /**
         *   Calculates the dot product of two vectors. The
         *   version of the method that computes the dot
         *   product of two independent vectors is a static
         *   method. See the examples for more context.
         *   @param v1 The first p5.Vector
         *   @param v2 The second p5.Vector
         *   @return The dot product
         */
        static dot(v1: Vector, v2: Vector): number;

        /**
         *   Calculates and returns a vector composed of the
         *   cross product between two vectors. Both the static
         *   and non-static methods return a new p5.Vector. See
         *   the examples for more context.
         *   @param v1 The first p5.Vector
         *   @param v2 The second p5.Vector
         *   @return The cross product
         */
        static cross(v1: Vector, v2: Vector): number;

        /**
         *   Calculates the Euclidean distance between two
         *   points (considering a point as a vector object).
         *   If you are looking to calculate distance between 2
         *   points see dist()
         *   @param v1 The first p5.Vector
         *   @param v2 The second p5.Vector
         *   @return The distance
         */
        static dist(v1: Vector, v2: Vector): number;

        /**
         *   Normalize the vector to length 1 (make it a unit
         *   vector).
         *   @param v The vector to normalize
         *   @param [target] The vector to receive the result
         *   @return The vector v, normalized to a length of 1
         */
        static normalize(v: Vector, target?: Vector): Vector;

        /**
         *   Limit the magnitude of this vector to the value
         *   used for the max parameter.
         *   @param v the vector to limit
         *   @param max The maximum magnitude for the vector
         *   @param [target] the vector to receive the result
         *   (Optional)
         *   @return v with a magnitude limited to max
         */
        static limit(v: Vector, max: number, target?: Vector): Vector;

        /**
         *   Set the magnitude of this vector to the value used
         *   for the len parameter.
         *   @param v the vector to set the magnitude of
         *   @param len The new length for this vector
         *   @param [target] the vector to receive the result
         *   (Optional)
         *   @return v with a magnitude set to len
         */
        static setMag(v: Vector, len: number, target?: Vector): Vector;

        /**
         *   Calculate the angle of rotation for this vector
         *   (only 2D vectors). p5.Vectors created using
         *   createVector() will take the current angleMode()
         *   into consideration, and give the angle in radians
         *   or degrees accordingly.
         *   @param v the vector to find the angle of
         *   @return the angle of rotation
         */
        static heading(v: Vector): number;

        /**
         *   Rotate the vector by an angle (only 2D vectors);
         *   magnitude remains the same.
         *   @param angle The angle of rotation
         *   @param [target] The vector to receive the result
         */
        static rotate(v: Vector, angle: number, target?: Vector): void;

        /**
         *   Calculates and returns the angle between two
         *   vectors. This method will take the current
         *   angleMode into consideration, and give the angle
         *   in radians or degrees accordingly.
         *   @param v1 the first vector
         *   @param v2 the second vector
         *   @return the angle between the two vectors
         */
        static angleBetween(v1: Vector, v2: Vector): number;

        /**
         *   Linear interpolate the vector to another vector.
         *   @param amt The amount of interpolation; some value
         *   between 0.0 (old vector) and 1.0 (new vector). 0.9
         *   is very near the new vector. 0.5 is halfway in
         *   between.
         *   @param [target] The vector to receive the result
         *   @return The lerped value
         */
        static lerp(v1: Vector, v2: Vector, amt: number, target?: Vector): Vector;

        /**
         *   Performs spherical linear interpolation with the
         *   other vector and returns the resulting vector.
         *   This works in both 3D and 2D. As for 2D, the
         *   result of slerping between 2D vectors is always a
         *   2D vector.
         *   @param v1 old vector
         *   @param v2 new vectpr
         *   @param amt The amount of interpolation. some value
         *   between 0.0 (old vector) and 1.0 (new vector). 0.9
         *   is very near the new vector. 0.5 is halfway in
         *   between.
         *   @param [target] The vector to receive the result
         *   @return slerped vector between v1 and v2
         */
        static slerp(v1: Vector, v2: Vector, amt: number, target?: Vector): Vector;

        /**
         *   Reflect a vector about a normal to a line in 2D,
         *   or about a normal to a plane in 3D.
         *   @param incidentVector vector to be reflected
         *   @param surfaceNormal the p5.Vector to reflect
         *   about.
         *   @param [target] the vector to receive the result
         *   (Optional)
         *   @return the reflected vector
         */
        static reflect(incidentVector: Vector, surfaceNormal: Vector, target?: Vector): Vector;

        /**
         *   Return a representation of this vector as a float
         *   array. This is only for temporary use. If used in
         *   any other fashion, the contents should be copied
         *   by using the p5.Vector.copy() method to copy into
         *   your own vector.
         *   @param v the vector to convert to an array
         *   @return an Array with the 3 values
         */
        static array(v: Vector): number[];

        /**
         *   Equality check against a p5.Vector.
         *   @param v1 the first vector to compare
         *   @param v2 the second vector to compare
         */
        static equals(v1: Vector | any[], v2: Vector | any[]): boolean;

        /**
         *   Make a new 2D vector from an angle.
         *   @param angle The desired angle, in radians
         *   (unaffected by angleMode)
         *   @param [length] The length of the new vector
         *   (defaults to 1)
         *   @return The new p5.Vector object
         */
        static fromAngle(angle: number, length?: number): Vector;

        /**
         *   Make a new 3D vector from a pair of ISO spherical
         *   angles.
         *   @param theta The polar angle, in radians (zero is
         *   up)
         *   @param phi The azimuthal angle, in radians (zero
         *   is out of the screen)
         *   @param [length] The length of the new vector
         *   (defaults to 1)
         *   @return A new p5.Vector object
         */
        static fromAngles(theta: number, phi: number, length?: number): Vector;

        /**
         *   Make a new 2D unit vector from a random angle.
         *   @return A new p5.Vector object
         */
        static random2D(): Vector;

        /**
         *   Make a new random 3D unit vector.
         *   @return A new p5.Vector object
         */
        static random3D(): Vector;

        /**
         *   Returns a string representation of a vector v by
         *   calling String(v) or v.toString(). This method is
         *   useful for logging vectors in the console.
         */
        toString(): string;

        /**
         *   Sets the x, y, and z components of the vector
         *   using two or three separate variables, the data
         *   from a p5.Vector, or the values from a float
         *   array.
         *   @param [x] The x component of the vector
         *   @param [y] The y component of the vector
         *   @param [z] The z component of the vector
         *   @chainable
         */
        set(x?: number, y?: number, z?: number): Vector;

        /**
         *   Sets the x, y, and z components of the vector
         *   using two or three separate variables, the data
         *   from a p5.Vector, or the values from a float
         *   array.
         *   @param value The vector to set
         *   @chainable
         */
        set(value: Vector | number[]): Vector;

        /**
         *   Gets a copy of the vector, returns a p5.Vector
         *   object.
         *   @return A copy of the p5.Vector object
         */
        copy(): Vector;

        /**
         *   Adds x, y, and z components to a vector, adds one
         *   vector to another, or adds two independent vectors
         *   together. The version of the method that adds two
         *   vectors together is a static method and returns a
         *   p5.Vector, the others act directly on the vector.
         *   Additionally, you may provide arguments to this
         *   method as an array. See the examples for more
         *   context.
         *   @param x The x component of the vector to be added
         *   @param [y] The y component of the vector to be
         *   added
         *   @param [z] The z component of the vector to be
         *   added
         *   @chainable
         */
        add(x: number, y?: number, z?: number): Vector;

        /**
         *   Adds x, y, and z components to a vector, adds one
         *   vector to another, or adds two independent vectors
         *   together. The version of the method that adds two
         *   vectors together is a static method and returns a
         *   p5.Vector, the others act directly on the vector.
         *   Additionally, you may provide arguments to this
         *   method as an array. See the examples for more
         *   context.
         *   @param value The vector to add
         *   @chainable
         */
        add(value: Vector | number[]): Vector;

        /**
         *   Gives the remainder of a vector when it is divided
         *   by another vector. See examples for more context.
         *   @param x The x component of divisor vector
         *   @param y The y component of divisor vector
         *   @param z The z component of divisor vector
         *   @chainable
         */
        rem(x: number, y: number, z: number): Vector;

        /**
         *   Gives the remainder of a vector when it is divided
         *   by another vector. See examples for more context.
         *   @param value The divisor vector
         *   @chainable
         */
        rem(value: Vector | number[]): Vector;

        /**
         *   Subtracts x, y, and z components from a vector,
         *   subtracts one vector from another, or subtracts
         *   two independent vectors. The version of the method
         *   that subtracts two vectors is a static method and
         *   returns a p5.Vector, the others act directly on
         *   the vector. Additionally, you may provide
         *   arguments to this method as an array. See the
         *   examples for more context.
         *   @param x The x component of the vector to subtract
         *   @param [y] The y component of the vector to
         *   subtract
         *   @param [z] The z component of the vector to
         *   subtract
         *   @chainable
         */
        sub(x: number, y?: number, z?: number): Vector;

        /**
         *   Subtracts x, y, and z components from a vector,
         *   subtracts one vector from another, or subtracts
         *   two independent vectors. The version of the method
         *   that subtracts two vectors is a static method and
         *   returns a p5.Vector, the others act directly on
         *   the vector. Additionally, you may provide
         *   arguments to this method as an array. See the
         *   examples for more context.
         *   @param value the vector to subtract
         *   @chainable
         */
        sub(value: Vector | number[]): Vector;

        /**
         *   Multiplies the vector by a scalar, multiplies the
         *   x, y, and z components from a vector, or
         *   multiplies the x, y, and z components of two
         *   independent vectors. When multiplying a vector by
         *   a scalar, the x, y, and z components of the vector
         *   are all multiplied by the scalar. When multiplying
         *   a vector by a vector, the x, y, z components of
         *   both vectors are multiplied by each other (for
         *   example, with two vectors a and b: a.x * b.x, a.y
         *   * b.y, a.z * b.z). The static version of this
         *   method creates a new p5.Vector while the
         *   non-static version acts on the vector directly.
         *   Additionally, you may provide arguments to this
         *   function as an array. See the examples for more
         *   context.
         *   @param n The number to multiply with the vector
         *   @chainable
         */
        mult(n: number): Vector;

        /**
         *   Multiplies the vector by a scalar, multiplies the
         *   x, y, and z components from a vector, or
         *   multiplies the x, y, and z components of two
         *   independent vectors. When multiplying a vector by
         *   a scalar, the x, y, and z components of the vector
         *   are all multiplied by the scalar. When multiplying
         *   a vector by a vector, the x, y, z components of
         *   both vectors are multiplied by each other (for
         *   example, with two vectors a and b: a.x * b.x, a.y
         *   * b.y, a.z * b.z). The static version of this
         *   method creates a new p5.Vector while the
         *   non-static version acts on the vector directly.
         *   Additionally, you may provide arguments to this
         *   function as an array. See the examples for more
         *   context.
         *   @param x The number to multiply with the x
         *   component of the vector
         *   @param y The number to multiply with the y
         *   component of the vector
         *   @param [z] The number to multiply with the z
         *   component of the vector
         *   @chainable
         */
        mult(x: number, y: number, z?: number): Vector;

        /**
         *   Multiplies the vector by a scalar, multiplies the
         *   x, y, and z components from a vector, or
         *   multiplies the x, y, and z components of two
         *   independent vectors. When multiplying a vector by
         *   a scalar, the x, y, and z components of the vector
         *   are all multiplied by the scalar. When multiplying
         *   a vector by a vector, the x, y, z components of
         *   both vectors are multiplied by each other (for
         *   example, with two vectors a and b: a.x * b.x, a.y
         *   * b.y, a.z * b.z). The static version of this
         *   method creates a new p5.Vector while the
         *   non-static version acts on the vector directly.
         *   Additionally, you may provide arguments to this
         *   function as an array. See the examples for more
         *   context.
         *   @param arr The array to multiply with the
         *   components of the vector
         *   @chainable
         */
        mult(arr: number[]): Vector;

        /**
         *   Multiplies the vector by a scalar, multiplies the
         *   x, y, and z components from a vector, or
         *   multiplies the x, y, and z components of two
         *   independent vectors. When multiplying a vector by
         *   a scalar, the x, y, and z components of the vector
         *   are all multiplied by the scalar. When multiplying
         *   a vector by a vector, the x, y, z components of
         *   both vectors are multiplied by each other (for
         *   example, with two vectors a and b: a.x * b.x, a.y
         *   * b.y, a.z * b.z). The static version of this
         *   method creates a new p5.Vector while the
         *   non-static version acts on the vector directly.
         *   Additionally, you may provide arguments to this
         *   function as an array. See the examples for more
         *   context.
         *   @param v The vector to multiply with the
         *   components of the original vector
         *   @chainable
         */
        mult(v: Vector): Vector;

        /**
         *   Divides the vector by a scalar, divides a vector
         *   by the x, y, and z arguments, or divides the x, y,
         *   and z components of two vectors against each
         *   other. When dividing a vector by a scalar, the x,
         *   y, and z components of the vector are all divided
         *   by the scalar. When dividing a vector by a vector,
         *   the x, y, z components of the source vector are
         *   treated as the dividend, and the x, y, z
         *   components of the argument is treated as the
         *   divisor. (For example, with two vectors a and b:
         *   a.x / b.x, a.y / b.y, a.z / b.z.) If any component
         *   of the second vector is 0, a division by 0 error
         *   will be logged, unless both two vectors have 0 in
         *   their z components, in which case only the x and y
         *   components will be divided. The static version of
         *   this method creates a new p5.Vector while the
         *   non-static version acts on the vector directly.
         *   Additionally, you may provide arguments to this
         *   method as an array. See the examples for more
         *   context.
         *   @param n The number to divide the vector by
         *   @chainable
         */
        div(n: number): Vector;

        /**
         *   Divides the vector by a scalar, divides a vector
         *   by the x, y, and z arguments, or divides the x, y,
         *   and z components of two vectors against each
         *   other. When dividing a vector by a scalar, the x,
         *   y, and z components of the vector are all divided
         *   by the scalar. When dividing a vector by a vector,
         *   the x, y, z components of the source vector are
         *   treated as the dividend, and the x, y, z
         *   components of the argument is treated as the
         *   divisor. (For example, with two vectors a and b:
         *   a.x / b.x, a.y / b.y, a.z / b.z.) If any component
         *   of the second vector is 0, a division by 0 error
         *   will be logged, unless both two vectors have 0 in
         *   their z components, in which case only the x and y
         *   components will be divided. The static version of
         *   this method creates a new p5.Vector while the
         *   non-static version acts on the vector directly.
         *   Additionally, you may provide arguments to this
         *   method as an array. See the examples for more
         *   context.
         *   @param x The number to divide with the x component
         *   of the vector
         *   @param y The number to divide with the y component
         *   of the vector
         *   @param [z] The number to divide with the z
         *   component of the vector
         *   @chainable
         */
        div(x: number, y: number, z?: number): Vector;

        /**
         *   Divides the vector by a scalar, divides a vector
         *   by the x, y, and z arguments, or divides the x, y,
         *   and z components of two vectors against each
         *   other. When dividing a vector by a scalar, the x,
         *   y, and z components of the vector are all divided
         *   by the scalar. When dividing a vector by a vector,
         *   the x, y, z components of the source vector are
         *   treated as the dividend, and the x, y, z
         *   components of the argument is treated as the
         *   divisor. (For example, with two vectors a and b:
         *   a.x / b.x, a.y / b.y, a.z / b.z.) If any component
         *   of the second vector is 0, a division by 0 error
         *   will be logged, unless both two vectors have 0 in
         *   their z components, in which case only the x and y
         *   components will be divided. The static version of
         *   this method creates a new p5.Vector while the
         *   non-static version acts on the vector directly.
         *   Additionally, you may provide arguments to this
         *   method as an array. See the examples for more
         *   context.
         *   @param arr The array to divide the components of
         *   the vector by
         *   @chainable
         */
        div(arr: number[]): Vector;

        /**
         *   Divides the vector by a scalar, divides a vector
         *   by the x, y, and z arguments, or divides the x, y,
         *   and z components of two vectors against each
         *   other. When dividing a vector by a scalar, the x,
         *   y, and z components of the vector are all divided
         *   by the scalar. When dividing a vector by a vector,
         *   the x, y, z components of the source vector are
         *   treated as the dividend, and the x, y, z
         *   components of the argument is treated as the
         *   divisor. (For example, with two vectors a and b:
         *   a.x / b.x, a.y / b.y, a.z / b.z.) If any component
         *   of the second vector is 0, a division by 0 error
         *   will be logged, unless both two vectors have 0 in
         *   their z components, in which case only the x and y
         *   components will be divided. The static version of
         *   this method creates a new p5.Vector while the
         *   non-static version acts on the vector directly.
         *   Additionally, you may provide arguments to this
         *   method as an array. See the examples for more
         *   context.
         *   @param v The vector to divide the components of
         *   the original vector by
         *   @chainable
         */
        div(v: Vector): Vector;

        /**
         *   Calculates the magnitude (length) of the vector
         *   and returns the result as a float. (This is simply
         *   the equation sqrt(x*x + y*y + z*z).)
         *   @return The magnitude of the vector
         */
        mag(): number;

        /**
         *   Calculates the squared magnitude of the vector and
         *   returns the result as a float. (This is simply the
         *   equation x*x + y*y + z*z.) Faster if the real
         *   length is not required in the case of comparing
         *   vectors, etc.
         *   @return The squared magnitude of the vector
         */
        magSq(): number;

        /**
         *   Calculates the dot product of two vectors. The
         *   version of the method that computes the dot
         *   product of two independent vectors is a static
         *   method. See the examples for more context.
         *   @param x The x component of the vector
         *   @param [y] The y component of the vector
         *   @param [z] The z component of the vector
         *   @return The dot product
         */
        dot(x: number, y?: number, z?: number): number;

        /**
         *   Calculates the dot product of two vectors. The
         *   version of the method that computes the dot
         *   product of two independent vectors is a static
         *   method. See the examples for more context.
         *   @param value value component of the vector or a
         *   p5.Vector
         */
        dot(value: Vector): number;

        /**
         *   Calculates and returns a vector composed of the
         *   cross product between two vectors. Both the static
         *   and non-static methods return a new p5.Vector. See
         *   the examples for more context.
         *   @param v p5.Vector to be crossed
         *   @return p5.Vector composed of cross product
         */
        cross(v: Vector): Vector;

        /**
         *   Calculates the Euclidean distance between two
         *   points (considering a point as a vector object).
         *   If you are looking to calculate distance between 2
         *   points see dist()
         *   @param v The x, y, and z coordinates of a
         *   p5.Vector
         *   @return The distance
         */
        dist(v: Vector): number;

        /**
         *   Normalize the vector to length 1 (make it a unit
         *   vector).
         *   @return The normalized p5.Vector
         */
        normalize(): Vector;

        /**
         *   Limit the magnitude of this vector to the value
         *   used for the max parameter.
         *   @param max The maximum magnitude for the vector
         *   @chainable
         */
        limit(max: number): Vector;

        /**
         *   Set the magnitude of this vector to the value used
         *   for the len parameter.
         *   @param len The new length for this vector
         *   @chainable
         */
        setMag(len: number): Vector;

        /**
         *   Calculate the angle of rotation for this vector
         *   (only 2D vectors). p5.Vectors created using
         *   createVector() will take the current angleMode()
         *   into consideration, and give the angle in radians
         *   or degrees accordingly.
         *   @return The angle of rotation
         */
        heading(): number;

        /**
         *   Rotate the vector to a specific angle (only 2D
         *   vectors); magnitude remains the same.
         *   @param angle The angle of rotation
         *   @chainable
         */
        setHeading(angle: number): Vector;

        /**
         *   Rotate the vector by an angle (only 2D vectors);
         *   magnitude remains the same.
         *   @param angle The angle of rotation
         *   @chainable
         */
        rotate(angle: number): Vector;

        /**
         *   Calculates and returns the angle between two
         *   vectors. This method will take the current
         *   angleMode into consideration, and give the angle
         *   in radians or degrees accordingly.
         *   @param value The x, y, and z components of a
         *   p5.Vector
         *   @return The angle between
         */
        angleBetween(value: Vector): number;

        /**
         *   Linear interpolate the vector to another vector.
         *   @param x The x component
         *   @param y The y component
         *   @param z The z component
         *   @param amt The amount of interpolation; some value
         *   between 0.0 (old vector) and 1.0 (new vector). 0.9
         *   is very near the new vector. 0.5 is halfway in
         *   between.
         *   @chainable
         */
        lerp(x: number, y: number, z: number, amt: number): Vector;

        /**
         *   Linear interpolate the vector to another vector.
         *   @param v The p5.Vector to lerp to
         *   @param amt The amount of interpolation; some value
         *   between 0.0 (old vector) and 1.0 (new vector). 0.9
         *   is very near the new vector. 0.5 is halfway in
         *   between.
         *   @chainable
         */
        lerp(v: Vector, amt: number): Vector;

        /**
         *   Performs spherical linear interpolation with the
         *   other vector and returns the resulting vector.
         *   This works in both 3D and 2D. As for 2D, the
         *   result of slerping between 2D vectors is always a
         *   2D vector.
         *   @param v the p5.Vector to slerp to
         *   @param amt The amount of interpolation. some value
         *   between 0.0 (old vector) and 1.0 (new vector). 0.9
         *   is very near the new vector. 0.5 is halfway in
         *   between.
         */
        slerp(v: Vector, amt: number): Vector;

        /**
         *   Reflect a vector about a normal to a line in 2D,
         *   or about a normal to a plane in 3D.
         *   @param surfaceNormal the p5.Vector to reflect
         *   about.
         *   @chainable
         */
        reflect(surfaceNormal: Vector): Vector;

        /**
         *   Return a representation of this vector as a float
         *   array. This is only for temporary use. If used in
         *   any other fashion, the contents should be copied
         *   by using the p5.Vector.copy() method to copy into
         *   your own vector.
         *   @return An Array with the 3 values
         */
        array(): number[];

        /**
         *   Equality check against a p5.Vector.
         *   @param [x] The x component of the vector
         *   @param [y] The y component of the vector
         *   @param [z] The z component of the vector
         *   @return Whether the vectors are equal
         */
        equals(x?: number, y?: number, z?: number): boolean;

        /**
         *   Equality check against a p5.Vector.
         *   @param value The vector to compare
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
