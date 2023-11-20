import * as L from "leaflet";
import type { SvelteComponentTyped } from "svelte";

export interface MapEvents {
    click: L.LeafletMouseEvent;
    dblclick: L.LeafletMouseEvent;
    mousedown: L.LeafletMouseEvent;
    mouseup: L.LeafletMouseEvent;
    mouseover: L.LeafletMouseEvent;
    mouseout: L.LeafletMouseEvent;
    mousemove: L.LeafletMouseEvent;
    contextmenu: L.LeafletMouseEvent;
    focus: L.LeafletEvent;
    blur: L.LeafletEvent;
    preclick: L.LeafletMouseEvent;
    load: L.LeafletEvent;
    unload: L.LeafletEvent;
    viewreset: L.LeafletEvent;
    move: L.LeafletEvent;
    movestart: L.LeafletEvent;
    moveend: L.LeafletEvent;
    dragstart: L.LeafletEvent;
    drag: L.LeafletEvent;
    dragend: L.DragEndEvent;
    zoomstart: L.LeafletEvent;
    zoom: L.LeafletEvent;
    zoomend: L.LeafletEvent;
    zoomlevelschange: L.LeafletEvent;
    resize: L.ResizeEvent;
    autopanstart: L.LeafletEvent;
    layeradd: L.LayerEvent;
    layerremove: L.LayerEvent;
    baselayerchange: L.LayersControlEvent;
    overlayadd: L.LayersControlEvent;
    overlayremove: L.LayersControlEvent;
    locationfound: L.LocationEvent;
    locationerror: L.ErrorEvent;
    popupopen: L.PopupEvent;
    popupclose: L.PopupEvent;
}

export interface MarkerEvents {
    click: L.LeafletMouseEvent;
    dblclick: L.LeafletMouseEvent;
    mousedown: L.LeafletMouseEvent;
    mouseover: L.LeafletMouseEvent;
    mouseout: L.LeafletMouseEvent;
    contextmenu: L.LeafletMouseEvent;
    dragstart: L.LeafletEvent;
    drag: L.LeafletEvent;
    dragend: L.DragEndEvent;
    move: L.LeafletEvent;
    add: L.LeafletEvent;
    remove: L.LeafletEvent;
    popupopen: L.PopupEvent;
    popupclose: L.PopupEvent;
}

export interface TileLayerEvents {
    loading: L.LeafletEvent;
    load: L.LeafletEvent;
    tileloadstart: L.TileEvent;
    tileload: L.TileEvent;
    tileunload: L.TileEvent;
    tileerror: L.TileEvent;
}

export interface PathEvents {
    click: L.LeafletMouseEvent;
    dblclick: L.LeafletMouseEvent;
    mousedown: L.LeafletMouseEvent;
    mouseover: L.LeafletMouseEvent;
    mouseout: L.LeafletMouseEvent;
    contextmenu: L.LeafletMouseEvent;
    add: L.LeafletEvent;
    remove: L.LeafletEvent;
    popupopen: L.PopupEvent;
    popupclose: L.PopupEvent;
}

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
