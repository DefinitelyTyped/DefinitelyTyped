import Collection from '../Collection';
import Feature, { FeatureLike } from '../Feature';
import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Condition } from '../events/condition';
import Geometry from '../geom/Geometry';
import Layer from '../layer/Layer';
import VectorLayer from '../layer/Vector';
import LayerRenderer from '../renderer/Layer';
import Source from '../source/Source';
import VectorSource from '../source/Vector';
import { StyleLike } from '../style/Style';
import Interaction from './Interaction';

export type TSelectBaseEventTypes = 'change' | 'error';
export type TSelectObjectEventTypes = 'change:active' | 'propertychange';
export type TSelectSelectEventTypes = 'select';
/**
 * A function that takes an {@link module:ol/Feature} or
 * {@link module:ol/render/Feature} and an
 * {@link module:ol/layer/Layer} and returns true if the feature may be
 * selected or false otherwise.
 */
export type FilterFunction = (p0: FeatureLike, p1: Layer<Source>) => boolean;
export interface Options {
    addCondition?: Condition | undefined;
    condition?: Condition | undefined;
    layers?: Layer<Source, LayerRenderer>[] | ((p0: Layer<Source>) => boolean) | undefined;
    style?: StyleLike | null | undefined;
    removeCondition?: Condition | undefined;
    toggleCondition?: Condition | undefined;
    multi?: boolean | undefined;
    features?: Collection<Feature<Geometry>> | undefined;
    filter?: FilterFunction | undefined;
    hitTolerance?: number | undefined;
}
declare enum SelectEventType {
    SELECT = 'select',
}
export default class Select extends Interaction {
    constructor(opt_options?: Options);
    /**
     * Get the selected features.
     */
    getFeatures(): Collection<Feature<Geometry>>;
    /**
     * Returns the Hit-detection tolerance.
     */
    getHitTolerance(): number;
    /**
     * Returns the associated {@link module:ol/layer/Vector~Vector vector layer} of
     * a selected feature.
     */
    getLayer(feature: FeatureLike): VectorLayer<VectorSource<Geometry>>;
    getStyle(): StyleLike | null;
    /**
     * Handles the {@link module:ol/MapBrowserEvent map browser event} and may change the
     * selected state of features.
     */
    handleEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): boolean;
    /**
     * Hit-detection tolerance. Pixels inside the radius around the given position
     * will be checked for features.
     */
    setHitTolerance(hitTolerance: number): void;
    /**
     * Remove the interaction from its current map, if any,  and attach it to a new
     * map, if any. Pass null to just remove the interaction from the current map.
     */
    setMap(map: PluggableMap): void;
    on(type: TSelectBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TSelectBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TSelectBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TSelectBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TSelectBaseEventTypes | TSelectBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TSelectObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TSelectObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TSelectObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TSelectObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TSelectObjectEventTypes | TSelectObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
    on(type: TSelectSelectEventTypes, listener: ListenerFunction<SelectEvent>): EventsKey;
    on(type: TSelectSelectEventTypes[], listener: ListenerFunction<SelectEvent>): EventsKey[];
    once(type: TSelectSelectEventTypes, listener: ListenerFunction<SelectEvent>): EventsKey;
    once(type: TSelectSelectEventTypes[], listener: ListenerFunction<SelectEvent>): EventsKey[];
    un(type: TSelectSelectEventTypes | TSelectSelectEventTypes[], listener: ListenerFunction<SelectEvent>): void;
}
export class SelectEvent extends BaseEvent {
    constructor(
        type: SelectEventType,
        selected: Feature<Geometry>[],
        deselected: Feature<Geometry>[],
        mapBrowserEvent: MapBrowserEvent<UIEvent>,
    );
    /**
     * Deselected features array.
     */
    deselected: Feature<Geometry>[];
    /**
     * Associated {@link module:ol/MapBrowserEvent}.
     */
    mapBrowserEvent: MapBrowserEvent<UIEvent>;
    /**
     * Selected features array.
     */
    selected: Feature<Geometry>[];
}
