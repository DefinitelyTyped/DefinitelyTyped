// Type definitions for D3JS d3-hexbin module v0.2.1
// Project: https://github.com/d3/d3-hexbin/
// Definitions by: UNCOVER TRUTH Inc. <https://github.com/uncovertruth/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Point {
  [id: string]: number | string
}

export interface Hexbin {
    /**
     * Bins the specified array of points, returning an array of hexagonal bins.
     * For each point in the specified points array, the x- and y-accessors are
     * invoked to compute the x- and y-coordinates of the point, which is then
     * used to determine which hexagonal bin to add the point.
     * If either the x- or y-coordinate is NaN, the point is ignored and will
     * not be in any of the returned bins.
     */
    (hexbin: Array<[number, number]> | Array<Point>): any;

    /**
     * Returns the SVG path string for the hexagon centered at the origin ⟨0,0⟩.
     * The path string is defined with relative coordinates such that you can
     * easily translate the hexagon to the desired position.
     * If radius is not specified, the hexbin’s current radius is used.
     * If radius is specified, a hexagon with the specified radius is returned;
     * this is useful for area-encoded bivariate hexbins.
     *
     * @param {number} radius Radius number
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
     * If x is specified, sets the x-coordinate accessor to the specified
     * function and returns this hexbin generator.
     *
     * The x-coordinate accessor is used by hexbin to compute the x-coordinate
     * of each point. The default value assumes each point is specified as
     * a two-element array of numbers [x, y].
     */
    x(_: any): Hexbin;

    /**
     * If x is not specified, returns the current x-coordinate accessor,
     *
     * which defaults to:
     *
     *   function x(d) {
     *     return d[0];
     *   }
     *
     * The x-coordinate accessor is used by hexbin to compute the x-coordinate
     * of each point. The default value assumes each point is specified as
     * a two-element array of numbers [x, y].
     *
     */
    x(): (d?: any) => number;

    /**
     * If y is specified, sets the y-coordinate accessor to the specified
     * function and returns this hexbin generator.
     *
     * The y-coordinate accessor is used by hexbin to compute the y-coordinate
     * of each point. The default value assumes each point is specified as
     * a two-element array of numbers [x, y].
     */
    y(_: any): Hexbin;

    /**
     * If y is not specified, returns the current y-coordinate accessor,
     *
     * which defaults to:
     *
     *   function y(d) {
     *     return d[1];
     *   }
     *
     * The y-coordinate accessor is used by hexbin to compute the y-coordinate
     * of each point. The default value assumes each point is specified as
     * a two-element array of numbers [x, y].
     */
    y(): (d?: any) => number;

    /**
     * If radius is specified, sets the radius of the hexagon to
     * the specified number.
     *
     * The hexagons are pointy-topped (rather than flat-topped);
     * the width of each hexagon is radius × 2 × sin(π / 3)
     * and the height of each hexagon radius × 3 / 2.
     */
    radius(_: any): Hexbin;

    /**
     * If radius is not specified, returns the current radius,
     * which defaults to 1.
     *
     * The hexagons are pointy-topped (rather than flat-topped);
     * the width of each hexagon is radius × 2 × sin(π / 3)
     * and the height of each hexagon radius × 3 / 2.
     */
    radius(): number;

    /**
     * If extent is specified, sets the hexbin generator’s extent to the
     * specified bounds [[x0, y0], [x1, y1]] and returns the hexbin generator.
     */
    extent(_: any): Hexbin;

    /**
     * If extent is not specified, returns the generator’s current
     * extent [[x0, y0], [x1, y1]], where x0 and y0 are the lower bounds and
     * x1 and y1 are the upper bounds.
     *
     * The extent defaults to [[0, 0], [1, 1]].
     */
    extent(): Array<[number, number]>;
}

/**
 * Constructs a new default hexbin generator.
 */
export function hexbin(): Hexbin;
