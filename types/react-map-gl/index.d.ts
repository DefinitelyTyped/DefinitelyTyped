// Type definitions for react-map-gl 3.2
// Project: https://github.com/uber/react-map-gl#readme
// Definitions by: Robert Imig <https://github.com/rimig>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from "react";
import * as MapboxGL from "mapbox-gl";
import * as GeoJSON from "geojson";

export type EasingFunction = (t: number) => number;

export interface Viewport {
  latitude: number;
  longitude: number;
  zoom: number;
  isDragging?: boolean;
  bearing?: number;
  pitch?: number;
  startBearing?: number;
  startDragLngLat?: number[];
  startPitch?: number;
  transitionDuration?: number;
  transitionInterpolator?: TransitionInterpolator;
  transitionInterruption?: number;
  transitionEasing?: EasingFunction;
}

export interface MapError {
  message: string;
}

export interface MapRequest {
  url: string;
  headers: {};
  credentials: string;
}

export interface StaticMapProps extends Viewport {
    /**
     *  Mapbox API access token for MapboxGL.
     *  Required when using Mapbox vector tiles/styles Mapbox WebGL context creation option.
     *  Useful when you want to export the canvas as a PNG
     */
    mapboxApiAccessToken: string;

    /** The Mapbox style. A string url or a MapboxGL style object (regular JS object or Immutable.Map). */
    mapStyle?: string | {}; // TODO can also be immutable map

    /** The width of the map. */
    width: number;
    /** The height of the map. */
    height: number;
    /** The latitude of the center of the map. */

    /** Altitude of the viewport camera. Default 1.5 "screen heights" */
    altitude?: number; // Note: Non-public API, see https://github.com/mapbox/mapbox-gl-js/issues/1137

    /**
     *  Whether the map is visible.
     *  Unmounting and re-mounting a Mapbox instance is known to be costly.
     *  This option offers a way to hide a map using CSS style.
     */
    visible?: boolean;

    /**
     * Equivalent to Mapbox's preserveDrawingBuffer option.
     * If true, the map's canvas can be exported to a PNG using map.getCanvas().toDataURL().
     */
    preserveDrawingBuffer?: boolean;

    /** Show attribution control or not. */
    attributionControl?: boolean;

    /**
     * If mapStyle is assigned an Immutable object, when the prop changes,
     * StaticMap can diff between the two values and call the appropriate Mapbox API such as
     * addLayer, removeLayer, setStyle, setData, etc.
     *
     * This allows apps to update data sources and layer styles efficiently.
     * In use cases such as animation or dynamic showing/hiding layers, style diffing prevents the map
     * from reloading and flickering when the map style changes.
     *
     * There are known issues with style diffing. As stopgap, use this option to prevent style diffing.
     */
    preventStyleDiffing?: boolean;

    /**
     * This prop is experimental.
     * If true, when the map component is unmounted, instead of calling remove on the Mapbox map instance, save it for later reuse.
     * This will avoid repeatedly creating new Mapbox map instances if possible.
     * Applications that frequently mount and unmount maps may try this prop to help work around a mapbox-gl resource leak issue that can lead to a browser crash in certain situations.
     */
    resuseMaps?: boolean;

    /**
     * A callback run when the map emits a load event.
     */
    onLoad?: () => void;

    /**
     * A callback run when the map emits an error event.
     */
    onError?: (e: MapError) => void;

    transformRequest?: () => MapRequest;
}

export interface QueryRenderedFeaturesParams {
  layers?: string[];
  filter?: any[];
}

export class StaticMap extends React.Component<StaticMapProps> {
    /**
     * Returns the Mapbox instance if initialized. The Map instance will have full access to MapboxGL's API.
     */
    getMap(): MapboxGL.Map;

    /**
     * Use Mapbox's queryRenderedFeatures API to find features at point or in a bounding box.
     * If the parameters argument is not specified, only queries the layers with the interactive property in the layer style.
     */
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

export interface InteractiveMapProps extends StaticMapProps {
    /** Max zoom level */
    maxZoom?: number;
    /** Min zoom level */
    minZoom?: number;
    /** Max pitch in degrees */
    maxPitch?: number;
    /** Min pitch in degrees */
    minPitch?: number;

    /** Scroll to zoom */
    scrollZoom?: boolean;
    /** Drag to pan */
    dragPan?: boolean;
    /** Drag to rotate */
    dragRotate?: boolean;
    /** Double click to zoom */
    doubleClickZoom?: boolean;
    /** Enable multitouch zoom. */
    touchZoom?: boolean;
    /** Enable multitouch rotate. */
    touchRotate?: boolean;
    /** Radius to detect features around a clicked point */
    clickRadius?: number;

    mapControls?: {
      events: string[];
      handleEvent: (event: MapEvent, context: any) => void;
    };

    visibilityConstraints?: {
      minZoom: number;
      maxZoom: number;
      minPitch: number;
      maxPitch: number;
    };

    /**
     * Callback that is fired when the user interacted with the map.
     * The object passed to the callback contains viewport properties such as longitude, latitude, zoom etc.
     *
     * If the map is intended to be interactive, the app use this prop to listen to map updates and update the props accordingly.
     */
    onViewportChange?: (viewport: Viewport) => void;

    /**
     * Called when the map is hovered over.
     * event - The mouse event.
     * lngLat - The coordinates of the pointer
     * features - The features under the pointer, using Mapbox's
     * queryRenderedFeatures API:
     * https://www.mapbox.com/mapbox-gl-js/api/#Map#queryRenderedFeatures
     * To make a layer interactive, set the `interactive` property in the
     * layer style to `true`. See Mapbox's style spec
     * https://www.mapbox.com/mapbox-gl-style-spec/#layer-interactive
     */
    onHover?: (event: MapEvent, lngLat: number[], features: any) => void;

    /**
     * Called when the map is clicked.
     * queryRenderedFeatures API:
     * https://www.mapbox.com/mapbox-gl-js/api/#Map#queryRenderedFeatures
     * To make a layer interactive, set the `interactive` property in the
     * layer style to `true`. See Mapbox's style spec
     * https://www.mapbox.com/mapbox-gl-style-spec/#layer-interactive
     */
    onClick?: (event: MapEvent, lngLat: number[], features: any) => void;

    /** Accessor that returns a cursor style to show interactive state */
    getCursor?: (state: InteractiveMapState) => void;

    onTransitionStart?: () => void;
    onTransitionInterrupt?: () => void;
    onTransitionEnd?: () => void;
}

export class InteractiveMap extends React.Component<InteractiveMapProps> {
    /** Returns the Mapbox Map Instance */
    getMap(): MapboxGL.Map;

    /**
     * Use Mapbox's queryRenderedFeatures API to find features at point or in a bounding box.
     * If the parameters argument is not specified, only queries the layers with the interactive property in the layer style.
     */
    queryRenderedFeatures(geometry?: MapboxGL.PointLike | MapboxGL.PointLike[], parameters?: QueryRenderedFeaturesParams): Array<GeoJSON.Feature<GeoJSON.GeometryObject>>;
}

/**
 *
 * React Map Overlays
 *
 */

export interface BaseControlProps {
    /** Event handling */
    captureScroll?: boolean;
    /** Stop map pan & rotate */
    captureDrag?: boolean;
    /** Stop map click */
    captureClick?: boolean;
    /** Stop map double click */
    captureDoubleClick?: boolean;
}

export class BaseControl<T extends BaseControlProps> extends React.Component<T> { }

/**
 * Allows applications to overlay data on top of maps using a HTML container.
 */
export class HTMLOverlay extends BaseControl<HTMLOverlayProps> { }

export interface HTMLRedrawOptions {
    /** width {Number} - width of the viewport */
    width: number;
    /** height {Number} - height of the viewport */
    height: number;
    /** project {Function} - get screen position [x, y] from geo coordinates [lng, lat] */
    project: (lnglat: number[]) => number[];
    /** unproject {Function} - get geo coordinates [lng, lat] from screen position [x, y] */
    unproject: (xy: number[]) => number[];
}

export interface HTMLOverlayProps extends BaseControlProps {
    /**
     * Called every time the map updates.
     */
    redraw: (opts: HTMLRedrawOptions) => void;
    /** Additional css styles of the div container. */
    style?: React.CSSProperties;
}

/**
 * Allows applications to overlay data on top of maps using a canvas.
 */
export class CanvasOverlay extends BaseControl<CanvasOverlayProps> { }

export interface CanvasRedrawOptions extends HTMLRedrawOptions {
    /** ctx {CanvasRenderingContext2D} - rendering context of the canvas */
    ctx: CanvasRenderingContext2D;
}

export interface CanvasOverlayProps extends BaseControlProps {
    /**
     * Called every time the map updates.
     */
    redraw: (opts: CanvasRedrawOptions) => void;
}

/**
 * Allows applications to overlay data on top of maps using a SVG container.
 */
export class SVGOverlay extends BaseControl<SVGOverlayProps> { }

// tslint:disable-next-line:no-empty-interface
export interface SVGRedrawOptions extends HTMLRedrawOptions { }

export interface SVGOverlayProps extends BaseControlProps {
    /**
     * Called every time the map updates.
     */
    redraw: (opts: SVGRedrawOptions) => void;
    /** Additional css styles of the svg container. */
    style?: React.CSSProperties;
}

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
    onViewportChange: (viewport: Viewport) => void;
    showZoom?: boolean;
    showCompass?: boolean;
  }

  export class NavigationControl extends BaseControl<NavigationControlProps> {}

  export class TransitionInterpolator {}

  export class LinearInterpolator extends TransitionInterpolator {
    constructor(transitionProps?: string[]);
  }

  export class FlyToInterpolator extends TransitionInterpolator {}

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

  export interface MapState {
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
    startPanLngLat?: [number, number];
    startZoomLngLat?: [number, number];
    startBearing?: number;
    startPitch?: number;
    startZoom?: number;
  }

  export interface Options {
    // TODO(deprecate): remove this when `onChangeViewport` gets deprecated
    onChangeViewport?: (viewport: Viewport) => void;
    // TODO(deprecate): remove this when `touchZoomRotate` gets deprecated
    touchZoomRotate?: boolean;
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

  export class MapControls {
    events: string[];
    handleEvent: (event: MapControlEvent) => void;
    getMapState(overrides: Partial<MapState>): MapState;
    setOptions(options: Options): void;
    setState(newState: MapState): void;
    updateViewport(newMapState: MapState, extraProps: any, extraState: InteractiveMapState): void;
  }

  export function autobind(obj: any): void;

  export interface Experimental {
    MapControls: MapControls;
    autobind: typeof autobind;
  }

  export const experimental: Experimental;
