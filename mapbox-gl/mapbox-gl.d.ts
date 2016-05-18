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
    export class Map {
        constructor(options?: MapboxOptions);
    }

    export interface Map extends Evented {

		addControl(control: Control): mapboxgl.Map;

		addClass(klass: string, options: Object): mapboxgl.Map;

		removeClass(klass: string, options: Object): mapboxgl.Map;

		setClasses(klasses: string[], options: Object): mapboxgl.Map;

		hasClass(klass: string): boolean;

		getClasses(): string[];

		resize(): mapboxgl.Map;

		getBounds(): LngLatBounds;

		setMaxBounds(lnglatbounds: LngLatBounds|number[][]|any): mapboxgl.Map;

		setMinZoom(minZoom: number): mapboxgl.Map;

		setMaxZoom(maxZoom: number): mapboxgl.Map;

		project(lnglat: LngLat): Object;

		unproject(point: number[]): LngLat;

		queryRenderedFeatures(pointOrBox?: mapboxgl.Point|mapboxgl.Point[]|number[][], params?: {layers?: string[], filter?: any[]}): GeoJSON.Feature<GeoJSON.GeometryObject>[];

		querySourceFeatures(sourceID: string, params: Object): Object[];

		setStyle(style: Object): mapboxgl.Map;

		getStyle(): Object;

		addSource(id: string, source: Object): mapboxgl.Map;

		removeSource(id: string): mapboxgl.Map;

		getSource(id: string): mapboxgl.Map;

		addLayer(layer: StyleLayer|Object, before?: string): mapboxgl.Map;

		removeLayer(id: string): mapboxgl.Map;  // Todo: add throws Error

        getLayer(id: string): Object;

		setFilter(layer: string, filter: any[]): mapboxgl.Map;

		setLayerZoomRange(layerId: string, minzoom: number, maxzoom: number): mapboxgl.Map;

		getFilter(layer: string): any[];

		setPaintProperty(layer: string, name: string, value: any, klass?: string): mapboxgl.Map;

		getPaintProperty(layer: string, name: string, klass?: string): any;

		setLayoutProperty(layer: string, name: string, value: any): mapboxgl.Map;

		getLayoutProperty(layer: string, name: string): any;

		getContainer(): HTMLElement;

		getCanvasContainer(): HTMLElement;

		getCanvas(): HTMLElement;

		loaded(): boolean;

		remove(): void;

		panTo(lnglat: LngLat, options?: any, eventdata?: any): mapboxgl.Map; // Todo: create types for AnimationOptions and Eventdata

		onError(): void;
	}

    export interface MapboxOptions {
        touchZoomRotate?: boolean;

        center?: LngLat|number[];

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

        container?: string|HTMLElement;

        preserveDrawingBuffer?: boolean;

        maxBounds?: LngLatBounds|number[][];

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
	export interface Control {
		addTo(map: mapboxgl.Map): Control;

		remove(): Control;
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
        constructor(options?: ControlOptions);
    }

    export interface Navigation {
		onAdd(map: mapboxgl.Map): HTMLElement; // Todo: HTMLElement return type is only an assertion
	}

    /**
     * Geolocate
     */
    export class Geolocate {
        constructor(options?: ControlOptions);
    }

    export interface Geolocate {
		onAdd(map: mapboxgl.Map): HTMLElement; // Todo: HTMLElement return type is only an assertion
	}

    /**
     * Attribution
     */
    export class Attribution {
        constructor(options?: ControlOptions);
    }

    export interface Attribution {
		onAdd(map: mapboxgl.Map): HTMLElement; // Todo: HTMLElement return type is only an assertion
	}

    /**
     * Popup
     */
    export class Popup {
        constructor(options?: PopupOptions);
    }

    export interface Popup {
        addTo(map: mapboxgl.Map): Popup;

		remove(): Popup;

		getLngLat(): LngLat;

		setLngLat(lnglat: LngLat|number[]): Popup;

		setText(text: string): Popup;

		setHTML(html: string): Popup;

		setDOMContent(htmlNode: Node): Popup;
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
        constructor(options?: GeoJSONSourceOptions);
    }

    export interface GeoJSONSource {
		setData(data: Object|String): GeoJSONSource;

		onAdd(map: mapboxgl.Map): void;

		loaded(): boolean;

		update(transform: any): void; // Todo: Parameter type not documented yet

        reload(): void;

		serialize(): Object;

		// Todo: variables
		// Todo: - getVisibleCoordinates
		// Todo: - getTitle
		// Todo: - queryRenderedFeatures
		// Todo: - querySourceFeatures
		// Todo: - redoPlacement
		setData(data: GeoJSON.FeatureCollection<GeoJSON.GeometryObject>|String): mapboxgl.GeoJSONSource;
	}

    export interface GeoJSONSourceOptions {
        data?: Object|string;
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
        constructor(options?: VideoSourceOptions);
    }

    export interface VideoSource {
		getVideo(): VideoSource;

		onAdd(map: mapboxgl.Map): void;

		setCoordinates(coordinates: number[]): VideoSource;

		loaded(): boolean;

		update(): void;

		reload(): void;

		prepare(): void;

		getVisibleCoordinates(): number[];

		getTitle(): string;

		serialize(): Object;
	}

    export interface VideoSourceOptions {
        urls?: string[];

        coordinates?: number[][];
    }

    /**
     * ImageSource
     */
    export class ImageSource {
        constructor(options?: ImageSourceOptions);
    }

    export interface ImageSource {
		onAdd(map: mapboxgl.Map): void;

		setCoordinates(coordinates: number[]): ImageSource;

		loaded(): boolean;

		update(): void;

		reload(): void;

		prepare(): void;

		getVisibleCoordinates(): number[]|any[];

		getTitle(): string;

		serialize(): Object;
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
    }

    export interface LngLat {
		wrap(): LngLat;

		toArray(): number[];

		toString(): string;

		convert(input: number[]|LngLat): LngLat;
	}

    /**
     * LngLatBounds
     */
    export class LngLatBounds {
        constructor(sw: LngLat, ne: LngLat);
    }

    export interface LngLatBounds {
		extend(obj: LngLat|LngLatBounds): LngLatBounds;

		getCenter(): LngLat;

		getSouthWest(): LngLat;

		getNorthEast(): LngLat;

		getNorthWest(): LngLat;

		getSouthEast(): LngLat;

		getWest(): LngLat;

		getSouth(): LngLat;

		getEast(): LngLat;

		getNorth(): LngLat;

		toArray(): number[];

		toString(): string;

		convert(input: LngLatBounds|number[]|number[][]): LngLatBounds;
	}

    /**
     * Point
     */
    // Todo: Pull out interface to seperate definition for Module "point-geometry"
    export class Point {
        constructor(options?: Object);
    }

    export interface Point {

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
	export interface Evented {
		on(type: string, fn: Function): Evented;

		off(type: string|any, fn: Function): Evented;

		once(type: string, fn: Function): Evented;

		fire(type: string, data: Object): Evented;

		listens(type: string): boolean;
	}

    /**
     * StyleLayer
     */
    export class StyleLayer {
        constructor(layer: any, refLayer: any); // Todo: not yet specified in documentation
    }

    export interface StyleLayer {
		set(layer: any, refLayer: any): void; // Todo: not yet specified in documentation
		setLayoutProperty(name: any, value: any): void; // Todo: not yet specified in documentation
		getLayoutProperty(name: any): Object; // Todo: not yet specified in documentation
		getLayoutValue(name: any, globalProperties: any, featureProperties: any): any; // Todo: not yet specified in documentation
		setPaintProperty(name: any, value: any, klass: any): void; // Todo: not yet specified in documentation
		setPaintProperty(name: any, klass: any): Object; // Todo: not yet specified in documentation
		getPaintValue(name: any, globalProperties: any, featureProperties: any): Object; // Todo: not yet specified in documentation
		isPaintValueFeatureConstant(name: any): boolean; // Todo: not yet specified in documentation
		isHidden(zoom: any): boolean; // Todo: not yet specified in documentation
		updatePaintTransitions(classes: any, options: any, globalOptions: any, animationLoop: any): void; // Todo: not yet specified in documentation
		updatePaintTransition(name: any, classes: any, options: any, globalOptions: any, animationLoop: any): void; // Todo: not yet specified in documentation
		recalculate(zoom: any, zoomHistory: any): void; // Todo: not yet specified in documentation
		serialize(options: any): Object; // Todo: not yet specified in documentation
	}
}

declare module 'mapbox-gl' {
	export = mapboxgl;
}
