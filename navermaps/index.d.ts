// Type definitions for Naver Maps JavaScript API 3.0
// Project: https://navermaps.github.io/maps.js
// Definitions by: Ckboyjiy <https://github.com/ckboyjiy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare namespace naver.maps {
  /**
   * Types
   */
  type PointArrayLiteral = [number, number];
  type PointLiteral = naver.maps.PointArrayLiteral | naver.maps.PointObjectLiteral;
  type SizeArrayLiteral = [number, number];
  type SizeLiteral = naver.maps.SizeArrayLiteral | naver.maps.SizeObjectLiteral;
  type LatLngLiteral = naver.maps.PointLiteral | naver.maps.LatLngObjectLiteral;
  type PointBoundsArrayLiteral = [number, number, number, number];
  type PointBoundsLiteral = naver.maps.PointBoundsArrayLiteral | naver.maps.PointBoundsObjectLiteral;
  type LatLngBoundsLiteral = naver.maps.PointBoundsLiteral | naver.maps.LatLngBoundsObjectLiteral;
  type BoundsLiteral = naver.maps.PointBoundsLiteral | naver.maps.LatLngBoundsLiteral;
  type CoordLiteral = naver.maps.PointLiteral | naver.maps.LatLngLiteral;
  type Coord = naver.maps.Point | naver.maps.LatLng;
  type Bounds = naver.maps.PointBounds | naver.maps.LatLngBounds;
  type DOMEvent = Event;
  type StylingFunction = (feature: naver.maps.Feature) => naver.maps.StyleOptions;
  type ArrayOfCoords = naver.maps.Point[] | naver.maps.LatLng[];
  type ArrayOfBounds = naver.maps.PointBounds[] | naver.maps.LatLngBounds[];
  type ArrayOfBoundsLiteral = naver.maps.PointBoundsLiteral[] | naver.maps.LatLngBoundsLiteral[];
  type forEachOverlayCallback = (overlay: naver.maps.Marker | naver.maps.Polyline | naver.maps.Polygon, index: number) => void;
  type GeoJSON = object;
  type GPX = object;
  type KML = object;
  type KVOArrayOfCoords = any;
  type ArrayOfCoordsLiteral = naver.maps.PointLiteral[] | naver.maps.LatLngLiteral[];
  type strokeStyleType = 'solid' | 'shortdash' | 'shortdot' | 'shortdashdot' | 'shortdashdotdot' | 'dot' | 'dash' |
    'longdash' | 'dashdot' | 'longdashdot' | 'longdashdotdot';
  type strokeLineCapType = 'butt' | 'round' | 'square';
  type strokeLineJoinType = 'miter' | 'round ' | 'bevel';

  /**
   * Interfaces
   */
  export interface PointObjectLiteral {
    x: number;
    y: number;
  }
  export interface SizeObjectLiteral {
    width: number;
    height: number;
  }
  export interface LatLngObjectLiteral {
    lat: number;
    lng: number;
  }
  export interface PointBoundsObjectLiteral {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
  }
  export interface LatLngBoundsObjectLiteral {
    north: number;
    east: number;
    south: number;
    west: number;
  }
  export interface MapSystemProjection extends KVO {
    factor(zoom: number): number;
    fromCoordToOffset(coord: naver.maps.Coord): naver.maps.Point;
    fromCoordToPoint(coord: naver.maps.Coord): naver.maps.Point;
    fromOffsetToCoord(offset: naver.maps.Point): naver.maps.Coord;
    fromOffsetToPoint(offset: naver.maps.Point): naver.maps.Point;
    fromPointToCoord(point: naver.maps.Point): naver.maps.Coord;
    fromPointToOffset(point: naver.maps.Point): naver.maps.Point;
    getDestinationCoord(fromCoord: naver.maps.Coord, angle: number, meter: number): naver.maps.Coord;
    getDistance(coord1: naver.maps.Coord, coord2: naver.maps.Coord): number;
    getProjectionName(): number;
    scaleDown(operand: number | naver.maps.Point | naver.maps.Size, zoom: number): number | naver.maps.Point | naver.maps.Size;
    scaleUp(operand: number | naver.maps.Point | naver.maps.Size, zoom: number): number | naver.maps.Point | naver.maps.Size;

  }
  export interface MapOptions {
    background?: string;
    baseTileOpacity?: number;
    bounds?: any;
    center?: any;
    disableDoubleClickZoom?: boolean;
    disableDoubleTapZoom?: boolean;
    disableKineticPan?: boolean;
    disableTwoFingerTapZoom?: boolean;
    draggable?: boolean;
    keyboardShortcuts?: boolean;
    logoControl?: boolean;
    logoControlOptions?: any;
    mapDataControl?: boolean;
    mapDataControlOptions?: any;
    mapTypeControl?: boolean;
    mapTypeControlOptions?: any;
    mapTypeId?: string;
    mapTypes?: any;
    maxBounds?: any;
    maxZoom?: number;
    minZoom?: number;
    padding?: any;
    pinchZoom?: boolean;
    resizeOrigin?: any;
    scaleControl?: boolean;
    scaleControlOptions?: any;
    scrollWheel?: boolean;
    size?: any;
    overlayZoomEffect?: null | string;
    tileSpare?: number;
    tileTransition?: boolean;
    zoom?: number;
    zoomControl?: boolean;
    zoomControlOptions?: any;
    zoomOrigin?: any;
  }
  export interface MarkerOptions {
    animation?: any;
    map?: Map;
    position?: any;
    icon?: any;
    shape?: any;
    title?: string;
    cursor?: string;
    clickable?: boolean;
    draggable?: boolean;
    visible?: boolean;
    zIndex?: number;
  }
  export interface MapPanes {
    overlayLayer: HTMLElement;
    overlayImage: HTMLElement;
    floatPane: HTMLElement;
  }
  export interface MapEventListener {
    eventName: string;
    listener: Function;
    listenerId: string;
    target: object;
  }
  export interface InfoWindowOptions {
    position: naver.maps.Coord | naver.maps.CoordLiteral;
    content: string | HTMLElement;
    zIndex?: number;
    maxWidth?: number;
    pixelOffset?: naver.maps.Point | naver.maps.PointLiteral;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    disableAutoPan?: boolean;
    disableAnchor?: boolean;
    anchorSkew?: boolean;
    anchorSize?: naver.maps.Size | naver.maps.SizeLiteral;
    anchorColor?: string;
  }
  export interface ImageTileOptions {
    urls: string[];
    imgonload?: Function;
    imgonerror?: Function;
    opacity?: number;
    transition?: boolean;
    offset?: naver.maps.Point;
    zIndex?: number;
    size?: naver.maps.Size;
    pane?: HTMLElement;
  }
  export interface ImageMapTypeOptions {
    name: string;
    maxZoom: number;
    minZoom: number;
    projection: naver.maps.Projection;
    tileSize?: naver.maps.Size | naver.maps.SizeLiteral;
    repeatX?: boolean;
    vendor?: string;
    provider?: naver.maps.MapDataProvider;
    uid?: string;
    darktheme?: boolean;
    getTileUrl?: Function;
    tileSet?: string | string[];
  }
  export interface GroundOverlayOptions {
    clickable?: boolean;
    map?: 	naver.maps.Map | null;
    opacity?: number;
  }
  export interface EllipseOptions {
    map?: naver.maps.Map;
    bounds: naver.maps.Bounds | naver.maps.BoundsLiteral;
    strokeWeight?: number;
    strokeOpacity?: number;
    strokeColor?: string;
    strokeStyle?: naver.maps.strokeStyleType;
    strokeLineCap?: naver.maps.strokeLineCapType;
    strokeLineJoin?: naver.maps.strokeLineJoinType;
    fillColor?: string;
    fillOpacity?: number;
    clickable?: boolean;
    visible?: boolean;
    zIndex?: number;
  }
  export interface FeatureEvent {
    feature: naver.maps.Feature;
  }
  export interface PointerEvent {
    coord: naver.maps.Coord;
    point: naver.maps.Point;
    offset: naver.maps.Point;
    pointerEvent: naver.maps.DOMEvent;
    feature: naver.maps.Feature;
  }
  export interface PropertyEvent {
    feature: naver.maps.Feature;
    name: string;
    oldValue: any;
    newValue: any;
  }
  export interface StyleOptions {
    strokeColor?: string;
    strokeOpacity?: number;
    strokeWeight?: number;
    fillColor?: string;
    fillOpacity?: number;
    clickable?: boolean;
    icon?: string | naver.maps.ImageIcon | naver.maps.SymbolIcon | naver.maps.HtmlIcon;
    shape?: naver.maps.MarkerShape;
    title?: string;
    visible?: boolean;
    zIndex?: number;
  }
  export interface ControlOptions {
    position: naver.maps.Position;
  }
  export interface CircleOptions {
    map?: naver.maps.Map;
    center: naver.maps.Coord | naver.maps.CoordLiteral;
    radius?: number;
    strokeWeight?: number;
    strokeOpacity?: number;
    strokeColor?: string;
    strokeStyle?: naver.maps.strokeStyleType;
    strokeLineCap?: naver.maps.strokeLineCapType;
    strokeLineJoin?: naver.maps.strokeLineJoinType;
    fillColor?: string;
    fillOpacity?: number;
    clickable?: boolean;
    visible?: boolean;
    zIndex?: number;
  }
  export interface TileOptions {
    opacity?: number;
    transition?: boolean;
    offset?: naver.maps.Point;
    zIndex?: number;
    size?: naver.maps.Size;
    pane?: HTMLElement;
  }
  export interface TileIndex {
    xIndex: number;
    yIndex: number;
  }
  export interface CanvasTileOptions {
    imageData?: ImageData;
    opacity?: number;
    transition?: boolean;
    offset?: naver.maps.Point;
    zIndex?: number;
    size?: naver.maps.Size;
    pane?: HTMLElement;
  }
  export interface CanvasMapTypeOptions {
    name: string;
    maxZoom: number;
    minZoom: number;
    projection: naver.maps.Projection;
    tileSize?: naver.maps.Size | naver.maps.SizeLiteral;
    repeatX?: boolean;
    vendor?: string;
    provider?: naver.maps.MapDataProvider;
    uid?: string;
    darktheme?: boolean;
    getTileData?: Function;
  }
  export interface MapDataProvider {
    title: string;
    link: string;
    bounds: naver.maps.Bounds | naver.maps.BoundsLiteral | naver.maps.ArrayOfBounds | naver.maps.ArrayOfBoundsLiteral;
  }
  export interface MapType {
    maxZoom: number;
    minZoom: number;
    name: string;
    projection: naver.maps.Projection;
    tileSize: naver.maps.Size;
    getTile(x: number, y: number, z: number): HTMLElement | naver.maps.Tile;
  }
  export interface Projection {
    fromCoordToPoint(coord: naver.maps.Coord): naver.maps.Point;
    fromPointToCoord(point: naver.maps.Point): Coord;
  }
  export interface CadastralLayerOptions {
    overlayMap?: boolean;
    zIndex?: number;
  }
  export interface AroundControlOptions {
    position: naver.maps.Position;
  }
  export interface NaverImageMapTypeOptions {
    maxZoom?: number;
    minZoom?: number;
    projection?: naver.maps.Projection;
    tileSize?: naver.maps.Size;
    hd?: string;
  }
  export interface LogoControlOptions {
    position: naver.maps.Position;
  }
  export interface MapDataControlOptions {
    position: naver.maps.Position;
  }
  export interface MapTypeControlOptions {
    mapTypeIds: naver.maps.MapTypeId[] | null;
    position: naver.maps.Position;
    style: naver.maps.MapTypeControlStyle;
  }
  export interface ScaleControlOptions {
    position: naver.maps.Position;
  }
  export interface ZoomControlOptions {
    position: naver.maps.Position;
    style: naver.maps.ZoomControlStyle;
    legendDisabled: boolean;
  }
  export interface LayerOptions {
    hd: boolean;
    overlayMap: boolean;
    zIndex: number;
  }
  export interface CadastralLayerOptions {
    overlayMap: boolean;
    zIndex: number;
  }
  export interface StreetLayerOptions {
    overlayMap: boolean;
    zIndex: number;
  }
  export interface TrafficLayerOptions {
    interval: number;
    overlayMap: boolean;
    zIndex: number;
  }
  export interface HtmlIcon {
    content: string | HTMLElement;
    size?: naver.maps.Size | naver.maps.SizeLiteral;
    anchor?: naver.maps.Point | naver.maps.PointLiteral | naver.maps.Position;
  }
  export interface ImageIcon {
    url: string;
    size?: naver.maps.Size | naver.maps.SizeLiteral;
    scaledSize?: naver.maps.Size |naver.maps. SizeLiteral;
    origin?: naver.maps.Point | naver.maps.PointLiteral;
    anchor?: naver.maps.Point | naver.maps.PointLiteral | naver.maps.Position;
  }
  export interface MarkerShape {
    coords: any[];
    type: string;
  }
  export interface SymbolIcon {
    path: naver.maps.SymbolPath | naver.maps.Point[] | naver.maps.PointLiteral[];
    style?: naver.maps.SymbolStyle;
    radius?: number;
    fillColor?: string;
    fillOpacity?: number;
    strokeColor?: string;
    strokeWeight?: number;
    strokeOpacity?: number;
    anchor?: naver.maps.Point | naver.maps.PointLiteral | naver.maps.Position;
  }
  export interface PolygonOptions {
    map?: naver.maps.Map;
    paths: naver.maps.ArrayOfCoords[] | naver.maps.KVOArrayOfCoords[] | naver.maps.ArrayOfCoordsLiteral[];
    strokeWeight?: number;
    strokeOpacity?: number;
    strokeColor?: string;
    strokeStyle?: naver.maps.strokeStyleType;
    strokeLineCap?: naver.maps.strokeLineCapType;
    strokeLineJoin?: naver.maps.strokeLineJoinType;
    fillColor?: string;
    fillOpacity?: number;
    clickable?: boolean;
    visible?: boolean;
    zIndex?: number;
  }
  export interface PolylineOptions {
    map?: naver.maps.Map;
    path: naver.maps.ArrayOfCoords | naver.maps.KVOArrayOfCoords | naver.maps.ArrayOfCoordsLiteral;
    strokeWeight?: number;
    strokeOpacity?: number;
    strokeColor?: string;
    strokeStyle?: naver.maps.strokeStyleType;
    strokeLineCap?: naver.maps.strokeLineCapType;
    strokeLineJoin?: naver.maps.strokeLineJoinType;
    clickable?: boolean;
    visible?: boolean;
    zIndex?: number;
    startIcon?: naver.maps.PointingIcon;
    startIconSize?: number;
    endIcon?: naver.maps.PointingIcon;
    endIconSize?: number;
  }
  export interface RectangleOptions {
    map?: naver.maps.Map;
    bounds: naver.maps.Bounds | naver.maps.BoundsLiteral;
    strokeWeight?: number;
    strokeOpacity?: number;
    strokeColor?: string;
    strokeStyle?: naver.maps.strokeStyleType;
    strokeLineCap?: naver.maps.strokeLineCapType;
    strokeLineJoin?: naver.maps.strokeLineJoinType;
    fillColor?: string;
    fillOpacity?: number;
    clickable?: boolean;
    visible?: boolean;
    zIndex?: number;
  }
  export interface PanoramaOptions {
    size: naver.maps.Size | naver.maps.SizeLiteral;
    panoId: string;
    position: naver.maps.LatLng | naver.maps.LatLngLiteral;
    pov: naver.maps.PanoramaPov;
    visible: boolean;
    minScale: number;
    maxScale: number;
    minZoom: number;
    maxZoom: number;
    logoControl: boolean;
    logoControlOptions: naver.maps.LogoControlOptions;
    zoomControl: boolean;
    zoomControlOptions: naver.maps.ZoomControlOptions;
    aroundControl: boolean;
    aroundControlOptions: naver.maps.AroundControlOptions;
  }
  export interface PanoramaPov {
    pan: number;
    tilt: number;
    fov: number;
  }
  export interface PanoramaLocation {
    panoId: string;
    title: string;
    address: string;
    coord: naver.maps.LatLng;
    photodate: string;
  }
  export interface DOMEventListener {
    eventName: string;
    listener: Function;
    target: HTMLElement;
  }

  /**
   * Enums
   */
  export enum MapTypeControlStyle {
    BUTTON,
    DROPDOWN
  }
  export enum ZoomControlStyle {
    LARGE,
    SMALL
  }

  /**
   * Members
   */
  export enum Animation {
    BOUNCE = 1,
    DROP
  }
  let jsContentLoaded: boolean;
  export enum MapTypeId { // TODO. 확실하지 않음
    NORMAL,
    TERRAIN,
    SATELLITE,
    HYBRID
  }
  export function onJSContentLoaded(...args: any[]): any;
  export enum PointingIcon {
    OPEN_ARROW = 1,
    BLOCK_ARROW,
    CIRCLE,
    DIAMOND
  }
  export enum Position {
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
    BOTTOM_RIGHT
  }
  export enum SymbolPath {
    BACKWARD_CLOSED_ARROW = 1,
    BACKWARD_OPEN_ARROW,
    CIRCLE,
    FORWARD_CLOSED_ARROW,
    FORWARD_OPEN_ARROW
  }
  export enum SymbolStyle {
    CIRCLE = 'circle',
    PATH = 'path',
    CLOSED_PATH = 'closedPath'
  }

  /**
   * Classes
   */
    // KVO
  export class KVO {
    constructor();
    addListener(eventName: any, listener: Function): naver.maps.MapEventListener;
    addListenerOnce(eventName: string | any, listener: Function): naver.maps.MapEventListener;
    bindTo(key: string, target: naver.maps.KVO, targetKey?: string): void;
    clearListeners(eventName: string): void;
    get(key: string): any;
    hasListener(eventName: string): boolean;
    removeListener(listeners: naver.maps.MapEventListener | MapEventListener[]): void;
    set(key: string, value: any, silently?: boolean): void;
    setValues(properties: object): void;
    trigger(eventName: string, eventObject?: any): void;
    unbind(key: string): void;
    unbindAll(): void;
  }
  export class KVOArray extends naver.maps.KVO {
    constructor(array: any[]);
    clear(): void;
    forEach(callback: (element: any, index: number) => void): void;
    getArray(): any[];
    getAt(index: number): any;
    getIndexOfElement(element: any): number;
    getLength(): number;
    insertAt(index: number, element: any): void;
    pop(): any;
    push(element: any): number;
    removeAt(index: number): any;
    removeElement(element: any): void;
    setAt(index: number, element: any): void;
    splice(startIndex: number, deleteCount: number, element?: any): any[];
  }
  // Base
  export class Point {
    constructor(x: number, y: number);
    add(point: naver.maps.Coord | naver.maps.PointLiteral): naver.maps.Point;
    add(x: number, y: number): naver.maps.Point;
    ceil(): naver.maps.Point;
    clone(): naver.maps.Point;
    div(point: naver.maps.Coord | naver.maps.PointLiteral);
    div(x: number, y: number): naver.maps.Point;
    equals(point: naver.maps.Point): boolean;
    floor(): naver.maps.Point;
    mul(point: naver.maps.Coord | naver.maps.PointLiteral): naver.maps.Point;
    mul(x: number, y: number): naver.maps.Point;
    round(): naver.maps.Point;
    sub(point: naver.maps.Coord | naver.maps.PointLiteral): naver.maps.Point;
    sub(x: number, y: number): naver.maps.Point;
    toString(): string;
  }
  export class Size {
    constructor(width: number, height: number);
    add(size: naver.maps.Size | naver.maps.SizeLiteral): naver.maps.Size;
    add(width: number, height: number): naver.maps.Size;
    ceil(): naver.maps.Size;
    clone(): naver.maps.Size;
    div(width: number, height: number): naver.maps.Size;
    div(size: naver.maps.Size | naver.maps.SizeLiteral): naver.maps.Size;
    equals(size: naver.maps.Size | naver.maps.SizeLiteral): boolean;
    floor(): naver.maps.Size;
    mul(size: naver.maps.Size | naver.maps.SizeLiteral): naver.maps.Size;
    mul(width: number, height: number): naver.maps.Size;
    round(): naver.maps.Size;
    sub(size: naver.maps.Size | naver.maps.SizeLiteral): naver.maps.Size;
    sub(width: number, height: number): naver.maps.Size;
    toString(): string;
  }
  export class PointBounds {
    constructor(minPoint: naver.maps.Point, maxPoint: naver.maps.Point);
    static bounds(point: naver.maps.Coord | naver.maps.PointLiteral,
                  pointN: naver.maps.Coord | naver.maps.PointLiteral): naver.maps.PointBounds;
    clone(): naver.maps.PointBounds;
    equals(bounds: naver.maps.Bounds | naver.maps.PointBoundsLiteral): boolean;
    extend(point: naver.maps.Coord | naver.maps.PointLiteral): naver.maps.PointBounds;
    getCenter(): naver.maps.Point;
    getMax(): naver.maps.Point;
    getMin(): naver.maps.Point;
    hasBounds(bounds: naver.maps.Bounds | naver.maps.PointBoundsLiteral): boolean;
    hasPoint(point: naver.maps.Coord | naver.maps.PointLiteral): boolean;
    intersects(bounds: naver.maps.Bounds | naver.maps.PointBoundsLiteral): boolean;
    maxX(): number;
    maxY(): number;
    minX(): number;
    minY(): number;
    toString(): string;
    union(bounds: naver.maps.Bounds | naver.maps.PointBoundsLiteral): naver.maps.PointBounds;
  }
  export class LatLng extends Point {
    constructor(lat: number, lng: number);
    clone(): naver.maps.LatLng;
    destinationPoint(angle: number, meter: number): naver.maps.LatLng;
    equals(point: naver.maps.Coord | naver.maps.LatLngLiteral): boolean;
    lat(): number;
    lng(): number;
    toPoint(): naver.maps.Point;
    toString(): string;
  }
  export class LatLngBounds extends PointBounds {
    constructor(sw: naver.maps.LatLng, ne: naver.maps.LatLng);
    static bounds(latlng: naver.maps.Coord | naver.maps.LatLngLiteral,
                  latlngN: naver.maps.Coord | naver.maps.LatLngLiteral): naver.maps.LatLngBounds;
    clone(): naver.maps.LatLngBounds;
    east(): number;
    equals(bounds: naver.maps.Bounds | naver.maps.LatLngBoundsLiteral): boolean;
    extend(latlng: naver.maps.Coord | naver.maps.LatLngLiteral): naver.maps.LatLngBounds;
    getCenter(): naver.maps.LatLng;
    getNE(): naver.maps.LatLng;
    getSW(): naver.maps.LatLng;
    hasLatLng(latlng: naver.maps.Coord | naver.maps.LatLngLiteral): boolean;
    intersects(bounds: naver.maps.Bounds | naver.maps.LatLngBoundsLiteral): boolean;
    north(): number;
    south(): number;
    toPointBounds(): naver.maps.PointBounds;
    union(bounds: naver.maps.Bounds | naver.maps.LatLngBoundsLiteral): naver.maps.LatLngBounds;
    west(): number;
  }
  // Map
  export class Map {
    controls: any;
    data: any;
    layers: any;
    mapTypes: any;
    mapSystemProjection: any;
    constructor(mapDiv: string, mapOptions: MapOptions);
    addPane(name: string, elementOrIndex: HTMLElement | number): void;
    destory(): void;
    fitBounds(bounds: any, margin: any): void;
    getBounds(): any;
    getSize(): any;
  }
  // Map.Tile
  export class Tile extends naver.maps.KVO {
    constructor(element: HTMLElement, tileOptions?: naver.maps.TileOptions);
    appendTo(parentNode: HTMLElement): void;
    cancelFadeIn(): void;
    destroy(): void;
    fadeIn(callback: Function, startOpacity?: number): void;
    getElement(): HTMLElement;
    getOffset(): naver.maps.Point;
    getOpacity(): number;
    getSize(): naver.maps.Size;
    getTileIndex(): naver.maps.TileIndex;
    getZIndex(): number;
    hide(): void;
    load(tileOptions?: naver.maps.TileOptions): void;
    remove(): void;
    reset(mapType: naver.maps.MapType, zoom: number, tileOptions?: naver.maps.TileOptions): void;
    setBlank(): void;
    setOffset(offset: naver.maps.Point): void;
    setOffset(x: number, y: number): void;
    setOpacity(opacity: number): void;
    setSize(size: naver.maps.Size): void;
    setTileIndex(tileIndex: naver.maps.TileIndex): void;
    setZIndex(zIndex: number): void;
    show(): void;

  }
  export class CanvasTile extends naver.maps.Tile {
    constructor(canvasTileOptions: naver.maps.CanvasTileOptions);
  }
  export class ImageTile extends naver.maps.Tile {
    constructor(imageTileOptions: naver.maps.ImageTileOptions);
    getImageElements(): HTMLElement[];
    getUrls(): string[];
    setUrls(urls: string[]): void;
  }
  // Map.MapType
  export class CanvasMapType implements naver.maps.MapType {
    maxZoom: number;
    minZoom: number;
    name: string;
    projection: naver.maps.Projection;
    tileSize: naver.maps.Size;
    constructor(canvasMapTypeOptions: naver.maps.CanvasMapTypeOptions);
    getMapTypeOptions(): naver.maps.CanvasMapTypeOptions;
    getMaxZoom(): number;
    getMinZoom(): number;
    getName(): string;
    getTile(x: number, y: number, z: number): naver.maps.CanvasTile;
    getTileData(x: number, y: number, z: number): ImageData;
    setMapTypeOptions(canvasMapTypeOptions: naver.maps.CanvasMapTypeOptions): void;
  }
  export class ImageMapType implements naver.maps.MapType {
    maxZoom: number;
    minZoom: number;
    name: string;
    projection: naver.maps.Projection;
    tileSize: naver.maps.Size;
    constructor(imageMapTypeOptions);
    getMapTypeOptions(): naver.maps.ImageMapTypeOptions;
    getMaxZoom(): number;
    getMinZoom(): number;
    getName(): string;
    getTile(x: number, y: number, z: number): naver.maps.ImageTile;
    getTileUrls(x: number, y: number, z: number): string[];
    setMapTypeOptions(imageMapTypeOptions: naver.maps.ImageMapTypeOptions): void;
  }
  export class MapTypeRegistry extends naver.maps.KVO {
    constructor(mapTypeInfo: object, defaultMapTypeId?: string);
    getPreviousTypeId(): string;
    getSelectedType(): naver.maps.MapType;
    getSelectedTypeId(): string;
    getTypeIds(): string[];
    set(mapTypeId: string, mapType: naver.maps.MapType): void;
    setSelectedTypeId(mapTypeId: string): void;
  }
  // Map.MapType.Preset
  export class NaverMapTypeOption {
    constructor(options: naver.maps.NaverImageMapTypeOptions);
    static getBicycleLayer(opts: naver.maps.NaverImageMapTypeOptions): naver.maps.ImageMapType;
    static getBlankMap(opts: naver.maps.NaverImageMapTypeOptions): naver.maps.ImageMapType;
    static getCadastralLayer(opts?: naver.maps.NaverImageMapTypeOptions): naver.maps.ImageMapType;
    static getHybridMap(opts?: naver.maps.NaverImageMapTypeOptions): naver.maps.ImageMapType;
    static getMapTypes(opts?: naver.maps.NaverImageMapTypeOptions): naver.maps.MapTypeRegistry;
    static getNormalLabelLayer(opts?: naver.maps.NaverImageMapTypeOptions): naver.maps.ImageMapType;
    static getNormalMap(opts?: naver.maps.NaverImageMapTypeOptions): naver.maps.ImageMapType;
    static getSatelliteLabelLayer(opts?: naver.maps.NaverImageMapTypeOptions): naver.maps.ImageMapType;
    static getSatelliteMap(opts?: naver.maps.NaverImageMapTypeOptions): naver.maps.ImageMapType;
    static getStreetLayer(opts?: naver.maps.NaverImageMapTypeOptions): naver.maps.ImageMapType;
    static getTerrainMap(opts?: naver.maps.NaverImageMapTypeOptions): naver.maps.ImageMapType;
    static getTrafficLayer(opts?: naver.maps.NaverImageMapTypeOptions): naver.maps.ImageMapType;
    static getVectorMap(opts?: naver.maps.NaverImageMapTypeOptions): naver.maps.ImageMapType;
    static getWorldMap(opts?: naver.maps.NaverImageMapTypeOptions): naver.maps.ImageMapType;
  }
  // Control
  export class CustomControl extends naver.maps.KVO {
    constructor(html: string, ControlOptions: naver.maps.ControlOptions);
    getElement(): HTMLElement;
    getMap(): naver.maps.Map | null;
    getOptions(key?: string): any;
    html(html?: string): string | undefined;
    setMap(map?: naver.maps.Map | null): void;
    setOptions(newOptions: naver.maps.ControlOptions): void;
    setPosition(position: naver.maps.Position): void;
  }
  // Naver Controls
  export class LogoControl extends naver.maps.CustomControl {
    constructor(LogoControlOptions: naver.maps.LogoControlOptions);
  }
  export class MapDataControl extends naver.maps.CustomControl {
    constructor(MapDataControlOptions);
  }
  export class MapTypeControl extends naver.maps.CustomControl {
    constructor(MapTypeControlOptions: naver.maps.MapTypeControlOptions);
  }
  export class ScaleControl extends naver.maps.CustomControl {
    constructor(ScaleControlOptions: naver.maps.ScaleControlOptions);
  }
  export class ZoomControl extends naver.maps.CustomControl {
    constructor(ZoomControlOptions);
  }
  // Layer
  export class Layer extends naver.maps.KVO {
    constructor(name: string, MapTypeRegistry: naver.maps.MapTypeRegistry, options: naver.maps.LayerOptions);
    getLayerType(): naver.maps.MapType;
    getLayerTypeId(): string;
    getMap(): naver.maps.Map | null;
    getOpacity(): number;
    getPaneElement(): HTMLElement;
    refresh(noEffect?: boolean): void;
    setLayerTypeId(typeId: string): void;
    setMap(map: naver.maps.Map | null): void;
    setOpacity(opacity: number): void;
  }
  // Naver Layers
  export class LabelLayer extends naver.maps.Layer {
    constructor(name: string, registry: naver.maps.ImageMapType, option: object);
  }
  export class CadastralLayer extends naver.maps.LabelLayer {
    name: string;
    constructor(option?: naver.maps.CadastralLayerOptions);
  }
  export class StreetLayer extends naver.maps.LabelLayer {
    name: string;
    constructor(option?: naver.maps.StreetLayerOptions);
  }
  export class TrafficLayer extends naver.maps.LabelLayer {
    name: string;
    constructor(option?: naver.maps.TrafficLayerOptions);
    endAutoRefresh(): void;
    startAutoRefresh(): void;
  }
  // Data Layer
  export class Data extends naver.maps.KVO {
    constructor();
    addFeature(feature: naver.maps.Feature, autoStyle: boolean): void;
    addGeoJson(geojson: naver.maps.GeoJSON, autoStyle: boolean): void;
    addGpx(xmlDoc: naver.maps.GPX, autoStyle: boolean): void;
    addKml(xmlDoc: naver.maps.KML, autoStyle: boolean): void;
    forEach(callback: (feature: naver.maps.Feature, index: number) => void): void;
    getAllFeature(): naver.maps.Feature[];
    getFeatureById(id: string | number): naver.maps.Feature;
    getMap(): naver.maps.Map | null;
    getStyle(): naver.maps.StyleOptions | naver.maps.StylingFunction;
    overrideStyle(feature: naver.maps.Feature, style: naver.maps.StyleOptions): void;
    removeFeature(feature: naver.maps.Feature): void;
    removeGeoJson(geojson: naver.maps.GeoJSON): void;
    revertStyle(feature: naver.maps.Feature): void;
    setMap(map: naver.maps.Map | null): void;
    setStyle(style: naver.maps.StyleOptions | naver.maps.StylingFunction): void;
    toGeoJson(): naver.maps.GeoJSON;
  }
  export class Feature extends naver.maps.KVO {
    constructor(rawFeature: object);
    forEachOverlay(callback: naver.maps.forEachOverlayCallback): void;
    getBounds(): naver.maps.Bounds;
    getGeometries(): naver.maps.Geometry[];
    getId(): string;
    getOverlays(): naver.maps.Marker[] | naver.maps.Polyline[] | naver.maps.Polygon[];
    getProperty(name: string): any;
    getRaw(): naver.maps.GeoJSON;
    setProperty(name: string, value: any): void;
    setStyle(styleOptions: naver.maps.StyleOptions); // naver.maps.Data.StyleOptions
  }
  export class Geometry extends naver.maps.KVO {
    constructor(rawGeometry: object);
    getCoords(): naver.maps.ArrayOfCoords;
    getType(): string;
  }
  // Overlay
  export abstract class OverlayView extends naver.maps.KVO {
    draw(): void;
    getContainerTopLeft(): naver.maps.Point;
    getMap(): naver.maps.Map | null;
    getPanes(): naver.maps.MapPanes;
    getProjection(): naver.maps.MapSystemProjection;
    abstract onAdd(): any;
    abstract onRemove(): any;
    setMap(map: naver.maps.Map | null): void;
  }
  // Naver Overlays
  export abstract class Circle extends naver.maps.OverlayView {
    constructor(options?: naver.maps.CircleOptions);
    getAreaSize(): number;
    getBounds(): naver.maps.Bounds;
    getCenter(): naver.maps.Coord;
    getClickable(): boolean;
    getDrawingRect(): naver.maps.Bounds;
    getOptions(key?: string): naver.maps.CircleOptions | any;
    getRadius(): number;
    getStyles(key: string): naver.maps.CircleOptions | any;
    getVisible(): boolean;
    getZIndex(): number;
    setCenter(center): naver.maps.Coord | naver.maps.CoordLiteral;
    setClickable(clickable: boolean): void;
    setOptions(key: string, value: any): void;
    setOptions(options: naver.maps.CircleOptions): void;
    setRadius(radius: number): void;
    setStyles(key: string, value: string): void;
    setStyles(options: naver.maps.CircleOptions): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
  }
  export abstract class Ellipse extends naver.maps.OverlayView {
    constructor();
    getAreaSize(): number;
    getBounds(): naver.maps.Bounds;
    getClickable(): boolean;
    getDrawingRect(): naver.maps.Bounds;
    getOptions(key?: string): naver.maps.EllipseOptions | any;
    getStyles(key?: string): naver.maps.EllipseOptions | any;
    getVisible(): boolean;
    getZIndex(): number;
    setBounds(bounds: naver.maps.Bounds | naver.maps.BoundsLiteral): void;
    setOptions(options: naver.maps.EllipseOptions): void;
    setOptions(key: string, value: any): void;
    setStyles(options: naver.maps.EllipseOptions): void;
    setStyles(key: string, value: any): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
  }
  export abstract class GroundOverlay extends naver.maps.OverlayView {
    constructor(url: string, bounds: naver.maps.Bounds | naver.maps.BoundsLiteral, options?: naver.maps.GroundOverlayOptions);
    getBounds(): naver.maps.Bounds;
    getOpacity(): number;
    getUrl(): string;
    setOpacity(opacity: number): void;
  }
  export abstract class InfoWindow extends naver.maps.OverlayView {
    constructor(options: naver.maps.InfoWindowOptions);
    close(): void;
    getContent(): HTMLElement;
    getOptions(key?: string): naver.maps.InfoWindowOptions;
    getPosition(): naver.maps.Coord;
    getZIndex(): number;
    open(map: naver.maps.Map, anchor: naver.maps.Coord | naver.maps.CoordLiteral | naver.maps.Marker	): void;
    setContent(content: string | HTMLElement): void;
    setOptions(options: naver.maps.InfoWindowOptions): void;
    setPosition(position: naver.maps.Coord | naver.maps.CoordLiteral): void;
    setZIndex(zIndex: number): void;
  }
  export abstract class Marker extends naver.maps.OverlayView {
    constructor(options: MarkerOptions);
    abstract draw(): void;
    getAnimation(): naver.maps.Animation;
    getClickable(): boolean;
    getCursor(): string;
    getDraggable(): boolean;
    getDrawingRect(): naver.maps.Bounds;
    getIcon(): naver.maps.ImageIcon | naver.maps.SymbolIcon | naver.maps.HtmlIcon;
    getOptions(key?: string): naver.maps.MarkerOptions;
    getPosition(): naver.maps.Coord;
    getShape(): naver.maps.MarkerShape;
    getTitle(): string;
    getVisible(): boolean;
    getZIndex(): number;
    abstract onAdd(): void;
    abstract onRemove(): void;
    setAnimation(animation: naver.maps.Animation): void;
    setClickable(clickable: boolean): void;
    setCursor(cursor: string): void;
    setDraggable(draggable: boolean): void;
    setIcon(icon: string | naver.maps.ImageIcon | naver.maps.SymbolIcon | naver.maps.HtmlIcon): void;
    setOptions(options: naver.maps.MarkerOptions): void;
    setPosition(position: naver.maps.Coord | naver.maps.CoordLiteral): void;
    setShape(shape: naver.maps.MarkerShape): void;
    setTitle(title: string): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
  }
  export abstract class Polygon extends naver.maps.OverlayView {
    constructor(options?: naver.maps.PolygonOptions);
    getAreaSize(): number;
    getBounds(): naver.maps.Bounds;
    getClickable(): boolean;
    getDrawingRect(): naver.maps.Bounds;
    getOptions(key?: string): naver.maps.PolygonOptions | any;
    getPath(): naver.maps.ArrayOfCoords | naver.maps.KVOArrayOfCoords;
    getPaths(): ArrayOfCoords[] | KVOArrayOfCoords[];
    getStyles(key?: string): naver.maps.PolygonOptions | any;
    getVisible(): boolean;
    getZIndex(): number;
    setClickable(clickable: boolean): void;
    setOptions(key: string, value: any): void;
    setOptions(options: naver.maps.PolygonOptions): void;
    setPath(path: naver.maps.ArrayOfCoords | naver.maps.KVOArrayOfCoords | naver.maps.ArrayOfCoordsLiteral): void;
    setPaths(paths: naver.maps.ArrayOfCoords[] | naver.maps.ArrayOfCoordsLiteral | any): void; // TODO. KVOArray.<KVOArrayOfCoords>
    setStyles(key: string, value: any): void;
    setStyles(options: naver.maps.PolygonOptions): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
  }
  export abstract class Polyline extends naver.maps.OverlayView {
    constructor(options?: naver.maps.PolylineOptions);
    getBounds(): naver.maps.Bounds;
    getClickable(): boolean;
    getDistance(): number;
    getDrawingRect(): naver.maps.Bounds;
    getOptions(key?: string): naver.maps.PolylineOptions | any;
    getPath(): naver.maps.ArrayOfCoords | naver.maps.KVOArrayOfCoords;
    getStyles(key?: string): naver.maps.PolylineOptions | any;
    getVisible(): boolean;
    getZIndex(): number;
    setClickable(clickable: boolean): void;
    setOptions(key: string, value: any): void;
    setOptions(options: naver.maps.PolylineOptions): void;
    setPath(path: naver.maps.ArrayOfCoords | naver.maps.KVOArrayOfCoords | naver.maps.ArrayOfCoordsLiteral): void;
    setStyles(key: string, value: any): void;
    setStyles(options: naver.maps.PolylineOptions): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
  }
  export abstract class Rectangle extends naver.maps.OverlayView {
    constructor(options?: naver.maps.RectangleOptions);
    getAreaSize(): number;
    getBounds(): naver.maps.Bounds;
    getClickable(): boolean;
    getDrawingRect(): naver.maps.Bounds;
    getOptions(key?: string): naver.maps.RectangleOptions | any;
    getStyles(key?: string): naver.maps.RectangleOptions | any;
    getVisible(): boolean;
    getZIndex(): number;
    setBounds(bounds: naver.maps.Bounds | naver.maps.BoundsLiteral): void;
    setClickable(clickable: boolean): void;
    setOptions(options: naver.maps.RectangleOptions): void;
    setOptions(key: string, value: any): void;
    setStyles(key: string, value: any): void;
    setStyles(options: naver.maps.RectangleOptions): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
  }

  // Sub module: panorama
  export class PanoramaProjection extends naver.maps.KVO {
    fromCoordToPov(coord: naver.maps.LatLng): naver.maps.PanoramaPov;
  }
  export class Panorama extends naver.maps.KVO {
    constructor(panoramaDiv: string | HTMLElement, panoramaOptions: naver.maps.PanoramaOptions);
    getLocation(): naver.maps.PanoramaLocation;
    getMaxScale(): number;
    getMaxZoom(): number;
    getMinScale(): number;
    getMinZoom(): number;
    getPanoId(): string;
    getPosition(): naver.maps.LatLng;
    getPov(): naver.maps.PanoramaPov;
    getProjection(): naver.maps.PanoramaProjection;
    getScale(): number;
    getSize(): naver.maps.Size;
    getVisible(): boolean;
    getZoom(): number;
    setOptions(key: string, value: any);
    setOptions(newOptions: naver.maps.PanoramaOptions | object);
    setPanoId(panoId: string): void;
    setPanoIdWithPov(panoId: string, pov: naver.maps.PanoramaPov): void;
    setPosition(position: naver.maps.LatLng | naver.maps.LatLngLiteral): void;
    setPov(pov: naver.maps.PanoramaPov): void;
    setScale(scale: number): void;
    setSize(size: naver.maps.Size | naver.maps.SizeLiteral): void;
    setVisible(visible: boolean): void;
    setZoom(zoom: number): void;
    zoomIn(): void;
    zoomOut(): void;
  }
  export class FlightSpot extends naver.maps.KVO {
    constructor();
    getMap(): naver.maps.Map | null;
    setMap(map: naver.maps.Map | null): void;
  }
  export class AroundControl extends naver.maps.CustomControl {
    constructor(aroundControlOptions: AroundControlOptions);
  }

  // Sub module: drawing
  export module drawing {
    export interface DrawingOptions {
      map?: naver.maps.Map;
      drawingControl?: naver.maps.drawing.DrawingMode[];
      drawingControlOptions?: naver.maps.drawing.drawingControlOptions;
      drawingMode?: naver.maps.drawing.DrawingMode;
      controlPointOptions?: naver.maps.drawing.controlPointOptions;
      rectangleOptions?: naver.maps.RectangleOptions;
      ellipseOptions?: naver.maps.EllipseOptions;
      polylineOptions?: naver.maps.PolylineOptions;
      arrowlineOptions?: naver.maps.PolylineOptions;
      polygonOptions?: naver.maps.PolygonOptions;
      markerOptions?: naver.maps.MarkerOptions;
    }
    type drawingControlOptions = DrawingControlOptions;
    export interface DrawingControlOptions {
      position?: naver.maps.Position;
      style?: naver.maps.drawing.DrawingStyle;
    }
    type controlPointOptions = ControlPointOptions;
    export interface ControlPointOptions {
      anchorPointOptions: naver.maps.CircleOptions;
      midPointOptions: naver.maps.CircleOptions;
    }
    export interface DrawingOverlay {
      id: string;
      name: string;
      setEditable: (editable: boolean, controlPointOptions?: naver.maps.drawing.controlPointOptions) => void;
    }
    export enum DrawingStyle {
      HORIZONTAL = 0,
      VERTICAL,
      HORIZONTAL_2,
      VERTICAL_2
    }
    export enum DrawingMode {
      HAND = 0,
      RECTANGLE,
      ELLIPSE,
      POLYLINE,
      ARROWLINE,
      POLYGON,
      MARKER
    }
    export enum DrawingEvent {
      ADD,
      REMOVE,
      SELECT,
      Added,
      Removed,
      Selected
    }
    export class DrawingManager extends naver.maps.KVO {
      constructor(options?: naver.maps.drawing.DrawingOptions);
      addDrawing(overlay: naver.maps.drawing.DrawingOverlay, drawingMode: naver.maps.drawing.DrawingMode, id?: string): void;
      addListener(eventName: naver.maps.drawing.DrawingEvent,
                  listener: (overlay: naver.maps.drawing.DrawingOverlay) => void): naver.maps.MapEventListener;
      destroy(): void;
      getDrawing(id: string): naver.maps.drawing.DrawingOverlay;
      getDrawings(): object;
      getMap(): naver.maps.Map | null;
      setMap(map: naver.maps.Map | null): void;
      toGeoJson(): object;
    }
  }

  // Sub module: visualization
  export module visualization {
    export interface DotMapOptions {
      map: naver.maps.Map;
      data: naver.maps.LatLng[] | naver.maps.PointArrayLiteral[] | naver.maps.visualization.WeightedLocation[];
      opacity?: number;
      radius?: number;
      strokeWeight?: number;
      strokeColor?: string;
      strokeLineCap?: naver.maps.strokeLineCapType;
      strokeLineJoin?: naver.maps.strokeLineJoinType;
      fillColor?: string;
    }
    export interface HeatMapOptions {
      map: naver.maps.Map;
      data: naver.maps.LatLng[] | naver.maps.PointArrayLiteral[] | naver.maps.visualization.WeightedLocation[];
      opacity?: number;
      radius?: number;
      colorMap?: naver.maps.visualization.SpectrumStyle;
    }
    export enum SpectrumStyle {
      JET,
      HSV,
      HOT,
      COOL,
      GREYS,
      YIGnBu,
      YIOrRd,
      RdBu,
      RAINBOW,
      PORTLAND,
      OXYGEN
    }
    export class DotMap extends naver.maps.KVO {
      constructor(dotMapOptions?: naver.maps.visualization.DotMapOptions);
      addDrawing(overlay: naver.maps.drawing.DrawingOverlay, drawingMode: naver.maps.drawing.DrawingMode, id?: string): void;
      addListener(eventName: naver.maps.drawing.DrawingEvent,
                  listener: (overlay: naver.maps.drawing.DrawingOverlay) => void): naver.maps.MapEventListener;
      destroy(): void;
      getDrawing(id: string): naver.maps.drawing.DrawingOverlay;
      getDrawings(): object;
      getMap(): naver.maps.Map | null;
      setMap(map: naver.maps.Map | null): void;
      toGeoJson(): object;
    }
    export class HeatMap {
      constructor(heatMapOptions?: naver.maps.visualization.HeatMapOptions);
      getColorMap(): naver.maps.visualization.SpectrumStyle;
      getData(): naver.maps.LatLng[] | naver.maps.PointArrayLiteral[];
      getMap(): naver.maps.Map | null;
      getOptions(key?: string): naver.maps.visualization.HeatMapOptions | any;
      redraw(): void;
      setColorMap(colormap: naver.maps.visualization.SpectrumStyle, inReverse: boolean): void;
      setData(data: naver.maps.LatLng[] | naver.maps.PointArrayLiteral[]): void;
      setMap(map: naver.maps.Map | null): void;
      setOptions(key: string, value: any): void;
      setOptions(options: naver.maps.visualization.HeatMapOptions): void;
    }
    export class WeightedLocation {
      constructor(lat: number, lng: number, weight?: number);
      clone(): naver.maps.visualization.WeightedLocation;
      getLocation(): naver.maps.LatLng;
      getWeight(): number;
      lat(): number;
      lng(): number;
      toString(): string;
    }
  }

  // Sub module: geocoder
  export module Service {
    export interface ServiceOptions {
      encoding?: any;
      coordType?: any;
    }
    export interface GeocodeServiceOptions extends ServiceOptions {
      address?: string;
    }
    export interface ReverseServiceOptions extends ServiceOptions {
      location?: Coord | CoordLiteral;
    }
    export interface AddressItem {
      address: string;
      addrdetail: {
        country: string;
        sido: string;
        sigugun: string;
        dongmyun: string;
        rest: string;
      };
    }
    export interface GeocodeResponse {
      result: {
        userquery: object;
        total: number;
        items: naver.maps.Service.AddressItem[];
      };
    }
    export interface ReverseGeocodeResponse {
      result: {
        userquery: string;
        total: number;
        items: naver.maps.Service.AddressItem[];
      };
    }
    export enum CoordType {
      LATLNG = 'latlng',
      TM128 = 'tm128'
    }
    export enum Encoding {
      UTF_8 = 'utf-8',
      EUC_KR = 'euc-kr'
    }
    export enum Status {
      OK = 200,
      ERROR = 500
    }

    function fromAddrToCoord();
    function fromCoordToAddr();
    function geocode(options: naver.maps.Service.GeocodeServiceOptions,
                     callback?: (status: naver.maps.Service.Status, response: naver.maps.Service.GeocodeResponse) => void);
    function reverseGeocode(options: naver.maps.Service.ReverseServiceOptions,
                            callback?: (status: naver.maps.Service.Status, response: naver.maps.Service.ReverseGeocodeResponse) => void);
  }

  export module TransCoord {
    function fromEPSG3857ToLatLng(coord: naver.maps.Point): naver.maps.LatLng;
    function fromEPSG3857ToNaver(coord: naver.maps.Point): naver.maps.Point;
    function fromEPSG3857ToTM128(coord: naver.maps.Point): naver.maps.Point;
    function fromEPSG3857ToUTMK(coord: naver.maps.Point): naver.maps.Point;
    function fromLatLngToEPSG3857(latlng: naver.maps.Coord): naver.maps.Point;
    function fromLatLngToNaver(latlng: naver.maps.Coord): naver.maps.Point;
    function fromLatLngToTM128(latlng: naver.maps.Coord): naver.maps.Point;
    function fromLatLngToUTMK(latlng: naver.maps.Coord): naver.maps.Point;
    function fromNaverToEPSG3857(n: naver.maps.Point): naver.maps.Point;
    function fromNaverToLatLng(n: naver.maps.Point): naver.maps.LatLng;
    function fromNaverToTM128(n: naver.maps.Point): naver.maps.Point;
    function fromNaverToUTMK(n: naver.maps.Point): naver.maps.Point;
    function fromTM128ToEPSG3857(tm128: naver.maps.Point): naver.maps.Point;
    function fromTM128ToLatLng(tm128: naver.maps.Point): naver.maps.LatLng;
    function fromTM128ToNaver(tm128: naver.maps.Point): naver.maps.Point;
    function fromTM128ToUTMK(tm128: naver.maps.Point): naver.maps.Point;
    function fromUTMKToEPSG3857(utmk: naver.maps.Point): naver.maps.Point;
    function fromUTMKToLatLng(utmk: naver.maps.Point): naver.maps.LatLng;
    function fromUTMKToNaver(utmk: naver.maps.Point): naver.maps.Point;
    function fromUTMKToTM128(utmk: naver.maps.Point): naver.maps.Point;
  }

  export module Event {
    function addDOMListener(element: HTMLElement, eventName: string, listener: Function): void;
    function addListener(target: object, eventName: string, listener: Function): naver.maps.MapEventListener;
    function clearInstanceListeners(target: object): void;
    function clearListeners(target: object, fromEventName: string): void;
    function forward(source: object, fromEventName: string, target: object, toEventName: string): naver.maps.MapEventListener;
    function hasListener(target: object, eventName: string): boolean;
    function once(target: object, eventName: string, listener: Function): naver.maps.MapEventListener;
    function removeDOMListener(element: HTMLElement, eventName: string, listener: Function): void;
    function removeDOMListener(listeners: naver.maps.DOMEventListener | naver.maps.DOMEventListener[]): void;
    function removeListener(listeners: naver.maps.MapEventListener | naver.maps.MapEventListener[]): void;
    function resumeDispatch(target: object, eventName: string): void;
    function stopDispatch(target: object, eventName: string): void;
    function trigger(target: object, eventName: string, eventObject?: any): void;
  }

  // Projection
  export module EPSG3857 { // implements naver.maps.Projection
    function fromCoordToPoint(coord: naver.maps.Coord): naver.maps.Point;
    function fromLatLngToPoint(latlng: naver.maps.LatLng): naver.maps.Point;
    function fromPointToCoord(point: naver.maps.Point): naver.maps.LatLng;
    function fromPointToLatLng(point: naver.maps.Point): naver.maps.LatLng;
    function getDestinationCoord(fromLatLng: naver.maps.LatLng, angle: number, meter: number): naver.maps.LatLng;
    function getDistance(latlng1: naver.maps.LatLng, latlng2: naver.maps.LatLng): number;
  }
  export class UTMK {
    name: string;
    pointPerMeter: number;
    static fromCoordToPoint(latlng: naver.maps.LatLng): naver.maps.Point;
    static fromCoordToUTMK(latlng: naver.maps.LatLng): naver.maps.Point;
    static fromLatLngToPoint(latlng: naver.maps.LatLng): naver.maps.Point;
    static fromLatLngToUTMK(latlng: naver.maps.LatLng): naver.maps.Point;
    static fromPointToCoord(point: naver.maps.Point): naver.maps.LatLng;
    static fromPointToLatLng(point: naver.maps.Point): naver.maps.LatLng;
    static fromPointToUTMK(point: naver.maps.Point): naver.maps.Point;
    static fromUTMKToCoord(utmk: naver.maps.Point): naver.maps.LatLng;
    static fromUTMKToLatLng(utmk: naver.maps.Point): naver.maps.LatLng;
    static fromUTMKToPoint(utmk: naver.maps.Point): naver.maps.Point;
    static getDestinationCoord(fromLatLng: naver.maps.LatLng, angle: number, meter: number): naver.maps.LatLng;
    static getDistance(latlng1: naver.maps.LatLng, latlng2: naver.maps.LatLng): number;
  }
  export class UTMK_NAVER { // extends naver.maps.UTMK
    name: string;
    pointPerMeter: number;
    static fromCoordToNaver(latlng: naver.maps.LatLng): naver.maps.Point;
    static fromLatLngToNaver(latlng: naver.maps.LatLng): naver.maps.Point;
    static fromNaverToCoord(naverPoint: naver.maps.Point): naver.maps.LatLng;
    static fromNaverToLatLng(naverPoint: naver.maps.Point): naver.maps.LatLng;
    static fromNaverToPoint(naverPoint: naver.maps.Point): naver.maps.Point;
    static fromNaverToUTMK(naverPoint: naver.maps.Point): naver.maps.Point;
    static fromPointToNaver(point: naver.maps.Point): naver.maps.Point;
    static fromUTMKToNaver(utmk: naver.maps.Point): naver.maps.Point;
  }
  export class EPSG3857Coord {
    static fromCoordToLatLng(coord: naver.maps.Point): naver.maps.LatLng;
    static fromCoordToPoint(coord: naver.maps.Point): naver.maps.Point;
    static fromEPSG3857ToLatLng(coord: naver.maps.Point): naver.maps.LatLng;
    static fromEPSG3857ToPoint(coord: naver.maps.Point): naver.maps.Point;
    static fromLatLngToCoord(coord: naver.maps.Coord): naver.maps.Point;
    static fromLatLngToEPSG3857(coord: naver.maps.Coord): naver.maps.Point;
    static fromPointToCoord(point: naver.maps.Point): naver.maps.Point;
    static fromPointToEPSG3857(point: naver.maps.Point): naver.maps.Point;
  }
  export class TM128 { // extends naver.maps.TM128Coord
    static fromCoordToPoint(latlng: naver.maps.Coord): naver.maps.Point;
    static fromPointToCoord(point: naver.maps.Point): naver.maps.LatLng;
  }
  export class TM128Coord { // extends naver.maps.UTMK
    static fromCoordToLatLng(tm128: naver.maps.Point): naver.maps.LatLng;
    static fromCoordToPoint(tm128: naver.maps.Point): naver.maps.Point;
    static fromLatLngToCoord(latlng: naver.maps.Coord): naver.maps.Point;
    static fromLatLngToTM128(latlng: naver.maps.Coord): naver.maps.Point;
    static fromPointToCoord(point: naver.maps.Point): naver.maps.Point;
    static fromPointToTM128(point: naver.maps.Point): naver.maps.Point;
    static fromTM128ToLatLng(tm128: naver.maps.Point): naver.maps.LatLng;
    static fromTM128ToPoint(tm128: naver.maps.Point): naver.maps.Point;
    static fromTM128ToUTMK(tm128: naver.maps.Point): naver.maps.Point;
    static fromUTMKToTM128(utmk: naver.maps.Point): naver.maps.Point;
  }
  export class UTMK_NAVERCoord { // extends naver.maps.UTMK_NAVER
    static fromCoordToLatLng(n: naver.maps.Point): naver.maps.LatLng;
    static fromCoordToPoint(n: naver.maps.Point): naver.maps.Point;
    static fromLatLngToCoord(latlng: naver.maps.Coord): naver.maps.Point;
    static fromPointToCoord(point: naver.maps.Point): naver.maps.Point;
  }
  export class UTMKCoord { // extends naver.maps.UTMK
    static fromCoordToLatLng(utmk: naver.maps.Point): naver.maps.LatLng;
    static fromCoordToPoint(utmk: naver.maps.Point): naver.maps.Point;
    static fromLatLngToCoord(latlng: naver.maps.Coord): naver.maps.Point;
    static fromPointToCoord(point: naver.maps.Point): naver.maps.Point;
  }
}
