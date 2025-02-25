/**
 * 上传下载接口 [1100+]
 * 接口声明: { "name": "system.requesttask" }
 */

declare module "@system.requesttask" {
    interface RequestOptions {
        /**
         * 开发者服务器接口地址
         */
        url: string;
        /**
         * 请求的参数，可以是字符串，或者是 js 对象、Arraybuffer 对象。
         */
        data?: string | Record<string, any> | ArrayBuffer;
        /**
         * 请求的 header，会将其所有属性设置到请求的 header 部分。
         */
        header?: Record<string, string | number>;
        /**
         * 默认为 GET，可以是：OPTIONS，GET，HEAD，POST，PUT，DELETE，TRACE，CONNECT
         */
        method?: string;
        /**
         * 响应的数据类型，支持响应类型是 Text，Arraybuffer。
         */
        responseType?: string;
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            statusCode: number;
            data: string;
            headers: Record<string, string | number>;
        }) => void;
        /**
         * 失败的回调函数，可能会因为权限失败
         */
        fail?: (data: any, code: number) => void;
        /**
         * 结束的回调函数（调用成功、失败都会执行）
         */
        complete?: () => void;
    }

    interface RequestSuccessOptions {
        /**
         * 服务器状态 code
         */
        statusCode: number;
        /**
         * 参考 `responseType与success中data的关系` 部分
         * @description
         * |responseType|data|说明|
         * |---|---|---|
         * |无|String|服务器返回的 header 中 type 是 text 或 application/json、application/javascript、application/xml，值是文本内容，否则是存储的临时文件的 uri，临时文件如果是图片或者视频内容，可以将图片设置到 image 或 video 控件上显示|
         * |text|String|返回普通文本|
         * |json|Object|返回 js 对象|
         * |file|String|返回存储的临时文件的 uri|
         * |arraybuffer|ArrayBuffer|返回 ArrayBuffer 对象|
         */
        data: string | Record<string, any> | ArrayBuffer;
        /**
         * 服务器 response 的所有 header
         */
        headers: Record<string, string | number>;
    }

    interface RequestTask {
        abort(): void;
        /**
         * 监听 HTTP Response Header 事件，会比请求完成事件更早。
         */
        onHeadersReceived(callback: RequestTaskHeadersReveivedCallback): void;
        /**
         * 取消监听 HTTP Response Header 事件。callback 是可选的，如果不传则取消所有通过 onHeadersReceived 监听的 HTTP Response Header 事件。
         */
        offHeadersReceived(callback?: RequestTaskHeadersReveivedCallback): void;
    }

    type RequestTaskHeadersReveivedCallback = (
        /**
         * 开发者服务器返回的 HTTP Response Header
         */
        header: Record<string, string | number>,
    ) => void;

    function request(obj: RequestOptions): RequestTask;
}

declare module "quickapp:@system.requesttask" {
    export * from "@system.requesttask";
}
