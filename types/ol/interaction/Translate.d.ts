import Collection from '../Collection';
import Feature, { FeatureLike } from '../Feature';
import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import { Coordinate } from '../coordinate';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Condition } from '../events/condition';
import Geometry from '../geom/Geometry';
import Layer from '../layer/Layer';
import LayerRenderer from '../renderer/Layer';
import Source from '../source/Source';
import PointerInteraction from './Pointer';

export type TTranslateBaseEventTypes = 'change' | 'error';
export type TTranslateObjectEventTypes = 'change:active' | 'propertychange';
export type TTranslateTranslateEventTypes = 'translateend' | 'translatestart' | 'translating';
/**
 * A function that takes an {@link module:ol/Feature} or
 * {@link module:ol/render/Feature} and an
 * {@link module:ol/layer/Layer} and returns true if the feature may be
 * translated or false otherwise.
 */
export type FilterFunction = (p0: FeatureLike, p1: Layer<Source>) => boolean;
export interface Options {
    condition?: Condition | undefined;
    features?: Collection<Feature<Geometry>> | undefined;
    layers?: Layer<Source, LayerRenderer>[] | ((p0: Layer<Source>) => boolean) | undefined;
    filter?: FilterFunction | undefined;
    hitTolerance?: number | undefined;
}
declare enum TranslateEventType {
    TRANSLATESTART = 'translatestart',
    TRANSLATING = 'translating',
    TRANSLATEEND = 'translateend',
}
export default class Translate extends PointerInteraction {
    constructor(opt_options?: Options);
    /**
     * Returns the Hit-detection tolerance.
     */
    getHitTolerance(): number;
    /**
     * Handle pointer down events.
     */
    handleDownEvent(event: MapBrowserEvent<UIEvent>): boolean;
    /**
     * Handle pointer drag events.
     */
    handleDragEvent(event: MapBrowserEvent<UIEvent>): void;
    /**
     * Handle pointer move events.
     */
    handleMoveEvent(event: MapBrowserEvent<UIEvent>): void;
    /**
     * Handle pointer up events.
     */
    handleUpEvent(event: MapBrowserEvent<UIEvent>): boolean;
    /**
     * Hit-detection tolerance. Pixels inside the radius around the given position
     * will be checked for features.
     */
    setHitTolerance(hitTolerance: number): void;
    /**
     * Remove the interaction from its current map and attach it to the new map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     */
    setMap(map: PluggableMap): void;
    on(type: TTranslateBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TTranslateBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TTranslateBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TTranslateBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TTranslateBaseEventTypes | TTranslateBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TTranslateObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TTranslateObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TTranslateObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TTranslateObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TTranslateObjectEventTypes | TTranslateObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
    on(type: TTranslateTranslateEventTypes, listener: ListenerFunction<TranslateEvent>): EventsKey;
    on(type: TTranslateTranslateEventTypes[], listener: ListenerFunction<TranslateEvent>): EventsKey[];
    once(type: TTranslateTranslateEventTypes, listener: ListenerFunction<TranslateEvent>): EventsKey;
    once(type: TTranslateTranslateEventTypes[], listener: ListenerFunction<TranslateEvent>): EventsKey[];
    un(
        type: TTranslateTranslateEventTypes | TTranslateTranslateEventTypes[],
        listener: ListenerFunction<TranslateEvent>,
    ): void;
}
export class TranslateEvent extends BaseEvent {
    constructor(
        type: TranslateEventType,
        features: Collection<Feature<Geometry>>,
        coordinate: Coordinate,
        startCoordinate: Coordinate,
        mapBrowserEvent: MapBrowserEvent<UIEvent>,
    );
    /**
     * The features being translated.
     */
    features: Collection<Feature<Geometry>>;
    /**
     * Associated {@link module:ol/MapBrowserEvent}.
     */
    mapBrowserEvent: MapBrowserEvent<UIEvent>;
    /**
     * The coordinate of the drag event.
     */
    coordinate: Coordinate;
    /**
     * The coordinate of the start position before translation started.
     */
    startCoordinate: Coordinate;
}
