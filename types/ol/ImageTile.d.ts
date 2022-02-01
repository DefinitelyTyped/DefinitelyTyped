import Tile, { LoadFunction, Options } from './Tile';
import TileState from './TileState';
import { TileCoord } from './tilecoord';

export default class ImageTile extends Tile {
    constructor(
        tileCoord: TileCoord,
        state: TileState,
        src: string,
        crossOrigin: string,
        tileLoadFunction: LoadFunction,
        opt_options?: Options,
    );
    /**
     * Get the HTML image element for this tile (may be a Canvas, Image, or Video).
     */
    getImage(): HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
    /**
     * Load not yet loaded URI.
     */
    load(): void;
    /**
     * Sets an HTML image element for this tile (may be a Canvas or preloaded Image).
     */
    setImage(element: HTMLCanvasElement | HTMLImageElement): void;
}
