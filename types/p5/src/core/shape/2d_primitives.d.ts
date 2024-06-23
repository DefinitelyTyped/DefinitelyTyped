// This file was auto-generated. Please do not edit it.

import * as p5 from '../../../index';

declare module '../../../index' {
    interface p5InstanceExtensions {
        /**
         *   Draws an arc to the canvas. Arcs are drawn along
         *   the outer edge of an ellipse (oval) defined by the
         *   x, y, w, and h parameters. Use the start and stop
         *   parameters to specify the angles (in radians) at
         *   which to draw the arc. Arcs are always drawn
         *   clockwise from start to stop. The origin of the
         *   arc's ellipse may be changed with the
         *   ellipseMode() function. The optional mode
         *   parameter determines the arc's fill style. The
         *   fill modes are a semi-circle (OPEN), a closed
         *   semi-circle (CHORD), or a closed pie segment
         *   (PIE).
         *   @param x x-coordinate of the arc's ellipse.
         *   @param y y-coordinate of the arc's ellipse.
         *   @param w width of the arc's ellipse by default.
         *   @param h height of the arc's ellipse by default.
         *   @param start angle to start the arc, specified in
         *   radians.
         *   @param stop angle to stop the arc, specified in
         *   radians.
         *   @param [mode] optional parameter to determine the
         *   way of drawing the arc. either CHORD, PIE, or
         *   OPEN.
         *   @param [detail] optional parameter for WebGL mode
         *   only. This is to specify the number of vertices
         *   that makes up the perimeter of the arc. Default
         *   value is 25. Won't draw a stroke for a detail of
         *   more than 50.
         *   @chainable
         */
        arc(
            x: number,
            y: number,
            w: number,
            h: number,
            start: number,
            stop: number,
            mode?: ARC_MODE,
            detail?: number
        ): p5;

        /**
         *   Draws an ellipse (oval) to the canvas. An ellipse
         *   with equal width and height is a circle. By
         *   default, the first two parameters set the location
         *   of the center of the ellipse. The third and fourth
         *   parameters set the shape's width and height,
         *   respectively. The origin may be changed with the
         *   ellipseMode() function. If no height is specified,
         *   the value of width is used for both the width and
         *   height. If a negative height or width is
         *   specified, the absolute value is taken.
         *   @param x x-coordinate of the center of the
         *   ellipse.
         *   @param y y-coordinate of the center of the
         *   ellipse.
         *   @param w width of the ellipse.
         *   @param [h] height of the ellipse.
         *   @chainable
         */
        ellipse(x: number, y: number, w: number, h?: number): p5;

        /**
         *   Draws an ellipse (oval) to the canvas. An ellipse
         *   with equal width and height is a circle. By
         *   default, the first two parameters set the location
         *   of the center of the ellipse. The third and fourth
         *   parameters set the shape's width and height,
         *   respectively. The origin may be changed with the
         *   ellipseMode() function. If no height is specified,
         *   the value of width is used for both the width and
         *   height. If a negative height or width is
         *   specified, the absolute value is taken.
         *   @param x x-coordinate of the center of the
         *   ellipse.
         *   @param y y-coordinate of the center of the
         *   ellipse.
         *   @param w width of the ellipse.
         *   @param h height of the ellipse.
         *   @param [detail] optional parameter for WebGL mode
         *   only. This is to specify the number of vertices
         *   that makes up the perimeter of the ellipse.
         *   Default value is 25. Won't draw a stroke for a
         *   detail of more than 50.
         */
        ellipse(x: number, y: number, w: number, h: number, detail?: number): void;

        /**
         *   Draws a circle to the canvas. A circle is a round
         *   shape. Every point on the edge of a circle is the
         *   same distance from its center. By default, the
         *   first two parameters set the location of the
         *   center of the circle. The third parameter sets the
         *   shape's width and height (diameter). The origin
         *   may be changed with the ellipseMode() function.
         *   @param x x-coordinate of the center of the circle.
         *   @param y y-coordinate of the center of the circle.
         *   @param d diameter of the circle.
         *   @chainable
         */
        circle(x: number, y: number, d: number): p5;

        /**
         *   Draws a line, a straight path between two points.
         *   Its default width is one pixel. The version of
         *   line() with four parameters draws the line in 2D.
         *   To color a line, use the stroke() function. To
         *   change its width, use the strokeWeight() function.
         *   A line can't be filled, so the fill() function
         *   won't affect the color of a line. The version of
         *   line() with six parameters allows the line to be
         *   drawn in 3D space. Doing so requires adding the
         *   WEBGL argument to createCanvas().
         *   @param x1 the x-coordinate of the first point.
         *   @param y1 the y-coordinate of the first point.
         *   @param x2 the x-coordinate of the second point.
         *   @param y2 the y-coordinate of the second point.
         *   @chainable
         */
        line(x1: number, y1: number, x2: number, y2: number): p5;

        /**
         *   Draws a line, a straight path between two points.
         *   Its default width is one pixel. The version of
         *   line() with four parameters draws the line in 2D.
         *   To color a line, use the stroke() function. To
         *   change its width, use the strokeWeight() function.
         *   A line can't be filled, so the fill() function
         *   won't affect the color of a line. The version of
         *   line() with six parameters allows the line to be
         *   drawn in 3D space. Doing so requires adding the
         *   WEBGL argument to createCanvas().
         *   @param x1 the x-coordinate of the first point.
         *   @param y1 the y-coordinate of the first point.
         *   @param z1 the z-coordinate of the first point.
         *   @param x2 the x-coordinate of the second point.
         *   @param y2 the y-coordinate of the second point.
         *   @param z2 the z-coordinate of the second point.
         *   @chainable
         */
        line(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): p5;

        /**
         *   Draws a point, a single coordinate in space. Its
         *   default size is one pixel. The first two
         *   parameters are the point's x- and y-coordinates,
         *   respectively. To color a point, use the stroke()
         *   function. To change its size, use the
         *   strokeWeight() function. The version of point()
         *   with three parameters allows the point to be drawn
         *   in 3D space. Doing so requires adding the WEBGL
         *   argument to createCanvas().
         *
         *   The version of point() with one parameter allows
         *   the point's location to be set with a p5.Vector
         *   object.
         *   @param x the x-coordinate.
         *   @param y the y-coordinate.
         *   @param [z] the z-coordinate (for WebGL mode).
         *   @chainable
         */
        point(x: number, y: number, z?: number): p5;

        /**
         *   Draws a point, a single coordinate in space. Its
         *   default size is one pixel. The first two
         *   parameters are the point's x- and y-coordinates,
         *   respectively. To color a point, use the stroke()
         *   function. To change its size, use the
         *   strokeWeight() function. The version of point()
         *   with three parameters allows the point to be drawn
         *   in 3D space. Doing so requires adding the WEBGL
         *   argument to createCanvas().
         *
         *   The version of point() with one parameter allows
         *   the point's location to be set with a p5.Vector
         *   object.
         *   @param coordinateVector the coordinate vector.
         *   @chainable
         */
        point(coordinateVector: Vector): p5;

        /**
         *   Draws a quad to the canvas. A quad is a
         *   quadrilateral, a four-sided polygon. Some examples
         *   of quads include rectangles, squares, rhombuses,
         *   and trapezoids. The first pair of parameters
         *   (x1,y1) sets the quad's first point. The following
         *   pairs of parameters set the coordinates for its
         *   next three points. Parameters should proceed
         *   clockwise or counter-clockwise around the shape.
         *   The version of quad() with twelve parameters
         *   allows the quad to be drawn in 3D space. Doing so
         *   requires adding the WEBGL argument to
         *   createCanvas().
         *   @param x1 the x-coordinate of the first point.
         *   @param y1 the y-coordinate of the first point.
         *   @param x2 the x-coordinate of the second point.
         *   @param y2 the y-coordinate of the second point.
         *   @param x3 the x-coordinate of the third point.
         *   @param y3 the y-coordinate of the third point.
         *   @param x4 the x-coordinate of the fourth point.
         *   @param y4 the y-coordinate of the fourth point.
         *   @param [detailX] number of segments in the
         *   x-direction.
         *   @param [detailY] number of segments in the
         *   y-direction.
         *   @chainable
         */
        quad(
            x1: number,
            y1: number,
            x2: number,
            y2: number,
            x3: number,
            y3: number,
            x4: number,
            y4: number,
            detailX?: number,
            detailY?: number
        ): p5;

        /**
         *   Draws a quad to the canvas. A quad is a
         *   quadrilateral, a four-sided polygon. Some examples
         *   of quads include rectangles, squares, rhombuses,
         *   and trapezoids. The first pair of parameters
         *   (x1,y1) sets the quad's first point. The following
         *   pairs of parameters set the coordinates for its
         *   next three points. Parameters should proceed
         *   clockwise or counter-clockwise around the shape.
         *   The version of quad() with twelve parameters
         *   allows the quad to be drawn in 3D space. Doing so
         *   requires adding the WEBGL argument to
         *   createCanvas().
         *   @param x1 the x-coordinate of the first point.
         *   @param y1 the y-coordinate of the first point.
         *   @param z1 the z-coordinate of the first point.
         *   @param x2 the x-coordinate of the second point.
         *   @param y2 the y-coordinate of the second point.
         *   @param z2 the z-coordinate of the second point.
         *   @param x3 the x-coordinate of the third point.
         *   @param y3 the y-coordinate of the third point.
         *   @param z3 the z-coordinate of the third point.
         *   @param x4 the x-coordinate of the fourth point.
         *   @param y4 the y-coordinate of the fourth point.
         *   @param z4 the z-coordinate of the fourth point.
         *   @param [detailX] number of segments in the
         *   x-direction.
         *   @param [detailY] number of segments in the
         *   y-direction.
         *   @chainable
         */
        quad(
            x1: number,
            y1: number,
            z1: number,
            x2: number,
            y2: number,
            z2: number,
            x3: number,
            y3: number,
            z3: number,
            x4: number,
            y4: number,
            z4: number,
            detailX?: number,
            detailY?: number
        ): p5;

        /**
         *   Draws a rectangle to the canvas. A rectangle is a
         *   four-sided polygon with every angle at ninety
         *   degrees. By default, the first two parameters set
         *   the location of the rectangle's upper-left corner.
         *   The third and fourth set the shape's the width and
         *   height, respectively. The way these parameters are
         *   interpreted may be changed with the rectMode()
         *   function. The version of rect() with five
         *   parameters creates a rounded rectangle. The fifth
         *   parameter is used as the radius value for all four
         *   corners.
         *
         *   The version of rect() with eight parameters also
         *   creates a rounded rectangle. When using eight
         *   parameters, the latter four set the radius of the
         *   arc at each corner separately. The radii start
         *   with the top-left corner and move clockwise around
         *   the rectangle. If any of these parameters are
         *   omitted, they are set to the value of the last
         *   specified corner radius.
         *   @param x x-coordinate of the rectangle.
         *   @param y y-coordinate of the rectangle.
         *   @param w width of the rectangle.
         *   @param [h] height of the rectangle.
         *   @param [tl] optional radius of top-left corner.
         *   @param [tr] optional radius of top-right corner.
         *   @param [br] optional radius of bottom-right
         *   corner.
         *   @param [bl] optional radius of bottom-left corner.
         *   @chainable
         */
        rect(x: number, y: number, w: number, h?: number, tl?: number, tr?: number, br?: number, bl?: number): p5;

        /**
         *   Draws a rectangle to the canvas. A rectangle is a
         *   four-sided polygon with every angle at ninety
         *   degrees. By default, the first two parameters set
         *   the location of the rectangle's upper-left corner.
         *   The third and fourth set the shape's the width and
         *   height, respectively. The way these parameters are
         *   interpreted may be changed with the rectMode()
         *   function. The version of rect() with five
         *   parameters creates a rounded rectangle. The fifth
         *   parameter is used as the radius value for all four
         *   corners.
         *
         *   The version of rect() with eight parameters also
         *   creates a rounded rectangle. When using eight
         *   parameters, the latter four set the radius of the
         *   arc at each corner separately. The radii start
         *   with the top-left corner and move clockwise around
         *   the rectangle. If any of these parameters are
         *   omitted, they are set to the value of the last
         *   specified corner radius.
         *   @param x x-coordinate of the rectangle.
         *   @param y y-coordinate of the rectangle.
         *   @param w width of the rectangle.
         *   @param h height of the rectangle.
         *   @param [detailX] number of segments in the
         *   x-direction (for WebGL mode).
         *   @param [detailY] number of segments in the
         *   y-direction (for WebGL mode).
         *   @chainable
         */
        rect(x: number, y: number, w: number, h: number, detailX?: number, detailY?: number): p5;

        /**
         *   Draws a square to the canvas. A square is a
         *   four-sided polygon with every angle at ninety
         *   degrees and equal side lengths. By default, the
         *   first two parameters set the location of the
         *   square's upper-left corner. The third parameter
         *   sets its side size. The way these parameters are
         *   interpreted may be changed with the rectMode()
         *   function. The version of square() with four
         *   parameters creates a rounded square. The fourth
         *   parameter is used as the radius value for all four
         *   corners.
         *
         *   The version of square() with seven parameters also
         *   creates a rounded square. When using seven
         *   parameters, the latter four set the radius of the
         *   arc at each corner separately. The radii start
         *   with the top-left corner and move clockwise around
         *   the square. If any of these parameters are
         *   omitted, they are set to the value of the last
         *   specified corner radius.
         *   @param x x-coordinate of the square.
         *   @param y y-coordinate of the square.
         *   @param s side size of the square.
         *   @param [tl] optional radius of top-left corner.
         *   @param [tr] optional radius of top-right corner.
         *   @param [br] optional radius of bottom-right
         *   corner.
         *   @param [bl] optional radius of bottom-left corner.
         *   @chainable
         */
        square(x: number, y: number, s: number, tl?: number, tr?: number, br?: number, bl?: number): p5;

        /**
         *   Draws a triangle to the canvas. A triangle is a
         *   three-sided polygon. The first two parameters
         *   specify the triangle's first point (x1,y1). The
         *   middle two parameters specify its second point
         *   (x2,y2). And the last two parameters specify its
         *   third point (x3, y3).
         *   @param x1 x-coordinate of the first point.
         *   @param y1 y-coordinate of the first point.
         *   @param x2 x-coordinate of the second point.
         *   @param y2 y-coordinate of the second point.
         *   @param x3 x-coordinate of the third point.
         *   @param y3 y-coordinate of the third point.
         *   @chainable
         */
        triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): p5;
    }
}
