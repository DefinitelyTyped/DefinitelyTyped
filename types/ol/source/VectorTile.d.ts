import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { FeatureLike } from '../Feature';
import FeatureFormat from '../format/Feature';
import { ObjectEvent } from '../Object';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import { Size } from '../size';
import { LoadFunction, UrlFunction } from '../Tile';
import TileGrid from '../tilegrid/TileGrid';
import VectorRenderTile from '../VectorRenderTile';
import VectorTile_1 from '../VectorTile';
import { AttributionLike } from './Source';
import State from './State';
import { TileSourceEvent } from './Tile';
import UrlTile from './UrlTile';

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
    zDirection?: number | undefined;
}
export default class VectorTile extends UrlTile {
    constructor(options: Options);
    protected tileClass: typeof VectorTile_1;
    /**
     * clear {@link module:ol/TileCache~TileCache} and delete all source tiles
     */
    clear(): void;
    expireCache(projection: Projection, usedTiles: { [key: string]: boolean }): void;
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
    on(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): void;
    on(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): void;
    on(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): void;
}
/**
 * Sets the loader for a tile.
 */
export function defaultLoadFunction(tile: VectorTile_1, url: string): void;
