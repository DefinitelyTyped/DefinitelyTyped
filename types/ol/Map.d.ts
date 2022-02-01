import MapBrowserEvent from './MapBrowserEvent';
import MapEvent from './MapEvent';
import { ObjectEvent } from './Object';
import PluggableMap, { MapOptions } from './PluggableMap';
import { EventsKey, ListenerFunction } from './events';
import BaseEvent from './events/Event';
import RenderEvent from './render/Event';
import MapRenderer from './renderer/Map';

export type TMapBaseEventTypes = 'change' | 'error';
export type TMapObjectEventTypes =
    | 'change:layerGroup'
    | 'change:size'
    | 'change:target'
    | 'change:view'
    | 'propertychange';
export type TMapMapBrowserEventTypes = 'click' | 'dblclick' | 'pointerdrag' | 'pointermove' | 'singleclick';
export type TMapMapEventTypes = 'moveend' | 'movestart' | 'postrender';
export type TMapRenderEventTypes = 'postcompose' | 'precompose' | 'rendercomplete';
export default class Map extends PluggableMap {
    constructor(options: MapOptions);
    createRenderer(): MapRenderer;
    on(type: TMapBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TMapBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TMapBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TMapBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TMapBaseEventTypes | TMapBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TMapObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TMapObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TMapObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TMapObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TMapObjectEventTypes | TMapObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
    on(type: TMapMapBrowserEventTypes, listener: ListenerFunction<MapBrowserEvent<UIEvent>>): EventsKey;
    on(type: TMapMapBrowserEventTypes[], listener: ListenerFunction<MapBrowserEvent<UIEvent>>): EventsKey[];
    once(type: TMapMapBrowserEventTypes, listener: ListenerFunction<MapBrowserEvent<UIEvent>>): EventsKey;
    once(type: TMapMapBrowserEventTypes[], listener: ListenerFunction<MapBrowserEvent<UIEvent>>): EventsKey[];
    un(
        type: TMapMapBrowserEventTypes | TMapMapBrowserEventTypes[],
        listener: ListenerFunction<MapBrowserEvent<UIEvent>>,
    ): void;
    on(type: TMapMapEventTypes, listener: ListenerFunction<MapEvent>): EventsKey;
    on(type: TMapMapEventTypes[], listener: ListenerFunction<MapEvent>): EventsKey[];
    once(type: TMapMapEventTypes, listener: ListenerFunction<MapEvent>): EventsKey;
    once(type: TMapMapEventTypes[], listener: ListenerFunction<MapEvent>): EventsKey[];
    un(type: TMapMapEventTypes | TMapMapEventTypes[], listener: ListenerFunction<MapEvent>): void;
    on(type: TMapRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    on(type: TMapRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    once(type: TMapRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    once(type: TMapRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    un(type: TMapRenderEventTypes | TMapRenderEventTypes[], listener: ListenerFunction<RenderEvent>): void;
}
