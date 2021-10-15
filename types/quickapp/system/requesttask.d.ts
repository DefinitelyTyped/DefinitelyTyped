/**
 * 上传下载接口 [1100+]
 * 接口声明: { "name": "system.requesttask" }
 */

declare module '@system.requesttask' {
    function request(obj: {
        url: string;
        data: string | object | ArrayBuffer;
        header: object;
        method: string;
        responseType: string;
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 服务器状态 code
             */
            statusCode: number;
            /**
             * 参考 responseType与success中data的关系 部分
             */
            data: string;
            /**
             * 服务器 response 的所有 header
             */
            headers: object;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): RequestTask;
}

interface RequestTask {
    abort(): void;
    /**
     * 监听 HTTP Response Header 事件，会比请求完成事件更早。
     * @param callback HTTP Response Header 事件的回调函数，callback 的第一个参数为响应头对象
     */
    onHeadersReceived(
        callback: (data: {
            /**
             * 开发者服务器返回的 HTTP Response Header
             */
            header: object;
        }) => void,
    ): void;
    /**
     * 取消监听 HTTP Response Header 事件。callback 是可选的，如果不传则取消所有通过 onHeadersReceived 监听的 HTTP Response Header 事件。
     * @param callback HTTP Response Header 事件的回调函数
     */
    offHeadersReceived(callback?: () => void): void;
}
