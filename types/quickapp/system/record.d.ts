/**
 * 录音
 * 接口声明: {"name": "system.record"}
 */
declare module "@system.record" {
    interface StartOptions {
        /**
         * 录音时长，单位为 ms。如果 duration 为有效值将在达到指定值时停止录音
         * [1010+]
         */
        duration?: number;
        /**
         * 采样率。不同的音频格式所支持的采样率范围不同。对于 aac 格式，默认设置为 8000，建议使用 8000/16000/44100
         * [1010+]
         */
        sampleRate?: number;
        /**
         * 录音通道数，有效值 1/2
         * [1010+]
         */
        numberOfChannels?: number;
        /**
         * 编码码率。编码码率的取值与采样率和音频格式有关。对 aac 格式，建议按照下表中取值范围来选择编码码率
         * [1010+]
         * @description
         * |采样率|编码码率|
         * |---|---|
         * |8000|16000 ~ 48000|
         * |16000|24000 ~ 96000|
         * |44100|64000 ~ 320000|
         */
        encodeBitRate?: number;
        /**
         * PCM音频数据帧大小，单位 Byte。传入 frameSize 后，每录制指定帧大小的内容后，会通过 onframerecorded 回调录制的文件内容，不指定则不会回调。
         *
         * 注意回调帧数据大小不一定是设置的frameSize，有可能会调整为一个合适的值 。
         *
         * [1200+]
         */
        frameSize?: number;
        /**
         * 音频格式，有效值 3gpp/amr_nb/aac。缺省为 3gpp
         * [1010+]
         */
        format?: string;
        /**
         * 成功回调
         */
        success?: (data: StartSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |201|用户拒绝授权，获取录音权限失败|
         * |202|参数错误。如指定 bufferSize 参数 > 0 时，format 不为 pcm 格式则返回此错误 [1200+]|
         * |207|用户拒绝并勾选不再询问复选框 [1100+]|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface StartSuccessOptions {
        /**
         * 录音文件的存储路径，在应用的缓存目录中
         */
        uri: string;
    }

    /**
     * 检测应用是否存在。支持检测原生应用是否已安装 [权限要求:录音]
     */
    function start(obj?: StartOptions): void;

    interface OnfremerecordedOptions {
        /**
         * 录制的音频数据帧。通常音频数据帧大小为指定的 bufferSize,但是如果指定的 bufferSize 太小则会自动调整为一个合适的大小。
         */
        frameBuffer: ArrayBuffer;
        /**
         * 是否是最后一帧数据。
         */
        isLastFrame: boolean;
    }

    /**
     * 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。
     * [1200+]
     */
    function onframerecorded(data: OnfremerecordedOptions): void;

    /**
     * 停止录音
     */
    function stop(): void;
}

declare module "quickapp:@system.record" {
    export * from "@system.record";
}
