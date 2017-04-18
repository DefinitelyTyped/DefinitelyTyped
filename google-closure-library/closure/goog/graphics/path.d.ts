declare module goog {
    function require(name: 'goog.graphics.Path'): typeof goog.graphics.Path;
    function require(name: 'goog.graphics.Path.Segment'): typeof goog.graphics.Path.Segment;
}

declare module goog.graphics {

    /**
     * Creates a path object. A path is a sequence of segments and may be open or
     * closed. Path uses the EVEN-ODD fill rule for determining the interior of the
     * path. A path must start with a moveTo command.
     *
     * A "simple" path does not contain any arcs and may be transformed using
     * the {@code transform} method.
     *
     * @constructor
     */
    class Path {
        constructor();
        
        /**
         * Returns the number of points for a segment type.
         *
         * @param {number} segment The segment type.
         * @return {number} The number of points.
         */
        static getSegmentCount(segment: number): number;
        
        /**
         * Appends another path to the end of this path.
         *
         * @param {!goog.graphics.Path} path The path to append.
         * @return {!goog.graphics.Path} This path.
         */
        appendPath(path: goog.graphics.Path): goog.graphics.Path;
        
        /**
         * Clears the path.
         *
         * @return {!goog.graphics.Path} The path itself.
         */
        clear(): goog.graphics.Path;
        
        /**
         * Adds a point to the path by moving to the specified point. Repeated moveTo
         * commands are collapsed into a single moveTo.
         *
         * @param {number} x X coordinate of destination point.
         * @param {number} y Y coordinate of destination point.
         * @return {!goog.graphics.Path} The path itself.
         */
        moveTo(x: number, y: number): goog.graphics.Path;
        
        /**
         * Adds points to the path by drawing a straight line to each point.
         *
         * @param {...number} var_args The coordinates of each destination point as x, y
         *     value pairs.
         * @return {!goog.graphics.Path} The path itself.
         */
        lineTo(...var_args: number[]): goog.graphics.Path;
        
        /**
         * Adds points to the path by drawing cubic Bezier curves. Each curve is
         * specified using 3 points (6 coordinates) - two control points and the end
         * point of the curve.
         *
         * @param {...number} var_args The coordinates specifiying each curve in sets of
         *     6 points: {@code [x1, y1]} the first control point, {@code [x2, y2]} the
         *     second control point and {@code [x, y]} the end point.
         * @return {!goog.graphics.Path} The path itself.
         */
        curveTo(...var_args: number[]): goog.graphics.Path;
        
        /**
         * Adds a path command to close the path by connecting the
         * last point to the first point.
         *
         * @return {!goog.graphics.Path} The path itself.
         */
        close(): goog.graphics.Path;
        
        /**
         * Adds a path command to draw an arc centered at the point {@code (cx, cy)}
         * with radius {@code rx} along the x-axis and {@code ry} along the y-axis from
         * {@code startAngle} through {@code extent} degrees. Positive rotation is in
         * the direction from positive x-axis to positive y-axis.
         *
         * @param {number} cx X coordinate of center of ellipse.
         * @param {number} cy Y coordinate of center of ellipse.
         * @param {number} rx Radius of ellipse on x axis.
         * @param {number} ry Radius of ellipse on y axis.
         * @param {number} fromAngle Starting angle measured in degrees from the
         *     positive x-axis.
         * @param {number} extent The span of the arc in degrees.
         * @param {boolean} connect If true, the starting point of the arc is connected
         *     to the current point.
         * @return {!goog.graphics.Path} The path itself.
         * @deprecated Use {@code arcTo} or {@code arcToAsCurves} instead.
         */
        arc(cx: number, cy: number, rx: number, ry: number, fromAngle: number, extent: number, connect: boolean): goog.graphics.Path;
        
        /**
         * Adds a path command to draw an arc starting at the path's current point,
         * with radius {@code rx} along the x-axis and {@code ry} along the y-axis from
         * {@code startAngle} through {@code extent} degrees. Positive rotation is in
         * the direction from positive x-axis to positive y-axis.
         *
         * This method makes the path non-simple.
         *
         * @param {number} rx Radius of ellipse on x axis.
         * @param {number} ry Radius of ellipse on y axis.
         * @param {number} fromAngle Starting angle measured in degrees from the
         *     positive x-axis.
         * @param {number} extent The span of the arc in degrees.
         * @return {!goog.graphics.Path} The path itself.
         */
        arcTo(rx: number, ry: number, fromAngle: number, extent: number): goog.graphics.Path;
        
        /**
         * Same as {@code arcTo}, but approximates the arc using bezier curves.
        .* As a result, this method does not affect the simplified status of this path.
         * The algorithm is adapted from {@code java.awt.geom.ArcIterator}.
         *
         * @param {number} rx Radius of ellipse on x axis.
         * @param {number} ry Radius of ellipse on y axis.
         * @param {number} fromAngle Starting angle measured in degrees from the
         *     positive x-axis.
         * @param {number} extent The span of the arc in degrees.
         * @return {!goog.graphics.Path} The path itself.
         */
        arcToAsCurves(rx: number, ry: number, fromAngle: number, extent: number): goog.graphics.Path;
        
        /**
         * Iterates over the path calling the supplied callback once for each path
         * segment. The arguments to the callback function are the segment type and
         * an array of its arguments.
         *
         * The {@code LINETO} and {@code CURVETO} arrays can contain multiple
         * segments of the same type. The number of segments is the length of the
         * array divided by the segment length (2 for lines, 6 for  curves).
         *
         * As a convenience the {@code ARCTO} segment also includes the end point as the
         * last two arguments: {@code rx, ry, fromAngle, extent, x, y}.
         *
         * @param {function(number, Array)} callback The function to call with each
         *     path segment.
         */
        forEachSegment(callback: (arg0: number, arg1: Array<any>) => any): void;
        
        /**
         * Returns the coordinates most recently added to the end of the path.
         *
         * @return {Array<number>?} An array containing the ending coordinates of the
         *     path of the form {@code [x, y]}.
         */
        getCurrentPoint(): Array<number>;
        
        /**
         * @return {!goog.graphics.Path} A copy of this path.
         */
        clone(): goog.graphics.Path;
        
        /**
         * Returns true if this path contains no arcs. Simplified paths can be
         * created using {@code createSimplifiedPath}.
         *
         * @return {boolean} True if the path contains no arcs.
         */
        isSimple(): boolean;
        
        /**
         * Creates a copy of the given path, replacing {@code arcTo} with
         * {@code arcToAsCurves}. The resulting path is simplified and can
         * be transformed.
         *
         * @param {!goog.graphics.Path} src The path to simplify.
         * @return {!goog.graphics.Path} A new simplified path.
         * @suppress {deprecated} goog.graphics is deprecated.
         */
        static createSimplifiedPath(src: goog.graphics.Path): goog.graphics.Path;
        
        /**
         * Creates a transformed copy of this path. The path is simplified
         * {@see #createSimplifiedPath} prior to transformation.
         *
         * @param {!goog.graphics.AffineTransform} tx The transformation to perform.
         * @return {!goog.graphics.Path} A new, transformed path.
         */
        createTransformedPath(tx: goog.graphics.AffineTransform): goog.graphics.Path;
        
        /**
         * Transforms the path. Only simple paths are transformable. Attempting
         * to transform a non-simple path will throw an error.
         *
         * @param {!goog.graphics.AffineTransform} tx The transformation to perform.
         * @return {!goog.graphics.Path} The path itself.
         */
        transform(tx: goog.graphics.AffineTransform): goog.graphics.Path;
        
        /**
         * @return {boolean} Whether the path is empty.
         */
        isEmpty(): boolean;
    }
}

declare module goog.graphics.Path {

    /**
     * Path segment types.
     * @enum {number}
     */
    type Segment = number;
    var Segment: {
        MOVETO: Segment;
        LINETO: Segment;
        CURVETO: Segment;
        ARCTO: Segment;
        CLOSE: Segment;
    };
}
