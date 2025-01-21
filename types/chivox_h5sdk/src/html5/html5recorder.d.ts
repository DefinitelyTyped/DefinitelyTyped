declare class ChivoxRecorder {
    constructor(options: import('../../options').ChivoxRecorderOptions)

    /**
     * 开始录音
     *
     * @param param 录音机参数
     */
    record(param: import('../../options').ChivoxRecordOptions): void

    /**
     * 停止录音
     */
    stopRecord(): void

    showVolumeBar(): void
}


declare module 'chivox_h5sdk/src/html5/html5recorder' {
    export default ChivoxRecorder
}
