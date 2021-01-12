import Target from './events/Target';
import Projection from './proj/Projection';
import { TileCoord } from './tilecoord';
import TileState from './TileState';

/**
 * A function that takes an {@link module:ol/Tile} for the tile and a
 * {string} for the url as arguments. The default is
 * For more fine grained control, the load function can use fetch or XMLHttpRequest and involve
 * error handling:
 *
 */
export type LoadFunction = (p0: Tile, p1: string) => void;
export interface Options {
    transition?: number;
}
/**
 * {@link module:ol/source/Tile~Tile} sources use a function of this type to get
 * the url that provides a tile for a given tile coordinate.
 * This function takes an {@link module:ol/tilecoord~TileCoord} for the tile
 * coordinate, a {number} representing the pixel ratio and a
 * {@link module:ol/proj/Projection} for the projection  as arguments
 * and returns a {string} representing the tile URL, or undefined if no tile
 * should be requested for the passed tile coordinate.
 */
export type UrlFunction = (p0: TileCoord, p1: number, p2: Projection) => string | undefined;
export default abstract class Tile extends Target {
    constructor(tileCoord: TileCoord, state: TileState, opt_options?: Options);
    protected state: TileState;
    protected changed(): void;
    /**
     * Mark a transition as complete.
     */
    endTransition(id: string): void;
    /**
     * Get the alpha value for rendering.
     */
    getAlpha(id: string, time: number): number;
    /**
     * Get the interim tile most suitable for rendering using the chain of interim
     * tiles. This corresponds to the  most recent tile that has been loaded, if no
     * such tile exists, the original tile is returned.
     */
    getInterimTile(): Tile;
    getKey(): string;
    getState(): TileState;
    /**
     * Get the tile coordinate for this tile.
     */
    getTileCoord(): TileCoord;
    /**
     * Determine if a tile is in an alpha transition.  A tile is considered in
     * transition if tile.getAlpha() has not yet been called or has been called
     * and returned 1.
     */
    inTransition(id: string): boolean;
    /**
     * Load the image or retry if loading previously failed.
     * Loading is taken care of by the tile queue, and calling this method is
     * only needed for preloading or for reloading in case of an error.
     */
    abstract load(): void;
    /**
     * Goes through the chain of interim tiles and discards sections of the chain
     * that are no longer relevant.
     */
    refreshInterimChain(): void;
    /**
     * Called by the tile cache when the tile is removed from the cache due to expiry
     */
    release(): void;
    /**
     * Sets the state of this tile. If you write your own {@link module:ol/Tile~LoadFunction tileLoadFunction} ,
     * it is important to set the state correctly to {@link module:ol/TileState~ERROR}
     * when the tile cannot be loaded. Otherwise the tile cannot be removed from
     * the tile queue and will block other requests.
     */
    setState(state: TileState): void;
}
