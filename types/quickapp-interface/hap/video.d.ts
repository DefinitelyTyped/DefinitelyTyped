/**
 * 视频
 * 接口声明: { "name": "hap.io.Video" }
 */
declare module '@hap.io.Video' {
    /**
     * 1080+
     * @param callback
     */
    function onprogressupdate(
        callback: (data: {
            /**
             * 压缩进度，0~100，每秒有变化时更新
             */
            progress: number;
        }) => {},
    ): void;

    function compressVideo(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 压缩后视频文件地址
             */
            uri: string;
            /**
             * 视频文件名称
             */
            name: string;
            /**
             * 视频文件大小，单位 B
             */
            size: string;
        }) => void;
        /**
         * 失败回调
         * 200: 接口功能异常，可能原因：压缩任务已执行过 abort、系统版本过低(Android L 或以上才支持)
         * 202: 参数错误，可能原因：uri 不合法、所设宽高为奇数、所设码率已高于原码率、所设参数过低或过高超出设备支持范围
         * 203: 找不到任务实例
         * 205: 已发起了任务执行，无需再调用第二次
         * 300: IO 错误
         * 1001: 原视频无效，可能原因：传来的文件不是视频
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    function abort(obj: {
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * 200: 该任务已经执行完成或已被中断
         * 203: 找不到任务实例
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    function getVideoInfo(obj: {
        /**
         * 视频文件地址
         */
        uri: string;
        /**
         * 成功回调
         */
        success?: (obj: {
            /**
             * 视频文件地址
             */
            uri: string;
            /**
             * 视频文件名称
             */
            name: string;
            /**
             * 视频文件大小，单位 B
             */
            size: string;
            /**
             * 视频高度，单位像素
             */
            height: number;
            /**
             * 视频宽度，单位像素
             */
            width: number;
            /**
             * 视频码率，单位 bps(比特/秒)
             */
            bitrate: number;
            /**
             * 视频帧率，单位 fps(帧/秒)。部分机型可能返回为空
             */
            framerate: number;
        }) => void;
        /**
         * 失败回调
         * 200: 接口功能异常
         * 202: 参数错误
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    function getVideoThumbnail(obj: {
        /**
         * 视频文件地址
         */
        uri: string;
        /**
         * 成功回调
         */
        success?: (obj: {
            /**
             * 缩略图文件地址
             */
            uri: string;
        }) => void;
        /**
         * 失败回调
         * 200: 接口功能异常
         * 202: 参数错误
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;
}
