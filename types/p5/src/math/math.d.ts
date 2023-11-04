// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Creates a new p5.Vector object. A vector is like
         *   an arrow pointing in space. Vectors have both
         *   magnitude (length) and direction. Calling
         *   createVector() without arguments sets the new
         *   vector's components to 0. p5.Vector objects are
         *   often used to program motion because they simplify
         *   the math. For example, a moving ball has a
         *   position and a velocity. Position describes where
         *   the ball is in space. The ball's position vector
         *   extends from the origin to the ball's center.
         *   Velocity describes the ball's speed and the
         *   direction it's moving. If the ball is moving
         *   straight up, its velocity vector points straight
         *   up. Adding the ball's velocity vector to its
         *   position vector moves it, as in pos.add(vel).
         *   Vector math relies on methods inside the
         *   p5.Vector` class.
         *   @param [x] x component of the vector.
         *   @param [y] y component of the vector.
         *   @param [z] z component of the vector.
         *   @return new p5.Vector object.
         */
        createVector(x?: number, y?: number, z?: number): Vector;
    }
}
