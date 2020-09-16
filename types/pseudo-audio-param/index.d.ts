// Type definitions for pseudo-audio-param 1.3
// Project: https://github.com/mohayonao/pseudo-audio-param/
// Definitions by: Drew Petersen <https://github.com/kirbysayshi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export = PseudoAudioParam;
export as namespace PseudoAudioParam;

interface PseudoAudioParamEvent {
    type: string;
    time: number;
}

/** Simulate scheduled AudioParam values */
declare class PseudoAudioParam {
    events: PseudoAudioParamEvent[];

    constructor(defaultValue: number);

    /**
     * Return scheduled value at time
     */
    getValueAtTime(time: number): number;

    /**
     * Apply scheduled methods to the provided audioParam. If reset is `true`,
     * cancel all events of AudioParam before applying
     */
    applyTo(audioParam: AudioParam, reset?: boolean): PseudoAudioParam;

    setValueAtTime(value: number, time: number): PseudoAudioParam;
    linearRampToValueAtTime(value: number, time: number): PseudoAudioParam;
    exponentialRampToValueAtTime(value: number, time: number): PseudoAudioParam;
    setTargetAtTime(
        value: number,
        time: number,
        timeConstant: number
    ): PseudoAudioParam;
    setValueCurveAtTime(
        values: number[],
        time: number,
        duration: number
    ): PseudoAudioParam;
    cancelScheduledValues(time: number): PseudoAudioParam;
    cancelAndHoldAtTime(time: number): PseudoAudioParam;
}
