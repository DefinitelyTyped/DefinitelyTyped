import DataTile from '../DataTile';
import ImageTile from '../ImageTile';
import Target from '../events/Target';
import ReprojTile from '../reproj/Tile';
import TileGrid from '../tilegrid/TileGrid';
import WebGLHelper from './Helper';

export type TileType = DataTile | ImageTile | ReprojTile;
export default class TileTexture extends Target {
    constructor(tile: TileType, grid: TileGrid, helper: WebGLHelper);
    setTile(tile: TileType): void;
}
