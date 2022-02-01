import { FeatureLike } from '../Feature';
import { ObjectEvent } from '../Object';
import { LoadFunction, UrlFunction } from '../Tile';
import VectorRenderTile from '../VectorRenderTile';
import VectorTile_1 from '../VectorTile';
import { NearestDirectionFunction } from '../array';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import FeatureFormat from '../format/Feature';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import { Size } from '../size';
import TileGrid from '../tilegrid/TileGrid';
import { AttributionLike } from './Source';
import State from './State';
import { TileSourceEvent } from './Tile';
import UrlTile from './UrlTile';

export type TVectorTileBaseEventTypes = 'change' | 'error';
export type TVectorTileObjectEventTypes = 'propertychange';
export type TVectorTileTileSourceEventTypes = 'tileloadend' | 'tileloaderror' | 'tileloadstart';
export interface Options {
    attributions?: AttributionLike | undefined;
    attributionsCollapsible?: boolean | undefined;
    cacheSize?: number | undefined;
    extent?: Extent | undefined;
    format?: FeatureFormat | undefined;
    overlaps?: boolean | undefined;
    projection?: ProjectionLike | undefined;
    state?: State | undefined;
    tileClass?: typeof VectorTile_1 | undefined;
    maxZoom?: number | undefined;
    minZoom?: number | undefined;
    tileSize?: number | Size | undefined;
    maxResolution?: number | undefined;
    tileGrid?: TileGrid | undefined;
    tileLoadFunction?: LoadFunction | undefined;
    tileUrlFunction?: UrlFunction | undefined;
    url?: string | undefined;
    transition?: number | undefined;
    urls?: string[] | undefined;
    wrapX?: boolean | undefined;
    zDirection?: number | NearestDirectionFunction | undefined;
}
export default class VectorTile extends UrlTile {
    constructor(options: Options);
    protected tileClass: typeof VectorTile_1;
    /**
     * clear {@link module:ol/TileCache~TileCache} and delete all source tiles
     */
    clear(): void;
    expireCache(projection: Projection, usedTiles: Record<string, boolean>): void;
    /**
     * Get features whose bounding box intersects the provided extent. Only features for cached
     * tiles for the last rendered zoom level are available in the source. So this method is only
     * suitable for requesting tiles for extents that are currently rendered.
     * Features are returned in random tile order and as they are included in the tiles. This means
     * they can be clipped, duplicated across tiles, and simplified to the render resolution.
     */
    getFeaturesInExtent(extent: Extent): FeatureLike[];
    getOverlaps(): boolean;
    getSourceTiles(pixelRatio: number, projection: Projection, tile: VectorRenderTile): VectorTile_1[];
    getTile(z: number, x: number, y: number, pixelRatio: number, projection: Projection): VectorRenderTile;
    getTileGridForProjection(projection: Projection): TileGrid;
    /**
     * Get the tile pixel ratio for this source.
     */
    getTilePixelRatio(pixelRatio: number): number;
    getTilePixelSize(z: number, pixelRatio: number, projection: Projection): Size;
    /**
     * Increases the cache size if needed
     */
    updateCacheSize(tileCount: number, projection: Projection): void;
    on(type: TVectorTileBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TVectorTileBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TVectorTileBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TVectorTileBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TVectorTileBaseEventTypes | TVectorTileBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TVectorTileObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TVectorTileObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TVectorTileObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TVectorTileObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TVectorTileObjectEventTypes | TVectorTileObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
    on(type: TVectorTileTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    on(type: TVectorTileTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    once(type: TVectorTileTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    once(type: TVectorTileTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    un(
        type: TVectorTileTileSourceEventTypes | TVectorTileTileSourceEventTypes[],
        listener: ListenerFunction<TileSourceEvent>,
    ): void;
}
/**
 * Sets the loader for a tile.
 */
export function defaultLoadFunction(tile: VectorTile_1, url: string): void;
