// Type definitions for non-npm package amap-js-api-riding 1.4
// Project: https://lbs.amap.com/api/javascript-api/reference/route-search#AMap.Riding
// Definitions by: breeze9527 <https://github.com/breeze9527>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="amap-js-api" />
/// <reference types="amap-js-api-place-search" />

declare namespace AMap {
    enum RidingPolicy {
        DEFAULT = 0, // 推荐路线及最快路线综合
        RECOMMENDED = 1, // 推荐路线
        FASTEST = 2 // 最快路线
    }
    namespace Riding {
        interface EventMap {
            complete: Event<'complete', SearchResult>;
            error: Event<'error', { info: string; }>;
        }
        interface Options {
            /**
             * AMap.Map对象, 展现结果的地图实例。
             * 当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上
             */
            map?: Map;
            /**
             * 骑行路线规划策略
             */
            policy?: RidingPolicy;
            /**
             * 结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示
             */
            panel?: string | HTMLElement;
            /**
             * 设置隐藏路径规划的起始点图标，设置为true：隐藏图标；设置false：显示图标 默认值为：false
             */
            hideMarkers?: boolean;
            /**
             * 使用map属性时，绘制的规划线路是否显示描边，默认为true
             */
            isOutline?: boolean;
            /**
             * 使用map属性时，绘制的规划线路是否显示描边，默认为"white"
             */
            outlineColor?: string;
            /**
             * 用于控制在路径规划结束后，是否自动调整地图视野使绘制的路线处于视口的可见范围
             */
            autoFitView?: boolean;
            // internal

            showDir?: boolean;
        }
        interface SearchPoint {
            // 地点名称
            keyword: string;
        }
        interface RideStep {
            /**
             * 本路段的起点坐标
             */
            start_location: LngLat;
            /**
             * 本路段的终点坐标
             */
            end_location: LngLat;
            /**
             * 此路段说明，如“沿北京南站路骑行565米右转”
             */
            instruction: string;
            /**
             * 道路
             */
            road: string;
            /**
             * 步行方向
             */
            orientation: string;
            /**
             * 此路段距离，单位：米
             */
            distance: number;
            /**
             * 此路段预计使用时间，单位：秒
             */
            time: number;
            /**
             * 此路段坐标集合
             */
            path: LngLat[];
            /**
             * 本骑行子路段完成后动作
             */
            action: string;
            /**
             * @deprecated
             * 本骑行子路段完成后辅助动作，一般为到达某个目的地时返回
             * 文档中有此字段但是实际代码中并没有返回
             */
            assist_action?: string;
        }
        interface RideRoute {
            /**
             * 起点到终点总步行距离，单位：米
             */
            distance: number;
            /**
             * 步行时间预计，单位：秒
             */
            time: number;
            /**
             * 路段列表，以道路名称作为分段依据，将整个骑行导航方案分隔成若干路段
             */
            rides: RideStep[];
        }
        interface SearchResultCommon {
            /**
             * 成功状态说明
             */
            info: string;
            /**
             * 骑行导航起点坐标
             */
            origin: LngLat;
            /**
             * 骑行导航终点坐标
             */
            destination: LngLat;
            /**
             * 骑行导航路段数目
             */
            count: number;
            /**
             * 骑行规划路线列表
             */
            routes: RideRoute[];
        }
        interface Poi {
            /**
             * 坐标
             */
            location: LngLat;
            /**
             * 名称
             */
            name: string;
            /**
             * 类型
             */
            type: 'start' | 'end';
        }
        interface SearchResultBase extends SearchResultCommon {
            /**
             * 骑行导航起点
             */
            start?: Poi;
            /**
             * 骑行导航终点
             */
            end?: Poi;
        }
        interface SearchResultExt extends SearchResultCommon {
            /**
             * 骑行导航起点
             */
            start: PlaceSearch.PoiExt;
            /**
             * 骑行导航终点
             */
            end: PlaceSearch.PoiExt;
            /**
             * 骑行导航起点名称
             */
            originName: string;
            /**
             * 骑行导航终点名称
             */
            destinationName: string;
        }
        type SearchResult = SearchResultBase | SearchResultExt;
        type SearchStatus = 'complete' | 'error' | 'no_data';
    }

    class Riding extends EventEmitter {
        constructor(options?: Riding.Options);
        /**
         * 根据起点和终点坐标，实现骑行路径规划
         * @param origin 起点坐标
         * @param destination 终点坐标
         * @param callback 查询回调
         */
        search(
            origin: LocationValue,
            destination: LocationValue,
            callback?: (status: Riding.SearchStatus, result: Riding.SearchResultBase | string) => void
        ): void;
        /**
         * 根据起点终点名称查询路径规划
         * @param point 名称数组
         * @param callback 查询回调
         */
        search(
            point: Riding.SearchPoint[],
            callback?: (status: Riding.SearchStatus, result: Riding.SearchResultExt | string) => void
        ): void;
        /**
         * 清除搜索的结果
         */
        clear(): void;

        // internal

        setPolicy(policy: RidingPolicy): void;
        open(): void;
        close(): void;
    }
}
