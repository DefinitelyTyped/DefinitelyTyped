/// <reference types="amap-js-api" />

declare namespace AMap {
    namespace LineSearch {
        interface EventMap {
            complete: Event<"complete", SearchResult>;
            error: Event<"error", { info: string }>;
        }
        interface Options {
            /**
             * 页码
             * 默认值：1
             * 取值范围：1-100，超过取值范围按默认，超出实际页数按最大值返回
             */
            pageIndex?: number | undefined;
            /**
             * 单页显示结果条数
             * 默认值：20
             * 取值范围：1-100，超过取值范围按默认
             */
            pageSize?: number | undefined;
            /**
             * 公交线路所在城市
             * 默认值：“全国”
             * 可选值：cityname（中文或中文全拼）、citycode、adcode
             */
            city?: string | undefined;
            /**
             * 此项仅公交路线查询时有效，默认值：base，返回公交路线基本信息，当取值为：all，返回公交路线基本信息+详细信息
             */
            extensions?: "base" | "all" | undefined;
        }
        interface LineInfoBase {
            /**
             * 公交线路id，该id是唯一标识
             */
            id: string;
            /**
             * 线路名称
             */
            name: string;
            /**
             * 线路经纬度
             */
            path: LngLat[];
            /**
             * 所在城市的城市编码
             */
            citycode: string;
            /**
             * 公交类型列表
             */
            type: string;
            /**
             * 首发站
             */
            start_stop: string;
            /**
             * 终点站
             */
            end_stop: string;
        }
        interface BusStop {
            id: string;
            location: LngLat;
            name: string;
            sequence: number;
        }
        interface LineInfoExt extends LineInfoBase {
            /**
             * 首班车时间
             */
            stime: string;
            /**
             * 末班车时间
             */
            etime: string;
            /**
             * 起步票价，单位：元
             */
            basic_price: string;
            /**
             * 全程票价，单位：元
             */
            total_price: string;
            /**
             * 途径站，包括首发站和终点站
             */
            via_stops: BusStop[];
            /**
             * 全程距离，单位：千米
             */
            distance: string; // is string actually
            /**
             * 全程距离，单位：千米
             */
            bounds: Bounds;
            /**
             * 所属公交公司
             */
            company: string;
        }
        type LineInfo = LineInfoBase | LineInfoExt;
        interface SearchResult {
            /**
             * 成功状态文字描述
             */
            info: string;
            /**
             * 根据查询条件返回公交路线信息
             */
            lineInfo: LineInfo[];
            /**
             * 查无此公交站时，返回的建议关键字列表
             */
            keywordList?: any[] | undefined;
            /**
             * 查该城市无此公交站时，返回的建议城市列表
             */
            cityList?: any[] | undefined;
        }
        type SearchStatus = "complete" | "error" | "no_data";
    }
    class LineSearch extends EventEmitter {
        /**
         * 公交路线查询
         * @param options 选项
         */
        constructor(options?: LineSearch.Options);
        /**
         * 根据给定的公交线路id进行公交站点详情检索
         * @param id 公交线路的唯一标识
         * @param callback 回调
         */
        searchById(
            id: string,
            callback: (status: LineSearch.SearchStatus, result: string | LineSearch.SearchResult) => void,
        ): void;
        /**
         * 根据给定公交线路名称进行公交线路详情查询
         * @param keyword 名称
         * @param callback 回调
         */
        search(
            keyword: string,
            callback: (status: LineSearch.SearchStatus, result: string | LineSearch.SearchResult) => void,
        ): void;
        /**
         * 设置查询结果页码
         * @param pageIndex 页码，默认值：1
         */
        setPageIndex(pageIndex?: number): void;
        /**
         * 设置单页显示结果条数
         * @param pageSize 条数，默认值：20
         */
        setPageSize(pageSize?: number): void;
        /**
         * 设置查询城市
         * @param city 城市，默认值：“全国”，可选值：cityname（中文或中文全拼）、citycode、adcode
         */
        setCity(city?: string): void;
    }
}
