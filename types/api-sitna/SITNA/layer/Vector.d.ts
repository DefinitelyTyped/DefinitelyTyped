import Layer, { LayerOptions, LayerTree } from './Layer';
import Feature, { Geometry } from '../feature/Feature';
import Point from '../feature/Point';
import Marker from '../feature/Marker';
import Polyline from '../feature/Polyline';
import Polygon from '../feature/Polygon';
import MultiPoint from '../feature/MultiPoint';
import MultiMarker from '../feature/MultiMarker';
import MultiPolyline from '../feature/MultiPolyline';
import MultiPolygon from '../feature/MultiPolygon';
import Circle from '../feature/Circle';

export interface VectorOptions extends LayerOptions {
    cluster?: ClusterOptions;
    featureType?: string;
    filter?: string | object;
    format?: string;
    hideTree?: boolean;
    isBase?: boolean;
    isDefault?: boolean;
    overviewMapLayer?: LayerOptions | string;
    outputFormat?: string;
    properties?: string | string[];
    stealth?: boolean;
    styles?: StyleOptions;
    thumbnail?: string;
    title?: string;
    type?: string;
    url?: string;
    heatmap?: HeatmapStyleOptions;
}

export interface ClusterOptions {
    distance: number;
    animate?: boolean;
    styles?: ClusterStyleOptions;
}

export interface ClusterStyleOptions {
    point?: object;
}

export interface HeatmapStyleOptions {
    blur?: number;
    gradient?: string[];
    radius?: number;
}

export interface StyleOptions {
    point?: object;
    line?: object;
    polygon?: object;
    marker?: object;
}

export class Vector extends Layer {
    features: Feature[];

    constructor(options?: VectorOptions);

    addPoint(coordsOrPoint: number[] | Point, options?: object): Promise<Point>;
    addPoints(coordsOrPointArray: Array<number[] | Point>, options?: object): Promise<Point[]>;
    addMultiPoint(coordsOrMultiPoint: Array<number[]> | MultiPoint, options?: object): Promise<MultiPoint>;
    addMultiPoints(coordsOrMultiPointArray: Array<Array<number[] | MultiPoint>>, options?: object): Promise<MultiPoint[]>;
    addMarker(coord: number[] | Marker, options?: object): Promise<Marker>;
    addMarkers(coordsOrMarkerArray: Array<number[] | Marker>, options?: object): Promise<Marker[]>;
    addMultiMarker(coordsOrMultiMarker: Array<number[]> | MultiMarker, options?: object): Promise<MultiMarker>;
    addMultiMarkers(coordsOrMultiMarkerArray: Array<Array<number[] | MultiMarker>>, options?: object): Promise<MultiMarker[]>;
    addPolyline(coordsOrPolyline: Array<number[]> | Polyline, options?: object): Promise<Polyline>;
    addPolylines(coordsOrPolylineArray: Array<Array<number[]> | Polyline>, options?: object): Promise<Polyline[]>;
    addMultiPolyline(coordsOrMultiPolyline: Array<Array<number[]>> | MultiPolyline, options?: object): Promise<MultiPolyline>;
    addMultiPolylines(coordsOrMultiPolylineArray: Array<Array<Array<number[]>> | MultiPolyline>, options?: object): Promise<MultiPolyline[]>;
    addPolygon(coordsOrPolygon: Array<Array<number[]>> | Polygon, options?: object): Promise<Polygon>;
    addPolygons(coordsOrPolygonArray: Array<Array<Array<number[]>> | Polygon>, options?: object): Promise<Polygon[]>;
    addMultiPolygon(coordsOrMultiPolygon: Array<Array<Array<number[]>>> | MultiPolygon, options?: object): Promise<MultiPolygon>;
    addMultiPolygons(coordsOrMultiPolygonArray: Array<Array<Array<Array<number[]>>> | MultiPolygon>, options?: object): Promise<MultiPolygon[]>;
    addCircle(geometryOrCircle: Geometry | Circle, options?: object): Promise<Circle>;
    addCircles(geometryOrCircleArray: Array<Geometry | Circle>, options?: object): Promise<Circle[]>;
    addFeature(feature: Feature): Promise<Feature>;
    addFeatures(features: Feature[]): Promise<Feature[]>;
    removeFeature(feature: Feature): void;
    getFeature(feature: string | Feature): Feature | null;
    clearFeatures(): void;
    refresh(): Promise<void>;
}

export default Vector;