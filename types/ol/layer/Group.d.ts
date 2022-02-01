import Collection from '../Collection';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import LayerRenderer from '../renderer/Layer';
import Source from '../source/Source';
import State_1 from '../source/State';
import BaseLayer from './Base';
import Layer, { State } from './Layer';

export type TLayerGroupBaseEventTypes = 'change' | 'error';
export type TLayerGroupObjectEventTypes =
    | 'change:extent'
    | 'change:layers'
    | 'change:maxResolution'
    | 'change:maxZoom'
    | 'change:minResolution'
    | 'change:minZoom'
    | 'change:opacity'
    | 'change:visible'
    | 'change:zIndex'
    | 'propertychange';
export type EventType = 'addlayer' | 'removelayer';
export interface Options {
    opacity?: number | undefined;
    visible?: boolean | undefined;
    extent?: Extent | undefined;
    zIndex?: number | undefined;
    minResolution?: number | undefined;
    maxResolution?: number | undefined;
    minZoom?: number | undefined;
    maxZoom?: number | undefined;
    layers?: BaseLayer[] | Collection<BaseLayer> | undefined;
    properties?: Record<string, any> | undefined;
}
export class GroupEvent extends BaseEvent {
    constructor(type: EventType, layer: BaseLayer);
    /**
     * The added or removed layer.
     */
    layer: BaseLayer;
}
export default class LayerGroup extends BaseLayer {
    constructor(opt_options?: Options);
    /**
     * Returns the {@link module:ol/Collection collection} of {@link module:ol/layer/Layer~Layer layers}
     * in this group.
     */
    getLayers(): Collection<BaseLayer>;
    getLayersArray(opt_array?: Layer<Source, LayerRenderer>[]): Layer<Source, LayerRenderer>[];
    /**
     * Get the layer states list and use this groups z-index as the default
     * for all layers in this and nested groups, if it is unset at this point.
     * If opt_states is not provided and this group's z-index is undefined
     * 0 is used a the default z-index.
     */
    getLayerStatesArray(opt_states?: State[]): State[];
    getSourceState(): State_1;
    handleLayerGroupAdd_(event: GroupEvent): void;
    handleLayerGroupRemove_(event: GroupEvent): void;
    registerLayerListeners_(layer: BaseLayer): void;
    /**
     * Set the {@link module:ol/Collection collection} of {@link module:ol/layer/Layer~Layer layers}
     * in this group.
     */
    setLayers(layers: Collection<BaseLayer>): void;
    on(type: TLayerGroupBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TLayerGroupBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TLayerGroupBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TLayerGroupBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TLayerGroupBaseEventTypes | TLayerGroupBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TLayerGroupObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TLayerGroupObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TLayerGroupObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TLayerGroupObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TLayerGroupObjectEventTypes | TLayerGroupObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
