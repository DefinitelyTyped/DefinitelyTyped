// Type definitions for non-npm package Naver Maps JavaScript API 3.0
// Project: https://apis.map.kakao.com/web/documentation/
// Definitions by: MinByeongDon <deepfree@gmail.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare namespace kakao.maps {
  class Map {
    constructor(container: HTMLElement, options?: {
      /** 중심 좌표 (필수) */
      center: LatLng,
      /** 확대 수준 (기본값: 3) */
      level?: Number,
      /** 지도 종류 (기본값: 일반 지도) */
      mapTypeId?: MapTypeId,
      /** 마우스 드래그, 휠, 모바일 터치를 이용한 시점 변경(이동, 확대, 축소) 가능 여부 */
      draggable?: boolean,
      /** 마우스 휠, 모바일 터치를 이용한 확대 및 축소 가능 여부 */
      scrollwheel?: boolean,
      /** 더블클릭 이벤트 및 더블클릭 확대 가능 여부 */
      disableDoubleClick?: boolean,
      /** 더블클릭 확대 가능 여부 */
      disableDoubleClickZoom?: boolean,
      /** 투영법 지정 (기본값: kakao.maps.ProjectionId.WCONG) */
      projectionId?: string, 
      /** 지도 타일 애니메이션 설정 여부 (기본값: true) */
      tileAnimation?: boolean,
      /** 키보드의 방향키와 +, – 키로 지도 이동,확대,축소 가능 여부 (기본값: false) */
      keyboardShortcuts?: boolean|object,
      /** 지도 이동 속도 */
      speed?: number
    })
    setCenter(latlng: LatLng): void
    getCenter(): LatLng
    setLevel(level: number, options?: { animate?: boolean | {duration?: number}, anchor?: LatLng }): void
    getLevel(): number
    setMapTypeId(mapTypeId: MapTypeId): void
    getMapTypeId(): MapTypeId
    setBounds(bounds: LatLngBounds, paddingTop?: number, paddingRight?: number, paddingBottom?: number, paddingLeft?: number): void
    getBounds(): LatLngBounds
    setMinLevel(minLevel: number): void
    setMaxLevel(maxLevel: number): void
    panBy(dx: number, dy: number): void
    panTo(latlng_or_bounds: LatLng|LatLngBounds, padding?: number): void
    addControl(control: MapTypeControl|ZoomControl, position: ControlPosition): void
    removeControl(control: MapTypeControl|ZoomControl): void
    setDraggable(draggable: boolean): void
    getDraggable(): boolean
    setZoomable(zoomable: boolean): void
    getZoomable(): boolean
    //setProjectionId(projectionId: ProjectionId): void
    //getProjectionId(): ProjectionId
    relayout(): void
    addOverlayMapTypeId(mapTypeId: MapTypeId): void
    removeOverlayMapTypeId(mapTypeId: MapTypeId): void
    setKeyboardShortcuts(active: boolean): void
    getKeyboardShortcuts(): boolean
    setCopyrightPosition(copyrightPosition: CopyrightPosition, reversed?: boolean): void
    getProjection(): MapProjection
    setCursor(style: string): void
    //event: center_changed, zoom_start, zoom_changed, bounds_changed, click, dblclick, rightclick, mousemove, dragstart, drag, dragend, idle, tilesloaded, maptypeid_changed
  }
  class MapTypeControl {
    constructor();
  }
  class ZoomControl {
    constructor();
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
    const NORMAL: MAP_TYPE_ID
    /** 베이스 타입 */ const ROADMAP: MAP_TYPE_ID
    /** 베이스 타입 */ const SKYVIEW: MAP_TYPE_ID
    /** 베이스 타입 */ const HYBRID: MAP_TYPE_ID
    /** 오버레이 타입 */ const OVERLAY: MAP_TYPE_ID
    const ROADVIEW: MAP_TYPE_ID
    /** 오버레이 타입 */ const TRAFFIC: MAP_TYPE_ID
    /** 오버레이 타입 */ const TERRAIN: MAP_TYPE_ID
    /** 오버레이 타입 */ const BICYCLE: MAP_TYPE_ID
    /** 오버레이 타입 */ const BICYCLE_HYBRID: MAP_TYPE_ID
    /** 오버레이 타입 */ const USE_DISTRICT: MAP_TYPE_ID
  }
  //NOTE: SDK에 kakao.maps.ProjectionId 구현없음. 없어진것 같음
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
    const TOPLEFT: CONTROL_POSITION
    const TOP: CONTROL_POSITION
    const TOPRIGHT: CONTROL_POSITION
    const BOTTOMLEFT: CONTROL_POSITION
    const BOTTOM: CONTROL_POSITION
    const BOTTOMRIGHT: CONTROL_POSITION
    const LEFT: CONTROL_POSITION
    const RIGHT: CONTROL_POSITION
  }
  enum COPYRIGHT_POSITION {
    BOTTOMLEFT = 0,
    BOTTOMRIGHT = 1,
  }
  type CopyrightPosition = COPYRIGHT_POSITION;
  namespace CopyrightPosition {
    const BOTTOMLEFT: COPYRIGHT_POSITION
    const BOTTOMRIGHT: COPYRIGHT_POSITION
  }
  class Tileset {
    constructor(width: number, height: number, urlFunc: Function, copyright: TilesetCopyright[], dark: boolean, minZoom: number, maxZoom: number, getTile?: Function)
    static add(id: string, tileset: Tileset): void
  }
  class TilesetCopyright {
    constructor(msg: string, shortMsg: string, minZoom: number)
  }
  class Coords {
    constructor(x: number, y: number)
    getX(): number
    getY(): number
    equals(latlng: Coords): boolean
    toString(): string
    toLatLng(): LatLng
  }
  class LatLng {
    constructor(latitude: number, longitude: number)
    getLat(): number
    getLng(): number
    equals(latlng: LatLng): boolean
    toString(): string
    toCoords(): Coords
  }
  class LatLngBounds {
    constructor(sw?: LatLng, ne?: LatLng)
    equals(latlngBounds: LatLngBounds): boolean
    toString(): string
    getSouthWest(): LatLng
    getNorthEast(): LatLng
    isEmpty(): boolean
    extend(latlng: LatLng): void
    contain(latlng: LatLng): boolean
  }
  class Point {
    constructor(x: number, y: number)
    equals(point: Point): boolean
    toString(): string
  }
  class Size {
    constructor(width: number, height: number)
    equals(size: Size): boolean
    toString(): string
  }
  namespace event {
    function addListener(target: any, type: string, handler: EventListener|MouseEventListener): void
    function removeListener(target: any, type: string, handler: EventListener|MouseEventListener): void
    function trigger(target: any, type: string, data: any): void
    function preventMap(): void
  }
  interface MouseEvent extends Event {
    latLng: LatLng
    point: Point
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
    setMap(map_or_roadview: Map|Roadview|null): void
    getMap(): Map|null
    setImage(image: MarkerImage): void
    getImage(): MarkerImage
    setPosition(position: LatLng|Viewpoint): void
    getPosition(): LatLng
    setZIndex(zIndex: number): void
    getZIndex(): number
    setVisible(visible: boolean): void
    getVisible(): boolean
    setTitle(title: string): void
    getTitle(): string
    setDraggable(draggable: boolean): void
    getDraggable(): boolean
    setClickable(clickable: boolean): void
    getClickable(): boolean
    setAltitude(altitude: number): void
    getAltitude(): number
    setRange(range: number): void
    getRange(): number
    setOpacity(opacity: number): void
    getOpacity(): number
    //event: click, mouseover, mouseout, rightclick, dragstart, dragend
  }
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
  class InfoWindow {
    constructor(options?: {
      content?: HTMLElement|string,
      disableAutoPan?: boolean,
      map?: Map|Roadview,
      position?: LatLng,
      removable?: boolean,
      zIndex?: number,
      altitude?: number,
      range?: number
    })
    open(map_or_roadview: Map|Roadview, marker?: Marker): void
    close(): void
    getMap(): Map|null
    setPosition(position: LatLng|Viewpoint): void
    getPosition(): LatLng
    setContent(content: HTMLElement|string): void
    getContent(): HTMLElement|string
    setZIndex(zIndex: number): void
    getZIndex(): number
    setAltitude(altitude: number): void
    getAltitude(): number
    setRange(range: number): void
    getRange(): number
  }
  class CustomOverlay {
    constructor(options: {
      clickable: boolean,
      content: HTMLElement|string,
      map: Map|Roadview,
      position: LatLng|Viewpoint,
      xAnchor: number,
      yAnchor: number,
      zIndex: number,
    })
    setMap(map_or_roadview: Map|Roadview|null): void
    getMap(): Map|null
    setPosition(position: LatLng|Viewpoint): void
    getPosition(): LatLng
    setContent(content: HTMLElement|string): void
    getContent(): HTMLElement|string
    setVisible(visible: boolean): void
    getVisible(): boolean
    setZIndex(zIndex: number): void
    getZIndex(): number
    setAltitude(altitude: number): void
    getAltitude(): number
    setRange(range: number): void
    getRange(): number
  }
  class AbstractOverlayMethods {
    constructor()
    draw(): void
    onAdd(): void
    onRemove(): void
    setMap(map: Map|null): void
    getMap(): Map|null
    getPanels(): MapPanels
    getProjection(): MapProjection
  }
  class MapPanels {
    overlayLayer: HTMLElement
  }
  class MapProjection {
    pointFromCoords(latlng: LatLng): Point
    coordsFromPoint(point: Point): LatLng
    containerPointFromCoords(latlng: LatLng): Point
    coordsFromContainerPoint(point: Point): LatLng
  }
  interface PolylineOptions {
    map?: Map,
    path?: LatLng[]|LatLng[][]
    endArrow?: boolean
    strokeWeight?: number
    strokeColor?: string
    strokeOpacity?: number
    strokeStyle?: StrokeStyles
    zIndex?: number
  }
  class Polyline {
    constructor(options: PolylineOptions)
    setMap(map: Map|null): void
    getMap(): Map|null
    setOptions(options: PolylineOptions): void
    setPath(path: LatLng[]): void
    getPath(): LatLng[]
    getLength(): number
    setZIndex(zIndex: number): void
    getZIndex(): number
    //event: mouseover,mouseout,mousemove,mousedown,click
  }
  interface PolygonOptions {
    map?: Map,
    path?: LatLng[]|LatLng[][]
    fillColor?: string
    fillOpacity?: number
    strokeWeight?: number
    strokeColor?: string
    strokeOpacity?: number
    strokeStyle?: StrokeStyles
    zIndex?: number
  }
  class Polygon {
    constructor(polygonOptions: PolygonOptions)
    setMap(map: Map|null): void
    getMap(): Map|null
    setOptions(options: PolygonOptions): void
    setPath(path: LatLng[]): void
    getPath(): LatLng[]
    getLength(): number
    getArea(): number
    setZIndex(zIndex: number): void
    getZIndex(): number
    //event: mouseover,mouseout,mousemove,mousedown,click
  }
  interface CircleOptions {
    map?: Map,
    center?: LatLng
    radius?: number
    fillColor?: string
    fillOpacity?: number
    strokeWeight?: number
    strokeColor?: string
    strokeOpacity?: number
    strokeStyle?: StrokeStyles
    zIndex?: number
  }
  class Circle {
    constructor(options: CircleOptions)
    setMap(map: Map|null): void
    getMap(): Map|null
    setOptions(options: CircleOptions): void
    setPosition(position: LatLng): void
    getPosition(): LatLng
    setRadius(radius: number): void
    getRadius(): number
    getBounds(): LatLngBounds
    setZIndex(zIndex: number): void
    getZIndex(): number
    //event: mouseover,mouseout,mousemove,mousedown,click
  }
  interface EllipseOptions {
    map?: Map,
    center?: LatLng
    rx?: number
    ry?: number
    fillColor?: string
    fillOpacity?: number
    strokeWeight?: number
    strokeColor?: string
    strokeOpacity?: number
    strokeStyle?: StrokeStyles
    zIndex?: number
  }
  class Ellipse {
    constructor(options: EllipseOptions)
    setMap(map: Map|null): void
    getMap(): Map|null
    setOptions(options: EllipseOptions): void
    setPosition(position: LatLng): void
    getPosition(): LatLng
    setRadius(rx: number, ry: number): void
    getRadius(): { rx: number, ry: number }
    getRadiusX(): number
    getRadiusY(): number
    getBounds(): LatLngBounds
    setZIndex(zIndex: number): void
    getZIndex(): number
    //event: mouseover,mouseout,mousemove,mousedown,click
  }
  interface RectangleOptions {
    map?: Map,
    bounds?: LatLngBounds
    fillColor?: string
    fillOpacity?: number
    strokeWeight?: number
    strokeColor?: string
    strokeOpacity?: number
    strokeStyle?: StrokeStyles
    zIndex?: number
  }
  class Rectangle {
    constructor(options: RectangleOptions)
    setMap(map: Map|null): void
    getMap(): Map|null
    setOptions(options: RectangleOptions): void
    setBounds(bounds: LatLngBounds): void
    getBounds(): LatLngBounds
    setZIndex(zIndex: number): void
    getZIndex(): number
    //event: mouseover,mouseout,mousemove,mousedown,click
  }
  class Roadview {
    constructor(container: HTMLElement, options: {
      panoId: number,
      panoX: number,
      panoY: number,
      pan: number,
      tilt: number,
      zoom: number,
    })
    setPanoId(panoId: number, position: LatLng): void
    getPanoId(): number
    setViewpoint(viewpoint: Viewpoint): void
    getViewpoint(): Viewpoint
    getViewpointWithPanoId(): Viewpoint
    getPosition(): LatLng
    relayout(): void
    //event: init,panoid_changed,viewpoint_changed,position_changed
  }
  class RoadviewClient {
    constructor()
    getNearestPanoId(position: LatLng, radius: number, callback: Function): void
  }
  class RoadviewOverlay {
    constructor()
    setMap(map: Map|null): void
    getMap(): Map|null
  }
  class Viewpoint {
    public pan: number;
    public tilt: number;
    public zoom: number;
    public panoId?: number;
    constructor(pan: number, tilt: number, zoom: number, panoId?: number)
  }
  class StaticMap {
    constructor(container: HTMLElement, options: {
      center: LatLng,
      level: number,
      mapTypeId: MapTypeId,
      marker: object|object[]
    })
    setCenter(latlng: LatLng): void
    getCenter(): LatLng
    setLevel(level: number): void
    getLevel(): number
    setMapTypeId(mapTypeId: MapTypeId): void
    setMapTypeId(): MapTypeId
  }

  namespace services {

    enum STATUS {
      OK = "OK",
      ZERO_RESULT = "ZERO_RESULT",
      ERROR = "ERROR",
    }
    type Status = STATUS
    namespace Status {
      const OK: STATUS
      const ZERO_RESULT: STATUS
      const ERROR: STATUS
    }

    enum SORT_BY {
      ACCURACY = "accuracy",
      DISTANCE = "distance",
    }
    type SortBy = SORT_BY
    namespace SortBy {
      const ACCURACY: SORT_BY
      const DISTANCE: SORT_BY
    }

    enum COORDS {
      WGS84 = "WGS84",
      WCONGNAMUL = "WCONGNAMUL",
      CONGNAMUL = "CONGNAMUL",
      WTM = "WTM",
      TM = "TM",
    }
    type Coords = COORDS
    namespace Coords {
      const WGS84: COORDS
      const WCONGNAMUL: COORDS
      const CONGNAMUL: COORDS
      const WTM: COORDS
      const TM: COORDS
    }

    enum ANALYZE_TYPE {
      SIMILAR = "similar",
      EXACT = "exact",
    }
    type AnalyzeType = ANALYZE_TYPE
    namespace AnalyzeType {
      const SIMILAR: ANALYZE_TYPE
      const EXACT: ANALYZE_TYPE
    }

    class Places {
      constructor(map: Map)
      setMap(map: Map|null): void
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
      }): void
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
      }): void
    }

    class Geocoder {
      constructor()
      addressSearch(addr: string, callback: (result: any[], status: Status, pagination: Pagination) => void, options?: {
        page?: number,
        size?: number,
        analyze_type?: AnalyzeType,
      }): void
      coord2Address(x: number, y: number, callback: (result: any[], status: Status) => void, options?: {
        input_coord?: Coords,
      }): void
      coord2RegionCode(x: number, y: number, callback: (result: any[], status: Status) => void, options?: {
        input_coord?: Coords,
        output_coord?: Coords,
      }): void
      transCoord(x: number, y: number, callback: (result: any[], status: Status) => void, options?: {
        input_coord?: Coords,
        output_coord?: Coords,
      }): void
    }

    class Pagination {
      public totalCount: number
      public hasNextPage: boolean
      public hasPrevPage: boolean
      public current: number
      constructor()
      nextPage(): void
      prevPage(): void
      gotoPage(page: number): void
      gotoFirst(): void
      gotoLast(): void
    }

    //NOTE: Cluster 제외
    //NOTE: Drawing 제외

  } // services

  function load(callback: Function): void
  function disableHD(): void

  type StrokeStyles = 'solid'|'shortdash'|'shortdot'|'shortdashdot'|'shortdashdotdot'|'dot'|'dash'|'dashdot'|'longdash'|'longdashdot'|'longdashdotdot'

}

