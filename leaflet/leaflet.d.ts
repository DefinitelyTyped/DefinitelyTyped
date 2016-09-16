// Type definitions for Leaflet.js 1.0.0-rc3
// Project: https://github.com/Leaflet/Leaflet
// Definitions by: Alejandro Sánchez <https://github.com/alejo90>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace L {
    export interface CRS {
        latLngToPoint(latlng: LatLng, zoom: number): Point;
        latLngToPoint(latlng: LatLngLiteral, zoom: number): Point;
        latLngToPoint(latlng: LatLngTuple, zoom: number): Point;
        pointToLatLng(point: Point): LatLng;
        pointToLatLng(point: PointTuple): LatLng;
        project(latlng: LatLng): Point;
        project(latlng: LatLngLiteral): Point;
        project(latlng: LatLngTuple): Point;
        unproject(point: Point): LatLng;
        unproject(point: PointTuple): LatLng;
        scale(zoom: number): number;
        zoom(scale: number): number;
        getProjectedBounds(zoom: number): Bounds;
        distance(latlng1: LatLng, latlng2: LatLng): number;
        distance(latlng1: LatLngLiteral, latlng2: LatLngLiteral): number;
        distance(latlng1: LatLngTuple, latlng2: LatLngTuple): number;
        wrapLatLng(latlng: LatLng): LatLng;
        wrapLatLng(latlng: LatLngLiteral): LatLng;
        wrapLatLng(latlng: LatLngTuple): LatLng;

        code: string;
        wrapLng: [number, number];
        wrapLat: [number, number];
        infinite: boolean;
    }

    export namespace CRS {
        export const EPSG3395: CRS;
        export const EPSG3857: CRS;
        export const EPSG4326: CRS;
        export const Earth: CRS;
        export const Simple: CRS;
    }

    export interface Projection {
        project(latlng: LatLng): Point;
        project(latlng: LatLngLiteral): Point;
        project(latlng: LatLngTuple): Point;
        unproject(point: Point): LatLng;
        unproject(point: PointTuple): LatLng;

        bounds: LatLngBounds;
    }

    export namespace Projection {
        export const LonLat: Projection;
        export const Mercator: Projection;
        export const SphericalMercator: Projection;
    }

    export interface LatLng {
        equals(otherLatLng: LatLng, maxMargin?: number): boolean;
        equals(otherLatLng: LatLngLiteral, maxMargin?: number): boolean;
        equals(otherLatLng: LatLngTuple, maxMargin?: number): boolean;
        toString(): string;
        distanceTo(otherLatLng: LatLng): number;
        distanceTo(otherLatLng: LatLngLiteral): number;
        distanceTo(otherLatLng: LatLngTuple): number;
        wrap(): LatLng;
        toBounds(sizeInMeters: number): LatLngBounds;

        lat: number;
        lng: number;
        alt: number;
    }

    export interface LatLngLiteral {
        lat: number;
        lng: number;
    }

    export type LatLngTuple = [number, number];

    type LatLngExpression = LatLng | LatLngLiteral | LatLngTuple;

    export function latLng(latitude: number, longitude: number, altitude?: number): LatLng;

    export function latLng(coords: LatLngTuple): LatLng;

    export function latLng(coords: [number, number, number]): LatLng;

    export function latLng(coords: LatLngLiteral): LatLng;

    export function latLng(coords: {lat: number, lng: number, alt: number}): LatLng;

    export interface LatLngBounds {
        extend(latlng: LatLng): this;
        extend(latlng: LatLngLiteral): this;
        extend(latlng: LatLngTuple): this;
        extend(otherBounds: LatLngBounds): this;
        extend(otherBounds: LatLngBoundsLiteral): this;
        pad(bufferRatio: number): LatLngBounds; // does this modify the current instance or does it return a new one?
        getCenter(): LatLng;
        getSouthWest(): LatLng;
        getNorthEast(): LatLng;
        getNorthWest(): LatLng;
        getSouthEast(): LatLng;
        getWest(): number;
        getSouth(): number;
        getEast(): number;
        getNorth(): number;
        contains(otherBounds: LatLngBounds): boolean;
        contains(otherBounds: LatLngBoundsLiteral): boolean;
        contains(latlng: LatLng): boolean;
        contains(latlng: LatLngLiteral): boolean;
        contains(latlng: LatLngTuple): boolean;
        intersects(otherBounds: LatLngBounds): boolean;
        intersects(otherBounds: LatLngLiteral): boolean;
        overlaps(otherBounds: Bounds): boolean; // investigate if this is really bounds and not latlngbounds
        overlaps(otherBounds: BoundsLiteral): boolean;
        toBBoxString(): string;
        equals(otherBounds: LatLngBounds): boolean;
        equals(otherBounds: LatLngBoundsLiteral): boolean;
        isValid(): boolean;
    }

    export type LatLngBoundsLiteral = Array<LatLngTuple>;

    type LatLngBoundsExpression = LatLngBounds | LatLngBoundsLiteral;

    export function latLngBounds(southWest: LatLng, northEast: LatLng): LatLngBounds;

    export function latLngBounds(southWest: LatLngLiteral, northEast: LatLngLiteral): LatLngBounds;

    export function latLngBounds(southWest: LatLngTuple, northEast: LatLngTuple): LatLngBounds;

    export function latLngBounds(latlngs: LatLngBoundsLiteral): LatLngBounds;

    export type PointTuple = [number, number];

    export interface Point {
        clone(): Point;
        add(otherPoint: Point): Point; // investigate if this mutates or returns a new instance
        add(otherPoint: PointTuple): Point;
        subtract(otherPoint: Point): Point;
        subtract(otherPoint: PointTuple): Point;
        divideBy(num: number): Point;
        multiplyBy(num: number): Point;
        scaleBy(scale: Point): Point;
        scaleBy(scale: PointTuple): Point;
        unscaleBy(scale: Point): Point;
        unscaleBy(scale: PointTuple): Point;
        round(): Point;
        floor(): Point;
        ceil(): Point;
        distanceTo(otherPoint: Point): Point;
        distanceTo(otherPoint: PointTuple): Point;
        equals(otherPoint: Point): boolean;
        equals(otherPoint: PointTuple): boolean;
        contains(otherPoint: Point): boolean;
        contains(otherPoint: PointTuple): boolean;
        toString(): string;
    }

    type PointExpression = Point | PointTuple;

    export function point(x: number, y: number, round?: boolean): Point;

    export function point(coords: PointTuple): Point;

    export function point(coords: {x: number, y: number}): Point;

    export type BoundsLiteral = Array<PointTuple>;

    export interface Bounds {
        extend(point: Point): this;
        extend(point: PointTuple): this;
        getCenter(round?: boolean): Point;
        getBottomLeft(): Point;
        getTopRight(): Point;
        getSize(): Point;
        contains(otherBounds: Bounds): boolean;
        contains(otherBounds: BoundsLiteral): boolean;
        contains(point: Point): boolean;
        contains(point: PointTuple): boolean;
        intersects(otherBounds: Bounds): boolean;
        intersects(otherBounds: BoundsLiteral): boolean;
        overlaps(otherBounds: Bounds): boolean;
        overlaps(otherBounds: BoundsLiteral): boolean;

        min: Point;
        max: Point;
    }

    type BoundsExpression = Bounds | BoundsLiteral;

    export function bounds(topLeft: Point, bottomRight: Point): Bounds;

    export function bounds(topLeft: PointTuple, bottomRight: PointTuple): Bounds;

    export function bounds(points: Array<Point>): Bounds;

    export function bounds(points: BoundsLiteral): Bounds;

    export interface Evented {

    }

    interface LayerOptions {
        pane?: string;
    }

    interface InteractiveLayerOptions extends LayerOptions {
        interactive?: boolean;
    }

    export interface Layer extends Evented {
        addTo(map: Map): this;
        remove(): this;
        removeFrom(map: Map): this;
        getPane(name?: string): HTMLElement;

        // Popup methods
        bindPopup(content: string, options?: PopupOptions): this;
        bindPopup(content: HTMLElement, options?: PopupOptions): this;
        bindPopup(content: (layer: Layer) => Content, options?: PopupOptions): this;
        bindPopup(content: Popup): this;
        unbindPopup(): this;
        openPopup(): this;
        openPopup(latlng: LatLng): this;
        openPopup(latlng: LatLngLiteral): this;
        openPopup(latlng: LatLngTuple): this;
        closePopup(): this;
        togglePopup(): this;
        isPopupOpen(): boolean;
        setPopupContent(content: string): this;
        setPopupContent(content: HTMLElement): this;
        setPopupContent(content: Popup): this;
        getPopup(): Popup;

        // Tooltip methods
        bindTooltip(content: string, options?: TooltipOptions): this;
        bindTooltip(content: HTMLElement, options?: TooltipOptions): this;
        bindTooltip(content: (layer: Layer) => Content, options?: TooltipOptions): this;
        bindTooltip(content: Tooltip, options?: TooltipOptions): this;
        unbindTooltip(): this;
        openTooltip(): this;
        openTooltip(latlng: LatLng): this;
        openTooltip(latlng: LatLngLiteral): this;
        openTooltip(latlng: LatLngTuple): this;
        closeTooltip(): this;
        toggleTooltip(): this;
        isTooltipOpen(): boolean;
        setTooltipContent(content: string): this;
        setTooltipContent(content: HTMLElement): this;
        setTooltipContent(content: Tooltip): this;
        getTooltip(): Tooltip;

        // Extension methods
        onAdd(map: Map): this;
        onRemove(map: Map): this;
        getEvents(): {[name: string]: (event: Event) => void};
        getAttribution(): string;
        beforeAdd(map: Map): this;
    }

    export interface GridLayerOptions {
        tileSize?: number | Point;
        opacity?: number;
        updateWhenIdle?: boolean;
        updateWhenZooming?: boolean;
        updateInterval?: number;
        attribution?: string;
        zIndex?: number;
        bounds?: LatLngBoundsExpression;
        minZoom?: number;
        maxZoom?: number;
        noWrap?: boolean;
        pane?: string;
        className?: string;
        keepBuffer?: number;
    }

    export interface GridLayer extends Layer {
        bringToFront(): this;
        bringToBack(): this;
        getAttribution(): string;
        getContainer(): HTMLElement;
        setOpacity(opacity: number): this;
        setZIndex(zIndex: number): this;
        isLoading(): boolean;
        redraw(): this;
        getTileSize(): Point;
    }

    export function gridLayer(options?: GridLayerOptions): GridLayer;

    export interface TileLayerOptions extends GridLayerOptions {
        minZoom?: number;
        maxZoom?: number;
        maxNativeZoom?: number;
        subdomains?: string | Array<string>;
        errorTileUrl?: string;
        zoomOffset?: number;
        tms?: boolean;
        zoomReverse?: boolean;
        detectRetina?: boolean;
        crossOrigin?: boolean;
    }

    export interface TileLayer extends GridLayer {
        setUrl(url: string, noRedraw?: boolean): this;
    }

    export function tileLayer(urlTemplate: string, options?: TileLayerOptions): TileLayer;

    export interface WMSOptions extends TileLayerOptions {
        layers: string;
        styles?: string;
        format?: string;
        transparent?: boolean;
        version?: string;
        crs?: CRS;
        uppercase?: boolean;
    }

    export interface WMS extends TileLayer {
        setParams(params: Object, noRedraw?: boolean): this;
    }

    export namespace tileLayer {
        export function wms(baseUrl: string, options: WMSOptions): WMS;
    }

    export interface ImageOverlayOptions extends LayerOptions {
        opacity?: number;
        alt?: string;
        interactive?: boolean;
        attribution?: string;
        crossOrigin?: boolean;
    }

    export interface ImageOverlay extends Layer {
        setOpacity(opacity: number): this;
        bringToFront(): this;
        bringToBack(): this;
        setUrl(url: string): this;
    }

    export function imageOverlay(imageUrl: string, bounds: LatLngBoundsExpression, options?: ImageOverlayOptions): ImageOverlay;

    export type LineCapShape = 'butt' | 'round' | 'square' | 'inherit';

    export type LineJoinShape = 'miter' | 'round' | 'bevel' | 'inherit';

    export type FillRule = 'nonzero' | 'evenodd' | 'inherit';

    export interface PathOptions extends InteractiveLayerOptions {
        stroke?: boolean;
        color?: string;
        wight?: number;
        opacity?: number;
        lineCap?: LineCapShape;
        lineJoin?: LineJoinShape;
        dashArray?: string;
        dashOffset?: string;
        fill?: boolean;
        fillColor?: string;
        fillOpacity?: number;
        fillRule?: FillRule;
        renderer?: Renderer;
        className: string;
    }

    export interface Path extends Layer {
        redraw(): this;
        setStyle(style: PathOptions): this;
        bringToFront(): this;
        bringToBack(): this;
    }

    export interface PolylineOptions extends PathOptions {
        smoothFactor?: number;
        noClip?: boolean;
    }

    export interface Polyline extends Path {
        toGeoJSON(): Object; // should import GeoJSON typings
        getLatLngs(): Array<LatLng>;
        setLatLngs(latlngs: Array<LatLng>): this;
        setLatLngs(latlngs: Array<LatLngLiteral>): this;
        setLatLngs(latlngs: Array<LatLngTuple>): this;
        isEmpty(): boolean;
        getCenter(): LatLng;
        getBounds(): LatLngBounds;
        addLatLng(latlng: LatLng): this;
        addLatLng(latlng: LatLngLiteral): this;
        addLatLng(latlng: LatLngTuple): this;
        addLatLng(latlng: Array<LatLng>): this; // these three overloads aren't explicitly noted in the docs
        addLatLng(latlng: Array<LatLngLiteral>): this;
        addLatLng(latlng: Array<LatLngTuple>): this;
    }

    export function polyline(latlngs: Array<LatLng>, options?: PolylineOptions): Polyline;

    export function polyline(latlngs: Array<LatLngLiteral>, options?: PolylineOptions): Polyline;

    export function polyline(latlngs: Array<LatLngTuple>, options?: PolylineOptions): Polyline;

    export function polyline(latlngs: Array<Array<LatLng>>, options?: PolylineOptions): Polyline;

    export function polyline(latlngs: Array<Array<LatLngLiteral>>, options?: PolylineOptions): Polyline;

    export function polyline(latlngs: Array<Array<LatLngTuple>>, options?: PolylineOptions): Polyline;

    export interface Polygon extends Polyline {
        toGeoJSON(): Object; // should import GeoJSON typings
    }

    export function polygon(latlngs: Array<LatLng>, options?: PolylineOptions): Polygon;

    export function polygon(latlngs: Array<LatLngLiteral>, options?: PolylineOptions): Polygon;

    export function polygon(latlngs: Array<LatLngTuple>, options?: PolylineOptions): Polygon;

    export function polygon(latlngs: Array<Array<LatLng>>, options?: PolylineOptions): Polygon;

    export function polygon(latlngs: Array<Array<LatLngLiteral>>, options?: PolylineOptions): Polygon;

    export function polygon(latlngs: Array<Array<LatLngTuple>>, options?: PolylineOptions): Polygon;

    export interface Rectangle extends Polygon {
        setBounds(latLngBounds: LatLngBounds): this;
        setBounds(latLngBounds: LatLngBoundsLiteral): this;
    }

    export function rectangle(latLngBounds: LatLngBounds, options?: PolylineOptions): Rectangle;

    export function rectangle(latLngBounds: LatLngBoundsLiteral, options?: PolylineOptions): Rectangle;

    export interface CircleMarkerOptions extends PathOptions {
        radius?: number;
    }

    export interface CircleMarker extends Path {
        toGeoJSON(): Object; // should import GeoJSON typings
        setLatLng(latLng: LatLng): this;
        setLatLng(latLng: LatLngLiteral): this;
        setLatLng(latLng: LatLngTuple): this;
        getLatLng(): LatLng;
        setRadius(radius: number): this;
        getRadius(): number;
    }

    export function circleMarker(latlng: LatLng, options?: CircleMarkerOptions): CircleMarker;

    export function circleMarker(latlng: LatLngLiteral, options?: CircleMarkerOptions): CircleMarker;

    export function circleMarker(latlng: LatLngLiteral, options?: CircleMarkerOptions): CircleMarker;

    export interface CircleOptions extends PathOptions {
        radius?: number;
    }

    export interface Circle extends CircleMarker {
        setRadius(radius: number): this;
        getRadius(): number;
        getBounds(): LatLngBounds;
    }

    export function circle(latlng: LatLng, options?: CircleOptions): Circle;

    export function circle(latlng: LatLngLiteral, options?: CircleOptions): Circle;

    export function circle(latlng: LatLngTuple, options?: CircleOptions): Circle;

    export function circle(latlng: LatLng, radius: number, options?: CircleOptions): Circle;

    export function circle(latlng: LatLngLiteral, radius: number, options?: CircleOptions): Circle;

    export function circle(latlng: LatLngTuple, radius: number, options?: CircleOptions): Circle;

    export interface RendererOptions extends LayerOptions {
        padding?: number;
    }

    export interface Renderer extends Layer {}

    export interface SVG extends Renderer {}

    type Zoom = boolean | 'center';

    export interface MapOptions {
        preferCanvas?: boolean;

        // Control options
        attributionControl?: boolean;
        zoomControl?: boolean;

        // Interaction options
        closePopupOnClick?: boolean;
        zoomSnap?: number;
        zoomDelta?: number;
        trackResize?: boolean;
        boxZoom?: boolean;
        doubleClickZoom?: Zoom;
        dragging?: boolean;

        // Map state options
        crs?: CRS;
        center?: LatLngExpression;
        zoom?: number;
        minZoom?: number;
        maxZoom?: number;
        layers?: Array<Layer>;
        maxBounds?: LatLngBoundsExpression;
        renderer?: Renderer;

        // Animation options
        fadeAnimation?: boolean;
        markerZoomAnimation?: boolean;
        transform3DLimit?: number;
        zoomAnimation?: boolean;
        zoomAnimationThreshold?: number;

        // Panning inertia options
        inertia?: boolean;
        inertiaDeceleration?: number;
        inertiaMaxSpeed?: number;
        easeLinearity?: number;
        worldCopyJump?: boolean;
        maxBoundsViscosity?: number;

        // Keyboard navigation options
        keyboard?: boolean;
        keyboardPanDelta?: number;

        // Mousewheel options
        scrollWheelZoom?: Zoom;
        wheelDebounceTime?: number;
        wheelPxPerZoomLevel?: number;

        // Touch interaction options
        tap?: boolean;
        tapTolerance?: number;
        touchZoom?: Zoom;
        bounceAtZoomLimits?: boolean;
    }

    export interface Control {

    }

    interface DivOverlayOptions {
        offset?: PointExpression;
        zoomAnimation?: boolean;
        className?: string;
        pane?: string;
    }

    export interface PopupOptions extends DivOverlayOptions {
        maxWidth?: number;
        minWidth?: number;
        maxHeight?: number;
        autoPan?: boolean;
        autoPanPaddingTopLeft?: PointExpression;
        autoPanPaddingBottomRight?: PointExpression;
        autoPanPadding?: PointExpression;
        keepInView?: boolean;
        closeButton?: boolean;
        autoClose?: boolean;
    }

    type Content = string | HTMLElement;

    export interface Popup extends Layer {
        getLatLng(): LatLng;
        setLatLng(latlng: LatLngExpression): this;
        getContent(): Content;
        setContent(htmlContent: string): this;
        setContent(htmlContent: HTMLElement): this;
        setContent(htmlContent: (source: Layer) => Content): this;
        getElement(): Content;
        update(): void;
        isOpen(): boolean;
        bringToFront(): this;
        bringToBack(): this;
        openOn(map: Map): this;
    }

    export function popup(options?: PopupOptions, source?: Layer): Popup;

    export type Direction = 'right' | 'left' | 'top' | 'bottom' | 'center' | 'auto';

    export interface TooltipOptions extends DivOverlayOptions {
        pane?: string;
        offset?: PointExpression;
        direction?: Direction;
        permanent?: boolean;
        sticky?: boolean;
        interactive?: boolean;
        opacity?: number;
    }

    export interface Tooltip extends Layer {}

    export function tooltip(options?: TooltipOptions, source?: Layer): Tooltip;

    export interface ZoomOptions {
        animate?: boolean;
    }

    export interface PanOptions {
        animate?: boolean;
        duration?: number;
        easeLinearity?: number;
        noMoveStart?: boolean;
    }

    export interface ZoomPanOptions extends ZoomOptions, PanOptions {}

    export interface FitBoundsOptions extends ZoomOptions, PanOptions {
        paddingTopLeft?: PointExpression;
        paddingBottomRight?: PointExpression;
        padding?: PointExpression;
        maxZoom?: number;
    }

    export interface LocateOptions {
        watch?: boolean;
        setView?: boolean;
        maxZoom?: number;
        timeout?: number;
        maximumAge?: number;
        enableHighAccuracy?: boolean;
    }

    export interface Handler {
        enable(): this;
        disable(): this;
        enabled(): boolean;

        // Extension methods
        addHooks(): void;
        removeHooks(): void;
    }

    export interface Event {
        type: string;
        target: any; // should this be Object and have users cast?
    }

    export interface MouseEvent extends Event {
        latlng: LatLng;
        layerPoint: Point;
        containerPoint: Point;
        originalEvent: MouseEvent; // how can I reference the global MouseEvent?
    }

    export interface LocationEvent extends Event {
        latlng: LatLng;
        bounds: LatLngBounds;
        accuracy: number;
        altitude: number;
        altitudeAccuracy: number;
        heading: number;
        speed: number;
        timestamp: number;
    }

    export interface ErrorEvent extends Event {
        message: string;
        code: number;
    }

    export interface LayerEvent extends Event {
        layer: Layer;
    }

    export interface LayersControlEvent extends LayerEvent {
        name: string;
    }

    export interface TileEvent extends Event {
        tile: HTMLImageElement;
        coords: Point; // apparently not a normal point, since docs say it has z (zoom)
    }

    export interface TileErrorEvent extends TileEvent {
        error: Error;
    }

    export interface ResizeEvent extends Event {
        oldSize: Point;
        newSize: Point;
    }

    export interface GeoJSONEvent extends Event {
        layer: Layer;
        properties: any; // any or Object?
        geometryType: string;
        id: string;
    }

    export interface PopupEvent extends Event {
        popup: Popup;
    }

    export interface TooltipEvent extends Event {
        tooltip: Tooltip;
    }

    export interface DragEndEvent extends Event {
        distance: number;
    }

    interface DefaultMapPanes {
        mapPane: HTMLElement;
        tilePane: HTMLElement;
        overlayPane: HTMLElement;
        shadowPane: HTMLElement;
        markerPane: HTMLElement;
        tooltipPane: HTMLElement;
        popupPane: HTMLElement;
    }

    export interface Map extends Evented {
        getRenderer(layer: Path): Renderer;

        // Methods for layers and controls
        addControl(control: Control): this;
        removeControl(control: Control): this;
        addLayer(layer: Layer): this;
        removeLayer(layer: Layer): this;
        hasLayer(layer: Layer): boolean;
        eachLayer(fn: (layer: Layer) => void, context?: Object): this;
        openPopup(popup: Popup): this;
        openPopup(content: string, latlng: LatLng, options?: PopupOptions): this;
        openPopup(content: string, latlng: LatLngLiteral, options?: PopupOptions): this;
        openPopup(content: string, latlng: LatLngTuple, options?: PopupOptions): this;
        openPopup(content: HTMLElement, latlng: LatLng, options?: PopupOptions): this;
        openPopup(content: HTMLElement, latlng: LatLngLiteral, options?: PopupOptions): this;
        openPopup(content: HTMLElement, latlng: LatLngTuple, options?: PopupOptions): this;
        closePopup(popup?: Popup): this;
        openTooltip(tooltip: Tooltip): this;
        openTooltip(content: string, latlng: LatLng, options?: TooltipOptions): this;
        openTooltip(content: string, latlng: LatLngLiteral, options?: TooltipOptions): this;
        openTooltip(content: string, latlng: LatLngTuple, options?: TooltipOptions): this;
        openTooltip(content: HTMLElement, latlng: LatLng, options?: TooltipOptions): this;
        openTooltip(content: HTMLElement, latlng: LatLngLiteral, options?: TooltipOptions): this;
        openTooltip(content: HTMLElement, latlng: LatLngTuple, options?: TooltipOptions): this;
        closeTooltip(tooltip?: Tooltip): this;

        // Methods for modifying map state
        setView(center: LatLng, zoom: number, options?: ZoomPanOptions): this;
        setView(center: LatLngLiteral, zoom: number, options?: ZoomPanOptions): this;
        setView(center: LatLngTuple, zoom: number, options?: ZoomPanOptions): this;
        setZoom(zoom: number, options: ZoomPanOptions): this;
        zoomIn(delta?: number, options?: ZoomOptions): this;
        zoomOut(delta?: number, options?: ZoomOptions): this;
        setZoomAround(latlng: LatLng, zoom: number, options: ZoomOptions): this;
        setZoomAround(latlng: LatLngLiteral, zoom: number, options: ZoomOptions): this;
        setZoomAround(latlng: LatLngTuple, zoom: number, options: ZoomOptions): this; // will the latlng version using tuple take precedence or will the point tuple version?
        setZoomAround(offset: Point, zoom: number, options: ZoomOptions): this;
        fitBounds(bounds: LatLngBounds, options: FitBoundsOptions): this;
        fitBounds(bounds: LatLngBoundsLiteral, options: FitBoundsOptions): this;
        fitWorld(options?: FitBoundsOptions): this;
        panTo(latlng: LatLng, options?: PanOptions): this;
        panTo(latlng: LatLngLiteral, options?: PanOptions): this;
        panTo(latlng: LatLngTuple, options?: PanOptions): this;
        panBy(offset: Point): this;
        panBy(offset: PointTuple): this;
        setMaxBounds(bounds: Bounds): this; // is this really bounds and not lanlngbounds?
        setMaxBounds(bounds: BoundsLiteral): this;
        setMinZoom(zoom: number): this;
        setMaxZoom(zoom: number): this;
        panInsideBounds(bounds: LatLngBounds, options?: PanOptions): this;
        panInsideBounds(bounds: LatLngBoundsLiteral, options?: PanOptions): this;
        invalidateSize(options: ZoomPanOptions): this;
        invalidateSize(animate: boolean): this;
        stop(): this;
        flyTo(latlng: LatLng, zoom?: number, options?: ZoomPanOptions): this;
        flyTo(latlng: LatLngLiteral, zoom?: number, options?: ZoomPanOptions): this;
        flyTo(latlng: LatLngTuple, zoom?: number, options?: ZoomPanOptions): this;
        flyToBounds(bounds: LatLngBounds, options?: FitBoundsOptions): this;
        flyToBounds(bounds: LatLngBoundsLiteral, options?: FitBoundsOptions): this;

        // Other methods
        addHandler(name: string, HandlerClass: () => Handler): this; // HandlerClass is actually a constructor function, is this the right way?
        remove(): this;
        createPane(name: string, container?: HTMLElement): HTMLElement;
        getPane(pane: string): HTMLElement;
        getPane(pane: HTMLElement): HTMLElement;
        getPanes(): {[name: string]: HTMLElement} & DefaultMapPanes;
        getContainer(): HTMLElement;
        whenReady(fn: () => void, context?: Object): this;

        // Methods for getting map state
        getCenter(): LatLng;
        getZoom(): number;
        getBounds(): LatLngBounds;
        getMinZoom(): number;
        getMaxZoom(): number;
        getBoundsZoom(bounds: LatLngBounds, inside?: boolean): number;
        getBoundsZoom(bounds: LatLngBoundsLiteral, inside?: boolean): number;
        getSize(): Point;
        getPixelBounds(): Bounds;
        getPixelOrigin(): Point;
        getPixelWorldBounds(zoom?: number): Bounds;

        // Conversion methods
        getZoomScale(toZoom: number, fromZoom: number): number;
        getScaleZoom(scale: number, fromZoom: number): number;
        project(latlng: LatLng, zoom: number): Point;
        project(latlng: LatLngLiteral, zoom: number): Point;
        project(latlng: LatLngTuple, zoom: number): Point;
        unproject(point: Point, zoom: number): LatLng;
        unproject(point: PointTuple, zoom: number): LatLng;
        layerPointToLatLng(point: Point): LatLng;
        layerPointToLatLng(point: PointTuple): LatLng;
        latLngToLayerPoint(latlng: LatLng): Point;
        latLngToLayerPoint(latlng: LatLngLiteral): Point;
        latLngToLayerPoint(latlng: LatLngTuple): Point;
        wrapLatLng(latlng: LatLng): LatLng;
        wrapLatLng(latlng: LatLngLiteral): LatLng;
        wrapLatLng(latlng: LatLngTuple): LatLng;
        distance(latlng1: LatLng, latlng2: LatLng): number;
        distance(latlng1: LatLngLiteral, latlng2: LatLngLiteral): number;
        distance(latlng1: LatLngTuple, latlng2: LatLngTuple): number;
        containerPointToLayerPoint(point: Point): Point;
        containerPointToLayerPoint(point: PointTuple): Point;
        layerPointToContainerPoint(point: Point): Point;
        layerPointToContainerPoint(point: PointTuple): Point;
        latLngToContainerPoint(latlng: LatLng): Point;
        latLngToContainerPoint(latlng: LatLngLiteral): Point;
        latLngToContainerPoint(latlng: LatLngTuple): Point;
        mouseEventToContainerPoint(ev: MouseEvent): Point;
        mouseEventToLayerPoint(ev: MouseEvent): Point;
        mouseEventToLatLng(ev: MouseEvent): LatLng;

        // Geolocation methods
        locate(options?: LocateOptions): this;
        stopLocate(): this;

        // Properties
        boxZoom: Handler;
        doubleClickZoom: Handler;
        dragging: Handler;
        keyboard: Handler;
        scrollWheelZoom: Handler;
        tap: Handler;
        touchZoom: Handler;
    }

    export function map(id: string, options?: MapOptions): Map;

    export function map(el: HTMLElement, options?: MapOptions): Map;

    export interface IconOptions extends LayerOptions {
        iconUrl: string;
        iconRetinaUrl?: string;
        iconSize?: PointExpression;
        iconAnchor?: PointExpression;
        popupAnchor?: PointExpression;
        shadowUrl?: string;
        shadowRetinaUrl?: string;
        shadowSize?: PointExpression;
        shadowAnchor?: PointExpression;
        className?: string;
    }

    export interface Icon extends Layer {
        createIcon(oldIcon?: HTMLElement): HTMLElement;
        createShadow(oldIcon?: HTMLElement): HTMLElement;
    }

    export namespace Icon {
        export const Default: Icon;
    }

    export function icon(options: IconOptions): Icon;

    export interface DivIconOptions extends LayerOptions {
        html?: string;
        bgPos?: PointExpression;
        iconSize?: PointExpression;
        iconAnchor?: PointExpression;
        popupAnchor?: PointExpression;
        className?: string;
    }

    export interface DivIcon extends Icon {}

    export function divIcon(options: DivIconOptions): DivIcon;

    export interface MarkerOptions extends InteractiveLayerOptions {
        icon?: Icon;
        draggable?: boolean;
        keyboard?: boolean;
        title?: string;
        alt?: string;
        zIndexOffset?: number;
        opacity?: number;
        riseOnHover?: boolean;
        riseOffset?: number;
    }

    export interface Marker extends Layer {
        getLatLng(): LatLng;
        setLatLng(latlng: LatLng): this;
        setLatLng(latlng: LatLngLiteral): this;
        setLatLng(latlng: LatLngTuple): this;
        setZIndexOffset(offset: number): this;
        setIcon(icon: Icon): this;
        setOpacity(opacity: number): this;

        // Properties
        dragging: Handler;
    }

    export function marker(latlng: LatLng, options?: MarkerOptions): Marker;

    export function marker(latlng: LatLngLiteral, options?: MarkerOptions): Marker;

    export function marker(latlng: LatLngTuple, options?: MarkerOptions): Marker;
}

declare module 'leaflet' {
    export = L;
}
