import Event from './events/Event';
import FeatureFormat from './format/Feature';
import Layer from './layer/Layer';
import Projection from './proj/Projection';
import { OrderFunction } from './render';
import VectorTile_1 from './source/VectorTile';
import Tile, { LoadFunction, UrlFunction } from './Tile';
import { TileCoord } from './tilecoord';
import TileGrid from './tilegrid/TileGrid';
import TileState from './TileState';
import VectorTile from './VectorTile';

export interface ReplayState {
    dirty: boolean;
    renderedRenderOrder: OrderFunction;
    renderedTileRevision: number;
    renderedRevision: number;
}
export default class VectorImageTile extends Tile {
    constructor(
        tileCoord: TileCoord,
        state: TileState,
        sourceRevision: number,
        format: FeatureFormat,
        tileLoadFunction: LoadFunction,
        urlTileCoord: TileCoord,
        tileUrlFunction: UrlFunction,
        sourceTileGrid: TileGrid,
        tileGrid: TileGrid,
        sourceTiles: { [key: string]: VectorTile },
        pixelRatio: number,
        projection: Projection,
        tileClass: VectorTile,
        handleTileChange: (this: VectorTile_1, p0: Event) => void,
        zoom: number
    );
    getContext(layer: Layer): CanvasRenderingContext2D;
    getImage(layer: Layer): HTMLCanvasElement;
    getReplayState(layer: Layer): ReplayState;
    getTile(tileKey: string): VectorTile;
}
export function defaultLoadFunction(tile: VectorTile, url: string): void;
