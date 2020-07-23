export namespace Layer {
    export {};
    export type LineCap = 'round' | 'square' | 'butt';
    export type LineJoin = 'round' | 'bevel' | 'mitter';

    /**
     * Represents a single pixel of image data. All components have a minimum value
     * of 0 and a maximum value of 255.
     */
    export class Pixel {
        /**
         * @param r The red component of this pixel.
         * @param g The green component of this pixel.
         * @param b The blue component of this pixel.
         * @param a The alpha component of this pixel.
         */
        constructor(r: number, g: number, b: number, a: number);

        /**
         * The red component of this pixel, where 0 is the minimum value,
         * and 255 is the maximum.
         */
        red: number;

        /**
         * The green component of this pixel, where 0 is the minimum value,
         * and 255 is the maximum.
         */
        green: number;

        /**
         * The blue component of this pixel, where 0 is the minimum value,
         * and 255 is the maximum.
         */
        blue: number;

        /**
         * The alpha component of this pixel, where 0 is the minimum value,
         * and 255 is the maximum.
         */
        alpha: number;
    }
}

/**
 * Abstract ordered drawing surface. Each Layer contains a canvas element and
 * provides simple drawing instructions for drawing to that canvas element,
 * however unlike the canvas element itself, drawing operations on a Layer are
 * guaranteed to run in order, even if such an operation must wait for an image
 * to load before completing.
 */
export class Layer {
    /**
     * Channel mask for the composite operation "rout".
     */
    static readonly ROUT: 0x2;

    /**
     * Channel mask for the composite operation "atop".
     */
    static readonly ATOP: 0x6;

    /**
     * Channel mask for the composite operation "xor".
     */
    static readonly XOR: 0xa;

    /**
     * Channel mask for the composite operation "rover".
     */
    static readonly ROVER: 0xb;

    /**
     * Channel mask for the composite operation "over".
     */
    static readonly OVER: 0xe;

    /**
     * Channel mask for the composite operation "plus".
     */
    static readonly PLUS: 0xf;

    /**
     * Channel mask for the composite operation "rin".
     * Beware that WebKit-based browsers may leave the contents of the destionation
     * layer where the source layer is transparent, despite the definition of this
     * operation.
     */
    static readonly RIN: 0x1;

    /**
     * Channel mask for the composite operation "in".
     * Beware that WebKit-based browsers may leave the contents of the destionation
     * layer where the source layer is transparent, despite the definition of this
     * operation.
     */
    static readonly IN: 0x4;

    /**
     * Channel mask for the composite operation "out".
     * Beware that WebKit-based browsers may leave the contents of the destionation
     * layer where the source layer is transparent, despite the definition of this
     * operation.
     */
    static readonly OUT: 0x8;

    /**
     * Channel mask for the composite operation "ratop".
     * Beware that WebKit-based browsers may leave the contents of the destionation
     * layer where the source layer is transparent, despite the definition of this
     * operation.
     */
    static readonly RATOP: 0x9;

    /**
     * Channel mask for the composite operation "src".
     * Beware that WebKit-based browsers may leave the contents of the destionation
     * layer where the source layer is transparent, despite the definition of this
     * operation.
     */
    static readonly SRC: 0xc;

    /**
     * @param width The width of the Layer, in pixels. The canvas element
     * backing this Layer will be given this width.
     * @param height The height of the Layer, in pixels. The canvas element
     * backing this Layer will be given this height.
     */
    constructor(width: number, height: number);

    /**
     * Set to true if this Layer should resize itself to accomodate the
     * dimensions of any drawing operation, and false (the default) otherwise.
     * Note that setting this property takes effect immediately, and thus may
     * take effect on operations that were started in the past but have not
     * yet completed. If you wish the setting of this flag to only modify
     * future operations, you will need to make the setting of this flag an
     * operation with sync().
     * @example
     * // Set autosize to true for all future operations
     * layer.sync(function() {
     *     layer.autosize = true;
     * });
     */
    autoresize: boolean;

    /**
     * The current width of this layer.
     */
    width: number;

    /**
     * The current height of this layer.
     */
    height: number;

    /**
     * Returns the canvas element backing this Layer. Note that the dimensions
     * of the canvas may not exactly match those of the Layer, as resizing a
     * canvas while maintaining its state is an expensive operation.
     * @returns The canvas element backing this Layer.
     */
    getCanvas(): HTMLCanvasElement;

    /**
     * Returns a new canvas element containing the same image as this Layer.
     * Unlike getCanvas(), the canvas element returned is guaranteed to have
     * the exact same dimensions as the Layer.
     * @returns A new canvas element containing a copy of the image content this Layer.
     */
    toCanvas(): HTMLCanvasElement;

    /**
     * Changes the size of this Layer to the given width and height. Resizing
     * is only attempted if the new size provided is actually different from
     * the current size.
     * @param newWidth The new width to assign to this Layer.
     * @param newHeight The new height to assign to this Layer.
     */
    resize(newWidth: number, newHeight: number): void;

    /**
     * Draws the specified image at the given coordinates. The image specified
     * must already be loaded.
     * @param x The destination X coordinate.
     * @param y The destination Y coordinate.
     * @param image The image to draw. Note that this is an Image object - not a URL.
     */
    drawImage(x: number, y: number, image: HTMLImageElement): void;

    /**
     * Transfer a rectangle of image data from one Layer to this Layer using the
     * specified transfer function.
     * @param srcLayer The Layer to copy image data from.
     * @param srcx The X coordinate of the upper-left corner of the
     *                      rectangle within the source Layer's coordinate
     *                      space to copy data from.
     * @param srcy The Y coordinate of the upper-left corner of the
     *                      rectangle within the source Layer's coordinate
     *                      space to copy data from.
     * @param srcw The width of the rectangle within the source Layer's
     *                      coordinate space to copy data from.
     * @param srch The height of the rectangle within the source
     *                      Layer's coordinate space to copy data from.
     * @param x The destination X coordinate.
     * @param y The destination Y coordinate.
     * @param transferFunction The transfer function to use to
     * transfer data from source to destination.
     */
    transfer(
        srcLayer: Layer,
        srcx: number,
        srcy: number,
        srcw: number,
        srch: number,
        x: number,
        y: number,
        transferFunction: (srcPixel: Layer.Pixel, dstPixel: Layer.Pixel) => void,
    ): void;

    /**
     * Put a rectangle of image data from one Layer to this Layer directly
     * without performing any alpha blending. Simply copy the data.
     * @param srcLayer The Layer to copy image data from.
     * @param srcx The X coordinate of the upper-left corner of the
     * rectangle within the source Layer's coordinate space to copy data from.
     * @param srcy The Y coordinate of the upper-left corner of the
     * rectangle within the source Layer's coordinate space to copy data from.
     * @param srcw The width of the rectangle within the source Layer's
     * coordinate space to copy data from.
     * @param srch The height of the rectangle within the source
     * coordinate space to copy data from.
     * @param x The destination X coordinate.
     * @param y The destination Y coordinate.
     */
    put(srcLayer: Layer, srcx: number, srcy: number, srcw: number, srch: number, x: number, y: number): void;

    /**
     * Copy a rectangle of image data from one Layer to this Layer. This
     * operation will copy exactly the image data that will be drawn once all
     * operations of the source Layer that were pending at the time this
     * function was called are complete. This operation will not alter the
     * size of the source Layer even if its autosize property is set to true.
     * @param srcLayer The Layer to copy image data from.
     * @param srcx The X coordinate of the upper-left corner of the
     * rectangle within the source Layer's coordinate space to copy data from.
     * @param srcy The Y coordinate of the upper-left corner of the
     * rectangle within the source Layer's coordinate space to copy data from.
     * @param srcw The width of the rectangle within the source Layer's
     * coordinate space to copy data from.
     * @param srch The height of the rectangle within the source
     * Layer's coordinate space to copy data from.
     * @param x The destination X coordinate.
     * @param y The destination Y coordinate.
     */
    copy(srcLayer: Layer, srcx: number, srcy: number, srcw: number, srch: number, x: number, y: number): void;

    distort(a: number, b: number, c: number, d: number, e: number, f: number): void;

    /**
     * Starts a new path at the specified point.
     * @param cp1x The X coordinate of the first control point.
     * @param cp1y The Y coordinate of the first control point.
     * @param cp2x The X coordinate of the second control point.
     * @param cp2y The Y coordinate of the second control point.
     * @param x The X coordinate of the endpoint of the curve.
     * @param y The Y coordinate of the endpoint of the curve.
     */
    curveTo: CanvasRenderingContext2D['bezierCurveTo'];

    /**
     * Add the specified rectangle to the current path.
     * @param x The X coordinate of the upper-left corner of the rectangle to draw.
     * @param y The Y coordinate of the upper-left corner of the rectangle to draw.
     * @param w The width of the rectangle to draw.
     * @param h The height of the rectangle to draw.
     */
    rect: CanvasRenderingContext2D['rect'];

    /**
     * Starts a new path at the specified point.
     * @param x The X coordinate of the point to draw.
     * @param y The Y coordinate of the point to draw.
     */
    moveTo: CanvasRenderingContext2D['moveTo'];

    /**
     * Add the specified line to the current path.
     * @param x The X coordinate of the endpoint of the line to draw.
     * @param y The Y coordinate of the endpoint of the line to draw.
     */
    lineTo: CanvasRenderingContext2D['lineTo'];

    /**
     * Add the specified arc to the current path.
     * @param x The X coordinate of the center of the circle which
     *                   will contain the arc.
     * @param y The Y coordinate of the center of the circle which
     *                   will contain the arc.
     * @param radius The radius of the circle.
     * @param startAngle The starting angle of the arc, in radians.
     * @param endAngle The ending angle of the arc, in radians.
     * @param negative Whether the arc should be drawn in order of
     *                           decreasing angle.
     */
    arc: CanvasRenderingContext2D['arc'];

    /**
     * Closes the current path by connecting the end point with the start
     * point (if any) with a straight line.
     */
    close: CanvasRenderingContext2D['closePath'];

    /**
     * Clip all future drawing operations by the current path. The current path
     * is implicitly closed. The current path can continue to be reused
     * for other operations (such as fillColor()) but a new path will be started
     * once a path drawing operation (path() or rect()) is used.
     */
    clip: CanvasRenderingContext2D['clip'];

    /**
     * Stroke the current path with the specified color. The current path
     * is implicitly closed. The current path can continue to be reused
     * for other operations (such as clip()) but a new path will be started
     * once a path drawing operation (path() or rect()) is used.
     * @param cap The line cap style. Can be "round", "square", or "butt".
     * @param join The line join style. Can be "round", "bevel", miter".
     * @param thickness The line thickness in pixels.
     * @param r The red component of the color to fill.
     * @param g The green component of the color to fill.
     * @param b The blue component of the color to fill.
     * @param a The alpha component of the color to fill.
     */
    strokeColor(
        cap: Layer.LineCap,
        join: Layer.LineJoin,
        thickness: number,
        r: number,
        g: number,
        b: number,
        a: number,
    ): void;

    /**
     * Fills the current path with the specified color. The current path
     * is implicitly closed. The current path can continue to be reused
     * for other operations (such as clip()) but a new path will be started
     * once a path drawing operation (path() or rect()) is used.
     * @param r The red component of the color to fill.
     * @param g The green component of the color to fill.
     * @param b The blue component of the color to fill.
     * @param a The alpha component of the color to fill.
     */
    fillColor(r: number, g: number, b: number, a: number): void;

    /**
     * Stroke the current path with the specified color. The current path
     * is implicitly closed. The current path can continue to be reused
     * for other operations (such as clip()) but a new path will be started
     * once a path drawing operation (path() or rect()) is used.
     * @param cap The line cap style. Can be "round", "square", or "butt".
     * @param join The line join style. Can be "round", "bevel", or "miter".
     * @param thickness The line thickness in pixels.
     * @param r The red component of the color to fill.
     * @param g The green component of the color to fill.
     * @param b The blue component of the color to fill.
     * @param a The alpha component of the color to fill.
     */
    strokeLayer(cap: Layer.LineCap, join: Layer.LineJoin, thickness: number, layer: Layer): void;

    /**
     * Fills the current path with the image within the specified layer. The
     * is implicitly closed. The current path can continue to be reused
     * for other operations (such as clip()) but a new path will be started
     * once a path drawing operation (path() or rect()) is used.
     * @param srcLayer The layer to use as a repeating pattern within the fill.
     */
    fillLayer(srcLayer: Layer): void;

    /**
     * Push current layer state onto stack.
     */
    push(): void;

    /**
     * Pop layer state off stack.
     */
    pop(): void;

    /**
     * Reset the layer, clearing the stack, the current path, and any transform
     * matrix.
     */
    reset(): void;

    /**
     * Sets the given affine transform (defined with six values from the
     * transform's matrix).
     * @param a The first value in the affine transform's matrix.
     * @param b The second value in the affine transform's matrix.
     * @param c The third value in the affine transform's matrix.
     * @param d The fourth value in the affine transform's matrix.
     * @param e The fifth value in the affine transform's matrix.
     * @param f The sixth value in the affine transform's matrix.
     */
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;

    /**
     * Applies the given affine transform (defined with six values from the
     * transform's matrix).
     * @param a The first value in the affine transform's matrix.
     * @param b The second value in the affine transform's matrix.
     * @param c The third value in the affine transform's matrix.
     * @param d The fourth value in the affine transform's matrix.
     * @param e The fifth value in the affine transform's matrix.
     * @param f The sixth value in the affine transform's matrix.
     */
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;

    /**
     * Sets the channel mask for future operations on this Layer.
     * The channel mask is a Guacamole-specific compositing operation identifier
     * with a single bit representing each of four channels (in order): source
     * image where destination transparent, source where destination opaque,
     * destination where source transparent, and destination where source opaque.
     * @param mask The channel mask for future operations on this Layer.
     */
    setChannelMask(mask: number): void;

    /**
     * Sets the miter limit for stroke operations using the miter join. This
     * limit is the maximum ratio of the size of the miter join to the stroke
     * width. If this ratio is exceeded, the miter will not be drawn for that
     * joint of the path.
     * @param limit The miter limit for stroke operations using the miter join.
     */
    setMiterLimit(limit: number): void;
}
