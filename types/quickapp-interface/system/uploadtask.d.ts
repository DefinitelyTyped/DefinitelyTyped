/**
 * 上传接口 [1100+]
 * 接口声明: { "name": "system.uploadtask" }
 */

declare module '@system.uploadtask' {
    /**
     * 创建一个上传请求，每次成功调用 uploadtask.uploadFile 将返回本次请求的 UploadTask 实例。
     */
    function uploadFile(obj: {
        /**
         * 开发者服务器接口地址
         */
        url: string;
        /**
         * 要上传文件资源的路径 (本地路径)
         */
        filePath: string;
        /**
         * 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容
         */
        name: string;
        /**
         * 请求的 header，会将其所有属性设置到请求的 header 部分
         */
        header?: object;
        /**
         * HTTP 请求中其他额外的 form data
         */
        formData?: object;
        /**
         * 超时时间，单位为毫秒
         */
        timeout: number;
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 服务器状态 code
             */
            statusCode: number;
            /**
             * 开发者服务器返回的数据
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
    }): UploadTask;
}

interface UploadTask {
    /**
     * 中断上传任务
     */
    abort(): void;
    /**
     * 监听上传进度变化事件。
     * @param callback 上传进度变化事件的回调函数
     */
    onProgressUpdate(
        callback: (data: {
            /**
             * 上传进度百分比
             */
            progress: number;
            /**
             * 已经上传的数据长度，单位 Bytes
             */
            totalBytesSent: number;
            /**
             * 预期需要上传的数据总长度，单位 Bytes
             */
            totalBytesExpectedToSend: number;
        }) => void,
    ): void;

    /**
     * 取消监听上传进度变化事件。callback 是可选的，如果不传则取消所有通过 onProgressUpdate 监听的上传进度变化事件。
     */
    offProgressUpdate(callback?: () => void): void;
    /**
     * 监听 HTTP Response Header 事件，会比请求完成事件更早。
     * @param callback 开发者服务器返回的 HTTP Response Header，callback 的第一个参数为响应头对象
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
     * 取消监听 HTTP Response Header 事件，callback 是可选的，如果不传则取消所有通过 onHeadersReceived 监听的 HTTP Response Header 事件。
     * @param callback HTTP Response Header 事件的回调函数
     */
    offHeadersReceived(callback?: () => void): void;
}
