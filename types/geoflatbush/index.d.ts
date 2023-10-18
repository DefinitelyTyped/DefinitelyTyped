import Flatbush from "flatbush";

/**
 * Performs nearest neighbors queries for geographic bounding boxes, taking Earth curvature and date line wrapping into account.
 *
 * @param maxResults the maximum number of results, default Infinity
 * @param maxDistance distance in kilometers, default Infinity
 */
export function around(
    index: Flatbush,
    longitude: number,
    latitude: number,
    maxResults?: number,
    maxDistance?: number,
    filter?: (index: number) => boolean,
): number[];
