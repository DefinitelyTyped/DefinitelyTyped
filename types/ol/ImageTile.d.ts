import Tile, { LoadFunction, Options } from './Tile';
import { TileCoord } from './tilecoord';
import TileState from './TileState';

export default class ImageTile extends Tile {
    constructor(
        tileCoord: TileCoord,
        state: TileState,
        src: string,
        crossOrigin: string,
        tileLoadFunction: LoadFunction,
        opt_options?: Options,
    );
    getImage(): HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
    load(): void;
}
