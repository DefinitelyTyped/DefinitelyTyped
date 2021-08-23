// Type definitions for react-leaflet 2.8
// Project: https://github.com/PaulLeCam/react-leaflet
// Definitions by: Dave Leaver <https://github.com/danzel>
//                 David Schneider <https://github.com/davschne>
//                 Yui T. <https://github.com/yuit>
//                 Tom Fenech <https://github.com/fenech>
//                 Eric Myllyoja <https://github.com/MasterEric>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as Leaflet from 'leaflet';
import * as React from 'react';

// All events need to be lowercase so they don't collide with React.DOMAttributes<T>
// which already declares things with some of the same names

export type Children = React.ReactNode | React.ReactNode[];

export interface MapEvents {
    onclick?(event: Leaflet.LeafletMouseEvent): void;
    ondblclick?(event: Leaflet.LeafletMouseEvent): void;
    onmousedown?(event: Leaflet.LeafletMouseEvent): void;
    onmouseup?(event: Leaflet.LeafletMouseEvent): void;
    onmouseover?(event: Leaflet.LeafletMouseEvent): void;
    onmouseout?(event: Leaflet.LeafletMouseEvent): void;
    onmousemove?(event: Leaflet.LeafletMouseEvent): void;
    oncontextmenu?(event: Leaflet.LeafletMouseEvent): void;
    onfocus?(event: Leaflet.LeafletEvent): void;
    onblur?(event: Leaflet.LeafletEvent): void;
    onpreclick?(event: Leaflet.LeafletMouseEvent): void;
    onload?(event: Leaflet.LeafletEvent): void;
    onunload?(event: Leaflet.LeafletEvent): void;
    onviewreset?(event: Leaflet.LeafletEvent): void;
    onmove?(event: Leaflet.LeafletEvent): void;
    onmovestart?(event: Leaflet.LeafletEvent): void;
    onmoveend?(event: Leaflet.LeafletEvent): void;
    ondragstart?(event: Leaflet.LeafletEvent): void;
    ondrag?(event: Leaflet.LeafletEvent): void;
    ondragend?(event: Leaflet.DragEndEvent): void;
    onzoomstart?(event: Leaflet.LeafletEvent): void;
    onzoom?(event: Leaflet.LeafletEvent): void;
    onzoomend?(event: Leaflet.LeafletEvent): void;
    onzoomlevelschange?(event: Leaflet.LeafletEvent): void;
    onresize?(event: Leaflet.ResizeEvent): void;
    onautopanstart?(event: Leaflet.LeafletEvent): void;
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
    onclick?(event: Leaflet.LeafletMouseEvent): void;
    ondblclick?(event: Leaflet.LeafletMouseEvent): void;
    onmousedown?(event: Leaflet.LeafletMouseEvent): void;
    onmouseover?(event: Leaflet.LeafletMouseEvent): void;
    onmouseout?(event: Leaflet.LeafletMouseEvent): void;
    oncontextmenu?(event: Leaflet.LeafletMouseEvent): void;
    ondragstart?(event: Leaflet.LeafletEvent): void;
    ondrag?(event: Leaflet.LeafletEvent): void;
    ondragend?(event: Leaflet.DragEndEvent): void;
    onmove?(event: Leaflet.LeafletEvent): void;
    onadd?(event: Leaflet.LeafletEvent): void;
    onremove?(event: Leaflet.LeafletEvent): void;
    onpopupopen?(event: Leaflet.PopupEvent): void;
    onpopupclose?(event: Leaflet.PopupEvent): void;
}

export interface TileLayerEvents {
    onloading?(event: Leaflet.LeafletEvent): void;
    onload?(event: Leaflet.LeafletEvent): void;
    ontileloadstart?(event: Leaflet.TileEvent): void;
    ontileload?(event: Leaflet.TileEvent): void;
    ontileunload?(event: Leaflet.TileEvent): void;
    ontileerror?(event: Leaflet.TileEvent): void;
}

export interface PathEvents {
    onclick?(event: Leaflet.LeafletMouseEvent): void;
    ondblclick?(event: Leaflet.LeafletMouseEvent): void;
    onmousedown?(event: Leaflet.LeafletMouseEvent): void;
    onmouseover?(event: Leaflet.LeafletMouseEvent): void;
    onmouseout?(event: Leaflet.LeafletMouseEvent): void;
    oncontextmenu?(event: Leaflet.LeafletMouseEvent): void;
    onadd?(event: Leaflet.LeafletEvent): void;
    onremove?(event: Leaflet.LeafletEvent): void;
    onpopupopen?(event: Leaflet.PopupEvent): void;
    onpopupclose?(event: Leaflet.PopupEvent): void;
}

export interface FeatureGroupEvents {
    onclick?(event: Leaflet.LeafletMouseEvent): void;
    ondblclick?(event: Leaflet.LeafletMouseEvent): void;
    onmouseover?(event: Leaflet.LeafletMouseEvent): void;
    onmouseout?(event: Leaflet.LeafletMouseEvent): void;
    oncontextmenu?(event: Leaflet.LeafletMouseEvent): void;
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

export interface MapComponentProps {
    leaflet?: LeafletContext | undefined;
    pane?: string | undefined;
}

export class MapEvented<P, E extends Leaflet.Evented> extends React.Component<P> {
    _leafletEvents: LeafletEvents;
    leafletElement: E;
    extractLeafletEvents(props: P): LeafletEvents;
    bindLeafletEvents(next: LeafletEvents, prev: LeafletEvents): LeafletEvents;
    fireLeafletEvent(type: string, data: any): void;
}

export class MapComponent<P extends MapComponentProps, E extends Leaflet.Evented> extends MapEvented<P, E> {
    getOptions(props: P): P;
}

export interface MapProps extends MapEvents, Leaflet.MapOptions, Leaflet.LocateOptions, Leaflet.FitBoundsOptions {
    animate?: boolean | undefined;
    duration?: number | undefined;
    noMoveStart?: boolean | undefined;
    bounds?: Leaflet.LatLngBoundsExpression | undefined;
    boundsOptions?: Leaflet.FitBoundsOptions | undefined;
    children: Children;
    className?: string | undefined;
    id?: string | undefined;
    style?: React.CSSProperties | undefined;
    useFlyTo?: boolean | undefined;
    viewport?: Viewport | undefined;
    whenReady?: (() => void) | undefined;
    onViewportChange?: ((viewport: Viewport) => void) | undefined;
    onViewportChanged?: ((viewport: Viewport) => void) | undefined;
}

export class Map<P extends MapProps = MapProps, E extends Leaflet.Map = Leaflet.Map> extends MapEvented<P, E> {
    className: string | null | undefined;
    contextValue: LeafletContext | null | undefined;
    container: HTMLDivElement | null | undefined;
    viewport: Viewport;
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
    onViewportChange: () => void;
    onViewportChanged: () => void;
    bindContainer(container: HTMLDivElement | null | undefined): void;
    shouldUpdateCenter(next: Leaflet.LatLngExpression, prev: Leaflet.LatLngExpression): boolean;
    shouldUpdateBounds(next: Leaflet.LatLngBoundsExpression, prev: Leaflet.LatLngBoundsExpression): boolean;
}

export interface DivOverlayProps extends MapComponentProps, Leaflet.DivOverlayOptions {
    children: Children;
    onClose?: (() => void) | undefined;
    onOpen?: (() => void) | undefined;
}

export interface DivOverlayTypes extends Leaflet.Evented {
    isOpen: () => boolean;
    update: () => void;
}

export class DivOverlay<P extends DivOverlayProps, E extends DivOverlayTypes> extends MapComponent<P, E> {
    createLeafletElement(_props: P): void;
    updateLeafletElement(_prevProps: P, _props: P): void;
    onClose: () => void;
    onOpen: () => void;
    onRender: () => void;
}

export interface PaneProps {
    children?: Children | undefined;
    className?: string | undefined;
    leaflet?: LeafletContext | undefined;
    name?: string | undefined;
    style?: React.CSSProperties | undefined;
    pane?: string | undefined;
}
export interface PaneState {
    name: string | null | undefined;
    context: LeafletContext | null | undefined;
}
export class Pane<P extends PaneProps = PaneProps, S extends PaneState = PaneState> extends React.Component<P, S> {
    createPane(props: P): void;
    removePane(): void;
    setStyle(arg: { style?: string | undefined, className?: string | undefined }): void;
    getParentPane(): HTMLElement | null | undefined;
    getPane(name: string | null | undefined): HTMLElement | null | undefined;
}

export interface MapLayerProps extends MapComponentProps {
    attribution?: string | undefined;
    children?: Children | undefined;
}

export type AddLayerHandler = (layer: Leaflet.Layer, name: string, checked?: boolean) => void;

export type RemoveLayerHandler = (layer: Leaflet.Layer) => void;

export interface LayerContainer {
    addLayer: AddLayerHandler;
    removeLayer: RemoveLayerHandler;
}

export interface LeafletContext {
    map?: Leaflet.Map | undefined;
    pane?: string | undefined;
    layerContainer?: LayerContainer | undefined;
    popupContainer?: Leaflet.Layer | undefined;
}

export type LatLng = Leaflet.LatLng | number[] | object;

export type LatLngBounds = Leaflet.LatLngBounds | LatLng[];

export type Point = [number, number] | Leaflet.Point;

export interface Viewport {
    center: [number, number] | null | undefined;
    zoom: number | null | undefined;
}

export class MapLayer<P extends MapLayerProps = MapLayerProps, E extends Leaflet.Layer = Leaflet.Layer> extends MapComponent<P, E> {
    contextValue: LeafletContext | null | undefined;
    leafletElement: E;
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
    readonly layerContainer: LayerContainer | Leaflet.Map;
}

export interface GridLayerProps extends MapLayerProps, Leaflet.GridLayerOptions { }
export class GridLayer<P extends GridLayerProps = GridLayerProps, E extends Leaflet.GridLayer = Leaflet.GridLayer> extends MapLayer<P, E> {
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
    getOptions(props: P): P;
}

export interface TileLayerProps extends GridLayerProps, TileLayerEvents, Leaflet.TileLayerOptions {
    url: string;
}
export class TileLayer<P extends TileLayerProps = TileLayerProps, E extends Leaflet.TileLayer = Leaflet.TileLayer> extends GridLayer<P, E> {
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
}

export interface WMSTileLayerProps extends TileLayerEvents, Leaflet.WMSOptions, GridLayerProps {
    children?: Children | undefined;
    url: string;
}
export class WMSTileLayer<P extends WMSTileLayerProps = WMSTileLayerProps,  E extends Leaflet.TileLayer.WMS = Leaflet.TileLayer.WMS> extends GridLayer<P, E> {
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
    getOptions(params: P): P;
}

export interface ImageOverlayProps extends MapLayerProps, Leaflet.ImageOverlayOptions {
    bounds?: Leaflet.LatLngBoundsExpression | undefined;
    url: string | HTMLImageElement;
    zIndex?: number | undefined;
}
export class ImageOverlay<P extends ImageOverlayProps = ImageOverlayProps, E extends Leaflet.ImageOverlay = Leaflet.ImageOverlay> extends MapLayer<P, E> {
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
}

export interface SVGOverlayProps extends Leaflet.ImageOverlayOptions, MapComponentProps {
    children?: Children | undefined;
    preserveAspectRatio?: string | undefined;
    viewBox?: string | undefined;
}
export class SVGOverlay<P extends SVGOverlayProps = SVGOverlayProps, E extends Leaflet.SVGOverlay = Leaflet.SVGOverlay> extends MapComponent<P, E> {
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
}

export interface VideoOverlayProps extends Leaflet.VideoOverlayOptions, MapComponentProps {
    attribution?: string | undefined;
    bounds: Leaflet.LatLngBoundsExpression;
    opacity?: number | undefined;
    play?: boolean | undefined;
    url: string | string[] | HTMLVideoElement;
    zIndex?: number | undefined;
}
export class VideoOverlay<P extends VideoOverlayProps = VideoOverlayProps, E extends Leaflet.VideoOverlay = Leaflet.VideoOverlay> extends MapLayer<P, E> {
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
}

export class LayerGroup<P extends MapLayerProps = MapLayerProps, E extends Leaflet.LayerGroup = Leaflet.LayerGroup> extends MapLayer<P, E> {
    createLeafletElement(props: P): E;
}

export interface MarkerProps extends MapLayerProps, MarkerEvents, Leaflet.MarkerOptions {
    position: Leaflet.LatLngExpression;
}
export class Marker<P extends MarkerProps = MarkerProps, E extends Leaflet.Marker = Leaflet.Marker> extends MapLayer<P, E> {
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
}

export interface PathProps extends PathEvents, Leaflet.PathOptions, MapLayerProps { }
export abstract class Path<P extends PathProps, E extends Leaflet.Path> extends MapLayer<P, E> {
    getChildContext(): { popupContainer: E };
    getPathOptions(props: P): Leaflet.PathOptions;
    setStyle(options: Leaflet.PathOptions): void;
    setStyleIfChanged(fromProps: P, toProps: P): void;
}

export interface CircleProps extends MapLayerProps, PathEvents, Leaflet.CircleMarkerOptions {
    center: Leaflet.LatLngExpression;
    radius: number;
}
export class Circle<P extends CircleProps = CircleProps, E extends Leaflet.Circle = Leaflet.Circle> extends Path<P, E> {
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
}

export interface CircleMarkerProps extends PathProps, PathEvents, Leaflet.CircleMarkerOptions {
    center: Leaflet.LatLngExpression;
    radius: number;
}
export class CircleMarker<P extends CircleMarkerProps = CircleMarkerProps, E extends Leaflet.CircleMarker = Leaflet.CircleMarker> extends Path<P, E> {
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
}

export interface FeatureGroupProps extends MapLayerProps, FeatureGroupEvents, Leaflet.PathOptions { }
export class FeatureGroup<P extends FeatureGroupProps = FeatureGroupProps, E extends Leaflet.FeatureGroup = Leaflet.FeatureGroup> extends LayerGroup<P, E> {
    createLeafletElement(props: P): E;
}

export interface GeoJSONProps extends PathProps, FeatureGroupEvents, Leaflet.GeoJSONOptions {
    data: GeoJSON.GeoJsonObject | GeoJSON.GeoJsonObject[];
    markersInheritOptions?: boolean | undefined;
}
export class GeoJSON<P extends GeoJSONProps = GeoJSONProps, E extends Leaflet.GeoJSON = Leaflet.GeoJSON> extends FeatureGroup<P, E> {
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
}

export interface PolylineProps extends PathProps, PathEvents, Leaflet.PolylineOptions {
    positions: Leaflet.LatLngExpression[] | Leaflet.LatLngExpression[][];
}
export class Polyline<P extends PolylineProps = PolylineProps, E extends Leaflet.Polyline = Leaflet.Polyline> extends Path<P, E> {
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
}

export interface PolygonProps extends PathProps, PathEvents, Leaflet.PolylineOptions {
    positions: Leaflet.LatLngExpression[] | Leaflet.LatLngExpression[][] | Leaflet.LatLngExpression[][][];
}
export class Polygon<P extends PolygonProps = PolygonProps, E extends Leaflet.Polygon = Leaflet.Polygon> extends Path<P, E> {
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
}

export interface RectangleProps extends PathProps, PathEvents, Leaflet.PolylineOptions {
    bounds: Leaflet.LatLngBoundsExpression;
}
export class Rectangle<P extends RectangleProps = RectangleProps, E extends Leaflet.Rectangle = Leaflet.Rectangle> extends Path<P, E> {
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
}

export interface PopupProps extends Leaflet.PopupOptions, DivOverlayProps {
    position?: Leaflet.LatLngExpression | undefined;
}
export class Popup<P extends PopupProps = PopupProps, E extends Leaflet.Popup = Leaflet.Popup> extends DivOverlay<P, E> {
    getOptions(props: P): P;
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
    onPopupOpen(arg: { popup: E }): void;
    onPopupClose(arg: { popup: E }): void;
    onRender: () => void;
}

export interface TooltipProps extends Leaflet.TooltipOptions, DivOverlayProps { }
export class Tooltip<P extends TooltipProps = TooltipProps, E extends Leaflet.Tooltip = Leaflet.Tooltip> extends DivOverlay<P, E> {
    onTooltipOpen(arg: { tooltip: E }): void;
    onTooltipClose(arg: { tooltip: E }): void;
}

export type MapControlProps = {
    leaflet?: LeafletContext | undefined
} & Leaflet.ControlOptions;

export class MapControl<P extends MapControlProps = MapControlProps, E extends Leaflet.Control = Leaflet.Control> extends React.Component<P> {
    leafletElement: E;
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
}

export type AttributionControlProps = Leaflet.Control.AttributionOptions & MapControlProps;
export class AttributionControl<P extends AttributionControlProps = AttributionControlProps, E extends Leaflet.Control.Attribution = Leaflet.Control.Attribution> extends MapControl<P, E> {
    createLeafletElement(props: P): E;
}

export interface LayersControlProps extends MapControlProps, LayersControlEvents, Leaflet.Control.LayersOptions {
    children: Children;
    collapsed?: boolean | undefined;
}
export class LayersControl<P extends LayersControlProps = LayersControlProps, E extends Leaflet.Control.Layers = Leaflet.Control.Layers> extends MapControl<P, E> {
    controlProps: {
        addBaseLayer: AddLayerHandler,
        addOverlay: AddLayerHandler,
        removeLayer: RemoveLayerHandler,
        removeLayerControl: RemoveLayerHandler
    };
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
    addBaseLayer(layer: Leaflet.Layer, name: string, checked: boolean): void;
    addOverlay(layer: Leaflet.Layer, name: string, checked: boolean): void;
    removeLayer(layer: Leaflet.Layer): void;
    removeLayerControl(layer: Leaflet.Layer): void;
}

export namespace LayersControl {
    interface ControlledLayerProps {
        addBaseLayer?: AddLayerHandler | undefined;
        addOverlay?: AddLayerHandler | undefined;
        checked?: boolean | undefined;
        children: Children;
        leaflet?: LeafletContext | undefined;
        name: string;
        removeLayer?: RemoveLayerHandler | undefined;
        removeLayerControl?: RemoveLayerHandler | undefined;
    }
    class ControlledLayer<P extends ControlledLayerProps = ControlledLayerProps> extends React.Component<P> {
        contextValue: LeafletContext;
        layer: Leaflet.Layer | null | undefined;
        removeLayer(layer: Leaflet.Layer): void;
    }
    class BaseLayer<P extends ControlledLayerProps = ControlledLayerProps> extends ControlledLayer<P> {
        constructor(props: ControlledLayerProps);
        addLayer: (layer: Leaflet.Layer) => void;
    }
    class Overlay<P extends ControlledLayerProps = ControlledLayerProps> extends ControlledLayer<P> {
        constructor(props: ControlledLayerProps);
        addLayer: (layer: Leaflet.Layer) => void;
    }
}

export type ScaleControlProps = Leaflet.Control.ScaleOptions & MapControlProps;
export class ScaleControl<P extends ScaleControlProps = ScaleControlProps, E extends Leaflet.Control.Scale = Leaflet.Control.Scale> extends MapControl<P, E> {
    createLeafletElement(props: P): E;
}

export type ZoomControlProps = Leaflet.Control.ZoomOptions & MapControlProps;
export class ZoomControl<P extends ZoomControlProps = ZoomControlProps, E extends Leaflet.Control.Zoom = Leaflet.Control.Zoom> extends MapControl<P, E> {
    createLeafletElement(props: P): E;
}

// context.js
export const LeafletProvider: React.Provider<LeafletContext>;
export const LeafletConsumer: React.Consumer<LeafletContext>;

export interface ContextProps {
    leaflet?: LeafletContext | undefined;
}
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withLeaflet<T extends ContextProps>(WrappedComponent: React.ComponentType<T>): React.ComponentType<Omit<T, 'leaflet'>>;
export function useLeaflet(): LeafletContext;
