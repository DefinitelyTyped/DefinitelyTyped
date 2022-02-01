import TileGrid from './tilegrid/TileGrid';

/**
 * An array of three numbers representing the location of a tile in a tile
 * grid. The order is z (zoom level), x (column), and y (row).
 */
export type TileCoord = number[];
export function createOrUpdate(z: number, x: number, y: number, opt_tileCoord?: TileCoord): TileCoord;
/**
 * Get a tile coord given a key.
 */
export function fromKey(key: string): TileCoord;
/**
 * Get the tile cache key for a tile key obtained through tile.getKey().
 */
export function getCacheKeyForTileKey(tileKey: string): string;
/**
 * Get the key for a tile coord.
 */
export function getKey(tileCoord: TileCoord): string;
export function getKeyZXY(z: number, x: number, y: number): string;
export function hash(tileCoord: TileCoord): number;
export function withinExtentAndZ(tileCoord: TileCoord, tileGrid: TileGrid): boolean;
