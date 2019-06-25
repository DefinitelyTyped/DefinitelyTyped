// This file was auto-generated. Please do not edit it.

import * as p5 from "../../../index";

declare module "../../../index" {
  interface p5InstanceExtensions {
    /**
     *   Modifies the location from which ellipses are
     *   drawn by changing the way in which parameters
     *   given to ellipse() are interpreted.  The default
     *   mode is ellipseMode(CENTER), which interprets the
     *   first two parameters of ellipse() as the shape's
     *   center point, while the third and fourth
     *   parameters are its width and height.
     *
     *
     *   ellipseMode(RADIUS) also uses the first two
     *   parameters of ellipse() as the shape's center
     *   point, but uses the third and fourth parameters to
     *   specify half of the shapes's width and height.
     *
     *
     *   ellipseMode(CORNER) interprets the first two
     *   parameters of ellipse() as the upper-left corner
     *   of the shape, while the third and fourth
     *   parameters are its width and height.
     *
     *
     *   ellipseMode(CORNERS) interprets the first two
     *   parameters of ellipse() as the location of one
     *   corner of the ellipse's bounding box, and the
     *   third and fourth parameters as the location of the
     *   opposite corner.
     *
     *
     *   The parameter must be written in ALL CAPS because
     *   Javascript is a case-sensitive language.
     *   @param mode either CENTER, RADIUS, CORNER, or
     *   CORNERS
     *   @chainable
     */
    ellipseMode(
      mode: ELLIPSE_MODE
    ): p5;

    /**
     *   Draws all geometry with jagged (aliased) edges.
     *   Note that smooth() is active by default in 2D
     *   mode, so it is necessary to call noSmooth() to
     *   disable smoothing of geometry, images, and fonts.
     *   In 3D mode, noSmooth() is enabled by default, so
     *   it is necessary to call smooth() if you would like
     *   smooth (antialiased) edges on your geometry.
     *   @chainable
     */
    noSmooth(): p5;

    /**
     *   Modifies the location from which rectangles are
     *   drawn by changing the way in which parameters
     *   given to rect() are interpreted.  The default mode
     *   is rectMode(CORNER), which interprets the first
     *   two parameters of rect() as the upper-left corner
     *   of the shape, while the third and fourth
     *   parameters are its width and height.
     *
     *
     *   rectMode(CORNERS) interprets the first two
     *   parameters of rect() as the location of one
     *   corner, and the third and fourth parameters as the
     *   location of the opposite corner.
     *
     *
     *   rectMode(CENTER) interprets the first two
     *   parameters of rect() as the shape's center point,
     *   while the third and fourth parameters are its
     *   width and height.
     *
     *
     *   rectMode(RADIUS) also uses the first two
     *   parameters of rect() as the shape's center point,
     *   but uses the third and fourth parameters to
     *   specify half of the shapes's width and height.
     *
     *
     *   The parameter must be written in ALL CAPS because
     *   Javascript is a case-sensitive language.
     *   @param mode either CORNER, CORNERS, CENTER, or
     *   RADIUS
     *   @chainable
     */
    rectMode(
      mode: RECT_MODE
    ): p5;

    /**
     *   Draws all geometry with smooth (anti-aliased)
     *   edges. smooth() will also improve image quality of
     *   resized images. Note that smooth() is active by
     *   default in 2D mode; noSmooth() can be used to
     *   disable smoothing of geometry, images, and fonts.
     *   In 3D mode, noSmooth() is enabled by default, so
     *   it is necessary to call smooth() if you would like
     *   smooth (antialiased) edges on your geometry.
     *   @chainable
     */
    smooth(): p5;

    /**
     *   Sets the style for rendering line endings. These
     *   ends are either squared, extended, or rounded,
     *   each of which specified with the corresponding
     *   parameters: SQUARE, PROJECT, and ROUND. The
     *   default cap is ROUND.
     *   @param cap either SQUARE, PROJECT, or ROUND
     *   @chainable
     */
    strokeCap(
      cap: STROKE_CAP
    ): p5;

    /**
     *   Sets the style of the joints which connect line
     *   segments. These joints are either mitered,
     *   beveled, or rounded and specified with the
     *   corresponding parameters MITER, BEVEL, and ROUND.
     *   The default joint is MITER.
     *   @param join either MITER, BEVEL, ROUND
     *   @chainable
     */
    strokeJoin(
      join: STROKE_JOIN
    ): p5;

    /**
     *   Sets the width of the stroke used for lines,
     *   points, and the border around shapes. All widths
     *   are set in units of pixels.
     *   @param weight the weight (in pixels) of the stroke
     *   @chainable
     */
    strokeWeight(
      weight: number
    ): p5;
  }
}
