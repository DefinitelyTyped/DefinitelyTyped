/**
 * 下载接口 [1100+]
 * 接口声明: { "name": "system.downloadtask" }
 */

interface DownloadTask {
    /**
     * 中断下载任务
     */
    abort(): void;
    /**
     * 监听下载进度变化事件。
     * @param callback 下载进度变化事件的回调函数
     */
    onProgressUpdate(
        callback: (obj: {
            /**
             * 下载进度百分比
             */
            progress: number;
            /**
             * 已经下载的数据长度，单位 Bytes
             */
            totalBytesWritten: number;
            /**
             * 预期需要下载的数据总长度，单位 Bytes
             */
            totalBytesExpectedToWrite: number;
        }) => void,
    ): void;
    /**
     * 取消监听下载进度变化事件。callback 是可选的，如果不传则取消所有通过 onProgressUpdate 监听的下载进度变化事件。
     * @param callback HTTP Response Header 事件的回调函数
     */
    offProgressUpdate(callback?: () => void): void;
    /**
     * 监听 HTTP Response Header 事件，会比下载完成事件更早。
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

declare module '@system.downloadtask' {
    function downloadFile(obj: {
        /**
         * 开发者服务器接口地址
         */
        url: string;
        /**
         * 请求的参数，可以是字符串，或者是 js 对象、Arraybuffer 对象。
         */
        data?: string | object | ArrayBuffer;
        /**
         * 下载请求的 header，会将其所有属性设置到请求的 header 部分。
         */
        header?: object;
        /**
         * 指定文件下载后存储的路径 (本地路径)。支持 internal URI 的 Cache、Files 以及 Mass 目录，默认存储在应用 Cache 目录下。
         */
        filePath?: string;
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 服务器状态 code
             */
            statusCode: number;
            /**
             * 用户文件路径 (本地路径)
             */
            filePath: string;
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
    }): DownloadTask;
}
