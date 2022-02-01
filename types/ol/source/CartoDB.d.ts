import { ObjectEvent } from '../Object';
import { NearestDirectionFunction } from '../array';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { ProjectionLike } from '../proj';
import { AttributionLike } from './Source';
import { TileSourceEvent } from './Tile';
import XYZ from './XYZ';

export type TCartoDBBaseEventTypes = 'change' | 'error';
export type TCartoDBObjectEventTypes = 'propertychange';
export type TCartoDBTileSourceEventTypes = 'tileloadend' | 'tileloaderror' | 'tileloadstart';
export interface CartoDBLayerInfo {
    layergroupid: string;
    cdn_url: any;
}
export interface Options {
    attributions?: AttributionLike | undefined;
    cacheSize?: number | undefined;
    crossOrigin?: null | string | undefined;
    projection?: ProjectionLike | undefined;
    maxZoom?: number | undefined;
    minZoom?: number | undefined;
    wrapX?: boolean | undefined;
    config?: any;
    map?: string | undefined;
    account?: string | undefined;
    transition?: number | undefined;
    zDirection?: number | NearestDirectionFunction | undefined;
}
export default class CartoDB extends XYZ {
    constructor(options: Options);
    /**
     * Returns the current config.
     */
    getConfig(): any;
    /**
     * Sets the CartoDB config
     */
    setConfig(config: any): void;
    /**
     * Updates the carto db config.
     */
    updateConfig(config: any): void;
    on(type: TCartoDBBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TCartoDBBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TCartoDBBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TCartoDBBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TCartoDBBaseEventTypes | TCartoDBBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TCartoDBObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TCartoDBObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TCartoDBObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TCartoDBObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TCartoDBObjectEventTypes | TCartoDBObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
    on(type: TCartoDBTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    on(type: TCartoDBTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    once(type: TCartoDBTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    once(type: TCartoDBTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    un(
        type: TCartoDBTileSourceEventTypes | TCartoDBTileSourceEventTypes[],
        listener: ListenerFunction<TileSourceEvent>,
    ): void;
}
