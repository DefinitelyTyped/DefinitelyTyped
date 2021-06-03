import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import Feature, { FeatureLike } from '../Feature';
import FeatureFormat from '../format/Feature';
import Geometry from '../geom/Geometry';
import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import VectorSource from '../source/Vector';
import Interaction from './Interaction';

export interface Options {
    formatConstructors?: (FeatureFormat | FeatureFormat)[];
    source?: VectorSource<Geometry>;
    projection?: ProjectionLike;
    target?: HTMLElement;
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
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'addfeatures', listener: (evt: DragAndDropEvent) => void): EventsKey;
    once(type: 'addfeatures', listener: (evt: DragAndDropEvent) => void): EventsKey;
    un(type: 'addfeatures', listener: (evt: DragAndDropEvent) => void): void;
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
