/**
 * This contains methods for setting up an {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | AudioContext}.
 * Used internally by the {@link AudioListener | AudioListener} and {@link AudioLoader | AudioLoader} classes.
 * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API | Web Audio API}.
 * @see {@link https://threejs.org/docs/index.html#api/en/audio/AudioContext | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/AudioContext.js | Source}
 */
export namespace AudioContext {
    /**
     * Return the value of the variable `context` in the outer scope, if defined, otherwise set it to a new {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | AudioContext}.
     */
    function getContext(): AudioContext;

    /**
     * Set the variable `context` in the outer scope to `value`.
     * @param value
     */
    function setContext(context: AudioContext): void;
}
