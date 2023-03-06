// Type definitions for react-map-gl 6.1
// Project: https://github.com/visgl/react-map-gl#readme
// Definitions by: Robert Imig <https://github.com/rimig>
//                 Fabio Berta <https://github.com/fnberta>
//                 Sander Siim <https://github.com/sandersiim>
//                 Arman Safikhani <https://github.com/Arman92>
//                 William Chiu <https://github.com/chiuhow>
//                 David Baumgold <https://github.com/singingwolfboy>
//                 Ilja Reznik <https://github.com/ireznik>
//                 Arthur Cheung <https://github.com/arthur-cheung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

/// <reference lib='dom' />

import * as React from 'react';
import * as MapboxGL from 'mapbox-gl';
import * as GeoJSON from 'geojson';
import WebMercatorViewport from 'viewport-mercator-project';

export { WebMercatorViewport } from 'viewport-mercator-project';

export interface ViewState {
    latitude: number;
    longitude: number;
    zoom: number;
    bearing?: number | undefined;
    pitch?: number | undefined;
    altitude?: number | undefined;
}

export interface MapError {
    error?: { message: string; status: number } | undefined;
    status: number;
}

export interface MapRequest {
    url: string;
    headers?: { [index: string]: string } | undefined;
    credentials?: string | undefined;
}

export interface MapLoadEvent {
    type: string;
    target: MapboxGL.Map;
}

export interface MapboxProps extends Partial<ViewState> {
    container?: object | undefined;
    gl?: object | undefined;
    mapboxApiAccessToken?: string | undefined;
    mapboxApiUrl?: string | undefined;
    attributionControl?: boolean | undefined;
    preserveDrawingBuffer?: boolean | undefined;
    reuseMaps?: boolean | undefined;
    transformRequest?: ((url?: string, resourceType?: string) => MapRequest) | undefined;
    mapOptions?: object | undefined;
    mapStyle?: string | object | undefined;
    visible?: boolean | undefined;
    onLoad?: ((event: MapLoadEvent) => void) | undefined;
    onError?: ((e: MapError) => void) | undefined;
    reuseMap?: boolean | undefined;
    width: number | string;
    height: number | string;
    viewState?: ViewState | undefined;
}

export interface StaticMapProps extends MapboxProps {
    onResize?: ((dimensions: { width: number; height: number }) => void) | undefined;
    preventStyleDiffing?: boolean | undefined;
    disableTokenWarning?: boolean | undefined;
    className?: string | undefined;
    style?: object | undefined;
    visibilityConstraints?: {
        minZoom?: number | undefined;
        maxZoom?: number | undefined;
        minPitch?: number | undefined;
        maxPitch?: number | undefined;
    } | undefined;
}

export interface QueryRenderedFeaturesParams {
    layers?: string[] | undefined;
    filter?: any[] | undefined;
}

export class StaticMap extends React.PureComponent<StaticMapProps> {
    getMap(): MapboxGL.Map;
    queryRenderedFeatures(
        geometry?: MapboxGL.PointLike | [MapboxGL.PointLike, MapboxGL.PointLike],
        parameters?: QueryRenderedFeaturesParams,
    ): MapboxGL.MapboxGeoJSONFeature[];
}

export interface ExtraState {
    inTransition?: boolean | undefined;
    isDragging?: boolean | undefined;
    isHovering?: boolean | undefined;
    isPanning?: boolean | undefined;
    isRotating?: boolean | undefined;
    isZooming?: boolean | undefined;
}

export interface PositionInput {
    pos: [number, number];
}

export type ViewportChangeHandler = (viewState: ViewportProps) => void;

export type ContextViewportChangeHandler = (
    viewState: ViewportProps,
    interactionState: ExtraState,
    oldViewState: ViewportProps,
) => void;

export interface MapControllerOptions {
    onViewportChange?: ContextViewportChangeHandler | undefined;
    onStateChange?: ((state: MapState) => void) | undefined;
    eventManager?: any;
    isInteractive: boolean;
    scrollZoom?: boolean | undefined;
    dragPan?: boolean | undefined;
    dragRotate?: boolean | undefined;
    doubleClickZoom?: boolean | undefined;
    touchZoom?: boolean | undefined;
    touchRotate?: boolean | undefined;
    keyboard?: boolean | undefined;
}

export interface ViewportProps {
    width: number | string;
    height: number | string;
    latitude: number;
    longitude: number;
    zoom: number;
    bearing: number;
    pitch: number;
    altitude: number;
    maxZoom: number;
    minZoom: number;
    maxPitch: number;
    minPitch: number;
    transitionDuration?: number | 'auto' | undefined;
    transitionInterpolator?: TransitionInterpolator | undefined;
    transitionInterruption?: TRANSITION_EVENTS | undefined;
    transitionEasing?: EasingFunction | undefined;
}

export interface InteractiveState {
    startPanLngLat?: [number, number] | undefined;
    startZoomLngLat?: [number, number] | undefined;
    startBearing?: number | undefined;
    startPitch?: number | undefined;
    startZoom?: number | undefined;
}

export type MapStateProps = Partial<ViewportProps & InteractiveState>;

export class MapState {
    constructor(props: MapStateProps);
    getViewportProps(): ViewportProps;
    getInteractiveState(): InteractiveState;
    panStart(input: PositionInput): MapState;
    pan(input: PositionInput & { startPos?: [number, number] | undefined }): MapState;
    panEnd(): MapState;
    rotateStart(input: PositionInput): MapState;
    rotate(input: { deltaScaleX?: number | undefined; deltaScaleY?: number | undefined }): MapState;
    rotateEnd(): MapState;
    zoomStart(input: PositionInput): MapState;
    zoom(input: PositionInput & { scale: number; startPos?: [number, number] | undefined }): MapState;
    zoomEnd(): MapState;
}

export interface Center {
    x: number;
    y: number;
}

export interface MapControlEvent {
    type: string;
    center: Center;
    offsetCenter: Center;
    target: any;
    srcEvent: any;
    key?: number | undefined;
    leftButton?: boolean | undefined;
    middleButton?: boolean | undefined;
    rightButton?: boolean | undefined;
    pointerType?: string | undefined;
    delta?: number | undefined;
}

export interface BaseMapController {
    events: string[];
    handleEvent(event: MapControlEvent): void;
}

export class MapController implements BaseMapController {
    events: string[];
    handleEvent(event: MapControlEvent): void;
    getMapState(overrides: Partial<MapState>): MapState;
    setOptions(options: MapControllerOptions): void;
    setState(newState: MapState): void;
    updateViewport(newMapState: MapState, extraProps: any, extraState: ExtraState): void;
}

export interface PointerEvent extends MouseEvent {
    type: string;
    point: [number, number];
    offsetCenter: {
        x: number;
        y: number;
    };
    lngLat: [number, number];
    target: any;
    srcEvent: any;
    // backward compatibility: v3 interface
    features: any[];
}

export type EasingFunction = (t: number) => number;

export enum TRANSITION_EVENTS {
    BREAK = 1,
    SNAP_TO_END = 2,
    IGNORE = 3,
    UPDATE = 4,
}

export class TransitionInterpolator {}

export interface LinearInterpolatorProps {
    transitionProps?: string[] | undefined;
    around?: number[] | undefined;
}

export class LinearInterpolator extends TransitionInterpolator {
    constructor(transitionProps?: LinearInterpolatorProps | string[]);
}

export interface FlyToInterpolatorProps {
    curve?: number | undefined;
    speed?: number | undefined;
    screenSpeed?: number | undefined;
    maxDuration?: number | undefined;
}

export class FlyToInterpolator extends TransitionInterpolator {
    constructor(props?: FlyToInterpolatorProps);
}

export interface ViewStateChangeInfo {
    viewState: ViewportProps;
}

export interface ContextViewStateChangeInfo {
    viewState: ViewportProps;
    interactionState: ExtraState;
    newViewState: ViewportProps;
}

export type ViewStateChangeHandler = (info: ViewStateChangeInfo) => void;

export type ContextViewStateChangeHandler = (info: ContextViewStateChangeInfo) => void;

export interface InteractiveMapProps extends StaticMapProps {
    children?: React.ReactNode;
    maxZoom?: number | undefined;
    minZoom?: number | undefined;
    maxPitch?: number | undefined;
    minPitch?: number | undefined;
    onViewStateChange?: ContextViewStateChangeHandler | undefined;
    onViewportChange?: ContextViewportChangeHandler | undefined;
    onInteractionStateChange?: ((state: ExtraState) => void) | undefined;
    transitionDuration?: number | 'auto' | undefined;
    transitionInterpolator?: TransitionInterpolator | undefined;
    transitionInterruption?: TRANSITION_EVENTS | undefined;
    transitionEasing?: EasingFunction | undefined;
    onTransitionStart?: (() => void) | undefined;
    onTransitionInterrupt?: (() => void) | undefined;
    onTransitionEnd?: (() => void) | undefined;
    scrollZoom?: boolean | undefined;
    dragPan?: boolean | undefined;
    dragRotate?: boolean | undefined;
    doubleClickZoom?: boolean | undefined;
    touchZoom?: boolean | undefined;
    touchRotate?: boolean | undefined;
    keyboard?: boolean | undefined;
    onHover?: ((event: PointerEvent) => void) | undefined;
    onClick?: ((event: PointerEvent) => void) | undefined;
    onNativeClick?: ((event: PointerEvent) => void) | undefined;
    onDblClick?: ((event: PointerEvent) => void) | undefined;
    onContextMenu?: ((event: PointerEvent) => void) | undefined;
    onMouseDown?: ((event: PointerEvent) => void) | undefined;
    onMouseMove?: ((event: PointerEvent) => void) | undefined;
    onMouseUp?: ((event: PointerEvent) => void) | undefined;
    onTouchStart?: ((event: PointerEvent) => void) | undefined;
    onTouchMove?: ((event: PointerEvent) => void) | undefined;
    onTouchEnd?: ((event: PointerEvent) => void) | undefined;
    onMouseEnter?: ((event: PointerEvent) => void) | undefined;
    onMouseLeave?: ((event: PointerEvent) => void) | undefined;
    onMouseOut?: ((event: PointerEvent) => void) | undefined;
    onWheel?: ((event: PointerEvent) => void) | undefined;
    touchAction?: string | undefined;
    clickRadius?: number | undefined;
    interactiveLayerIds?: string[] | undefined;
    getCursor?: ((state: ExtraState) => void) | undefined;
    controller?: MapController | undefined;
}

export class InteractiveMap extends React.PureComponent<InteractiveMapProps> {
    getMap(): MapboxGL.Map;
    queryRenderedFeatures(
        geometry?: MapboxGL.PointLike | [MapboxGL.PointLike, MapboxGL.PointLike],
        parameters?: QueryRenderedFeaturesParams,
    ): MapboxGL.MapboxGeoJSONFeature[];
}

export default InteractiveMap;

// class EventManager from mjolnir.js
export type EventManager = any;

export interface MapContextProps {
    viewport?: WebMercatorViewport | undefined;
    map?: MapboxGL.Map | undefined;
    mapContainer: HTMLElement | null;
    onViewStateChange?: ContextViewStateChangeHandler | undefined;
    onViewportChange?: ContextViewportChangeHandler | undefined;
    isDragging: boolean;
    eventManager?: EventManager | undefined;
}

export const _MapContext: React.Context<MapContextProps>;

export interface BaseControlProps {
    captureScroll?: boolean | undefined;
    captureDrag?: boolean | undefined;
    captureClick?: boolean | undefined;
    captureDoubleClick?: boolean | undefined;
}

export class BaseControl<T extends BaseControlProps, S extends Element> extends React.PureComponent<T> {
    _containerRef: React.RefObject<S>;
    _context: MapContextProps;
}

export interface PopupProps extends BaseControlProps {
    className?: string | undefined;
    longitude: number;
    latitude: number;
    altitude?: number | undefined;
    offsetLeft?: number | undefined;
    offsetTop?: number | undefined;
    tipSize?: number | undefined;
    closeButton?: boolean | undefined;
    closeOnClick?: boolean | undefined;
    anchor?: MapboxGL.Anchor | undefined;
    dynamicPosition?: boolean | undefined;
    sortByDepth?: boolean | undefined;
    onClose?: (() => void) | undefined;
    children?: React.ReactNode | undefined;
}

export class Popup extends BaseControl<PopupProps, HTMLDivElement> {}

export interface NavigationControlProps extends BaseControlProps {
    className?: string | undefined;
    onViewStateChange?: ViewStateChangeHandler | undefined;
    onViewportChange?: ViewportChangeHandler | undefined;
    showCompass?: boolean | undefined;
    showZoom?: boolean | undefined;
    zoomInLabel?: string | undefined;
    zoomOutLabel?: string | undefined;
    compassLabel?: string | undefined;
}

export class NavigationControl extends BaseControl<NavigationControlProps, HTMLDivElement> {}

export interface FullscreenControlProps extends BaseControlProps {
    className?: string | undefined;
    container?: HTMLElement | null | undefined;
}

export class FullscreenControl extends BaseControl<FullscreenControlProps, HTMLDivElement> {}

// https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions
interface PositionOptions {
    enableHighAccuracy?: boolean | undefined;
    timeout: number;
    maximumAge: number;
}

export interface GeolocateControlProps extends BaseControlProps {
    className?: string | undefined;
    label?: string | undefined;
    positionOptions?: MapboxGL.PositionOptions | undefined;
    fitBoundsOptions?: MapboxGL.FitBoundsOptions | undefined;
    trackUserLocation?: boolean | undefined;
    showUserLocation?: boolean | undefined;
    onViewStateChange?: ViewStateChangeHandler | undefined;
    onViewportChange?: ViewportChangeHandler | undefined;
    onGeolocate?: ((options: PositionOptions) => void) | undefined;
    style?: React.CSSProperties | undefined;
    auto?: boolean | undefined;
}

export class GeolocateControl extends BaseControl<GeolocateControlProps, HTMLDivElement> {}

export interface ScaleControlProps extends BaseControlProps {
    maxWidth?: number | undefined;
    unit?: 'imperial' | 'metric' | 'nautical' | undefined;
}

export class ScaleControl extends BaseControl<ScaleControlProps, HTMLDivElement> {}

export interface DragEvent {
    lngLat: [number, number];
    [key: string]: any;
}

export interface DraggableControlProps extends BaseControlProps {
    draggable?: boolean | undefined;
    onDrag?: ((event: DragEvent) => void) | undefined;
    onDragEnd?: ((event: DragEvent) => void) | undefined;
    onDragStart?: ((event: DragEvent) => void) | undefined;
}

export class DraggableControl<T extends DraggableControlProps> extends BaseControl<T, HTMLDivElement> {}

export interface MarkerProps extends DraggableControlProps {
    className?: string | undefined;
    longitude: number;
    latitude: number;
    offsetLeft?: number | undefined;
    offsetTop?: number | undefined;
    children?: React.ReactNode | undefined;
}

export class Marker extends DraggableControl<MarkerProps> {}

export interface HTMLRedrawOptions {
    width: number;
    height: number;
    project: (lnglat: number[]) => number[];
    unproject: (xy: number[]) => number[];
}

export interface HTMLOverlayProps extends BaseControlProps {
    redraw: (opts: HTMLRedrawOptions) => void;
    style?: React.CSSProperties | undefined;
}

export class HTMLOverlay extends BaseControl<HTMLOverlayProps, HTMLDivElement> {}

export interface CanvasRedrawOptions extends HTMLRedrawOptions {
    ctx: CanvasRenderingContext2D;
}

export interface CanvasOverlayProps extends BaseControlProps {
    redraw: (opts: CanvasRedrawOptions) => void;
}

export class CanvasOverlay extends BaseControl<CanvasOverlayProps, HTMLCanvasElement> {}

export type SVGRedrawOptions = HTMLRedrawOptions;

export interface SVGOverlayProps extends BaseControlProps {
    redraw: (opts: SVGRedrawOptions) => void;
    style?: React.CSSProperties | undefined;
}

export class SVGOverlay extends BaseControl<SVGOverlayProps, Element> {}

export interface SourceProps {
    id?: string | undefined;
    type: string;
    url?: string | undefined;
    tiles?: string[] | undefined;
    tileSize?: number | undefined;
    bounds?: number[] | undefined;
    scheme?: 'xyz' | 'tms' | undefined;
    minzoom?: number | undefined;
    maxzoom?: number | undefined;
    attribution?: string | undefined;
    encoding?: 'terrarium' | 'mapbox' | undefined;
    data?: GeoJSON.Feature<GeoJSON.Geometry> | GeoJSON.FeatureCollection<GeoJSON.Geometry> | string | undefined;
    buffer?: number | undefined;
    tolerance?: number | undefined;
    cluster?: boolean | undefined;
    clusterRadius?: number | undefined;
    clusterProperties?: object | undefined;
    clusterMaxZoom?: number | undefined;
    lineMetrics?: boolean | undefined;
    generateId?: boolean | undefined;
    coordinates?: number[][] | undefined;
    urls?: string[] | undefined;
    children?: React.ReactNode | undefined;
}

export class Source extends React.PureComponent<SourceProps> {}

export interface LayerProps {
    id?: string | undefined;
    type: string;
    source?: string | undefined;
    beforeId?: string | undefined;
    layout?: MapboxGL.AnyLayout | undefined;
    paint:
        | MapboxGL.BackgroundPaint
        | MapboxGL.FillPaint
        | MapboxGL.FillExtrusionPaint
        | MapboxGL.LinePaint
        | MapboxGL.SymbolPaint
        | MapboxGL.RasterPaint
        | MapboxGL.CirclePaint
        | MapboxGL.HeatmapPaint
        | MapboxGL.HillshadePaint;
    filter?: any[] | undefined;
    minzoom?: number | undefined;
    maxzoom?: number | undefined;
}

export class Layer extends React.PureComponent<LayerProps> {}
