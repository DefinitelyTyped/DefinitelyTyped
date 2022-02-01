import { ObjectEvent } from '../Object';
import { NearestDirectionFunction } from '../array';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { ProjectionLike } from '../proj';
import TileGrid from '../tilegrid/TileGrid';
import { TileSourceEvent } from './Tile';
import XYZ from './XYZ';

export type TTileDebugBaseEventTypes = 'change' | 'error';
export type TTileDebugObjectEventTypes = 'propertychange';
export type TTileDebugTileSourceEventTypes = 'tileloadend' | 'tileloaderror' | 'tileloadstart';
export interface Options {
    projection?: ProjectionLike | undefined;
    tileGrid?: TileGrid | undefined;
    wrapX?: boolean | undefined;
    zDirection?: number | NearestDirectionFunction | undefined;
    template?: string | undefined;
}
export default class TileDebug extends XYZ {
    constructor(opt_options?: Options);
    on(type: TTileDebugBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TTileDebugBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TTileDebugBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TTileDebugBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TTileDebugBaseEventTypes | TTileDebugBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TTileDebugObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TTileDebugObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TTileDebugObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TTileDebugObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TTileDebugObjectEventTypes | TTileDebugObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
    on(type: TTileDebugTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    on(type: TTileDebugTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    once(type: TTileDebugTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    once(type: TTileDebugTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    un(
        type: TTileDebugTileSourceEventTypes | TTileDebugTileSourceEventTypes[],
        listener: ListenerFunction<TileSourceEvent>,
    ): void;
}
