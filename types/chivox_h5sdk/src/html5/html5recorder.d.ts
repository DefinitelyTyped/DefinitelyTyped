/**
 * 评测类型枚举
 *
 * https://www.chivox.com/opendoc/#/ChineseDoc/coreEn
 */
declare type ChivoxCoreType = `${import("../../enum").ChivoxCoreTypeEnum}`;

/**
 * Html5Recorder 类型定义
 */
declare class Html5Recorder {
    constructor(options: import("../../options").ChivoxRecorderOptions);

    /**
     * 开始录音
     *
     * @param param 录音机参数
     */
    record<T extends ChivoxCoreType>(param: import("../../options").ChivoxRecordOptions<T>): void;

    /**
     * 停止录音
     *
     * @param flag SDK 是否异常停止
     *
     * - flag = false 表示正常录音停止函数
     * - falg == true 表示录音过程出现异常
     */
    stopRecord: (flag?: boolean) => void;

    /**
     * 开始回放最后一次录音接口
     */
    startReplay(options: {
        onStop: () => void;
        onStart: () => void;
    }): void;

    /**
     * 停止回放接口
     */
    stopReplay: () => void;

    /**
     * 重置引擎接口
     */
    reset: (flag: boolean) => void;

    /**
     * 设置回放音量接口
     *
     * @param volume 音量大小 0 - 1
     */
    setVolume: (volume: number) => void;

    /**
     * 获取回放音量接口
     *
     * @result 录音机当前音量。 0 - 1
     */
    getVolume: () => number;

    /**
     * 设置录音机录音音量接口
     *
     * @param volume 音量大小 0 - 1
     */
    setMicVolume: (volume: number) => void;

    /**
     * 获取录音机录音音量接口
     *
     * @result 录音机当前音量。 0 ~ 1
     */
    getMicVolume: () => number;

    /**
     * 显示波形图接口
     *
     * @params 返回实时录音图谱回调，返回音量大小 0 - 100
     */
    showVolumeBar(
        callback?: ({ soundIntensity }: {
            soundIntensity: number;
        }) => void,
    ): void;

    /**
     * 销毁录音机引擎接口
     */
    dispose: () => void;

    /**
     * 测试连接接口
     */
    test_connection: () => void;
}

declare module "chivox_h5sdk/src/html5/html5recorder" {
    export default Html5Recorder;

    global {
        interface Window {
            Html5Recorder: typeof Html5Recorder;
        }
    }
}
