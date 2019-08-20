import { EventsKey } from '../events';
import Event from '../events/Event';
import { ObjectEvent } from '../Object';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import { Size } from '../size';
import Tile, { Options as Options_1 } from '../Tile';
import TileCache from '../TileCache';
import { TileCoord } from '../tilecoord';
import TileGrid from '../tilegrid/TileGrid';
import TileRange from '../TileRange';
import Source, { AttributionLike } from './Source';
import State from './State';

export interface Options {
    attributions?: AttributionLike;
    attributionsCollapsible?: boolean;
    cacheSize?: number;
    opaque?: boolean;
    tilePixelRatio?: number;
    projection?: ProjectionLike;
    state?: State;
    tileGrid?: TileGrid;
    wrapX?: boolean;
    transition?: number;
    key?: string;
}
export default class TileSource extends Source {
    constructor(options: Options);
    protected tileCache: TileCache;
    protected tileGrid: TileGrid;
    protected tileOptions: Options_1;
    protected tmpSize: Size;
    protected getKey(): string;
    protected getTileCacheForProjection(projection: Projection): TileCache;
    protected setKey(key: string): void;
    canExpireCache(): boolean;
    expireCache(projection: Projection, usedTiles: { [key: string]: TileRange }): void;
    forEachLoadedTile(projection: Projection, z: number, tileRange: TileRange, callback: (p0: Tile) => boolean): boolean;
    getGutterForProjection(projection: Projection): number;
    getOpaque(projection: Projection): boolean;
    getTile(z: number, x: number, y: number, pixelRatio: number, projection: Projection): Tile;
    getTileCoordForTileUrlFunction(tileCoord: TileCoord, opt_projection?: Projection): TileCoord;
    getTileGrid(): TileGrid;
    getTileGridForProjection(projection: Projection): TileGrid;
    getTilePixelRatio(pixelRatio: number): number;
    getTilePixelSize(z: number, pixelRatio: number, projection: Projection): Size;
    useTile(z: number, x: number, y: number, projection: Projection): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export class TileSourceEvent extends Event {
    constructor();
    tile: Tile;
}
