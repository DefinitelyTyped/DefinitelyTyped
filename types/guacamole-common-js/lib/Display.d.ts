import { Layer } from './Layer';
import { VisibleLayer } from './VisibleLayer';
import { Mimetype } from './GuacCommon.d';

export {};

export namespace Display {
    export {};
    export type VisibleLayer = typeof VisibleLayer;
}

/**
 * The Guacamole display. The display does not deal with the Guacamole
 * protocol, and instead implements a set of graphical operations which
 * embody the set of operations present in the protocol. The order operations
 * are executed is guaranteed to be in the same order as their corresponding
 * functions are called.
 */
export class Display {
    /**
     * The X coordinate of the hotspot of the mouse cursor. The hotspot is
     * the relative location within the image of the mouse cursor at which
     * each click occurs.
     */
    cursorHotspotX: number;

    /**
     * The Y coordinate of the hotspot of the mouse cursor. The hotspot is
     * the relative location within the image of the mouse cursor at which
     * each click occurs.
     */
    cursorHotspotY: number;

    /**
     * The current X coordinate of the local mouse cursor. This is not
     * necessarily the location of the actual mouse - it refers only to
     * the location of the cursor image within the Guacamole display, as
     * last set by moveCursor().
     */
    cursorX: number;

    /**
     * The current X coordinate of the local mouse cursor. This is not
     * necessarily the location of the actual mouse - it refers only to
     * the location of the cursor image within the Guacamole display, as
     * last set by moveCursor().
     */
    cursorY: number;

    /**
     * Add the specified arc to the current path.
     * @param layer The layer to draw upon.
     * @param x The X coordinate of the center of the circle which will contain the arc.
     * @param y The Y coordinate of the center of the circle which will contain the arc.
     * @param radius The radius of the circle.
     * @param startAngle The starting angle of the arc, in radians.
     * @param endAngle The ending angle of the arc, in radians.
     * @param negative Whether the arc should be drawn in order of decreasing angle.
     */
    arc(
        layer: Layer,
        x: number,
        y: number,
        radius: number,
        startAngle: number,
        endAngle: number,
        negative: boolean,
    ): void;

    /**
     * Starts a new path at the specified point.
     * @param layer The layer to draw upon.
     * @param cp1x The X coordinate of the first control point.
     * @param cp1y The Y coordinate of the first control point.
     * @param cp2x The X coordinate of the second control point.
     * @param cp2y The Y coordinate of the second control point.
     * @param x The X coordinate of the endpoint of the curve.
     * @param y The Y coordinate of the endpoint of the curve.
     */
    curveTo(layer: Layer, cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;

    /**
     * Closes the current path by connecting the end point with the start point (if any) with a straight line.
     * @param layer The layer to draw upon.
     */
    close(layer: Layer): void;

    /**
     * Add the specified rectangle to the current path.
     * @param layer The layer to draw upon.
     * @param x The X coordinate of the upper-left corner of the rectangle to draw.
     * @param y The Y coordinate of the upper-left corner of the rectangle to draw.
     * @param w The width of the rectangle to draw.
     * @param h The height of the rectangle to draw.
     */
    rect(layer: Layer, x: number, y: number, w: number, h: number): void;

    /**
     * Clip all future drawing operations by the current path. The current path
     * is implicitly closed. The current path can continue to be reused
     * for other operations (such as fillColor()) but a new path will be started
     * once a path drawing operation (path() or rect()) is used.
     * @param layer The layer to affect.
     */
    clip(layer: Layer): void;

    /**
     * Stroke the current path with the specified color. The current path
     * is implicitly closed. The current path can continue to be reused
     * for other operations (such as clip()) but a new path will be started
     * once a path drawing operation (path() or rect()) is used.
     * @param layer The layer to draw upon.
     * @param cap The line cap style. Can be "round", "square", or "butt".
     * @param join The line join style. Can be "round", "bevel", or "miter".
     * @param thickness The line thickness in pixels.
     * @param r The red component of the color to fill.
     * @param g The green component of the color to fill.
     * @param b The blue component of the color to fill.
     * @param a The alpha component of the color to fill.
     */
    strokeColor(
        layer: Layer,
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
     * @param layer The layer to draw upon.
     * @param r The red component of the color to fill.
     * @param g The green component of the color to fill.
     * @param b The blue component of the color to fill.
     * @param a The alpha component of the color to fill.
     */
    fillColor(layer: Layer, r: number, g: number, b: number, a: number): void;

    /**
     * Stroke the current path with the image within the specified layer. The
     * image data will be tiled infinitely within the stroke. The current path
     * is implicitly closed. The current path can continue to be reused
     * for other operations (such as clip()) but a new path will be started
     * once a path drawing operation (path() or rect()) is used.
     * @param layer The layer to draw upon.
     * @param cap The line cap style. Can be "round", "square", or "butt".
     * @param join The line join style. Can be "round", "bevel", or "miter".
     * @param thickness The line thickness in pixels.
     * @param srcLayer The layer to use as a repeating pattern within the stroke.
     */
    strokeLayer(layer: Layer, cap: Layer.LineCap, join: Layer.LineJoin, thickness: number, srcLayer: Layer): void;

    /**
     * Fills the current path with the image within the specified layer. The
     * image data will be tiled infinitely within the stroke. The current path
     * is implicitly closed. The current path can continue to be reused
     * for other operations (such as clip()) but a new path will be started
     * once a path drawing operation (path() or rect()) is used.
     * @param layer The layer to draw upon.
     * @param srcLayer The layer to use as a repeating pattern within the fill.
     */
    fillLayer(layer: Layer, srcLayer: Layer): void;

    /**
     * Push current layer state onto stack.
     * @param layer The layer to draw upon.
     */
    push(layer: Layer): void;

    /**
     * Pop layer state off stack.
     * @param layer The layer to draw upon.
     */
    pop(layer: Layer): void;

    /**
     * Reset the layer, clearing the stack, the current path, and any transform matrix.
     * @param layer The layer to draw upon.
     */
    reset(layer: Layer): void;

    /**
     * Sets the given affine transform (defined with six values from the transform's matrix).
     * @param layer The layer to modify.
     * @param a The first value in the affine transform's matrix.
     * @param b The second value in the affine transform's matrix.
     * @param c The third value in the affine transform's matrix.
     * @param d The fourth value in the affine transform's matrix.
     * @param e The fifth value in the affine transform's matrix.
     * @param f The sixth value in the affine transform's matrix.
     */
    setTransform(layer: Layer, a: number, b: number, c: number, d: number, e: number, f: number): void;

    /**
     * Applies the given affine transform (defined with six values from the transform's matrix).
     * @param layer The layer to modify.
     * @param a The first value in the affine transform's matrix.
     * @param b The second value in the affine transform's matrix.
     * @param c The third value in the affine transform's matrix.
     * @param d The fourth value in the affine transform's matrix.
     * @param e The fifth value in the affine transform's matrix.
     * @param f The sixth value in the affine transform's matrix.
     */
    transform(layer: Layer, a: number, b: number, c: number, d: number, e: number, f: number): void;

    /**
     * Sets the channel mask for future operations on this Layer.
     * The channel mask is a Guacamole-specific compositing operation identifier
     * with a single bit representing each of four channels (in order): source
     * image where destination transparent, source where destination opaque,
     * destination where source transparent, and destination where source opaque.
     * @param layer The layer to modify.
     * @param mask The channel mask for future operations on this Layer.
     */
    setChannelMask(layer: Layer, mask: number): void;

    /**
     * Sets the miter limit for stroke operations using the miter join. This
     * limit is the maximum ratio of the size of the miter join to the stroke
     * width. If this ratio is exceeded, the miter will not be drawn for that
     * joint of the path.
     * @param layer The layer to modify.
     * @param limit The miter limit for stroke operations using the miter join.
     */
    setMeterLimit(layer: Layer, limit: number): void;

    /**
     * Removes the given layer container entirely, such that it is no longer
     * contained within its parent layer, if any.
     * @param layer The layer being removed from its parent.
     */
    dispose(layer: Layer): void;

    /**
     * Applies the given affine transform (defined with six values from the
     * transform's matrix) to the given layer.
     * @param layer The layer being distorted.
     * @param a The first value in the affine transform's matrix.
     * @param b The second value in the affine transform's matrix.
     * @param c The third value in the affine transform's matrix.
     * @param d The fourth value in the affine transform's matrix.
     * @param e The fifth value in the affine transform's matrix.
     * @param f The sixth value in the affine transform's matrix.
     */
    distort(layer: Layer, a: number, b: number, c: number, d: number, e: number, f: number): void;

    /**
     * Moves the upper-left corner of the given layer to the given X and Y
     * coordinate, sets the Z stacking order, and reparents the layer
     * to the given parent layer.
     * @param layer The layer being moved.
     * @param parent The parent to set.
     * @param x The X coordinate to move to.
     * @param y The Y coordinate to move to.
     * @param z The Z coordinate to move to.
     */
    move(layer: VisibleLayer, parent: VisibleLayer, x: number, y: number, z: number): void;

    /**
     * Sets the opacity of the given layer to the given value, where 255 is
     * fully opaque and 0 is fully transparent.
     * @param layer The layer whose opacity should be set.
     * @param alpha The opacity to set.
     */
    shade(layer: VisibleLayer, alpha: number): void;

    /**
     * Sets the scale of the client display element such that it renders at
     * a relatively smaller or larger size, without affecting the true
     * resolution of the display.
     * @param scale The scale to resize to, where 1.0 is normal size (1:1 scale).
     */
    scale(scale: number): void;

    /**
     * Returns the scale of the display.
     */
    getScale(): number;

    /**
     * Returns a canvas element containing the entire display, with all child
     * layers composited within.
     * @return A new canvas element containing a copy of the display.
     */
    flatten(): void;
    /**
     * Returns the element which contains the Guacamole display.
     */
    getElement(): HTMLElement;

    /**
     * Returns the width of this display.
     */
    getWidth(): number;

    /**
     * Returns the height of this display.
     */
    getHeight(): number;

    /**
     * Returns the default layer of this display. Each Guacamole display always
     * has at least one layer. Other layers can optionally be created within
     * this layer, but the default layer cannot be removed and is the absolute
     * ancestor of all other layers.
     * @return The default layer.
     */
    getDefaultLayer(): VisibleLayer;

    /**
     * Returns the cursor layer of this display. Each Guacamole display contains
     * a layer for the image of the mouse cursor. This layer is a special case
     * and exists above all other layers, similar to the hardware mouse cursor.
     * @return The cursor layer.
     */
    getCursorLayer(): VisibleLayer;

    /**
     * Creates a new layer. The new layer will be a direct child of the default
     * layer, but can be moved to be a child of any other layer. Layers returned
     * by this function are visible.
     * @return The newly-created layer.
     */
    createLayer(): VisibleLayer;

    /**
     * Creates a new buffer. Buffers are invisible, off-screen surfaces. They
     * are implemented in the same manner as layers, but do not provide the
     * same nesting semantics.
     * @return The newly-created buffer.
     */
    createBuffer(): Layer;

    /**
     * Flush all pending draw tasks, if possible, as a new frame. If the entire
     * frame is not ready, the flush will wait until all required tasks are unblocked.
     * @param callback The function to call when this frame is
     * flushed. This may happen immediately, or
     * later when blocked tasks become unblocked.
     */
    flush(callback: () => void): void;

    /**
     * Sets the hotspot and image of the mouse cursor displayed within the
     * Guacamole display.
     * @param hotspotX The X coordinate of the cursor hotspot.
     * @param hotspotY The Y coordinate of the cursor hotspot.
     * @param layer The source layer containing the data which should be used as the mouse cursor image.
     * @param srcx The X coordinate of the upper-left corner of the
     * rectangle within the source layer's coordinate space to copy data from.
     * @param srcy The Y coordinate of the upper-left corner of the
     * rectangle within the source layer's coordinate space to copy data from.
     * @param srcw The width of the rectangle within the source layer's coordinate space to copy data from.
     * @param srch The height of the rectangle within the source layer's coordinate space to copy data from.
     */
    setCursor(
        hotspotX: number,
        hotspotY: number,
        layer: Layer,
        srcx: number,
        srcy: number,
        srcw: number,
        srch: number,
    ): void;

    /**
     * Sets whether the software-rendered cursor is shown. This cursor differs
     * from the hardware cursor in that it is built into the Guacamole.Display,
     * and relies on its own Guacamole layer to render.
     * @param [shown=true] Whether to show the software cursor.
     */
    showCursor(shown: boolean): void;

    /**
     * Sets the location of the local cursor to the given coordinates. For the
     * sake of responsiveness, this function performs its action immediately.
     * Cursor motion is not maintained within atomic frames.
     * @param x The X coordinate to move the cursor to.
     * @param y The Y coordinate to move the cursor to.
     */
    moveCursor(x: number, y: number): void;

    /**
     * Changes the size of the given Layer to the given width and height.
     * Resizing is only attempted if the new size provided is actually different
     * from the current size.
     * @param layer The layer to resize.
     * @param width The new width.
     * @param height The new height.
     */
    resize(layer: Layer, width: number, height: number): void;

    /**
     * Draws the specified image at the given coordinates. The image specified
     * must already be loaded.
     * @param layer The layer to draw upon.
     * @param x The destination X coordinate.
     * @param y The destination Y coordinate.
     * @param image The image to draw. Note that this is an Image object - not a URL.
     */
    drawImage(layer: Layer, x: number, y: number, image: HTMLImageElement): void;

    /**
     * Draws the image contained within the specified Blob at the given
     * coordinates. The Blob specified must already be populated with image data.
     * @param layer The layer to draw upon.
     * @param x The destination X coordinate.
     * @param y The destination Y coordinate.
     * @param blob The Blob containing the image data to draw.
     */
    drawBlob(layer: Layer, x: number, y: number, blob: Blob): void;

    /**
     * Draws the image at the specified URL at the given coordinates. The image
     * will be loaded automatically, and this and any future operations will
     * wait for the image to finish loading.
     * @param layer The layer to draw upon.
     * @param x The destination X coordinate.
     * @param y The destination Y coordinate.
     * @param url The URL of the image to draw.
     */
    draw(layer: Layer, x: number, y: number, url: string): void;

    /**
     * Plays the video at the specified URL within this layer. The video
     * will be loaded automatically, and this and any future operations will
     * wait for the video to finish loading. Future operations will not be
     * executed until the video finishes playing.
     * @param layer The layer to draw upon.
     * @param mimetype The mimetype of the video to play.
     * @param duration The duration of the video in milliseconds.
     * @param url The URL of the video to play.
     */
    play(layer: Layer, mimetype: Mimetype, duration: number, url: string): void;

    /**
     * Transfer a rectangle of image data from one Layer to this Layer using the
     * specified transfer function.
     * @param srcLayer The Layer to copy image data from.
     * @param srcx The X coordinate of the upper-left corner of the
     * rectangle within the source Layer's coordinate space to copy data from.
     * @param srcy The Y coordinate of the upper-left corner of the
     * rectangle within the source Layer's coordinate space to copy data from.
     * @param srcw The width of the rectangle within the source Layer's
     * coordinate space to copy data from.
     * @param  srch The height of the rectangle within the source
     * Layer's coordinate space to copy data from.
     * @param dstLayer The layer to draw upon.
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
        dstLayer: Layer,
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
     * Layer's coordinate space to copy data from.
     * @param dstLayer The layer to draw upon.
     * @param x The destination X coordinate.
     * @param y The destination Y coordinate.
     */
    put(
        srcLayer: Layer,
        srcx: number,
        srcy: number,
        srcw: number,
        srch: number,
        dstLayer: Layer,
        x: number,
        y: number,
    ): void;

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
     * @param dstLayer The layer to draw upon.
     * @param x The destination X coordinate.
     * @param y The destination Y coordinate.
     */
    copy(
        srcLayer: Layer,
        srcx: number,
        srcy: number,
        srcw: number,
        srch: number,
        dstLayer: Layer,
        x: number,
        y: number,
    ): void;

    /**
     * Add the specified line to the current path.
     * @param layer The layer to draw upon.
     * @param x The X coordinate of the endpoint of the line to draw.
     * @param y The Y coordinate of the endpoint of the line to draw.
     */
    lineTo(layer: Layer, x: number, y: number): void;

    /**
     * Fired when the default layer (and thus the entire Guacamole display) is resized.
     * @event
     * @param width The new width of the Guacamole display.
     * @param height The new height of the Guacamole display.
     */
    onresize: null | ((width: number, height: number) => void);

    /**
     * Fired whenever the local cursor image is changed. This can be used to
     * implement special handling of the client-side cursor, or to override
     * the default use of a software cursor layer.
     * @event
     * @param cursorCanvas The cursor image.
     * @param x The X-coordinate of the cursor hotspot.
     * @param y The Y-coordinate of the cursor hotspot.
     */
    oncursor: null | ((cursorCanvas: HTMLCanvasElement, x: number, y: number) => void);
}
