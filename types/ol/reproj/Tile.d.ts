import Projection from 'ol/proj/Projection';
import Tile from 'ol/Tile';
import { TileCoord } from 'ol/tilecoord';
import TileGrid from 'ol/tilegrid/TileGrid';
export type FunctionType = (() => void);
export default class ReprojTile extends Tile {
    constructor(sourceProj: Projection, sourceTileGrid: TileGrid, targetProj: Projection, targetTileGrid: TileGrid, tileCoord: TileCoord, wrappedTileCoord: TileCoord, pixelRatio: number, gutter: number, getTileFunction: FunctionType, opt_errorThreshold?: number, opt_renderEdges?: boolean);
    getImage(): HTMLCanvasElement;
}
