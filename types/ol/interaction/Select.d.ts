import Collection from '../Collection';
import { EventsKey } from '../events';
import { Condition } from '../events/condition';
import BaseEvent from '../events/Event';
import Feature, { FeatureLike } from '../Feature';
import Geometry from '../geom/Geometry';
import Layer from '../layer/Layer';
import VectorLayer from '../layer/Vector';
import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import Source from '../source/Source';
import { StyleLike } from '../style/Style';
import Interaction from './Interaction';

/**
 * A function that takes an {@link module:ol/Feature} or
 * {@link module:ol/render/Feature} and an
 * {@link module:ol/layer/Layer} and returns true if the feature may be
 * selected or false otherwise.
 */
export type FilterFunction = (p0: FeatureLike, p1: Layer<Source>) => boolean;
export interface Options {
    addCondition?: Condition;
    condition?: Condition;
    layers?: Layer<Source>[] | ((p0: Layer<Source>) => boolean);
    style?: StyleLike;
    removeCondition?: Condition;
    toggleCondition?: Condition;
    multi?: boolean;
    features?: Collection<Feature<Geometry>>;
    filter?: FilterFunction;
    hitTolerance?: number;
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
     * Returns the associated {@link module:ol/layer/Vector~Vector vectorlayer} of
     * the (last) selected feature. Note that this will not work with any
     * programmatic method like pushing features to
     * {@link module:ol/interaction/Select~Select#getFeatures collection}.
     */
    getLayer(feature: FeatureLike): VectorLayer;
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
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:active', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
    on(type: 'select', listener: (evt: SelectEvent) => void): EventsKey;
    once(type: 'select', listener: (evt: SelectEvent) => void): EventsKey;
    un(type: 'select', listener: (evt: SelectEvent) => void): void;
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
