import { ObjectEvent } from '../Object';
import { LoadFunction } from '../Tile';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { ProjectionLike } from '../proj';
import { AttributionLike } from './Source';
import { TileSourceEvent } from './Tile';
import TileImage from './TileImage';

export type TOGCMapTileBaseEventTypes = 'change' | 'error';
export type TOGCMapTileObjectEventTypes = 'propertychange';
export type TOGCMapTileTileSourceEventTypes = 'tileloadend' | 'tileloaderror' | 'tileloadstart';
export interface Options {
    url: string;
    context?: any;
    mediaType?: string | undefined;
    projection?: ProjectionLike | undefined;
    attributions?: AttributionLike | undefined;
    cacheSize?: number | undefined;
    crossOrigin?: null | string | undefined;
    imageSmoothing?: boolean | undefined;
    interpolate?: boolean | undefined;
    reprojectionErrorThreshold?: number | undefined;
    tileLoadFunction?: LoadFunction | undefined;
    wrapX?: boolean | undefined;
    transition?: number | undefined;
}
export default class OGCMapTile extends TileImage {
    constructor(options: Options);
    on(type: TOGCMapTileBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TOGCMapTileBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TOGCMapTileBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TOGCMapTileBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TOGCMapTileBaseEventTypes | TOGCMapTileBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TOGCMapTileObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TOGCMapTileObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TOGCMapTileObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TOGCMapTileObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TOGCMapTileObjectEventTypes | TOGCMapTileObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
    on(type: TOGCMapTileTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    on(type: TOGCMapTileTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    once(type: TOGCMapTileTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    once(type: TOGCMapTileTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    un(
        type: TOGCMapTileTileSourceEventTypes | TOGCMapTileTileSourceEventTypes[],
        listener: ListenerFunction<TileSourceEvent>,
    ): void;
}
