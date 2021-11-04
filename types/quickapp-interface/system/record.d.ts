/**
 * 录音
 * 接口声明: {"name": "system.record"}
 */
declare module '@system.record' {
    /**
     * 检测应用是否存在。支持检测原生应用是否已安装 [权限要求:录音]
     * @param obj
     */
    function start(obj: {
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
         */
        encodeBitRate?: number;
        /**
         * 音频格式，有效值 3gpp/amr_nb/aac。缺省为 3gpp
         * [1010+]
         */
        format?: string;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 录音文件的存储路径，在应用的缓存目录中
             */
            uri: string;
        }) => void;
        /**
         * 失败回调
         * 201: 用户拒绝授权，获取录音权限失败
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 停止录音
     */
    function stop(): void;
}
