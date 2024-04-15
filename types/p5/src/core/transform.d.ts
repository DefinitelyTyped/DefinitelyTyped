// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Multiplies the current matrix by the one specified
         *   through the parameters. This is a powerful
         *   operation that can perform the equivalent of
         *   translate, scale, shear and rotate all at once.
         *   You can learn more about transformation matrices
         *   on  Wikipedia. The naming of the arguments here
         *   follows the naming of the  WHATWG specification
         *   and corresponds to a transformation matrix of the
         *   form:
         *   @param arr an array of numbers - should be 6 or 16
         *   length (2×3 or 4×4 matrix values)
         *   @chainable
         */
        applyMatrix(arr: any[]): p5;

        /**
         *   Multiplies the current matrix by the one specified
         *   through the parameters. This is a powerful
         *   operation that can perform the equivalent of
         *   translate, scale, shear and rotate all at once.
         *   You can learn more about transformation matrices
         *   on  Wikipedia. The naming of the arguments here
         *   follows the naming of the  WHATWG specification
         *   and corresponds to a transformation matrix of the
         *   form:
         *   @param a numbers which define the 2×3 or 4×4
         *   matrix to be multiplied
         *   @param b numbers which define the 2×3 or 4×4
         *   matrix to be multiplied
         *   @param c numbers which define the 2×3 or 4×4
         *   matrix to be multiplied
         *   @param d numbers which define the 2×3 or 4×4
         *   matrix to be multiplied
         *   @param e numbers which define the 2×3 or 4×4
         *   matrix to be multiplied
         *   @param f numbers which define the 2×3 or 4×4
         *   matrix to be multiplied
         *   @chainable
         */
        applyMatrix(a: number, b: number, c: number, d: number, e: number, f: number): p5;

        /**
         *   Multiplies the current matrix by the one specified
         *   through the parameters. This is a powerful
         *   operation that can perform the equivalent of
         *   translate, scale, shear and rotate all at once.
         *   You can learn more about transformation matrices
         *   on  Wikipedia. The naming of the arguments here
         *   follows the naming of the  WHATWG specification
         *   and corresponds to a transformation matrix of the
         *   form:
         *   @param a numbers which define the 2×3 or 4×4
         *   matrix to be multiplied
         *   @param b numbers which define the 2×3 or 4×4
         *   matrix to be multiplied
         *   @param c numbers which define the 2×3 or 4×4
         *   matrix to be multiplied
         *   @param d numbers which define the 2×3 or 4×4
         *   matrix to be multiplied
         *   @param e numbers which define the 2×3 or 4×4
         *   matrix to be multiplied
         *   @param f numbers which define the 2×3 or 4×4
         *   matrix to be multiplied
         *   @param g numbers which define the 4×4 matrix to be
         *   multiplied
         *   @param h numbers which define the 4×4 matrix to be
         *   multiplied
         *   @param i numbers which define the 4×4 matrix to be
         *   multiplied
         *   @param j numbers which define the 4×4 matrix to be
         *   multiplied
         *   @param k numbers which define the 4×4 matrix to be
         *   multiplied
         *   @param l numbers which define the 4×4 matrix to be
         *   multiplied
         *   @param m numbers which define the 4×4 matrix to be
         *   multiplied
         *   @param n numbers which define the 4×4 matrix to be
         *   multiplied
         *   @param o numbers which define the 4×4 matrix to be
         *   multiplied
         *   @param p numbers which define the 4×4 matrix to be
         *   multiplied
         *   @chainable
         */
        applyMatrix(
            a: number,
            b: number,
            c: number,
            d: number,
            e: number,
            f: number,
            g: number,
            h: number,
            i: number,
            j: number,
            k: number,
            l: number,
            m: number,
            n: number,
            o: number,
            p: number
        ): p5;

        /**
         *   Replaces the current matrix with the identity
         *   matrix.
         *   @chainable
         */
        resetMatrix(): p5;

        /**
         *   Rotates a shape by the amount specified by the
         *   angle parameter. This function accounts for
         *   angleMode, so angles can be entered in either
         *   RADIANS or DEGREES. Objects are always rotated
         *   around their relative position to the origin and
         *   positive numbers rotate objects in a clockwise
         *   direction. Transformations apply to everything
         *   that happens after and subsequent calls to the
         *   function accumulate the effect. For example,
         *   calling rotate(HALF_PI) and then rotate(HALF_PI)
         *   is the same as rotate(PI). All transformations are
         *   reset when draw() begins again.
         *
         *   Technically, rotate() multiplies the current
         *   transformation matrix by a rotation matrix. This
         *   function can be further controlled by push() and
         *   pop().
         *   @param angle the angle of rotation, specified in
         *   radians or degrees, depending on current angleMode
         *   @param [axis] (in 3d) the axis to rotate around
         *   @chainable
         */
        rotate(angle: number, axis?: Vector | number[]): p5;

        /**
         *   Rotates a shape around X axis by the amount
         *   specified in angle parameter. The angles can be
         *   entered in either RADIANS or DEGREES. Objects are
         *   always rotated around their relative position to
         *   the origin and positive numbers rotate objects in
         *   a clockwise direction. All transformations are
         *   reset when draw() begins again.
         *   @param angle the angle of rotation, specified in
         *   radians or degrees, depending on current angleMode
         *   @chainable
         */
        rotateX(angle: number): p5;

        /**
         *   Rotates a shape around Y axis by the amount
         *   specified in angle parameter. The angles can be
         *   entered in either RADIANS or DEGREES. Objects are
         *   always rotated around their relative position to
         *   the origin and positive numbers rotate objects in
         *   a clockwise direction. All transformations are
         *   reset when draw() begins again.
         *   @param angle the angle of rotation, specified in
         *   radians or degrees, depending on current angleMode
         *   @chainable
         */
        rotateY(angle: number): p5;

        /**
         *   Rotates a shape around Z axis by the amount
         *   specified in angle parameter. The angles can be
         *   entered in either RADIANS or DEGREES. This method
         *   works in WEBGL mode only.
         *
         *   Objects are always rotated around their relative
         *   position to the origin and positive numbers rotate
         *   objects in a clockwise direction. All
         *   transformations are reset when draw() begins
         *   again.
         *   @param angle the angle of rotation, specified in
         *   radians or degrees, depending on current angleMode
         *   @chainable
         */
        rotateZ(angle: number): p5;

        /**
         *   Increases or decreases the size of a shape by
         *   expanding or contracting vertices. Objects always
         *   scale from their relative origin to the coordinate
         *   system. Scale values are specified as decimal
         *   percentages. For example, the function call
         *   scale(2.0) increases the dimension of a shape by
         *   200%. Transformations apply to everything that
         *   happens after and subsequent calls to the function
         *   multiply the effect. For example, calling
         *   scale(2.0) and then scale(1.5) is the same as
         *   scale(3.0). If scale() is called within draw(),
         *   the transformation is reset when the loop begins
         *   again.
         *
         *   Using this function with the z parameter is only
         *   available in WEBGL mode. This function can be
         *   further controlled with push() and pop().
         *   @param s percent to scale the object, or
         *   percentage to scale the object in the x-axis if
         *   multiple arguments are given
         *   @param [y] percent to scale the object in the
         *   y-axis
         *   @param [z] percent to scale the object in the
         *   z-axis (webgl only)
         *   @chainable
         */
        scale(s: number | Vector | number[], y?: number, z?: number): p5;

        /**
         *   Increases or decreases the size of a shape by
         *   expanding or contracting vertices. Objects always
         *   scale from their relative origin to the coordinate
         *   system. Scale values are specified as decimal
         *   percentages. For example, the function call
         *   scale(2.0) increases the dimension of a shape by
         *   200%. Transformations apply to everything that
         *   happens after and subsequent calls to the function
         *   multiply the effect. For example, calling
         *   scale(2.0) and then scale(1.5) is the same as
         *   scale(3.0). If scale() is called within draw(),
         *   the transformation is reset when the loop begins
         *   again.
         *
         *   Using this function with the z parameter is only
         *   available in WEBGL mode. This function can be
         *   further controlled with push() and pop().
         *   @param scales per-axis percents to scale the
         *   object
         *   @chainable
         */
        scale(scales: Vector | number[]): p5;

        /**
         *   Shears a shape around the x-axis by the amount
         *   specified by the angle parameter. Angles should be
         *   specified in the current angleMode. Objects are
         *   always sheared around their relative position to
         *   the origin and positive numbers shear objects in a
         *   clockwise direction. Transformations apply to
         *   everything that happens after and subsequent calls
         *   to the function accumulates the effect. For
         *   example, calling shearX(PI/2) and then
         *   shearX(PI/2) is the same as shearX(PI). If
         *   shearX() is called within the draw(), the
         *   transformation is reset when the loop begins
         *   again.
         *
         *   Technically, shearX() multiplies the current
         *   transformation matrix by a rotation matrix. This
         *   function can be further controlled by the push()
         *   and pop() functions.
         *   @param angle angle of shear specified in radians
         *   or degrees, depending on current angleMode
         *   @chainable
         */
        shearX(angle: number): p5;

        /**
         *   Shears a shape around the y-axis the amount
         *   specified by the angle parameter. Angles should be
         *   specified in the current angleMode. Objects are
         *   always sheared around their relative position to
         *   the origin and positive numbers shear objects in a
         *   clockwise direction. Transformations apply to
         *   everything that happens after and subsequent calls
         *   to the function accumulates the effect. For
         *   example, calling shearY(PI/2) and then
         *   shearY(PI/2) is the same as shearY(PI). If
         *   shearY() is called within the draw(), the
         *   transformation is reset when the loop begins
         *   again.
         *
         *   Technically, shearY() multiplies the current
         *   transformation matrix by a rotation matrix. This
         *   function can be further controlled by the push()
         *   and pop() functions.
         *   @param angle angle of shear specified in radians
         *   or degrees, depending on current angleMode
         *   @chainable
         */
        shearY(angle: number): p5;

        /**
         *   Specifies an amount to displace objects within the
         *   display window. The x parameter specifies
         *   left/right translation, the y parameter specifies
         *   up/down translation. Transformations are
         *   cumulative and apply to everything that happens
         *   after and subsequent calls to the function
         *   accumulates the effect. For example, calling
         *   translate(50, 0) and then translate(20, 0) is the
         *   same as translate(70, 0). If translate() is called
         *   within draw(), the transformation is reset when
         *   the loop begins again. This function can be
         *   further controlled by using push() and pop().
         *   @param x left/right translation
         *   @param y up/down translation
         *   @param [z] forward/backward translation (WEBGL
         *   only)
         *   @chainable
         */
        translate(x: number, y: number, z?: number): p5;

        /**
         *   Specifies an amount to displace objects within the
         *   display window. The x parameter specifies
         *   left/right translation, the y parameter specifies
         *   up/down translation. Transformations are
         *   cumulative and apply to everything that happens
         *   after and subsequent calls to the function
         *   accumulates the effect. For example, calling
         *   translate(50, 0) and then translate(20, 0) is the
         *   same as translate(70, 0). If translate() is called
         *   within draw(), the transformation is reset when
         *   the loop begins again. This function can be
         *   further controlled by using push() and pop().
         *   @param vector the vector to translate by
         *   @chainable
         */
        translate(vector: Vector): p5;
    }
}
