import { AudioListener } from './AudioListener';
import { Audio } from './Audio';

/**
 * Create a positional audio object.
 * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API | Web Audio API}.
 * @example
 * ```typescript
 * // create an AudioListener and add it to the camera
 * const listener = new THREE.AudioListener();
 * camera.add(listener);
 * // create the {@link PositionalAudio} object (passing in the listener)
 * const sound = new THREE.PositionalAudio(listener);
 * // load a sound and set it as the {@link PositionalAudio} object's buffer
 * const audioLoader = new THREE.AudioLoader();
 * audioLoader.load('sounds/song.ogg', function (buffer) {
 *     sound.setBuffer(buffer);
 *     sound.setRefDistance(20);
 *     sound.play();
 * });
 * // create an object for the sound to play from
 * const sphere = new THREE.SphereGeometry(20, 32, 16);
 * const material = new THREE.MeshPhongMaterial({
 *     color: 0xff2200
 * });
 * const mesh = new THREE.Mesh(sphere, material);
 * scene.add(mesh);
 * // finally add the sound to the mesh
 * mesh.add(sound);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webaudio_orientation | webaudio / orientation }
 * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox | webaudio / sandbox }
 * @see Example: {@link https://threejs.org/examples/#webaudio_timing | webaudio / timing }
 * @see {@link https://threejs.org/docs/index.html#api/en/audio/PositionalAudio | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/PositionalAudio.js | Source}
 */
export class PositionalAudio extends Audio<PannerNode> {
    /**
     * Create a new instance of {@link PositionalAudio}
     * @param listener (required) {@link AudioListener | AudioListener} instance.
     */
    constructor(listener: AudioListener);

    /**
     * The PositionalAudio's {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode | PannerNode}.
     */
    panner: PannerNode;

    /**
     * Returns the {@link PositionalAudio.panner | panner}.
     */
    getOutput(): PannerNode;

    /**
     * Returns the value of {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/refDistance | panner.refDistance}.
     */
    getRefDistance(): number;
    /**
     * Sets the value of {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/refDistance | panner.refDistance}.
     * @param value Expects a `Float`
     */
    setRefDistance(value: number): this;

    /**
     * Returns the value of {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/rolloffFactor | panner.rolloffFactor}.
     */
    getRolloffFactor(): number;
    /**
     * Sets the value of {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/rolloffFactor | panner.rolloffFactor}.
     * @param value Expects a `Float`
     */
    setRolloffFactor(value: number): this;

    /**
     * Returns the value of {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/distanceModel | panner.distanceModel}.
     */
    getDistanceModel(): string;
    /**
     * Sets the value of {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/distanceModel | panner.distanceModel}.
     * @param value
     */
    setDistanceModel(value: string): this;

    /**
     * Returns the value of {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/maxDistance | panner.maxDistance}.
     */
    getMaxDistance(): number;
    /**
     * Sets the value of {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/maxDistance | panner.maxDistance}.
     * @param value Expects a `Float`
     */
    setMaxDistance(value: number): this;

    /**
     * This method can be used in order to transform an omnidirectional sound into a {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode | directional sound}.
     * @param coneInnerAngle Expects a `Float`
     * @param coneOuterAngle Expects a `Float`
     * @param coneOuterGain Expects a `Float`
     */
    setDirectionalCone(coneInnerAngle: number, coneOuterAngle: number, coneOuterGain: number): this;
}
