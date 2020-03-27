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
    getGeometry(): Geometry | undefined;
    getGeometryName(): string;
    getId(): number | string | undefined;
    getStyle(): StyleLike | null;
    getStyleFunction(): StyleFunction | undefined;
    setGeometry(geometry: Geometry | undefined): void;
    setGeometryName(name: string): void;
    setId(id: number | string | undefined): void;
    setStyle(style: StyleLike | null): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
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
