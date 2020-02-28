import { EventsKey } from './events';
import BaseEvent from './events/Event';
import Geometry from './geom/Geometry';
import BaseObject, { ObjectEvent } from './Object';
import RenderFeature from './render/Feature';
import Style, { StyleFunction, StyleLike } from './style/Style';

export type FeatureClass = Feature<Geometry> | RenderFeature;
export type FeatureLike = Feature<Geometry> | RenderFeature;
export default class Feature<GeomType extends Geometry = Geometry> extends BaseObject {
    constructor(opt_geometryOrProperties?: GeomType | { [key: string]: any });
    clone(): Feature<Geometry>;
    getGeometry(): GeomType;
    getGeometryName(): string;
    getId(): number | string;
    getStyle(): StyleLike;
    getStyleFunction(): StyleFunction;
    setGeometry(geometry: GeomType | undefined): void;
    setGeometryName(name: string): void;
    setId(id: number | string | undefined): void;
    setStyle(style: StyleLike | null): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:geometry', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:geometry', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:geometry', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export function createStyleFunction(obj: StyleFunction | Style[] | Style): StyleFunction;
