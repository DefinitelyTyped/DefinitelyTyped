import { EventsKey } from '../events';
import Event from '../events/Event';
import Feature from '../Feature';
import Point from '../geom/Point';
import { ObjectEvent } from '../Object';
import { AttributionLike } from './Source';
import VectorSource, { VectorSourceEvent } from './Vector';

export interface Options {
    attributions?: AttributionLike;
    distance?: number;
    geometryFunction?: (p0: Feature) => Point;
    source: VectorSource;
    wrapX?: boolean;
}
export default class Cluster extends VectorSource {
    constructor(options: Options);
    protected distance: number;
    protected features: Feature[];
    protected geometryFunction: (p0: Feature) => Point;
    protected resolution: number;
    protected source: VectorSource;
    protected cluster(): void;
    protected createCluster(features: Feature[]): Feature;
    getDistance(): number;
    getSource(): VectorSource;
    setDistance(distance: number): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'addfeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    once(type: 'addfeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    un(type: 'addfeature', listener: (evt: VectorSourceEvent) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'changefeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    once(type: 'changefeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    un(type: 'changefeature', listener: (evt: VectorSourceEvent) => void): void;
    on(type: 'clear', listener: (evt: VectorSourceEvent) => void): EventsKey;
    once(type: 'clear', listener: (evt: VectorSourceEvent) => void): EventsKey;
    un(type: 'clear', listener: (evt: VectorSourceEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
    on(type: 'removefeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    once(type: 'removefeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    un(type: 'removefeature', listener: (evt: VectorSourceEvent) => void): void;
}
