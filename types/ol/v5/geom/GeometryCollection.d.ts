import { EventsKey } from '../events';
import Event from '../events/Event';
import { ObjectEvent } from '../Object';
import Geometry from './Geometry';

export default class GeometryCollection extends Geometry {
    constructor(opt_geometries?: Geometry[]);
    getGeometries(): Geometry[];
    getGeometriesArray(): Geometry[];
    isEmpty(): boolean;
    setGeometries(geometries: Geometry[]): void;
    setGeometriesArray(geometries: Geometry[]): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
