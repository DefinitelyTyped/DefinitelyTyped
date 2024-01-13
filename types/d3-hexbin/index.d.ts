// Last module patch version validated against: 0.2.2

export interface HexbinBin<T> extends Array<T> {
    /**
     * The x-coordinate of the center of the associated bin’s hexagon.
     */
    x: number;

    /**
     * The y-coordinate of the center of the associated bin’s hexagon.
     */
    y: number;
}

export interface Hexbin<T> {
    /**
     * Bins the specified array of points, returning an array of hexagonal bins.
     * For each point in the specified points array, the x- and y-accessors are
     * invoked to compute the x- and y-coordinates of the point, which is then
     * used to assign the point to a hexagonal bin.
     * If either the x- or y-coordinate is NaN, the point is ignored and will
     * not be in any of the returned bins.
     */
    (points: T[]): Array<HexbinBin<T>>;

    /**
     * Returns the SVG path string for the hexagon centered at the origin ⟨0,0⟩.
     * The path string is defined with relative coordinates such that you can
     * easily translate the hexagon to the desired position.
     * If radius is not specified, the hexbin’s current radius is used.
     * If radius is specified, a hexagon with the specified radius is returned;
     * this is useful for area-encoded bivariate hexbins.
     *
     * @param radius Radius number
     */
    hexagon(radius?: number): string;

    /**
     * Returns an array of [x, y] points representing the centers of every
     * hexagon in the extent.
     */
    centers(): Array<[number, number]>;

    /**
     * Returns an SVG path string representing the hexagonal mesh that covers
     * the extent; the returned path is intended to be stroked.
     * The mesh may extend slightly beyond the extent and may need to be clipped.
     */
    mesh(): string;

    /**
     * Sets the x-coordinate accessor to the specified function and returns this hexbin generator.
     *
     * The x-coordinate accessor is used by hexbin to compute the x-coordinate
     * of each point. The default value assumes each point is specified as
     * a two-element array of numbers [x, y].
     */
    x(x: (d: T) => number): this;

    /**
     * Returns the current x-coordinate accessor, which defaults to: `x(d) => d[0]`.
     *
     * The x-coordinate accessor is used by hexbin to compute the x-coordinate
     * of each point. The default value assumes each point is specified as
     * a two-element array of numbers [x, y].
     */
    x(): (d: T) => number;

    /**
     * Sets the y-coordinate accessor to the specified function and returns this hexbin generator.
     *
     * The y-coordinate accessor is used by hexbin to compute the y-coordinate
     * of each point. The default value assumes each point is specified as
     * a two-element array of numbers [x, y].
     */
    y(y: (d: T) => number): this;

    /**
     * Returns the current y-coordinate accessor, which defaults to: `y(d) => d[1]`.
     *
     * The y-coordinate accessor is used by hexbin to compute the y-coordinate
     * of each point. The default value assumes each point is specified as
     * a two-element array of numbers [x, y].
     */
    y(): (d: T) => number;

    /**
     * Sets the radius of the hexagon to the specified number.
     *
     * The hexagons are pointy-topped (rather than flat-topped);
     * the width of each hexagon is radius × 2 × sin(π / 3)
     * and the height of each hexagon radius × 3 / 2.
     */
    radius(radius: number): this;

    /**
     * Returns the current radius, which defaults to 1.
     *
     * The hexagons are pointy-topped (rather than flat-topped);
     * the width of each hexagon is radius × 2 × sin(π / 3)
     * and the height of each hexagon radius × 3 / 2.
     */
    radius(): number;

    /**
     * Sets the hexbin generator’s extent to the specified bounds
     * `[[x0, y0], [x1, y1]]` and returns the hexbin generator.
     */
    extent(extent: [[number, number], [number, number]]): this;

    /**
     * Returns the generator’s current extent `[[x0, y0], [x1, y1]]`,
     * where `x0` and `y0` are the lower bounds and `x1` and `y1` are the upper bounds.
     *
     * The extent defaults to `[[0, 0], [1, 1]]`.
     */
    extent(): [[number, number], [number, number]];

    /**
     * Sets the extent to the specified bounds `[[0, 0], [dx, dy]]` and returns the hexbin generator.
     *
     * This is a convenience method for setting the extent.
     */
    size(size: [number, number]): this;

    /**
     * Returns the generator’s current size `[x1 - x0, y1 - y0]`,
     * where `x0` and `y0` are the lower bounds and `x1` and `y1` are the upper bounds.
     *
     * The size defaults to [1, 1].
     */
    size(): [number, number];
}

/**
 * Creates a new hexbin generator with default radius, extent, x- and y- accessors.
 * The x- and y-accessors may have to be set to correspond to the data type provided
 * by the generic.
 *
 * The generic refers to the type of the data for the corresponding element.
 * Without specifying a generic the layout is assumed to be based on data represented
 * by a two-dimensional coordinate `[number, number]` for x- and y-coordinate, respectively.
 */
export function hexbin<T = [number, number]>(): Hexbin<T>;
