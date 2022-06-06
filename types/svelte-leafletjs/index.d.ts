// Type definitions for svelte-leafletjs 0.8
// Project: https://github.com/ngyewch/svelte-leaflet
// Definitions by: Kyle Hensel <https://github.com/k-yle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.2

import type { SvelteComponentTyped } from 'svelte';
import * as L from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';

/** Given a string `onX`, this returns `X` */
type RemoveOn<T> = T extends `on${infer P}` ? P : never;

/** This is technically not required since we know every property is a function, but TS doesn't know that */
type AssertIsFunction<T> = T extends (...args: any) => any ? T : never;

/**
 * Helper to transform the event maps defined in `@types/react-leaflet`.
 * This makes `@types/react-leaflet` the source of truth for the events in `@types/svelte-leafletjs`.
 *
 * ```ts
 * // original
 * type ReactEventMap = {
 *   onsomething?(e: SomeEvent): void
 * }
 *
 * // converted
 * type SvelteEventMap = {
 *   something: SomeEvent;
 * }
 * ```
 */
type CreateSvelteEventMap<ReactEventMap> = {
    [EventName in keyof ReactEventMap as RemoveOn<EventName>]-?: NonNullable<
        Parameters<AssertIsFunction<NonNullable<ReactEventMap[EventName]>>>[0]
    >;
};

export type MapEvents = CreateSvelteEventMap<ReactLeaflet.MapEvents>;
export type MarkerEvents = CreateSvelteEventMap<ReactLeaflet.MarkerEvents>;
export type TileLayerEvents = CreateSvelteEventMap<ReactLeaflet.TileLayerEvents>;
export type PathEvents = CreateSvelteEventMap<ReactLeaflet.PathEvents>;

type MapEventKeys = Array<keyof MapEvents>;
type MarkerEventKeys = Array<keyof MarkerEvents>;
type TileLayerEventKeys = Array<keyof TileLayerEvents>;
type PathEventKeys = Array<keyof PathEvents>;

export namespace LeafletContext {
    interface Map {
        getMap(): L.Map;
    }

    interface Circle {
        getLayer(): L.Circle;
    }

    interface CircleMarker {
        getLayer(): L.CircleMarker;
    }

    interface Rectangle {
        getLayer(): L.Rectangle;
    }

    interface GeoJSON {
        getLayer(): L.GeoJSON;
    }

    interface Marker {
        getLayer(): L.Marker;
        getMarker(): L.Marker;
    }

    interface Polygon {
        getPolygon(): L.Polygon;
    }

    interface Polyline {
        getPolyline(): L.Polyline;
    }
}

export class LeafletMap extends SvelteComponentTyped<
    {
        options?: L.MapOptions;
        events?: MapEventKeys;
        getMap?(): L.Map;
    },
    MapEvents,
    never
> {
    getMap(): L.Map;
}

export class TileLayer extends SvelteComponentTyped<
    {
        url: string;
        wms?: boolean;
        opacity?: number;
        zIndex?: number;
        options?: L.TileLayerOptions;
        events?: TileLayerEventKeys;
        getTileLayer?(): L.TileLayer;
    },
    TileLayerEvents,
    never
> {
    getTileLayer(): L.TileLayer;
}

export class Circle extends SvelteComponentTyped<
    L.PathOptions & {
        latLng: L.LatLngExpression;
        radius?: number;
        options?: L.CircleMarkerOptions;
        events?: PathEventKeys;
        getCircle?(): L.Circle;
    },
    PathEvents,
    never
> {
    getCircle(): L.Circle;
}

export class CircleMarker extends SvelteComponentTyped<
    L.PathOptions & {
        latLng: L.LatLngExpression;
        radius?: number;
        options?: L.CircleMarkerOptions;
        events?: MarkerEventKeys;
        getCircleMarker?(): L.CircleMarker;
    },
    MarkerEvents,
    never
> {
    getCircleMarker(): L.CircleMarker;
}

export class Rectangle extends SvelteComponentTyped<
    L.PathOptions & {
        latLngBounds: L.LatLngBoundsExpression;
        options?: L.PolylineOptions;
        events?: PathEventKeys;
        getRectangle?(): L.Rectangle;
    },
    PathEvents,
    never
> {
    getRectangle(): L.Rectangle;
}

export class GeoJSON extends SvelteComponentTyped<
    {
        url: string;
        options?: L.GeoJSONOptions;
        events?: PathEventKeys;
        getGeoJSON?(): L.GeoJSON;
    },
    PathEvents,
    never
> {
    getGeoJSON(): L.GeoJSON;
}

export class Icon extends SvelteComponentTyped<
    {
        options?: L.IconOptions;
        getIcon?(): L.Icon;
    },
    never,
    never
> {
    getIcon(): L.Icon;
}

export class ImageOverlay extends SvelteComponentTyped<
    {
        imageUrl: string;
        bounds: L.LatLngBoundsExpression;
        opacity?: number;
        zIndex?: number;
        options?: L.ImageOverlayOptions;
        events?: PathEventKeys;
        getImageOverlay?(): L.ImageOverlay;
    },
    PathEvents,
    never
> {
    getImageOverlay(): L.ImageOverlay;
}

export class Marker extends SvelteComponentTyped<
    {
        latLng: L.LatLngExpression;
        zIndexOffset?: number;
        icon?: L.Icon;
        opacity?: number;
        options?: L.MarkerOptions;
        events?: MarkerEventKeys;
        getMarker?(): L.Marker;
    },
    MarkerEvents,
    never
> {
    getMarker(): L.Marker;
}

export class Polygon extends SvelteComponentTyped<
    L.PathOptions & {
        latLngs: L.LatLngExpression[] | L.LatLngExpression[][] | L.LatLngExpression[][][];
        options?: L.PolylineOptions;
        events?: PathEventKeys;
        getPolygon?(): L.Polygon;
    },
    PathEvents,
    never
> {
    getPolygon(): L.Polygon;
}

export class Polyline extends SvelteComponentTyped<
    L.PathOptions & {
        latLngs: L.LatLngExpression[] | L.LatLngExpression[][];
        options?: L.PolylineOptions;
        events?: PathEventKeys;
        getPolyline?(): L.Polyline;
    },
    PathEvents,
    never
> {
    getPolyline(): L.Polyline;
}

export class Popup extends SvelteComponentTyped<
    {
        options?: L.PopupOptions;
        events?: PathEventKeys;
        getPopup?(): L.Popup;
    },
    PathEvents,
    never
> {
    getPopup(): L.Popup;
}

export class ScaleControl extends SvelteComponentTyped<
    {
        position?: L.ControlPosition;
        options?: L.Control.ScaleOptions;
        getScaleControl?(): L.Control.Scale;
    },
    never,
    never
> {
    getScaleControl(): L.Control.Scale;
}

export class Tooltip extends SvelteComponentTyped<
    {
        options?: L.TooltipOptions;
        events?: PathEventKeys;
        getTooltip?(): L.Tooltip;
    },
    PathEvents,
    never
> {
    getTooltip(): L.Tooltip;
}

export {};
