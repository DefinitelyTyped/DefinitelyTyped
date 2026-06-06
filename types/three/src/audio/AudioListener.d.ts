import { Object3D } from "../core/Object3D.js";

/**
 * The class represents a virtual listener of the all positional and non-positional audio effects
 * in the scene. A three.js application usually creates a single listener. It is a mandatory
 * constructor parameter for audios entities like {@link Audio} and {@link PositionalAudio}.
 *
 * In most cases, the listener object is a child of the camera. So the 3D transformation of the
 * camera represents the 3D transformation of the listener.
 */
export class AudioListener extends Object3D {
    /**
     * The native audio context.
     */
    readonly context: AudioContext;
    /**
     * The gain node used for volume control.
     */
    readonly gain: GainNode;
    /**
     * An optional filter.
     *
     * Defined via {@link AudioListener#setFilter}.
     *
     * @default null
     */
    readonly filter: AudioNode | null;
    /**
     * Time delta values required for `linearRampToValueAtTime()` usage.
     *
     * @default 0
     */
    readonly timeDelta: number;
    /**
     * Returns the listener's input node.
     *
     * This method is used by other audio nodes to connect to this listener.
     *
     * @return {GainNode} The input node.
     */
    getInput(): GainNode;
    /**
     * Removes the current filter from this listener.
     *
     * @return {AudioListener} A reference to this listener.
     */
    removeFilter(): this;
    /**
     * Returns the current set filter.
     *
     * @return {?AudioNode} The filter.
     */
    getFilter(): AudioNode | null;
    /**
     * Sets the given filter to this listener.
     *
     * @param {AudioNode} value - The filter to set.
     * @return {AudioListener} A reference to this listener.
     */
    setFilter(value: AudioNode): this;
    /**
     * Returns the applications master volume.
     *
     * @return {number} The master volume.
     */
    getMasterVolume(): number;
    /**
     * Sets the applications master volume. This volume setting affects
     * all audio nodes in the scene.
     *
     * @param {number} value - The master volume to set.
     * @return {AudioListener} A reference to this listener.
     */
    setMasterVolume(value: number): this;
}
