import Feature, { FeatureLike } from '../Feature';
import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import FeatureFormat from '../format/Feature';
import Geometry from '../geom/Geometry';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import VectorSource from '../source/Vector';
import Interaction from './Interaction';

export type TDragAndDropDragAndDropEventTypes = 'addfeatures';
export type TDragAndDropBaseEventTypes = 'change' | 'error';
export type TDragAndDropObjectEventTypes = 'change:active' | 'propertychange';
export interface Options {
    formatConstructors?: (typeof FeatureFormat | FeatureFormat)[] | undefined;
    source?: VectorSource<Geometry> | undefined;
    projection?: ProjectionLike | undefined;
    target?: HTMLElement | undefined;
}
declare enum DragAndDropEventType {
    ADD_FEATURES = 'addfeatures',
}
export default class DragAndDrop extends Interaction {
    constructor(opt_options?: Options);
    handleDrop(event: DragEvent): void;
    handleStop(event: DragEvent): void;
    /**
     * Activate or deactivate the interaction.
     */
    setActive(active: boolean): void;
    /**
     * Remove the interaction from its current map and attach it to the new map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     */
    setMap(map: PluggableMap): void;
    on(type: TDragAndDropDragAndDropEventTypes, listener: ListenerFunction<DragAndDropEvent>): EventsKey;
    on(type: TDragAndDropDragAndDropEventTypes[], listener: ListenerFunction<DragAndDropEvent>): EventsKey[];
    once(type: TDragAndDropDragAndDropEventTypes, listener: ListenerFunction<DragAndDropEvent>): EventsKey;
    once(type: TDragAndDropDragAndDropEventTypes[], listener: ListenerFunction<DragAndDropEvent>): EventsKey[];
    un(
        type: TDragAndDropDragAndDropEventTypes | TDragAndDropDragAndDropEventTypes[],
        listener: ListenerFunction<DragAndDropEvent>,
    ): void;
    on(type: TDragAndDropBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TDragAndDropBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TDragAndDropBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TDragAndDropBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TDragAndDropBaseEventTypes | TDragAndDropBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TDragAndDropObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TDragAndDropObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TDragAndDropObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TDragAndDropObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TDragAndDropObjectEventTypes | TDragAndDropObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
export class DragAndDropEvent extends BaseEvent {
    constructor(
        type: DragAndDropEventType,
        file: File,
        opt_features?: Feature<Geometry>[],
        opt_projection?: Projection,
    );
    /**
     * The features parsed from dropped data.
     */
    features: FeatureLike[];
    /**
     * The dropped file.
     */
    file: File;
    /**
     * The feature projection.
     */
    projection: Projection;
}
