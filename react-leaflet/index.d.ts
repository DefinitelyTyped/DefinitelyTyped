// Type definitions for react-leaflet 1.0
// Project: https://github.com/PaulLeCam/react-leaflet
// Definitions by: Dave Leaver <https://github.com/danzel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as Leaflet from 'leaflet';
import * as React from 'react';

// All events need to be lowercase so they don't collide with React.DOMAttributes<T>
// which already declares things with some of the same names

interface LeafletLayerEvents {
    onbaselayerchange?: (event: Leaflet.LayersControlEvent) => void;
    onoverlayadd?: (event: Leaflet.LayersControlEvent) => void;
    onoverlayremove?: (event: Leaflet.LayersControlEvent) => void;
    onlayeradd?: (event: Leaflet.LayerEvent) => void;
    onlayerremove?: (event: Leaflet.LayerEvent) => void;
}
interface LeafletMapStateChangeEvents {
    onzoomlevelschange?: (event: Leaflet.Event) => void;
    onresize?: (event: Leaflet.ResizeEvent) => void;
    onunload?: (event: Leaflet.Event) => void;
    onviewreset?: (event: Leaflet.Event) => void;
    onload?: (event: Leaflet.Event) => void;
    onzoomstart?: (event: Leaflet.Event) => void;
    onmovestart?: (event: Leaflet.Event) => void;
    onzoom?: (event: Leaflet.Event) => void;
    onmove?: (event: Leaflet.Event) => void;
    onzoomend?: (event: Leaflet.Event) => void;
    onmoveend?: (event: Leaflet.Event) => void;
}
interface LeafletPopupEvents {
    onpopupopen?: (event: Leaflet.PopupEvent) => void;
    onpopupclose?: (event: Leaflet.PopupEvent) => void;
    onautopanstart?: (event: Leaflet.Event) => void;
}
interface LeafletTooltipEvents {
    ontooltipopen?: (event: Leaflet.TooltipEvent) => void;
    ontooltipclose?: (event: Leaflet.TooltipEvent) => void;
}
interface LeafletLocationEvents {
    onlocationerror?: (event: Leaflet.ErrorEvent) => void;
    onlocationfound?: (event: Leaflet.LocationEvent) => void;
}
interface LeafletInteractionEvents {
    onclick?: (event: Leaflet.MouseEvent) => void;
    ondblclick?: (event: Leaflet.MouseEvent) => void;
    onmousedown?: (event: Leaflet.MouseEvent) => void;
    onmouseup?: (event: Leaflet.MouseEvent) => void;
    onmouseover?: (event: Leaflet.MouseEvent) => void;
    onmouseout?: (event: Leaflet.MouseEvent) => void;
    onmousemove?: (event: Leaflet.MouseEvent) => void;
    oncontextmenu?: (event: Leaflet.MouseEvent) => void;
    onkeypress?: (event: Leaflet.KeyboardEvent) => void;
    onpreclick?: (event: Leaflet.MouseEvent) => void;
}
interface LeafletOtherEvents {
    onzoomanim?: (event: Leaflet.ZoomAnimEvent) => void;
}
interface LeafletDraggingEvents {
    ondragstart?: (event: Leaflet.Event) => void;
    onmovestart?: (event: Leaflet.Event) => void;
    ondrag?: (event: Leaflet.Event) => void;
    ondragend?: (event: Leaflet.DragEndEvent) => void;
    onmoveend?: (event: Leaflet.Event) => void;
}


interface MapProps extends React.HTMLProps<Map>,
    LeafletLayerEvents, LeafletMapStateChangeEvents, LeafletPopupEvents, LeafletTooltipEvents, LeafletLocationEvents, LeafletInteractionEvents, LeafletOtherEvents, Leaflet.MapOptions {
    animate?: boolean;
    bounds?: Leaflet.LatLngBoundsExpression;
    boundsOptions?: Leaflet.FitBoundsOptions;
    className?: string;
    style?: React.CSSProperties;
    useFlyTo?: boolean;

    id?: string;
}
declare type Map = React.ComponentClass<MapProps>;
declare const Map: Map;
interface MapInstance extends React.Component<MapProps, {}> {
    leafletElement: Leaflet.Map;
}


interface PaneProps {
    name?: string;
    style?: React.CSSProperties;
    className?: string;
}
declare const Pane: React.ComponentClass<PaneProps>;


// There is no Layer class, these are the base props for all layers on the map
interface LayerProps extends LeafletInteractionEvents {
    onadd?: (event: Leaflet.Event) => void;
    onremove?: (event: Leaflet.Event) => void;

    // Popup events
    onpopupopen?: (event: Leaflet.PopupEvent) => void;
    onpopupclose?: (event: Leaflet.PopupEvent) => void;

    // Tooltip events
    ontooltipopen?: (event: Leaflet.TooltipEvent) => void;
    ontooltipclose?: (event: Leaflet.TooltipEvent) => void;
}


interface MarkerProps extends LayerProps, LeafletDraggingEvents {
    position: Leaflet.LatLngExpression;
    draggable?: boolean;
    icon?: Leaflet.Icon;
    zIndexOffset?: number;
    opacity?: number;
}
declare const Marker: React.ComponentClass<MarkerProps>;
interface MarkerInstance extends React.Component<MarkerProps, {}> {
    leafletElement: Leaflet.Marker;
}

interface PopupProps extends LayerProps, Leaflet.PopupOptions {
    position?: Leaflet.LatLngExpression;
}
declare const Popup: React.ComponentClass<PopupProps>;

// tslint:disable-next-line:no-empty-interface
interface TooltipProps extends LayerProps, Leaflet.TooltipOptions { }
declare const Tooltip: React.ComponentClass<TooltipProps>;

interface GridLayerProps extends LayerProps {
    opacity?: number;
    zIndex?: number;

    onloading?: (event: Leaflet.Event) => void;
    ontileunload?: (event: Leaflet.TileEvent) => void;
    ontileloadstart?: (event: Leaflet.TileEvent) => void;
    ontileerror?: (event: Leaflet.TileErrorEvent) => void;
    ontileload?: (event: Leaflet.TileEvent) => void;
    onload?: (event: Leaflet.Event) => void;
}
declare const GridLayer: React.ComponentClass<GridLayerProps>;

interface TileLayerProps extends GridLayerProps, Leaflet.TileLayerOptions {
    url: string;
}
declare const TileLayer: React.ComponentClass<TileLayerProps>;

interface ImageOverlayProps extends LayerProps, LeafletInteractionEvents {
    url: string;
    opacity?: string;
}
declare const ImageOverlay: React.ComponentClass<ImageOverlayProps>;

interface WMSTileLayerProps extends TileLayerProps {
    url: string;
}
declare const WMSTileLayer: React.ComponentClass<WMSTileLayerProps>;

// Path is an abstract class
// tslint:disable-next-line:no-empty-interface
interface PathProps extends LeafletLayerEvents, LeafletInteractionEvents, Leaflet.PathOptions {
}


interface CircleProps extends PathProps {
    center: Leaflet.LatLngExpression;
    radius?: number;
}
declare const Circle: React.ComponentClass<CircleProps>;

interface CircleMarkerProps extends PathProps {
    center: Leaflet.LatLngExpression;
    radius?: number;
}
declare const CircleMarker: React.ComponentClass<CircleMarkerProps>;

interface PolylineProps extends PathProps {
    positions: Leaflet.LatLngExpression[] | Leaflet.LatLngExpression[][];
}
declare const Polyline: React.ComponentClass<PolylineProps>;

interface PolygonProps extends PathProps {
    positions: Leaflet.LatLngExpression[] | Leaflet.LatLngExpression[][] | Leaflet.LatLngExpression[][][];
}
declare const Polygon: React.ComponentClass<PolygonProps>;

interface RectangleProps extends PathProps {
    bounds: Leaflet.LatLngBoundsExpression;
}
declare const Rectangle: React.ComponentClass<RectangleProps>;


// tslint:disable-next-line:no-empty-interface
interface LayerGroupProps extends LayerProps { }
declare const LayerGroup: React.ComponentClass<LayerGroupProps>;

// tslint:disable-next-line:no-empty-interface
interface FeatureGroupProps extends LayerGroupProps, Leaflet.PathOptions { }
declare const FeatureGroup: React.ComponentClass<FeatureGroupProps>;

interface GeoJSONProps extends FeatureGroupProps {
    data: GeoJSON.GeoJsonObject;
}
declare const GeoJSON: React.ComponentClass<GeoJSONProps>;



interface AttributionControlProps {
    position?: Leaflet.ControlPosition;
}
declare const AttributionControl: React.ComponentClass<AttributionControlProps>;

interface LayersControlProps {
    position?: Leaflet.ControlPosition;
}
declare const LayersControl: React.ComponentClass<LayersControlProps> & { BaseLayer: LayersControl.BaseLayer, Overlay: LayersControl.Overlay };

declare namespace LayersControl {
    interface LayersControlLayerProps {
        name: string;
        checked?: boolean;
    }
    type BaseLayer = React.ComponentClass<LayersControlLayerProps>;
    type Overlay = React.ComponentClass<LayersControlLayerProps>;
}

interface ScaleControlProps {
    position: Leaflet.ControlPosition;
}
declare const ScaleControl: React.ComponentClass<ScaleControlProps>;

interface ZoomControlProps {
    position: Leaflet.ControlPosition;
}
declare const ZoomControl: React.ComponentClass<ZoomControlProps>;
