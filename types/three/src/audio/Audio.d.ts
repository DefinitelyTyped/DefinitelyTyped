import { Object3D } from "../core/Object3D.js";
import { AudioListener } from "./AudioListener.js";

/**
 * Represents a non-positional ( global ) audio object.
 *
 * This and related audio modules make use of the [Web Audio API](https://www.w3.org/TR/webaudio-1.1/).
 *
 * ```js
 * // create an AudioListener and add it to the camera
 * const listener = new THREE.AudioListener();
 * camera.add( listener );
 *
 * // create a global audio source
 * const sound = new THREE.Audio( listener );
 *
 * // load a sound and set it as the Audio object's buffer
 * const audioLoader = new THREE.AudioLoader();
 * audioLoader.load( 'sounds/ambient.ogg', function( buffer ) {
 * 	sound.setBuffer( buffer );
 * 	sound.setLoop( true );
 * 	sound.setVolume( 0.5 );
 * 	sound.play();
 * });
 * ```
 */
export class Audio<TNode extends AudioNode = GainNode> extends Object3D {
    /**
     * Constructs a new audio.
     *
     * @param {AudioListener} listener - The global audio listener.
     */
    constructor(listener: AudioListener);
    /**
     * The global audio listener.
     */
    readonly listener: AudioListener;
    /**
     * The audio context.
     */
    readonly context: AudioContext;
    /**
     * The gain node used for volume control.
     */
    readonly gain: GainNode;
    /**
     * Whether to start playback automatically or not.
     */
    autoplay: boolean;
    /**
     * A reference to an audio buffer.
     *
     * Defined via {@link Audio#setBuffer}.
     *
     * @default null
     */
    readonly buffer: AudioBuffer | null;
    /**
     * Modify pitch, measured in cents. +/- 100 is a semitone.
     * +/- 1200 is an octave.
     *
     * Defined via {@link Audio#setDetune}.
     *
     * @default 0
     */
    readonly detune: number;
    /**
     * Whether the audio should loop or not.
     *
     * Defined via {@link Audio#setLoop}.
     *
     * @default false
     */
    readonly loop: boolean;
    /**
     * Defines where in the audio buffer the replay should
     * start, in seconds.
     *
     * @default 0
     */
    loopStart: number;
    /**
     * Defines where in the audio buffer the replay should
     * stop, in seconds.
     *
     * @default 0
     */
    loopEnd: number;
    /**
     * An offset to the time within the audio buffer the playback
     * should begin, in seconds.
     *
     * @default 0
     */
    offset: number;
    /**
     * Overrides the default duration of the audio.
     *
     * @default undefined
     */
    duration: number | undefined;
    /**
     * The playback speed.
     *
     * Defined via {@link Audio#setPlaybackRate}.
     *
     * @default 1
     */
    readonly playbackRate: number;
    /**
     * Indicates whether the audio is playing or not.
     *
     * This flag will be automatically set when using {@link Audio#play},
     * {@link Audio#pause}, {@link Audio#stop}.
     *
     * @default false
     */
    readonly isPlaying: boolean;
    /**
     * Indicates whether the audio playback can be controlled
     * with method like {@link Audio#play} or {@link Audio#pause}.
     *
     * This flag will be automatically set when audio sources are
     * defined.
     *
     * @default true
     */
    readonly hasPlaybackControl: boolean;
    /**
     * Holds a reference to the current audio source.
     *
     * The property is automatically by one of the `set*()` methods.
     *
     * @default null
     */
    readonly source: AudioNode | null;
    /**
     * Defines the source type.
     *
     * The property is automatically set by one of the `set*()` methods.
     *
     * @default 'empty'
     */
    readonly sourceType: "empty" | "audioNode" | "mediaNode" | "mediaStreamNode" | "buffer";
    /**
     * Can be used to apply a variety of low-order filters to create
     * more complex sound effects e.g. via `BiquadFilterNode`.
     *
     * The property is automatically set by {@link Audio#setFilters}.
     */
    readonly filters: AudioNode[];
    /**
     * Returns the output audio node.
     *
     * @return {GainNode} The output node.
     */
    getOutput(): TNode;
    /**
     * Sets the given audio node as the source of this instance.
     *
     * {@link Audio#sourceType} is set to `audioNode` and {@link Audio#hasPlaybackControl} to `false`.
     *
     * @param {AudioNode} audioNode - The audio node like an instance of `OscillatorNode`.
     * @return {Audio} A reference to this instance.
     */
    setNodeSource(audioNode: AudioNode): this;
    /**
     * Sets the given media element as the source of this instance.
     *
     * {@link Audio#sourceType} is set to `mediaNode` and {@link Audio#hasPlaybackControl} to `false`.
     *
     * @param {HTMLMediaElement} mediaElement - The media element.
     * @return {Audio} A reference to this instance.
     */
    setMediaElementSource(mediaElement: HTMLMediaElement): this;
    /**
     * Sets the given media stream as the source of this instance.
     *
     * {@link Audio#sourceType} is set to `mediaStreamNode` and {@link Audio#hasPlaybackControl} to `false`.
     *
     * @param {MediaStream} mediaStream - The media stream.
     * @return {Audio} A reference to this instance.
     */
    setMediaStreamSource(mediaStream: MediaStream): this;
    /**
     * Sets the given audio buffer as the source of this instance.
     *
     * {@link Audio#sourceType} is set to `buffer` and {@link Audio#hasPlaybackControl} to `true`.
     *
     * @param {AudioBuffer} audioBuffer - The audio buffer.
     * @return {Audio} A reference to this instance.
     */
    setBuffer(audioBuffer: AudioBuffer): this;
    /**
     * Starts the playback of the audio.
     *
     * Can only be used with compatible audio sources that allow playback control.
     *
     * @param {number} [delay=0] - The delay, in seconds, at which the audio should start playing.
     * @return {Audio|undefined} A reference to this instance.
     */
    play(delay?: number): this | undefined;
    /**
     * Pauses the playback of the audio.
     *
     * Can only be used with compatible audio sources that allow playback control.
     *
     * @return {Audio|undefined} A reference to this instance.
     */
    pause(): this | undefined;
    /**
     * Stops the playback of the audio.
     *
     * Can only be used with compatible audio sources that allow playback control.
     *
     * @param {number} [delay=0] - The delay, in seconds, at which the audio should stop playing.
     * @return {Audio|undefined} A reference to this instance.
     */
    stop(delay?: number): this | undefined;
    /**
     * Connects to the audio source. This is used internally on
     * initialisation and when setting / removing filters.
     *
     * @return {Audio} A reference to this instance.
     */
    connect(): this;
    /**
     * Disconnects to the audio source. This is used internally on
     * initialisation and when setting / removing filters.
     *
     * @return {Audio|undefined} A reference to this instance.
     */
    disconnect(): this | undefined;
    /**
     * Returns the current set filters.
     *
     * @return {Array<AudioNode>} The list of filters.
     */
    getFilters(): AudioNode[];
    /**
     * Sets an array of filters and connects them with the audio source.
     *
     * @param {Array<AudioNode>} [value] - A list of filters.
     * @return {Audio} A reference to this instance.
     */
    setFilters(value?: AudioNode[]): this;
    /**
     * Defines the detuning of oscillation in cents.
     *
     * @param {number} value - The detuning of oscillation in cents.
     * @return {Audio} A reference to this instance.
     */
    setDetune(value: number): this;
    /**
     * Returns the detuning of oscillation in cents.
     *
     * @return {number} The detuning of oscillation in cents.
     */
    getDetune(): number;
    /**
     * Returns the first filter in the list of filters.
     *
     * @return {AudioNode|undefined} The first filter in the list of filters.
     */
    getFilter(): AudioNode | undefined;
    /**
     * Applies a single filter node to the audio.
     *
     * @param {AudioNode} [filter] - The filter to set.
     * @return {Audio} A reference to this instance.
     */
    setFilter(filter?: AudioNode): this;
    /**
     * Sets the playback rate.
     *
     * Can only be used with compatible audio sources that allow playback control.
     *
     * @param {number} [value] - The playback rate to set.
     * @return {Audio|undefined} A reference to this instance.
     */
    setPlaybackRate(value?: number): this | undefined;
    /**
     * Returns the current playback rate.

     * @return {number} The playback rate.
     */
    getPlaybackRate(): number;
    /**
     * Automatically called when playback finished.
     */
    onEnded(): void;
    /**
     * Returns the loop flag.
     *
     * Can only be used with compatible audio sources that allow playback control.
     *
     * @return {boolean} Whether the audio should loop or not.
     */
    getLoop(): boolean;
    /**
     * Sets the loop flag.
     *
     * Can only be used with compatible audio sources that allow playback control.
     *
     * @param {boolean} value - Whether the audio should loop or not.
     * @return {Audio|undefined} A reference to this instance.
     */
    setLoop(value: boolean): this | undefined;
    /**
     * Sets the loop start value which defines where in the audio buffer the replay should
     * start, in seconds.
     *
     * @param {number} value - The loop start value.
     * @return {Audio} A reference to this instance.
     */
    setLoopStart(value: number): this;
    /**
     * Sets the loop end value which defines where in the audio buffer the replay should
     * stop, in seconds.
     *
     * @param {number} value - The loop end value.
     * @return {Audio} A reference to this instance.
     */
    setLoopEnd(value: number): this;
    /**
     * Returns the volume.
     *
     * @return {number} The volume.
     */
    getVolume(): number;
    /**
     * Sets the volume.
     *
     * @param {number} value - The volume to set.
     * @return {Audio} A reference to this instance.
     */
    setVolume(value: number): this;
    copy(source: Audio, recursive?: boolean): this;
    clone(recursive?: boolean): this;
}
