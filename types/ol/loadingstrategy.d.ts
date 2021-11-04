import { Extent } from './extent';
import TileGrid from './tilegrid/TileGrid';

/**
 * Strategy function for loading all features with a single request.
 */
export function all(extent: Extent, resolution: number): Extent[];
/**
 * Strategy function for loading features based on the view's extent and
 * resolution.
 */
export function bbox(extent: Extent, resolution: number): Extent[];
/**
 * Creates a strategy function for loading features based on a tile grid.
 */
export function tile(tileGrid: TileGrid): (p0: Extent, p1: number) => Extent[];
