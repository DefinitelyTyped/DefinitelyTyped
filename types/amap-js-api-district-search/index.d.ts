// Type definitions for non-npm package amap-js-api-district-search 1.4
// Project: https://lbs.amap.com/api/javascript-api/reference/search#m_AMap.DistrictSearch
// Definitions by: breeze9527 <https://github.com/breeze9527>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="amap-js-api" />

declare namespace AMap {
    namespace DistrictSearch {
        interface EventMap {
            error: Event<'error', { info: string; }>;
            complete: Event<'complete', SearchResult>;
        }
        type Level = 'country' | 'province' | 'city' | 'district' | 'biz_area';
        interface Options {
            /**
             * 关键字对应的行政区级别或商圈
             */
            level?: Level;
            /**
             * 是否显示商圈
             */
            showbiz?: boolean;
            /**
             * 是否返回行政区边界坐标点
             */
            extensions?: 'base' | 'all';
            /**
             * 显示下级行政区级数
             * 0：不返回下级行政区
             * 1：返回下一级行政区
             * 2：返回下两级行政区
             * 3：返回下三级行政区
             */
            subdistrict?: 0 | 1 | 2 | 3;
        }
        interface District {
            /**
             * 行政区名称
             */
            name: string;
            /**
             * 中心点经纬度坐标
             */
            center: LngLat;
            /**
             * 城市编码
             */
            citycode: string;
            /**
             * 区域编码
             */
            adcode: string;
            /**
             * 行政区划级别
             */
            level: Level;
            /**
             * 边界坐标集合
             */
            boundaries?: LngLat[][];
            /**
             * 下级行政区信息列表
             */
            districtList?: District[];
        }
        interface SearchResult {
            /**
             * 成功状态文字描述
             */
            info: string;
            /**
             * 行政区划列表
             */
            districtList: District[];
        }
        type SearchStatus = 'complete' | 'error' | 'no_data';
    }
    class DistrictSearch extends EventEmitter {
        /**
         * 行政区查询
         * @param options 选项
         */
        constructor(options?: DistrictSearch.Options);
        /**
         * 根据关键字查询行政区或商圈信息
         * @param keyword 关键词
         * @param callback 回调
         */
        search(
            keyword: string,
            callback: (status: DistrictSearch.SearchStatus, result: DistrictSearch.SearchResult | string) => void
        ): void;
        /**
         * 设置关键字对应的行政区级别或商圈
         * @param level 级别
         */
        setLevel(level?: DistrictSearch.Level): void;
        /**
         * 设置下级行政区级数
         * @param district 级数
         */
        setSubdistrict(district?: 0 | 1 | 2 | 3): void;
        // internal
        setExtensions(extensions?: boolean): void;
    }
}
