/**
 * 波形图
 */
declare class VolumeBar {
    /**
     * 绘制一个波形图。(如果已绘制过，不会再次绘制）。
     *
     * param {string} recorder_id - 要绘制在当前页面的DOM节点的ID。
     * param {AudioContext} audioCtx - 获取到的页面音频设备上下文。
     * param {Analysis} analyser - 获取到的页面音频数据解析器。
     * param {Object} mic - 获取到的页面音频麦克风设备。
     */
    constructor(recorder_id: string, audioCtx: AudioContext, analyser: AnalyserNode, mic: MediaStreamAudioSourceNode);

    /**
     * 显示波形图
     */
    show: () => void;

    /**
     * 获取频谱数据
     *
     * @param {Function} callback - 回调函数，返回音频强度（0-100）。
     */
    getFrequencyData: (callback: { soundIntensity: number }) => void;
}

declare module "chivox_h5sdk/src/html5/volumebar" {
    export default VolumeBar;
}
