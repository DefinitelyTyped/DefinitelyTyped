import { Layer } from './Layer';

export {};

/**
 * Simple container for Guacamole.Layer, allowing layers to be easily
 * repositioned and nested. This allows certain operations to be accelerated
 * through DOM manipulation, rather than raster operations.
 */
export class VisibleLayer extends Layer {
    /**
     * @param width The width of the Layer, in pixels. The canvas element backing this Layer will be given this width.
     * @param height The height of the Layer, in pixels. The canvas element backing this Layer will be given this height.
     */
    constructor(width: number, height: number);

    /**
     * The opacity of the layer container, where 255 is fully opaque and 0 is
     * fully transparent.
     */
    alpha: number;

    /**
     * X coordinate of the upper-left corner of this layer container within
     * its parent, in pixels.
     */
    x: number;

    /**
     * Y coordinate of the upper-left corner of this layer container within
     * its parent, in pixels.
     */
    y: number;

    /**
     * Z stacking order of this layer relative to other sibling layers.
     */
    z: number;

    /**
     * The affine transformation applied to this layer container. Each element
     * corresponds to a value from the transformation matrix, with the first
     * three values being the first row, and the last three values being the
     * second row. There are six values total.
     */
    matrix: [number, number, number, number, number, number];

    /**
     * The parent layer container of this layer, if any.
     */
    parent: VisibleLayer | null;

    /**
     * Set of all children of this layer, indexed by layer index. This object
     * will have one property per child.
     */
    children: Record<number, VisibleLayer | undefined>;

    /**
     * Returns the element containing the canvas and any other elements
     * associated with this layer.
     * @returns The element containing this layer's canvas.
     */
    getElement(): HTMLElement;

    /**
     * Moves the upper-left corner of this layer to the given X and Y coordinate.
     * @param x The X coordinate to move to.
     * @param y The Y coordinate to move to.
     */
    translate(x: number, y: number): void;

    /**
     * Moves the upper-left corner of this VisibleLayer to the given X and Y
     * coordinate, sets the Z stacking order, and reparents this VisibleLayer
     * to the given VisibleLayer.
     * @param parent The parent to set.
     * @param x The X coordinate to move to.
     * @param y The Y coordinate to move to.
     * @param z The Z coordinate to move to.
     */
    move(parent: VisibleLayer, x: number, y: number, z: number): void;

    /**
     * Sets the opacity of this layer to the given value, where 255 is fully
     * opaque and 0 is fully transparent.
     * @param a The opacity to set.
     */
    shade(a: number): void;

    /**
     * Removes this layer container entirely, such that it is no longer
     * contained within its parent layer, if any.
     */
    dispose(): void;

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
    distort(a: number, b: number, c: number, d: number, e: number, f: number): void;
}
