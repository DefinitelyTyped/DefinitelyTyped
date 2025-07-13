import { Object3D } from "../core/Object3D.js";
import { AudioContext } from "./AudioContext.js";

/**
 * The {@link AudioListener} represents a virtual {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioListener | listener} of the all positional and non-positional audio effects in the scene.
 * A three.js application usually creates a single instance of {@link AudioListener}  * @remarks
 * It is a mandatory constructor parameter for audios entities like {@link Audio | Audio} and {@link PositionalAudio | PositionalAudio}.
 * In most cases, the listener object is a child of the camera
 * So the 3D transformation of the camera represents the 3D transformation of the listener.
 * @example
 * ```typescript
 * // create an {@link AudioListener} and add it to the camera
 * const listener = new THREE.AudioListener();
 * camera.add(listener);
 * // create a global audio source
 * const sound = new THREE.Audio(listener);
 * // load a sound and set it as the Audio object's buffer
 * const audioLoader = new THREE.AudioLoader();
 * audioLoader.load('sounds/ambient.ogg', function (buffer) {
 *     sound.setBuffer(buffer);
 *     sound.setLoop(true);
 *     sound.setVolume(0.5);
 *     sound.play();
 * });
 * ```
 * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox | webaudio / sandbox }
 * @see Example: {@link https://threejs.org/examples/#webaudio_timing | webaudio / timing }
 * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer | webaudio / visualizer }
 * @see {@link https://threejs.org/docs/index.html#api/en/audio/AudioListener | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/AudioListener.js | Source}
 */
export class AudioListener extends Object3D {
    /**
     * Create a new AudioListener.
     */
    constructor();

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `AudioListener`
     */
    readonly type: string | "AudioListener";

    /**
     * The {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | AudioContext} of the {@link {@link AudioListener} | listener} given in the constructor.
     */
    context: AudioContext;

    /**
     * A {@link https://developer.mozilla.org/en-US/docs/Web/API/GainNode | GainNode} created using
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createGain | AudioContext.createGain()}.
     */
    gain: GainNode;

    /**
     * @defaultValue `null`
     */
    filter: AudioNode;

    /**
     * Time delta value for audio entities. Use in context of {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/linearRampToValueAtTime | AudioParam.linearRampToValueAtTimeDefault()}.
     * @defaultValue `0`
     */
    timeDelta: number;

    /**
     * Return the {@link AudioListener.gain | gainNode}.
     */
    getInput(): GainNode;
    /**
     * Set the {@link AudioListener.filter | filter} property to `null`.
     */
    removeFilter(): this;

    /**
     * Returns the value of the {@link AudioListener.filter | filter} property.
     */
    getFilter(): AudioNode;
    /**
     * Set the {@link AudioListener.filter | filter} property to `value`.
     * @param value
     */
    setFilter(value: AudioNode): this;

    /**
     * Return the volume.
     */
    getMasterVolume(): number;

    /**
     * Set the volume.
     * @param value
     */
    setMasterVolume(value: number): this;
}
