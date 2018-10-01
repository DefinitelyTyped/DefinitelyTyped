// This file was auto-generated. Please do not edit it.

import * as p5 from "../../../index";

declare module "../../../index" {
  interface p5InstanceExtensions {
    /**
     *   Use the beginContour() and endContour() functions
     *   to create negative shapes within shapes such as
     *   the center of the letter 'O'. beginContour()
     *   begins recording vertices for the shape and
     *   endContour() stops recording. The vertices that
     *   define a negative shape must "wind" in the
     *   opposite direction from the exterior shape. First
     *   draw vertices for the exterior clockwise order,
     *   then for internal shapes, draw vertices shape in
     *   counter-clockwise.  These functions can only be
     *   used within a beginShape()/endShape() pair and
     *   transformations such as translate(), rotate(), and
     *   scale() do not work within a
     *   beginContour()/endContour() pair. It is also not
     *   possible to use other shapes, such as ellipse() or
     *   rect() within.
     *   @chainable
     */
    beginContour(): p5;

    /**
     *   Using the beginShape() and endShape() functions
     *   allow creating more complex forms. beginShape()
     *   begins recording vertices for a shape and
     *   endShape() stops recording. The value of the kind
     *   parameter tells it which types of shapes to create
     *   from the provided vertices. With no mode
     *   specified, the shape can be any irregular polygon.
     *   The parameters available for beginShape() are
     *   POINTS, LINES, TRIANGLES, TRIANGLE_FAN,
     *   TRIANGLE_STRIP, QUADS, and QUAD_STRIP. After
     *   calling the beginShape() function, a series of
     *   vertex() commands must follow. To stop drawing the
     *   shape, call endShape(). Each shape will be
     *   outlined with the current stroke color and filled
     *   with the fill color.
     *
     *
     *   Transformations such as translate(), rotate(), and
     *   scale() do not work within beginShape(). It is
     *   also not possible to use other shapes, such as
     *   ellipse() or rect() within beginShape().
     *   @param [kind] either POINTS, LINES, TRIANGLES,
     *   TRIANGLE_FAN TRIANGLE_STRIP, QUADS, or QUAD_STRIP
     *   @chainable
     */
    beginShape(
      kind?: BEGIN_KIND
    ): p5;

    /**
     *   Specifies vertex coordinates for Bezier curves.
     *   Each call to bezierVertex() defines the position
     *   of two control points and one anchor point of a
     *   Bezier curve, adding a new segment to a line or
     *   shape. For WebGL mode bezierVertex() can be used
     *   in 2D as well as 3D mode. 2D mode expects 6
     *   parameters, while 3D mode expects 9 parameters
     *   (including z coordinates).  The first time
     *   bezierVertex() is used within a beginShape() call,
     *   it must be prefaced with a call to vertex() to set
     *   the first anchor point. This function must be used
     *   between beginShape() and endShape() and only when
     *   there is no MODE or POINTS parameter specified to
     *   beginShape().
     *   @param x2 x-coordinate for the first control point
     *   @param y2 y-coordinate for the first control point
     *   @param x3 x-coordinate for the second control
     *   point
     *   @param y3 y-coordinate for the second control
     *   point
     *   @param x4 x-coordinate for the anchor point
     *   @param y4 y-coordinate for the anchor point
     *   @chainable
     */
    bezierVertex(
      x2: number,
      y2: number,
      x3: number,
      y3: number,
      x4: number,
      y4: number
    ): p5;

    /**
     *   Specifies vertex coordinates for Bezier curves.
     *   Each call to bezierVertex() defines the position
     *   of two control points and one anchor point of a
     *   Bezier curve, adding a new segment to a line or
     *   shape. For WebGL mode bezierVertex() can be used
     *   in 2D as well as 3D mode. 2D mode expects 6
     *   parameters, while 3D mode expects 9 parameters
     *   (including z coordinates).  The first time
     *   bezierVertex() is used within a beginShape() call,
     *   it must be prefaced with a call to vertex() to set
     *   the first anchor point. This function must be used
     *   between beginShape() and endShape() and only when
     *   there is no MODE or POINTS parameter specified to
     *   beginShape().
     *   @param x2 x-coordinate for the first control point
     *   @param y2 y-coordinate for the first control point
     *   @param z2 z-coordinate for the first control point
     *   (for WebGL mode)
     *   @param x3 x-coordinate for the second control
     *   point
     *   @param y3 y-coordinate for the second control
     *   point
     *   @param z3 z-coordinate for the second control
     *   point (for WebGL mode)
     *   @param x4 x-coordinate for the anchor point
     *   @param y4 y-coordinate for the anchor point
     *   @param z4 z-coordinate for the anchor point (for
     *   WebGL mode)
     *   @chainable
     */
    bezierVertex(
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
     *   Specifies vertex coordinates for curves. This
     *   function may only be used between beginShape() and
     *   endShape() and only when there is no MODE
     *   parameter specified to beginShape(). For WebGL
     *   mode curveVertex() can be used in 2D as well as 3D
     *   mode. 2D mode expects 2 parameters, while 3D mode
     *   expects 3 parameters.  The first and last points
     *   in a series of curveVertex() lines will be used to
     *   guide the beginning and end of a the curve. A
     *   minimum of four points is required to draw a tiny
     *   curve between the second and third points. Adding
     *   a fifth point with curveVertex() will draw the
     *   curve between the second, third, and fourth
     *   points. The curveVertex() function is an
     *   implementation of Catmull-Rom splines.
     *   @param x x-coordinate of the vertex
     *   @param y y-coordinate of the vertex
     *   @chainable
     */
    curveVertex(
      x: number,
      y: number
    ): p5;

    /**
     *   Specifies vertex coordinates for curves. This
     *   function may only be used between beginShape() and
     *   endShape() and only when there is no MODE
     *   parameter specified to beginShape(). For WebGL
     *   mode curveVertex() can be used in 2D as well as 3D
     *   mode. 2D mode expects 2 parameters, while 3D mode
     *   expects 3 parameters.  The first and last points
     *   in a series of curveVertex() lines will be used to
     *   guide the beginning and end of a the curve. A
     *   minimum of four points is required to draw a tiny
     *   curve between the second and third points. Adding
     *   a fifth point with curveVertex() will draw the
     *   curve between the second, third, and fourth
     *   points. The curveVertex() function is an
     *   implementation of Catmull-Rom splines.
     *   @param x x-coordinate of the vertex
     *   @param y y-coordinate of the vertex
     *   @param [z] z-coordinate of the vertex (for WebGL
     *   mode)
     *   @chainable
     */
    curveVertex(
      x: number,
      y: number,
      z?: number
    ): p5;

    /**
     *   Use the beginContour() and endContour() functions
     *   to create negative shapes within shapes such as
     *   the center of the letter 'O'. beginContour()
     *   begins recording vertices for the shape and
     *   endContour() stops recording. The vertices that
     *   define a negative shape must "wind" in the
     *   opposite direction from the exterior shape. First
     *   draw vertices for the exterior clockwise order,
     *   then for internal shapes, draw vertices shape in
     *   counter-clockwise.  These functions can only be
     *   used within a beginShape()/endShape() pair and
     *   transformations such as translate(), rotate(), and
     *   scale() do not work within a
     *   beginContour()/endContour() pair. It is also not
     *   possible to use other shapes, such as ellipse() or
     *   rect() within.
     *   @chainable
     */
    endContour(): p5;

    /**
     *   The endShape() function is the companion to
     *   beginShape() and may only be called after
     *   beginShape(). When endshape() is called, all of
     *   image data defined since the previous call to
     *   beginShape() is written into the image buffer. The
     *   constant CLOSE as the value for the MODE parameter
     *   to close the shape (to connect the beginning and
     *   the end).
     *   @param [mode] use CLOSE to close the shape
     *   @chainable
     */
    endShape(
      mode?: END_MODE
    ): p5;

    /**
     *   Specifies vertex coordinates for quadratic Bezier
     *   curves. Each call to quadraticVertex() defines the
     *   position of one control points and one anchor
     *   point of a Bezier curve, adding a new segment to a
     *   line or shape. The first time quadraticVertex() is
     *   used within a beginShape() call, it must be
     *   prefaced with a call to vertex() to set the first
     *   anchor point. For WebGL mode quadraticVertex() can
     *   be used in 2D as well as 3D mode. 2D mode expects
     *   4 parameters, while 3D mode expects 6 parameters
     *   (including z coordinates).  This function must be
     *   used between beginShape() and endShape() and only
     *   when there is no MODE or POINTS parameter
     *   specified to beginShape().
     *   @param cx x-coordinate for the control point
     *   @param cy y-coordinate for the control point
     *   @param x3 x-coordinate for the anchor point
     *   @param y3 y-coordinate for the anchor point
     *   @chainable
     */
    quadraticVertex(
      cx: number,
      cy: number,
      x3: number,
      y3: number
    ): p5;

    /**
     *   Specifies vertex coordinates for quadratic Bezier
     *   curves. Each call to quadraticVertex() defines the
     *   position of one control points and one anchor
     *   point of a Bezier curve, adding a new segment to a
     *   line or shape. The first time quadraticVertex() is
     *   used within a beginShape() call, it must be
     *   prefaced with a call to vertex() to set the first
     *   anchor point. For WebGL mode quadraticVertex() can
     *   be used in 2D as well as 3D mode. 2D mode expects
     *   4 parameters, while 3D mode expects 6 parameters
     *   (including z coordinates).  This function must be
     *   used between beginShape() and endShape() and only
     *   when there is no MODE or POINTS parameter
     *   specified to beginShape().
     *   @param cx x-coordinate for the control point
     *   @param cy y-coordinate for the control point
     *   @param cz z-coordinate for the control point (for
     *   WebGL mode)
     *   @param x3 x-coordinate for the anchor point
     *   @param y3 y-coordinate for the anchor point
     *   @param z3 z-coordinate for the anchor point (for
     *   WebGL mode)
     *   @chainable
     */
    quadraticVertex(
      cx: number,
      cy: number,
      cz: number,
      x3: number,
      y3: number,
      z3: number
    ): p5;

    /**
     *   All shapes are constructed by connecting a series
     *   of vertices. vertex() is used to specify the
     *   vertex coordinates for points, lines, triangles,
     *   quads, and polygons. It is used exclusively within
     *   the beginShape() and endShape() functions.
     *   @param x x-coordinate of the vertex
     *   @param y y-coordinate of the vertex
     *   @chainable
     */
    vertex(
      x: number,
      y: number
    ): p5;

    /**
     *   All shapes are constructed by connecting a series
     *   of vertices. vertex() is used to specify the
     *   vertex coordinates for points, lines, triangles,
     *   quads, and polygons. It is used exclusively within
     *   the beginShape() and endShape() functions.
     *   @param x x-coordinate of the vertex
     *   @param y y-coordinate of the vertex
     *   @param z z-coordinate of the vertex
     *   @param [u] the vertex's texture u-coordinate
     *   @param [v] the vertex's texture v-coordinate
     *   @chainable
     */
    vertex(
      x: number,
      y: number,
      z: number,
      u?: number,
      v?: number
    ): p5;
  }
}
