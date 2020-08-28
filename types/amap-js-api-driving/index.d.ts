// Type definitions for non-npm package amap-js-api-driving 1.4
// Project: https://lbs.amap.com/api/javascript-api/reference/route-search#m_AMap.Driving
// Definitions by: breeze9527 <https://github.com/breeze9527>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="amap-js-api" />
/// <reference types="amap-js-api-place-search" />

declare namespace AMap {
    enum DrivingPolicy {
        /**
         * 最快捷模式
         */
        LEAST_TIME = 0,
        /**
         * 最经济模式
         */
        LEAST_FEE = 1,
        /**
         * 最短距离模式
         */
        LEAST_DISTANCE = 2,
        /**
         * 考虑实时路况
         */
        REAL_TRAFFIC = 4,
        // form DragRoute
        MULTI_POLICIES = 5,
        HIGHWAY = 6,
        FEE_HIGHWAY = 7,
        FEE_TRAFFIC = 8,
        TRAFFIC_HIGHWAY = 9
    }
    namespace Driving {
        interface EventMap {
            complete: Event<'complete', SearchResult | { info: string }>;
            error: Event<'error', { info: string }>;
        }
        interface Options {
            /**
             * 驾车路线规划策略
             */
            policy?: DrivingPolicy;
            /**
             * 返回信息种类
             * 默认值：base，返回基本地址信息
             * 当取值为：all，返回DriveStep基本信息+DriveStep详细信息
             */
            extensions?: 'base' | 'all';
            /**
             * 默认为0，表示可以使用轮渡，为1的时候表示不可以使用轮渡
             */
            ferry?: boolean;
            /**
             * AMap.Map对象
             * 展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上。
             */
            map?: Map;
            /**
             * 结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。
             */
            panel?: string | HTMLElement;
            /**
             * 设置隐藏路径规划的起始点图标
             */
            hideMarkers?: boolean;
            /**
             * 设置是否显示实时路况信息，默认设置为true。
             * 显示绿色代表畅通，黄色代表轻微拥堵，红色代表比较拥堵，灰色表示无路况信息。
             */
            showTraffic?: boolean;
            /**
             * 车牌省份的汉字缩写，用于判断是否限行，与number属性组合使用。
             */
            province?: string;
            /**
             * 除省份之外车牌的字母和数字，用于判断限行相关，与province属性组合使用。
             */
            number?: string;
            /**
             * 使用map属性时，绘制的规划线路是否显示描边。缺省为true
             */
            isOutline?: boolean;
            /**
             * 使用map属性时，绘制的规划线路的描边颜色。缺省为'white'
             */
            outlineColor?: string;
            /**
             * 于控制在路径规划结束后，是否自动调整地图视野使绘制的路线处于视口的可见范围
             */
            autoFitView?: boolean;
            // internal
            showDir?: boolean;
        }
        interface SearchOptions {
            /**
             * 途经点
             */
            waypoints?: LocationValue[];
        }
        interface SearchPoint {
            /**
             * 关键词
             */
            keyword: string;
            /**
             * 城市
             */
            city?: string;
        }
        interface TMCsPath {
            path: LngLat[];
            status: string;
        }
        interface DriveStep {
            /**
             * 此路段起点
             */
            start_location: LngLat;
            /**
             * 此路段终点
             */
            end_location: LngLat;
            /**
             * 此路段说明
             */
            instruction: string;
            /**
             * 本驾车子路段完成后动作
             */
            action: string;
            /**
             * 驾车子路段完成后辅助动作，一般为到达某个目的地时返回
             */
            assistant_action: string;
            /**
             * 驾车方向
             */
            orientation: string;
            /**
             * 道路
             */
            road: string;
            /**
             * 此路段距离，单位：米
             */
            distance: number;
            /**
             * 此段收费，单位：元
             */
            tolls: number;
            /**
             * 收费路段长度，单位：米
             */
            toll_distance: number;
            /**
             * 主要收费道路
             */
            toll_road: string;
            /**
             * 此路段预计使用时间，单位：秒
             */
            time: number;
            /**
             * 此路段坐标集合
             */
            path: LngLat[];
            /**
             * 途径城市列表
             */
            cities?: ViaCity[];
            /**
             * 实时交通信息列表
             */
            tmcs?: TMC[];
            tmcsPaths?: TMCsPath[];
        }
        interface District {
            /**
             * 行政区名称
             */
            name: string;
            /**
             * 行政区编号
             */
            adcode: string;
        }
        interface ViaCity {
            /**
             * 途径名称
             */
            name: string;
            /**
             * 城市编码
             */
            citycode: string;
            /**
             * 区域编码
             */
            adcode: string;
            /**
             * 途径行政区列表
             */
            districts: District[];
        }
        interface TMC {
            /**
             * 路况信息对应的编码
             * 如果direction是正向 lcode返回值大于0；否则lcode，返回值小于0；
             * 如果返回0则说明此路段无lcode
             */
            lcode: string | never[];
            /**
             * 此lcode对应的路段长度，单位: 米
             */
            distance: number;
            /**
             * 路况状态，可能的值有：未知，畅通，缓行，拥堵
             */
            status: string;
            path: LngLat[];
            polyline: string;
        }
        interface DriveRoute {
            /**
             * 起点到终点的驾车距离，单位：米
             */
            distance: number;
            /**
             * 时间预计，单位：秒
             */
            time: number;
            /**
             * 驾车规划策略
             */
            policy: string;
            /**
             * 此驾车路线收费金额，单位：元
             */
            tolls: number;
            /**
             * 收费路段长度，单位：米
             */
            tolls_distance: number;
            /**
             * 子路段DriveStep集合
             */
            steps: DriveStep[];
            /**
             * 限行结果
             * 0 代表限行已规避或未限行，即该路线没有限行路段
             * 1 代表限行无法规避，即该线路有限行路段
             */
            restriction: 0 | 1;
        }
        interface Poi {
            location: LngLat;
            name: string;
            type: 'start' | 'end' | 'waypoint';
        }
        interface SearchResultCommon {
            /**
             * 成功状态说明
             */
            info: string;
            /**
             * 驾车规划起点坐标
             */
            origin: LngLat;
            /**
             * 驾车规划终点坐标
             */
            destination: LngLat;
            /**
             * 驾车规划路线列表
             */
            routes: DriveRoute[];
            /**
             * 打车费用，仅extensions为“all”时返回
             * 单位：元
             */
            taxi_cost?: number;
        }
        interface SearchResultBase extends SearchResultCommon {
            /**
             * 驾车规划起点
             */
            start: Poi;
            /**
             * 驾车规划终点
             */
            end: Poi;
            /**
             * 驾车规划途经点
             */
            waypoints: Array<Poi & { isWaypoint: boolean }>;
        }
        interface SearchResultExt extends SearchResultCommon {
            /**
             * 驾车规划起点
             */
            start: PlaceSearch.PoiExt;
            /**
             * 驾车规划终点
             */
            end: PlaceSearch.PoiExt;
            /**
             * 驾车规划起点名称
             */
            originName: string;
            /**
             * 驾车规划终点名称
             */
            destinationName: string;
            /**
             * 驾车规划途经点
             */
            waypoints: Array<PlaceSearch.PoiExt & { isWaypoint: boolean }>;
        }
        type SearchResult = SearchResultBase | SearchResultExt;
        type SearchStatus = 'error' | 'no_data' | 'complete';
    }
    class Driving extends EventEmitter {
        /**
         * 驾车路线规划服务
         * @param options 自定义选项
         */
        constructor(options?: Driving.Options);
        /**
         * 以名称关键字查询驾车路线规划
         * @param points 途经点数组
         * @param callback 查询回调
         */
        search(
            points: Driving.SearchPoint[],
            callback?: (status: Driving.SearchStatus, result: string | Driving.SearchResultExt) => void
        ): void;
        /**
         * 根据起点、终点坐标查询驾车路线规划
         * @param origin 起点坐标
         * @param destination 终点坐标
         * @param callback 查询回调
         */
        search(
            origin: LocationValue,
            destination: LocationValue,
            callback?: (status: Driving.SearchStatus, result: string | Driving.SearchResultBase) => void
        ): void;
        /**
         * 根据起点、终点坐标和途径点查询驾车路线规划
         * @param origin 起点坐标
         * @param destination 终点坐标
         * @param opts 查询选项，用户设定途径点
         * @param callback 查询回调
         */
        search(
            origin: LocationValue,
            destination: LocationValue,
            opts?: Driving.SearchOptions,
            callback?: (status: Driving.SearchStatus, result: string | Driving.SearchResultBase) => void
        ): void;
        /**
         * 设置驾车路线规划策略
         * @param policy 路线规划策略
         */
        setPolicy(policy?: DrivingPolicy): void;
        /**
         * 设置避让区域，最大支持三个避让区域，避让道路和避让区域不能同时使用
         * @param path 避让区域
         */
        setAvoidPolygons(path: LocationValue[][]): void;
        /**
         * 设置避让道路名称，只支持一条避让道路，避让道路和避让区域不能同时使用
         * @param road 道路名称
         */
        setAvoidRoad(road: string): void;
        /**
         * 清除避让道路
         */
        clearAvoidRoad(): void;
        /**
         * 清除避让区域
         */
        clearAvoidPolygons(): void;
        /**
         * 获取避让区域
         */
        getAvoidPolygons(): LngLat[];
        /**
         * 获取避让道路
         */
        getAvoidRoad(): string | undefined;
        /**
         * 清除搜索结果
         */
        clear(): void;
        /**
         * 唤起高德地图客户端驾车路径规划
         * @param obj 唤起参数
         */
        searchOnAMAP(obj: { origin: LocationValue, originName?: string, destination: LocationValue, destinationName?: string }): void;
        /**
         * 设置车牌的汉字首字符和首字后的号码，
         * 设置后路线规划的结果将考虑该车牌在当前时间的限行路段
         * @param province 省份缩写
         * @param number 车牌号码
         */
        setProvinceAndNumber(province: string, number: string): void;

        // internal
        open(): void;
        close(): void;
    }
}
