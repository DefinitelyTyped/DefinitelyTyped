import { ObjectEvent } from '../Object';
import VectorTile from '../VectorTile';
import { NearestDirectionFunction } from '../array';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import FeatureFormat from '../format/Feature';
import { ProjectionLike } from '../proj';
import { AttributionLike } from './Source';
import { TileSourceEvent } from './Tile';
import VectorTile_1 from './VectorTile';

export type TOGCVectorTileBaseEventTypes = 'change' | 'error';
export type TOGCVectorTileObjectEventTypes = 'propertychange';
export type TOGCVectorTileTileSourceEventTypes = 'tileloadend' | 'tileloaderror' | 'tileloadstart';
export interface Options {
    url: string;
    context?: any;
    format: FeatureFormat;
    mediaType?: string | undefined;
    attributions?: AttributionLike | undefined;
    attributionsCollapsible?: boolean | undefined;
    cacheSize?: number | undefined;
    overlaps?: boolean | undefined;
    projection?: ProjectionLike | undefined;
    tileClass?: typeof VectorTile | undefined;
    transition?: number | undefined;
    wrapX?: boolean | undefined;
    zDirection?: number | NearestDirectionFunction | undefined;
}
export default class OGCVectorTile extends VectorTile_1 {
    constructor(options: Options);
    on(type: TOGCVectorTileBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TOGCVectorTileBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TOGCVectorTileBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TOGCVectorTileBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TOGCVectorTileBaseEventTypes | TOGCVectorTileBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
    on(type: TOGCVectorTileObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TOGCVectorTileObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TOGCVectorTileObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TOGCVectorTileObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TOGCVectorTileObjectEventTypes | TOGCVectorTileObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
    on(type: TOGCVectorTileTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    on(type: TOGCVectorTileTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    once(type: TOGCVectorTileTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    once(type: TOGCVectorTileTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    un(
        type: TOGCVectorTileTileSourceEventTypes | TOGCVectorTileTileSourceEventTypes[],
        listener: ListenerFunction<TileSourceEvent>,
    ): void;
}
