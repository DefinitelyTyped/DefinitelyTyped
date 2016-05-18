// Type definitions for Mapbox GL JS v0.18.0
// Project: https://github.com/mapbox/mapbox-gl-js
// Definitions by: Dominik Bruderer <https://github.com/dobrud>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../geojson/geojson.d.ts" />

declare namespace mapboxgl {
	let accessToken: string;

    /**
     * Map
     */
    export class Map extends Evented {
        constructor(options?: MapboxOptions);

		addControl(control: Control): mapboxgl.Map;

		addClass(klass: string, options?: mapboxgl.StyleOptions): mapboxgl.Map;

		removeClass(klass: string, options?: mapboxgl.StyleOptions): mapboxgl.Map;

		setClasses(klasses: string[], options?: mapboxgl.StyleOptions): mapboxgl.Map;

		hasClass(klass: string): boolean;

		getClasses(): string[];

		resize(): mapboxgl.Map;

		getBounds(): mapboxgl.LngLatBounds;

		setMaxBounds(lnglatbounds?: mapboxgl.LngLatBounds|number[][]): mapboxgl.Map;

		setMinZoom(minZoom: number): mapboxgl.Map;

		setMaxZoom(maxZoom: number): mapboxgl.Map;

		project(lnglat: mapboxgl.LngLat): number[]; // returns x and y coordinates

		unproject(point: number[]): mapboxgl.LngLat;

		queryRenderedFeatures(pointOrBox?: mapboxgl.Point|mapboxgl.Point[]|number[][], params?: {layers?: string[], filter?: any[]}): GeoJSON.Feature<GeoJSON.GeometryObject>[];

		querySourceFeatures(sourceID: string, params: {sourceLayer?: string, filter?: any[]}): Object[];

		setStyle(style: Object): mapboxgl.Map;

		getStyle(): Object;

		addSource(id: string, source: Object): mapboxgl.Map;

		removeSource(id: string): mapboxgl.Map;

		getSource(id: string): mapboxgl.Map;

		addLayer(layer: Object, before?: string): mapboxgl.Map;

		removeLayer(id: string): mapboxgl.Map;

        getLayer(id: string): Object;

		setFilter(layer: string, filter: any[]): mapboxgl.Map;

		setLayerZoomRange(layerId: string, minzoom: number, maxzoom: number): mapboxgl.Map;

		getFilter(layer: string): any[];

		setPaintProperty(layer: string, name: string, value: any, klass?: string): mapboxgl.Map;

		getPaintProperty(layer: string, name: string, klass?: string): any;

		setLayoutProperty(layer: string, name: string, value: any): mapboxgl.Map;

		getLayoutProperty(layer: string, name: string, klass?: string): any;

		getContainer(): HTMLElement;

		getCanvasContainer(): HTMLElement;

		getCanvas(): HTMLElement;

		loaded(): boolean;

		remove(): void;

		onError(): void;

		showTileBoundaries: boolean;

		showCollisionBoxes: boolean;

		repaint: boolean;

		getCenter(): mapboxgl.LngLat;

		setCenter(center: LngLat, eventData?: mapboxgl.EventData): mapboxgl.Map;

		panBy(offset: number[], options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): mapboxgl.Map;

		panTo(lnglat: mapboxgl.LngLat, options?: mapboxgl.AnimationOptions, eventdata?: mapboxgl.EventData): mapboxgl.Map;

		getZoom(): number;

		setZoom(zoom: number, eventData?: mapboxgl.EventData): mapboxgl.Map;

		zoomTo(zoom: number, options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): mapboxgl.Map;

		zoomIn(options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): mapboxgl.Map;

		zoomOut(options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): mapboxgl.Map;

		getBearing(): number;

		setBearing(bearing: number, eventData?: mapboxgl.EventData): mapboxgl.Map;

		rotateTo(bearing: number, options?: mapboxgl.AnimationOptions, eventData?: EventData): mapboxgl.Map;

		resetNorth(options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): mapboxgl.Map;

		snapToNorth(options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): mapboxgl.Map;

		getPitch(): number;

		setPitch(pitch: number, eventData?: EventData): mapboxgl.Map;

		fitBounds(bounds: mapboxgl.LngLatBounds|number[][], options: {linear?: boolean, easing?: Function, padding?: number, maxZoom?: number}): mapboxgl.Map;

		jumpTo(options: mapboxgl.CameraOptions, eventData?: mapboxgl.EventData): mapboxgl.Map;

		easeTo(options: mapboxgl.CameraOptions|mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): mapboxgl.EventData;

		flyTo(options: mapboxgl.FlyToOptions, eventData?: mapboxgl.EventData): mapboxgl.Map;

		stop(): mapboxgl.Map;
	}

    export interface MapboxOptions {
        touchZoomRotate?: boolean;

        center?: mapboxgl.LngLat|number[];

        zoom?: number;

        minZoom?: number;

        maxZoom?: number;

        style?: Object|string;

        hash?: boolean;

        interactive?: boolean;

        bearingSnap?: number;

        bearing?: number;

        classes?: string[];

        attributionControl?: boolean;

        container?: string|Element;

        preserveDrawingBuffer?: boolean;

        maxBounds?: mapboxgl.LngLatBounds|number[][];

        scrollZoom?: boolean;

        boxZoom?: boolean;

        dragRotate?: boolean;

        dragPan?: boolean;

        keyboard?: boolean;

        doubleClickZoom?: boolean;

        failIfMayorPerformanceCaveat?: boolean;
    }

    /**
     * Control
     */
	export class Control {
		addTo(map: mapboxgl.Map): mapboxgl.Control;

		remove(): mapboxgl.Control;
	}

	/**
	 * BoxZoomHandler
	 */
	export class BoxZoomHandler {
		constructor(map: mapboxgl.Map);

		isEnabled(): boolean;

		isActive(): boolean;

		enable(): void;

		disable(): void;
	}

	/**
	 * ScrollZoomHandler
	 */
	export class ScrollZoomHandler {
		constructor(map: mapboxgl.Map);

		isEnabled(): boolean;

		enable(): void;

		disable(): void;
	}

	/**
	 * DragPenHandler
	 */
	export class DragPenHandler {
		constructor(map: mapboxgl.Map);

		isEnabled(): boolean;

		isActive(): boolean;

		enable(): void;

		disable(): void;
	}

	/**
	 * DragRotateHandler
	 */
	export class DragRotateHandler {
		constructor(map: mapboxgl.Map);

		isEnabled(): boolean;

		isActive(): boolean;

		enable(): void;

		disable(): void;
	}

	/**
	 * KeyboardHandler
	 */
	export class KeyboardHandler {
		constructor(map: mapboxgl.Map);

		isEnabled(): boolean;

		enable(): void;

		disable(): void;
	}

	/**
	 * DoubleClickZoomHandler
	 */
	export class DoubleClickZoomHandler {
		constructor(map: mapboxgl.Map);

		isEnabled(): boolean;

		enable(): void;

		disable(): void;
	}

	/**
	 * TouchZoomRotateHandler
	 */
	export class TouchZoomRotateHandler {
		constructor(map: mapboxgl.Map);

		isEnabled(): boolean;

		enable(): void;

		disable(): void;

		disableRotation(): void;

		enableRotation(): void;
	}

    /**
     * ControlOptions
     */
    export interface ControlOptions {
        position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    }

    /**
     * Navigation
     */
    export class Navigation {
        constructor(options?: mapboxgl.ControlOptions);
	}

    /**
     * Geolocate
     */
    export class Geolocate {
        constructor(options?: mapboxgl.ControlOptions);
	}

    /**
     * Attribution
     */
    export class Attribution {
        constructor(options?: mapboxgl.ControlOptions);
	}

    /**
     * Popup
     */
    export class Popup {
        constructor(options?: mapboxgl.PopupOptions);

        addTo(map: mapboxgl.Map): mapboxgl.Popup;

		remove(): mapboxgl.Popup;

		getLngLat(): mapboxgl.LngLat;

		setLngLat(lnglat: mapboxgl.LngLat|number[]): mapboxgl.Popup;

		setText(text: string): mapboxgl.Popup;

		setHTML(html: string): mapboxgl.Popup;

		setDOMContent(htmlNode: Node): mapboxgl.Popup;
	}

    export interface PopupOptions {
        closeButton?: boolean;

        closeOnClick?: boolean;

        anchor?: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    }

    /**
     * GeoJSONSource
     */
    export class GeoJSONSource {
        constructor(options?: mapboxgl.GeoJSONSourceOptions);

		setData(data: GeoJSON.FeatureCollection<GeoJSON.GeometryObject>|String): mapboxgl.GeoJSONSource;
	}

    export interface GeoJSONSourceOptions {
        data?: GeoJSON.FeatureCollection<GeoJSON.GeometryObject>|string;

        maxzoom?: number;

        buffer?: number;

        tolerance?: number;

        cluster?: number;

        clusterRadius?: number;

        clusterMaxZoom?: number;
    }

    /**
     * VideoSource
     */
    export class VideoSource {
        constructor(options?: mapboxgl.VideoSourceOptions);

		getVideo(): Object;

		setCoordinates(coordinates: number[][]): mapboxgl.VideoSource;
	}

    export interface VideoSourceOptions {
        urls?: string[];

        coordinates?: number[][];
    }

    /**
     * ImageSource
     */
    export class ImageSource {
        constructor(options?: mapboxgl.ImageSourceOptions);

		setCoordinates(coordinates: number[][]): mapboxgl.ImageSource;
	}

    export interface ImageSourceOptions {
        urls?: string[];

        coordinates?: number[][];
    }

    /**
     * LngLat
     */
    export class LngLat {
        constructor(lng: number, lat: number);

		wrap(): mapboxgl.LngLat;

		toArray(): number[];

		toString(): string;

		static convert(input: number[]|mapboxgl.LngLat): mapboxgl.LngLat;
	}

    /**
     * LngLatBounds
     */
    export class LngLatBounds {
        constructor(sw?: LngLat, ne?: LngLat);

		extend(obj: mapboxgl.LngLat|mapboxgl.LngLatBounds): mapboxgl.LngLatBounds;

		getCenter(): mapboxgl.LngLat;

		getSouthWest(): mapboxgl.LngLat;

		getNorthEast(): mapboxgl.LngLat;

		getNorthWest(): mapboxgl.LngLat;

		getSouthEast(): mapboxgl.LngLat;

		getWest(): number;

		getSouth(): number;

		getEast(): number;

		getNorth(): number;

		toArray(): number[];

		toString(): string;

		static convert(input: mapboxgl.LngLatBounds|number[]|number[][]): mapboxgl.LngLatBounds;
	}

    /**
     * Point
     */
    // Todo: Pull out class to seperate definition for Module "point-geometry"
    export class Point {
        constructor(options?: Object);

		clone(): Point;

		add(p: number): Point;

		sub(p: number): Point;

		mult(k: number): Point;

		div(k: number): Point;

		rotate(a: number): Point;

		matMult(m: number): Point;

		unit(): Point;

		perp(): Point;

		round(): Point;

		mag(): number;

		equals(): boolean;

		dist(): number;

		distSqr(): number;

		angle(): number;

		angleTo(): number;

		angleWidth(): number;

		angleWidthSep(): number;
	}

    /**
     * Evented
     */
	export class Evented {
		on(type: string, listener: Function): mapboxgl.Evented;

		off(type?: string|any, listener?: Function): mapboxgl.Evented;

		once(type: string, listener: Function): mapboxgl.Evented;

		fire(type: string, data?: mapboxgl.EventData|Object): mapboxgl.Evented;

		listens(type: string): boolean;
	}

	/**
	 * StyleOptions
	 */
	export interface StyleOptions {
		options?: any;
	}

	/**
	 * EventData
	 */
	export class EventData {
		originalEvent: Event;
		point: mapboxgl.Point;
		lngLat: mapboxgl.LngLat;
	}

	/**
	 * AnimationOptions
	 */
	export interface AnimationOptions {
		duration?: number;
		easing?: Function;
		offset?: number[];
		animate?: boolean;
	}

	/**
	 * CameraOptions
	 */
	export interface CameraOptions {
		center?: mapboxgl.LngLat|number[];
		zoom?: number;
		bearing?: number;
		pitch?: number;
		around?: mapboxgl.LngLat;
	}

	/**
	 * FlyToOptions
	 */
	export interface FlyToOptions extends AnimationOptions, CameraOptions {
		curve?: number;
		minZoom?: number;
		speed?: number;
		screenSpeed?: number;
		easing?: Function;
	}

	/**
	 * MapEvent
	 */
	export interface MapEvent {
		webglcontextlost?: {originalEvent: Event};
		webglcontextrestored?: void;
		render?: void;
		contextmenu?: {data: mapboxgl.EventData};
		dblclick?: {data: mapboxgl.EventData};
		click?: {data: mapboxgl.EventData};
		touchcancel?: {data: mapboxgl.EventData};
		touchmove?: {data: mapboxgl.EventData};
		touchend?: {data: mapboxgl.EventData};
		touchstart?: {data: mapboxgl.EventData};
		mousemove?: {data: mapboxgl.EventData};
		mouseup?: {data: mapboxgl.EventData};
		mousedown?: {data: mapboxgl.EventData};
		moveend?: {data: mapboxgl.EventData};
		move?: {data: mapboxgl.EventData};
		movestart?: {data: mapboxgl.EventData};
		load?: void;
		zoomend?: {data: mapboxgl.EventData};
		zoom?: {data: mapboxgl.EventData};
		zoomstart?: {data: mapboxgl.EventData};
		boxzoomcancel?: {data: mapboxgl.EventData};
		boxzoomstart?: {data: mapboxgl.EventData};
		boxzoomend?: {originalEvent: Event, boxZoomBounds: mapboxgl.LngLatBounds};
		rotate?: {data: mapboxgl.EventData};
		rotatestart?: {data: mapboxgl.EventData};
		rotateend?: {data: mapboxgl.EventData};
		drag?: {data: mapboxgl.EventData};
		dragend?: {data: mapboxgl.EventData};
		pitch?: {data: mapboxgl.EventData};

	}
}

declare module 'mapbox-gl' {
	export = mapboxgl;
}
