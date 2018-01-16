// Type definitions for earcut 2.1
// Project: https://github.com/mapbox/earcut#readme
// Definitions by: Adrian Leonhard <https://github.com/NaridaL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Duplicated export mirrors actual source: https://github.com/mapbox/earcut/blob/master/src/earcut.js#L3-L4

/**
 * Triangulate an outline.
 *
 * @param vertices A flat array of vertice coordinates like [x0,y0, x1,y1, x2,y2, ...].
 * @param holes An array of hole indices if any (e.g. [5, 8] for a 12-vertice input would mean one hole with vertices 5–7 and another with 8–11).
 * @param dimensions The number of coordinates per vertice in the input array (2 by default).
 * @return A flat array with each group of three numbers indexing a triangle in the `vertices` array.
 * @example earcut([10,0, 0,50, 60,60, 70,10]); // returns [1,0,3, 3,2,1]
 * @example with a hole: earcut([0,0, 100,0, 100,100, 0,100,  20,20, 80,20, 80,80, 20,80], [4]); // [3,0,4, 5,4,0, 3,4,7, 5,0,1, 2,3,7, 6,5,1, 2,7,6, 6,1,2]
 * @example with 3d coords: earcut([10,0,1, 0,50,2, 60,60,3, 70,10,4], null, 3); // [1,0,3, 3,2,1]
 */
declare function earcut(vertices: ArrayLike<number>, holes?: ArrayLike<number>, dimensions?: number): number[];
declare const exports: typeof earcut & { default: typeof earcut };
export = exports;
export as namespace earcut;
