// Type definitions for geoflatbush 1.0
// Project: https://github.com/mourner/geoflatbush
// Definitions by: Matt Fedderly <https://github.com/mfedderly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { IFlatbush } from 'flatbush';

/**
 * Performs nearest neighbors queries for geographic bounding boxes, taking Earth curvature and date line wrapping into account.
 *
 * @param maxResults the maximum number of results, default Infinity
 * @param maxDistance distance in kilometers, default Infinity
 */
export function around(
    index: IFlatbush,
    longitude: number,
    latitude: number,
    maxResults?: number,
    maxDistance?: number,
    filter?: (index: number) => boolean
): number[];
