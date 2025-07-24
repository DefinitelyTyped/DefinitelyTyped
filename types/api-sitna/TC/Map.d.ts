import EventTarget from './EventTarget';
import Layer, { LayerOptions } from '../SITNA/layer/Layer';
import { StyleOptions } from '../SITNA/layer/Vector';
import Feature from '../SITNA/feature/Feature';
import Marker, { MarkerOptions } from '../SITNA/feature/Marker';

export interface LayoutOptions {
    config?: string;
    i18n?: string;
    markup?: string;
    script?: string;
    style?: string;
}

export interface ControlOptions {
    div?: HTMLElement | string;
}

export interface MapControlOptions {
    attribution?: ControlOptions | boolean;
    basemapSelector?: ControlOptions | boolean;
    click?: ControlOptions | boolean;
    coordinates?: ControlOptions | boolean;
    dataLoader?: ControlOptions | boolean;
    download?: ControlOptions | boolean;
    drawMeasureModify?: ControlOptions | boolean;
    featureInfo?: ControlOptions | boolean;
    fullScreen?: ControlOptions | boolean;
    geolocation?: ControlOptions | boolean;
    layerCatalog?: ControlOptions | boolean;
    legend?: ControlOptions | boolean;
    loadingIndicator?: ControlOptions | boolean;
    measure?: ControlOptions | boolean;
    multiFeatureInfo?: ControlOptions | boolean;
    navBar?: ControlOptions | boolean;
    offlineMapMaker?: ControlOptions | boolean;
    overviewMap?: ControlOptions | boolean;
    popup?: ControlOptions | boolean;
    printMap?: ControlOptions | boolean;
    scale?: ControlOptions | boolean;
    scaleBar?: ControlOptions | boolean;
    scaleSelector?: ControlOptions | boolean;
    search?: ControlOptions | boolean;
    share?: ControlOptions | boolean;
    streetView?: ControlOptions | boolean;
    threed?: ControlOptions | boolean;
    TOC?: ControlOptions | boolean;
    WFSEdit?: ControlOptions | boolean;
    WFSQuery?: ControlOptions | boolean;
    workLayerManager?: ControlOptions | boolean;
}

export interface MapViewOptions {
    threeD?: ControlOptions;
}

export interface MapOptions {
    layout?: LayoutOptions | string;
    crs?: string;
    initialExtent?: number[];
    maxExtent?: number[];
    baselayerExtent?: number[];
    baseLayers?: (LayerOptions | string)[];
    defaultBaseLayer?: string;
    controls?: MapControlOptions;
    workLayers?: LayerOptions[];
    crossOrigin?: string;
    locale?: string;
    mouseWheelZoom?: boolean;
    stateful?: boolean;
    pixelTolerance?: number;
    proxy?: string;
    styles?: StyleOptions;
    views?: MapViewOptions;
}

export interface ZoomOptions {
    pointBoundsRadius?: number;
    extentMargin?: number;
}

export interface Event {
    type: string;
}

export type SetCrsCallback = (newCrs: string) => void;
export type AddMarkerCallback = (marker: Marker) => void;
export type SetExtentCallback = (newExtent: number[]) => void;

export class BasicMap extends EventTarget {

    constructor(div: HTMLElement | string, options?: MapOptions);

    loaded(callback?: () => void): Promise<void>;
    getCrs(): string;
    setCrs(crs: string, callback?: SetCrsCallback): Promise<string>;
    addMarker(coordinatesOrMarker: number[] | Marker, options?: MarkerOptions, callback?: AddMarkerCallback): Promise<Marker>;
    addLayer(layer: string | Layer | LayerOptions, callback?: (layer: Layer) => void): Promise<Layer>;
    setBaseLayer(layer: Layer | string, callback?: () => void): Promise<Layer | null>;
    getLayer(layer: string | Layer): Layer | null;
    getExtent(): number[];
    setExtent(extent: number[], options?: { animate?: boolean }, callback?: SetExtentCallback): Promise<number[]>;
    getMaxExtent(): number[] | null;
    zoomToFeatures(features: Feature[], options?: ZoomOptions): void;
    zoomToMarkers(options?: ZoomOptions): void;
    removeFeatures(features: Feature[]): void;
    exportImage(): string | null;
}

export default BasicMap;