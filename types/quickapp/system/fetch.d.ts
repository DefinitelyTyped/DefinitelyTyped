/**
 * 数据请求
 * 接口声明: {"name": "system.fetch"}
 */
declare module "@system.fetch" {
    interface FetchOptions {
        /**
         * 资源 url
         */
        url: string;
        /**
         * 请求的参数，可以是字符串，或者是 js 对象、arraybuffer 对象。参考 data与Content-Type关系 部分
         * @description
         * |data|Content-Type|说明|
         * |---|---|---|
         * |String|不设置|Content-Type 默认为 text/plain，data 值作为请求的 body|
         * |String|任意 Type|data 值作为请求的 body|
         * |Object|不设置|Content-Type 默认为 application/x-www-form-urlencoded，data 按照 url 规则进行 encode 拼接作为请求的 body|
         * |Object|application/x-www-form-urlencoded|data 按照 url 规则进行 encode 拼接作为请求的 body|
         * |Object|application/x-www-form-urlencoded 之外的任意 type|1010 以前的版本会调用失败；从 1010 版本开始，如果 manifest 中申明的 minPlatformVersion>=1010，会将 data 转为字符串作为请求的 body|
         * |ArrayBuffer [1030+]|不设置|Content-Type 默认为 application/octet-stream，data 值作为请求的 body|
         * |ArrayBuffer [1030+]|任意 Type|data 值作为请求的 body|
         */
        data?: string | Record<string, any> | ArrayBuffer;
        /**
         * 请求的 header，会将其所有属性设置到请求的 header 部分。User-Agent 设置在1040版本开始支持。示例：{"Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,en-US;q=0.8,en;q=0.6"}
         */
        header?: Record<string, string | number>;
        /**
         * 默认为 GET，可以是：OPTIONS，GET，HEAD，POST，PUT，DELETE，TRACE，CONNECT, PATCH `1200+`
         */
        method?: string;
        /**
         * 支持返回类型是 text，json，file，arraybuffer，默认会根据服务器返回 header 中的 Content-Type 确定返回类型，详见 `success返回值`。
         * [1030+]
         */
        responseType?: string;
        /**
         * 成功返回的回调函数
         */
        success?: (data: FetchSuccessOptions) => void;
        /**
         * 失败的回调函数，可能会因为权限失败
         */
        fail?: (data: any, code: number) => void;
        /**
         * 结束的回调函数（调用成功、失败都会执行）
         */
        complete?: () => void;
    }

    interface FetchSuccessOptions {
        /**
         * 服务器状态 code
         */
        code: number;
        /**
         * 参考 `responseType与success中data关系` 部分
         * @description
         * |responseType|data|说明|
         * |---|---|---|
         * |无|String|服务器返回的 header 中 type 是 text/*或 application/json、application/javascript、application/xml，值是文本内容，否则是存储的临时文件的 uri，临时文件如果是图片或者视频内容，可以将图片设置到 image 或 video 控件上显示|
         * |text|String|返回普通文本|
         * |json|Object1030+|返回 js 对象|
         * |file|String|返回存储的临时文件的 uri|
         * |arraybuffer|ArrayBuffer 1030+|返回 ArrayBuffer 对象|
         */
        data: string | Record<string, any> | ArrayBuffer;
        /**
         * 服务器 response 的所有 header
         */
        headers: Record<string, string | number>;
    }

    /**
     * 获取网络数据
     * @param options
     */
    function fetch(options: FetchOptions): void;
}

declare module "quickapp:@system.fetch" {
    export * from "@system.fetch";
}
