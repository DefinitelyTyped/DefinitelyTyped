import { Extent } from '../../extent';
import Feature, { FeatureLike } from '../../Feature';
import Circle from '../../geom/Circle';
import Geometry from '../../geom/Geometry';
import MultiPolygon from '../../geom/MultiPolygon';
import Polygon from '../../geom/Polygon';
import RenderFeature from '../Feature';
import CanvasBuilder, { SerializableInstructions } from './Builder';

export default class CanvasPolygonBuilder extends CanvasBuilder {
    constructor(tolerance: number, maxExtent: Extent, resolution: number, pixelRatio: number);
    drawCircle(circleGeometry: Circle, feature: Feature<Geometry>): void;
    drawMultiPolygon(multiPolygonGeometry: MultiPolygon, feature: FeatureLike): void;
    drawPolygon(polygonGeometry: Polygon | RenderFeature, feature: FeatureLike): void;
    finish(): SerializableInstructions;
}
