// Type definitions for non-npm package amap-js-sdk 1.4
// Project: http://lbs.amap.com/api/javascript-api/summary/
// Definitions by: Bian Zhongjie <https://github.com/agasbzj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace AMap {
    type EventCallback = (...args: any[]) => void;
    type GenericEventCallback<T> = (res: T) => void;

    /**
     * 加载插件
     * @param pluginNames
     * @param ready
     */
    function plugin(pluginNames: string[], ready?: () => void): void;

    /**
     * 加载服务
     * @param serviceName
     * @param ready
     */
    function service(serviceName: string, ready?: () => void): void;

    namespace event {
        /**
         * 注册DOM对象事件：给DOM对象注册事件，并返回eventListener。运行AMap.event.removeListener(eventListener)可以删除该事件的监听器。
         * @param instance：需注册事件的DOM对象（必填）
         * @param eventName：事件名称（必填）
         * @param handler：事件功能函数（必填）
         * @param context：事件上下文（可选，缺省时，handler中this指向参数instance引用的对象，否则this指向context引用的对象）
         */
        const addDomListener: (instance: any, eventName: string, handler: EventCallback, context?: any) => EventListener;

        /**
         * 注册对象事件：给对象注册事件，并返回eventListener。运行AMap.event.removeListener(eventListener)可以删除该事件的监听器。
         * @param instance：需注册事件的对象（必填）
         * @param eventName：事件名称（必填）
         * @param handler：事件功能函数（必填）
         * @param context：事件上下文（可选，缺省时，handler中this指向参数instance引用的对象，否则this指向context引用的对象）
         */
        const addListener: (instance: any, eventName: string, handler: EventCallback, context?: any) => EventListener;

        /**
         * 类似于addListener，但处理程序会在处理完第一个事件后将自已移除。
         */
        const addListenerOnce: (instance: any, eventName: string, handler: EventCallback, context?: any) => EventListener;

        /**
         * 删除由上述 event.addDomListener 和 event.addListener 传回的指定侦听器。
         */
        const removeListener: (listener: EventListener) => void;

        /**
         * 触发非DOM事件：触发非DOM事件eventName，extArgs将扩展到事件监听函数（handler）接受到的event参数中。如:在extArgs内写入{m:10,p:2}，eventName监听函数（handler）可以接收到包含m,p两个key值的event对象。
         */
        const trigger: (instance: any, eventName: string, extArgs: any) => void;
    }

    /**
     * 此对象用于表示地图、覆盖物、叠加层上的各种鼠标事件返回，包含以下字段：
     */
    interface MapsEventOptions {
        lnglat: LngLat;
        pixel: Pixel;
        type: string;
        target: any;
    }

    abstract class EventBindable {
        on(eventName: string, callback: EventCallback): void;
        off(eventName: string, callback: EventCallback): void;
    }

  /* --------------------------- 基础类 --------------------------- */
  /* 参考地址:http://lbs.amap.com/api/javascript-api/reference/core */

    /**
     * 像素坐标，确定地图上的一个像素点。
     */
    class Pixel {
        /**
         * 构造一个像素坐标对象。
         */
        constructor(x: number, y: number);
        /**
         * 获得X方向像素坐标
         */
        getX(): number;

        /**
         * 获得Y方向像素坐标
         */
        getY(): number;

        /**
         * 当前像素坐标与传入像素坐标是否相等
         */
        equals(point: Pixel): boolean;

        /**
         * 以字符串形式返回像素坐标对象
         */
        toString(): string;
    }

    /**
     * 地物对象的像素尺寸
     */
    class Size {
        /**
         * 构造尺寸对象
         * @param width 宽度，单位：像素
         * @param height 高度，单位：像素
         */
        constructor(width: number, height: number);

        /**
         * 获得宽度
         */
        getWidth(): number;

        /**
         * 获得高度
         */
        getHeight(): number;

        /**
         * 以字符串形式返回尺寸大小对象
         */
        toString(): string;
    }

    /**
     * 经纬度坐标，确定地图上的一个点
     */
    class LngLat {
        /**
         * 构造一个地理坐标对象
         * @param lng 经度
         * @param lat 纬度
         */
        constructor(lng: number, lat: number);

        /**
         * 当前经纬度坐标值经度移动w，纬度移动s，得到新的坐标。
         *
         * @param w 经度，向右移为正值，单位：米
         * @param s 纬度，向上移为正值，单位：米
         */
        offset(w: number, s: number): LngLat;

        /**
         * 计算当前经纬度和传入经纬度或者经纬度数组连线之间的地面距离，单位为米
         *
         * @param lnglat 传入的经纬度
         */
        distance(lnglat: LngLat | [number, number]): number;

        /**
         * 获取经度值
         */
        getLng(): number;

        /**
         * 获取纬度值
         */
        getLat(): number;

        /**
         * 判断当前坐标对象与传入坐标对象是否相等
         *
         * @param lnglat 传入坐标对象
         */
        equals(lnglat: LngLat): boolean;

        /**
         * LngLat对象以字符串的形式返回
         */
        toString(): string;
    }

    /**
     * 地物对象的经纬度矩形范围
     */
    class Bounds {
        /**
         * 构造一个矩形范围
         * @param southWest 西南角经纬度坐标
         * @param northEast 东北角经纬度坐标
         */
        constructor(southWest: LngLat, northEast: LngLat);

        /**
         * 判断指定点坐标是否在矩形范围内
         * @param point 指定点
         */
        contains(point: LngLat): boolean;

        /**
         * 获取当前Bounds的中心点经纬度坐标
         */
        getCenter(): LngLat;

        /**
         * 获取西南角坐标
         */
        getSouthWest(): LngLat;

        /**
         * 获取东北角坐标
         */
        getNorthEast(): LngLat;

        /**
         * 以字符串形式返回地物对象的矩形范围
         */
        toString(): string;
    }

    interface TileLayerOptions {
        map: Map;
        tileSize: number;
        tileUrl: string;
        errorUrl: string;
        getTileUrl: (x: number, y: number, z: number) => string;
        zIndex: number;
        opacity: number;
        zooms: number[];
        detectRetina: boolean;
    }

    abstract class Layer extends EventBindable {
        setOpacity(alpha: number): void;
        show(): void;
        hide(): void;
        getTiles(): string[];
        reload(): void;
        setTileUrl(): void;
        getZooms(): number[];
        setzIndex(index: number): void;
        setMap(map: Map): void;
    }

    class TileLayer extends Layer {
        constructor(tileOpt?: {
            map: Map,
            tileSize?: number,
            tileUrl?: string,
            errorUrl?: string,
            getTileUrl?: (x: number, y: number, z: number) => string,
            zIndex?: number,
            opacity?: number,
            zooms?: number[],
            detectRetina?: boolean
        });
    }

    namespace TileLayer {
        abstract class MapTypeLayer extends Layer {
            constructor(options?: {
                map: Map,
                zIndex?: number,
                opacity?: number,
                zooms?: number[],
                detectRetina?: boolean
            });
        }

        class Satellite extends MapTypeLayer {
        }

        class RoadNet extends MapTypeLayer {
        }

        class Traffic extends MapTypeLayer {
            constructor(options?: {
                map: Map,
                zIndex?: number,
                opacity?: number,
                zooms?: number[],
                detectRetina?: boolean,
                autoRefresh?: boolean,
                interval?: number
            });

            interval: number;
            autoRefresh: boolean;
        }
    }

    class IndoorMap {
        constructor(opts: {
            zIndex?: number,
            opacity?: number,
            cursor?: string,
            hideFloorBar?: boolean,
            alwaysShow?: boolean
        });

        showIndoorMap(indoorid: string, floor: number, shopid: string): void;

        showFloor(floor: number, noMove: boolean): void;

        setMap(map: Map): void;

        show(): void;

        hide(): void;

        setzIndex(): void;

        showFloorBar(): void;

        hideFloorBar(): void;

        setOpacity(alpha: number): void;

        getOpacity(): number;

        showLabels(): void;

        hideLabels(): void;

        getSelectedBuildingId(): string;

        getSelectedBuilding(): string;
    }

    interface MapOptions {
        view?: View2D;
        layers?: TileLayer[];
        level?: number;
        center?: LngLat;
        labelzIndex?: number;
        zooms?: number[];
        lang?: string;
        cursor?: string;
        crs?: string;
        animateEnable?: boolean;
        isHotspot?: boolean;
        defaultLayer?: TileLayer;
        rotateEnable?: boolean;
        resizeEnable?: boolean;
        showIndoorMap?: boolean;
        indoorMap?: IndoorMap;
        expandZoomRange?: boolean;
        dragEnable?: boolean;
        zoomEnable?: boolean;
        doubleClickZoom?: boolean;
        keyboardEnable?: boolean;
        jogEnable?: boolean;
        scrollWheel?: boolean;
        touchZoom?: boolean;
        mapStyle?: string;
        features?: string[];
    }

    class View2D {
        constructor(opt: {
            center?: LngLat,
            rotation?: number,
            zoom?: number,
            crs?: 'EPSG3857'|'EPSG3395'|'EPSG4326'
        });

        /**
         * To silence lint error, this class has to be exists.
         */
        toString(): string;
    }

    class Map extends EventBindable {
        constructor(mapDiv: string, opts?: MapOptions);

        getZoom(): number;

        getLayers(): TileLayer[];

        getCenter(): LngLat;

        getCity(callback: (result: {
            provice: string,
            city: string,
            citycode: string,
            district: string
        }) => void): void;

        getBounds(): Bounds;
        getlabelzIndex(): number;
        getLimitBounds(): Bounds;
        getLang(): string;
        getSize(): Size;
        getRotation(): number;
        getStatus(): any;
        getDefaultCursor(): string;
        getResolution(point: LngLat): number;
        getScale(dpi: number): number;
        setZoom(level: number): void;
        setlabelzIndex(index: number): void;
        setLayers(layers: TileLayer[]): void;
        add(overlayers: any[]): void;
        remove(overlayers: any[]): void;
        getAllOverlays(type: string): Marker[] | Circle[] | Polygon[] | Polyline[];
        setCenter(position: LngLat): void;
        setZoomAndCenter(zoomLevel: number, center: LngLat): void;
        setCity(city: string, callback: () => void): void;
        setBounds(bound: Bounds): void;
        setLimitBounds(bound: Bounds): void;
        clearLimitBounds(): void;
        setLang(lang: string): void;
        setRotation(rotation: number): void;
        setStatus(status: any): void;
        setDefaultCursor(cursor: string): void;
        zoomIn(): void;
        zoomOut(): void;
        panTo(position: LngLat): void;
        panBy(x: number, y: number): void;
        setFitView(overlayList?: any[]): void;
        clearMap(): void;
        destroy(): void;
        plugin(name: string| string[], callback: () => void): void;
        addControl(obj: any): void;
        removeControl(obj: any): void;
        clearInfoWindow(): void;
        pixelToLngLat(pixel: Pixel, level: number): LngLat;
        lnglatToPixel(lnglat: LngLat, level: number): Pixel;
        containerToLngLat(pixel: Pixel, level: number): LngLat;
        lngLatToContainer(lnglat: LngLat, level: number): Pixel;
        setMapStyle(style: string): void;
        getMapStyle(): string;
        setFeatures(features: string[]): void;
        getFeatures(): string[];
        setDefaultLayer(layer: TileLayer): void;
    }

    class Icon {
        constructor(options?: {
            size?: Size,
            imageOffset?: Pixel,
            image?: string,
            imageSize?: Size
        });

        getImageSize(): Size;
        setImageSize(size: Size): void;
    }

    /**
     * MarkerShape用于划定Marker的可点击区域范围。需要注意的是，在IE浏览器中图标透明区域默认为不触发事件，因此MarkerShape在IE中不起作用。
     */
    class MarkerShape {
        constructor(options: {
            /**
             *
             * 可点击区域组成元素数组，存放图形的像素坐标等信息，该数组元素由type决定：
             * - circle:coords格式为 [x1, y1, r]，x1，y1为圆心像素坐标，r为圆半径
             * - poly: coords格式为 [x1, y1, x2, y2 … xn, yn]，各x，y表示多边形边界像素坐标
             * - rect: coords格式为 [x1, y1, x2, y2]，x1，y1为矩形左上角像素坐标，x2，y2为矩形右下角像素坐标
             * Markshape的像素坐标是指相对于marker的左上角的像素坐标偏移量
             */
            coords?: number[],

            /**
             * 可点击区域类型，可选值：
             * - circle:圆形
             * - poly:多边形
             * - rect:矩形
             */
            type?: string
        });

        /**
         * To silence lint error, this class has to be exists.
         */
        toString(): string;
    }

    interface MarkerOptions {
        map?: Map;
        position?: LngLat;
        offset?: Pixel;
        icon?: string|Icon;
        content?: string| HTMLElement;
        topWhenClick?: boolean;
        topWhenMouseOver?: boolean;
        draggable?: boolean;
        raiseOnDrag?: boolean;
        cursor?: string;
        visible?: boolean;
        zIndex?: number;
        angle?: number;
        autoRotation?: boolean;
        animation?: string;
        shadow?: Icon;
        title?: string;
        clickable?: boolean;
        shape?: MarkerShape;
        extData?: any;
        label?: { content: string, offset: Pixel };
    }

    /**
     * 点标记。
     */
    class Marker extends EventBindable {
        constructor(options?: MarkerOptions);

        markOnAMAP(obj: {
            name: string,
            position: LngLat
        }): void;

        getOffset(): Pixel;
        setOffset(offset: Pixel): void;

        setAnimation(animate: string): void;
        getAnimation(): string;

        setClickable(clickable: boolean): void;
        getClickable(): boolean;

        getPosition(): LngLat;
        setPosition(lnglat: LngLat): void;

        setAngle(angle: number): void;
        getAngle(): number;

        setLabel(label: {
            content?: string,
            offset?: Pixel
        }): void;
        getLabel(): {
            content?: string,
            offset?: Pixel
        };

        setzIndex(index: number): void;

        getIcon(): string|Icon;
        setIcon(content: string|Icon): void;

        setDraggable(draggable: boolean): void;
        getDraggable(): boolean;

        hide(): void;
        show(): void;

        setCursor(cursor: string): void;

        setContent(content: string| HTMLElement): void;
        getContent(): string;

        moveAlong(lnglatlist: LngLat[], speed?: number, f?: (k: number) => number, circlable?: boolean): void;
        moveTo(lnglat: LngLat, speed?: number, f?: (k: number) => number): void;
        stopMove(): void;
        setMap(map: Map): void;
        getMap(): Map;
        setTitle(title: string): void;
        getTitle(): string;
        setTop(isTop: boolean): void;
        getTop(): boolean;
        setShadow(icon: Icon): void;
        getShadow(): Icon;
        setShape(shape: MarkerShape): void;
        getShape(): MarkerShape;
        setExtData(ext: any): void;
        getExtData(): any;
    }

    interface MarkerClustererOptions {
      gridSize?: number;
      minClusterSize?: number;
      maxZoom?: number;
      averageCenter?: boolean;
      styles?: any[];
      renderCluserMarker?: (obj: any) => void;
      zoomOnClick?: boolean;
    }

    /**
     * 用于地图上加载大量点标记，提高地图的绘制和显示性能。
     */
    class MarkerClusterer extends EventBindable {
      constructor(map: Map, markers: Marker[], opt?: MarkerClustererOptions);

      /**
       * 添加一个需进行聚合的点标记
       * @param marker
       */
      addMarker(marker: Marker): void;

      /**
       * 删除一个聚合的点标记
       * @param marker 点标记
       */
      removeMarker(marker: Marker): void;

      /**
       * 获取聚合点的总数量
       */
      getClustersCount(): number;

      /**
       * 获取聚合网格的像素大小
       */
      getGridSize(): number;

      /**
       * 获取地图中点标记的最大聚合级别
       */
      getMaxZoom(): number;

      /**
       * 获取单个聚合的最小数量
       */
      getMinClusterSize(): number;

      /**
       * 获取聚合的样式风格集合
       */
      getStyles(): any[];

      /**
       * 设置聚合网格的像素大小
       * @param size
       */
      setGridSize(size: number): void;

      /**
       * 设置地图中点标记的最大聚合级别
       * @param zoom
       */
      setMaxZoom(zoom: number): void;

      /**
       * 设置单个聚合的最小数量
       * @param size
       */
      setMinClusterSize(size: number): void;

      /**
       * 设置聚合的样式风格
       * @param styles
       */
      setStyles(styles: any[]): void;

      /**
       * 从地图上彻底清除所有聚合点标记
       */
      clearMarkers(): void;

      /**
       * 设置将进行点聚合的地图对象
       * @param map
       */
      setMap(map: Map): void;

      /**
       * 设置将进行点聚合显示的点标记集合
       * @param markers
       */
      setMarkers(markers: Marker[]): void;

      /**
       * 获取该点聚合的地图对象
       */
      getMap(): Map;

      /**
       * 获取该点聚合中的点标记集合
       */
      getMarkers(): Marker[];

      /**
       * 添加一组需进行聚合的点标记
       */
      addMarkers(markers: Marker[]): void;

      /**
       * 删除一组聚合的点标记
       * @param markers
       */
      removeMarkers(markers: Marker[]): void;

      /**
       * 获取单个聚合点位置是否是聚合内所有标记的平均中心
       */
      isAverageCenter(): boolean;

      /**
       * 设置单个聚合点位置是否是聚合内所有标记的平均中心
       * @param averageCenter
       */
      setAverageCenter(averageCenter: boolean): void;
    }

    interface CircleOptions {
        map: Map;
        zIndex?: number;
        center: LngLat;
        radius?: number;
        strokeColor?: string;
        strokeOpacity?: number;
        fillColor?: string;
        fillOpacity?: string;
        strokeStyle?: string;
        extData?: any;
        strokeDasharray?: number[];
    }

    class Circle {
        constructor(options?: CircleOptions);
        setCenter(lnglat: LngLat): void;
        getCenter(): LngLat;
        getBounds(): Bounds;
        setRadius(radius: number): void;
        getRadius(): number;
        setOptions(circleopt: CircleOptions): void;
        getOptions(): CircleOptions;
        hide(): void;
        show(): void;
        setMap(map: Map): void;
        setExtData(ext: any): void;
        getExtData(): any;
        contains(point: LngLat): boolean;
    }

    interface PolygonOptions {
        map?: Map;
        zIndex?: number;
        path?: LngLat[]|LngLat[][];
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
        fillColor?: string;
        fillOpacity?: number;
        extData?: any;
        strokeStyle?: string;
        strokeDasharray?: number[];
    }

    class Polygon extends EventBindable {
        constructor(options?: PolygonOptions);

        setPath(path: LngLat[]|LngLat[][]): void;
        getPath(): LngLat[]|LngLat[][];
        setOptions(opt: PolygonOptions): void;
        getOptions(): PolygonOptions;
        getBounds(): Bounds;
        getArea(): number;
        hide(): void;
        show(): void;
        setMap(map: Map): void;
        setExtData(ext: any): void;
        getExtData(): any;
        contains(point: LngLat): boolean;
    }

    interface PolylineOptions {
        map?: Map;
        zIndex?: number;
        geodesic?: boolean;
        isOutline?: boolean;
        outlineColor?: string;
        path?: LngLat[];
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
        strokeStyle?: string;
        strokeDasharray?: number[];
        extData?: any;
    }

    class Polyline extends EventBindable {
        constructor(options?: PolylineOptions);

        setPath(path: LngLat[]): void;
        getPath(): LngLat[];

        setOptions(opt: PolylineOptions): void;
        getOptions(): PolylineOptions;

        getLength(): number;
        getBounds(): Bounds;
        hide(): void;
        show(): void;

        setMap(map: Map): void;
        setExtData(ext: any): void;
        getExtData(): any;
    }

    interface MapControl {
        show(): void;
        hide(): void;
    }

    class MapType implements MapControl {
        constructor(options?: {
            defaultType?: number;
            showTraffic?: boolean;
            showRoad?: boolean;
        });

        show(): void;
        hide(): void;
    }

    class OverView extends EventBindable implements MapControl {
        constructor(options?: {
            tileLayer?: TileLayer[],
            isOpen?: boolean,
            visible?: boolean
        });

        open(): void;
        close(): void;
        setTileLayer(layer: TileLayer): void;
        getTileLayer(): TileLayer;
        show(): void;
        hide(): void;
    }

    class Scale extends EventBindable implements MapControl {
        offset: Pixel;
        position: string;

        show(): void;
        hide(): void;
    }

    class ToolBar extends EventBindable implements MapControl {
        constructor(options?: {
            offset?: Pixel,
            position?: string,
            ruler?: boolean,
            noIpLocate?: boolean,
            locate?: boolean,
            liteStyle?: boolean,
            direction?: boolean,
            autoPosition?: boolean,
            locationMarker?: Marker,
            useNative?: boolean
        });

        getOffset(): Pixel;
        setOffset(offset: Pixel): void;
        hideRuler(): void;
        showRuler(): void;
        hideDirection(): void;
        showDirection(): void;
        hideLocation(): void;
        showLocation(): void;
        doLocation(): void;
        getLocation(): { lng: number, lat: number };
        show(): void;
        hide(): void;
    }

    class InfoWindow extends EventBindable {
        constructor(options?: {
            isCustom?: boolean,
            autoMove?: boolean,
            closeWhenClickMap?: boolean,
            content?: string | HTMLElement,
            size?: Size,
            offset?: Pixel,
            position?: LngLat,
            showShadow?: boolean
        });

        open(map: Map, pos: LngLat): void;
        close(): void;
        getIsOpen(): boolean;
        setPosition(lnglat: LngLat): void;
        getPosition(): LngLat;
        setSize(size: Size): void;
        getSize(): Size;
        getContent(): string;
        setContent(content: string|HTMLElement): void;
    }

    class AdvancedInfoWindow extends EventBindable {
        constructor(options?: {
            autoMove?: boolean,
            closeWhenClickMap?: boolean,
            content?: string|HTMLElement,
            offset?: Pixel,
            position?: LngLat,
            panel?: string|HTMLElement,
            searchRadius?: number,
            placeSearch?: boolean,
            driving?: boolean,
            walking?: boolean,
            transit?: boolean,
            asOrigin?: boolean,
            asDestination?: boolean
        });

        open(map: Map, pos: LngLat): void;
        close(): void;
        getIsOpen(): boolean;
        setPosition(lnglat: LngLat): void;
        getPosition(): LngLat;
        setContent(content: string|HTMLElement): void;
        getContent(): string;
    }

    class Geolocation extends EventBindable {
        constructor(options: {
            enableHighAccuracy?: boolean,
            timeout?: number,
            noIpLocate?: boolean,
            maximumAge?: number,
            convert?: boolean,
            showButton?: boolean,
            buttonDom?: string|HTMLElement,
            buttonPosition?: string,
            buttonOffset?: Pixel,
            showMarker?: boolean,
            markerOptions?: MarkerOptions,
            showCircle?: boolean,
            circleOptions?: CircleOptions,
            panToLocation?: boolean,
            zoomToAccuracy?: boolean,
            useNative?: boolean
        });

        isSupported(): boolean;
        getCurrentPosition(): void;
        watchPosition(): number;
        clearWatch(watchId: number): number;
    }

    interface GeolocationResult {
        position: LngLat;
        accuracy: number;
        isConverted: boolean;
        info: string;
    }

    interface GeolocationError {
        info: string;
    }

    interface BusinessArea {
        id: string;
        name: string;
        location: string;
    }

    interface Road {
        id: string;
        name: string;
        distance: number;
        location: LngLat;
        direction: string;
    }

    interface Cross {
        distance: number;
        direction: string;
        location: LngLat;
        first_id: string;
        first_name: string;
        second_id: string;
        second_name: string;
    }

    interface AddressComponent {
        province: string;
        city: string;
        citycode: string;
        district: string;
        adcode: string;
        township: string;
        street: string;
        streetNumber: string;
        neighborhood: string;
        neighborhoodType: string;
        building: string;
        buildingType: string;
        businessAreas: BusinessArea[];
    }

    interface Geocode {
        addressComponent: AddressComponent;
        formattedAddress: string;
        location: LngLat;
        adcode: string;
        level: string;
    }

    interface ReGeocode {
        addressComponent: AddressComponent;
        formattedAddress: string;
        roads: Road[];
        crosses: Cross[];
        pois: ReGeocodePoi[];
    }

    interface ReGeocodePoi {
        id: string;
        name: string;
        type: string;
        tel: string;
        distance: number;
        direction: string;
        address: string;
        location: LngLat;
        businessArea: string;
    }

    interface GeocodeResult {
        info: string;
        geocodes: LngLat[];
        resultNum: number;
    }

    interface ReGeocodeResult {
        info: string;
        regeocode: ReGeocode;
    }

    class Geocoder {
        constructor(opts?: {
            city?: string,
            radius?: number,
            batch?: boolean,
            extensions?: string
        });

        getLocation(address: string, callback?: (status?: string, result?: string | GeocodeResult) => void): void;

        setCity(city: string): void;

        getAddress(location: LngLat|LngLat[], callback: (status?: string, result?: string | ReGeocodeResult) => void): void;
    }

    /**
     * 坐标转换结果
     */
    interface ConvertorResult {
      info: string;
      locations: LngLat[];
    }

    /**
     * 坐标转换
     */
    function convertFrom(lnglat: LngLat | LngLat[] | [number, number], type: string, result: (status: string, result: ConvertorResult) => void): void;

    interface Poi {
        id: string;
        name: string;
        type: string;
        location: LngLat;
        address: string;
        distance: number;
        tel: string;

        website: string;
        pcode: string;
        citycode: string;
        adcode: string;
        postcode: string;
        pname: string;
        cityname: string;
        adname: string;
        email: string;
        entr_location: LngLat;
        exit_location: LngLat;
        groupbuy: boolean;
        discount: boolean;
    }

    interface CitySearchResult {
        city: string;
        bounds: Bounds;
    }

    class CitySearch extends EventBindable {
        getLocalCity(callback: (status: string, result: string | CitySearchResult) => void): void;
        getCityByIp(ip: string, callback: (status: string, result: string | CitySearchResult) => void): void;
    }

    enum DrivingPolicy {
        LEAST_TIME,
        LEAST_FEE,
        LEAST_DISTANCE,
        REAL_TRAFFIC
    }

    interface ViaCity {
        name: string;
        citycode: string;
        adcode: string;
        districts: District[];
    }

    interface District {
        name: string;
        adcode: string;
    }

    interface TMC {
        lcode: string;
        distance: number;
        status: string;
    }

    interface DriveStep {
        start_location: LngLat;
        end_location: LngLat;
        instruction: string;
        action: string;
        assist_action: string;
        orientation: string;
        road: string;
        distance: number;
        tolls: number;
        tolls_distance: number;
        toll_road: string;
        time: number;
        path: LngLat[];
        cities?: ViaCity[];
        tmcs?: TMC[];
    }

    interface DriveRoute {
        distance: number;
        time: number;
        policy: string;
        tolls: number;
        tolls_distance: number;
        steps: DriveStep[];
    }

    interface DrivingResult {
        info: string;
        origin: LngLat;
        destination: LngLat|Poi;
        start: Poi;
        waypoints: Poi;
        taxi_cost: number;
        routes: DriveRoute[];
    }

    class Driving extends EventBindable {
        constructor(options?: {
            policy?: DrivingPolicy,
            extensions?: string,
            map?: Map,
            panel?: string|HTMLElement,
            hideMarkers?: boolean,
            showTraffic?: boolean
        });

        search(origin: LngLat, destination: LngLat, opts?: {
            waypoints: LngLat[]
        }, callback?: (status: string, result: string|DrivingResult) => void): void;

        search(point: Array<{
            keyword: string,
            city: string
        }>, callback: (status: string, result: string|DrivingResult) => void): void;

        setPolicy(policy: DrivingPolicy): void;
        setAvoidPolygons(path: LngLat[][]): void;
        setAvoidRoad(road: string): void;
        clearAvoidRoad(): void;
        clearAvoidPolygons(): void;
        getAvlidPolygons(): LngLat[][];
        getAvoidRoad(): string;
        clear(): void;
        searchOnAMAP(obj: {
            origin?: LngLat,
            originName?: string,
            destination?: LngLat,
            destinationName?: string
        }): void;
    }

    // 天气插件

    interface WeatherLiveResult {
        info: string;
        province: string;
        city: string;
        adcode: string;
        weather: string;
        temperature: number;
        windDirection: string;
        windPower: number;
        humidity: string;
        reportTime: string;
    }

    interface Forecast {
        date: string;
        week: string;
        dayWeather: string;
        nightWeather: string;
        dayTemp: number;
        nightTemp: number;
        dayWindDir: string;
        nightWindDir: string;
        dayWindPower: string;
        nightWindPower: string;
    }

    interface WeatherForecastResult {
        info: string;
        province: string;
        city: string;
        adcode: string;
        reportTime: string;
        forecasts: Forecast[];
    }

    class Weather {
        /**
         * 查询实时天气信息
         * @param district 支持城市名称/区域编码（如：“杭州市”/“330100”）
         * @param callback 当请求成功时ErrorStatus为null，当请求不成功时ErrorStatus为Obj
         */
        getLive(district: string, callback: (errorStatus: any, result: WeatherLiveResult) => void): void;

        /**
         * 查询四天预报天气，包括查询当天天气信息
         * @param district 支持城市名称/区域编码（如：“杭州市”/“330100”）
         * @param callback 当请求成功时ErrorStatus为null，当请求不成功时ErrorStatus为Obj
         */
        getForecast(district: string, callback: (errorStatus: any, result: WeatherForecastResult) => void): void;
    }

    interface Tip {
        name: string;
        district: string;
        adcode: string;
    }

    interface AutocompleteResult {
        info: string;
        count: number;
        tips: Tip[];
    }

    class Autocomplete {
        constructor(opts: {
            type?: string,
            city?: string,
            datatype?: string,
            citylimit?: boolean,
            input?: string
        });

        search(keyword: string, callback: (status: string, result: string | AutocompleteResult) => void): void;
    }

    interface SelectChangeEvent {
        type: string;
        id: string;
        marker: Marker;
        listElement: HTMLLIElement;
        data: Poi;
    }

    interface PoiList {
        pois: Poi[];
        pageIndex: number;
        pageSize: number;
        count: number;
    }

    interface CityInfo {
        name: string;
        citycode: string;
        adcode: string;
        count: number;
    }

    interface SearchResult {
        info: string;
        poiList: PoiList;
        keywordList: string[];
        cityList: CityInfo[];
    }

    interface Photo {
        title: string;
        url: string;
    }

    interface Content {
        id: string;
        name: string;
    }

    interface Discount {
        title: string;
        detail: string;
        start_time: string;
        end_time: string;
        sold_num: string;
        photos: Photo[];
        url: string;
        provider: string;
    }

    interface Groupbuy {
        title: string;
        type_code: string;
        type: string;
        detail: string;
        stime: string;
        etime: string;
        count: number;
        sold_num: number;
        original_price: number;
        groupbuy_price: number;
        discount: number;
        ticket_address: string;
        ticket_tel: string;
        photos: Photo[];
        url: string;
        provider: string;
    }

    class PlaceSearch {
        constructor(opts: {
            city?: string,
            citylimit?: boolean,
            children?: number,
            type?: string,
            lang?: string,
            pageSize?: number,
            pageIndex?: number,
            extensions?: string,
            map?: Map,
            panel?: string|HTMLElement,
            showCover?: boolean,
            renderStyle?: string,
            autoFitView?: boolean
        });

        search(keyword: string, callback: (status: string, result: string | SearchResult) => void): void;
        searchNearBy(keyword: string, center: LngLat, radius: number, callback: (status: string, result: string|SearchResult) => void): void;
        searchInBounds(keyword: string, bounds: Bounds|Polygon, callback: (status: string, result: string|SearchResult) => void): void;
        getDetails(POIID: string, callback: (status: string, result: string|SearchResult) => void): void;
        setType(type: string): void;
        setCityLimit(p: boolean): void;
        setPageIndex(pageIndex: number): void;
        setPageSize(setPageSize: number): void;
        setCity(city: string): void;
        setLang(lang: string): string;
        getLang(): string;
        clear(): void;
        poiOnAMAP(obj: any): void;
        detailOnAMAP(obj: any): void;
    }

    interface DistrictSearchOptions {
        level: string;
        showbiz?: boolean;
        extensions?: string;
        subdistrict?: number;
    }

    interface DistrictSearchResult {
        info: string;
        districtList: District[];
    }

    interface District {
        name: string;
        center: LngLat;
        citycode: string;
        adcode: string;
        level: string;
        boundaries: LngLat[];
        districtList: District[];
    }

    class DistrictSearch {
        constructor(opts: DistrictSearchOptions);

        search(keywords: string, callback?: (status: string, result: string| DistrictSearchResult) => void, opts?: DistrictSearchOptions): void;
        setLevel(level: string): void;
        setSubdistrict(district: number): void;
    }
  }
