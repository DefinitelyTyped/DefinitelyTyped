/// <reference types="amap-js-api" />

declare namespace AMap {
    namespace Autocomplete {
        interface EventMap {
            complete: Event<"complete", SearchResult | { info: string }>;
            error: Event<"error", { info: string }>;
            select: Event<"select", { tip: Tip }>;
            choose: Event<"choose", { tip: Tip }>;
        }
        type DataType = "all" | "bus" | "poi" | "busline";
        interface Options {
            /**
             * 输入提示时限定POI类型，多个类型用“|”分隔
             */
            type?: string | undefined;
            /**
             * 输入提示时限定城市
             */
            city?: string | undefined;
            /**
             * 返回的数据类型
             */
            datatype?: DataType | undefined;
            /**
             * 是否强制限制在设置的城市内搜索
             */
            citylimit?: boolean | undefined;
            /**
             * 指定输入框
             */
            input?: string | HTMLInputElement | undefined;
            /**
             * 指定输出面板
             */
            output?: string | HTMLDivElement | undefined;
            /**
             * 是否在input位于页面较下方的时候自动将输入面板显示在input上方以避免被遮挡
             */
            outPutDirAuto?: boolean | undefined;

            // internal
            closeResultOnScroll?: boolean | undefined;
            lang?: Lang | undefined;
        }
        interface Tip {
            /**
             * 名称
             */
            name: string;
            /**
             * 所属区域
             */
            district: string;
            /**
             * 区域编码
             */
            adcode: string;
            /**
             * 地址
             */
            address: string;
            /**
             * 城市
             */
            city: any[];
            /**
             * ID
             */
            id: string;
            /**
             * 坐标经纬度
             */
            location: LngLat;
            /**
             * 类型编码
             */
            typecode: string;
        }
        interface SearchResult {
            /**
             * 查询状态说明
             */
            info: string;
            /**
             * 输入提示条数
             */
            count: number;
            /**
             * 输入提示列表
             */
            tips: Tip[];
        }
        type SearchStatus = "complete" | "error" | "no_data";
    }
    class Autocomplete extends EventEmitter {
        /**
         * 输入提示，根据输入关键字提示匹配信息
         * @param options 选项
         */
        constructor(options?: Autocomplete.Options);
        /**
         * 根据输入关键字提示匹配信息
         * @param keyword 关键字
         * @param callback 回调
         */
        search(
            keyword: string,
            callback: (status: Autocomplete.SearchStatus, result: Autocomplete.SearchResult | string) => void,
        ): void;
        /**
         * 设置提示Poi类型，多个类型用“|”分隔
         * @param type Poi类型
         */
        setType(type?: string): void;
        /**
         * 设置城市
         * @param city 城市
         */
        setCity(city?: string): void;
        /**
         * 设置是否强制限制城市
         * @param cityLimit 是否强制限制城市
         */
        setCityLimit(cityLimit: boolean): void;

        // internal
        /**
         * 设置查询语言
         * @param lang 语言
         */
        setLang(lang?: Lang): void;
        /**
         * 返回查询语言
         */
        getLang(): Lang | undefined;
    }
}
