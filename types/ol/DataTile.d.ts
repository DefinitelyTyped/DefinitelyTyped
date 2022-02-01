import Tile from './Tile';
import { TileCoord } from './tilecoord';

/**
 * Data that can be used with a DataTile.  For increased browser compatibility, use
 * Uint8Array instead of Uint8ClampedArray where possible.
 */
export type Data = Uint8Array | Uint8ClampedArray | Float32Array | DataView;
export interface Options {
    tileCoord: TileCoord;
    loader: () => Promise<Data>;
    transition?: number | undefined;
    interpolate?: boolean | undefined;
}
export default class DataTile extends Tile {
    constructor(options: Options);
    /**
     * Get the data for the tile.
     */
    getData(): Data;
    /**
     * Get any loading error.
     */
    getError(): Error;
    /**
     * Load not yet loaded URI.
     */
    load(): void;
}
