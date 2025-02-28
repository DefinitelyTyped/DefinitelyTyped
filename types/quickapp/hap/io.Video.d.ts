/**
 * 视频
 * 接口声明: { "name": "hap.io.Video" }
 */
declare module "@hap.io.Video" {
    interface VideoCreationOptions {
        /**
         * 原视频文件地址，必填
         */
        uri: string;
        /**
         * 压缩后视频的高，单位像素，默认原视频高。
         *
         * 部分视频压缩后实际高度会向上对齐16位，原视频旋转角度为90或270时，压缩后实际宽高会和所设宽高互换，可选
         */
        height?: number;
        /**
         * 压缩后视频的宽，单位像素，默认原视频宽。
         *
         * 部分视频压缩后实际宽度会向上对齐16位，原视频旋转角度为90或270时，压缩后实际宽高会和所设宽高互换，可选
         */
        width?: number;
        /**
         * 压缩后视频的码率，单位bps(比特/秒)，默认原视频码率的1/2。
         *
         * 受硬件平台限制，无法精确控制实际压缩后的码率与所设定码率一致，可选
         */
        bitrate?: number;
        /**
         * 压缩后视频的帧率，单位fps(帧/秒)，默认原视频帧率，若获取不到原视频帧率，则默认为30。
         *
         * 受硬件平台限制，无法精确控制实际压缩后的帧率与所设定帧率一致，可选
         */
        framerate?: number;
    }

    interface OnProgressUpdateCallbackOptions {
        /**
         * 压缩进度，取值范围0 - 100，每秒有变化时更新
         */
        progress: number;
    }

    type OnProgressUpdateCallback = (data: OnProgressUpdateCallbackOptions) => void;

    interface CompressVideoSuccessOptions {
        /**
         * 压缩后视频文件地址
         */
        uri: string;
        /**
         * 视频文件名称
         */
        name: string;
        /**
         * 视频文件大小，单位B
         */
        size: string;
    }

    interface CompressVideoOptions {
        /**
         * 成功回调
         */
        success?: (data: CompressVideoSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |200|接口功能异常，可能原因：压缩任务已执行过 abort、系统版本过低(Android L 或以上才支持)|
         * |202|参数错误，可能原因：uri 不合法、所设宽高为奇数、所设码率已高于原码率、所设参数过低或过高超出设备支持范围|
         * |203|找不到任务实例|
         * |205|已发起了任务执行，无需再调用第二次|
         * |300|IO 错误|
         * |1001|原视频无效，可能原因：传来的文件不是视频|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface AbortOptions {
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |200|该任务已经执行完成或已被中断|
         * |203|找不到任务实例|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetVideoInfoSuccessOptions {
        /**
         * 视频文件地址
         */
        uri: string;
        /**
         * 视频文件名称
         */
        name: string;
        /**
         * 视频文件大小，单位B
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
         * 视频码率，单位bps(比特/秒)
         */
        bitrate: number;
        /**
         * 视频帧率，单位fps(帧/秒)。部分机型可能返回为空
         */
        framerate: number | null;
    }

    interface GetVideoInfoOptions {
        /**
         * 视频文件地址
         */
        uri: string;
        /**
         * 成功回调
         */
        success?: (data: GetVideoInfoSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |200|接口功能异常|
         * |202|参数错误|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetVideoThumbnailSuccessOptions {
        /**
         * 缩略图文件地址
         */
        uri: string;
    }

    interface GetVideoThumbnailOptions {
        /**
         * 视频文件地址
         */
        uri: string;
        /**
         * 成功回调
         */
        success?: (data: GetVideoThumbnailSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |200|接口功能异常|
         * |202|参数错误|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    /**
     * 创建一个视频压缩任务实例
     */
    export default class Video {
        constructor(options: VideoCreationOptions);

        /**
         * 对压缩任务注册进度监听
         */
        set onprogressupdate(callback: OnProgressUpdateCallback);

        /**
         * 执行压缩视频任务
         */
        compressVideo(obj?: CompressVideoOptions): void;

        /**
         * 放弃执行该压缩任务，若该压缩任务正在进行，则中断压缩进程
         */
        abort(options?: AbortOptions): void;

        /**
         * 获取视频信息
         */
        static getVideoInfo(options: GetVideoInfoOptions): void;

        /**
         * 获取视频缩略图
         */
        static getVideoThumbnail(options: GetVideoThumbnailOptions): void;
    }
}

declare module "quickapp:@hap.io.Video" {
    export * from "@hap.io.Video";
    import video from "@hap.io.Video";
    export default video;
}
