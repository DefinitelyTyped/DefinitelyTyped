declare namespace AMap {
    namespace convertFrom {
        interface Result {
            /**
             * 成功状态文字描述
             */
            info: string; // 'ok'
            /**
             * 高德坐标集合
             */
            locations: LngLat[];
        }
        type Type = 'gps' | 'baidu' | 'mapbar';
        type SearchStatus = 'complete' | 'error';
    }
    /**
     * 为坐标转换类，支持将其他坐标系的坐标点转换为高德坐标系。
     * @param lnglat 待转换坐标
     * @param type 用于说明是哪个服务商的坐标
     * @param callback 转换完成后的回调函数
     */
    function convertFrom(
        lnglat: LocationValue | LocationValue[],
        type: convertFrom.Type | null,
        callback: (status: convertFrom.SearchStatus, result: string | convertFrom.Result) => void
    ): void;
}
