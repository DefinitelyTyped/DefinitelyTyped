// This file was auto-generated. Please do not edit it.

import * as p5 from '../../../index';

declare module '../../../index' {
    interface p5InstanceExtensions {
        /**
         *   Draw an arc to the screen. If called with only x,
         *   y, w, h, start, and stop, the arc will be drawn
         *   and filled as an open pie segment. If a mode
         *   parameter is provided, the arc will be filled like
         *   an open semi-circle (OPEN) , a closed semi-circle
         *   (CHORD), or as a closed pie segment (PIE). The
         *   origin may be changed with the ellipseMode()
         *   function. The arc is always drawn clockwise from
         *   wherever start falls to wherever stop falls on the
         *   ellipse. Adding or subtracting TWO_PI to either
         *   angle does not change where they fall. If both
         *   start and stop fall at the same place, a full
         *   ellipse will be drawn. Be aware that the the
         *   y-axis increases in the downward direction
         *   therefore the values of PI is counter clockwise.
         *   @param x x-coordinate of the arc's ellipse
         *   @param y y-coordinate of the arc's ellipse
         *   @param w width of the arc's ellipse by default
         *   @param h height of the arc's ellipse by default
         *   @param start angle to start the arc, specified in
         *   radians
         *   @param stop angle to stop the arc, specified in
         *   radians
         *   @param [mode] optional parameter to determine the
         *   way of drawing the arc. either CHORD, PIE or OPEN
         *   @param [detail] optional parameter for WebGL mode
         *   only. This is to specify the number of vertices
         *   that makes up the perimeter of the arc. Default
         *   value is 25.
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
         *   Draws an ellipse (oval) to the screen. An ellipse
         *   with equal width and height is a circle. By
         *   default, the first two parameters set the
         *   location, and the third and fourth parameters set
         *   the shape's width and height. If no height is
         *   specified, the value of width is used for both the
         *   width and height. If a negative height or width is
         *   specified, the absolute value is taken. The origin
         *   may be changed with the ellipseMode() function.
         *   @param x x-coordinate of the ellipse.
         *   @param y y-coordinate of the ellipse.
         *   @param w width of the ellipse.
         *   @param [h] height of the ellipse.
         *   @chainable
         */
        ellipse(x: number, y: number, w: number, h?: number): p5;

        /**
         *   Draws an ellipse (oval) to the screen. An ellipse
         *   with equal width and height is a circle. By
         *   default, the first two parameters set the
         *   location, and the third and fourth parameters set
         *   the shape's width and height. If no height is
         *   specified, the value of width is used for both the
         *   width and height. If a negative height or width is
         *   specified, the absolute value is taken. The origin
         *   may be changed with the ellipseMode() function.
         *   @param x x-coordinate of the ellipse.
         *   @param y y-coordinate of the ellipse.
         *   @param w width of the ellipse.
         *   @param h height of the ellipse.
         *   @param detail number of radial sectors to draw
         *   (for WebGL mode)
         */
        ellipse(x: number, y: number, w: number, h: number, detail: number): void;

        /**
         *   Draws a circle to the screen. A circle is a simple
         *   closed shape. It is the set of all points in a
         *   plane that are at a given distance from a given
         *   point, the centre. This function is a special case
         *   of the ellipse() function, where the width and
         *   height of the ellipse are the same. Height and
         *   width of the ellipse correspond to the diameter of
         *   the circle. By default, the first two parameters
         *   set the location of the centre of the circle, the
         *   third sets the diameter of the circle.
         *   @param x x-coordinate of the centre of the circle.
         *   @param y y-coordinate of the centre of the circle.
         *   @param d diameter of the circle.
         *   @chainable
         */
        circle(x: number, y: number, d: number): p5;

        /**
         *   Draws a line (a direct path between two points) to
         *   the screen. The version of line() with four
         *   parameters draws the line in 2D. To color a line,
         *   use the stroke() function. A line cannot be
         *   filled, therefore the fill() function will not
         *   affect the color of a line. 2D lines are drawn
         *   with a width of one pixel by default, but this can
         *   be changed with the strokeWeight() function.
         *   @param x1 the x-coordinate of the first point
         *   @param y1 the y-coordinate of the first point
         *   @param x2 the x-coordinate of the second point
         *   @param y2 the y-coordinate of the second point
         *   @chainable
         */
        line(x1: number, y1: number, x2: number, y2: number): p5;

        /**
         *   Draws a line (a direct path between two points) to
         *   the screen. The version of line() with four
         *   parameters draws the line in 2D. To color a line,
         *   use the stroke() function. A line cannot be
         *   filled, therefore the fill() function will not
         *   affect the color of a line. 2D lines are drawn
         *   with a width of one pixel by default, but this can
         *   be changed with the strokeWeight() function.
         *   @param x1 the x-coordinate of the first point
         *   @param y1 the y-coordinate of the first point
         *   @param z1 the z-coordinate of the first point
         *   @param x2 the x-coordinate of the second point
         *   @param y2 the y-coordinate of the second point
         *   @param z2 the z-coordinate of the second point
         *   @chainable
         */
        line(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): p5;

        /**
         *   Draws a point, a coordinate in space at the
         *   dimension of one pixel. The first parameter is the
         *   horizontal value for the point, the second value
         *   is the vertical value for the point. The color of
         *   the point is determined by the current stroke.
         *   @param x the x-coordinate
         *   @param y the y-coordinate
         *   @param [z] the z-coordinate (for WebGL mode)
         *   @chainable
         */
        point(x: number, y: number, z?: number): p5;

        /**
         *   Draw a quad. A quad is a quadrilateral, a four
         *   sided polygon. It is similar to a rectangle, but
         *   the angles between its edges are not constrained
         *   to ninety degrees. The first pair of parameters
         *   (x1,y1) sets the first vertex and the subsequent
         *   pairs should proceed clockwise or
         *   counter-clockwise around the defined shape.
         *   z-arguments only work when quad() is used in WEBGL
         *   mode.
         *   @param x1 the x-coordinate of the first point
         *   @param y1 the y-coordinate of the first point
         *   @param x2 the x-coordinate of the second point
         *   @param y2 the y-coordinate of the second point
         *   @param x3 the x-coordinate of the third point
         *   @param y3 the y-coordinate of the third point
         *   @param x4 the x-coordinate of the fourth point
         *   @param y4 the y-coordinate of the fourth point
         *   @chainable
         */
        quad(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): p5;

        /**
         *   Draw a quad. A quad is a quadrilateral, a four
         *   sided polygon. It is similar to a rectangle, but
         *   the angles between its edges are not constrained
         *   to ninety degrees. The first pair of parameters
         *   (x1,y1) sets the first vertex and the subsequent
         *   pairs should proceed clockwise or
         *   counter-clockwise around the defined shape.
         *   z-arguments only work when quad() is used in WEBGL
         *   mode.
         *   @param x1 the x-coordinate of the first point
         *   @param y1 the y-coordinate of the first point
         *   @param z1 the z-coordinate of the first point
         *   @param x2 the x-coordinate of the second point
         *   @param y2 the y-coordinate of the second point
         *   @param z2 the z-coordinate of the second point
         *   @param x3 the x-coordinate of the third point
         *   @param y3 the y-coordinate of the third point
         *   @param z3 the z-coordinate of the third point
         *   @param x4 the x-coordinate of the fourth point
         *   @param y4 the y-coordinate of the fourth point
         *   @param z4 the z-coordinate of the fourth point
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
            z4: number
        ): p5;

        /**
         *   Draws a rectangle to the screen. A rectangle is a
         *   four-sided shape with every angle at ninety
         *   degrees. By default, the first two parameters set
         *   the location of the upper-left corner, the third
         *   sets the width, and the fourth sets the height.
         *   The way these parameters are interpreted, however,
         *   may be changed with the rectMode() function.  The
         *   fifth, sixth, seventh and eighth parameters, if
         *   specified, determine corner radius for the
         *   top-left, top-right, lower-right and lower-left
         *   corners, respectively. An omitted corner radius
         *   parameter is set to the value of the previously
         *   specified radius value in the parameter list.
         *   @param x x-coordinate of the rectangle.
         *   @param y y-coordinate of the rectangle.
         *   @param w width of the rectangle.
         *   @param h height of the rectangle.
         *   @param [tl] optional radius of top-left corner.
         *   @param [tr] optional radius of top-right corner.
         *   @param [br] optional radius of bottom-right
         *   corner.
         *   @param [bl] optional radius of bottom-left corner.
         *   @chainable
         */
        rect(x: number, y: number, w: number, h: number, tl?: number, tr?: number, br?: number, bl?: number): p5;

        /**
         *   Draws a rectangle to the screen. A rectangle is a
         *   four-sided shape with every angle at ninety
         *   degrees. By default, the first two parameters set
         *   the location of the upper-left corner, the third
         *   sets the width, and the fourth sets the height.
         *   The way these parameters are interpreted, however,
         *   may be changed with the rectMode() function.  The
         *   fifth, sixth, seventh and eighth parameters, if
         *   specified, determine corner radius for the
         *   top-left, top-right, lower-right and lower-left
         *   corners, respectively. An omitted corner radius
         *   parameter is set to the value of the previously
         *   specified radius value in the parameter list.
         *   @param x x-coordinate of the rectangle.
         *   @param y y-coordinate of the rectangle.
         *   @param w width of the rectangle.
         *   @param h height of the rectangle.
         *   @param [detailX] number of segments in the
         *   x-direction (for WebGL mode)
         *   @param [detailY] number of segments in the
         *   y-direction (for WebGL mode)
         *   @chainable
         */
        rect(x: number, y: number, w: number, h: number, detailX?: number, detailY?: number): p5;

        /**
         *   Draws a square to the screen. A square is a
         *   four-sided shape with every angle at ninety
         *   degrees, and equal side size. This function is a
         *   special case of the rect() function, where the
         *   width and height are the same, and the parameter
         *   is called "s" for side size. By default, the first
         *   two parameters set the location of the upper-left
         *   corner, the third sets the side size of the
         *   square. The way these parameters are interpreted,
         *   however, may be changed with the rectMode()
         *   function.  The fourth, fifth, sixth and seventh
         *   parameters, if specified, determine corner radius
         *   for the top-left, top-right, lower-right and
         *   lower-left corners, respectively. An omitted
         *   corner radius parameter is set to the value of the
         *   previously specified radius value in the parameter
         *   list.
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
         *   A triangle is a plane created by connecting three
         *   points. The first two arguments specify the first
         *   point, the middle two arguments specify the second
         *   point, and the last two arguments specify the
         *   third point.
         *   @param x1 x-coordinate of the first point
         *   @param y1 y-coordinate of the first point
         *   @param x2 x-coordinate of the second point
         *   @param y2 y-coordinate of the second point
         *   @param x3 x-coordinate of the third point
         *   @param y3 y-coordinate of the third point
         *   @chainable
         */
        triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): p5;
    }
}
