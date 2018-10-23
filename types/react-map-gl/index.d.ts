// Type definitions for react-map-gl 3.3
// Project: https://github.com/uber/react-map-gl#readme
// Definitions by: Robert Imig <https://github.com/rimig>
//                 Fabio Berta <https://github.com/fnberta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as MapboxGL from 'mapbox-gl';
import * as GeoJSON from 'geojson';

export interface Viewport {
    latitude: number;
    longitude: number;
    zoom: number;
    bearing?: number;
    pitch?: number;
}

export interface MapError {
    message: string;
}

export interface MapRequest {
    url: string;
    headers?: { [index: string]: string };
    credentials?: string;
}

export interface MapboxProps extends Partial<Viewport> {
    container?: {};
    mapboxApiAccessToken?: string;
    attributionControl?: boolean;
    preserveDrawingBuffer?: boolean;
    onLoad?: () => void;
    onError?: (e: MapError) => void;
    reuseMaps?: boolean;
    reuseMap?: boolean;
    transformRequest?: (url?: string, resourceType?: string) => MapRequest;

    mapStyle?: string | {};

    width: number;
    height: number;

    viewState?: Viewport;

    altitude?: number; // Note: Non-public API, see https://github.com/mapbox/mapbox-gl-js/issues/1137
}

export interface StaticMapProps extends MapboxProps {
    preventStyleDiffing?: boolean;
    visible?: boolean;
    className?: string;
}

export interface QueryRenderedFeaturesParams {
    layers?: string[];
    filter?: any[];
}

export class StaticMap extends React.Component<StaticMapProps> {
    getMap(): MapboxGL.Map;
    queryRenderedFeatures(geometry?: MapboxGL.PointLike | MapboxGL.PointLike[], parameters?: QueryRenderedFeaturesParams): Array<GeoJSON.Feature<GeoJSON.GeometryObject>>;
}

export interface InteractiveMapState {
    isDragging: boolean;
    isHovering: boolean;
}

export interface MapEvent {
    lngLat: [number, number];
    features: Array<{}>;
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

export interface BaseMapControls {
    events: string[];
    handleEvent(event: MapControlEvent): void;
}

export type EasingFunction = (t: number) => number;

export enum TRANSITION_EVENTS {
    BREAK = 1,
    SNAP_TO_END = 2,
    IGNORE = 3
}

export class TransitionInterpolator {}

export class LinearInterpolator extends TransitionInterpolator {
    constructor(transitionProps?: string[]);
}

export class FlyToInterpolator extends TransitionInterpolator {}

export interface ViewStateChangeInfo {
  viewState: Viewport;
}

export interface InteractiveMapProps extends StaticMapProps {
    maxZoom?: number;
    minZoom?: number;
    maxPitch?: number;
    minPitch?: number;

    onViewportChange?: (viewport: Viewport) => void;
    onViewStateChange?: (info: ViewStateChangeInfo) => void;

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

    onHover?: (event: MapEvent) => void;
    onClick?: (event: MapEvent) => void;

    onContextMenu?: (event: MapEvent) => void;

    touchAction?: string;

    clickRadius?: number;

    getCursor?: (state: InteractiveMapState) => void;

    visibilityConstraints?: {
        minZoom?: number;
        maxZoom?: number;
        minPitch?: number;
        maxPitch?: number;
    };

    mapControls?: BaseMapControls;
}

export class InteractiveMap extends React.Component<InteractiveMapProps> {
    getMap(): MapboxGL.Map;
    queryRenderedFeatures(geometry?: MapboxGL.PointLike | MapboxGL.PointLike[], parameters?: QueryRenderedFeaturesParams): Array<GeoJSON.Feature<GeoJSON.GeometryObject>>;
}

export default InteractiveMap;

export interface BaseControlProps {
    captureScroll?: boolean;
    captureDrag?: boolean;
    captureClick?: boolean;
    captureDoubleClick?: boolean;
}

export class BaseControl<T extends BaseControlProps> extends React.Component<T> {}

export interface MarkerProps extends BaseControlProps {
    className?: string;
    longitude: number;
    latitude: number;
    offsetLeft?: number;
    offsetTop?: number;
}

export class Marker extends BaseControl<MarkerProps> {}

export interface PopupProps extends BaseControlProps {
    className?: string;
    longitude: number;
    latitude: number;
    offsetLeft?: number;
    offsetTop?: number;
    tipSize?: number;
    closeButton?: boolean;
    closeOnClick?: boolean;
    anchor?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right';
    dynamicPosition?: boolean;
    onClose?: () => void;
}

export class Popup extends BaseControl<PopupProps> {}

export interface NavigationControlProps extends BaseControlProps {
    className?: string;
    onViewStateChange: (info: ViewStateChangeInfo) => void;
    onViewportChange: (viewport: Viewport) => void;
    showCompass?: boolean;
    showZoom?: boolean;
}

export class NavigationControl extends BaseControl<NavigationControlProps> {}

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

export class HTMLOverlay extends BaseControl<HTMLOverlayProps> {}

export interface CanvasRedrawOptions extends HTMLRedrawOptions {
    ctx: CanvasRenderingContext2D;
}

export interface CanvasOverlayProps extends BaseControlProps {
    redraw: (opts: CanvasRedrawOptions) => void;
}

export class CanvasOverlay extends BaseControl<CanvasOverlayProps> {}

export type SVGRedrawOptions = HTMLRedrawOptions;

export interface SVGOverlayProps extends BaseControlProps {
    redraw: (opts: SVGRedrawOptions) => void;
    style?: React.CSSProperties;
}

export class SVGOverlay extends BaseControl<SVGOverlayProps> {}

export namespace experimental {
    interface Options {
        // TODO(deprecate): remove this when `onChangeViewport` gets deprecated
        onChangeViewport?: (viewport: Viewport) => void;
        // TODO(deprecate): remove this when `touchZoomRotate` gets deprecated
        touchZoomRotate?: boolean;

        onViewStateChange?: (info: ViewStateChangeInfo) => void;
        onViewportChange?: (viewport: Viewport) => void;
        onStateChange?: (state: MapState) => void;
        eventManager?: any;
        scrollZoom?: boolean;
        dragPan?: boolean;
        dragRotate?: boolean;
        doubleClickZoom?: boolean;
        touchZoom?: boolean;
        touchRotate?: boolean;
        keyboard?: boolean;
    }

    class MapState implements Viewport {
        width: number;
        height: number;
        latitude: number;
        longitude: number;
        zoom: number;
        bearing?: number;
        pitch?: number;
        altitude?: number;

        maxZoom?: number;
        minZoom?: number;
        maxPitch?: number;
        minPitch?: number;

        transitionDuration?: number;
        transitionInterpolator?: TransitionInterpolator;
        transitionInterruption?: TRANSITION_EVENTS;
        transitionEasing?: EasingFunction;

        startPanLngLat?: [number, number];
        startZoomLngLat?: [number, number];
        startBearing?: number;
        startPitch?: number;
        startZoom?: number;
    }

    class MapControls implements BaseMapControls {
        events: string[];

        handleEvent(event: MapControlEvent): void;
        getMapState(overrides: Partial<MapState>): MapState;
        setOptions(options: Options): void;
        setState(newState: MapState): void;
        updateViewport(newMapState: MapState, extraProps: any, extraState: InteractiveMapState): void;
    }
}
