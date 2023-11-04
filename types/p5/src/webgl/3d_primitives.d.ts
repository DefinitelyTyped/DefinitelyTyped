// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Starts creating a new p5.Geometry. Subsequent
         *   shapes drawn will be added to the geometry and
         *   then returned when endGeometry() is called. One
         *   can also use buildGeometry() to pass a function
         *   that draws shapes. If you need to draw complex
         *   shapes every frame which don't change over time,
         *   combining them upfront with beginGeometry() and
         *   endGeometry() and then drawing that will run
         *   faster than repeatedly drawing the individual
         *   pieces.
         */
        beginGeometry(): void;

        /**
         *   Finishes creating a new p5.Geometry that was
         *   started using beginGeometry(). One can also use
         *   buildGeometry() to pass a function that draws
         *   shapes.
         *   @return The model that was built.
         */
        endGeometry(): Geometry;

        /**
         *   Creates a new p5.Geometry that contains all the
         *   shapes drawn in a provided callback function. The
         *   returned combined shape can then be drawn all at
         *   once using model(). If you need to draw complex
         *   shapes every frame which don't change over time,
         *   combining them with buildGeometry() once and then
         *   drawing that will run faster than repeatedly
         *   drawing the individual pieces.
         *
         *   One can also draw shapes directly between
         *   beginGeometry() and endGeometry() instead of using
         *   a callback function.
         *   @param callback A function that draws shapes.
         *   @return The model that was built from the callback
         *   function.
         */
        buildGeometry(callback: (...args: any[]) => any): Geometry;

        /**
         *   Clears the resources of a model to free up browser
         *   memory. A model whose resources have been cleared
         *   can still be drawn, but the first time it is drawn
         *   again, it might take longer. This method works on
         *   models generated with buildGeometry() as well as
         *   those loaded from loadModel().
         *   @param The geometry whose resources should be
         *   freed
         */
        freeGeometry(The: Geometry): void;

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
