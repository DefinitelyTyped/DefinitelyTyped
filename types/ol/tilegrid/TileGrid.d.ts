import { Coordinate } from '../coordinate';
import { Extent } from '../extent';
import { Size } from '../size';
import { TileCoord } from '../tilecoord';
import TileRange from '../TileRange';

export interface Options {
    extent?: Extent;
    minZoom?: number;
    origin?: Coordinate;
    origins?: Coordinate[];
    resolutions: number[];
    sizes?: Size[];
    tileSize?: number | Size;
    tileSizes?: Size[];
}
export default class TileGrid {
    constructor(options: Options);
    protected maxZoom: number;
    protected minZoom: number;
    /**
     * Call a function with each tile coordinate for a given extent and zoom level.
     */
    forEachTileCoord(extent: Extent, zoom: number, callback: (p0: TileCoord) => void): void;
    forEachTileCoordParentTileRange(
        tileCoord: TileCoord,
        callback: (p0: number, p1: TileRange) => boolean,
        opt_tileRange?: TileRange,
        opt_extent?: Extent,
    ): boolean;
    /**
     * Get the extent for this tile grid, if it was configured.
     */
    getExtent(): Extent;
    getFullTileRange(z: number): TileRange;
    /**
     * Get the maximum zoom level for the grid.
     */
    getMaxZoom(): number;
    /**
     * Get the minimum zoom level for the grid.
     */
    getMinZoom(): number;
    /**
     * Get the origin for the grid at the given zoom level.
     */
    getOrigin(z: number): Coordinate;
    /**
     * Get the resolution for the given zoom level.
     */
    getResolution(z: number): number;
    /**
     * Get the list of resolutions for the tile grid.
     */
    getResolutions(): number[];
    getTileCoordCenter(tileCoord: TileCoord): Coordinate;
    getTileCoordChildTileRange(tileCoord: TileCoord, opt_tileRange?: TileRange, opt_extent?: Extent): TileRange;
    /**
     * Get the extent of a tile coordinate.
     */
    getTileCoordExtent(tileCoord: TileCoord, opt_extent?: Extent): Extent;
    /**
     * Get the tile coordinate for the given map coordinate and resolution.  This
     * method considers that coordinates that intersect tile boundaries should be
     * assigned the higher tile coordinate.
     */
    getTileCoordForCoordAndResolution(coordinate: Coordinate, resolution: number, opt_tileCoord?: TileCoord): TileCoord;
    /**
     * Get a tile coordinate given a map coordinate and zoom level.
     */
    getTileCoordForCoordAndZ(coordinate: Coordinate, z: number, opt_tileCoord?: TileCoord): TileCoord;
    getTileCoordResolution(tileCoord: TileCoord): number;
    /**
     * Get the extent for a tile range.
     */
    getTileRangeExtent(z: number, tileRange: TileRange, opt_extent?: Extent): Extent;
    /**
     * Get a tile range for the given extent and integer zoom level.
     */
    getTileRangeForExtentAndZ(extent: Extent, z: number, opt_tileRange?: TileRange): TileRange;
    /**
     * Get the tile size for a zoom level. The type of the return value matches the
     * tileSize or tileSizes that the tile grid was configured with. To always
     * get an module:ol/size~Size, run the result through module:ol/size~Size.toSize().
     */
    getTileSize(z: number): number | Size;
    getZForResolution(resolution: number, opt_direction?: number): number;
}
