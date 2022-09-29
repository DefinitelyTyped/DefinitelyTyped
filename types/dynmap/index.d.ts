// Type definitions for non-npm package dynmap 3.1
// Project: https://github.com/webbukkit/dynmap
// Definitions by: Mike Primm <https://github.com/mikeprimm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1
import * as L from 'leaflet';
import 'jquery';
import 'jquery-mousewheel';

export as namespace Dynmap;
export {};

declare global {
    // js/hdmap.js
    interface HDProjection extends Omit<DynmapProjection, 'fromLocationToLatLng' | 'fromLatLngToLocation'> {
        fromLocationToLatLng(location: Location): L.LatLng;
        fromLatLngToLocation(location: L.LatLng): Location;
    }
    interface HDMapType extends Omit<WorldMap, 'getTileName'> {
        projection: DynmapTileLayer['projection'];
        options: WorldMap['options'];
        initialize(options: WorldMap['options']): void;
        getTileName(coords: Location): string;
        zoomprefix(amount: number): string;
    }

    interface Array<T> {
        indexOf(searchElement: T): number;
    }

    // js/dynmaputils.js
    function loadjs(url: string, completed: () => void): void;
    function loadcss(url: string, completed: () => void): void;
    function splitArgs(s: string): Record<string, string | undefined>;
    function swtch(
        value: string | number | symbol,
        options: Record<string | number | symbol, unknown | null | unknown[]>,
        defaultOption: any
    ): unknown;

    interface JQuery {
        /**
         * Getter-setter for element scroll height.
         *
         * @param height New scroll height of element (not implemented).
         */
        scrollHeight(height?: number): Element['scrollHeight'];
    }

    function namedReplace(str: string, obj: Record<string | number | symbol, unknown | null | unknown[]>): string;
    function concatURL(base: string, addition: string): string;

    // js/sidebarutils.js
    var SidebarUtils: SidebarUtils;

    // js/version.js
    var dynmapversion: `${string}-${string}`;

    // js/markers.js
    var dynmapmarkersets: Record<string, MarkerSet | undefined> | undefined;

    // standalone/config.js
    var config: StandaloneConfiguration;

    // js/jquery.json.js
    interface JQueryStatic {
        parseJSON(str: string): any;
        stringifyJSON(obj?: any): string;
    }
    function fixedAjax(obj: JQuery.AjaxSettings): void;
    interface JQueryStatic {
        deleteJSON(url: string, success: JQuerySuccessHandlerFn, error: JQueryErrorHandlerFn): void;
        postJSON(obj: any, url: string, success: JQuerySuccessHandlerFn, error: JQueryErrorHandlerFn): void;
        putJSON(obj: any, url: string, success: JQuerySuccessHandlerFn, error: JQueryErrorHandlerFn): void;
        getJSON(url: string, success: JQuerySuccessHandlerFn, error: JQueryErrorHandlerFn): void;
    }

    // js/minecraft.js
    function createMinecraftHead(
        player: string,
        size: string,
        completed: () => HTMLImageElement,
        failed: () => void
    ): void;
    function getMinecraftHead(
        player: string,
        size: string,
        completed: () => HTMLImageElement
    ): void;
    function getMinecraftTime<S = number, D = boolean>(servertime: S): {
        servertime: S;
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
        day: D;
        night: D;
    };

    // js/map.js
    function chat_encoder(message: ChatMessage): string | ChatMessage['text'];

    var componentconstructors: ComponentRecord;
    var maptypes: Record<string, WorldMap | undefined>;
    var map: GlobalMap | null;
    var dynmap: DynMap;
}

declare module 'leaflet' {
    interface CustomMarkerOptions extends MarkerOptions {
        clickable: true;
        draggable: false;
        elementCreator: undefined;
        icon: CustomIcon;
        shadowCreator: undefined;
    }
    class CustomMarker extends Marker<CustomMarkerOptions> {
        constructor(latlng: LatLngExpression, options?: CustomMarkerOptions);
        options: CustomMarkerOptions;
    }
    interface CustomIconOptions extends DivIconOptions {
        elementCreator: () => HTMLDivElement;
        shadowCreator: () => void;
        className: '';
    }
    class CustomIcon extends DivIcon {
        constructor(options?: CustomIconOptions);
        initialize: (options: DivIconOptions) => {};
        options: CustomIconOptions;
    }
}

// js/dynmaputils.js

declare class DynmapProjection extends L.Class {
    initialize(options: WorldMap['options']): void;
    fromLocationToLatLng(location: Location): never;
    fromLatLngToLocation(location: LatLng): null;
}

declare class DynmapLayerControl extends L.Control.Layers {
    getPosition(): L.ControlPosition;
    addOverlay(layer: L.Layer, name: string, pos?: boolean): this;
    _addLayer(layer: L.Layer, name: string, overlay: L.Layer, pos?: boolean): void;
}

export interface TileInformation {
    prefix: string;
    nightday: string;
    scaledx: number;
    scaledy: number;
    zoom: string;
    zoomprefix: string;
    x: number;
    y: number;
    fmt: ImageFormat;
}

declare class DynmapTileLayer extends L.TileLayer {
    constructor(options: L.TileLayerOptions);
    projection?: L.Projection;
    _namedTiles: Record<string, HTMLImageElement | undefined>;
    _cachedTileUrls: Record<string, string | undefined>;
    _loadQueue: HTMLImageElement[];
    _loadingTiles: HTMLImageElement[];
    options: L.TileLayerOptions & {
        attribution?: string;
        continuousWorld?: boolean;
        unloadInvisibleTiles?: boolean;
    };
    createTile(coords: Location, done?: () => void): HTMLImageElement;
    _abortLoading(): void;
    _removeTile(key: string): void;
    getTileUrl(coords: Location, timestamp?: string): string;
    getTileUrlFromName(tileName: string, timestamp: string): string;
    getProjection(): L.Projection;
    _tickLoadQueue(): void;
    getTileName(coords: Location): never;
    updateNamedTile(name: string, timestamp: string): void;
    zoomprefix(amount: number): string;
    getTileInfo(coords: Location): TileInformation;
}

export class Location<W = string | World | null, X = number, Y = number, Z = number> {
    constructor(world: W, x: X, y: Y, z: Z);
    world?: W;
    x: X;
    y: Y;
    z: Z;
}

export class LatLng<W = string | World | null, L = number, F = number> {
    constructor(world: W, lat: L, lng: F);
    world?: W;
    lat: L;
    lng: F;
}

// js/sidebarutils.js

export interface SidebarUtils {
    createSection<Content = JQuery<HTMLUListElement>>(labelText: string, content: Content): {
        section: JQuery<HTMLFieldSetElement>;
        legend: JQuery<HTMLLegendElement>;
        upBtn: JQuery<HTMLButtonElement>;
        content: Content;
        downBtn: JQuery<HTMLButtonElement>;
    };
    createListSection(labelText: string): ReturnType<SidebarUtils['createSection']>;
    createScrollButton(up: boolean, target: JQuery<HTMLDivElement>): JQuery<HTMLDivElement>;
}

// js/version.js

// js/jquery.json.js

export type JQuerySuccessHandlerFn = (request: XMLHttpRequest) => void;

export type JQueryErrorHandlerFn = (
    status: XMLHttpRequest['status'],
    statusText: XMLHttpRequest['statusText'],
    request: XMLHttpRequest
) => void;

// js/minecraft.js

export interface ChatMessage {
    source: string;
    text: string;
    options: {
        cyrillic: boolean;
    };
}

// js/map.js

export type Component<Data extends Record<string | number | symbol, unknown | null | unknown[]>> = Data & {
    new(dynmap: DynMap, configuration: Record<string | number | symbol, unknown | null | unknown[]>): Component<Data>;
    [data: string]: unknown;
};

export class WorldMap extends DynmapTileLayer {
    constructor(options: WorldMapOptions);
    dynmap: DynMap;
    options: WorldMapConfiguration & DynmapTileLayer['options'] & WorldMapOptions;
    _currentzoom: number;
    _limitedUpdate: L.LeafletEventHandlerFn;
}

export class World {
    constructor();
    center: Location;
    defaultmap: WorldMap;
    element?: JQuery<HTMLLIElement>;
    extrazoomout: string;
    lastcenter?: Location;
    maps: Record<string, WorldMap | undefined>;
    name: string;
    protected: boolean;
    title: string;
    worldheight: number;
}

export interface ComponentRecord {
    [componentname: string]: Component<{}> | undefined;
    markers?: Component<{}>;
    chat?: Component<{}>;
    chatballoon?: Component<{ chatpopups: Record<string | number | symbol, unknown | null | unknown[]> }>;
    chatbox?: Component<{}>;
    inactive?: Component<{}>;
    playermarkers?: Component<{}>;
    link?: Component<{}>;
    timeofdayclock?: Component<{}>;
    coord?: Component<{}>;
    testcomponent?: Component<{}>;
}

export interface GlobalMap extends L.Map {
    _container: HTMLDivElement;
    _controlContainer: HTMLElement;
    _controlCorners: Record<string, HTMLElement | undefined>;
    _handlers: L.Handler[];
    _initialTopLeftPoint: L.Point;
    _layers: Record<string, L.Layer>;
    _layersMaxZoom: number;
    _layersMinZoom: number;
    _loaded: boolean;
    _mapPane: HTMLElement;
    _panes: Record<string, HTMLElement | undefined>;
    _size: L.Point;
    _sizeChanged: boolean;
    _tileLayersNum: number;
    _tileLayersToLoad: number;
    _tilePane: HTMLElement;
    _zoom: number;
    _zoomAnimated: boolean;
    _zoomBoundLayers: Record<string, L.Layer | undefined>;
    boxZoom: L.Handler;
    doubleClickZoom: L.Handler;
    dragging: L.Handler;
    keyboard: L.Handler & {
        _panKeys: Record<number, [number, number] | undefined>;
        _zoomKeys: Record<number, 1 | -1>;
    };
    options: L.MapOptions;
    scrollWheelZoom: L.Handler & {
        _delta: number
    };
    tap?: L.Handler;
    touchZoom: L.Handler;
    zoomControl: L.Control.Zoom & L.Handler & {
        _zoomInButton: HTMLElement;
        _zoomOutButton: HTMLElement;
    };
}

declare class DynMap {
    constructor(options: Options);
    alertbox?: JQuery<HTMLDivElement> | null;
    components: Array<ComponentRecord[keyof ComponentRecord]>;
    currentcount: number;
    defaultworld: World;
    followingPlayer: string;
    initfollow: null;
    inittime: number;
    lasttimestamp: number;
    DynmapLayerControl: DynmapLayerControl | undefined;
    layersetlist: LayerSet[];
    maptype?: DynmapTileLayer;
    map?: GlobalMap;
    maxcount: number;
    missedupdates: number;
    nocompass: boolean;
    nogui: boolean;
    options: Options;
    playerfield?: JQuery<HTMLLegendElement> | null;
    playerlist?: JQuery<HTMLUListElement> | null;
    players: Record<string | number | symbol, unknown | null | unknown[]>;
    registeredTiles: Record<number | string, string>;
    reqid: number;
    serverday: boolean;
    servertime: number;
    sidebar?: JQuery<HTMLDivElement> | null;
    sidebarPanel?: JQuery<HTMLDivElement> | null;
    sidebarSections: Array<ReturnType<SidebarUtils['createListSection']>>;
    worldlist?: JQuery<HTMLUListElement>;
    worlds: Record<string, World | undefined>;
    formatUrl(name: string, options: Options): string;
    configure(configuration: Configuration): void;
    initialize(): void;
    updateSidebarHeight(): void;
    getProjection: NonNullable<DynMap['maptype']>['getProjection'];
    selectMapAndPan(map: WorldMap, location: Location, completed?: () => void): void;
    selectMap(map: WorldMap, completed?: () => void): void;
    selectWorldAndPan(world: World, location: Location, completed?: () => void): void;
    selectWorld(world: World, completed?: () => void): void;
    panToLocation(location: Location, completion?: () => void): void;
    panToLayerPoint(point: L.Point, completed?: () => void): void;
    panToLatLng(latlng: LatLng, completed?: () => void): void;
    update(): void;
    getTileUrl(tileName: keyof DynMap['registeredTiles']): DynMap['registeredTiles'][keyof DynMap['registeredTiles']];
    addPlayer(player: Player, update: Player): void;
    removePlayer(player: Player): void;
    followPlayer(player: Player): void;
    updateBackground(): void;
    getParameterByName(name: string): string;
    getIntParameterByName(name: string): number | null;
    getBoolParameterByName(name: string): boolean | null;
    addToLayerSelector(layer: L.Layer, name: string, priority: number): void;
    removeFromLayerSelector(layer: L.Layer): void;
    getLink(): string;
    initLogin(): void;
    saveURL(): void;
    checkForSavedURL(): void;
}

export interface ComponentConfiguration {
    [index: string]: boolean | number | string | undefined;
    type: string;
}

export interface WorldConfiguration {
    append_to_world?: string;
    center: Location;
    extrazoomout: number;
    maps: WorldMapConfiguration[];
    name: string;
    protected: boolean;
    sealevel: number;
    title: string;
    worldheight: 256;
}

export type WorldMapConversion = [
    number, number, number,
    number, number, number,
    number, number, number
];

export type CompassDirection = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW';

export type ImageFormat =  (
    | 'jpg' | 'jpg-q75' | 'jpg-q80' | 'jpg-q85' | 'jpg-q90' | 'jpg-q95' | 'jpg-q100' | 'png'
    | 'webp' | 'webp-l' | 'webp-q75' | 'webp-q80' | 'webp-q85' | 'webp-q90' | 'webp-q95' | 'webp-q100'
);

export interface WorldMapConfiguration {
    azimuth: number;
    background: null;
    backgroundday: null;
    backgroundnight: null;
    bigmap: boolean;
    boostzoom: number;
    compassview: CompassDirection;
    icon?: string | L.CustomIcon | null;
    'image-format': ImageFormat;
    inclination: number;
    lighting: string;
    maptoworld: WorldMapConversion;
    mapzoomin: number;
    mapzoomout: number;
    name: string;
    nightandday: boolean;
    perspective: string;
    prefix: string;
    protected: boolean;
    scale: number;
    shader: string;
    title: string;
    type: string;
    worldtomap: WorldMapConversion;
}

export interface WorldMapOptions {
    append_to_world?: string;
    title?: string;
    icon?: string;
    dynmap?: WorldMap;
    world?: World;
}

export interface Configuration extends StandaloneConfiguration {
    allowwebchat?: boolean;
    allowurlname?: boolean;
    chatlengthlimit?: number;
    components?: ComponentConfiguration[];
    container?: string | JQuery<HTMLDivElement>;
    confighash?: number;
    coreversion?: string;
    cyrillic?: boolean;
    defaultmap?: string;
    defaultworld?: string;
    dynmapversion?: string;
    error?: 'login-required' | string;
    grayplayerswhenhidden?: boolean;
    hidey?: boolean;
    joinmessage?: string;
    jsonfile?: boolean;
    'login-enabled'?: boolean;
    loginrequired?: boolean;
    maxcount?: number;
    'msg-chatnotallowed'?: string;
    'msg-chatrequireslogin'?: string;
    'msg-hiddennamejoin'?: string;
    'msg-hiddennamequit'?: string;
    'msg-maptypes'?: string;
    'msg-players'?: string;
    'quitmessage'?: string;
    label?: string | 'x,y,z';
    linkurl?: string;
    logourl?: string;
    position?: L.ControlPosition;
    scrollback?: boolean;
    showlabel?: boolean;
    showlayercontrol?: SidebarState;
    showmessage?: boolean;
    showplayerfacesinmenu?: boolean;
    sidebaropened?: SidebarState;
    spammessage?: string;
    text?: string;
    title?: string;
    type?: string;
    updaterate?: number;
    'webchat-interval'?: number;
    'webchat-requires-login'?: boolean;
    'webprefix'?: string;
    worlds?: WorldConfiguration[];
    visiblelines?: number;
}

export type SidebarState = boolean | 'true' | 'false' | 'pinned';

export interface Options extends Configuration {
    container?: string;
    defaultmap?: string;
    defaultworld?: string;
    defaultzoom?: number;
    followmap?: string;
    followzoom?: string;
    'msg-maptypes'?: string;
    sidebaropened?: SidebarState;
    showDynmapLayerControl?: SidebarState;
    title?: string;
}

export interface Player {
    account: string;
    armor: number;
    health: number;
    healthBar: JQuery<HTMLDivElement>;
    healthContainer: JQuery<HTMLDivElement>;
    location: Location;
    marker: L.CustomMarker;
    menuitem: JQuery<HTMLLIElement>;
    menuname: JQuery<HTMLAnchorElement>;
    name: string;
    namefield: JQuery<HTMLSpanElement>;
    sort: number;
}

export interface LayerSet {
    layer: L.Layer;
    priority: number;
    name: string;
}

// js/markers.js

export type HexColor = `#${string}`;

export interface MarkerArea {
    color: HexColor;
    desc?: string;
    fillcolor: HexColor;
    fillopacity: number;
    label: string;
    markup: boolean;
    maxzoom: number;
    minzoom: number;
    opacity: number;
    our_layer: L.Layer;
    timestamp: number;
    weight: number;
    x: [number, number];
    ybottom: number;
    ytop: number;
    z: [number, number];
}

export interface MarkerLine {
    color: HexColor;
    desc?: string;
    label: string;
    markup: boolean;
    maxzoom: number;
    minzoom: number;
    opacity: number;
    our_layer: L.Layer;
    timestamp: number;
    weight: number;
    x: number[];
    y: number[];
    z: number[];
}

export interface MarkerCircle {
    color: HexColor;
    desc?: string;
    fillcolor: HexColor;
    fillopacity: number;
    label: string;
    markup: boolean;
    maxzoom: number;
    minzoom: number;
    opacity: number;
    our_layer: L.Layer;
    timestamp: number;
    weight: number;
    x: number;
    xr: number;
    y: number;
    z: number;
    zr: number;
}

export interface MarkerLayerGroup extends L.LayerGroup {
    _layers: Record<number, L.Layer | undefined>;
}

export interface Marker {
    desc?: string;
    dim: string;
    icon: string;
    label: string;
    markup: boolean;
    maxzoom: number;
    minzoom: number;
    our_layer: L.Layer;
    timestamp: number;
    x: number;
    y: number;
    z: number;
}

export interface MarkerSet {
    areas: {
        [aname: string]: MarkerArea | undefined;
    };
    circles: {
        [cname: string]: MarkerCircle | undefined;
    };
    hide: boolean;
    id: string;
    label: string;
    layergroup: MarkerLayerGroup;
    layerprio: number;
    maxzoom: number;
    minzoom: number;
    showlabels: boolean;
    timestamp: number;
    markers: Record<string, Marker | undefined>;
    lines: {
        [lname: string]: MarkerLine | undefined;
    };
}

// standalone/config.js

export interface StandaloneConfiguration {
    url: {
        configuration: string;
        update: string;
        sendmessage: string;
        login: string;
        register: string;
        tiles: string;
        markers: string;
    };
}
