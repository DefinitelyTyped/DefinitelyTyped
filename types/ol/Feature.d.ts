import { EventsKey } from './events';
import Event from './events/Event';
import Geometry from './geom/Geometry';
import BaseObject, { ObjectEvent } from './Object';
import RenderFeature from './render/Feature';
import Style, { StyleFunction, StyleLike } from './style/Style';

export type FeatureClass = Feature | RenderFeature;
export type FeatureLike = Feature | RenderFeature;
export default class Feature extends BaseObject {
    constructor(opt_geometryOrProperties?: Geometry | { [key: string]: any });
    clone(): Feature;
    getGeometry(): Geometry;
    getGeometryName(): string;
    getId(): number | string;
    getStyle(): StyleLike;
    getStyleFunction(): StyleFunction;
    setGeometry(geometry: Geometry): void;
    setGeometryName(name: string): void;
    setId(id: number | string): void;
    setStyle(style: StyleLike): void;
    on(type: string | string[], listener: ((p0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((p0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((p0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'change:geometry', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:geometry', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:geometry', listener: (evt: ObjectEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export function createStyleFunction(obj: StyleFunction | Style[] | Style): StyleFunction;
