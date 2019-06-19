// Type definitions for react-map-gl 5.0
// Project: https://github.com/uber/react-map-gl#readme
// Definitions by: Robert Imig <https://github.com/rimig>
//                 Fabio Berta <https://github.com/fnberta>
//                 Sander Siim <https://github.com/sandersiim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as React from 'react';
import * as MapboxGL from 'mapbox-gl';
import * as GeoJSON from 'geojson';
import WebMercatorViewport from 'viewport-mercator-project';

export interface ViewState {
    latitude: number;
    longitude: number;
    zoom: number;
    bearing?: number;
    pitch?: number;
    altitude?: number;
}

export interface MapError {
    error?: { message: string; status: number };
    status: number;
}

export interface MapRequest {
    url: string;
    headers?: { [index: string]: string };
    credentials?: string;
}

export interface MapLoadEvent {
    type: string;
    target: MapboxGL.Map;
}

export interface MapboxProps extends Partial<ViewState> {
    container?: object;
    gl?: object;
    mapboxApiAccessToken?: string;
    attributionControl?: boolean;
    preserveDrawingBuffer?: boolean;
    reuseMaps?: boolean;
    transformRequest?: (url?: string, resourceType?: string) => MapRequest;
    mapOptions?: object;
    mapStyle?: string | object;
    visible?: boolean;
    onLoad?: (event: MapLoadEvent) => void;
    onError?: (e: MapError) => void;
    reuseMap?: boolean;
    width: number | string;
    height: number | string;
    viewState?: ViewState;
}

export interface StaticMapProps extends MapboxProps {
    onResize?: (dimensions: { width: number; height: number }) => void;
    preventStyleDiffing?: boolean;
    disableTokenWarning?: boolean;
    className?: string;
    style?: object;
    visibilityConstraints?: {
        minZoom?: number;
        maxZoom?: number;
        minPitch?: number;
        maxPitch?: number;
    };
}

export interface QueryRenderedFeaturesParams {
    layers?: string[];
    filter?: any[];
}

export class StaticMap extends React.PureComponent<StaticMapProps> {
    getMap(): MapboxGL.Map;
    queryRenderedFeatures(geometry?: MapboxGL.PointLike | MapboxGL.PointLike[], parameters?: QueryRenderedFeaturesParams): Array<GeoJSON.Feature<GeoJSON.GeometryObject>>;
}

export interface ExtraState {
    isDragging: boolean;
    isHovering: boolean;
}

export interface PositionInput {
    pos: [number, number];
}

export type ViewportChangeHandler = (viewState: ViewState) => void;

export interface MapControllerOptions {
    onViewportChange?: ViewportChangeHandler;
    onStateChange?: (state: MapState) => void;
    eventManager?: any;
    isInteractive: boolean;
    scrollZoom?: boolean;
    dragPan?: boolean;
    dragRotate?: boolean;
    doubleClickZoom?: boolean;
    touchZoom?: boolean;
    touchRotate?: boolean;
    keyboard?: boolean;
}

export interface ViewportProps {
    width: number;
    height: number;
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
    transitionDuration?: number;
    transitionInterpolator?: TransitionInterpolator;
    transitionInterruption?: TRANSITION_EVENTS;
    transitionEasing?: EasingFunction;
}

export interface InteractiveState {
    startPanLngLat?: [number, number];
    startZoomLngLat?: [number, number];
    startBearing?: number;
    startPitch?: number;
    startZoom?: number;
}

export type MapStateProps = Partial<ViewportProps & InteractiveState>;

export class MapState {
    constructor(props: MapStateProps);
    getViewportProps(): ViewportProps;
    getInteractiveState(): InteractiveState;
    panStart(input: PositionInput): MapState;
    pan(input: PositionInput & { startPos?: [number, number] }): MapState;
    panEnd(): MapState;
    rotateStart(input: PositionInput): MapState;
    rotate(input: { deltaScaleX?: number; deltaScaleY?: number }): MapState;
    rotateEnd(): MapState;
    zoomStart(input: PositionInput): MapState;
    zoom(input: PositionInput & { scale: number; startPos?: [number, number] }): MapState;
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
    key?: number;
    leftButton?: boolean;
    middleButton?: boolean;
    rightButton?: boolean;
    pointerType?: string;
    delta?: number;
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

export interface PointerEvent {
    type: string;
    point: [number, number];
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
    UPDATE = 4
}

export class TransitionInterpolator {}

export class LinearInterpolator extends TransitionInterpolator {
    constructor(transitionProps?: string[]);
}

export class FlyToInterpolator extends TransitionInterpolator {}

export interface ViewStateChangeInfo {
    viewState: ViewState;
}

export type ViewStateChangeHandler = (info: ViewStateChangeInfo) => void;

export interface InteractiveMapProps extends StaticMapProps {
    maxZoom?: number;
    minZoom?: number;
    maxPitch?: number;
    minPitch?: number;
    onViewStateChange?: ViewStateChangeHandler;
    onViewportChange?: ViewportChangeHandler;
    onInteractionStateChange?: (state: ExtraState) => void;
    transitionDuration?: number;
    transitionInterpolator?: TransitionInterpolator;
    transitionInterruption?: TRANSITION_EVENTS;
    transitionEasing?: EasingFunction;
    onTransitionStart?: () => void;
    onTransitionInterrupt?: () => void;
    onTransitionEnd?: () => void;
    scrollZoom?: boolean;
    dragPan?: boolean;
    dragRotate?: boolean;
    doubleClickZoom?: boolean;
    touchZoom?: boolean;
    touchRotate?: boolean;
    keyboard?: boolean;
    onHover?: (event: PointerEvent) => void;
    onClick?: (event: PointerEvent) => void;
    onNativeClick?: (event: PointerEvent) => void;
    onDblClick?: (event: PointerEvent) => void;
    onContextMenu?: (event: PointerEvent) => void;
    onMouseDown?: (event: PointerEvent) => void;
    onMouseMove?: (event: PointerEvent) => void;
    onMouseUp?: (event: PointerEvent) => void;
    onTouchStart?: (event: PointerEvent) => void;
    onTouchMove?: (event: PointerEvent) => void;
    onTouchEnd?: (event: PointerEvent) => void;
    onMouseEnter?: (event: PointerEvent) => void;
    onMouseLeave?: (event: PointerEvent) => void;
    onMouseOut?: (event: PointerEvent) => void;
    onWheel?: (event: PointerEvent) => void;
    touchAction?: string;
    clickRadius?: number;
    interactiveLayerIds?: string[];
    getCursor?: (state: ExtraState) => void;
    controller?: MapController;
}

export class InteractiveMap extends React.PureComponent<InteractiveMapProps> {
    getMap(): MapboxGL.Map;
    queryRenderedFeatures(geometry?: MapboxGL.PointLike | MapboxGL.PointLike[], parameters?: QueryRenderedFeaturesParams): Array<GeoJSON.Feature<GeoJSON.GeometryObject>>;
}

export default InteractiveMap;

// class EventManager from mjolnir.js
export type EventManager = any;

export interface MapContextProps {
    viewport?: WebMercatorViewport;
    map?: MapboxGL.Map;
    mapContainer: HTMLElement | null;
    onViewStateChange?: ViewStateChangeHandler;
    onViewportChange?: ViewportChangeHandler;
    isDragging: boolean;
    eventManager?: EventManager;
}

export const _MapContext: React.Context<MapContextProps>;

export interface BaseControlProps {
    captureScroll?: boolean;
    captureDrag?: boolean;
    captureClick?: boolean;
    captureDoubleClick?: boolean;
}

export class BaseControl<T extends BaseControlProps, S extends Element> extends React.PureComponent<T> {
    _containerRef: React.RefObject<S>;
    _context: MapContextProps;
}

export interface PopupProps extends BaseControlProps {
    className?: string;
    longitude: number;
    latitude: number;
    altitude?: number;
    offsetLeft?: number;
    offsetTop?: number;
    tipSize?: number;
    closeButton?: boolean;
    closeOnClick?: boolean;
    anchor?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right';
    dynamicPosition?: boolean;
    sortByDepth?: boolean;
    onClose?: () => void;
}

export class Popup extends BaseControl<PopupProps, HTMLDivElement> {}

export interface NavigationControlProps extends BaseControlProps {
    className?: string;
    onViewStateChange?: ViewStateChangeHandler;
    onViewportChange?: ViewportChangeHandler;
    showCompass?: boolean;
    showZoom?: boolean;
}

export class NavigationControl extends BaseControl<NavigationControlProps, HTMLDivElement> {}

export interface FullscreenControlProps extends BaseControlProps {
    className?: string;
    container?: HTMLElement | null;
}

export class FullscreenControl extends BaseControl<FullscreenControlProps, HTMLDivElement> {}

export interface GeolocateControlProps extends BaseControlProps {
    className?: string;
    positionOptions?: MapboxGL.PositionOptions;
    fitBoundsOptions?: MapboxGL.FitBoundsOptions;
    trackUserLocation?: boolean;
    showUserLocation?: boolean;
    onViewStateChange?: ViewStateChangeHandler;
    onViewportChange?: ViewportChangeHandler;
}

export class GeolocateControl extends BaseControl<GeolocateControlProps, HTMLDivElement> {}

export interface DragEvent {
    lngLat: [number, number];
    [key: string]: any;
}

export interface DraggableControlProps extends BaseControlProps {
    draggable?: boolean;
    onDrag?: (event: DragEvent) => void;
    onDragEnd?: (event: DragEvent) => void;
    onDragStart?: (event: DragEvent) => void;
}

export class DraggableControl<T extends DraggableControlProps> extends BaseControl<T, HTMLDivElement> {}

export interface MarkerProps extends DraggableControlProps {
    className?: string;
    longitude: number;
    latitude: number;
    offsetLeft?: number;
    offsetTop?: number;
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
    style?: React.CSSProperties;
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
    style?: React.CSSProperties;
}

export class SVGOverlay extends BaseControl<SVGOverlayProps, Element> {}
