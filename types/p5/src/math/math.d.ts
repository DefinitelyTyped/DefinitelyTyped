// This file was auto-generated. Please do not edit it.

import * as p5 from "../../index";

declare module "../../index" {
  interface p5InstanceExtensions {
    /**
     *   Creates a new p5.Vector (the datatype for storing
     *   vectors). This provides a two or three dimensional
     *   vector, specifically a Euclidean (also known as
     *   geometric) vector. A vector is an entity that has
     *   both magnitude and direction.
     *   @param [x] x component of the vector
     *   @param [y] y component of the vector
     *   @param [z] z component of the vector
     */
    createVector(
      x?: number,
      y?: number,
      z?: number
    ): Vector;
  }
}
