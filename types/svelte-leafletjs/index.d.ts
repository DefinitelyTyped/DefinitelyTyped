// Type definitions for svelte-leafletjs 0.8
// Project: https://github.com/ngyewch/svelte-leaflet
// Definitions by: Kyle Hensel <https://github.com/k-yle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.2

import type { SvelteComponentTyped } from 'svelte';
import * as L from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import { CreateSvelteEventMap } from './util';

export type MapEvents = CreateSvelteEventMap<ReactLeaflet.MapEvents>;
export type MarkerEvents = CreateSvelteEventMap<ReactLeaflet.MarkerEvents>;
export type TileLayerEvents = CreateSvelteEventMap<ReactLeaflet.TileLayerEvents>;
export type PathEvents = CreateSvelteEventMap<ReactLeaflet.PathEvents>;

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
    },
    PathEvents,
    never
> {
    getGeoJSON(): L.GeoJSON;
}

export class Icon extends SvelteComponentTyped<
    {
        options?: L.IconOptions;
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
        options?: L.ImageOverlayOptions;
        opacity?: number;
        zIndex?: number;
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
    },
    PathEvents,
    never
> {
    getPolyline(): L.Polyline;
}

export class Popup extends SvelteComponentTyped<
    {
        options?: L.PopupOptions;
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
    },
    never,
    never
> {
    getScaleControl(): L.Control.Scale;
}

export class Tooltip extends SvelteComponentTyped<
    {
        options?: L.TooltipOptions;
    },
    PathEvents,
    never
> {
    getTooltip(): L.Tooltip;
}
