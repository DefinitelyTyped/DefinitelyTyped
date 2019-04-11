// This file was auto-generated. Please do not edit it.

import * as p5 from "../../index";

declare module "../../index" {
  interface p5InstanceExtensions {
    /**
     *   Draw a plane with given a width and height
     *   @param [width] width of the plane
     *   @param [height] height of the plane
     *   @param [detailX] Optional number of triangle
     *   subdivisions in x-dimension
     *   @param [detailY] Optional number of triangle
     *   subdivisions in y-dimension
     *   @chainable
     */
    plane(
      width?: number,
      height?: number,
      detailX?: number,
      detailY?: number
    ): p5;

    /**
     *   Draw a box with given width, height and depth
     *   @param [width] width of the box
     *   @param [Height] height of the box
     *   @param [depth] depth of the box
     *   @param [detailX] Optional number of triangle
     *   subdivisions in x-dimension
     *   @param [detailY] Optional number of triangle
     *   subdivisions in y-dimension
     *   @chainable
     */
    box(
      width?: number,
      Height?: number,
      depth?: number,
      detailX?: number,
      detailY?: number
    ): p5;

    /**
     *   Draw a sphere with given radius
     *   @param [radius] radius of circle
     *   @param [detailX] number of segments, the more
     *   segments the smoother geometry default is 24
     *   @param [detailY] number of segments, the more
     *   segments the smoother geometry default is 16
     *   @chainable
     */
    sphere(
      radius?: number,
      detailX?: number,
      detailY?: number
    ): p5;

    /**
     *   Draw a cylinder with given radius and height
     *   @param [radius] radius of the surface
     *   @param [height] height of the cylinder
     *   @param [detailX] number of segments, the more
     *   segments the smoother geometry default is 24
     *   @param [detailY] number of segments in
     *   y-dimension, the more segments the smoother
     *   geometry default is 1
     *   @param [bottomCap] whether to draw the bottom of
     *   the cylinder
     *   @param [topCap] whether to draw the top of the
     *   cylinder
     *   @chainable
     */
    cylinder(
      radius?: number,
      height?: number,
      detailX?: number,
      detailY?: number,
      bottomCap?: boolean,
      topCap?: boolean
    ): p5;

    /**
     *   Draw a cone with given radius and height
     *   @param [radius] radius of the bottom surface
     *   @param [height] height of the cone
     *   @param [detailX] number of segments, the more
     *   segments the smoother geometry default is 24
     *   @param [detailY] number of segments, the more
     *   segments the smoother geometry default is 1
     *   @param [cap] whether to draw the base of the cone
     *   @chainable
     */
    cone(
      radius?: number,
      height?: number,
      detailX?: number,
      detailY?: number,
      cap?: boolean
    ): p5;

    /**
     *   Draw an ellipsoid with given radius
     *   @param [radiusx] xradius of circle
     *   @param [radiusy] yradius of circle
     *   @param [radiusz] zradius of circle
     *   @param [detailX] number of segments, the more
     *   segments the smoother geometry default is 24.
     *   Avoid detail number above 150, it may crash the
     *   browser.
     *   @param [detailY] number of segments, the more
     *   segments the smoother geometry default is 16.
     *   Avoid detail number above 150, it may crash the
     *   browser.
     *   @chainable
     */
    ellipsoid(
      radiusx?: number,
      radiusy?: number,
      radiusz?: number,
      detailX?: number,
      detailY?: number
    ): p5;

    /**
     *   Draw a torus with given radius and tube radius
     *   @param [radius] radius of the whole ring
     *   @param [tubeRadius] radius of the tube
     *   @param [detailX] number of segments in
     *   x-dimension, the more segments the smoother
     *   geometry default is 24
     *   @param [detailY] number of segments in
     *   y-dimension, the more segments the smoother
     *   geometry default is 16
     *   @chainable
     */
    torus(
      radius?: number,
      tubeRadius?: number,
      detailX?: number,
      detailY?: number
    ): p5;
  }
}
