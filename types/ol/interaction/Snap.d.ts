import Collection, { CollectionEvent } from '../Collection';
import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import { ObjectEvent } from '../Object';
import { Pixel } from '../pixel';
import PluggableMap from '../PluggableMap';
import VectorSource, { VectorSourceEvent } from '../source/Vector';
import PointerInteraction from './Pointer';

export interface Options {
    features?: Collection<Feature<Geometry>>;
    edge?: boolean;
    vertex?: boolean;
    pixelTolerance?: number;
    source?: VectorSource<Geometry>;
}
export interface Result {
    snapped: boolean;
    vertex: Coordinate;
    vertexPixel: Pixel;
}
export interface SegmentData {
    feature: Feature<Geometry>;
    segment: Coordinate[];
}
export default class Snap extends PointerInteraction {
    constructor(opt_options?: Options);
    addFeature(feature: Feature<Geometry>, opt_listen?: boolean): void;
    removeFeature(feature: Feature<Geometry>, opt_unlisten?: boolean): void;
    snapTo(pixel: Pixel, pixelCoordinate: Coordinate, map: PluggableMap): Result;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
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
