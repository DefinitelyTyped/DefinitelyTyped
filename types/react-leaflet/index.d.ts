// Type definitions for react-leaflet 1.1
// Project: https://github.com/PaulLeCam/react-leaflet
// Definitions by: Dave Leaver <https://github.com/danzel>, David Schneider <https://github.com/davschne>, Yui T.<https://github.com/yuit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as Leaflet from 'leaflet';
import * as React from 'react';

// All events need to be lowercase so they don't collide with React.DOMAttributes<T>
// which already declares things with some of the same names

export type Children = React.ReactNode | React.ReactNode[];

export interface MapEvents {
    onclick?(event: Leaflet.MouseEvent): void;
    ondblclick?(event: Leaflet.MouseEvent): void;
    onmousedown?(event: Leaflet.MouseEvent): void;
    onmouseup?(event: Leaflet.MouseEvent): void;
    onmouseover?(event: Leaflet.MouseEvent): void;
    onmouseout?(event: Leaflet.MouseEvent): void;
    onmousemove?(event: Leaflet.MouseEvent): void;
    oncontextmenu?(event: Leaflet.MouseEvent): void;
    onfocus?(event: Leaflet.Event): void;
    onblur?(event: Leaflet.Event): void;
    onpreclick?(event: Leaflet.MouseEvent): void;
    onload?(event: Leaflet.Event): void;
    onunload?(event: Leaflet.Event): void;
    onviewreset?(event: Leaflet.Event): void;
    onmove?(event: Leaflet.Event): void;
    onmovestart?(event: Leaflet.Event): void;
    onmoveend?(event: Leaflet.Event): void;
    ondragstart?(event: Leaflet.Event): void;
    ondrag?(event: Leaflet.Event): void;
    ondragend?(event: Leaflet.DragEndEvent): void;
    onzoomstart?(event: Leaflet.Event): void;
    onzoomend?(event: Leaflet.Event): void;
    onzoomlevelschange?(event: Leaflet.Event): void;
    onresize?(event: Leaflet.ResizeEvent): void;
    onautopanstart?(event: Leaflet.Event): void;
    onlayeradd?(event: Leaflet.LayerEvent): void;
    onlayerremove?(event: Leaflet.LayerEvent): void;
    onbaselayerchange?(event: Leaflet.LayersControlEvent): void;
    onoverlayadd?(event: Leaflet.LayersControlEvent): void;
    onoverlayremove?(event: Leaflet.LayersControlEvent): void;
    onlocationfound?(event: Leaflet.LocationEvent): void;
    onlocationerror?(event: Leaflet.ErrorEvent): void;
    onpopupopen?(event: Leaflet.PopupEvent): void;
    onpopupclose?(event: Leaflet.PopupEvent): void;
}

export interface MarkerEvents {
    onclick?(event: Leaflet.MouseEvent): void;
    ondblclick?(event: Leaflet.MouseEvent): void;
    onmousedown?(event: Leaflet.MouseEvent): void;
    onmouseover?(event: Leaflet.MouseEvent): void;
    onmouseout?(event: Leaflet.MouseEvent): void;
    oncontextmenu?(event: Leaflet.MouseEvent): void;
    ondragstart?(event: Leaflet.Event): void;
    ondrag?(event: Leaflet.Event): void;
    ondragend?(event: Leaflet.DragEndEvent): void;
    onmove?(event: Leaflet.Event): void;
    onadd?(event: Leaflet.Event): void;
    onremove?(event: Leaflet.Event): void;
    onpopupopen?(event: Leaflet.PopupEvent): void;
    onpopupclose?(event: Leaflet.PopupEvent): void;
}

export interface TileLayerEvents {
    onloading?(event: Leaflet.Event): void;
    onload?(event: Leaflet.Event): void;
    ontileloadstart?(event: Leaflet.TileEvent): void;
    ontileload?(event: Leaflet.TileEvent): void;
    ontileunload?(event: Leaflet.TileEvent): void;
    ontileerror?(event: Leaflet.TileEvent): void;
}

export interface PathEvents {
    onclick?(event: Leaflet.MouseEvent): void;
    ondblclick?(event: Leaflet.MouseEvent): void;
    onmousedown?(event: Leaflet.MouseEvent): void;
    onmouseover?(event: Leaflet.MouseEvent): void;
    onmouseout?(event: Leaflet.MouseEvent): void;
    oncontextmenu?(event: Leaflet.MouseEvent): void;
    onadd?(event: Leaflet.Event): void;
    onremove?(event: Leaflet.Event): void;
    onpopupopen?(event: Leaflet.PopupEvent): void;
    onpopupclose?(event: Leaflet.PopupEvent): void;
}

export interface FeatureGroupEvents {
    onclick?(event: Leaflet.MouseEvent): void;
    ondblclick?(event: Leaflet.MouseEvent): void;
    onmouseover?(event: Leaflet.MouseEvent): void;
    onmouseout?(event: Leaflet.MouseEvent): void;
    oncontextmenu?(event: Leaflet.MouseEvent): void;
    onlayeradd?(event: Leaflet.LayerEvent): void;
    onlayerremove?(event: Leaflet.LayerEvent): void;
}

export interface LayersControlEvents {
    onbaselayerchange?(event: Leaflet.LayersControlEvent): void;
    onoverlayadd?(event: Leaflet.LayersControlEvent): void;
    onoverlayremove?(event: Leaflet.LayersControlEvent): void;
}

export type LeafletEvents = MapEvents
    & MarkerEvents
    & TileLayerEvents
    & PathEvents
    & FeatureGroupEvents
    & LayersControlEvents;

// Most react-leaflet components take two type parameters:
// - P : the component's props object
// - E : the corresponding Leaflet element

// These type parameters aren't needed for instantiating a component, but they are useful for
// extending react-leaflet classes.

export class MapComponent<P, E extends Leaflet.Class> extends React.Component<P, {}> {
    _leafletEvents: LeafletEvents;
    leafletElement: E;
    extractLeafletEvents(props: P): LeafletEvents;
    bindLeafletEvents(next: LeafletEvents, prev: LeafletEvents): LeafletEvents;
    fireLeafletEvent(type: string, data: any): void;
    getOptions(props: P): P;
}

export interface MapProps extends MapEvents, Leaflet.MapOptions, Leaflet.LocateOptions, Leaflet.FitBoundsOptions {
    animate?: boolean;
    bounds?: Leaflet.LatLngBoundsExpression;
    boundsOptions?: Leaflet.FitBoundsOptions;
    center?: Leaflet.LatLngExpression;
    children?: Children;
    className?: string;
    id?: string;
    maxBounds?: Leaflet.LatLngBoundsExpression;
    maxZoom?: number;
    minZoom?: number;
    style?: React.CSSProperties;
    useFlyTo?: boolean;
    zoom?: number;
}

export class Map extends MapComponent<MapProps, Leaflet.Map> {
    className?: string;
    container: HTMLDivElement;
    getChildContext(): { layerContainer: Leaflet.Map, map: Leaflet.Map };
    createLeafletElement(props: MapProps): Leaflet.Map;
    updateLeafletElement(fromProps: MapProps, toProps: MapProps): void;
    bindContainer(container: HTMLDivElement): void;
    shouldUpdateCenter(next: Leaflet.LatLngExpression, prev: Leaflet.LatLngExpression): boolean;
    shouldUpdateBounds(next: Leaflet.LatLngBoundsExpression, prev: Leaflet.LatLngBoundsExpression): boolean;
}

export interface PaneProps {
    name?: string;
    children?: Children;
    map?: Leaflet.Map;
    className?: string;
    style?: React.CSSProperties;
    pane?: string;
}
export interface PaneState {
    name?: string;
}
export class Pane extends React.Component<PaneProps, PaneState> {
    getChildContext(): { pane: string };
    createPane(props: PaneProps): void;
    removePane(): void;
    setStyle(arg: { style?: string, className?: string }): void;
    getParentPane(): HTMLElement | undefined;
    getPane(name: string): HTMLElement | undefined;
}

export interface MapLayerProps {
    children?: Children;
}
export interface LayerContainer {
    addLayer(layer: Leaflet.Layer): this;
    removeLayer(layer: number | Leaflet.Layer): this;
}
export class MapLayer<P extends MapLayerProps, E extends Leaflet.Class> extends MapComponent<P, E> {
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
    readonly layerContainer: LayerContainer | Leaflet.Map;
}

export interface GridLayerProps extends Leaflet.GridLayerOptions {
    children?: Children;
}
export class GridLayer<P extends GridLayerProps, E extends Leaflet.GridLayer> extends MapLayer<P, E> {}

export interface TileLayerProps extends TileLayerEvents, Leaflet.TileLayerOptions {
    children?: Children;
    url: string;
}
export class TileLayer extends GridLayer<TileLayerProps, Leaflet.TileLayer> { }

export interface WMSTileLayerProps extends TileLayerEvents, Leaflet.WMSOptions {
    children?: Children;
    url: string;
}
export class WMSTileLayer extends GridLayer<WMSTileLayerProps, Leaflet.TileLayer.WMS> { }

export interface ImageOverlayProps extends Leaflet.ImageOverlayOptions {
    bounds: Leaflet.LatLngBoundsExpression;
    children?: Children;
    url: string;
}
export class ImageOverlay<P extends ImageOverlayProps, E extends Leaflet.ImageOverlay> extends MapLayer<P, E> {
    getChildContext(): { popupContainer: E };
}

export interface LayerGroupProps {
    children?: Children;
}
export class LayerGroup extends MapLayer<LayerGroupProps, Leaflet.LayerGroup> {
    getChildContext(): { layerContainer: Leaflet.LayerGroup };
}

export interface MarkerProps extends MarkerEvents, Leaflet.MarkerOptions {
    children?: Children;
    position: Leaflet.LatLngExpression;
}
export class Marker extends MapLayer<MarkerProps, Leaflet.Marker> {
    getChildContext(): { popupContainer: Leaflet.Marker };
}

export interface PathProps extends PathEvents, Leaflet.PathOptions { }
export abstract class Path<P extends PathProps, E> extends MapLayer<P, E> {
    getChildContext(): { popupContainer: E };
    getPathOptions(props: P): Leaflet.PathOptions;
    setStyle(options: Leaflet.PathOptions): void;
    setStyleIfChanged(fromProps: P, toProps: P): void;
}

export interface CircleProps extends PathEvents, Leaflet.CircleMarkerOptions {
    center: Leaflet.LatLngExpression;
    children?: Children;
    radius: number;
}
export class Circle extends Path<CircleProps, Leaflet.Circle> { }

export interface CircleMarkerProps extends PathEvents, Leaflet.CircleMarkerOptions {
    center: Leaflet.LatLngExpression;
    children?: Children;
    radius: number;
}
export class CircleMarker extends Path<CircleMarkerProps, Leaflet.CircleMarker> { }

export interface FeatureGroupProps extends FeatureGroupEvents, Leaflet.PathOptions {
    children?: Children;
}
export class FeatureGroup extends Path<FeatureGroupProps, Leaflet.FeatureGroup> {
    getChildContext(): { layerContainer: Leaflet.FeatureGroup, popupContainer: Leaflet.FeatureGroup };
}

export interface GeoJSONProps extends FeatureGroupEvents, Leaflet.GeoJSONOptions {
    children?: Children;
    data: GeoJSON.GeoJsonObject;
    style?: Leaflet.StyleFunction;
}
export class GeoJSON<P extends GeoJSONProps, E extends Leaflet.GeoJSON> extends Path<P, E> { }

export interface PolylineProps extends PathEvents, Leaflet.PolylineOptions {
    children?: Children;
    positions: Leaflet.LatLngExpression[] | Leaflet.LatLngExpression[][];
}
export class Polyline extends Path<PolylineProps, Leaflet.Polyline> { }

export interface PolygonProps extends PathEvents, Leaflet.PolylineOptions {
    children?: Children;
    popupContainer?: Leaflet.FeatureGroup;
    positions: Leaflet.LatLngExpression[] | Leaflet.LatLngExpression[][] | Leaflet.LatLngExpression[][][];
}
export class Polygon extends Path<PolygonProps, Leaflet.Polygon> { }

export interface RectangleProps extends PathEvents, Leaflet.PolylineOptions {
    children?: Children;
    bounds: Leaflet.LatLngBoundsExpression;
    popupContainer?: Leaflet.FeatureGroup;
}
export class Rectangle extends Path<RectangleProps, Leaflet.Rectangle> { }

export interface PopupProps extends Leaflet.PopupOptions {
    children?: Children;
    position?: Leaflet.LatLngExpression;
}
export class Popup extends MapComponent<PopupProps, Leaflet.Popup> {
    onPopupOpen(arg: { popup: Leaflet.Popup }): void;
    onPopupClose(arg: { popup: Leaflet.Popup }): void;
    renderPopupContent(): void;
    removePopupContent(): void;
}

export interface TooltipProps extends Leaflet.TooltipOptions {
    children?: Children;
}
export class Tooltip extends MapComponent<TooltipProps, Leaflet.Tooltip> {
    onTooltipOpen(arg: { tooltip: Leaflet.Tooltip }): void;
    onTooltipClose(arg: { tooltip: Leaflet.Tooltip }): void;
    renderTooltipContent(): void;
    removeTooltipContent(): void;
}

export type MapControlProps = Leaflet.ControlOptions;
export class MapControl<P extends MapControlProps, E extends Leaflet.Control> extends React.Component<P, {}> {
    leafletElement: E;
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
}

export type AttributionControlProps = Leaflet.Control.AttributionOptions;
export class AttributionControl<P extends AttributionControlProps, E extends Leaflet.Control.Attribution> extends MapControl<P, E> { }

export interface LayersControlProps extends LayersControlEvents, Leaflet.Control.LayersOptions {
    baseLayers?: Leaflet.Control.LayersObject;
    children?: Children;
    overlays?: Leaflet.Control.LayersObject;
}
export class LayersControl extends MapControl<AttributionControlProps, Leaflet.Control.Layers> { }

export namespace LayersControl {
    interface BaseControlledLayerProps {
        checked?: boolean;
        children?: Children;
        removeLayer?(layer: Leaflet.Layer): void;
        removeLayerControl?(layer: Leaflet.Layer): void;
    }
    interface ControlledLayerProps extends BaseControlledLayerProps {
        addBaseLayer?(layer: Leaflet.Layer, name: string, checked: boolean): void;
        addOverlay?(layer: Leaflet.Layer, name: string, checked: boolean): void;
        name: string;
    }
    class ControlledLayer<P extends BaseControlledLayerProps> extends React.Component<P, {}> {
        layer?: Leaflet.Layer;
        getChildContext(): { layerContainer: LayerContainer };
        addLayer(): void;
        removeLayer(layer: Leaflet.Layer): void;
    }
    class BaseLayer extends ControlledLayer<ControlledLayerProps> { }
    class Overlay extends ControlledLayer<ControlledLayerProps> { }
}

export type ScaleControlProps = Leaflet.Control.ScaleOptions;
export class ScaleControl<P extends ScaleControlProps, E extends Leaflet.Control.Scale> extends MapControl<P, E> { }

export type ZoomControlProps = Leaflet.Control.ZoomOptions;
export class ZoomControl extends MapControl<ZoomControlProps, Leaflet.Control.Zoom> { }
