// This file was auto-generated. Please do not edit it.

import * as p5 from "../../../index";

declare module "../../../index" {
  interface p5InstanceExtensions {
    /**
     *   Draws a cubic Bezier curve on the screen. These
     *   curves are defined by a series of anchor and
     *   control points. The first two parameters specify
     *   the first anchor point and the last two parameters
     *   specify the other anchor point, which become the
     *   first and last points on the curve. The middle
     *   parameters specify the two control points which
     *   define the shape of the curve. Approximately
     *   speaking, control points "pull" the curve towards
     *   them.Bezier curves were developed by French
     *   automotive engineer Pierre Bezier, and are
     *   commonly used in computer graphics to define
     *   gently sloping curves. See also curve().
     *   @param x1 x-coordinate for the first anchor point
     *   @param y1 y-coordinate for the first anchor point
     *   @param x2 x-coordinate for the first control point
     *   @param y2 y-coordinate for the first control point
     *   @param x3 x-coordinate for the second control
     *   point
     *   @param y3 y-coordinate for the second control
     *   point
     *   @param x4 x-coordinate for the second anchor point
     *   @param y4 y-coordinate for the second anchor point
     *   @chainable
     */
    bezier(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      x3: number,
      y3: number,
      x4: number,
      y4: number
    ): p5;

    /**
     *   Draws a cubic Bezier curve on the screen. These
     *   curves are defined by a series of anchor and
     *   control points. The first two parameters specify
     *   the first anchor point and the last two parameters
     *   specify the other anchor point, which become the
     *   first and last points on the curve. The middle
     *   parameters specify the two control points which
     *   define the shape of the curve. Approximately
     *   speaking, control points "pull" the curve towards
     *   them.Bezier curves were developed by French
     *   automotive engineer Pierre Bezier, and are
     *   commonly used in computer graphics to define
     *   gently sloping curves. See also curve().
     *   @param x1 x-coordinate for the first anchor point
     *   @param y1 y-coordinate for the first anchor point
     *   @param z1 z-coordinate for the first anchor point
     *   @param x2 x-coordinate for the first control point
     *   @param y2 y-coordinate for the first control point
     *   @param z2 z-coordinate for the first control point
     *   @param x3 x-coordinate for the second control
     *   point
     *   @param y3 y-coordinate for the second control
     *   point
     *   @param z3 z-coordinate for the second control
     *   point
     *   @param x4 x-coordinate for the second anchor point
     *   @param y4 y-coordinate for the second anchor point
     *   @param z4 z-coordinate for the second anchor point
     *   @chainable
     */
    bezier(
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
     *   Sets the resolution at which Beziers display. The
     *   default value is 20.
     *
     *   This function is only useful when using the WEBGL
     *   renderer as the default canvas renderer does not
     *   use this information.
     *   @param detail resolution of the curves
     *   @chainable
     */
    bezierDetail(
      detail: number
    ): p5;

    /**
     *   Evaluates the Bezier at position t for points a,
     *   b, c, d. The parameters a and d are the first and
     *   last points on the curve, and b and c are the
     *   control points. The final parameter t varies
     *   between 0 and 1. This can be done once with the x
     *   coordinates and a second time with the y
     *   coordinates to get the location of a bezier curve
     *   at t.
     *   @param a coordinate of first point on the curve
     *   @param b coordinate of first control point
     *   @param c coordinate of second control point
     *   @param d coordinate of second point on the curve
     *   @param t value between 0 and 1
     *   @return the value of the Bezier at position t
     */
    bezierPoint(
      a: number,
      b: number,
      c: number,
      d: number,
      t: number
    ): number;

    /**
     *   Evaluates the tangent to the Bezier at position t
     *   for points a, b, c, d. The parameters a and d are
     *   the first and last points on the curve, and b and
     *   c are the control points. The final parameter t
     *   varies between 0 and 1.
     *   @param a coordinate of first point on the curve
     *   @param b coordinate of first control point
     *   @param c coordinate of second control point
     *   @param d coordinate of second point on the curve
     *   @param t value between 0 and 1
     *   @return the tangent at position t
     */
    bezierTangent(
      a: number,
      b: number,
      c: number,
      d: number,
      t: number
    ): number;

    /**
     *   Draws a curved line on the screen between two
     *   points, given as the middle four parameters. The
     *   first two parameters are a control point, as if
     *   the curve came from this point even though it's
     *   not drawn. The last two parameters similarly
     *   describe the other control point.  Longer curves
     *   can be created by putting a series of curve()
     *   functions together or using curveVertex(). An
     *   additional function called curveTightness()
     *   provides control for the visual quality of the
     *   curve. The curve() function is an implementation
     *   of Catmull-Rom splines.
     *   @param x1 x-coordinate for the beginning control
     *   point
     *   @param y1 y-coordinate for the beginning control
     *   point
     *   @param x2 x-coordinate for the first point
     *   @param y2 y-coordinate for the first point
     *   @param x3 x-coordinate for the second point
     *   @param y3 y-coordinate for the second point
     *   @param x4 x-coordinate for the ending control
     *   point
     *   @param y4 y-coordinate for the ending control
     *   point
     *   @chainable
     */
    curve(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      x3: number,
      y3: number,
      x4: number,
      y4: number
    ): p5;

    /**
     *   Draws a curved line on the screen between two
     *   points, given as the middle four parameters. The
     *   first two parameters are a control point, as if
     *   the curve came from this point even though it's
     *   not drawn. The last two parameters similarly
     *   describe the other control point.  Longer curves
     *   can be created by putting a series of curve()
     *   functions together or using curveVertex(). An
     *   additional function called curveTightness()
     *   provides control for the visual quality of the
     *   curve. The curve() function is an implementation
     *   of Catmull-Rom splines.
     *   @param x1 x-coordinate for the beginning control
     *   point
     *   @param y1 y-coordinate for the beginning control
     *   point
     *   @param z1 z-coordinate for the beginning control
     *   point
     *   @param x2 x-coordinate for the first point
     *   @param y2 y-coordinate for the first point
     *   @param z2 z-coordinate for the first point
     *   @param x3 x-coordinate for the second point
     *   @param y3 y-coordinate for the second point
     *   @param z3 z-coordinate for the second point
     *   @param x4 x-coordinate for the ending control
     *   point
     *   @param y4 y-coordinate for the ending control
     *   point
     *   @param z4 z-coordinate for the ending control
     *   point
     *   @chainable
     */
    curve(
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
     *   Sets the resolution at which curves display. The
     *   default value is 20 while the minimum value is 3.
     *
     *   This function is only useful when using the WEBGL
     *   renderer as the default canvas renderer does not
     *   use this information.
     *   @param resolution resolution of the curves
     *   @chainable
     */
    curveDetail(
      resolution: number
    ): p5;

    /**
     *   Modifies the quality of forms created with curve()
     *   and curveVertex(). The parameter tightness
     *   determines how the curve fits to the vertex
     *   points. The value 0.0 is the default value for
     *   tightness (this value defines the curves to be
     *   Catmull-Rom splines) and the value 1.0 connects
     *   all the points with straight lines. Values within
     *   the range -5.0 and 5.0 will deform the curves but
     *   will leave them recognizable and as values
     *   increase in magnitude, they will continue to
     *   deform.
     *   @param amount amount of deformation from the
     *   original vertices
     *   @chainable
     */
    curveTightness(
      amount: number
    ): p5;

    /**
     *   Evaluates the curve at position t for points a, b,
     *   c, d. The parameter t varies between 0 and 1, a
     *   and d are control points of the curve, and b and c
     *   are the start and end points of the curve. This
     *   can be done once with the x coordinates and a
     *   second time with the y coordinates to get the
     *   location of a curve at t.
     *   @param a coordinate of first control point of the
     *   curve
     *   @param b coordinate of first point
     *   @param c coordinate of second point
     *   @param d coordinate of second control point
     *   @param t value between 0 and 1
     *   @return bezier value at position t
     */
    curvePoint(
      a: number,
      b: number,
      c: number,
      d: number,
      t: number
    ): number;

    /**
     *   Evaluates the tangent to the curve at position t
     *   for points a, b, c, d. The parameter t varies
     *   between 0 and 1, a and d are points on the curve,
     *   and b and c are the control points.
     *   @param a coordinate of first point on the curve
     *   @param b coordinate of first control point
     *   @param c coordinate of second control point
     *   @param d coordinate of second point on the curve
     *   @param t value between 0 and 1
     *   @return the tangent at position t
     */
    curveTangent(
      a: number,
      b: number,
      c: number,
      d: number,
      t: number
    ): number;
  }
}
