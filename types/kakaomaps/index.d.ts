// Type definitions for non-npm package kakaomaps-browser 1.1
// Project: https://apis.map.kakao.com/web/documentation/
// Definitions by: MinByeongDon <https://github.com/MinByeongDon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare namespace kakao.maps {
  // # Core
  interface MapOptions {
    center: LatLng;
    level?: number;
    mapTypeId?: MapTypeId;
    draggable?: boolean;
    scrollwheel?: boolean;
    disableDoubleClick?: boolean;
    disableDoubleClickZoom?: boolean;
    projectionId?: string;
    tileAnimation?: boolean;
    keyboardShortcuts?: boolean|object;
    speed?: number;
  }
  class Map {
    constructor(container: HTMLElement, options?: MapOptions)
    setCenter(latlng: LatLng): void;
    getCenter(): LatLng;
    setLevel(level: number, options?: { animate?: boolean | {duration?: number}, anchor?: LatLng }): void;
    getLevel(): number;
    setMapTypeId(mapTypeId: MapTypeId): void;
    getMapTypeId(): MapTypeId;
    setBounds(bounds: LatLngBounds, paddingTop?: number, paddingRight?: number, paddingBottom?: number, paddingLeft?: number): void;
    getBounds(): LatLngBounds;
    setMinLevel(minLevel: number): void;
    setMaxLevel(maxLevel: number): void;
    panBy(dx: number, dy: number): void;
    panTo(latlng_or_bounds: LatLng|LatLngBounds, padding?: number): void;
    addControl(control: MapTypeControl|ZoomControl, position: ControlPosition): void;
    removeControl(control: MapTypeControl|ZoomControl): void;
    setDraggable(draggable: boolean): void;
    getDraggable(): boolean;
    setZoomable(zoomable: boolean): void;
    getZoomable(): boolean;
    // setProjectionId(projectionId: ProjectionId): void;
    // getProjectionId(): ProjectionId;
    relayout(): void;
    addOverlayMapTypeId(mapTypeId: MapTypeId): void;
    removeOverlayMapTypeId(mapTypeId: MapTypeId): void;
    setKeyboardShortcuts(active: boolean): void;
    getKeyboardShortcuts(): boolean;
    setCopyrightPosition(copyrightPosition: CopyrightPosition, reversed?: boolean): void;
    getProjection(): MapProjection;
    setCursor(style: string): void;
    // event: center_changed, zoom_start, zoom_changed, bounds_changed, click, dblclick, rightclick, mousemove, dragstart, drag, dragend, idle, tilesloaded, maptypeid_changed
  }
  class MapTypeControl {
  }
  class ZoomControl {
  }
  enum MAP_TYPE_ID {
    NORMAL = 1,
    ROADMAP = 1,
    SKYVIEW = 2,
    HYBRID = 3,
    OVERLAY = 4,
    ROADVIEW = 5,
    TRAFFIC = 6,
    TERRAIN = 7,
    BICYCLE = 8,
    BICYCLE_HYBRID = 9,
    USE_DISTRICT = 10,
  }
  type MapTypeId = MAP_TYPE_ID;
  namespace MapTypeId {
    const NORMAL: MAP_TYPE_ID;
    const ROADMAP: MAP_TYPE_ID;
    const SKYVIEW: MAP_TYPE_ID;
    const HYBRID: MAP_TYPE_ID;
    const OVERLAY: MAP_TYPE_ID;
    const ROADVIEW: MAP_TYPE_ID;
    const TRAFFIC: MAP_TYPE_ID;
    const TERRAIN: MAP_TYPE_ID;
    const BICYCLE: MAP_TYPE_ID;
    const BICYCLE_HYBRID: MAP_TYPE_ID;
    const USE_DISTRICT: MAP_TYPE_ID;
  }
  // NOTE: SDK에 kakao.maps.ProjectionId 구현없음. 없어진것 같음
  enum CONTROL_POSITION {
    TOPLEFT = 0,
    TOP = 1,
    TOPRIGHT = 2,
    BOTTOMLEFT = 3,
    BOTTOM = 4,
    BOTTOMRIGHT = 5,
    LEFT = 6,
    RIGHT = 7,
  }
  type ControlPosition = CONTROL_POSITION;
  namespace ControlPosition {
    const TOPLEFT: CONTROL_POSITION;
    const TOP: CONTROL_POSITION;
    const TOPRIGHT: CONTROL_POSITION;
    const BOTTOMLEFT: CONTROL_POSITION;
    const BOTTOM: CONTROL_POSITION;
    const BOTTOMRIGHT: CONTROL_POSITION;
    const LEFT: CONTROL_POSITION;
    const RIGHT: CONTROL_POSITION;
  }
  enum COPYRIGHT_POSITION {
    BOTTOMLEFT = 0,
    BOTTOMRIGHT = 1,
  }
  type CopyrightPosition = COPYRIGHT_POSITION;
  namespace CopyrightPosition {
    const BOTTOMLEFT: COPYRIGHT_POSITION;
    const BOTTOMRIGHT: COPYRIGHT_POSITION;
  }
  // tslint:disable-next-line no-unnecessary-class
  class Tileset {
    constructor(width: number, height: number, urlFunc: () => void, copyright: TilesetCopyright[], dark: boolean, minZoom: number, maxZoom: number, getTile?: () => void)
  }
  namespace Tileset {
    function add(id: string, tileset: Tileset): void;
  }
  // tslint:disable-next-line no-unnecessary-class
  class TilesetCopyright {
    constructor(msg: string, shortMsg: string, minZoom: number)
  }
  class Coords {
    constructor(x: number, y: number)
    getX(): number;
    getY(): number;
    equals(latlng: Coords): boolean;
    toString(): string;
    toLatLng(): LatLng;
  }
  class LatLng {
    constructor(latitude: number, longitude: number)
    getLat(): number;
    getLng(): number;
    equals(latlng: LatLng): boolean;
    toString(): string;
    toCoords(): Coords;
  }
  class LatLngBounds {
    constructor(sw?: LatLng, ne?: LatLng)
    equals(latlngBounds: LatLngBounds): boolean;
    toString(): string;
    getSouthWest(): LatLng;
    getNorthEast(): LatLng;
    isEmpty(): boolean;
    extend(latlng: LatLng): void;
    contain(latlng: LatLng): boolean;
  }
  class Point {
    constructor(x: number, y: number)
    equals(point: Point): boolean;
    toString(): string;
  }
  class Size {
    constructor(width: number, height: number)
    equals(size: Size): boolean;
    toString(): string;
  }
  namespace event {
    function addListener(target: any, type: string, handler: EventListener|MouseEventListener): void;
    function removeListener(target: any, type: string, handler: EventListener|MouseEventListener): void;
    function trigger(target: any, type: string, data: any): void;
    function preventMap(): void;
  }
  interface MouseEvent {
    latLng: LatLng;
    point: Point;
  }
  interface MouseEventListener {
    (evt: MouseEvent): void;
  }
  class Marker {
    constructor(options?: {
      map?: Map|Roadview,
      position?: LatLng|Viewpoint,
      image?: MarkerImage,
      title?: string,
      draggable?: boolean,
      clickable?: boolean,
      zIndex?: number,
      opacity?: number,
      altitude?: number,
      range?: number,
    })
    setMap(map_or_roadview: Map|Roadview|null): void;
    getMap(): Map|null;
    setImage(image: MarkerImage): void;
    getImage(): MarkerImage;
    setPosition(position: LatLng|Viewpoint): void;
    getPosition(): LatLng;
    setZIndex(zIndex: number): void;
    getZIndex(): number;
    setVisible(visible: boolean): void;
    getVisible(): boolean;
    setTitle(title: string): void;
    getTitle(): string;
    setDraggable(draggable: boolean): void;
    getDraggable(): boolean;
    setClickable(clickable: boolean): void;
    getClickable(): boolean;
    setAltitude(altitude: number): void;
    getAltitude(): number;
    setRange(range: number): void;
    getRange(): number;
    setOpacity(opacity: number): void;
    getOpacity(): number;
    // event: click, mouseover, mouseout, rightclick, dragstart, dragend
  }
  // tslint:disable-next-line no-unnecessary-class
  class MarkerImage {
    constructor(src: string, size: Size, options?: {
      alt?: string,
      coords?: string,
      offset?: Point,
      shape?: string,
      spriteOrigin?: Point,
      spriteSize?: Size
    })
  }
  interface InfoWindowOptions {
    content?: HTMLElement|string;
    disableAutoPan?: boolean;
    map?: Map|Roadview;
    position?: LatLng;
    removable?: boolean;
    zIndex?: number;
    altitude?: number;
    range?: number;
  }
  class InfoWindow {
    constructor(options?: InfoWindowOptions)
    open(map_or_roadview: Map|Roadview, marker?: Marker): void;
    close(): void;
    getMap(): Map|null;
    setPosition(position: LatLng|Viewpoint): void;
    getPosition(): LatLng;
    setContent(content: HTMLElement|string): void;
    getContent(): HTMLElement|string;
    setZIndex(zIndex: number): void;
    getZIndex(): number;
    setAltitude(altitude: number): void;
    getAltitude(): number;
    setRange(range: number): void;
    getRange(): number;
  }
  interface CustomOverlayOptions {
    clickable?: boolean;
    content?: HTMLElement|string;
    map?: Map|Roadview;
    position?: LatLng|Viewpoint;
    xAnchor?: number;
    yAnchor?: number;
    zIndex?: number;
  }
  class CustomOverlay {
    constructor(options?: CustomOverlayOptions)
    setMap(map_or_roadview: Map|Roadview|null): void;
    getMap(): Map|null;
    setPosition(position: LatLng|Viewpoint): void;
    getPosition(): LatLng;
    setContent(content: HTMLElement|string): void;
    getContent(): HTMLElement|string;
    setVisible(visible: boolean): void;
    getVisible(): boolean;
    setZIndex(zIndex: number): void;
    getZIndex(): number;
    setAltitude(altitude: number): void;
    getAltitude(): number;
    setRange(range: number): void;
    getRange(): number;
  }
  class AbstractOverlayMethods {
    constructor()
    draw(): void;
    onAdd(): void;
    onRemove(): void;
    setMap(map: Map|null): void;
    getMap(): Map|null;
    getPanels(): MapPanels;
    getProjection(): MapProjection;
  }
  class MapPanels {
    overlayLayer: HTMLElement;
  }
  class MapProjection {
    pointFromCoords(latlng: LatLng): Point;
    coordsFromPoint(point: Point): LatLng;
    containerPointFromCoords(latlng: LatLng): Point;
    coordsFromContainerPoint(point: Point): LatLng;
  }
  interface PolylineOptions {
    map?: Map;
    path?: LatLng[]|LatLng[][];
    endArrow?: boolean;
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: StrokeStyles;
    zIndex?: number;
  }
  class Polyline {
    constructor(options: PolylineOptions)
    setMap(map: Map|null): void;
    getMap(): Map|null;
    setOptions(options: PolylineOptions): void;
    setPath(path: LatLng[]): void;
    getPath(): LatLng[];
    getLength(): number;
    setZIndex(zIndex: number): void;
    getZIndex(): number;
    // event: mouseover,mouseout,mousemove,mousedown,click
  }
  interface PolygonOptions {
    map?: Map;
    path?: LatLng[]|LatLng[][];
    fillColor?: string;
    fillOpacity?: number;
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: StrokeStyles;
    zIndex?: number;
  }
  class Polygon {
    constructor(polygonOptions: PolygonOptions)
    setMap(map: Map|null): void;
    getMap(): Map|null;
    setOptions(options: PolygonOptions): void;
    setPath(path: LatLng[]): void;
    getPath(): LatLng[];
    getLength(): number;
    getArea(): number;
    setZIndex(zIndex: number): void;
    getZIndex(): number;
    // event: mouseover,mouseout,mousemove,mousedown,click
  }
  interface CircleOptions {
    map?: Map;
    center?: LatLng;
    radius?: number;
    fillColor?: string;
    fillOpacity?: number;
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: StrokeStyles;
    zIndex?: number;
  }
  class Circle {
    constructor(options: CircleOptions)
    setMap(map: Map|null): void;
    getMap(): Map|null;
    setOptions(options: CircleOptions): void;
    setPosition(position: LatLng): void;
    getPosition(): LatLng;
    setRadius(radius: number): void;
    getRadius(): number;
    getBounds(): LatLngBounds;
    setZIndex(zIndex: number): void;
    getZIndex(): number;
    // event: mouseover,mouseout,mousemove,mousedown,click
  }
  interface EllipseOptions {
    map?: Map;
    center?: LatLng;
    rx?: number;
    ry?: number;
    fillColor?: string;
    fillOpacity?: number;
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: StrokeStyles;
    zIndex?: number;
  }
  class Ellipse {
    constructor(options: EllipseOptions)
    setMap(map: Map|null): void;
    getMap(): Map|null;
    setOptions(options: EllipseOptions): void;
    setPosition(position: LatLng): void;
    getPosition(): LatLng;
    setRadius(rx: number, ry: number): void;
    getRadius(): { rx: number, ry: number };
    getRadiusX(): number;
    getRadiusY(): number;
    getBounds(): LatLngBounds;
    setZIndex(zIndex: number): void;
    getZIndex(): number;
    // event: mouseover,mouseout,mousemove,mousedown,click
  }
  interface RectangleOptions {
    map?: Map;
    bounds?: LatLngBounds;
    fillColor?: string;
    fillOpacity?: number;
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: StrokeStyles;
    zIndex?: number;
  }
  class Rectangle {
    constructor(options: RectangleOptions)
    setMap(map: Map|null): void;
    getMap(): Map|null;
    setOptions(options: RectangleOptions): void;
    setBounds(bounds: LatLngBounds): void;
    getBounds(): LatLngBounds;
    setZIndex(zIndex: number): void;
    getZIndex(): number;
    // event: mouseover,mouseout,mousemove,mousedown,click
  }
  interface RoadviewOptions {
    panoId: number;
    panoX: number;
    panoY: number;
    pan: number;
    tilt: number;
    zoom: number;
  }
  class Roadview {
    constructor(container: HTMLElement, options: RoadviewOptions)
    setPanoId(panoId: number, position: LatLng): void;
    getPanoId(): number;
    setViewpoint(viewpoint: Viewpoint): void;
    getViewpoint(): Viewpoint;
    getViewpointWithPanoId(): Viewpoint;
    getPosition(): LatLng;
    relayout(): void;
    // event: init,panoid_changed,viewpoint_changed,position_changed
  }
  class RoadviewClient {
    constructor()
    getNearestPanoId(position: LatLng, radius: number, callback: () => void): void;
  }
  class RoadviewOverlay {
    constructor()
    setMap(map: Map|null): void;
    getMap(): Map|null;
  }
  class Viewpoint {
    pan: number;
    tilt: number;
    zoom: number;
    panoId?: number;
    constructor(pan: number, tilt: number, zoom: number, panoId?: number)
  }
  interface StaticMapOptions {
    center: LatLng;
    level: number;
    mapTypeId: MapTypeId;
    marker: object|object[];
  }
  class StaticMap {
    constructor(container: HTMLElement, options: StaticMapOptions)
    setCenter(latlng: LatLng): void;
    getCenter(): LatLng;
    setLevel(level: number): void;
    getLevel(): number;
    setMapTypeId(mapTypeId: MapTypeId): void;
    setMapTypeId(): MapTypeId;
  }
  // # Library
  // ## services namespace
  namespace services {
    enum STATUS {
      OK = "OK",
      ZERO_RESULT = "ZERO_RESULT",
      ERROR = "ERROR",
    }
    type Status = STATUS;
    namespace Status {
      const OK: STATUS;
      const ZERO_RESULT: STATUS;
      const ERROR: STATUS;
    }
    enum SORT_BY {
      ACCURACY = "accuracy",
      DISTANCE = "distance",
    }
    type SortBy = SORT_BY;
    namespace SortBy {
      const ACCURACY: SORT_BY;
      const DISTANCE: SORT_BY;
    }
    enum COORDS {
      WGS84 = "WGS84",
      WCONGNAMUL = "WCONGNAMUL",
      CONGNAMUL = "CONGNAMUL",
      WTM = "WTM",
      TM = "TM",
    }
    type Coords = COORDS;
    namespace Coords {
      const WGS84: COORDS;
      const WCONGNAMUL: COORDS;
      const CONGNAMUL: COORDS;
      const WTM: COORDS;
      const TM: COORDS;
    }
    enum ANALYZE_TYPE {
      SIMILAR = "similar",
      EXACT = "exact",
    }
    type AnalyzeType = ANALYZE_TYPE;
    namespace AnalyzeType {
      const SIMILAR: ANALYZE_TYPE;
      const EXACT: ANALYZE_TYPE;
    }
    class Places {
      constructor(map: Map)
      setMap(map: Map|null): void;
      keywordSearch(keyword: string, callback: (result: any[], status: Status, pagination: Pagination) => void, options?: {
        category_group_code?: string,
        location?: LatLng,
        x?: number,
        y?: number,
        radius?: number,
        bounds?: LatLngBounds
        rect?: string,
        size?: number,
        page?: number,
        sort?: SortBy,
        useMapCenter?: boolean,
        useMapBounds?: boolean,
      }): void;
      categorySearch(code: string, callback: (result: any[], status: Status, pagination: Pagination) => void, options?: {
        location?: LatLng,
        x?: number,
        y?: number,
        radius?: number,
        bounds?: LatLngBounds,
        rect?: string,
        size?: number,
        page?: number,
        sort?: SortBy,
        useMapCenter?: boolean,
        useMapBounds?: boolean,
      }): void;
    }
    class Geocoder {
      constructor()
      addressSearch(addr: string, callback: (result: any[], status: Status, pagination: Pagination) => void, options?: {
        page?: number,
        size?: number,
        analyze_type?: AnalyzeType,
      }): void;
      coord2Address(x: number, y: number, callback: (result: any[], status: Status) => void, options?: {
        input_coord?: Coords,
      }): void;
      coord2RegionCode(x: number, y: number, callback: (result: any[], status: Status) => void, options?: {
        input_coord?: Coords,
        output_coord?: Coords,
      }): void;
      transCoord(x: number, y: number, callback: (result: any[], status: Status) => void, options?: {
        input_coord?: Coords,
        output_coord?: Coords,
      }): void;
    }
    class Pagination {
      totalCount: number;
      hasNextPage: boolean;
      hasPrevPage: boolean;
      current: number;
      constructor()
      nextPage(): void;
      prevPage(): void;
      gotoPage(page: number): void;
      gotoFirst(): void;
      gotoLast(): void;
    }
    interface MarkerClusterOptions {
      map?: Map;
      markers?: Marker[];
      gridSize?: number;
      averageCenter?: boolean;
      minLevel?: number;
      minClusterSize?: number;
      styles?: object;
      texts?: string[]|(() => void);
      calculator?: number[];
      disableClickZoom?: boolean;
      clickable?: boolean;
      hoverable?: boolean;
    }
    class MarkerCluster {
      constructor(options?: MarkerClusterOptions)
      addMarker(marker: Marker, nodraw?: boolean): void;
      removeMarker(marker: Marker, nodraw?: boolean): void;
      addMarkers(marker: Marker[], nodraw?: boolean): void;
      removeMarkers(marker: Marker[], nodraw?: boolean): void;
      clear(): void;
      redraw(): void;
      getGridSize(): number;
      setGridSize(size: number): void;
      getMinClusterSize(): number;
      setMinClusterSize(size: number): void;
      getAverageCenter(): boolean;
      setAverageCenter(bool: boolean): void;
      getMinLevel(): number;
      setMinLevel(level: number): void;
      getTexts(): string[]|(() => void);
      setTexts(texts: string[]|(() => void)): void;
      getCalculator(): number[]|(() => void);
      setCalculator(calculator: number[]|(() => void)): void;
      getStyles(): object[];
      setStyles(styles: object[]): void;
      // event: clusterclick,clusterover,clusterout,clusterdblclick,clusterrightclick,clustered
    }
    class Cluster {
      getCenter(): LatLng;
      getBounds(): LatLngBounds;
      getSize(): number;
      getMarkers(): Marker[];
      getClusterMarker(): CustomOverlay;
    }
  } // services
  // ## drawing namespace
  namespace drawing {
    enum OverlayType {
      MARKER = "marker",
      RECTANGLE = "rectangle",
      CIRCLE = "circle",
      ELLIPSE = "ellipse",
      POLYLINE = "polyline",
      ARROW = "arrow",
      POLYGON = "polygon",
    }
    namespace AnalyzeType {
      const MARKER: OverlayType;
      const RECTANGLE: OverlayType;
      const CIRCLE: OverlayType;
      const ELLIPSE: OverlayType;
      const POLYLINE: OverlayType;
      const ARROW: OverlayType;
      const POLYGON: OverlayType;
    }
    interface MarkerOptions {
      draggable: boolean;
      removable: boolean;
      markerImages: MarkerImageOptions[];
    }
    interface MarkerImageOptions {
      src: string;
      width: number;
      height: number;
      offsetX: number;
      offsetY: number;
      spriteWidth: number;
      spriteHeight: number;
      spriteOriginX: number;
      spriteOriginY: number;
      shape: string;
      coords: string;
      hoverImage: object;
      dragImage: object;
    }
    interface RectangleOptions {
      draggable: boolean;
      removable: boolean;
      editable: boolean;
      strokeWeight: number;
      strokeColor: string;
      strokeOpacity: number;
      strokeStyle: string;
      fillColor: string;
      fillOpacity: number;
    }
    interface CircleOptions {
      draggable: boolean;
      removable: boolean;
      editable: boolean;
      strokeWeight: number;
      strokeColor: string;
      strokeOpacity: number;
      strokeStyle: string;
      fillColor: string;
      fillOpacity: number;
    }
    interface EllipseOptions {
      draggable: boolean;
      removable: boolean;
      editable: boolean;
      strokeWeight: number;
      strokeColor: string;
      strokeOpacity: number;
      strokeStyle: string;
      fillColor: string;
      fillOpacity: number;
    }
    interface PolylineOptions {
      draggable: boolean;
      removable: boolean;
      editable: boolean;
      strokeWeight: number;
      strokeColor: string;
      strokeOpacity: number;
      strokeStyle: string;
      hintStrokeStyle: string;
      hintStrokeOpacity: number;
    }
    interface ArrowOptions {
      draggable: boolean;
      removable: boolean;
      editable: boolean;
      strokeWeight: number;
      strokeColor: string;
      strokeOpacity: number;
      strokeStyle: string;
      hintStrokeStyle: string;
      hintStrokeOpacity: number;
      startArrow: boolean;
    }
    interface PolygonOptions {
      draggable: boolean;
      removable: boolean;
      editable: boolean;
      strokeWeight: number;
      strokeColor: string;
      strokeOpacity: number;
      strokeStyle: string;
      fillColor: string;
      fillOpacity: number;
    }
    interface DrawingManagerOptions {
      map: Map;
      guideTooltip: string[];
      drawingMode: OverlayType[];
      markerOptions: MarkerOptions;
      rectangleOptions: RectangleOptions;
      circleOptions: CircleOptions;
      ellipseOptions: EllipseOptions;
      polylineOptions: PolylineOptions;
      arrowOptions: ArrowOptions;
      polygonOptions: PolygonOptions;
    }
    class DrawingManager {
      constructor(options?: DrawingManagerOptions)
      setStyle(type: OverlayType, prop: string, value: string|number): void;
      setStrokeWeight(strokeWeight: number): void;
      setStrokeColor(strokeColor: string): void;
      select(type: OverlayType, index?: number): void;
      cancel(): void;
      undo(): void;
      redo(): void;
      undoable(): boolean;
      redoable(): boolean;
      getData(types?: OverlayType[]): object;
      getOverlays(types?: OverlayType[]): object;
      put(overlayType: OverlayType, param1: LatLng|LatLngBounds|LatLng[]|LatLng[][], param2?: number): void;
      remove(overlay: any/*ExtendsOverlay*/): void;
      // event: select,drawstart,draw,drawend,drawnext,cancel,remove,state_changed
    }
    class Toolbox {
      constructor(options?: {
        drawingManager?: DrawingManager
      })
      getElement(): any;
    }
    interface MouseEvent {
      overlayType: OverlayType;
      coords: Coords;
      point: Point;
      target: object;
    }
  } // drawing
  // # Miscellaneous
  function load(callback: () => void): void;
  function disableHD(): void;
  type StrokeStyles = 'solid'|'shortdash'|'shortdot'|'shortdashdot'|'shortdashdotdot'|'dot'|'dash'|'dashdot'|'longdash'|'longdashdot'|'longdashdotdot';
}
