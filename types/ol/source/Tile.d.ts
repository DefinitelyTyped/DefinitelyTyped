import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
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
    zDirection?: number;
}
export default abstract class TileSource extends Source {
    constructor(options: Options);
    protected tileCache: TileCache;
    protected tileGrid: TileGrid;
    protected tileOptions: Options_1;
    protected tmpSize: Size;
    /**
     * Return the key to be used for all tiles in the source.
     */
    protected getKey(): string;
    protected getTileCacheForProjection(projection: Projection): TileCache;
    /**
     * Set the value to be used as the key for all tiles in the source.
     */
    protected setKey(key: string): void;
    canExpireCache(): boolean;
    /**
     * Remove all cached tiles from the source. The next render cycle will fetch new tiles.
     */
    clear(): void;
    expireCache(projection: Projection, usedTiles: { [key: string]: boolean }): void;
    forEachLoadedTile(
        projection: Projection,
        z: number,
        tileRange: TileRange,
        callback: (p0: Tile) => boolean,
    ): boolean;
    getGutterForProjection(projection: Projection): number;
    getOpaque(projection: Projection): boolean;
    getResolutions(): number[];
    abstract getTile(z: number, x: number, y: number, pixelRatio: number, projection: Projection): Tile;
    /**
     * Returns a tile coordinate wrapped around the x-axis. When the tile coordinate
     * is outside the resolution and extent range of the tile grid, null will be
     * returned.
     */
    getTileCoordForTileUrlFunction(tileCoord: TileCoord, opt_projection?: Projection): TileCoord;
    /**
     * Return the tile grid of the tile source.
     */
    getTileGrid(): TileGrid;
    getTileGridForProjection(projection: Projection): TileGrid;
    /**
     * Get the tile pixel ratio for this source. Subclasses may override this
     * method, which is meant to return a supported pixel ratio that matches the
     * provided pixelRatio as close as possible.
     */
    getTilePixelRatio(pixelRatio: number): number;
    getTilePixelSize(z: number, pixelRatio: number, projection: Projection): Size;
    /**
     * Increases the cache size if needed
     */
    updateCacheSize(tileCount: number, projection: Projection): void;
    /**
     * Marks a tile coord as being used, without triggering a load.
     */
    abstract useTile(z: number, x: number, y: number, projection: Projection): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export class TileSourceEvent extends BaseEvent {
    constructor(type: string, tile: Tile);
    /**
     * The tile related to the event.
     */
    tile: Tile;
}
