import { ObjectEvent } from '../Object';
import Tile, { Options as Options_1 } from '../Tile';
import TileCache from '../TileCache';
import TileRange from '../TileRange';
import { NearestDirectionFunction } from '../array';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import { Size } from '../size';
import { TileCoord } from '../tilecoord';
import TileGrid from '../tilegrid/TileGrid';
import Source, { AttributionLike } from './Source';
import State from './State';

export type TTileSourceBaseEventTypes = 'change' | 'error';
export type TTileSourceObjectEventTypes = 'propertychange';
export interface Options {
    attributions?: AttributionLike | undefined;
    attributionsCollapsible?: boolean | undefined;
    cacheSize?: number | undefined;
    opaque?: boolean | undefined;
    tilePixelRatio?: number | undefined;
    projection?: ProjectionLike | undefined;
    state?: State | undefined;
    tileGrid?: TileGrid | undefined;
    wrapX?: boolean | undefined;
    transition?: number | undefined;
    key?: string | undefined;
    zDirection?: number | NearestDirectionFunction | undefined;
    interpolate?: boolean | undefined;
}
export default abstract class TileSource extends Source {
    constructor(options: Options);
    protected tileCache: TileCache;
    protected tileOptions: Options_1;
    protected tmpSize: Size;
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
    expireCache(projection: Projection, usedTiles: Record<string, boolean>): void;
    forEachLoadedTile(
        projection: Projection,
        z: number,
        tileRange: TileRange,
        callback: (p0: Tile) => boolean | void,
    ): boolean;
    getGutterForProjection(projection: Projection): number;
    /**
     * Return the key to be used for all tiles in the source.
     */
    getKey(): string;
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
    on(type: TTileSourceBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TTileSourceBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TTileSourceBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TTileSourceBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TTileSourceBaseEventTypes | TTileSourceBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TTileSourceObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TTileSourceObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TTileSourceObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TTileSourceObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TTileSourceObjectEventTypes | TTileSourceObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
export class TileSourceEvent extends BaseEvent {
    constructor(type: string, tile: Tile);
    /**
     * The tile related to the event.
     */
    tile: Tile;
}
