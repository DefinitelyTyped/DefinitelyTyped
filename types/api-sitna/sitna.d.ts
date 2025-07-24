import Consts from './TC/Consts';
import { SitnaMap } from './SITNA/Map';
import Feature from './SITNA/feature/Feature';
import Point from './SITNA/feature/Point';
import MultiPoint from './SITNA/feature/MultiPoint';
import Marker from './SITNA/feature/Marker';
import MultiMarker from './SITNA/feature/MultiMarker';
import Polyline from './SITNA/feature/Polyline';
import MultiPolyline from './SITNA/feature/MultiPolyline';
import Polygon from './SITNA/feature/Polygon';
import MultiPolygon from './SITNA/feature/MultiPolygon';
import Circle from './SITNA/feature/Circle';
import Layer from './SITNA/layer/Layer';
import Raster from './SITNA/layer/Raster';
import Vector from './SITNA/layer/Vector';
import Cfg from './TC/Cfg';

interface layer {
    Layer: typeof Layer;
    Raster: typeof Raster;
    Vector: typeof Vector;
}

interface feature {
    Feature: typeof Feature;
    Point: typeof Point;
    MultiPoint: typeof MultiPoint;
    Marker: typeof Marker;
    MultiMarker: typeof MultiMarker;
    Polyline: typeof Polyline;
    MultiPolyline: typeof MultiPolyline;
    Polygon: typeof Polygon;
    MultiPolygon: typeof MultiPolygon;
    Circle: typeof Circle;
}

export { Cfg, SitnaMap as Map, Consts, feature, layer };
