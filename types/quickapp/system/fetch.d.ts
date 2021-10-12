/**
 * 数据请求
 * 接口声明: {"name": "system.fetch"}
 */
declare module '@system.fetch' {
    /**
     * 获取网络数据
     * @param obj
     */
    function fetch(obj: {
        /**
         * 资源url
         */
        url: string;
        /**
         * 请求的参数，可以是字符串，或者是 js 对象、arraybuffer 对象。参考 data与Content-Type关系 部分
         * [1030+]
         */
        data?: string | object | ArrayBuffer;
        /**
         * 请求的 header，会将其所有属性设置到请求的 header 部分。User-Agent设置在1040版本开始支持。示例：{"Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,en-US;q=0.8,en;q=0.6"}
         */
        header?: object;
        /**
         * 默认为 GET，可以是：OPTIONS，GET，HEAD，POST，PUT，DELETE，TRACE，CONNECT
         */
        method?: string;
        /**
         * 支持返回类型是 text，json，file，arraybuffer，默认会根据服务器返回 header 中的 Content-Type 确定返回类型，详见 success返回值。
         * [1030+]
         */
        responseType?: string;
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 服务器状态 code
             */
            code: number;
            /**
             * 参考 responseType与success中data关系 部分
             * [1030+]
             */
            data: string | object | ArrayBuffer;
            /**
             * 服务器 response 的所有 header
             */
            headers: object;
        }) => void;
        /**
         * 失败的回调函数
         */
        fail?: (data: any, code: number) => void;
        /**
         * 结束的回调函数（调用成功、失败都会执行）
         */
        complete?: () => void;
    }): void;
}
