// Type definitions for svg-path-bbox 0.2
// Project: https://github.com/mondeja/svg-path-bbox#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

export type BoundingBox = [minx: number, miny: number, maxx: number, maxy: number];

/**
 * Computes the bounding box of SVG path following the SVG 1.1 specification.
 * @param path SVG path.
 */
export function svgPathBbox(path: string): BoundingBox;
