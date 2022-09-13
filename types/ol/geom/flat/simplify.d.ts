export function douglasPeucker(
    flatCoordinates: number[],
    offset: number,
    end: number,
    stride: number,
    squaredTolerance: number,
    simplifiedFlatCoordinates: number[],
    simplifiedOffset: number,
): number;
export function douglasPeuckerArray(
    flatCoordinates: number[],
    offset: number,
    ends: number[],
    stride: number,
    squaredTolerance: number,
    simplifiedFlatCoordinates: number[],
    simplifiedOffset: number,
    simplifiedEnds: number[],
): number;
export function douglasPeuckerMultiArray(
    flatCoordinates: number[],
    offset: number,
    endss: number[][],
    stride: number,
    squaredTolerance: number,
    simplifiedFlatCoordinates: number[],
    simplifiedOffset: number,
    simplifiedEndss: number[][],
): number;
/**
 * Simplifies a line string using an algorithm designed by Tim Schaub.
 * Coordinates are snapped to the nearest value in a virtual grid and
 * consecutive duplicate coordinates are discarded.  This effectively preserves
 * topology as the simplification of any subsection of a line string is
 * independent of the rest of the line string.  This means that, for examples,
 * the common edge between two polygons will be simplified to the same line
 * string independently in both polygons.  This implementation uses a single
 * pass over the coordinates and eliminates intermediate collinear points.
 */
export function quantize(
    flatCoordinates: number[],
    offset: number,
    end: number,
    stride: number,
    tolerance: number,
    simplifiedFlatCoordinates: number[],
    simplifiedOffset: number,
): number;
export function quantizeArray(
    flatCoordinates: number[],
    offset: number,
    ends: number[],
    stride: number,
    tolerance: number,
    simplifiedFlatCoordinates: number[],
    simplifiedOffset: number,
    simplifiedEnds: number[],
): number;
export function quantizeMultiArray(
    flatCoordinates: number[],
    offset: number,
    endss: number[][],
    stride: number,
    tolerance: number,
    simplifiedFlatCoordinates: number[],
    simplifiedOffset: number,
    simplifiedEndss: number[][],
): number;
export function radialDistance(
    flatCoordinates: number[],
    offset: number,
    end: number,
    stride: number,
    squaredTolerance: number,
    simplifiedFlatCoordinates: number[],
    simplifiedOffset: number,
): number;
export function simplifyLineString(
    flatCoordinates: number[],
    offset: number,
    end: number,
    stride: number,
    squaredTolerance: number,
    highQuality: boolean,
    opt_simplifiedFlatCoordinates?: number[],
): number[];
export function snap(value: number, tolerance: number): number;
