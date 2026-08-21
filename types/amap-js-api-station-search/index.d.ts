/// <reference types="amap-js-api" />

declare namespace AMap {
    namespace StationSearch {
        interface EventMap {
            complete: Event<"complete", SearchResult>;
            error: Event<"error", { info: string }>;
        }
        interface Options {
            /**
             * 页码
             * 默认值：1, 取值范围：1-100
             */
            pageIndex?: number | undefined;
            /**
             * 单页显示结果条数
             * 默认值：20, 取值范围：1-100
             */
            pageSize?: number | undefined;
            /**
             * 公交站点所在城市
             * 可选值：cityname（中文或中文全拼）、citycode、adcode
             * 默认值：“全国”
             */
            city?: string | undefined;
        }
        interface Busline {
            /**
             * 公交线路id，该id是唯一标识
             */
            id: string;
            /**
             * 公交线路名称
             */
            name: string;
            /**
             * 公交线路途经此站的经纬度
             */
            location: LngLat;
            /**
             * 首发站名称
             */
            start_stop: string;
            /**
             * 首发站名称
             */
            end_stop: string;
        }
        interface StationInfo {
            /**
             * 公交站点id，该id是唯一标识
             */
            id: string;
            /**
             * 公交站点名称
             */
            name: string;
            /**
             * 公交站点经纬度
             */
            location: LngLat;
            /**
             * 区域编码
             */
            adcode: string;
            /**
             * 城市编码
             */
            citycode: string;
            /**
             * 途经此站点的公交路线列表
             */
            buslines: Busline[];
        }
        interface CityInfo {
            /**
             * 城市名称
             */
            name: string;
            /**
             * 城市编码
             */
            citycode: string;
            /**
             * 行政区编码
             */
            adcode: string;
            /**
             * 该城市的建议结果数目
             */
            count: number;
        }
        interface SearchResult {
            /**
             * 成功状态文字描述
             */
            info: string;
            /**
             * 根据查询条件返回公交站点信息
             */
            stationInfo: StationInfo[];
            /**
             * 查无此公交站时，返回的建议关键字列表，可根据建议关键字查询
             */
            keywordList?: string[] | undefined;
            /**
             * 查该城市无此公交站时，返回的建议城市列表
             */
            cityList?: CityInfo[] | undefined;
        }
        type SearchStatus = "complete" | "error" | "no_data";
    }
    /**
     * 公交站点查询服务
     */
    class StationSearch extends EventEmitter {
        constructor(options?: StationSearch.Options);
        /**
         * 根据给定的公交站点id进行公交站点详情检索
         * @param id 公交站点的唯一标识
         * @param callback 查询回调
         */
        searchById(
            id: string,
            callback: (status: StationSearch.SearchStatus, result: StationSearch.SearchResult | string) => void,
        ): void;
        /**
         * 根据给定公交站点名称进行公交站点详情查询
         * @param keyword 查询关键词，多个关键字用"|"分割
         * @param callback 查询回调
         */
        search(
            keyword: string,
            callback: (status: StationSearch.SearchStatus, result: StationSearch.SearchResult | string) => void,
        ): void;
        /**
         * 设置查询结果页码
         * @param pageIndex 页码,取值范围：1-100
         */
        setPageIndex(pageIndex?: number): void;
        /**
         * 设置单页显示结果条数
         * @param pageSize 条数,取值范围：1-100
         */
        setPageSize(pageSize?: number): void;
        /**
         * 设置查询城市
         * @param city 城市:cityname（中文或中文全拼）、citycode或adcode
         */
        setCity(city?: string): void;
    }
}
