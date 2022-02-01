import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import RenderEvent from '../render/Event';
import CanvasVectorLayerRenderer from '../renderer/canvas/VectorLayer';
import VectorSource from '../source/Vector';
import BaseVectorLayer, { Options } from './BaseVector';

export type TVectorLayerBaseEventTypes = 'change' | 'error';
export type TVectorLayerObjectEventTypes =
    | 'change:extent'
    | 'change:maxResolution'
    | 'change:maxZoom'
    | 'change:minResolution'
    | 'change:minZoom'
    | 'change:opacity'
    | 'change:source'
    | 'change:visible'
    | 'change:zIndex'
    | 'propertychange';
export type TVectorLayerRenderEventTypes = 'postrender' | 'prerender';
export default class VectorLayer<VectorSourceType extends VectorSource = VectorSource> extends BaseVectorLayer<
    VectorSourceType,
    CanvasVectorLayerRenderer
> {
    constructor(opt_options?: Options<VectorSourceType>);
    on(type: TVectorLayerBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TVectorLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TVectorLayerBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TVectorLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TVectorLayerBaseEventTypes | TVectorLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TVectorLayerObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TVectorLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TVectorLayerObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TVectorLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TVectorLayerObjectEventTypes | TVectorLayerObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
    on(type: TVectorLayerRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    on(type: TVectorLayerRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    once(type: TVectorLayerRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    once(type: TVectorLayerRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    un(
        type: TVectorLayerRenderEventTypes | TVectorLayerRenderEventTypes[],
        listener: ListenerFunction<RenderEvent>,
    ): void;
}
