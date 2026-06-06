/**
 * Manages the global audio context in the engine.
 *
 * @hideconstructor
 */
export class AudioContext {
    /**
     * Returns the global native audio context.
     *
     * @return {Window.AudioContext} The native audio context.
     */
    static getContext(): AudioContext;
    /**
     * Allows to set the global native audio context from outside.
     *
     * @param {Window.AudioContext} value - The native context to set.
     */
    static setContext(value: AudioContext): void;
}
