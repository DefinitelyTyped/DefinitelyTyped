// NAVER Maps JavaScript API Version: 3.7

/// <reference types="geojson" />

declare namespace naver.maps {
    /***** static members *****/
    let VERSION: string;
    let jsContentLoaded: boolean;
    function onJSContentLoaded(...args: any): void;

    // --------------------------------------------------------------------------
    //  Types
    // --------------------------------------------------------------------------
    type PointArrayLiteral = [number, number];
    type PointLiteral = PointArrayLiteral | PointObjectLiteral;
    type SizeArrayLiteral = [number, number];
    type SizeLiteral = SizeArrayLiteral | SizeObjectLiteral;
    type LatLngLiteral = PointLiteral | LatLngObjectLiteral;
    type PointBoundsArrayLiteral = [number, number, number, number];
    type PointBoundsLiteral = PointBoundsArrayLiteral | PointBoundsObjectLiteral;
    type LatLngBoundsLiteral = PointBoundsLiteral | LatLngBoundsObjectLiteral;
    type BoundsLiteral = PointBoundsLiteral | LatLngBoundsLiteral;
    type CoordLiteral = PointLiteral | LatLngLiteral;
    type Coord = Point | LatLng;
    type Bounds = PointBounds | LatLngBounds;
    type DOMEvent = Event;
    type StylingFunction = (feature: Feature) => StyleOptions;
    type ArrayOfCoords = Point[] | LatLng[];
    type ArrayOfBounds = PointBounds[] | LatLngBounds[];
    type ArrayOfBoundsLiteral = PointBoundsLiteral[] | LatLngBoundsLiteral[];
    type forEachOverlayCallback = (overlay: Marker | Polyline | Polygon, index: number) => void;
    type GeoJSON = GeoJSON.Feature<GeoJSON.Geometry> | GeoJSON.FeatureCollection<GeoJSON.Geometry>;
    // See https://www.topografix.com/gpx.asp
    type GPX = any;
    // See https://developers.google.com/kml/documentation/kml_tut?hl=ko
    type KML = any;
    type KVOArrayOfCoords = KVOArray<Point> | KVOArray<LatLng>;
    type ArrayOfCoordsLiteral = PointLiteral[] | LatLngLiteral[];
    type padding = Margin;
    type StrokeStyleType =
        | "solid"
        | "shortdash"
        | "shortdot"
        | "shortdashdot"
        | "shortdashdotdot"
        | "dot"
        | "dash"
        | "longdash"
        | "dashdot"
        | "longdashdot"
        | "longdashdotdot";
    type StrokeLineCapType = "butt" | "round" | "square";
    type StrokeLineJoinType = "miter" | "round" | "bevel";

    // --------------------------------------------------------------------------
    //  Interfaces
    // --------------------------------------------------------------------------
    interface MapEventListener {
        eventName: string;
        listener: (event: any) => any;
        listenerId: string;
        target: any;
    }
    interface PointObjectLiteral {
        x: number;
        y: number;
    }
    interface SizeObjectLiteral {
        width: number;
        height: number;
    }
    interface LatLngObjectLiteral {
        lat: number;
        lng: number;
    }
    interface PointBoundsObjectLiteral {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    }
    interface LatLngBoundsObjectLiteral {
        north: number;
        east: number;
        south: number;
        west: number;
    }

    /**
     * MapSystemProjection
     */
    interface MapSystemProjection extends KVO {
        // See https://navermaps.github.io/maps.js.ncp/docs/tutorial-Projection.html
        factor(zoom: number): number;
        fromCoordToOffset(coord: Coord): Point;
        fromCoordToPoint(coord: Coord): Point;
        fromOffsetToCoord(offset: Point): Coord;
        fromOffsetToPoint(offset: Point): Point;
        fromPointToCoord(point: Point): Coord;
        fromPointToOffset(point: Point): Point;
        getDestinationCoord(fromCoord: Coord, angle: number, meter: number): Coord;
        getDistance(coord1: Coord, coord2: Coord): number;
        getProjectionName(): number;
        scaleDown(operand: number | Point | Size, zoom: number): number | Point | Size;
        scaleUp(operand: number | Point | Size, zoom: number): number | Point | Size;
    }

    /**
     * MapOptions
     */
    interface MapOptions {
        // See https://navermaps.github.io/maps.js.ncp/docs/naver.maps.html#.MapOptions
        background?: string;
        baseTileOpacity?: number;
        bounds?: Bounds | BoundsLiteral;
        center?: Coord | CoordLiteral; // default naver.maps.LatLng(37.5666103, 126.9783882)
        zoom?: number; // default 16
        disableDoubleClickZoom?: boolean;
        disableDoubleTapZoom?: boolean;
        disableKineticPan?: boolean;
        disableTwoFingerTapZoom?: boolean;
        draggable?: boolean;
        keyboardShortcuts?: boolean;
        logoControl?: boolean;
        logoControlOptions?: LogoControlOptions;
        mapDataControl?: boolean;
        mapDataControlOptions?: MapDataControlOptions;
        mapTypeControl?: boolean;
        mapTypeControlOptions?: MapTypeControlOptions;
        mapTypeId?: string;
        mapTypes?: MapTypeRegistry;
        maxBounds?: Bounds | BoundsLiteral;
        maxZoom?: number;
        minZoom?: number;
        padding?: padding;
        pinchZoom?: boolean;
        resizeOrigin?: Position;
        scaleControl?: boolean;
        scaleControlOptions?: ScaleControlOptions;
        scrollWheel?: boolean;
        size?: Size | SizeLiteral;
        overlayZoomEffect?: null | string;
        tileSpare?: number;
        tileTransition?: boolean;
        tileDuration?: number;
        zoomControl?: boolean;
        zoomControlOptions?: ZoomControlOptions;
        zoomOrigin?: Coord | CoordLiteral;
        blankTileImage?: null | string;
    }

    /**
     * MarkerOptions
     */
    interface MarkerOptions {
        animation?: Animation;
        map?: Map;
        position: Coord | CoordLiteral;
        icon?: string | ImageIcon | SymbolIcon | HtmlIcon;
        shape?: MarkerShape;
        title?: string;
        cursor?: string;
        clickable?: boolean;
        draggable?: boolean;
        visible?: boolean;
        zIndex?: number;
    }

    /**
     * MapPanes
     */
    interface MapPanes {
        overlayLayer: HTMLElement;
        overlayImage: HTMLElement;
        floatPane: HTMLElement;
    }

    /**
     * InfoWindowOptions
     */
    interface InfoWindowOptions {
        position?: Coord | CoordLiteral;
        content: string | HTMLElement;
        zIndex?: number;
        maxWidth?: number;
        pixelOffset?: Point | PointLiteral;
        backgroundColor?: string;
        borderColor?: string;
        borderWidth?: number;
        disableAutoPan?: boolean;
        disableAnchor?: boolean;
        anchorSkew?: boolean;
        anchorSize?: Size | SizeLiteral;
        anchorColor?: string;
    }

    /**
     * ImageMapTypeOptions
     */
    interface ImageMapTypeOptions {
        name?: string;
        maxZoom?: number;
        minZoom?: number;
        projection?: Projection;
        tileSize?: Size | SizeLiteral;
        repeatX?: boolean;
        vendor?: string;
        provider?: MapDataProvider[];
        uid?: string;
        darktheme?: boolean;
        getTileUrl?: (x: number, y: number, z: number) => string[];
        tileSet?: string | string[];
        overlayType?: string; // https://navermaps.github.io/maps.js.ncp/docs/tutorial-StyleMap-2-Custom-OverlayType.html
    }

    /**
     * StyleMapTypeOptions
     */
    interface StyleMapTypeOptions extends ImageMapTypeOptions {
        hd?: string;
    }

    /**
     * GroundOverlayOptions
     */
    interface GroundOverlayOptions {
        clickable?: boolean;
        map?: Map | null;
        opacity?: number;
    }

    /**
     * EllipseOptions
     */
    interface EllipseOptions {
        map?: Map;
        bounds: Bounds | BoundsLiteral;
        strokeWeight?: number;
        strokeOpacity?: number;
        strokeColor?: string;
        strokeStyle?: StrokeStyleType;
        strokeLineCap?: StrokeLineCapType;
        strokeLineJoin?: StrokeLineJoinType;
        fillColor?: string;
        fillOpacity?: number;
        clickable?: boolean;
        visible?: boolean;
        zIndex?: number;
    }

    /**
     * FeatureEvent
     */
    interface FeatureEvent {
        feature: Feature;
    }

    /**
     * PointerEvent
     */
    interface PointerEvent {
        coord: Coord;
        point: Point;
        offset: Point;
        pointerEvent: DOMEvent;
        feature: Feature;
    }

    /**
     * PropertyEvent
     */
    interface PropertyEvent {
        feature: Feature;
        name: string;
        oldValue: any;
        newValue: any;
    }

    /**
     * StyleOptions
     */
    interface StyleOptions {
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
        fillColor?: string;
        fillOpacity?: number;
        clickable?: boolean;
        icon?: string | ImageIcon | SymbolIcon | HtmlIcon;
        shape?: MarkerShape;
        title?: string;
        visible?: boolean;
        zIndex?: number;
    }

    /**
     * ControlOptions
     */
    interface ControlOptions {
        position: Position;
    }
    type LogoControlOptions = ControlOptions;
    type MapDataControlOptions = ControlOptions;
    type ScaleControlOptions = ControlOptions;

    interface ZoomControlOptions extends ControlOptions {
        style?: ZoomControlStyle;
        legendDisabled?: boolean;
    }
    interface MapTypeControlOptions extends ControlOptions {
        mapTypeIds: MapTypeId[] | null;
        style: MapTypeControlStyle;
    }

    /**
     * Tile Options
     */
    interface TileOptions {
        opacity?: number;
        duration?: number;
        transition?: boolean;
        offset?: Point;
        zIndex?: number;
        size?: Size;
        pane?: HTMLElement;
    }
    interface CanvasTileOptions extends TileOptions {
        imageData?: ImageData;
    }
    interface ImageTileOptions extends TileOptions {
        urls: string[];
        imgonload?: (img: HTMLImageElement) => void;
        imgonerror?: (img: HTMLImageElement) => void;
    }
    interface TileIndex {
        xIndex: number;
        yIndex: number;
    }
    interface CanvasMapTypeOptions {
        name: string;
        maxZoom: number;
        minZoom: number;
        projection: Projection;
        tileSize?: Size | SizeLiteral;
        repeatX?: boolean;
        vendor?: string;
        provider?: MapDataProvider[];
        uid?: string;
        darktheme?: boolean;
        getTileData?: () => any;
    }

    /**
     * MapDataProvider
     */
    interface MapDataProvider {
        title: string;
        link?: string;
        bounds?: Bounds | BoundsLiteral | ArrayOfBounds | ArrayOfBoundsLiteral;
    }

    /**
     * MapType
     */
    interface MapType {
        maxZoom: number;
        minZoom: number;
        name: string;
        projection: Projection;
        tileSize: Size;
        getTile(x: number, y: number, z: number): HTMLElement | CanvasTile | ImageTile | Tile;
    }
    interface Projection {
        fromCoordToPoint(coord: Coord): Point;
        fromPointToCoord(point: Point): Coord;
    }
    interface NaverImageMapTypeOptions {
        maxZoom?: number;
        minZoom?: number;
        projection?: Projection;
        tileSize?: Size;
        hd?: string;
    }

    /**
     * LayerOptions
     */
    interface LayerOptions {
        hd?: boolean;
        overlayMap?: boolean;
        zIndex?: number;
    }
    // Deprecated!!
    // See https://navermaps.github.io/maps.js.ncp/docs/naver.maps.CadastralLayer.html#toc15__anchor
    interface CadastralLayerOptions {
        overlayMap: boolean;
        zIndex: number;
    }
    // Deprecated!!
    // See https://navermaps.github.io/maps.js.ncp/docs/naver.maps.StreetLayer.html#toc15__anchor
    interface StreetLayerOptions {
        overlayMap: boolean;
        zIndex: number;
    }
    interface TrafficLayerOptions {
        interval?: number;
        overlayMap?: boolean;
        zIndex?: number;
    }

    /**
     * HtmlIcon
     */
    interface HtmlIcon {
        content: string | HTMLElement;
        size?: Size | SizeLiteral;
        anchor?: Point | PointLiteral | Position;
    }

    /**
     * ImageIcon
     */
    interface ImageIcon {
        url: string;
        size?: Size | SizeLiteral;
        scaledSize?: Size | SizeLiteral;
        origin?: Point | PointLiteral;
        anchor?: Point | PointLiteral | Position;
    }

    /**
     * SymbolIcon
     */
    interface SymbolIcon {
        path: SymbolPath | Point[] | PointLiteral[];
        style?: SymbolStyle;
        radius?: number;
        fillColor?: string;
        fillOpacity?: number;
        strokeColor?: string;
        strokeWeight?: number;
        strokeOpacity?: number;
        strokeStyle?: StrokeStyleType;
        anchor?: Point | PointLiteral | Position;
    }

    /**
     * MarkerShape
     */
    interface MarkerShape {
        coords: any[];
        type: string;
    }

    /**
     * CircleOptions
     */
    interface CircleOptions {
        map?: Map;
        center: Coord | CoordLiteral;
        radius?: number;
        strokeWeight?: number;
        strokeOpacity?: number;
        strokeColor?: string;
        strokeStyle?: StrokeStyleType;
        strokeLineCap?: StrokeLineCapType;
        strokeLineJoin?: StrokeLineJoinType;
        fillColor?: string;
        fillOpacity?: number;
        clickable?: boolean;
        visible?: boolean;
        zIndex?: number;
    }

    /**
     * PolygonOptions
     */
    interface PolygonOptions {
        map?: Map;
        paths: ArrayOfCoords[] | KVOArray<KVOArrayOfCoords> | ArrayOfCoordsLiteral[];
        strokeWeight?: number;
        strokeOpacity?: number;
        strokeColor?: string;
        strokeStyle?: StrokeStyleType;
        strokeLineCap?: StrokeLineCapType;
        strokeLineJoin?: StrokeLineJoinType;
        fillColor?: string;
        fillOpacity?: number;
        clickable?: boolean;
        visible?: boolean;
        zIndex?: number;
    }

    /**
     * PolylineOptions
     */
    interface PolylineOptions {
        map?: Map;
        path: ArrayOfCoords | KVOArrayOfCoords | ArrayOfCoordsLiteral;
        strokeWeight?: number;
        strokeOpacity?: number;
        strokeColor?: string;
        strokeStyle?: StrokeStyleType;
        strokeLineCap?: StrokeLineCapType;
        strokeLineJoin?: StrokeLineJoinType;
        clickable?: boolean;
        visible?: boolean;
        zIndex?: number;
        startIcon?: PointingIcon;
        startIconSize?: number;
        endIcon?: PointingIcon;
        endIconSize?: number;
    }

    /**
     * RectangleOptions
     */
    interface RectangleOptions {
        map?: Map;
        bounds: Bounds | BoundsLiteral;
        strokeWeight?: number;
        strokeOpacity?: number;
        strokeColor?: string;
        strokeStyle?: StrokeStyleType;
        strokeLineCap?: StrokeLineCapType;
        strokeLineJoin?: StrokeLineJoinType;
        fillColor?: string;
        fillOpacity?: number;
        clickable?: boolean;
        visible?: boolean;
        zIndex?: number;
    }

    interface DOMEventListener {
        eventName: string;
        listener: (event: any) => any;
        target: HTMLElement;
    }

    interface Margin {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }

    interface FitBoundsOptions extends Margin {
        maxZoom?: number;
    }

    interface TransitionOptions {
        duration?: number; // default 500
        easing?: string; // default easeOutCubic
    }

    // --------------------------------------------------------------------------
    //  Enums
    // --------------------------------------------------------------------------
    /**
     * MapTypeControlStyle
     */
    enum MapTypeControlStyle {
        BUTTON = 1,
        DROPDOWN,
    }

    /**
     * ZoomControlStyle
     */
    enum ZoomControlStyle {
        LARGE = 1,
        SMALL,
    }

    /**
     * Animation
     */
    enum Animation {
        BOUNCE = 1,
        DROP,
    }

    /**
     * MapTypeId
     */
    enum MapTypeId {
        NORMAL = "normal",
        TERRAIN = "terrain",
        SATELLITE = "satellite",
        HYBRID = "hybrid",
    }

    /**
     * PointingIcon
     */
    enum PointingIcon {
        OPEN_ARROW = 1,
        BLOCK_ARROW,
        CIRCLE,
        DIAMOND,
    }

    /**
     * Position
     */
    enum Position {
        CENTER = 0,
        TOP_LEFT,
        TOP_CENTER,
        TOP_RIGHT,
        LEFT_CENTER,
        LEFT_TOP,
        LEFT_BOTTOM,
        RIGHT_TOP,
        RIGHT_CENTER,
        RIGHT_BOTTOM,
        BOTTOM_LEFT,
        BOTTOM_CENTER,
        BOTTOM_RIGHT,
    }

    /**
     * SymbolPath
     */
    enum SymbolPath {
        BACKWARD_CLOSED_ARROW = 1,
        BACKWARD_OPEN_ARROW,
        CIRCLE,
        FORWARD_CLOSED_ARROW,
        FORWARD_OPEN_ARROW,
    }

    /**
     * SymbolStyle
     */
    enum SymbolStyle {
        CIRCLE = "circle",
        PATH = "path",
        CLOSED_PATH = "closedPath",
    }

    /**
     * KVO
     */
    class KVO {
        constructor();
        set(key: string, value: any, silently?: boolean): void;
        get(key: string): any;
        bindTo(key: string | string[], target: KVO, targetKey?: string): void;
        unbind(key: string): void;
        unbindAll(): void;
        setValues(properties: { [key: string]: any }): void;
        addListener(eventName: string, listener: (event: any) => any): MapEventListener;
        addListenerOnce(eventName: string, listener: (event: any) => any): MapEventListener;
        hasListener(eventName: string): boolean;
        removeListener(listeners: MapEventListener | MapEventListener[]): void;
        clearListeners(eventName: string): void;
        trigger(eventName: string, eventObject?: any): void;
    }

    /**
     * KVOArray
     */
    class KVOArray<T> extends KVO {
        constructor(array: T[]);
        clear(): void;
        forEach(callback: (element: T, index: number) => void): void;
        getArray(): T[];
        getAt(index: number): T;
        getIndexOfElement(element: T): number;
        getLength(): number;
        insertAt(index: number, element: T): void;
        pop(): T;
        push(element: T): number;
        removeAt(index: number): T;
        removeElement(element: T): void;
        setAt(index: number, element: T): void;
        splice(startIndex: number, deleteCount: number, ...newElement: T[]): T[];
    }

    /**
     * Point
     */
    class Point {
        x: number;
        y: number;
        constructor(x: number, y: number);
        constructor(literal: PointLiteral);
        add(x: number, y: number): Point;
        add(point: Coord | PointLiteral): Point;
        ceil(): Point;
        clone(): Point;
        div(point: Coord | PointLiteral): void;
        div(x: number, y: number): Point;
        equals(point: Coord | PointLiteral): boolean;
        floor(): Point;
        mul(x: number, y: number): Point;
        mul(point: Coord | PointLiteral): Point;
        round(): Point;
        sub(point: Coord | PointLiteral): Point;
        sub(x: number, y: number): Point;
        toString(): string;
    }

    /**
     * Size
     */
    class Size {
        width: number;
        height: number;
        constructor(width: number, height: number);
        constructor(literal: SizeLiteral);
        add(width: number, height: number): Size;
        add(size: Size | SizeLiteral): Size;
        ceil(): Size;
        clone(): Size;
        div(width: number, height: number): Size;
        div(size: Size | SizeLiteral): Size;
        equals(size: Size | SizeLiteral): boolean;
        floor(): Size;
        mul(size: Size | SizeLiteral): Size;
        mul(width: number, height: number): Size;
        round(): Size;
        sub(size: Size | SizeLiteral): Size;
        sub(width: number, height: number): Size;
        toString(): string;
    }

    /**
     * PointBounds
     */
    class PointBounds {
        constructor(minPoint: Point, maxPoint: Point);
        constructor(literal: PointBoundsLiteral);
        static bounds(point: Coord | PointLiteral, pointN: Coord | PointLiteral): PointBounds;
        clone(): PointBounds;
        equals(bounds: Bounds | PointBoundsLiteral): boolean;
        extend(point: Coord | PointLiteral): PointBounds;
        getCenter(): Point;
        getMax(): Point;
        getMin(): Point;
        hasBounds(bounds: Bounds | PointBoundsLiteral): boolean;
        hasPoint(point: Coord | PointLiteral): boolean;
        intersects(bounds: Bounds | PointBoundsLiteral): boolean;
        maxX(): number;
        maxY(): number;
        minX(): number;
        minY(): number;
        toString(): string;
        toArray(): PointBoundsArrayLiteral;
        union(bounds: Bounds | PointBoundsLiteral): PointBounds;
    }

    /**
     * LatLng
     */
    class LatLng extends Point {
        constructor(lat: number, lng: number);
        constructor(literal: LatLngLiteral);
        clone(): LatLng;
        destinationPoint(angle: number, meter: number): LatLng;
        equals(point: Coord | LatLngLiteral): boolean;
        lat(): number;
        lng(): number;
        toPoint(): Point;
        toString(): string;
        isEmpty(): boolean;
    }

    /**
     * LatLngBounds
     */
    class LatLngBounds extends PointBounds {
        constructor(sw: LatLng, ne: LatLng);
        constructor(literal: LatLngBoundsLiteral);
        static bounds(latlng: Coord | LatLngLiteral, latlngN: Coord | LatLngLiteral): LatLngBounds;
        clone(): LatLngBounds;
        east(): number;
        equals(bounds: Bounds | LatLngBoundsLiteral): boolean;
        extend(latlng: Coord | LatLngLiteral): LatLngBounds;
        getCenter(): LatLng;
        getNE(): LatLng;
        getSW(): LatLng;
        hasLatLng(latlng: Coord | LatLngLiteral): boolean;
        intersects(bounds: Bounds | LatLngBoundsLiteral): boolean;
        north(): number;
        south(): number;
        toPointBounds(): PointBounds;
        union(bounds: Bounds | LatLngBoundsLiteral): LatLngBounds;
        west(): number;
    }

    /**
     * Map
     */
    class Map extends KVO {
        controls: KVOArray<Position>;
        data: Data;
        layers: LayerRegistry;
        mapTypes: MapTypeRegistry;
        mapSystemProjection: MapSystemProjection;

        constructor(mapDiv: string | HTMLElement, mapOptions?: MapOptions);
        addPane(name: string, elementOrIndex: HTMLElement | number): void;
        autoResize(): void;
        destroy(): void;
        fitBounds(
            bounds: Bounds | BoundsLiteral | ArrayOfCoords | ArrayOfCoordsLiteral,
            fitBoundsOptions?: FitBoundsOptions,
        ): void;
        getBounds(): Bounds;
        getCenter(): Coord;
        getCenterPoint(): Coord;
        getElement(): HTMLElement;
        getMapTypeId(): string;
        getMaxZoom(): number;
        getMinZoom(): number;
        getOptions(key?: string): any;
        getPanes(): MapPanes;
        getPrimitiveProjection(): Projection;
        getProjection(): MapSystemProjection;
        getSize(): Size;
        getZoom(): number;
        morph(coord: Coord | CoordLiteral, zoom?: number, transitionOptions?: TransitionOptions): void;
        panBy(offset: Point | PointLiteral): void;
        panTo(coord: Coord | CoordLiteral, transitionOptions?: TransitionOptions): void;
        panToBounds(bounds: Bounds | BoundsLiteral, transitionOptions?: TransitionOptions, margin?: Margin): void;
        refresh(noEffect?: boolean): void;
        removePane(name: string): void;
        setCenter(center: Coord | CoordLiteral): void;
        setCenterPoint(point: Point | PointLiteral): void;
        setMapTypeId(mapTypeId: string): void;
        setOptions(newOptionsOrKey: { [key: string]: any } | string, value?: any): void;
        setSize(size: Size | SizeLiteral): void;
        setZoom(zoom: number, effect?: boolean): void;
        updateBy(coord: Coord | CoordLiteral, zoom: number): void;
        zoomBy(deltaZoom: number, zoomOrigin?: Coord | CoordLiteral, effect?: boolean): void;
    }

    /**
     * Tile
     */
    class Tile extends KVO {
        constructor(element: HTMLElement, tileOptions?: TileOptions);
        appendTo(parentNode: HTMLElement): void;
        cancelFadeIn(): void;
        destroy(): void;
        fadeIn(callback: () => void, startOpacity?: number): void;
        getDuration(): number;
        getElement(): HTMLElement;
        getOffset(): Point;
        getOpacity(): number;
        getSize(): Size;
        getTileIndex(): TileIndex;
        getZIndex(): number;
        hide(): void;
        load(tileOptions?: TileOptions, loaded?: () => void): void;
        remove(): void;
        reset(mapType: MapType, zoom: number, tileOptions?: TileOptions): void;
        setBlank(): void;
        setOffset(offset: Point): void;
        setOffset(x: number, y: number): void;
        setOpacity(opacity: number): void;
        setSize(size: Size): void;
        setTileIndex(tileIndex: TileIndex): void;
        setZIndex(zIndex: number): void;
        show(): void;
    }

    /**
     * CanvasTile
     */
    class CanvasTile extends Tile {
        constructor(canvasTileOptions: CanvasTileOptions);
        getElements(): [HTMLElement, HTMLCanvasElement];
    }

    /**
     * ImageTile
     */
    class ImageTile extends Tile {
        constructor(imageTileOptions: ImageTileOptions);
        getImageElements(): HTMLElement[];
        getUrls(): string[];
        setUrls(urls: string[]): void;
    }

    /**
     * CanvasMapType
     */
    class CanvasMapType implements MapType {
        minZoom: number;
        maxZoom: number;
        name: string;
        projection: Projection;
        tileSize: Size;
        constructor(canvasMapTypeOptions: CanvasMapTypeOptions);
        getMapTypeOptions(): CanvasMapTypeOptions;
        getMaxZoom(): number;
        getMinZoom(): number;
        getName(): string;
        getTile(x: number, y: number, z: number): CanvasTile;
        getTileData(x: number, y: number, z: number): ImageData;
        setMapTypeOptions(canvasMapTypeOptions: CanvasMapTypeOptions): void;
    }

    /**
     * ImageMapType
     */
    class ImageMapType implements MapType {
        maxZoom: number;
        minZoom: number;
        name: string;
        projection: Projection;
        tileSize: Size;
        repeatX: boolean;
        vendor: string;
        constructor(imageMapTypeOptions: ImageMapTypeOptions);
        getMapTypeOptions(): ImageMapTypeOptions;
        getMaxZoom(): number;
        getMinZoom(): number;
        getName(): string;
        getTile(x: number, y: number, z: number): ImageTile;
        getTileUrls(x: number, y: number, z: number): string[];
        setMapTypeOptions(imageMapTypeOptions: ImageMapTypeOptions): void;
    }

    /**
     * MapTypeRegistry
     */
    class MapTypeRegistry extends KVO {
        uid?: string;
        VENDOR?: string;
        constructor(mapTypeInfo?: { [mapTypeId: string]: MapType }, defaultMapTypeId?: string);
        getPreviousTypeId(): string;
        getSelectedType(): MapType;
        getSelectedTypeId(): string;
        getTypeIds(): string[];
        set(mapTypeId: string, mapType: MapType): void;
        setSelectedTypeId(mapTypeId: string): void;
    }

    /**
     * LayerRegistry
     */
    class LayerRegistry extends KVO {
        set(key: string, value: Layer): void;
        getLayerNames(): string[];
    }

    /**
     * NaverStyleMapTypeOptions
     */
    class NaverStyleMapTypeOptions {
        constructor(options?: StyleMapTypeOptions);
        static getBicycleLayer(opts?: ImageMapTypeOptions): ImageMapType;
        static getBlankMap(opts?: ImageMapTypeOptions): ImageMapType;
        static getCadastralLayer(opts?: ImageMapTypeOptions): ImageMapType;
        static getHybridMap(opts?: ImageMapTypeOptions): ImageMapType;
        static getMapTypes(opts?: ImageMapTypeOptions): ImageMapType;
        static getNormalLabelLayer(opts?: ImageMapTypeOptions): ImageMapType;
        static getNormalMap(opts?: ImageMapTypeOptions): ImageMapType;
        static getSatelliteLabelLayer(opts?: ImageMapTypeOptions): ImageMapType;
        static getSatelliteMap(opts?: ImageMapTypeOptions): ImageMapType;
        static getStreetLayer(opts?: ImageMapTypeOptions): ImageMapType;
        static getTerrainMap(opts?: ImageMapTypeOptions): ImageMapType;
        static getTrafficLayer(opts?: ImageMapTypeOptions): ImageMapType;
        static getVectorMap(opts?: ImageMapTypeOptions): ImageMapType;
        static getWorldMap(opts?: ImageMapTypeOptions): ImageMapType;
    }

    // Deprecated!!
    // See https://navermaps.github.io/maps.js.ncp/docs/naver.maps.NaverMapTypeOptions.html
    // class NaverMapTypeOptions {
    //     static getBicycleLayer(opts: NaverImageMapTypeOptions): ImageMapType;
    //     static getBlankMap(opts: NaverImageMapTypeOptions): ImageMapType;
    //     static getCadastralLayer(opts?: NaverImageMapTypeOptions): ImageMapType;
    //     static getHybridMap(opts?: NaverImageMapTypeOptions): ImageMapType;
    //     static getMapTypes(opts?: NaverImageMapTypeOptions): MapTypeRegistry;
    //     static getNormalLabelLayer(opts?: NaverImageMapTypeOptions): ImageMapType;
    //     static getNormalMap(opts?: NaverImageMapTypeOptions): ImageMapType;
    //     static getSatelliteLabelLayer(opts?: NaverImageMapTypeOptions): ImageMapType;
    //     static getSatelliteMap(opts?: NaverImageMapTypeOptions): ImageMapType;
    //     static getStreetLayer(opts?: NaverImageMapTypeOptions): ImageMapType;
    //     static getTerrainMap(opts?: NaverImageMapTypeOptions): ImageMapType;
    //     static getTrafficLayer(opts?: NaverImageMapTypeOptions): ImageMapType;
    //     static getVectorMap(opts?: NaverImageMapTypeOptions): ImageMapType;
    //     static getWorldMap(opts?: NaverImageMapTypeOptions): ImageMapType;
    // }

    /**
     * CustomControl
     */
    class CustomControl extends KVO {
        constructor(html: string, ControlOptions: ControlOptions);
        getElement(): HTMLElement;
        getMap(): Map | null;
        getOptions(key?: string): any;
        html(html?: string): string;
        setMap(map?: Map | null): void;
        setOptions(newOptions: ControlOptions): void;
        setPosition(position: Position): void;
    }

    /**
     * LogoControl
     */
    class LogoControl extends CustomControl {
        constructor(LogoControlOptions: LogoControlOptions);
    }

    /**
     * MapDataControl
     */
    class MapDataControl extends CustomControl {
        constructor(MapDataControlOptions: MapDataControlOptions);
    }

    /**
     * MapTypeControl
     */
    class MapTypeControl extends CustomControl {
        constructor(MapTypeControlOptions: MapTypeControlOptions);
    }

    /**
     * ScaleControl
     */
    class ScaleControl extends CustomControl {
        constructor(ScaleControlOptions: ScaleControlOptions);
    }

    /**
     * ZoomControl
     */
    class ZoomControl extends CustomControl {
        constructor(ZoomControlOptions: ZoomControlOptions);
    }

    /**
     * Layer
     */
    class Layer extends KVO {
        name: string;
        constructor(name: string, MapTypeRegistry: MapTypeRegistry, options?: LayerOptions);
        getLayerType(): MapType;
        getLayerTypeId(): string;
        getMap(): Map | null;
        getOpacity(): number;
        getPaneElement(): HTMLElement;
        refresh(noEffect?: boolean): void;
        setLayerTypeId(typeId: string): void;
        setMap(map: Map | null): void;
        setOpacity(opacity: number): void;
    }

    /**
     * LabelLayer
     */
    class LabelLayer extends Layer {
        constructor(name: string, registry: ImageMapType, option?: any);
    }

    /**
     * CadastralLayer
     */
    class CadastralLayer extends LabelLayer {
        constructor(option?: CadastralLayerOptions);
    }

    /**
     * StreetLayer
     */
    class StreetLayer extends LabelLayer {
        constructor(option?: StreetLayerOptions);
    }

    /**
     * TrafficLayer
     */
    class TrafficLayer extends LabelLayer {
        constructor(option?: TrafficLayerOptions);
        endAutoRefresh(): void;
        getRTSVersion(): number;
        startAutoRefresh(): void;
        refreshRTSVersion(): void;
    }

    /**
     * Data
     */
    class Data extends KVO {
        constructor();
        addFeature(feature: Feature, autoStyle: boolean): void;
        addGeoJson(geojson: GeoJSON, autoStyle: boolean): void;
        addGpx(xmlDoc: GPX, autoStyle: boolean): void;
        addKml(xmlDoc: KML, autoStyle: boolean): void;
        forEach(callback: (feature: Feature, index: number) => void): void;
        getAllFeature(): Feature[];
        getFeatureById(id: string | number): Feature;
        getMap(): Map | null;
        getStyle(): StyleOptions | StylingFunction;
        overrideStyle(feature: Feature, style: StyleOptions): void;
        removeFeature(feature: Feature): void;
        removeGeoJson(geojson: GeoJSON): void;
        revertStyle(feature: Feature): void;
        setMap(map: Map | null): void;
        setStyle(style: StyleOptions | StylingFunction): void;
        toGeoJson(): GeoJSON;
    }

    /**
     * Feature
     */
    class Feature extends KVO {
        constructor(rawFeature: GeoJSON);
        forEachOverlay(callback: forEachOverlayCallback): void;
        getBounds(): Bounds;
        getGeometries(): Geometry[];
        getId(): string;
        getOverlays(): Marker[] | Polyline[] | Polygon[];
        getProperty(name: string): any;
        getRaw(): GeoJSON;
        setProperty(name: string, value: any): void;
        setStyle(styleOptions: StyleOptions): void;
    }

    /**
     * Geometry
     */
    class Geometry extends KVO {
        constructor(rawGeometry: GeoJSON.Geometry);
        getCoords(): ArrayOfCoords;
        getType(): string;
    }

    /**
     * OverlayView
     */
    class OverlayView extends KVO {
        constructor();
        draw(): void;
        getContainerTopLeft(): Point;
        getMap(): Map | null;
        getPanes(): MapPanes;
        getProjection(): MapSystemProjection;
        onAdd(): void;
        onRemove(): void;
        setMap(map: Map | null): void;
    }

    /**
     * AbstractShapeOverlay
     */
    class AbstractShapeOverlay extends OverlayView {
        setOptions(key: string, value: any): void;
        setOptions(options: { [key: string]: any }): void;
        getOptions(key?: string): any;
        setStyles(key: string, value: any): void;
        setStyles(styles: { [key: string]: any }): void;
        getStyles(key?: string): any;
        setVisible(visible: boolean): void;
        getVisible(): boolean;
        setZIndex(zIndex: number): void;
        getZIndex(): number;
        setClickable(clickable: boolean): void;
        getClickable(): boolean;
        getElement(): HTMLElement;
    }

    /**
     * Circle
     */
    class Circle extends AbstractShapeOverlay {
        constructor(options?: CircleOptions);
        getAreaSize(): number;
        getBounds(): Bounds;
        getCenter(): Coord;
        getDrawingRect(): Bounds;
        getRadius(): number;
        setCenter(center: Coord | CoordLiteral): void;
        setOptions(key: string, value: any): void;
        setOptions(options: CircleOptions): void;
        setRadius(radius: number): void;
        setStyles(key: string, value: any): void;
        setStyles(options: CircleOptions): void;
    }

    /**
     * Ellipse
     */
    class Ellipse extends AbstractShapeOverlay {
        constructor(options?: EllipseOptions);
        getAreaSize(): number;
        getBounds(): Bounds;
        getDrawingRect(): Bounds;
        setBounds(bounds: Bounds | BoundsLiteral): void;
        setOptions(options: EllipseOptions): void;
        setOptions(key: string, value: any): void;
        setStyles(options: EllipseOptions): void;
        setStyles(key: string, value: any): void;
    }

    /**
     * GroundOverlay
     */
    class GroundOverlay extends OverlayView {
        constructor(url: string, bounds: Bounds | BoundsLiteral, options?: GroundOverlayOptions);
        getBounds(): Bounds;
        getOpacity(): number;
        getUrl(): string;
        setOpacity(opacity: number): void;
    }

    /**
     * InfoWindow
     */
    class InfoWindow extends OverlayView {
        constructor(options: InfoWindowOptions);
        close(): void;
        getContent(): HTMLElement;
        getOptions(key?: string): any; // if key is undefined, return InfoWindowOptions
        getPosition(): Coord;
        getZIndex(): number;
        open(map: Map, anchor?: Coord | CoordLiteral | Marker): void;
        setContent(content: string | HTMLElement): void;
        setOptions(options: InfoWindowOptions): void;
        setPosition(position: Coord | CoordLiteral): void;
        setZIndex(zIndex: number): void;
    }

    /**
     * Marker
     */
    class Marker extends OverlayView {
        constructor(options: MarkerOptions);
        getAnimation(): Animation | null;
        getClickable(): boolean;
        getCursor(): string;
        getDraggable(): boolean;
        getDrawingRect(): Bounds;
        getIcon(): ImageIcon | SymbolIcon | HtmlIcon;
        getOptions(key?: string): any; // if key is undefined, return MarkerOptions
        getPosition(): Coord;
        getShape(): MarkerShape;
        getTitle(): string;
        getVisible(): boolean;
        getZIndex(): number;
        setAnimation(animation: Animation | null): void;
        setClickable(clickable: boolean): void;
        setCursor(cursor: string): void;
        setDraggable(draggable: boolean): void;
        setIcon(icon: string | ImageIcon | SymbolIcon | HtmlIcon): void;
        setOptions(options: MarkerOptions): void;
        setPosition(position: Coord | CoordLiteral): void;
        setShape(shape: MarkerShape): void;
        setTitle(title: string): void;
        setVisible(visible: boolean): void;
        setZIndex(zIndex: number): void;
    }

    /**
     * Polygon
     */
    class Polygon extends AbstractShapeOverlay {
        constructor(options?: PolygonOptions);
        getAreaSize(): number;
        getBounds(): Bounds;
        getDrawingRect(): Bounds;
        getPath(): ArrayOfCoords | KVOArrayOfCoords;
        getPaths(): ArrayOfCoords[] | KVOArray<KVOArrayOfCoords>;
        getOptions<K extends keyof PolygonOptions>(key: K): PolygonOptions[K];
        getOptions(): PolygonOptions;
        setOptions<K extends keyof PolygonOptions>(key: K, value: PolygonOptions[K]): void;
        setOptions(options: PolygonOptions): void;
        setPath(path: ArrayOfCoords | KVOArrayOfCoords | ArrayOfCoordsLiteral): void;
        setPaths(paths: ArrayOfCoords[] | KVOArray<KVOArrayOfCoords> | ArrayOfCoordsLiteral[]): void;
        setStyles(key: string, value: any): void;
        setStyles(options: PolygonOptions): void;
    }

    /**
     * Polyline
     */
    class Polyline extends AbstractShapeOverlay {
        constructor(options?: PolylineOptions);
        getBounds(): Bounds;
        getDistance(): number;
        getDrawingRect(): Bounds;
        getPath(): ArrayOfCoords | KVOArrayOfCoords;
        setOptions(key: string, value: any): void;
        setOptions(options: PolylineOptions): void;
        setPath(path: ArrayOfCoords | KVOArrayOfCoords | ArrayOfCoordsLiteral): void;
        setStyles(key: string, value: any): void;
        setStyles(options: PolylineOptions): void;
    }

    /**
     * Rectangle
     */
    class Rectangle extends AbstractShapeOverlay {
        constructor(options?: RectangleOptions);
        getAreaSize(): number;
        getBounds(): Bounds;
        getDrawingRect(): Bounds;
        setBounds(bounds: Bounds | BoundsLiteral): void;
        setOptions(options: RectangleOptions): void;
        setOptions(key: string, value: any): void;
        setStyles(key: string, value: any): void;
        setStyles(options: RectangleOptions): void;
    }

    // --------------------------------------------------------------------------
    //  static objects
    // --------------------------------------------------------------------------
    namespace Event {
        function addDOMListener(element: HTMLElement, eventName: string, listener: (event: any) => any): void;
        function addListener(target: any, eventName: string, listener: (event: any) => any): MapEventListener;
        function clearInstanceListeners(target: any): void;
        function clearListeners(target: any, fromEventName: string): void;
        function forward(source: any, fromEventName: string, target: any, toEventName: string): MapEventListener;
        function hasListener(target: any, eventName: string): boolean;
        function once(target: any, eventName: string, listener: (event: any) => any): MapEventListener;
        function removeDOMListener(element: HTMLElement, eventName: string, listener: (event: any) => any): void;
        function removeDOMListener(listeners: DOMEventListener | DOMEventListener[]): void;
        function removeListener(listeners: MapEventListener | MapEventListener[]): void;
        function resumeDispatch(target: any, eventName: string): void;
        function stopDispatch(target: any, eventName: string): void;
        function trigger(target: any, eventName: string, eventObject?: any): void;
    }

    namespace EPSG3857 {
        function fromCoordToPoint(coord: Coord): Point;
        function fromLatLngToPoint(latlng: LatLng): Point;
        function fromPointToCoord(point: Point): LatLng;
        function fromPointToLatLng(point: Point): LatLng;
        function getDestinationCoord(fromLatLng: LatLng, angle: number, meter: number): LatLng;
        function getDistance(latlng1: LatLng, latlng2: LatLng): number;
    }

    namespace UTMK {
        const name: string;
        const pointPerMeter: number;
        function fromCoordToPoint(latlng: LatLng): Point;
        function fromCoordToUTMK(latlng: LatLng): Point;
        function fromLatLngToPoint(latlng: LatLng): Point;
        function fromLatLngToUTMK(latlng: LatLng): Point;
        function fromPointToCoord(point: Point): LatLng;
        function fromPointToLatLng(point: Point): LatLng;
        function fromPointToUTMK(point: Point): Point;
        function fromUTMKToCoord(utmk: Point): LatLng;
        function fromUTMKToLatLng(utmk: Point): LatLng;
        function fromUTMKToPoint(utmk: Point): Point;
        function getDestinationCoord(fromLatLng: LatLng, angle: number, meter: number): LatLng;
        function getDistance(latlng1: LatLng, latlng2: LatLng): number;
    }

    namespace UTMK_NAVER {
        const name: string;
        const pointPerMeter: number;
        function fromCoordToNaver(latlng: LatLng): Point;
        function fromLatLngToNaver(latlng: LatLng): Point;
        function fromNaverToCoord(naverPoint: Point): LatLng;
        function fromNaverToLatLng(naverPoint: Point): LatLng;
        function fromNaverToPoint(naverPoint: Point): Point;
        function fromNaverToUTMK(naverPoint: Point): Point;
        function fromPointToNaver(point: Point): Point;
        function fromUTMKToNaver(utmk: Point): Point;
    }

    namespace EPSG3857Coord {
        function fromCoordToLatLng(coord: Point): LatLng;
        function fromCoordToPoint(coord: Point): Point;
        function fromEPSG3857ToLatLng(coord: Point): LatLng;
        function fromEPSG3857ToPoint(coord: Point): Point;
        function fromLatLngToCoord(coord: Coord): Point;
        function fromLatLngToEPSG3857(coord: Coord): Point;
        function fromPointToCoord(point: Point): Point;
        function fromPointToEPSG3857(point: Point): Point;
    }

    namespace TM128 {
        function fromCoordToPoint(latlng: Coord): Point;
        function fromPointToCoord(point: Point): LatLng;
    }

    namespace TM128Coord {
        function fromCoordToLatLng(tm128: Point): LatLng;
        function fromCoordToPoint(tm128: Point): Point;
        function fromLatLngToCoord(latlng: Coord): Point;
        function fromLatLngToTM128(latlng: Coord): Point;
        function fromPointToCoord(point: Point): Point;
        function fromPointToTM128(point: Point): Point;
        function fromTM128ToLatLng(tm128: Point): LatLng;
        function fromTM128ToPoint(tm128: Point): Point;
        function fromTM128ToUTMK(tm128: Point): Point;
        function fromUTMKToTM128(utmk: Point): Point;
    }

    namespace UTMK_NAVERCoord {
        function fromCoordToLatLng(n: Point): LatLng;
        function fromCoordToPoint(n: Point): Point;
        function fromLatLngToCoord(latlng: Coord): Point;
        function fromPointToCoord(point: Point): Point;
    }

    namespace UTMKCoord {
        // extends UTMK
        function fromCoordToLatLng(utmk: Point): LatLng;
        function fromCoordToPoint(utmk: Point): Point;
        function fromLatLngToCoord(latlng: Coord): Point;
        function fromPointToCoord(point: Point): Point;
    }

    // --------------------------------------------------------------------------
    //  submodules
    //  https://navermaps.github.io/maps.js.ncp/docs/tutorial-4-Submodules.html
    // --------------------------------------------------------------------------

    /**
     * Submodule - Panorama
     * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-Panorama.html
     */
    type AroundControlOptions = ControlOptions;

    interface PanoramaOptions {
        size?: Size | SizeLiteral;
        panoId?: string;
        position?: LatLng | LatLngLiteral;
        pov?: PanoramaPov;
        visible?: boolean;
        minScale?: number;
        maxScale?: number;
        minZoom?: number;
        maxZoom?: number;
        flightSpot?: boolean;
        logoControl?: boolean;
        logoControlOptions?: LogoControlOptions;
        zoomControl?: boolean;
        zoomControlOptions?: ZoomControlOptions;
        aroundControl?: boolean;
        aroundControlOptions?: AroundControlOptions;
    }

    interface PanoramaPov {
        pan?: number;
        tilt?: number;
        fov?: number;
    }

    interface PanoramaLocation {
        panoId: string;
        title: string;
        address: string;
        coord: LatLng;
        photodate: string;
    }

    class PanoramaProjection extends KVO {
        fromCoordToPov(coord: LatLng): PanoramaPov;
        fromScrollToPov(dx: number, dy: number): PanoramaPov;
        fromCoordToOffset(coord: LatLng): Point;
        fromOffsetToCoord(offset: Point): LatLng;
    }

    class Panorama extends KVO {
        constructor(panoramaDiv: string | HTMLElement, panoramaOptions: PanoramaOptions);
        getElement(): HTMLElement;
        getLocation(): PanoramaLocation;
        getMaxScale(): number;
        getMaxZoom(): number;
        getMinScale(): number;
        getMinZoom(): number;
        getOptions(key?: string): any;
        getPanoId(): string;
        getPosition(): LatLng;
        getPov(): PanoramaPov;
        getProjection(): PanoramaProjection;
        getScale(): number;
        getSize(): Size;
        getVisible(): boolean;
        getZoom(): number;
        setOptions(key: string, value: any): void;
        setOptions(newOptions: PanoramaOptions): void;
        setPanoId(panoId: string): void;
        setPanoIdWithPov(panoId: string, pov: PanoramaPov): void;
        setPosition(position: LatLng | LatLngLiteral): void;
        setPov(pov: PanoramaPov): void;
        setScale(scale: number): void;
        setSize(size: Size | SizeLiteral): void;
        setVisible(visible: boolean): void;
        setZoom(zoom: number): void;
        zoomIn(): void;
        zoomOut(): void;
    }

    class FlightSpot extends KVO {
        constructor();
        getMap(): Map | null;
        setMap(map: Map | null): void;
    }

    class AroundControl extends CustomControl {
        constructor(aroundControlOptions: AroundControlOptions);
    }

    /**
     * Submodule - Drawing
     * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-Drawing.html
     */
    namespace drawing {
        enum DrawingStyle {
            HORIZONTAL = 0,
            VERTICAL,
            HORIZONTAL_2,
            VERTICAL_2,
        }

        enum DrawingMode {
            HAND = 0,
            RECTANGLE,
            ELLIPSE,
            POLYLINE,
            ARROWLINE,
            POLYGON,
            MARKER,
        }

        enum DrawingEvents {
            ADD = "drawing_added",
            REMOVE = "drawing_removed",
            SELECT = "drawing_selected",
            CANCLE = "drawing_cancled",
            START = "drawing_start",
        }

        interface DrawingOptions {
            map?: Map;
            drawingControl?: DrawingMode[];
            drawingControlOptions?: DrawingControlOptions;
            drawingMode?: DrawingMode;
            controlPointOptions?: ControlPointOptions;
            rectangleOptions?: Partial<RectangleOptions>;
            ellipseOptions?: Partial<EllipseOptions>;
            polylineOptions?: Partial<PolylineOptions>;
            arrowlineOptions?: Partial<PolylineOptions>;
            polygonOptions?: Partial<PolygonOptions>;
            markerOptions?: Partial<MarkerOptions>;
        }

        interface DrawingControlOptions extends ControlOptions {
            style?: DrawingStyle;
        }
        interface ControlPointOptions extends ControlOptions {
            anchorPointOptions: CircleOptions;
            midPointOptions: CircleOptions;
        }
        interface DrawingOverlay {
            id: string;
            name: string;
            setEditable: (editable: boolean, controlPointOptions?: ControlPointOptions) => void;
        }

        class DrawingManager extends KVO {
            constructor(options?: DrawingOptions);
            addDrawing(overlay: DrawingOverlay, drawingMode: DrawingMode, id?: string): void;
            addListener(eventName: DrawingEvents, listener: (overlay: DrawingOverlay) => void): MapEventListener;
            destroy(): void;
            getDrawing(id: string): DrawingOverlay;
            getDrawings(): { [key: string]: DrawingOverlay };
            getMap(): Map | null;
            setMap(map: Map | null): void;
            toGeoJson(): GeoJSON;
            getOptions<K extends keyof DrawingOptions>(key: K): DrawingOptions[K];
            setOptions<K extends keyof DrawingOptions>(key: K, value: DrawingOptions[K]): void;
            setOptions(options: DrawingOptions): void;
        }
    }

    /**
     * Submodule - visualization
     * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-visualization.html
     */
    namespace visualization {
        enum SpectrumStyle {
            JET = "jet",
            HSV = "hsv",
            HOT = "hot",
            COOL = "cool",
            GREYS = "greys",
            YIGnBu = "YIGnBu",
            YIOrRd = "YIOrRd",
            RdBu = "RdBu",
            RAINBOW = "rainbow",
            PORTLAND = "portland",
            OXYGEN = "oxygen",
        }

        interface DotMapOptions {
            map?: Map;
            data: LatLng[] | PointArrayLiteral[] | WeightedLocation[];
            opacity?: number;
            radius?: number;
            strokeWeight?: number;
            strokeColor?: string;
            strokeLineCap?: StrokeLineCapType;
            strokeLineJoin?: StrokeLineJoinType;
            fillColor?: string;
        }

        interface HeatMapOptions {
            map?: Map;
            data: LatLng[] | PointArrayLiteral[] | WeightedLocation[];
            opacity?: number;
            radius?: number;
            colorMap?: SpectrumStyle;
        }

        class DotMap extends KVO {
            constructor(dotMapOptions?: DotMapOptions);
            getData(): LatLng[] | PointArrayLiteral[];
            getMap(): Map | null;
            getOptions(key?: string): any; // if key is undefiend, return DotMapOptions
            addDrawing(overlay: drawing.DrawingOverlay, drawingMode: drawing.DrawingMode, id?: string): void;
            redraw(): void;
            setData(data: LatLng[] | PointArrayLiteral[]): void;
            setMap(map: Map | null): void;
            setOptions(key: string, value: any): void;
            setOptions(options: DotMapOptions): void;
        }

        class HeatMap extends KVO {
            constructor(heatMapOptions?: HeatMapOptions);
            getColorMap(): SpectrumStyle;
            getData(): LatLng[] | PointArrayLiteral[];
            getMap(): Map | null;
            getOptions(key?: string): any; // if key is undefiend, return HeatMapOptions
            redraw(): void;
            setColorMap(colormap: SpectrumStyle, inReverse: boolean): void;
            setData(data: LatLng[] | PointArrayLiteral[]): void;
            setMap(map: Map | null): void;
            setOptions(key: string, value: any): void;
            setOptions(options: HeatMapOptions): void;
        }

        class WeightedLocation {
            constructor(lat: number, lng: number, weight?: number);
            clone(): WeightedLocation;
            getLocation(): LatLng;
            getWeight(): number;
            lat(): number;
            lng(): number;
            toString(): string;
        }
    }

    /**
     * Submodule - geocoder
     * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-geocoder.html
     */
    namespace Service {
        enum CoordinatesType {
            LATLNG = "epsg:4326",
            UTMK = "nhn:2048",
            TM128 = "nhn:128",
            EPSG3857 = "epsg:3857",
        }

        enum OrderType {
            LEGAL_CODE = "legalcode",
            ADDR = "addr",
            ROAD_ADDR = "roadaddr",
            ADM_CODE = "admcode",
        }

        enum ReverseGeocodeStatusName {
            OK = "ok",
            NO_RESULTS = "no results",
            INVALID_REQUEST = "invalid request",
            UNKNOWN_ERROR_IO_ERROR = "unknown error / io error",
        }

        enum ReverseGeocodeStatusCode {
            CODE_0 = "0",
            CODE_3 = "3",
            CODE_100 = "100",
            CODE_900 = "900",
        }

        enum GeocodeStatus {
            OK = "OK",
            INVALID_REQUEST = "INVALID_REQUEST",
            SYSTEM_ERROR = "SYSTEM_ERROR",
        }

        enum Status {
            OK = 200,
            ERROR = 500,
        }

        interface ServiceOptions {
            sourcecrs?: CoordinatesType;
            targetcrs?: CoordinatesType;
            orders?: string;
        }

        interface GeocodeServiceOptions extends ServiceOptions {
            query: string;
            coordinate?: string;
            filter?: string;
            page?: number;
            count?: number;
        }

        interface ReverseServiceOptions extends ServiceOptions {
            coords: string | Coord | CoordLiteral;
        }

        interface AddressItem {
            address: string;
            addrdetail: {
                country: string;
                sido: string;
                sigugun: string;
                dongmyun: string;
                rest: string;
            };
            isRoadAddress: boolean;
            point: PointObjectLiteral;
        }
        interface AddressItemV2 {
            roadAddress: string;
            jibunAddress: string;
            englishAddress: string;
            addressElements: Array<{
                code: string;
                longName: string;
                shortName: string;
                types:
                    | "SIDO"
                    | "SIGUGUN"
                    | "RI"
                    | "ROAD_NAME"
                    | "BUILDING_NUMBER"
                    | "BUILDING_NAME"
                    | "LAND_NUMBER"
                    | "POSTAL_CODE";
            }>;
            x: string;
            y: string;
            distance: string;
        }

        interface Meta {
            totalCount: number;
            page: number;
            count: number;
        }
        interface GeocodeResponse {
            // Deprecated!! https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Service.html#toc28__anchor
            result: {
                userquery: any;
                total: number;
                items: AddressItem[];
            };
            v2: {
                status: GeocodeStatus;
                meta: Meta;
                addresses: AddressItemV2[];
                errorMessage: string;
            };
        }

        interface ReverseGeocodeStatus {
            code: ReverseGeocodeStatusCode;
            name: ReverseGeocodeStatusName;
            message: string;
        }

        interface ReverseGeocodeAddress {
            roadAddress: string;
            jibunAddress: string;
        }

        interface Coords {
            center: {
                crs: string;
                x: string;
                y: string;
            };
        }

        interface Land {
            type: string;
            name: string;
            number1: string;
            number2: string;
            coords: Coords;
        }

        interface Area {
            name: string;
            coords: Coords;
        }

        interface Addition {
            type: string;
            value: string;
        }

        interface Region {
            area0: Area;
            area1: Area;
            area2: Area;
            area3: Area;
            area4: Area;
            land: Land;
            addition0: Addition;
            addition1: Addition;
            addition2: Addition;
            addition3: Addition;
            addition4: Addition;
        }

        interface ResultItem {
            name: string;
            code: {
                id: string;
                type: "L" | "A" | "S" | string;
                mappingId: string;
            };
            region: Region;
        }

        interface ReverseGeocodeResponse {
            // Deprecated!! https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Service.html#toc29__anchor
            result: {
                userquery: string;
                total: number;
                items: AddressItem[];
            };
            v2: {
                status: ReverseGeocodeStatus;
                results: ResultItem[];
                address: ReverseGeocodeAddress;
            };
        }

        function fromAddrToCoord(
            options: GeocodeServiceOptions,
            callback?: (status: Status, response: GeocodeResponse) => void,
        ): void;
        function fromCoordToAddr(
            options: ReverseServiceOptions,
            callback?: (status: Status, response: ReverseGeocodeResponse) => void,
        ): void;
        function geocode(
            options: GeocodeServiceOptions,
            callback?: (status: Status, response: GeocodeResponse) => void,
        ): void;
        function reverseGeocode(
            options: ReverseServiceOptions,
            callback?: (status: Status, response: ReverseGeocodeResponse) => void,
        ): void;
    }

    namespace TransCoord {
        function fromEPSG3857ToLatLng(coord: Point): LatLng;
        function fromEPSG3857ToNaver(coord: Point): Point;
        function fromEPSG3857ToTM128(coord: Point): Point;
        function fromEPSG3857ToUTMK(coord: Point): Point;
        function fromLatLngToEPSG3857(latlng: Coord): Point;
        function fromLatLngToNaver(latlng: Coord): Point;
        function fromLatLngToTM128(latlng: Coord): Point;
        function fromLatLngToUTMK(latlng: Coord): Point;
        function fromNaverToEPSG3857(n: Point): Point;
        function fromNaverToLatLng(n: Point): LatLng;
        function fromNaverToTM128(n: Point): Point;
        function fromNaverToUTMK(n: Point): Point;
        function fromTM128ToEPSG3857(tm128: Point): Point;
        function fromTM128ToLatLng(tm128: Point): LatLng;
        function fromTM128ToNaver(tm128: Point): Point;
        function fromTM128ToUTMK(tm128: Point): Point;
        function fromUTMKToEPSG3857(utmk: Point): Point;
        function fromUTMKToLatLng(utmk: Point): LatLng;
        function fromUTMKToNaver(utmk: Point): Point;
        function fromUTMKToTM128(utmk: Point): Point;
    }
}
