// This file was auto-generated. Please do not edit it.

import * as p5 from "../../index";

declare module "../../index" {
  class Geometry {
    /**
     *   p5 Geometry class
     *
     *   @param [detailX] number of vertices on horizontal
     *   surface
     *   @param [detailY] number of vertices on horizontal
     *   surface
     *   @param [callback] function to call upon object
     *   instantiation.
     */
    constructor(
      detailX?: number,
      detailY?: number,
      callback?: (
        ...args: any[]
      ) => any
    );
    computeFaces(): Geometry;

    /**
     *   computes smooth normals per vertex as an average
     *   of each face.
     *   @chainable
     */
    computeNormals(): Geometry;

    /**
     *   Averages the vertex normals. Used in curved
     *   surfaces
     *   @chainable
     */
    averageNormals(): Geometry;

    /**
     *   Averages pole normals. Used in spherical
     *   primitives
     *   @chainable
     */
    averagePoleNormals(): Geometry;

    /**
     *   Modifies all vertices to be centered within the
     *   range -100 to 100.
     *   @chainable
     */
    normalize(): Geometry;
  }
}
