import Collection from '../Collection';
import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import Event from '../events/Event';
import Feature from '../Feature';
import Layer from '../layer/Layer';
import { ObjectEvent } from '../Object';
import PointerInteraction from './Pointer';

export interface Options {
    features?: Collection<Feature>;
    layers?: Layer[] | ((p0: Layer) => boolean);
    hitTolerance?: number;
}
export default class Translate extends PointerInteraction {
    constructor(opt_options?: Options);
    getHitTolerance(): number;
    setHitTolerance(hitTolerance: number): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:active', listener: (evt: ObjectEvent) => void): void;
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
export class TranslateEvent extends Event {
    constructor();
    features: Collection<Feature>;
    coordinate: Coordinate;
}
