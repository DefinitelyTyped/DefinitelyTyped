// Type definitions for react-leaflet 1.0
// Project: https://github.com/PaulLeCam/react-leaflet
// Definitions by: Dave Leaver <https://github.com/danzel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="geojson" />

import * as Leaflet from 'leaflet';
import * as React from 'react';
export = ReactLeaflet;

declare namespace ReactLeaflet {
    //All events need to be lowercase so they don't collide with React.DOMAttributes<T>
    //which already declares things with some of the same names

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


    interface MapProps extends React.HTMLProps<Map>, LeafletLayerEvents, LeafletMapStateChangeEvents, LeafletPopupEvents, LeafletTooltipEvents, LeafletLocationEvents, LeafletInteractionEvents, LeafletOtherEvents, Leaflet.MapOptions {
        animate?: boolean
        bounds?: Leaflet.LatLngBoundsExpression;
        boundsOptions?: Leaflet.FitBoundsOptions;
        className?: string;
        style?: React.CSSProperties;
        useFlyTo?: boolean;

        id?: string;
    }
    interface Map extends React.ComponentClass<MapProps> { }
    const Map: Map;
    interface MapInstance extends React.Component<MapProps, {}> {
        leafletElement: Leaflet.Map;
    }


    interface PaneProps {
        name?: string;
        style?: React.CSSProperties;
        className?: string;
    }
    interface Pane extends React.ComponentClass<PaneProps> { }
    const Pane: Pane;


    //There is no Layer class, these are the base props for all layers on the map
    interface LayerProps {
        onadd?: (event: Leaflet.Event) => void;
        onremove?: (event: Leaflet.Event) => void;

        //Popup events
        onpopupopen?: (event: Leaflet.PopupEvent) => void;
        onpopupclose?: (event: Leaflet.PopupEvent) => void;

        //Tooltip events
        ontooltipopen?: (event: Leaflet.TooltipEvent) => void;
        ontooltipclose?: (event: Leaflet.TooltipEvent) => void;
    }


    interface MarkerProps extends LayerProps, LeafletInteractionEvents, LeafletDraggingEvents {
        position: Leaflet.LatLngExpression;
        draggable?: boolean;
        icon?: Leaflet.Icon;
        zIndexOffset?: number;
        opacity?: number;
    }
    interface Marker extends React.ComponentClass<MarkerProps> { }
    const Marker: Marker;
    interface MarkerInstance extends React.Component<MarkerProps, {}> {
        leafletElement: Leaflet.Marker;
    }

    interface PopupProps extends LayerProps, Leaflet.PopupOptions {
        position?: Leaflet.LatLngExpression;
    }
    interface Popup extends React.ComponentClass<PopupProps> { }
    const Popup: Popup;

    interface TooltipProps extends LayerProps, Leaflet.TooltipOptions { }
    interface Tooltip extends React.ComponentClass<TooltipProps> { }
    const Tooltip: Tooltip;

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
    interface GridLayer extends React.ComponentClass<GridLayerProps> { }
    const GridLayer: GridLayer;

    interface TileLayerProps extends GridLayerProps, Leaflet.TileLayerOptions {
        url: string;
    }
    interface TileLayer extends React.ComponentClass<TileLayerProps> { }
    const TileLayer: TileLayer;

    interface ImageOverlayProps extends LayerProps, LeafletInteractionEvents {
        url: string;
        opacity?: string;
    }
    interface ImageOverlay extends React.ComponentClass<ImageOverlayProps> { }
    const ImageOverlay: ImageOverlay;

    interface WMSTileLayerProps extends TileLayerProps {
        url: string;
    }
    interface WMSTileLayer extends React.ComponentClass<WMSTileLayerProps> { }
    const WMSTileLayer: WMSTileLayer;

    //Path is an abstract class
    interface PathProps extends LeafletLayerEvents, LeafletInteractionEvents, Leaflet.PathOptions {
    }


    interface CircleProps extends PathProps {
        center: Leaflet.LatLngExpression;
        radius?: number;
    }
    interface Circle extends React.ComponentClass<CircleProps> { }
    const Circle: Circle;

    interface CircleMarkerProps extends PathProps {
        center: Leaflet.LatLngExpression;
        radius?: number;
    }
    interface CircleMarker extends React.ComponentClass<CircleMarkerProps> { }
    const CircleMarker: CircleMarker;

    interface PolylineProps extends PathProps {
        positions: Array<Leaflet.LatLngExpression> | Array<Array<Leaflet.LatLngExpression>>;
    }
    interface Polyline extends React.ComponentClass<PolylineProps> { }
    const Polyline: Polyline;

    interface PolygonProps extends PathProps {
        positions: Array<Leaflet.LatLngExpression> | Array<Array<Leaflet.LatLngExpression>> | Array<Array<Array<Leaflet.LatLngExpression>>>;
    }
    interface Polygon extends React.ComponentClass<PolygonProps> { }
    const Polygon: Polygon;

    interface RectangleProps extends PathProps {
        bounds: Leaflet.LatLngBoundsExpression;
    }
    interface Rectangle extends React.ComponentClass<RectangleProps> { }
    const Rectangle: Rectangle;


    interface LayerGroupProps extends LayerProps { }
    interface LayerGroup extends React.ComponentClass<LayerGroupProps> { }
    const LayerGroup: LayerGroup;

    interface FeatureGroupProps extends LayerGroupProps, Leaflet.PathOptions { }
    interface FeatureGroup extends React.ComponentClass<FeatureGroupProps> { }
    const FeatureGroup: FeatureGroup;

    interface GeoJSONProps extends FeatureGroupProps {
        data: GeoJSON.GeoJsonObject;
    }
    interface GeoJSON extends React.ComponentClass<GeoJSONProps> { }
    const GeoJSON: GeoJSON;



    interface AttributionControlProps {
        position?: Leaflet.ControlPosition;
    }
    interface AttributionControl extends React.ComponentClass<AttributionControlProps> { }
    const AttributionControl: AttributionControl;

    interface LayersControlProps {
        position?: Leaflet.ControlPosition;
    }
    interface LayersControl extends React.ComponentClass<LayersControlProps> { }
    const LayersControl: LayersControl & { BaseLayer: LayersControl.BaseLayer, Overlay: LayersControl.Overlay };

    namespace LayersControl {
        interface LayersControlLayerProps {
            name: string;
            checked?: boolean;
        }
        interface BaseLayer extends React.ComponentClass<LayersControlLayerProps> { }
        //TODO const BaseLayer: BaseLayer;
        interface Overlay extends React.ComponentClass<LayersControlLayerProps> { }
        //TODO const Overlay: Overlay;
    }

    interface ScaleControlProps {
        position: Leaflet.ControlPosition;
    }
    interface ScaleControl extends React.ComponentClass<ScaleControlProps> { }
    const ScaleControl: ScaleControl;

    interface ZoomControlProps {
        position: Leaflet.ControlPosition;
    }
    interface ZoomControl extends React.ComponentClass<ZoomControlProps> { }
    const ZoomControl: ZoomControl;
}