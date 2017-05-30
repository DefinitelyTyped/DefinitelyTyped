// Type definitions for D3JS d3-polygon module 1.0
// Project: https://github.com/d3/d3-polygon/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 1.0.1

/**
 * Returns the signed area of the specified polygon. If the vertices of the polygon are in counterclockwise order (
 * assuming a coordinate system where the origin ⟨0,0⟩ is in the top-left corner), the returned area is positive;
 * otherwise it is negative, or zero.
 *
 * @param polygon Array of coordinates <x0, y0>, <x1, y1> and so on.
 */
export function polygonArea(polygon: Array<[number, number]>): number;

/**
 * Returns the centroid of the specified polygon.
 *
 * @param polygon Array of coordinates <x0, y0>, <x1, y1> and so on.
 */
export function polygonCentroid(polygon: Array<[number, number]>): [number, number];

/**
 * Returns the convex hull of the specified points using Andrew’s monotone chain algorithm.
 * The returned hull is represented as an array containing a subset of the input points arranged in
 * counterclockwise order. Returns null if points has fewer than three elements.
 *
 * @param points Array of coordinates <x0, y0>, <x1, y1> and so on.
 */
export function polygonHull(points: Array<[number, number]>): Array<[number, number]> | null;

/**
 * Returns true if and only if the specified point is inside the specified polygon.
 *
 * @param polygon Array of coordinates <x0, y0>, <x1, y1> and so on.
 * @param point Coordinates of point <x, y>
 */
export function polygonContains(polygon: Array<[number, number]>, point: [number, number]): boolean;

/**
 * Returns the length of the perimeter of the specified polygon.
 *
 * @param polygon Array of coordinates <x0, y0>, <x1, y1> and so on.
 */
export function polygonLength(polygon: Array<[number, number]>): number;
