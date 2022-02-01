import Tile from './Tile';
import TileState from './TileState';
import VectorTile from './VectorTile';
import Layer from './layer/Layer';
import { OrderFunction } from './render';
import LayerRenderer from './renderer/Layer';
import Source from './source/Source';
import { TileCoord } from './tilecoord';

export interface ReplayState {
    dirty: boolean;
    renderedRenderOrder: null | OrderFunction;
    renderedTileRevision: number;
    renderedResolution: number;
    renderedRevision: number;
    renderedTileResolution: number;
    renderedTileZ: number;
}
export default class VectorRenderTile extends Tile {
    constructor(
        tileCoord: TileCoord,
        state: TileState,
        urlTileCoord: TileCoord,
        getSourceTiles: (p0: VectorRenderTile) => VectorTile[],
    );
    getContext(layer: Layer<Source, LayerRenderer>): CanvasRenderingContext2D;
    /**
     * Get the Canvas for this tile.
     */
    getImage(layer: Layer<Source, LayerRenderer>): HTMLCanvasElement;
    getReplayState(layer: Layer<Source, LayerRenderer>): ReplayState;
    hasContext(layer: Layer<Source, LayerRenderer>): boolean;
    /**
     * Load the tile.
     */
    load(): void;
    /**
     * Remove from the cache due to expiry
     */
    release(): void;
}
