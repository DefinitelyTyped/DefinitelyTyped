// This file was auto-generated. Please do not edit it.

import * as p5 from '../../../index';

declare module '../../../index' {
    interface p5InstanceExtensions {
        /**
         *   Modifies the location from which ellipses,
         *   circles, and arcs are drawn. By default, the first
         *   two parameters are the x- and y-coordinates of the
         *   shape's center. The next parameters are its width
         *   and height. This is equivalent to calling
         *   ellipseMode(CENTER). ellipseMode(RADIUS) also uses
         *   the first two parameters to set the x- and
         *   y-coordinates of the shape's center. The next
         *   parameters are half of the shapes's width and
         *   height. Calling ellipse(0, 0, 10, 15) draws a
         *   shape with a width of 20 and height of 30.
         *
         *   ellipseMode(CORNER) uses the first two parameters
         *   as the upper-left corner of the shape. The next
         *   parameters are its width and height.
         *
         *   ellipseMode(CORNERS) uses the first two parameters
         *   as the location of one corner of the ellipse's
         *   bounding box. The third and fourth parameters are
         *   the location of the opposite corner.
         *
         *   The argument passed to ellipseMode() must be
         *   written in ALL CAPS because the constants CENTER,
         *   RADIUS, CORNER, and CORNERS are defined this way.
         *   JavaScript is a case-sensitive language.
         *   @param mode either CENTER, RADIUS, CORNER, or
         *   CORNERS
         *   @chainable
         */
        ellipseMode(mode: ELLIPSE_MODE): p5;

        /**
         *   Draws all geometry with jagged (aliased) edges.
         *   smooth() is active by default in 2D mode. It's
         *   necessary to call noSmooth() to disable smoothing
         *   of geometry, images, and fonts.
         *
         *   In WebGL mode, noSmooth() is active by default.
         *   It's necessary to call smooth() to draw smooth
         *   (antialiased) edges.
         *   @chainable
         */
        noSmooth(): p5;

        /**
         *   Modifies the location from which rectangles and
         *   squares are drawn. By default, the first two
         *   parameters are the x- and y-coordinates of the
         *   shape's upper-left corner. The next parameters are
         *   its width and height. This is equivalent to
         *   calling rectMode(CORNER). rectMode(CORNERS) also
         *   uses the first two parameters as the location of
         *   one of the corners. The third and fourth
         *   parameters are the location of the opposite
         *   corner.
         *
         *   rectMode(CENTER) uses the first two parameters as
         *   the x- and y-coordinates of the shape's center.
         *   The next parameters are its width and height.
         *
         *   rectMode(RADIUS) also uses the first two
         *   parameters as the x- and y-coordinates of the
         *   shape's center. The next parameters are half of
         *   the shape's width and height.
         *
         *   The argument passed to rectMode() must be written
         *   in ALL CAPS because the constants CENTER, RADIUS,
         *   CORNER, and CORNERS are defined this way.
         *   JavaScript is a case-sensitive language.
         *   @param mode either CORNER, CORNERS, CENTER, or
         *   RADIUS
         *   @chainable
         */
        rectMode(mode: RECT_MODE): p5;

        /**
         *   Draws all geometry with smooth (anti-aliased)
         *   edges. smooth() will also improve image quality of
         *   resized images. smooth() is active by default in
         *   2D mode. It's necessary to call noSmooth() to
         *   disable smoothing of geometry, images, and fonts.
         *
         *   In WebGL mode, noSmooth() is active by default.
         *   It's necessary to call smooth() to draw smooth
         *   (antialiased) edges.
         *   @chainable
         */
        smooth(): p5;

        /**
         *   Sets the style for rendering line endings. These
         *   ends are either rounded (ROUND), squared (SQUARE),
         *   or extended (PROJECT). The default cap is ROUND.
         *   The argument passed to strokeCap() must be written
         *   in ALL CAPS because the constants ROUND, SQUARE,
         *   and PROJECT are defined this way. JavaScript is a
         *   case-sensitive language.
         *   @param cap either ROUND, SQUARE, or PROJECT
         *   @chainable
         */
        strokeCap(cap: STROKE_CAP): p5;

        /**
         *   Sets the style of the joints which connect line
         *   segments. These joints are either mitered (MITER),
         *   beveled (BEVEL), or rounded (ROUND). The default
         *   joint is MITER in 2D mode and ROUND in WebGL mode.
         *   The argument passed to strokeJoin() must be
         *   written in ALL CAPS because the constants MITER,
         *   BEVEL, and ROUND are defined this way. JavaScript
         *   is a case-sensitive language.
         *   @param join either MITER, BEVEL, or ROUND
         *   @chainable
         */
        strokeJoin(join: STROKE_JOIN): p5;

        /**
         *   Sets the width of the stroke used for lines,
         *   points, and the border around shapes. All widths
         *   are set in units of pixels. Note that
         *   strokeWeight() is affected by any transformation
         *   or scaling that has been applied previously.
         *   @param weight the weight of the stroke (in
         *   pixels).
         *   @chainable
         */
        strokeWeight(weight: number): p5;
    }
}
