import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { OrderFunction } from '../render';
import RenderEvent from '../render/Event';
import CanvasVectorImageLayerRenderer from '../renderer/canvas/VectorImageLayer';
import VectorSource from '../source/Vector';
import { StyleLike } from '../style/Style';
import BaseVectorLayer from './BaseVector';

export type TVectorImageLayerBaseEventTypes = 'change' | 'error';
export type TVectorImageLayerObjectEventTypes =
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
export type TVectorImageLayerRenderEventTypes = 'postrender' | 'prerender';
export interface Options<VectorSourceType extends VectorSource = VectorSource> {
    className?: string | undefined;
    opacity?: number | undefined;
    visible?: boolean | undefined;
    extent?: Extent | undefined;
    zIndex?: number | undefined;
    minResolution?: number | undefined;
    maxResolution?: number | undefined;
    minZoom?: number | undefined;
    maxZoom?: number | undefined;
    renderOrder?: OrderFunction | undefined;
    renderBuffer?: number | undefined;
    source?: VectorSourceType | undefined;
    map?: PluggableMap | undefined;
    declutter?: boolean | undefined;
    style?: StyleLike | null | undefined;
    imageRatio?: number | undefined;
    properties?: Record<string, any> | undefined;
}
export default class VectorImageLayer<VectorSourceType extends VectorSource = VectorSource> extends BaseVectorLayer<
    VectorSourceType,
    CanvasVectorImageLayerRenderer
> {
    constructor(opt_options?: Options<VectorSourceType>);
    getImageRatio(): number;
    on(type: TVectorImageLayerBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TVectorImageLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TVectorImageLayerBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TVectorImageLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TVectorImageLayerBaseEventTypes | TVectorImageLayerBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
    on(type: TVectorImageLayerObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TVectorImageLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TVectorImageLayerObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TVectorImageLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TVectorImageLayerObjectEventTypes | TVectorImageLayerObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
    on(type: TVectorImageLayerRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    on(type: TVectorImageLayerRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    once(type: TVectorImageLayerRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    once(type: TVectorImageLayerRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    un(
        type: TVectorImageLayerRenderEventTypes | TVectorImageLayerRenderEventTypes[],
        listener: ListenerFunction<RenderEvent>,
    ): void;
}
