import ImageTile from '../ImageTile';
import { ObjectEvent } from '../Object';
import { LoadFunction, UrlFunction } from '../Tile';
import TileCache from '../TileCache';
import { NearestDirectionFunction } from '../array';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import ReprojTile from '../reproj/Tile';
import TileGrid from '../tilegrid/TileGrid';
import { AttributionLike } from './Source';
import State from './State';
import { TileSourceEvent } from './Tile';
import UrlTile from './UrlTile';

export type TTileImageBaseEventTypes = 'change' | 'error';
export type TTileImageObjectEventTypes = 'propertychange';
export type TTileImageTileSourceEventTypes = 'tileloadend' | 'tileloaderror' | 'tileloadstart';
export interface Options {
    attributions?: AttributionLike | undefined;
    attributionsCollapsible?: boolean | undefined;
    cacheSize?: number | undefined;
    crossOrigin?: null | string | undefined;
    imageSmoothing?: boolean | undefined;
    interpolate?: boolean | undefined;
    opaque?: boolean | undefined;
    projection?: ProjectionLike | undefined;
    reprojectionErrorThreshold?: number | undefined;
    state?: State | undefined;
    tileClass?: typeof ImageTile | undefined;
    tileGrid?: TileGrid | undefined;
    tileLoadFunction?: LoadFunction | undefined;
    tilePixelRatio?: number | undefined;
    tileUrlFunction?: UrlFunction | undefined;
    url?: string | undefined;
    urls?: string[] | undefined;
    wrapX?: boolean | undefined;
    transition?: number | undefined;
    key?: string | undefined;
    zDirection?: number | NearestDirectionFunction | undefined;
}
export default class TileImage extends UrlTile {
    constructor(options: Options);
    protected crossOrigin: string;
    protected tileCacheForProjection: Record<string, TileCache>;
    protected tileClass: typeof ImageTile;
    protected tileGridForProjection: Record<string, TileGrid>;
    protected getTileInternal(
        z: number,
        x: number,
        y: number,
        pixelRatio: number,
        projection: Projection,
    ): ImageTile | ReprojTile;
    canExpireCache(): boolean;
    expireCache(projection: Projection, usedTiles: Record<string, boolean>): void;
    getGutter(): number;
    getGutterForProjection(projection: Projection): number;
    /**
     * Return the key to be used for all tiles in the source.
     */
    getKey(): string;
    getOpaque(projection: Projection): boolean;
    getTile(z: number, x: number, y: number, pixelRatio: number, projection: Projection): ImageTile | ReprojTile;
    getTileCacheForProjection(projection: Projection): TileCache;
    getTileGridForProjection(projection: Projection): TileGrid;
    /**
     * Sets whether to render reprojection edges or not (usually for debugging).
     */
    setRenderReprojectionEdges(render: boolean): void;
    /**
     * Sets the tile grid to use when reprojecting the tiles to the given
     * projection instead of the default tile grid for the projection.
     * This can be useful when the default tile grid cannot be created
     * (e.g. projection has no extent defined) or
     * for optimization reasons (custom tile size, resolutions, ...).
     */
    setTileGridForProjection(projection: ProjectionLike, tilegrid: TileGrid): void;
    on(type: TTileImageBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TTileImageBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TTileImageBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TTileImageBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TTileImageBaseEventTypes | TTileImageBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TTileImageObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TTileImageObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TTileImageObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TTileImageObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TTileImageObjectEventTypes | TTileImageObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
    on(type: TTileImageTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    on(type: TTileImageTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    once(type: TTileImageTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    once(type: TTileImageTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    un(
        type: TTileImageTileSourceEventTypes | TTileImageTileSourceEventTypes[],
        listener: ListenerFunction<TileSourceEvent>,
    ): void;
}
