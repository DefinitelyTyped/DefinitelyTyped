import Event from '../events/Event';
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
import RenderFeature from '../render/Feature';
import ReplayGroup from '../render/ReplayGroup';
import Style from '../style/Style';

export function defaultOrder(feature1: FeatureLike, feature2: FeatureLike): number;
export function getSquaredTolerance(resolution: number, pixelRatio: number): number;
export function getTolerance(resolution: number, pixelRatio: number): number;
export function renderFeature<T>(replayGroup: ReplayGroup, feature: FeatureLike, style: Style, squaredTolerance: number, listener: (this: T, p0: Event) => void, thisArg: T): boolean;
