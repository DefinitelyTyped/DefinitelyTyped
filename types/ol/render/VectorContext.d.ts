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
import SimpleGeometry from '../geom/SimpleGeometry';
import Fill from '../style/Fill';
import ImageStyle from '../style/Image';
import Stroke from '../style/Stroke';
import Style from '../style/Style';
import Text from '../style/Text';
import { DeclutterImageWithText } from './canvas';
import RenderFeature from './Feature';

export default class VectorContext {
    constructor();
    drawCircle(circleGeometry: Circle, feature: Feature<Geometry>): void;
    /**
     * Render a geometry with a custom renderer.
     */
    drawCustom(geometry: SimpleGeometry, feature: FeatureLike, renderer: () => void): void;
    drawFeature(feature: Feature<Geometry>, style: Style): void;
    /**
     * Render a geometry.
     */
    drawGeometry(geometry: Geometry): void;
    drawGeometryCollection(geometryCollectionGeometry: GeometryCollection, feature: Feature<Geometry>): void;
    drawLineString(lineStringGeometry: LineString | RenderFeature, feature: FeatureLike): void;
    drawMultiLineString(multiLineStringGeometry: MultiLineString | RenderFeature, feature: FeatureLike): void;
    drawMultiPoint(multiPointGeometry: MultiPoint | RenderFeature, feature: FeatureLike): void;
    drawMultiPolygon(multiPolygonGeometry: MultiPolygon, feature: FeatureLike): void;
    drawPoint(pointGeometry: Point | RenderFeature, feature: FeatureLike): void;
    drawPolygon(polygonGeometry: Polygon | RenderFeature, feature: FeatureLike): void;
    drawText(geometry: SimpleGeometry | RenderFeature, feature: FeatureLike): void;
    setFillStrokeStyle(fillStyle: Fill, strokeStyle: Stroke): void;
    setImageStyle(imageStyle: ImageStyle, opt_declutterImageWithText?: DeclutterImageWithText): void;
    /**
     * Set the rendering style.
     */
    setStyle(style: Style): void;
    setTextStyle(textStyle: Text, opt_declutterImageWithText?: DeclutterImageWithText): void;
}
