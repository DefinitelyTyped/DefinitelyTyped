import Collection from '../Collection';
import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import Feature, { FeatureLike } from '../Feature';
import Geometry from '../geom/Geometry';
import Layer from '../layer/Layer';
import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import Source from '../source/Source';
import PointerInteraction from './Pointer';

/**
 * A function that takes an {@link module:ol/Feature} or
 * {@link module:ol/render/Feature} and an
 * {@link module:ol/layer/Layer} and returns true if the feature may be
 * translated or false otherwise.
 */
export type FilterFunction = (p0: FeatureLike, p1: Layer<Source>) => boolean;
export interface Options {
    features?: Collection<Feature<Geometry>>;
    layers?: Layer<Source>[] | ((p0: Layer<Source>) => boolean);
    filter?: FilterFunction;
    hitTolerance?: number;
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
    on(type: 'translateend', listener: (evt: TranslateEvent) => void): EventsKey;
    once(type: 'translateend', listener: (evt: TranslateEvent) => void): EventsKey;
    un(type: 'translateend', listener: (evt: TranslateEvent) => void): void;
    on(type: 'translatestart', listener: (evt: TranslateEvent) => void): EventsKey;
    once(type: 'translatestart', listener: (evt: TranslateEvent) => void): EventsKey;
    un(type: 'translatestart', listener: (evt: TranslateEvent) => void): void;
    on(type: 'translating', listener: (evt: TranslateEvent) => void): EventsKey;
    once(type: 'translating', listener: (evt: TranslateEvent) => void): EventsKey;
    un(type: 'translating', listener: (evt: TranslateEvent) => void): void;
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
