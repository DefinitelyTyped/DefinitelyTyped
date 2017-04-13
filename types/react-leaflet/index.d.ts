// Type definitions for react-leaflet 1.1
// Project: https://github.com/PaulLeCam/react-leaflet
// Definitions by: Dave Leaver <https://github.com/danzel>, David Schneider <https://github.com/davschne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as Leaflet from 'leaflet';
import * as React from 'react';

// All events need to be lowercase so they don't collide with React.DOMAttributes<T>
// which already declares things with some of the same names

type Children = React.ReactNode | React.ReactNode[];

interface LeafletLayerEvents {
    onbaselayerchange?(event: Leaflet.LayersControlEvent): void;
    onoverlayadd?(event: Leaflet.LayersControlEvent): void;
    onoverlayremove?(event: Leaflet.LayersControlEvent): void;
    onlayeradd?(event: Leaflet.LayerEvent): void;
    onlayerremove?(event: Leaflet.LayerEvent): void;
}
interface LeafletMapStateChangeEvents {
    onzoomlevelschange?(event: Leaflet.Event): void;
    onresize?(event: Leaflet.ResizeEvent): void;
    onunload?(event: Leaflet.Event): void;
    onviewreset?(event: Leaflet.Event): void;
    onload?(event: Leaflet.Event): void;
    onzoomstart?(event: Leaflet.Event): void;
    onmovestart?(event: Leaflet.Event): void;
    onzoom?(event: Leaflet.Event): void;
    onmove?(event: Leaflet.Event): void;
    onzoomend?(event: Leaflet.Event): void;
    onmoveend?(event: Leaflet.Event): void;
}
interface LeafletPopupEvents {
    onpopupopen?(event: Leaflet.PopupEvent): void;
    onpopupclose?(event: Leaflet.PopupEvent): void;
    onautopanstart?(event: Leaflet.Event): void;
}
interface LeafletTooltipEvents {
    ontooltipopen?(event: Leaflet.TooltipEvent): void;
    ontooltipclose?(event: Leaflet.TooltipEvent): void;
}
interface LeafletLocationEvents {
    onlocationerror?(event: Leaflet.ErrorEvent): void;
    onlocationfound?(event: Leaflet.LocationEvent): void;
}
interface LeafletInteractionEvents {
    onclick?(event: Leaflet.MouseEvent): void;
    ondblclick?(event: Leaflet.MouseEvent): void;
    onmousedown?(event: Leaflet.MouseEvent): void;
    onmouseup?(event: Leaflet.MouseEvent): void;
    onmouseover?(event: Leaflet.MouseEvent): void;
    onmouseout?(event: Leaflet.MouseEvent): void;
    onmousemove?(event: Leaflet.MouseEvent): void;
    oncontextmenu?(event: Leaflet.MouseEvent): void;
    onkeypress?(event: Leaflet.KeyboardEvent): void;
    onpreclick?(event: Leaflet.MouseEvent): void;
}
interface LeafletOtherEvents {
    onzoomanim?(event: Leaflet.ZoomAnimEvent): void;
}
interface LeafletDraggingEvents {
    ondragstart?(event: Leaflet.Event): void;
    onmovestart?(event: Leaflet.Event): void;
    ondrag?(event: Leaflet.Event): void;
    ondragend?(event: Leaflet.DragEndEvent): void;
    onmoveend?(event: Leaflet.Event): void;
}

type LeafletEvents = LeafletLayerEvents
    & LeafletMapStateChangeEvents
    & LeafletPopupEvents
    & LeafletTooltipEvents
    & LeafletLocationEvents
    & LeafletInteractionEvents
    & LeafletOtherEvents
    & LeafletDraggingEvents;

type MapComponentProps = React.HTMLProps<MapProps> & LeafletEvents;

export class MapComponent<P extends MapComponentProps, E extends Leaflet.Class> extends React.Component<P, {}> {
    _leafletEvents: LeafletEvents;
    leafletElement: E;
    extractLeafletEvents(props: P): LeafletEvents;
    bindLeafletEvents(next: LeafletEvents, prev: LeafletEvents): LeafletEvents;
    fireLeafletEvent(type: string, data: any): void;
    getOptions(props: P): P;
}

export interface MapProps extends MapComponentProps, Leaflet.MapOptions {
    animate?: boolean;
    bounds?: Leaflet.LatLngBoundsExpression;
    boundsOptions?: Leaflet.FitBoundsOptions;
    center?: Leaflet.LatLngExpression;
    children?: Children;
    className?: string;
    id?: string,
    maxBounds?: Leaflet.LatLngBoundsExpression;
    maxZoom?: number;
    minZoom?: number;
    style?: React.CSSProperties;
    useFlyTo?: boolean;
    zoom?: number;
}

export class Map<P extends MapProps, E extends Leaflet.Map> extends MapComponent<P, E> {
    className?: string;
    container: HTMLDivElement;
    getChildContext(): { layerContainer: E, map: E };
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
    bindContainer(container: HTMLDivElement): void;
    shouldUpdateCenter(next: Leaflet.LatLngExpression, prev: Leaflet.LatLngExpression): boolean;
    shouldUpdateBounds(next: Leaflet.LatLngBoundsExpression, prev: Leaflet.LatLngBoundsExpression): boolean;
}

export interface PaneProps extends MapComponentProps {
    name?: string;
    style?: React.CSSProperties;
    className?: string;
}
export interface PaneState {
    name?: string;
}
export class Pane<P extends PaneProps, S extends PaneState> extends React.Component<P, S> {
    getChildContext(): { pane: string };
    createPane(props: P): void;
    removePane(): void;
    setStyle(arg: { style?: string, className?: string }): void;
    getParentPane(): HTMLElement | undefined;
    getPane(name: string): HTMLElement | undefined;
}

export interface MapLayerProps extends MapComponentProps {
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

// There is no Layer class, these are the base props for all layers on the map
interface LayerProps extends LeafletInteractionEvents {
    onadd?(event: Leaflet.Event): void;
    onremove?(event: Leaflet.Event): void;

    // Popup events
    onpopupopen?(event: Leaflet.PopupEvent): void;
    onpopupclose?(event: Leaflet.PopupEvent): void;

    // Tooltip events
    ontooltipopen?(event: Leaflet.TooltipEvent): void;
    ontooltipclose?(event: Leaflet.TooltipEvent): void;
}

export interface MarkerProps extends MapLayerProps, Leaflet.MarkerOptions {
    position: Leaflet.LatLngExpression;
}
export class Marker<P extends MarkerProps, E extends Leaflet.Marker> extends MapLayer<P, E> {
    getChildContext(): { popupContainer: E };
}

export interface PopupProps extends Leaflet.PopupOptions {
    children?: Children;
    position?: Leaflet.LatLngExpression;
}
export class Popup<P extends PopupProps, E extends Leaflet.Popup> extends MapComponent<P, E> {
    onPopupOpen(arg: { popup: E }): void;
    onPopupClose(arg: { popup: E }): void;
    renderPopupContent(): void;
    removePopupContent(): void;
}

export interface TooltipProps extends Leaflet.TooltipOptions {
    children?: Children;
}
export class Tooltip<P extends TooltipProps, E extends Leaflet.Tooltip> extends MapComponent<P, E> {
    onTooltipOpen(arg: { tooltip: E }): void;
    onTooltipClose(arg: { tooltip: E }): void;
    renderTooltipContent(): void;
    removeTooltipContent(): void;
}

export interface GridLayerProps extends MapLayerProps, Leaflet.GridLayerOptions {
    opacity?: number;
    zIndex?: number;
}
export class GridLayer<P extends GridLayerProps, E extends Leaflet.GridLayer> extends MapLayer<P, E> {}

export interface TileLayerProps extends GridLayerProps, Leaflet.TileLayerOptions {
    url: string;
    // Type of property `crossOrigin` is incompatible in React.HTMLAttributes and
    // Leaflet.TileLayerOptions, so we hack it here to allow any type.
    crossOrigin?: any;
}
export class TileLayer<P extends TileLayerProps, E extends Leaflet.TileLayer> extends GridLayer<P, E> { }

export interface ImageOverlayProps extends MapLayerProps, Leaflet.ImageOverlayOptions {
    bounds: Leaflet.LatLngBoundsExpression;
    url: string;
    // Type of property `crossOrigin` is incompatible in React.HTMLAttributes and
    // Leaflet.ImageOverlayOptions, so we hack it here to allow any type.
    crossOrigin?: any;
}
export class ImageOverlay<P extends ImageOverlayProps, E extends Leaflet.ImageOverlay> extends MapLayer<P, E> {
    getChildContext(): { popupContainer: E };
}

export interface WMSTileLayerProps extends GridLayerProps, Leaflet.WMSOptions {
    url: string;
    // Type of property `crossOrigin` is incompatible in React.HTMLAttributes and
    // Leaflet.WMSOptions, so we hack it here to allow any type.
    crossOrigin?: any;
}
export class WMSTileLayer<P extends WMSTileLayerProps, E extends Leaflet.TileLayer.WMS> extends GridLayer<P, E> { }

export interface PathProps extends MapLayerProps, Leaflet.PathOptions { }
export abstract class Path<P extends PathProps, E> extends MapLayer<P, E> {
    getChildContext(): { popupContainer: E };
    getPathOptions(props: P): Leaflet.PathOptions;
    setStyle(options: React.CSSProperties): void;
    setStyleIfChanged(fromProps: P, toProps: P): void;
}

export interface CircleProps extends PathProps {
    center: Leaflet.LatLngExpression;
    radius?: number;
}
export class Circle<P extends CircleProps, E extends Leaflet.Circle> extends Path<P, E> { }

export interface CircleMarkerProps extends PathProps {
    center: Leaflet.LatLngExpression;
    radius?: number;
}
export class CircleMarker<P extends CircleMarkerProps, E extends Leaflet.CircleMarker> extends Path<P, E> { }

export interface PolylineProps extends PathProps {
    positions: Leaflet.LatLngExpression[] | Leaflet.LatLngExpression[][];
}
export class Polyline<P extends PolylineProps, E extends Leaflet.Polyline> extends Path<P, E> { }

export interface PolygonProps extends PathProps {
    positions: Leaflet.LatLngExpression[] | Leaflet.LatLngExpression[][] | Leaflet.LatLngExpression[][][];
}
export class Polygon<P extends PolygonProps, E extends Leaflet.Polygon> extends Path<P, E> { }

export interface RectangleProps extends PathProps {
    bounds: Leaflet.LatLngBoundsExpression;
}
export class Rectangle<P extends RectangleProps, E extends Leaflet.Rectangle> extends Path<P, E> { }

export interface LayerGroupProps extends MapLayerProps { }
export class LayerGroup<P extends LayerGroupProps, E extends Leaflet.LayerGroup> extends MapLayer<P, E> {
    getChildContext(): { layerContainer: E };
}

export interface FeatureGroupProps extends PathProps { }
export class FeatureGroup<P extends FeatureGroupProps, E extends Leaflet.FeatureGroup> extends Path<P, E> {
    getChildContext(): { layerContainer: E, popupContainer: E };
}

export interface GeoJSONProps extends PathProps, Leaflet.GeoJSONOptions {
    // Type of property `data` is incompatible with React.HTMLAttributes and, so we hack it here to allow any type.
    data: any;
    style?: Leaflet.StyleFunction;
}
export class GeoJSON<P extends GeoJSONProps, E extends Leaflet.GeoJSON> extends Path<P, E> { }

export interface AttributionControlProps extends MapControlProps, Leaflet.Control.AttributionOptions { }
export class AttributionControl<P extends AttributionControlProps, E extends Leaflet.Control.Attribution> extends MapControl<P, E> { }

export interface LayersControlProps extends MapControlProps {
    baseLayers?: Leaflet.Control.LayersObject;
    children?: Children;
    overlays?: Leaflet.Control.LayersObject;
}
export class LayersControl<P extends AttributionControlProps, E extends Leaflet.Control.Layers> extends MapControl<P, E> { }

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
    class ControlledLayer<P extends BaseControlledLayerProps> extends React.Component<P, any> {
        layer?: Leaflet.Layer;
        getChildContext(): { layerContainer: LayerContainer };
        addLayer(): void;
        removeLayer(layer: Leaflet.Layer): void;
    }
    export class BaseLayer<P extends ControlledLayerProps> extends ControlledLayer<P> { }
    export class Overlay<P extends ControlledLayerProps> extends ControlledLayer<P> { }
}

export type MapControlProps = Leaflet.ControlOptions;
export class MapControl<P extends MapControlProps, E extends Leaflet.Control> extends React.Component<P, any> {
    leafletElement: E;
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
}

export interface ScaleControlProps extends MapControlProps, Leaflet.Control.ScaleOptions { }
export class ScaleControl<P extends ScaleControlProps, E extends Leaflet.Control.Scale> extends MapControl<P, E> { }

interface ZoomControlProps {
    position: Leaflet.ControlPosition;
}
export const ZoomControl: React.ComponentClass<ZoomControlProps>;
