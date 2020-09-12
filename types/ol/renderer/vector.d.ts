import BaseEvent from '../events/Event';
import Feature, { FeatureLike } from '../Feature';
import Circle from '../geom/Circle';
import Geometry from '../geom/Geometry';
import GeometryCollection from '../geom/GeometryCollection';
import LineString from '../geom/LineString';
import MultiLineString from '../geom/MultiLineString';
import MultiPoint from '../geom/MultiPoint';
import MultiPolygon from '../geom/MultiPolygon';
import Point from '../geom/Point';
import Polygon from '../geom/Polygon';
import { TransformFunction } from '../proj';
import BuilderGroup from '../render/canvas/BuilderGroup';
import RenderFeature from '../render/Feature';
import Style from '../style/Style';

export function defaultOrder(feature1: FeatureLike, feature2: FeatureLike): number;
export function getSquaredTolerance(resolution: number, pixelRatio: number): number;
export function getTolerance(resolution: number, pixelRatio: number): number;
export function renderFeature<T>(
    replayGroup: BuilderGroup,
    feature: FeatureLike,
    style: Style,
    squaredTolerance: number,
    listener: (p0: BaseEvent) => void,
    opt_transform?: TransformFunction,
): boolean;
