/**
 * Html5音频播放器
 */
declare class Html5Player {
    /**
     * 创建一个Html5音频播放器。
     * @param {object} options - 初始化参数。格式参见：
     */
    constructor(options: {
        onInit: (message: string) => void;
        onError: (err: Error) => void;
        success: () => void;
    });

    /**
     * 远程加载音频。
     *
     * @param {object} options - 加载音频所需的参数。参数有：
     * @param {string} options.url - 要加载的音频URL地址。
     * @param {callback} options.success - 加载音频成功的Callback，格式：() => {}。
     * @param {callback} options.error - 加载音频失败后的Callback，格式：(err) => {}。
     */
    load: (options: {
        url: string;
        success: () => void;
        error: (err: any) => void;
    }) => void;

    /**
     * 播放已经加载的音频。
     *
     * @param {object} options - 播放音频所需的参数。参数有：
     * @param {int=} options.position - 播放位置，默认0。
     * @param {int=} options.duration - 播放时长。
     * @param {callback} options.onStart - 开始播放音频时的Callback，格式：(code, message) => {}。
     * @param {callback} options.onStop - 音频播放完成后的Callback，格式：(code, message) => {}。
     */
    play: (options: {
        position?: number;
        duration?: number;
        onStart: () => void;
        onStop: () => void;
    }) => void;

    /**
     * 手动停止音频播放。
     */
    stop: () => void;

    /**
     * 重置播放器状态。
     */
    reset: () => void;

    /**
     * 设置播放器播放音量。
     * @param {int} volume - 要设置的音量。 0 ~ 1
     */
    setVolume(volume: number): void;

    /**
     * 返回播放器播放音量。
     * @result {int} - 播放器当前音量。 0 ~ 1
     */
    getVolume: () => number;

    /*
     * 销毁播放器接口
     */

    dispose: () => void;
}

declare module "chivox_h5sdk/src/html5/html5player" {
    export default Html5Player;

    global {
        interface Window {
            Html5Player: typeof Html5Player;
        }
    }
}
