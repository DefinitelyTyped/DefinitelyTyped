/// <reference types="amap-js-api" />

declare namespace AMap {
    namespace CitySearch {
        interface EventMap {
            complete: Event<"complete", SearchResult>;
            error: Event<"error", { info: string }>;
        }
        interface SearchResult {
            /**
             * 城市名称
             */
            city: string;
            rectangle: string;
            /**
             * 城市范围
             */
            bounds: Bounds;
            /**
             * 成功信息
             */
            info: string;
            /**
             * 地区编号
             */
            adcode: string;
            /**
             * 查询信息码
             */
            infocode: string;
            /**
             * 省份
             */
            province: string;
            /**
             * 查询状态
             */
            status: string;
        }
        type SearchStatus = "error" | "complete" | "no_data";
    }
    /**
     * 根据IP返回对应城市信息
     */
    class CitySearch extends EventEmitter {
        /**
         * 自动获取用户IP，回调返回当前用户所在城市
         * @param callback 查询回调
         */
        getLocalCity(
            callback: (status: CitySearch.SearchStatus, result: CitySearch.SearchResult | string) => void,
        ): void;
        /**
         * 根据输入IP地址返回对应城市信息
         * @param ip IP
         * @param callback 查询回调
         */
        getCityByIp(
            ip: string,
            callback: (status: CitySearch.SearchStatus, result: CitySearch.SearchResult | string) => void,
        ): void;
    }
}
