declare namespace AMap {
    namespace Map {
        type Feature = 'bg' | 'point' | 'road' | 'building';
        type ViewMode = '2D' | '3D';
        interface Options {
            /**
             * 地图视口，用于控制影响地图静态显示的属性
             */
            view?: View2D;
            /**
             * 地图图层数组，数组可以是图层 中的一个或多个，默认为普通二维地图
             */
            layers?: Layer[];
            /**
             * 地图显示的缩放级别
             */
            zoom?: number;
            /**
             * 地图中心点坐标值
             */
            center?: LocationValue;
            /**
             * 地图标注显示顺序
             */
            labelzIndex?: number;
            /**
             * 地图显示的缩放级别范围
             */
            zooms?: [number, number];
            /**
             * 地图语言类型
             */
            lang?: Lang;
            /**
             * 地图默认鼠标样式
             */
            defaultCursor?: string;
            /**
             * 地图显示的参考坐标系
             */
            crs?: 'EPSG3857' | 'EPSG3395' | 'EPSG4326';
            /**
             * 地图平移过程中是否使用动画
             */
            animateEnable?: boolean;
            /**
             * 是否开启地图热点和标注的hover效果
             */
            isHotspot?: boolean;
            /**
             * 当前地图中默认显示的图层
             */
            defaultLayer?: TileLayer;
            /**
             * 地图是否可旋转
             */
            rotateEnable?: boolean;
            /**
             * 是否监控地图容器尺寸变化
             */
            resizeEnable?: boolean;
            /**
             * 是否在有矢量底图的时候自动展示室内地图
             */
            showIndoorMap?: boolean;
            /**
             * 在展示矢量图的时候自动展示室内地图图层
             */
            // indoorMap?: IndorMap
            /**
             * 是否支持可以扩展最大缩放级别
             */
            expandZoomRange?: boolean;
            /**
             * 地图是否可通过鼠标拖拽平移
             */
            dragEnable?: boolean;
            /**
             * 地图是否可缩放
             */
            zoomEnable?: boolean;
            /**
             * 地图是否可通过双击鼠标放大地图
             */
            doubleClickZoom?: boolean;
            /**
             * 地图是否可通过键盘控制
             */
            keyboardEnable?: boolean;
            /**
             * 地图是否使用缓动效果
             */
            jogEnable?: boolean;
            /**
             * 地图是否可通过鼠标滚轮缩放浏览
             */
            scrollWheel?: boolean;
            /**
             * 地图在移动终端上是否可通过多点触控缩放浏览地图
             */
            touchZoom?: boolean;
            /**
             * 当touchZoomCenter=1的时候，手机端双指缩放的以地图中心为中心，否则默认以双指中间点为中心
             */
            touchZoomCenter?: number;
            /**
             * 设置地图的显示样式
             */
            mapStyle?: string;
            /**
             * 设置地图上显示的元素种类
             */
            features?: Feature[] | 'all' | Feature;
            /**
             * 设置地图显示3D楼块效果
             */
            showBuildingBlock?: boolean;
            /**
             * 视图模式
             */
            viewMode?: ViewMode;
            /**
             * 俯仰角度
             */
            pitch?: number;
            /**
             * 是否允许设置俯仰角度
             */
            pitchEnable?: boolean;
            /**
             * 楼块出现和消失的时候是否显示动画过程
             */
            buildingAnimation?: boolean;
            /**
             * 调整天空颜色
             */
            skyColor?: string;
            /**
             * 设置地图的预加载模式
             */
            preloadMode?: boolean;
            /**
             * 为 Map 实例指定掩模的路径，各图层将只显示路径范围内图像
             */
            mask?: Array<[number, number]> | Array<Array<[number, number]>> | Array<Array<Array<[number, number]>>>;
            maxPitch?: number;
            rotation?: number;
            forceVector?: boolean;

            // internal
            baseRender?: 'vw' | 'd' | 'dv' | 'v';
            overlayRender?: 'c' | 'd';
            showLabel?: boolean;
            gridMapForeign?: boolean;
            logoUrl?: string;
            logoUrlRetina?: string;
            copyright?: string;
            turboMode?: boolean;
            workerMode?: boolean;
            // continuousZoomEnable?: boolean;
            // showFog: boolean;
            // yaw: number;
            // scale: number;
            // detectRetina: number;
        }
        interface Status {
            /**
             * 是否开启动画
             */
            animateEnable: boolean;
            /**
             * 是否双击缩放
             */
            doubleClickZoom: boolean;
            /**
             * 是否支持拖拽
             */
            dragEnable: boolean;
            isHotspot: boolean;
            /**
             * 是否开启缓动效果
             */
            jogEnable: boolean;
            /**
             * 是否支持键盘
             */
            keyboardEnable: boolean;
            /**
             * 是否支持调整俯仰角
             */
            pitchEnable: boolean;
            resizeEnable: boolean;
            /**
             * 是否支持旋转
             */
            rotateEnable: boolean;
            /**
             * 是否支持滚轮缩放
             */
            scrollWheel: boolean;
            /**
             * 是否支持触摸缩放
             */
            touchZoom: boolean;
            /**
             * 是否支持缩放
             */
            zoomEnable: boolean;
        }
        type HotspotEvent<N extends string> = Event<N, {
            /**
             * 经纬度坐标
             */
            lnglat: LngLat;
            /**
             * 热点名称
             */
            name: string;
            /**
             * 热点id
             */
            id: string;

            // internal
            /**
             * 是否室内热点
             */
            isIndoorPOI: boolean;
        }>;
        interface EventMap {
            click: MapsEvent<'click', Map>;
            dblclick: MapsEvent<'dblclick', Map>;
            rightclick: MapsEvent<'rightclick', Map>;
            rdblclick: MapsEvent<'rdblclick', Map>;
            mouseup: MapsEvent<'mouseup', Map>;
            mousedown: MapsEvent<'mousedown', Map>;
            mousemove: MapsEvent<'mousemove', Map>;
            mousewheel: MapsEvent<'mousewheel', Map>;
            mouseover: MapsEvent<'mouseover', Map>;
            mouseout: MapsEvent<'mouseout', Map>;
            touchstart: MapsEvent<'touchstart', Map>;
            touchmove: MapsEvent<'touchmove', Map>;
            touchend: MapsEvent<'touchend', Map>;
            contextmenu: MapsEvent<'contextmenu', Map>;

            hotspotclick: HotspotEvent<'hotspotclick'>;
            hotspotover: HotspotEvent<'hotspotover'>;
            hotspotout: HotspotEvent<'hotspotout'>;

            complete: Event<'complete'>;
            mapmove: Event<'mapmove'>;
            movestart: Event<'movestart'>;
            moveend: Event<'moveend'>;
            zoomchange: Event<'zoomchange'>;
            zoomstart: Event<'zoomstart'>;
            zoomend: Event<'zoomend'>;
            dragstart: Event<'dragstart'>;
            dragging: Event<'dragging'>;
            dragend: Event<'dragend'>;
            resize: Event<'resize'>;
        }
    }

    class Map extends EventEmitter {
        /**
         * 构造一个地图对象
         * @param container 地图容器的id或者是DOM元素
         * @param opts 选项
         */
        constructor(container: string | HTMLElement, opts?: Map.Options);
        /**
         * 唤起高德地图客户端marker页
         * @param obj 唤起参数
         */
        poiOnAMAP(obj: { id: string; location?: LocationValue; name?: string }): void;
        /**
         * 唤起高德地图客户端marker详情页
         * @param obj 唤起参数
         */
        detailOnAMAP(obj: { id: string; location?: LocationValue; name?: string }): void;
        /**
         * 获取当前地图缩放级别
         */
        getZoom(): number;
        /**
         * 获取地图图层数组
         */
        getLayers(): Layer[];
        /**
         * 获取地图中心点经纬度坐标值
         */
        getCenter(): LngLat;
        /**
         * 返回地图对象的容器
         */
        getContainer(): HTMLElement | null;
        /**
         * 获取地图中心点所在区域
         */
        getCity(callback: (cityData: {
            /**
             * 市名称
             */
            city: string;
            /**
             * 市代码
             */
            citycode: string;
            /**
             * 区名称
             */
            district: string;
            /**
             * 省
             */
            province: string | never[]; // province is empty array when getCity fail
        }) => void): void;
        /**
         * 获取当前地图视图范围，获取当前可视区域
         */
        getBounds(): Bounds;
        /**
         * 获取当前地图标注的显示顺序
         */
        getLabelzIndex(): number;
        /**
         * 获取Map的限制区域
         */
        getLimitBounds(): Bounds;
        /**
         * 获取地图语言类型
         */
        getLang(): Lang;
        /**
         * 获取地图容器像素大小
         */
        getSize(): Size;
        /**
         * 获取地图顺时针旋转角度
         */
        getRotation(): number;
        /**
         * 获取当前地图状态信息
         */
        getStatus(): Map.Status;
        /**
         * 获取地图默认鼠标指针样式
         */
        getDefaultCursor(): string;
        /**
         * 获取指定位置的地图分辨率
         * @param point 指定经纬度
         */
        getResolution(point?: LocationValue): number;
        /**
         * 获取当前地图比例尺
         * @param dpi dpi
         */
        getScale(dpi?: number): number;
        /**
         * 设置地图显示的缩放级别
         * @param level 缩放级别
         */
        setZoom(level: number): void;
        /**
         * 设置地图标注显示的顺序
         * @param index 显示顺序
         */
        setLabelzIndex(index: number): void;
        /**
         * 设置地图图层数组
         * @param layers 图层数组
         */
        setLayers(layers: Layer[]): void;
        /**
         * 添加覆盖物/图层
         * @param overlay 覆盖物/图层
         */
        add(overlay: Overlay | Overlay[]): void;
        /**
         * 删除覆盖物/图层
         * @param overlay 覆盖物/图层
         */
        remove(overlay: Overlay | Overlay[]): void;
        /**
         * 返回添加的覆盖物对象
         * @param type 覆盖物类型
         */
        getAllOverlays(type?: 'marker' | 'circle' | 'polyline' | 'polygon'): Overlay[];
        /**
         * 设置地图显示的中心点
         * @param center 中心点经纬度
         */
        setCenter(center: LocationValue): void;
        /**
         * 地图缩放至指定级别并以指定点为地图显示中心点
         * @param zoomLevel 缩放等级
         * @param center 缩放中心
         */
        setZoomAndCenter(zoomLevel: number, center: LocationValue): void;
        /**
         * 按照行政区名称或adcode来设置地图显示的中心点。
         * @param city 城市名称或城市编码
         * @param callback 回调
         */
        setCity(city: string, callback: (this: this, coord: [string, string], zoom: number) => void): void;
        /**
         * 指定当前地图显示范围
         * @param bound 显示范围
         */
        setBounds(bound: Bounds): Bounds;
        /**
         * 设置Map的限制区域
         * @param bound 限制区域
         */
        setLimitBounds(bound: Bounds): void;
        /**
         * 清除限制区域
         */
        clearLimitBounds(): void;
        /**
         * 设置地图语言类型
         * @param lang 语言类型
         */
        setLang(lang: Lang): void;
        /**
         * 设置地图顺时针旋转角度，旋转原点为地图容器中心点
         * @param rotation 旋转角度
         */
        setRotation(rotation: number): void;
        /**
         * 设置当前地图显示状态
         * @param status 状态
         */
        setStatus(status: Partial<Map.Status>): void;
        /**
         * 设置鼠标指针默认样式
         * @param cursor 指针样式
         */
        setDefaultCursor(cursor: string): void;
        /**
         * 地图放大一级显示
         */
        zoomIn(): void;
        /**
         * 地图缩小一级显示
         */
        zoomOut(): void;
        /**
         * 地图中心点平移至指定点位置
         * @param position 目标位置经纬度
         */
        panTo(position: LocationValue): void;
        /**
         * 以像素为单位，沿x方向和y方向移动地图
         * @param x 横向移动像素，向右为正
         * @param y 纵向移动像素，向下为正
         */
        panBy(x: number, y: number): void;
        /**
         * 根据地图上添加的覆盖物分布情况，自动缩放地图到合适的视野级别
         * @param overlayList 覆盖物数组
         * @param immediately 是否需要动画过程
         * @param avoid 上下左右的像素避让宽度
         * @param maxZoom 最大缩放级别
         */
        setFitView(
            overlayList?: Overlay | Overlay[],
            immediately?: boolean,
            avoid?: [number, number, number, number],
            maxZoom?: number
        ): Bounds | false | undefined;
        /**
         * 删除地图上所有的覆盖物
         */
        clearMap(): void;
        /**
         * 注销地图对象，并清空地图容器
         */
        destroy(): void;
        /**
         * 加载插件，
         * tips: 插件的类型定义不在本类型定义中给出，需要另行安装例如
         * 3d地图：@types/amap-js-api-map3d
         * 地区搜索：@types/amap-js-api-place-search
         * @param name 插件名称
         * @param callback 插件加载完成后的回调函数
         */
        plugin(name: string | string[], callback: () => void): this;
        /**
         * 添加控件
         * @param control 控件
         */
        addControl(control: {}): void; // TODO
        /**
         * 移除控件
         * @param control 控件
         */
        removeControl(control: {}): void; // TODO
        /**
         * 清除地图上的信息窗体。
         */
        clearInfoWindow(): void;
        /**
         * 平面地图像素坐标转换为地图经纬度坐标
         * @param pixel 像素坐标
         * @param level 缩放等级
         */
        pixelToLngLat(pixel: Pixel, level?: number): LngLat;
        /**
         * 地图经纬度坐标转换为平面地图像素坐标
         * @param lnglat 经纬度坐标
         * @param level 缩放等级
         */
        lnglatToPixel(lnglat: LocationValue, level?: number): Pixel;
        /**
         * 地图容器像素坐标转为地图经纬度坐标
         * @param pixel 地图像素坐标
         */
        containerToLngLat(pixel: Pixel): LngLat;
        /**
         * 地图经纬度坐标转为地图容器像素坐标
         * @param lnglat 经纬度坐标
         */
        lngLatToContainer(lnglat: LocationValue): Pixel;
        /**
         * 地图经纬度坐标转为地图容器像素坐标
         * @param lnglat 经纬度坐标
         */
        lnglatTocontainer(lnglat: LocationValue): Pixel;
        /**
         * 设置地图的显示样式
         * @param style 地图样式
         */
        setMapStyle(style: string): void;
        /**
         * 获取地图显示样式
         */
        getMapStyle(): string;
        /**
         * 设置地图上显示的元素种类
         * @param feature 元素
         */
        setFeatures(feature: Map.Feature | Map.Feature[] | 'all'): void;
        /**
         * 获取地图显示元素种类
         */
        getFeatures(): Map.Feature | Map.Feature[] | 'all';
        /**
         * 修改底图图层
         * @param layer 图层
         */
        setDefaultLayer(layer: TileLayer): void;
        /**
         * 设置俯仰角
         * @param pitch 俯仰角
         */
        setPitch(pitch: number): void;
        /**
         * 获取俯仰角
         */
        getPitch(): number;

        getViewMode_(): Map.ViewMode;
        lngLatToGeodeticCoord(lnglat: LocationValue): Pixel;
        geodeticCoordToLngLat(pixel: Pixel): LngLat;
    }
}
