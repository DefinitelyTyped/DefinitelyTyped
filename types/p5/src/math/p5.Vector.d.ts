// This file was auto-generated. Please do not edit it.

import * as p5 from "../../index";

declare module "../../index" {
  class Vector {
    /**
     *   Adds x, y, and z components to a vector, adds one
     *   vector to another, or adds two independent vectors
     *   together. The version of the method that adds two
     *   vectors together is a static method and returns a
     *   p5.Vector, the others acts directly on the vector.
     *   See the examples for more context.
     *   @param v1 a p5.Vector to add
     *   @param v2 a p5.Vector to add
     *   @param target the vector to receive the result
     */
    static add(
      v1: Vector,
      v2: Vector,
      target: Vector
    ): void;

    /**
     *   Adds x, y, and z components to a vector, adds one
     *   vector to another, or adds two independent vectors
     *   together. The version of the method that adds two
     *   vectors together is a static method and returns a
     *   p5.Vector, the others acts directly on the vector.
     *   See the examples for more context.
     *   @param v1 a p5.Vector to add
     *   @param v2 a p5.Vector to add
     *   @return the resulting p5.Vector
     */
    static add(
      v1: Vector,
      v2: Vector
    ): Vector;

    /**
     *   Subtracts x, y, and z components from a vector,
     *   subtracts one vector from another, or subtracts
     *   two independent vectors. The version of the method
     *   that subtracts two vectors is a static method and
     *   returns a p5.Vector, the other acts directly on
     *   the vector. See the examples for more context.
     *   @param v1 a p5.Vector to subtract from
     *   @param v2 a p5.Vector to subtract
     *   @param target if undefined a new vector will be
     *   created
     */
    static sub(
      v1: Vector,
      v2: Vector,
      target: Vector
    ): void;

    /**
     *   Subtracts x, y, and z components from a vector,
     *   subtracts one vector from another, or subtracts
     *   two independent vectors. The version of the method
     *   that subtracts two vectors is a static method and
     *   returns a p5.Vector, the other acts directly on
     *   the vector. See the examples for more context.
     *   @param v1 a p5.Vector to subtract from
     *   @param v2 a p5.Vector to subtract
     *   @return the resulting p5.Vector
     */
    static sub(
      v1: Vector,
      v2: Vector
    ): Vector;

    /**
     *   Multiply the vector by a scalar. The static
     *   version of this method creates a new p5.Vector
     *   while the non static version acts on the vector
     *   directly. See the examples for more context.
     *   @param v the vector to multiply
     *   @param n the number to multiply with the vector
     *   @param target if undefined a new vector will be
     *   created
     */
    static mult(
      v: Vector,
      n: number,
      target: Vector
    ): void;

    /**
     *   Multiply the vector by a scalar. The static
     *   version of this method creates a new p5.Vector
     *   while the non static version acts on the vector
     *   directly. See the examples for more context.
     *   @param v the vector to multiply
     *   @param n the number to multiply with the vector
     *   @return the resulting new p5.Vector
     */
    static mult(
      v: Vector,
      n: number
    ): Vector;

    /**
     *   Divide the vector by a scalar. The static version
     *   of this method creates a new p5.Vector while the
     *   non static version acts on the vector directly.
     *   See the examples for more context.
     *   @param v the vector to divide
     *   @param n the number to divide the vector by
     *   @param target if undefined a new vector will be
     *   created
     */
    static div(
      v: Vector,
      n: number,
      target: Vector
    ): void;

    /**
     *   Divide the vector by a scalar. The static version
     *   of this method creates a new p5.Vector while the
     *   non static version acts on the vector directly.
     *   See the examples for more context.
     *   @param v the vector to divide
     *   @param n the number to divide the vector by
     *   @return the resulting new p5.Vector
     */
    static div(
      v: Vector,
      n: number
    ): Vector;

    /**
     *   Calculates the magnitude (length) of the vector
     *   and returns the result as a float (this is simply
     *   the equation sqrt(xx + yy + z*z).)
     *   @param vecT the vector to return the magnitude of
     *   @return the magnitude of vecT
     */
    static mag(
      vecT: Vector
    ): number;

    /**
     *   Calculates the dot product of two vectors. The
     *   version of the method that computes the dot
     *   product of two independent vectors is a static
     *   method. See the examples for more context.
     *   @param v1 the first p5.Vector
     *   @param v2 the second p5.Vector
     *   @return the dot product
     */
    static dot(
      v1: Vector,
      v2: Vector
    ): number;

    /**
     *   Calculates and returns a vector composed of the
     *   cross product between two vectors. Both the static
     *   and non static methods return a new p5.Vector. See
     *   the examples for more context.
     *   @param v1 the first p5.Vector
     *   @param v2 the second p5.Vector
     *   @return the cross product
     */
    static cross(
      v1: Vector,
      v2: Vector
    ): number;

    /**
     *   Calculates the Euclidean distance between two
     *   points (considering a point as a vector object).
     *   @param v1 the first p5.Vector
     *   @param v2 the second p5.Vector
     *   @return the distance
     */
    static dist(
      v1: Vector,
      v2: Vector
    ): number;

    /**
     *   Linear interpolate the vector to another vector
     *   @param amt the amount of interpolation; some value
     *   between 0.0 (old vector) and 1.0 (new vector). 0.9
     *   is very near the new vector. 0.5 is halfway in
     *   between.
     *   @param target if undefined a new vector will be
     *   created
     */
    static lerp(
      v1: Vector,
      v2: Vector,
      amt: number,
      target: Vector
    ): void;

    /**
     *   Linear interpolate the vector to another vector
     *   @param amt the amount of interpolation; some value
     *   between 0.0 (old vector) and 1.0 (new vector). 0.9
     *   is very near the new vector. 0.5 is halfway in
     *   between.
     *   @return the lerped value
     */
    static lerp(
      v1: Vector,
      v2: Vector,
      amt: number
    ): number;

    /**
     *   Make a new 2D vector from an angle
     *   @param angle the desired angle, in radians
     *   @param [length] the length of the new vector
     *   (defaults to 1)
     *   @return the new p5.Vector object
     */
    static fromAngle(
      angle: number,
      length?: number
    ): Vector;

    /**
     *   Make a new 3D vector from a pair of ISO spherical
     *   angles
     *   @param theta the polar angle, in radians (zero is
     *   up)
     *   @param phi the azimuthal angle, in radians (zero
     *   is out of the screen)
     *   @param [length] the length of the new vector
     *   (defaults to 1)
     *   @return the new p5.Vector object
     */
    static fromAngles(
      theta: number,
      phi: number,
      length?: number
    ): Vector;

    /**
     *   Make a new 2D unit vector from a random angle
     *   @return the new p5.Vector object
     */
    static random2D(): Vector;

    /**
     *   Make a new random 3D unit vector.
     *   @return the new p5.Vector object
     */
    static random3D(): Vector;

    /**
     *   Returns a string representation of a vector v by
     *   calling String(v) or v.toString(). This method is
     *   useful for logging vectors in the console.
     */
    toString(): string;

    /**
     *   Sets the x, y, and z component of the vector using
     *   two or three separate variables, the data from a
     *   p5.Vector, or the values from a float array.
     *   @param [x] the x component of the vector
     *   @param [y] the y component of the vector
     *   @param [z] the z component of the vector
     *   @chainable
     */
    set(
      x?: number,
      y?: number,
      z?: number
    ): Vector;

    /**
     *   Sets the x, y, and z component of the vector using
     *   two or three separate variables, the data from a
     *   p5.Vector, or the values from a float array.
     *   @param value the vector to set
     *   @chainable
     */
    set(
      value:
        | Vector
        | number[]
    ): Vector;

    /**
     *   Gets a copy of the vector, returns a p5.Vector
     *   object.
     *   @return the copy of the p5.Vector object
     */
    copy(): Vector;

    /**
     *   Adds x, y, and z components to a vector, adds one
     *   vector to another, or adds two independent vectors
     *   together. The version of the method that adds two
     *   vectors together is a static method and returns a
     *   p5.Vector, the others acts directly on the vector.
     *   See the examples for more context.
     *   @param x the x component of the vector to be added
     *   @param [y] the y component of the vector to be
     *   added
     *   @param [z] the z component of the vector to be
     *   added
     *   @chainable
     */
    add(
      x: number,
      y?: number,
      z?: number
    ): Vector;

    /**
     *   Adds x, y, and z components to a vector, adds one
     *   vector to another, or adds two independent vectors
     *   together. The version of the method that adds two
     *   vectors together is a static method and returns a
     *   p5.Vector, the others acts directly on the vector.
     *   See the examples for more context.
     *   @param value the vector to add
     *   @chainable
     */
    add(
      value:
        | Vector
        | number[]
    ): Vector;

    /**
     *   Subtracts x, y, and z components from a vector,
     *   subtracts one vector from another, or subtracts
     *   two independent vectors. The version of the method
     *   that subtracts two vectors is a static method and
     *   returns a p5.Vector, the other acts directly on
     *   the vector. See the examples for more context.
     *   @param x the x component of the vector to subtract
     *   @param [y] the y component of the vector to
     *   subtract
     *   @param [z] the z component of the vector to
     *   subtract
     *   @chainable
     */
    sub(
      x: number,
      y?: number,
      z?: number
    ): Vector;

    /**
     *   Subtracts x, y, and z components from a vector,
     *   subtracts one vector from another, or subtracts
     *   two independent vectors. The version of the method
     *   that subtracts two vectors is a static method and
     *   returns a p5.Vector, the other acts directly on
     *   the vector. See the examples for more context.
     *   @param value the vector to subtract
     *   @chainable
     */
    sub(
      value:
        | Vector
        | number[]
    ): Vector;

    /**
     *   Multiply the vector by a scalar. The static
     *   version of this method creates a new p5.Vector
     *   while the non static version acts on the vector
     *   directly. See the examples for more context.
     *   @param n the number to multiply with the vector
     *   @chainable
     */
    mult(
      n: number
    ): Vector;

    /**
     *   Divide the vector by a scalar. The static version
     *   of this method creates a new p5.Vector while the
     *   non static version acts on the vector directly.
     *   See the examples for more context.
     *   @param n the number to divide the vector by
     *   @chainable
     */
    div(
      n: number
    ): Vector;

    /**
     *   Calculates the magnitude (length) of the vector
     *   and returns the result as a float (this is simply
     *   the equation sqrt(xx + yy + z*z).)
     *   @return magnitude of the vector
     */
    mag(): number;

    /**
     *   Calculates the squared magnitude of the vector and
     *   returns the result as a float (this is simply the
     *   equation (xx + yy + z*z).) Faster if the real
     *   length is not required in the case of comparing
     *   vectors, etc.
     *   @return squared magnitude of the vector
     */
    magSq(): number;

    /**
     *   Calculates the dot product of two vectors. The
     *   version of the method that computes the dot
     *   product of two independent vectors is a static
     *   method. See the examples for more context.
     *   @param x x component of the vector
     *   @param [y] y component of the vector
     *   @param [z] z component of the vector
     *   @return the dot product
     */
    dot(
      x: number,
      y?: number,
      z?: number
    ): number;

    /**
     *   Calculates the dot product of two vectors. The
     *   version of the method that computes the dot
     *   product of two independent vectors is a static
     *   method. See the examples for more context.
     *   @param value value component of the vector or a
     *   p5.Vector
     */
    dot(
      value: Vector
    ): number;

    /**
     *   Calculates and returns a vector composed of the
     *   cross product between two vectors. Both the static
     *   and non static methods return a new p5.Vector. See
     *   the examples for more context.
     *   @param v p5.Vector to be crossed
     *   @return p5.Vector composed of cross product
     */
    cross(
      v: Vector
    ): Vector;

    /**
     *   Calculates the Euclidean distance between two
     *   points (considering a point as a vector object).
     *   @param v the x, y, and z coordinates of a
     *   p5.Vector
     *   @return the distance
     */
    dist(
      v: Vector
    ): number;

    /**
     *   Normalize the vector to length 1 (make it a unit
     *   vector).
     *   @return normalized p5.Vector
     */
    normalize(): Vector;

    /**
     *   Limit the magnitude of this vector to the value
     *   used for the max parameter.
     *   @param max the maximum magnitude for the vector
     *   @chainable
     */
    limit(
      max: number
    ): Vector;

    /**
     *   Set the magnitude of this vector to the value used
     *   for the len parameter.
     *   @param len the new length for this vector
     *   @chainable
     */
    setMag(
      len: number
    ): Vector;

    /**
     *   Calculate the angle of rotation for this vector
     *   (only 2D vectors)
     *   @return the angle of rotation
     */
    heading(): number;

    /**
     *   Rotate the vector by an angle (only 2D vectors),
     *   magnitude remains the same
     *   @param angle the angle of rotation
     *   @chainable
     */
    rotate(
      angle: number
    ): Vector;

    /**
     *   Calculates and returns the angle (in radians)
     *   between two vectors.
     *   @param the x, y, and z components of a p5.Vector
     *   @return the angle between (in radians)
     */
    angleBetween(
      the: Vector
    ): number;

    /**
     *   Linear interpolate the vector to another vector
     *   @param x the x component
     *   @param y the y component
     *   @param z the z component
     *   @param amt the amount of interpolation; some value
     *   between 0.0 (old vector) and 1.0 (new vector). 0.9
     *   is very near the new vector. 0.5 is halfway in
     *   between.
     *   @chainable
     */
    lerp(
      x: number,
      y: number,
      z: number,
      amt: number
    ): Vector;

    /**
     *   Linear interpolate the vector to another vector
     *   @param v the p5.Vector to lerp to
     *   @param amt the amount of interpolation; some value
     *   between 0.0 (old vector) and 1.0 (new vector). 0.9
     *   is very near the new vector. 0.5 is halfway in
     *   between.
     *   @chainable
     */
    lerp(
      v: Vector,
      amt: number
    ): Vector;

    /**
     *   Return a representation of this vector as a float
     *   array. This is only for temporary use. If used in
     *   any other fashion, the contents should be copied
     *   by using the p5.Vector.copy() method to copy into
     *   your own array.
     *   @return an Array with the 3 values
     */
    array(): number[];

    /**
     *   Equality check against a p5.Vector
     *   @param [x] the x component of the vector
     *   @param [y] the y component of the vector
     *   @param [z] the z component of the vector
     *   @return whether the vectors are equals
     */
    equals(
      x?: number,
      y?: number,
      z?: number
    ): boolean;

    /**
     *   Equality check against a p5.Vector
     *   @param value the vector to compare
     */
    equals(
      value:
        | Vector
        | any[]
    ): boolean;

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
