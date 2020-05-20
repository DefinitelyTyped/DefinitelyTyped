import Feature from '../Feature';
import Circle from '../geom/Circle';
import Geometry from '../geom/Geometry';
import GeometryCollection from '../geom/GeometryCollection';
import LineString from '../geom/LineString';
import MultiLineString from '../geom/MultiLineString';
import MultiPoint from '../geom/MultiPoint';
import MultiPolygon from '../geom/MultiPolygon';
import Point from '../geom/Point';
import Polygon from '../geom/Polygon';
import SimpleGeometry from '../geom/SimpleGeometry';
import Fill from '../style/Fill';
import ImageStyle from '../style/Image';
import Stroke from '../style/Stroke';
import Style from '../style/Style';
import Text from '../style/Text';
import { DeclutterGroup } from './canvas';
import RenderFeature from './Feature';

export default class VectorContext {
    constructor();
    drawCircle(circleGeometry: Circle, feature: Feature): void;
    drawCustom(geometry: SimpleGeometry, feature: Feature | RenderFeature, renderer: () => void): void;
    drawFeature(feature: Feature, style: Style): void;
    drawGeometry(geometry: Geometry): void;
    drawGeometryCollection(geometryCollectionGeometry: GeometryCollection, feature: Feature): void;
    drawLineString(lineStringGeometry: LineString | RenderFeature, feature: Feature | RenderFeature): void;
    drawMultiLineString(multiLineStringGeometry: MultiLineString | RenderFeature, feature: Feature | RenderFeature): void;
    drawMultiPoint(multiPointGeometry: MultiPoint | RenderFeature, feature: Feature | RenderFeature): void;
    drawMultiPolygon(multiPolygonGeometry: MultiPolygon, feature: Feature | RenderFeature): void;
    drawPoint(pointGeometry: Point | RenderFeature, feature: Feature | RenderFeature): void;
    drawPolygon(polygonGeometry: Polygon | RenderFeature, feature: Feature | RenderFeature): void;
    drawText(geometry: Geometry | RenderFeature, feature: Feature | RenderFeature): void;
    setFillStrokeStyle(fillStyle: Fill, strokeStyle: Stroke): void;
    setImageStyle(imageStyle: ImageStyle, opt_declutterGroup?: DeclutterGroup): void;
    setStyle(style: Style): void;
    setTextStyle(textStyle: Text, opt_declutterGroup?: DeclutterGroup): void;
}
