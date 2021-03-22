/**
 * Calculates a point that is likely to lie in the interior of the linear rings.
 * Inspired by JTS's com.vividsolutions.jts.geom.Geometry#getInteriorPoint.
 */
export function getInteriorPointOfArray(
    flatCoordinates: number[],
    offset: number,
    ends: number[],
    stride: number,
    flatCenters: number[],
    flatCentersOffset: number,
    opt_dest?: number[],
): number[];
export function getInteriorPointsOfMultiArray(
    flatCoordinates: number[],
    offset: number,
    endss: number[][],
    stride: number,
    flatCenters: number[],
): number[];
