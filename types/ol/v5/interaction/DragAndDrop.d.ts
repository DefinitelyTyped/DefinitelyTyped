import { EventsKey } from '../events';
import Event from '../events/Event';
import Feature, { FeatureLike } from '../Feature';
import FeatureFormat from '../format/Feature';
import { ObjectEvent } from '../Object';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import VectorSource from '../source/Vector';
import Interaction from './Interaction';

export interface Options {
    formatConstructors?: FeatureFormat[];
    source?: VectorSource;
    projection?: ProjectionLike;
    target?: HTMLElement;
}
export enum DragAndDropEventType {
    ADD_FEATURES = 'addfeatures',
}
export default class DragAndDrop extends Interaction {
    constructor(opt_options?: Options);
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'addfeatures', listener: (evt: DragAndDropEvent) => void): EventsKey;
    once(type: 'addfeatures', listener: (evt: DragAndDropEvent) => void): EventsKey;
    un(type: 'addfeatures', listener: (evt: DragAndDropEvent) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:active', listener: (evt: ObjectEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export class DragAndDropEvent extends Event {
    constructor(type: DragAndDropEventType, file: File, opt_features?: Feature[], opt_projection?: Projection);
    features: FeatureLike[];
    file: File;
    projection: Projection;
}
