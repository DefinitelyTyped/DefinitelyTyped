import { Extent } from '../../extent';
import Feature from '../../Feature';
import Circle from '../../geom/Circle';
import Geometry from '../../geom/Geometry';
import GeometryCollection from '../../geom/GeometryCollection';
import LineString from '../../geom/LineString';
import MultiLineString from '../../geom/MultiLineString';
import MultiPoint from '../../geom/MultiPoint';
import MultiPolygon from '../../geom/MultiPolygon';
import Point from '../../geom/Point';
import Polygon from '../../geom/Polygon';
import { TransformFunction } from '../../proj';
import Fill from '../../style/Fill';
import ImageStyle from '../../style/Image';
import Stroke from '../../style/Stroke';
import Style from '../../style/Style';
import Text from '../../style/Text';
import { Transform } from '../../transform';
import RenderFeature from '../Feature';
import VectorContext from '../VectorContext';

export default class CanvasImmediateRenderer extends VectorContext {
    constructor(
        context: CanvasRenderingContext2D,
        pixelRatio: number,
        extent: Extent,
        transform: Transform,
        viewRotation: number,
        opt_squaredTolerance?: number,
        opt_userTransform?: TransformFunction,
    );
    drawCircle(geometry: Circle): void;
    drawFeature(feature: Feature<Geometry>, style: Style): void;
    drawGeometry(geometry: Geometry | RenderFeature): void;
    drawGeometryCollection(geometry: GeometryCollection): void;
    drawLineString(geometry: LineString | RenderFeature): void;
    drawMultiLineString(geometry: MultiLineString | RenderFeature): void;
    drawMultiPoint(geometry: MultiPoint | RenderFeature): void;
    drawMultiPolygon(geometry: MultiPolygon): void;
    drawPoint(geometry: Point | RenderFeature): void;
    drawPolygon(geometry: Polygon | RenderFeature): void;
    setFillStrokeStyle(fillStyle: Fill, strokeStyle: Stroke): void;
    setImageStyle(imageStyle: ImageStyle): void;
    setStyle(style: Style): void;
    setTextStyle(textStyle: Text): void;
    setTransform(transform: Transform): void;
}
