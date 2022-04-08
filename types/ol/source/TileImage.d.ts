import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import ImageTile from '../ImageTile';
import { ObjectEvent } from '../Object';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import Tile, { LoadFunction, UrlFunction } from '../Tile';
import TileCache from '../TileCache';
import TileGrid from '../tilegrid/TileGrid';
import { AttributionLike } from './Source';
import State from './State';
import { TileSourceEvent } from './Tile';
import UrlTile from './UrlTile';

export interface Options {
    attributions?: AttributionLike;
    attributionsCollapsible?: boolean;
    cacheSize?: number;
    crossOrigin?: string;
    imageSmoothing?: boolean;
    opaque?: boolean;
    projection?: ProjectionLike;
    reprojectionErrorThreshold?: number;
    state?: State;
    tileClass?: ImageTile;
    tileGrid?: TileGrid;
    tileLoadFunction?: LoadFunction;
    tilePixelRatio?: number;
    tileUrlFunction?: UrlFunction;
    url?: string;
    urls?: string[];
    wrapX?: boolean;
    transition?: number;
    key?: string;
    zDirection?: number;
}
export default class TileImage extends UrlTile {
    constructor(options: Options);
    protected crossOrigin: string;
    protected tileCacheForProjection: { [key: string]: TileCache };
    protected tileClass: ImageTile;
    protected tileGridForProjection: { [key: string]: TileGrid };
    /**
     * Return the key to be used for all tiles in the source.
     */
    protected getKey(): string;
    protected getTileInternal(z: number, x: number, y: number, pixelRatio: number, projection: Projection): Tile;
    canExpireCache(): boolean;
    expireCache(projection: Projection, usedTiles: { [key: string]: boolean }): void;
    getContextOptions(): object | undefined;
    getGutter(): number;
    getGutterForProjection(projection: Projection): number;
    getOpaque(projection: Projection): boolean;
    getTile(z: number, x: number, y: number, pixelRatio: number, projection: Projection): Tile;
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
