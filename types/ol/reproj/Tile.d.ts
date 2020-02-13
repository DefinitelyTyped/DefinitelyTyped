import Projection from '../proj/Projection';
import Tile from '../Tile';
import { TileCoord } from '../tilecoord';
import TileGrid from '../tilegrid/TileGrid';

export type FunctionType = (p0: number, p1: number, p2: number, p3: number) => Tile;
export default class ReprojTile extends Tile {
    constructor(
        sourceProj: Projection,
        sourceTileGrid: TileGrid,
        targetProj: Projection,
        targetTileGrid: TileGrid,
        tileCoord: TileCoord,
        wrappedTileCoord: TileCoord,
        pixelRatio: number,
        gutter: number,
        getTileFunction: FunctionType,
        opt_errorThreshold?: number,
        opt_renderEdges?: boolean,
    );
    getImage(): HTMLCanvasElement;
    load(): void;
}
