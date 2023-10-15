// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
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
        plane(width?: number, height?: number, detailX?: number, detailY?: number): p5;

        /**
         *   Draw a box with given width, height and depth
         *   @param [width] width of the box
         *   @param [height] height of the box
         *   @param [depth] depth of the box
         *   @param [detailX] Optional number of triangle
         *   subdivisions in x-dimension
         *   @param [detailY] Optional number of triangle
         *   subdivisions in y-dimension
         *   @chainable
         */
        box(width?: number, height?: number, depth?: number, detailX?: number, detailY?: number): p5;

        /**
         *   Draw a sphere with given radius. DetailX and
         *   detailY determines the number of subdivisions in
         *   the x-dimension and the y-dimension of a sphere.
         *   More subdivisions make the sphere seem smoother.
         *   The recommended maximum values are both 24. Using
         *   a value greater than 24 may cause a warning or
         *   slow down the browser.
         *   @param [radius] radius of circle
         *   @param [detailX] optional number of subdivisions
         *   in x-dimension
         *   @param [detailY] optional number of subdivisions
         *   in y-dimension
         *   @chainable
         */
        sphere(radius?: number, detailX?: number, detailY?: number): p5;

        /**
         *   Draw a cylinder with given radius and height
         *   DetailX and detailY determines the number of
         *   subdivisions in the x-dimension and the
         *   y-dimension of a cylinder. More subdivisions make
         *   the cylinder seem smoother. The recommended
         *   maximum value for detailX is 24. Using a value
         *   greater than 24 may cause a warning or slow down
         *   the browser.
         *   @param [radius] radius of the surface
         *   @param [height] height of the cylinder
         *   @param [detailX] number of subdivisions in
         *   x-dimension; default is 24
         *   @param [detailY] number of subdivisions in
         *   y-dimension; default is 1
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
         *   Draw a cone with given radius and height DetailX
         *   and detailY determine the number of subdivisions
         *   in the x-dimension and the y-dimension of a cone.
         *   More subdivisions make the cone seem smoother. The
         *   recommended maximum value for detailX is 24. Using
         *   a value greater than 24 may cause a warning or
         *   slow down the browser.
         *   @param [radius] radius of the bottom surface
         *   @param [height] height of the cone
         *   @param [detailX] number of segments, the more
         *   segments the smoother geometry default is 24
         *   @param [detailY] number of segments, the more
         *   segments the smoother geometry default is 1
         *   @param [cap] whether to draw the base of the cone
         *   @chainable
         */
        cone(radius?: number, height?: number, detailX?: number, detailY?: number, cap?: boolean): p5;

        /**
         *   Draw an ellipsoid with given radius DetailX and
         *   detailY determine the number of subdivisions in
         *   the x-dimension and the y-dimension of a cone.
         *   More subdivisions make the ellipsoid appear to be
         *   smoother. Avoid detail number above 150, it may
         *   crash the browser.
         *   @param [radiusx] x-radius of ellipsoid
         *   @param [radiusy] y-radius of ellipsoid
         *   @param [radiusz] z-radius of ellipsoid
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
        ellipsoid(radiusx?: number, radiusy?: number, radiusz?: number, detailX?: number, detailY?: number): p5;

        /**
         *   Draw a torus with given radius and tube radius
         *   DetailX and detailY determine the number of
         *   subdivisions in the x-dimension and the
         *   y-dimension of a torus. More subdivisions make the
         *   torus appear to be smoother. The default and
         *   maximum values for detailX and detailY are 24 and
         *   16, respectively. Setting them to relatively small
         *   values like 4 and 6 allows you to create new
         *   shapes other than a torus.
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
        torus(radius?: number, tubeRadius?: number, detailX?: number, detailY?: number): p5;
    }
}
