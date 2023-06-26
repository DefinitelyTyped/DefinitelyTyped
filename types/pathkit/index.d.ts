// Type definitions for pathkit-wasm 1.0 and pathkit-asmjs 1.0
// Project: https://github.com/google/skia/tree/main/modules/pathkit
// Definitions by: Ossama W. Obeid <https://github.com/owo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace PathKitAPI {
    /**
     * `SkMatrix` translates between a C++ struct and a JS Array.
     * It basically takes a nine element 1D Array and turns it into a 3x3 2D
     * Affine Matrix.
     */
    type SkMatrix = ReadonlyArray<number>;

    /**
     * `SkRect` translates between a C++ struct and a JS Object with the
     * following keys (all values are `number`):
     * - **fLeft**: The X coordinate of top-left corner.
     * - **fTop**: The Y coordinate of top-left corner.
     * - **fRight**: The X coordinate of bottom-right corner.
     * - **fBottom**: The Y coordinate of bottom-right corner.
     */
    interface SkRect {
        fLeft: number;
        fTop: number;
        fRight: number;
        fBottom: number;
    }

    /**
     * StrokeOpts translates between a C++ struct and a JS Object with the
     * following keys:
     * - **width**, `number`: The width of the lines of the path. Default 1.
     * - **miter_limit**, `number`: The miter limit. Defautl 4.
     *   See [SkPaint reference](https://api.skia.org/classSkPaint.html#a2e767abfeb7795ed251a08b5ed85033f)
     *   for more details.
     * - **join**, `StrokeJoin`: The join to use. Default PathKit.StrokeJoin.MITER.
     *   See [SkPaint reference](https://api.skia.org/classSkPaint.html#a2e767abfeb7795ed251a08b5ed85033f)
     *   for more details.
     * - **cap**, `StrokeCap`: The cap to use. Default PathKit.StrokeCap.BUTT.
     *   See [SkPaint reference](https://api.skia.org/classSkPaint.html#a2e767abfeb7795ed251a08b5ed85033f)
     *   for more details.
     */
    interface StrokeOpts {
        width?: number;
        miter_limit?: number;
        join?: StrokeJoin;
        cap?: StrokeCap;
    }

    /**
     * The following enum values are exposed.
     * They are essentially constant objects, differentiated by their `.value`
     * property.
     *
     * - `PathKit.PathOp.DIFFERENCE`
     * - `PathKit.PathOp.INTERSECT`
     * - `PathKit.PathOp.REVERSE_DIFFERENCE`
     * - `PathKit.PathOp.UNION`
     * - `PathKit.PathOp.XOR`
     *
     * These are used in `PathKit.MakeFromOp()` and `SkPath.op()`.
     */
    enum PathOp {
        DIFFERENCE,
        INTERSECT,
        REVERSE_DIFFERENCE,
        UNION,
        XOR
    }

    /**
     * The following enum values are exposed.
     * They are essentially constant objects, differentiated by their `.value`
     * property.
     *
     * - `PathKit.FillType.WINDING` (also known as nonzero)
     * - `PathKit.FillType.EVENODD`
     * - `PathKit.FillType.INVERSE_WINDING`
     * - `PathKit.FillType.INVERSE_EVENODD`
     *
     * These are used by `SkPath.getFillType()` and `SkPath.setFillType()`, but
     * generally clients will want `SkPath.getFillTypeString()`.
     */
    enum FillType {
        WINDING,
        EVENODD,
        INVERSE_WINDING,
        INVERSE_EVENODD
    }

    /**
     * The following enum values are exposed.
     * They are essentially constant objects, differentiated by their `.value`
     * property.
     *
     * - `PathKit.StrokeJoin.MITER`
     * - `PathKit.StrokeJoin.ROUND`
     * - `PathKit.StrokeJoin.BEVEL`
     *
     * See [SkPaint reference](https://api.skia.org/classSkPaint.html#ac582b0cbf59909c9056de34a6b977cca)
     * for more details.
     */
    enum StrokeJoin {
        MITER,
        ROUND,
        BEVEL
    }

    /**
     * The following enum values are exposed.
     * They are essentially constant objects, differentiated by their `.value`
     * property.
     *
     * - `PathKit.StrokeCap.BUTT`
     * - `PathKit.StrokeCap.ROUND`
     * - `PathKit.StrokeCap.SQUARE`
     *
     * See [SkPaint reference](https://api.skia.org/classSkPaint.html#ac582b0cbf59909c9056de34a6b977cca)
     * for more details.
     */
    enum StrokeCap {
        BUTT,
        ROUND,
        SQUARE
    }

    class SkPath {
        /**
         * Create an empty SkPath object.
         */
        constructor();

        /**
         * Adds the given path to `this` and then returns `this` for chaining
         * purposes.
         *
         * @param otherPath A path to append to this path.
         */
        addPath(otherPath: SkPath): SkPath;

        /**
         * Adds the given path to `this` after applying the transform and then
         * returns `this` for chaining purposes.
         * See [`Path2D.addPath()`](https://developer.mozilla.org/en-US/docs/Web/API/Path2D/addPath)
         * for more details.
         *
         * @param otherPath A path to append to this path.
         * @param transform A transform to apply to otherPath before appending it. See [SVGMatrix](https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix) for more details.
         */

        // eslint-disable-next-line @typescript-eslint/unified-signatures
        addPath(otherPath: SkPath, transform: SVGMatrix): SkPath;

        /**
         * Adds the given path to `this` after applying the transform and then
         * returns `this` for chaining purposes.
         * See [`Path2D.addPath()`](https://developer.mozilla.org/en-US/docs/Web/API/Path2D/addPath)
         * for more details.
         *
         * Example:
         *
         * ```typescript
         * let box = PathKit.NewPath().rect(0, 0, 100, 100);
         * let moreBoxes = PathKit.NewPath();
         * // add box un-transformed (i.e. at 0, 0)
         * moreBoxes.addPath(box)
         * // the params fill out a 2d matrix like:
         * //     a c e
         * //     b d f
         * //     0 0 1
         * // add box 300 points to the right
         *          .addPath(box, 1, 0, 0, 1, 300, 0)
         * // add a box shrunk by 50% in both directions
         *          .addPath(box, 0.5, 0, 0, 0.5, 0, 0);
         * // moreBoxes now has 3 paths appended to it
         * ```
         *
         * @param otherPath A path to append to this path.
         * @param a The `a` component of an [SVGMatrix](https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix).
         * @param b The `b` component of an [SVGMatrix](https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix).
         * @param c The `c` component of an [SVGMatrix](https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix).
         * @param d The `d` component of an [SVGMatrix](https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix).
         * @param e The `e` component of an [SVGMatrix](https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix).
         * @param f The `f` component of an [SVGMatrix](https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix).
         */
        addPath(
            otherPath: SkPath,
            a: number,
            b: number,
            c: number,
            d: number,
            e: number,
            f: number
        ): SkPath;

        /**
         * Adds the given path to `this` after applying a transform defined by
         * an [Affine Matrix](https://en.wikipedia.org/wiki/Transformation_matrix#Affine_transformations)
         * and then returns `this` for chaining purposes.
         *
         * ```typescript
         * let box = PathKit.NewPath().rect(0, 0, 100, 100);
         * let moreBoxes = PathKit.NewPath();
         * // add box un-transformed (i.e. at 0, 0)
         * moreBoxes.addPath(box)
         * // add box 300 points to the right
         *          .addPath(box, 1, 0, 0,
         *                        0, 1, 300,
         *                        0, 0 ,1)
         * // add a box shrunk by 50% in both directions
         *          .addPath(box, 0.5, 0,   0,
         *                        0,   0.5, 0,
         *                        0,   0,   1)
         * // moreBoxes now has 3 paths appended to it
         * ```
         *
         * @param otherPath A path to append to this path.
         * @param scaleX Scaling along the X axis.
         * @param skewX Skew along the X axis.
         * @param transX Transposition along the X axis.
         * @param skewY Skew along the Y axis.
         * @param scaleY Scaling along the Y axis.
         * @param transY Transposition along the Y axis.
         * @param pers0 The X axis perspective factor.
         * @param pers1 The Y axis perspective factor.
         * @param pers2 The perspective scale.
         */
        addPath(
            otherPath: SkPath,
            scaleX: number,
            skewX: number,
            transX: number,
            skewY: number,
            scaleY: number,
            transY: number,
            pers0: number,
            pers1: number,
            pers2: number
        ): SkPath;

        /**
         * Adds the described arc to `this` then returns `this` for chaining
         * purposes.
         * See [`Path2D.arc()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc)
         * for more details.
         *
         * Example:
         *
         * ```typescript
         * let path = PathKit.NewPath();
         * path.moveTo(20, 120);
         *     .arc(20, 120, 18, 0, 1.75 * Math.PI);
         *     .lineTo(20, 120);
         * // path looks like a pie with a 1/8th slice removed.
         * ```
         *
         * @param x The X coordinate of the arc's center.
         * @param y The Y coordinate of the arc's center.
         * @param radius The radius of the arc.
         * @param startAngle The start angle, measured clockwise from the positive X axis and in radians.
         * @param endAngle The end angle, measured clockwise from the positive X axis and in radians.
         * @param ccw Optional argument specifying if the arc should be drawn counter-clockwise between **startAngle** and **endAngle** instead of clockwise, the default.
         */
        arc(
            x: number,
            y: number,
            radius: number,
            startAngle: number,
            endAngle: number,
            ccw?: boolean
        ): SkPath;

        /**
         * Adds the described arc to `this` (appending a line, if needed) then
         * returns `this` for chaining purposes.
         * See [`Path2D.arcTo()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arcTo)
         * for more details.
         *
         * @param x1 The X coordinate of the first control point.
         * @param y1 The Y coordinate of the first control point.
         * @param x2 The X coordinate of the second control point.
         * @param y2 The Y coordinate of the second control point.
         * @param radius The radius of the arc.
         */
        arcTo(
            x1: number,
            y1: number,
            x2: number,
            y2: number,
            radius: number
        ): SkPath;

        /**
         * Returns the pen to the start of the current sub-path, then returns
         * `this` for chaining purposes.
         * See [`Path2D.closePath()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/closePath)
         * for more details.
         */
        close(): SkPath;

        /**
         * Returns the pen to the start of the current sub-path, then returns
         * `this` for chaining purposes.
         * See [`Path2D.closePath()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/closePath)
         * for more details.
         */
        closePath(): SkPath;

        /**
         * Returns an `SkRect` that represents the minimum and maximum area of
         * `this` path.
         * See [SkPath reference](https://api.skia.org/classSkPath.html#a597c8fcc5e4750542e2688b057a14e9e)
         * for more details.
         */
        computeTightBounds(): SkRect;

        /**
         * Adds the described conic line to `this` (appending a line, if
         * needed) then returns `this` for chaining purposes.
         * See [SkPath reference](https://api.skia.org/classSkPath.html#a9edc41978765cfe9a0b16e9ecf4d276e)
         * for more details.
         *
         * @param x1 The X coordinate of the control point.
         * @param y1 The Y coordinate of the control point.
         * @param x2 The X coordinate of the endpoint.
         * @param y2 The Y coordinate of the endpoint.
         * @param w The weight of the conic.
         */
        conicTo(
            x1: number,
            y1: number,
            x2: number,
            y2: number,
            w: number
        ): SkPath;

        /**
         * Return a copy of `this` path.
         */
        copy(): SkPath;

        /**
         * Adds the described cubic line to `this` (appending a line, if
         * needed) then returns `this` for chaining purposes.
         * See [`Path2D.bezierCurveTo`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
         * for more details.
         *
         * @param cp1x The X coordinate of the first control point.
         * @param cp1y The Y coordinate of the first control point.
         * @param cp2x The X coordinate of the second control point.
         * @param cp2y The Y coordinate of the second control point.
         * @param x The X coordinate of the end point.
         * @param y The Y coordinate of the end point.
         */
        cubicTo(
            cp1x: number,
            cp1y: number,
            cp2x: number,
            cp2y: number,
            x: number,
            y: number
        ): SkPath;

        /**
         * Adds the described cubic line to `this` (appending a line, if
         * needed) then returns `this` for chaining purposes.
         * See [`Path2D.bezierCurveTo`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
         * for more details.
         *
         * @param cp1x The X coordinate of the first control point.
         * @param cp1y The Y coordinate of the first control point.
         * @param cp2x The X coordinate of the second control point.
         * @param cp2y The Y coordinate of the second control point.
         * @param x The X coordinate of the end point.
         * @param y The Y coordinate of the end point.
         */
        bezierCurveTo(
            cp1x: number,
            cp1y: number,
            cp2x: number,
            cp2y: number,
            x: number,
            y: number
        ): SkPath;

        /**
         * Applies a dashed path effect to `this` then returns `this` for
         * chaining purposes.
         *
         * Example:
         *
         * ```typescript
         * let box = PathKit.NewPath().rect(0, 0, 100, 100);
         * box.dash(20, 10, 3);
         * // box is now a dashed rectangle that will draw for 20 pixels, then
         * // stop for 10 pixels.  Since phase is 3, the first line won't start
         * // at (0, 0), but 3 pixels around the path (3, 0)
         * ```
         *
         * @param on The number of pixels the dash should be on (drawn).
         * @param off The number of pixels the dash should be off (blank).
         * @param phase The number of pixels the on/off should be offset (mod **on** + **off**).
         */
        dash(on: number, off: number, phase: number): SkPath;

        /**
         * Must be called when `this` leaves the scope to avoid leaking the
         * memory in the WASM heap.
         * This includes any instance created using `constructor()` and
         * `copy()` or created via `SkOpBuilder`.
         */
        delete(): void;

        /**
         * Prints all the verbs and arguments to the console.
         * Only available on Debug and Test builds.
         */
        dump(): void;

        /**
         * Adds the described ellipse to `this` then returns `this` for
         * chaining purposes.
         * See [`Path2D.ellipse`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse)
         * for more details.
         *
         * @param x The X coordinate of the center of the ellipse.
         * @param y The Y coordinate of the center of the ellipse.
         * @param radiusX The radius in the X direction.
         * @param radiusY The radius in the Y direction.
         * @param rotation The rotation in radians of this ellipse.
         * @param startAngle The starting angle at which to draw, measured in radians from the positive x axis.
         * @param endAngle The ending angle at which to draw, measured in radians from the positive x axis.
         * @param ccw Optional argument specifying if the ellipse should be drawn counter-clockwise between **startAngle** and **endAngle** instead of clockwise, the default.
         */
        ellipse(
            x: number,
            y: number,
            radiusX: number,
            radiusY: number,
            rotation: number,
            startAngle: number,
            endAngle: number,
            ccw?: boolean
        ): SkPath;

        /**
         * Returns a `true` if `this` path is equal to **otherPath**, `false`
         * otherwise.
         *
         * @param otherPath The path to compare to.
         */
        equals(otherPath: SkPath): boolean;

        /**
         * Returns an `SkRect` that represents the minimum and maximum area of
         * `this` path.
         * See [SkPath reference](https://api.skia.org/classSkPath.html#ac60188dc6075d6ebb56b5398fbba0c10)
         * for more details.
         */
        getBounds(): SkRect;

        /**
         * Returns a FillType based on what this path is.
         * This defaults to `PathKit.FillType.WINDING`, but may change with
         * `op()` or `simplify()`.
         *
         * Clients will typically want `getFillTypeString()` because that value
         * can be passed directly to an SVG or Canvas.
         */
        getFillType(): FillType;

        /**
         * Returns a `string` representing the fillType of `this` path.
         * The values are either "nonzero" or "evenodd".
         *
         * Example:
         *
         * ```typescript
         * let path = ...;
         * let ctx = document.getElementById('canvas1').getContext('2d');
         * ctx.strokeStyle = 'green';
         * ctx.fill(path.toPath2D(), path.getFillTypeString());
         * ```
         */
        getFillTypeString(): string;

        /**
         * Moves the pen (without drawing) to the given coordinates then
         * returns `this` for chaining purposes.
         * See [`Path2D.moveTo`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo)
         * for more details.
         *
         * @param x The X coordinate of where the pen should be moved to.
         * @param y The Y coordinate of where the pen should be moved to.
         */
        moveTo(x: number, y: number): SkPath;

        /**
         * Draws a straight line to the given coordinates then returns `this`
         * for chaining purposes.
         * See [`Path2D.lineTo`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo)
         * for more details.
         *
         * @param x The X coordinate of where the pen should be moved to.
         * @param y The Y coordinate of where the pen should be moved to.
         */
        lineTo(x: number, y: number): SkPath;

        /**
         * Combines **otherPath** into `this` path with the given operation and
         * returns `this` for chaining purposes.
         *
         * Example:
         *
         * ```typescript
         * let pathOne = PathKit.NewPath().moveTo(0, 20).lineTo(10, 10).lineTo(20, 20).close();
         * let pathTwo = PathKit.NewPath().moveTo(10, 20).lineTo(20, 10).lineTo(30, 20).close();
         * // Combine the two triangles to look like two mountains
         * let mountains = pathOne.copy().op(pathOne, pathTwo, PathKit.PathOp.UNION);
         * // set pathOne to be the small triangle where pathOne and pathTwo overlap
         * pathOne.op(pathOne, pathTwo, PathKit.PathOp.INTERSECT);
         * // since copy() was called, don't forget to call delete() on mountains.
         * ```
         *
         * @param otherPath The other path to be combined with `this`.
         * @param operation The operation to apply to the two paths.
         */
        op(otherPath: SkPath, operation: PathOp): SkPath;

        /**
         * Draws a quadratic Bézier curve with the given coordinates then
         * returns `this` for chaining purposes.
         * See [`Path2D.quadraticCurveTo`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
         * for more details.
         *
         * @param cpx The X ccordinate of the control point.
         * @param cpy The Y ccordinate of the control point.
         * @param x The X ccordinate of the end point.
         * @param y The Y ccordinate of the end point.
         */
        quadTo(cpx: number, cpy: number, x: number, y: number): SkPath;

        /**
         * Draws a quadratic Bézier curve with the given coordinates then
         * returns `this` for chaining purposes.
         * See [`Path2D.quadraticCurveTo`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
         * for more details.
         *
         * @param cpx The X ccordinate of the control point.
         * @param cpy The Y ccordinate of the control point.
         * @param x The X ccordinate of the end point.
         * @param y The Y ccordinate of the end point.
         */
        quadraticCurveTo(
            cpx: number,
            cpy: number,
            x: number,
            y: number
        ): SkPath;

        /**
         * Draws a rectangle on `this`, then returns `this` for chaining
         * purposes.
         * See [`Path2D.rect`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rect)
         * for more details.
         *
         * @param x The X coordinate of the upper-left corner of the rectangle.
         * @param y The Y coordinate of the upper-left corner of the rectangle.
         * @param w The width of the rectangle.
         * @param h The height of the rectangle.
         */
        rect(x: number, y: number, w: number, h: number): SkPath;

        /**
         * Set the fillType of the path.
         * See [`SkPath reference`](https://api.skia.org/SkPathTypes_8h.html#acc5b8721019c4a4b1beb8c759baab011)
         * for more details.
         *
         * @param fillType The new fillType.
         */
        setFillType(fillType: FillType): void;

        /**
         * Set `this` path to a set of non-overlapping contours that describe
         * the same area as the original path then returns `this` for chaining
         * purposes.
         */
        simplify(): SkPath;

        /**
         * Strokes this path out with the given options then returns `this`
         * for chaining purposes.
         * This can be used for a variety of effects.
         *
         * Example:
         *
         * ```typescript
         * let box = PathKit.NewPath().rect(0, 0, 100, 100);
         * // Stroke the path with width 10 and rounded corners
         * let rounded = box.copy().stroke({width: 10, join: PathKit.StrokeJoin.ROUND});
         * // Grow effect, that is, a 20 pixel expansion around the box.
         * let grow = box.copy().stroke({width: 20}).op(box, PathKit.PathOp.DIFFERENCE);
         * // Shrink effect, in which we subtract away from the original
         * let simplified = box.copy().simplify(); // sometimes required for complicated paths
         * let shrink = box.copy().stroke({width: 15, cap: PathKit.StrokeCap.BUTT})
         *                        .op(simplified, PathKit.PathOp.REVERSE_DIFFERENCE);
         * // Don't forget to call delete() on each of the copies!
         * ```
         *
         * @param opts Contains the options for stroking.
         */
        stroke(opts: StrokeOpts): SkPath;

        /**
         * Draws `this` path on the passed in
         * [Canvas Context](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D).
         *
         * Example:
         *
         * ```typescript
         * let box = PathKit.NewPath().rect(0, 0, 100, 100);
         * let ctx = document.getElementById('canvas1').getContext('2d');
         * ctx.strokeStyle = 'green';
         * ctx.beginPath();
         * box.toCanvas(ctx);
         * ctx.stroke();  // could also ctx.fill()
         * ```
         *
         * @param ctx Canvas on which to draw the path.
         */
        toCanvas(ctx: CanvasRenderingContext2D): void;

        /**
         * Returns a 2D Array of verbs and args.
         * See `PathKit.FromCmds()` for more details.
         */
        toCmds(): number[][];

        /**
         * Returns a
         * [Path2D](https://developer.mozilla.org/en-US/docs/Web/API/Path2D)
         * object that has the same operations as `this` path.
         *
         * Example:
         *
         * ```typescript
         * let box = PathKit.NewPath().rect(0, 0, 100, 100);
         * let ctx = document.getElementById('canvas1').getContext('2d');
         * ctx.strokeStyle = 'green';
         * ctx.stroke(box.toPath2D());
         * ```
         */
        toPath2D(): Path2D;

        /**
         * Returns a `string` representing an
         * [SVGPath](https://www.w3schools.com/graphics/svg_path.asp) based on
         * `this` path.
         *
         * Example:
         *
         * ```typescript
         * let box = PathKit.NewPath().rect(0, 0, 100, 100);
         * let svg = document.getElementById('svg1');
         * let newPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
         * newPath.setAttribute('stroke', 'green');
         * newPath.setAttribute('fill', 'white');
         * newPath.setAttribute('d', box.toSVGString());
         * svg.appendChild(newPath);
         * ```
         */
        toSVGString(): string;

        /**
         * Applies the specified
         * [transform](https://en.wikipedia.org/wiki/Transformation_matrix#Affine_transformations)
         * to `this` and then returns `this` for chaining purposes.
         *
         * @param matr An `Array<number>` of the nine numbers of an Affine Transform Matrix.
         */
        transform(matr: SkMatrix): SkPath;

        /**
         * Applies the specified
         * [transform](https://en.wikipedia.org/wiki/Transformation_matrix#Affine_transformations)
         * to `this` and then returns `this` for chaining purposes.
         *
         * Example:
         *
         * ```typescript
         * let path = PathKit.NewPath().rect(0, 0, 100, 100);
         * // scale up the path by 5x
         * path.transform([5, 0, 0,
         *                 0, 5, 0,
         *                 0, 0, 1]);
         * // move the path 75 px to the right.
         * path.transform(1, 0, 75,
         *                0, 1, 0,
         *                0, 0, 1);
         * ```
         *
         * @param scaleX Scaling along the X axis.
         * @param skewX Skew along the X axis.
         * @param transX Transposition along the X axis.
         * @param skewY Skew along the Y axis.
         * @param scaleY Scaling along the Y axis.
         * @param transY Transposition along the Y axis.
         * @param pers0 The X axis perspective factor.
         * @param pers1 The Y axis perspective factor.
         * @param pers2 The perspective scale.
         */
        transform(
            scaleX: number,
            skewX: number,
            transX: number,
            skewY: number,
            scaleY: number,
            transY: number,
            pers0: number,
            pers1: number,
            pers2: number
        ): SkPath;

        /**
         * Sets `this` path to be a subset of the original path, then returns
         * `this` for chaining purposes.
         *
         * @param startT
         * @param stopT
         * @param isComplement  If the complement of the trimmed section should be drawn instead of the areas between **startT** and **stopT**.
         */
        trim(startT: number, stopT: number, isComplement?: boolean): SkPath;
    }

    /**
     * This object enables chaining multiple PathOps together.
     * Create one with `let builder = new PathKit.SkOpBuilder();`
     * When created, the internal state is “empty path”.
     * Don’t forget to call `delete()` on both the builder and the result of
     * `resolve()` or `make()`.
     */
    class SkOpBuilder {
        /**
         * Create an empty SkOpBuilder object.
         */
        constructor();

        /**
         * Adds a path and the operand to the builder.
         *
         * @param path The path to be combined with the given rule.
         * @param operation The operation to apply to the two paths.
         */
        add(path: SkPath, operation: PathOp): void;

        /**
         * Must be called when `this` leaves the scope to avoid leaking the
         * memory in the WASM heap.
         */
        delete(): void;

        /**
         * Creates and returns a new `SkPath` based on all the given paths and
         * operands.
         * Don’t forget to call `.delete()` on the returned path when it goes
         * out of scope.
         */
        make(): SkPath;

        /**
         * Creates and returns a new `SkPath` based on all the given paths and
         * operands.
         * Don’t forget to call `.delete()` on the returned path when it goes
         * out of scope.
         */
        resolve(): SkPath;
    }

    /**
     * Constant representing a "moveTo" command.
     * For use with `PathKit.FromCmds()`.
     */
    const MOVE_VERB: number;

    /**
     * Constant representing a "lineTo" command.
     * For use with `PathKit.FromCmds()`.
     */
    const LINE_VERB: number;

    /**
     * Constant representing a "quadTo" command.
     * For use with `PathKit.FromCmds()`.
     */
    const QUAD_VERB: number;

    /**
     * Constant representing a "conicTo" command.
     * For use with `PathKit.FromCmds()`.
     */
    const CONIC_VERB: number;

    /**
     * Constant representing a "cubicTo" command.
     * For use with `PathKit.FromCmds()`.
     */
    const CUBIC_VERB: number;

    /**
     * Constant representing a "close" command.
     * For use with `PathKit.FromCmds()`.
     */
    const CLOSE_VERB: number;

    /**
     * Returns an `SkPath` with the same verbs and arguments as the SVG string,
     * or `null` on a failure.
     *
     * Example:
     *
     * ```typescript
     * let path = PathKit.FromSVGString('M150 0 L75 200 L225 200 Z');
     * // path represents a triangle
     * // don't forget to do path.delete() when it goes out of scope.
     * ```
     *
     * @param str String representing an SVGPath.
     */
    function FromSVGString(str: string): SkPath | null;

    /**
     * Returns an `SkPath` with the verbs and arguments from the list or `null`
     * on a failure.
     *
     * This can be faster than calling `.moveTo()`, `.lineTo()`, etc many
     * times.
     *
     * Example:
     *
     * ```typescript
     * let cmds = [
     *     [PathKit.MOVE_VERB, 0, 10],
     *     [PathKit.LINE_VERB, 30, 40],
     *     [PathKit.QUAD_VERB, 20, 50, 45, 60],
     * ];
     * let path = PathKit.FromCmds(cmds);
     * // path is the same as if a user had done
     * // let path = PathKit.NewPath().moveTo(0, 10).lineTo(30, 40).quadTo(20, 50, 45, 60);
     * // don't forget to do path.delete() when it goes out of scope.
     * ```
     *
     * @param cmds A 2D array of commands, where a command is a verb followed by its arguments.
     */
    function FromCmds(cmds: ReadonlyArray<ReadonlyArray<number>>): SkPath | null;

    /**
     * Returns an empty SkPath object.
     *
     * Example:
     *
     * ```typescript
     * let path = PathKit.NewPath();
     * path.moveTo(0, 10)
     *     .lineTo(30, 40)
     *     .quadTo(20, 50, 45, 60);
     * // don't forget to do path.delete() when it goes out of scope.
     * // Users can also do let path = new PathKit.SkPath();
     * ```
     */
    function NewPath(): SkPath;

    /**
     * Returns a `SkPath` that is a copy of the passed in `SkPath`.
     *
     * Example:
     *
     * ```typescript
     * let otherPath = ...;
     * let clone = PathKit.NewPath(otherPath);
     * clone.simplify();
     * // don't forget to do clone.delete() when it goes out of scope.
     * // Users can also do let clone = new PathKit.SkPath(otherPath);
     * // or let clone = otherPath.copy();
     * ```
     *
     * @param pathToCopy A path to make a copy of.
     */
    function NewPath(pathToCopy: SkPath): SkPath;

    /**
     * Returns a new `SkPath` that is the result of applying the given `PathOp`
     * to the first and second path (order matters).
     *
     * Example:
     *
     * ```typescript
     * let pathOne = PathKit.NewPath().moveTo(0, 20).lineTo(10, 10).lineTo(20, 20).close();
     * let pathTwo = PathKit.NewPath().moveTo(10, 20).lineTo(20, 10).lineTo(30, 20).close();
     * let mountains = PathKit.MakeFromOp(pathOne, pathTwo, PathKit.PathOp.UNION);
     * // don't forget to do mountains.delete() when it goes out of scope.
     * // Users can also do pathOne.op(pathTwo, PathKit.PathOp.UNION);
     * // to have the resulting path be stored to pathOne and avoid allocating another object.
     * ```
     *
     * @param pathOne A path.
     * @param pathTwo  A path.
     * @param op An op to apply.
     */
    function MakeFromOp(pathOne: SkPath, pathTwo: SkPath, op: PathOp): SkPath;

    /**
     * Fast evaluation of a cubic ease-in / ease-out curve.
     * This is defined as a parametric cubic curve inside the unit square.
     * Makes the following assumptions:
     *
     * - pt[0] is implicitly { 0, 0 }
     * - pt[3] is implicitly { 1, 1 }
     * - pts[1, 2] are inside the unit square
     *
     * This returns the Y coordinate for the given X coordinate.
     *
     * @param cpx1 X coordinate of the first control point.
     * @param cpy1 Y coordinate of the first control point.
     * @param cpx2 X coordinate of the second control point.
     * @param cpy2 Y coordinate of the second control point.
     * @param X The X coordinate for which to find the corresponding Y coordinate.
     */
    function cubicYFromX(
        cpx1: number,
        cpy1: number,
        cpx2: number,
        cpy2: number,
        X: number
    ): number;

    /**
     * Fast evaluation of a cubic ease-in / ease-out curve.
     * This is defined as a parametric cubic curve inside the unit square.
     * Makes the following assumptions:
     *
     * - pt[0] is implicitly { 0, 0 }
     * - pt[3] is implicitly { 1, 1 }
     * - pts[1, 2] are inside the unit square
     *
     * This returns the (X, Y) coordinate for the given T value as a length 2
     * array.
     *
     * @param cpx1 X coordinate of the first control point.
     * @param cpy1 Y coordinate of the first control point.
     * @param cpx2 X coordinate of the second control point.
     * @param cpy2 Y coordinate of the second control point.
     * @param T The T param for which to find the corresponding (X, Y) coordinates.
     */
    function cubicPtFromT(
        cpx1: number,
        cpy1: number,
        cpx2: number,
        cpy2: number,
        T: number
    ): number[];

    /**
     * Returns an `SkRect` object with the given params.
     *
     * @param left X coordinate of top-left corner of the `SkRect`.
     * @param top Y coordinate of top-left corner of the `SkRect`.
     * @param right X coordinate of bottom-right corner of the `SkRect`.
     * @param bottom Y coordinate of bottom-right corner of the `SkRect`.
     */
    function LTRBRect(
        left: number,
        top: number,
        right: number,
        bottom: number
    ): SkRect;
}

/**
 * Pathkit WASM loader.
 *
 * See https://www.npmjs.com/package/pathkit-wasm for usage.
 */
declare module 'pathkit-wasm/bin/pathkit.js' {
    interface PathKitInitOpts {
        locateFile?: (file: string) => string;
    }

    function PathKitInit(opts?: PathKitInitOpts): Promise<typeof PathKitAPI>;

    export default PathKitInit;
}

/**
 * Pathkit asm.js loader.
 *
 * See https://www.npmjs.com/package/pathkit-asmjs for usage.
 */
declare module 'pathkit-asmjs/bin/pathkit.js' {
    interface PathKitInitOpts {
        locateFile?: (file: string) => string;
    }

    function PathKitInit(opts?: PathKitInitOpts): Promise<typeof PathKitAPI>;

    export default PathKitInit;
}
