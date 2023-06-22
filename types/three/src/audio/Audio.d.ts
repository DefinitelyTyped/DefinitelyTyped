import { Object3D } from './../core/Object3D';
import { AudioListener } from './AudioListener';
import { AudioContext } from './AudioContext';

// Extras / Audio /////////////////////////////////////////////////////////////////////

/**
 * Create a non-positional ( global ) {@link Audio} object.
 * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API | Web {@link Audio} API}.
 * @example
 * ```typescript
 * // create an AudioListener and add it to the camera
 * const listener = new THREE.AudioListener();
 * camera.add(listener);
 * // create a global {@link Audio} source
 * const sound = new THREE.Audio(listener);
 * // load a sound and set it as the {@link Audio} object's buffer
 * const audioLoader = new THREE.AudioLoader();
 * audioLoader.load('sounds/ambient.ogg', function (buffer) {
 *     sound.setBuffer(buffer);
 *     sound.setLoop(true);
 *     sound.setVolume(0.5);
 *     sound.play();
 * });
 * ```
 * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox | webaudio / sandbox }
 * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer | webaudio / visualizer }
 * @see {@link https://threejs.org/docs/index.html#api/en/audio/Audio | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/Audio.js | Source}
 */
export class Audio<NodeType extends AudioNode = GainNode> extends Object3D {
    /**
     * Create a new instance of {@link Audio}
     * @param listener (required) {@link AudioListener | AudioListener} instance.
     */
    constructor(listener: AudioListener);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `Audio`
     */
    readonly type: string | 'Audio';

    /**
     * A reference to the listener object of this audio.
     */
    listener: AudioListener;

    /**
     * The {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | AudioContext} of the {@link AudioListener | listener} given in the constructor.
     */
    context: AudioContext;

    /**
     * A {@link https://developer.mozilla.org/en-US/docs/Web/API/GainNode | GainNode} created using
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createGain | AudioContext.createGain}().
     */
    gain: GainNode;

    /**
     * Whether to start playback automatically.
     * @defaultValue `false`
     */
    autoplay: boolean;

    buffer: AudioBuffer | null;

    /**
     * Modify pitch, measured in cents. +/- 100 is a semitone. +/- 1200 is an octave.
     * @defaultValue `0`
     */
    detune: number;

    /**
     * @default false
     */
    loop: boolean;

    /**
     * @default 0
     */
    loopStart: number;

    /**
     * @default 0
     */
    loopEnd: number;

    /**
     * An offset to the time within the {@link Audio} buffer that playback should begin.
     * Same as the {@link Audio.offset | offset} parameter of {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/start | AudioBufferSourceNode.start()}.
     * @defaultValue `0`
     */
    offset: number;

    /**
     * Overrides the duration of the audio. Same as the {@link Audio.duration | duration} parameter of
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/start | AudioBufferSourceNode.start()}.
     * @defaultValue `undefined` _to play the whole buffer_.
     */
    duration: number | undefined;

    /**
     * Speed of playback.
     * @defaultValue `1`
     */
    playbackRate: number;

    /**
     * Whether the {@link Audio} is currently playing.
     * @defaultValue `false`
     */
    isPlaying: boolean;

    /**
     * Whether playback can be controlled using the {@link Audio.play | play}(), {@link Audio.pause | pause}() etc. methods.
     * @defaultValue `true`
     */
    hasPlaybackControl: boolean;

    /**
     * Type of the {@link Audio} source.
     * @defaultValue 'empty'.
     */
    sourceType: string;

    /**
     * An {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode | AudioBufferSourceNode} created using
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createBufferSource | AudioContext.createBufferSource()}.
     */
    source: AudioBufferSourceNode | null;

    /**
     * Represents an array of {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioNode | AudioNodes}.
     * Can be used to apply a variety of low-order filters to create more complex sound effects.
     * In most cases, the array contains instances of {@link https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode | BiquadFilterNodes}.
     * Filters are set via {@link THREE.Audio.setFilter | Audio.setFilter} or {@link THREE.Audio.setFilters | Audio.setFilters}.
     * @defaultValue `[]`
     */
    filters: AudioNode[];

    /**
     * Return the {@link Audio.gain | gainNode}.
     */
    getOutput(): NodeType;

    /**
     * Setup the {@link Audio.source | source} to the audioBuffer, and sets {@link Audio.sourceType | sourceType} to 'audioNode'.
     * @remarks Also sets {@link Audio.hasPlaybackControl | hasPlaybackControl} to false.
     */
    setNodeSource(audioNode: AudioBufferSourceNode): this;

    /**
     * Applies the given object of type {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement | HTMLMediaElement} as the source of this audio.
     * @remarks Also sets {@link Audio.hasPlaybackControl | hasPlaybackControl} to false.
     */
    setMediaElementSource(mediaElement: HTMLMediaElement): this;

    /**
     * Applies the given object of type {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStream | MediaStream} as the source of this audio.
     * @remarks Also sets {@link Audio.hasPlaybackControl | hasPlaybackControl} to false.
     */
    setMediaStreamSource(mediaStream: MediaStream): this;

    /**
     * Setup the {@link Audio.source | source} to the audioBuffer, and sets {@link Audio.sourceType | sourceType} to 'buffer'.
     * @remarks If {@link Audio.autoplay | autoplay}, also starts playback.
     */
    setBuffer(audioBuffer: AudioBuffer): this;

    /**
     * If {@link Audio.hasPlaybackControl | hasPlaybackControl} is true, starts playback.
     */
    play(delay?: number): this;
    /**
     * If {@link Audio.hasPlaybackControl | hasPlaybackControl} is true, pauses playback.
     */
    pause(): this;
    /**
     * If {@link Audio.hasPlaybackControl | hasPlaybackControl} is enabled, stops playback.
     */
    stop(): this;

    /**
     * Called automatically when playback finished.
     */
    onEnded(): void;

    /**
     * Connect to the {@link THREE.Audio.source | Audio.source}
     * @remarks This is used internally on initialisation and when setting / removing filters.
     */
    connect(): this;
    /**
     * Disconnect from the {@link THREE.Audio.source | Audio.source}
     * @remarks This is used internally when setting / removing filters.
     */
    disconnect(): this;

    /**
     * Returns the detuning of oscillation in cents.
     */
    getDetune(): number;
    /**
     * Defines the detuning of oscillation in cents.
     * @param value Expects a `Float`
     */
    setDetune(value: number): this;

    /**
     * Returns the first element of the {@link Audio.filters | filters} array.
     */
    getFilter(): AudioNode;
    /**
     * Applies a single filter node to the audio.
     */
    setFilter(filter: AudioNode): this;

    /**
     * Returns the {@link Audio.filters | filters} array.
     */
    getFilters(): AudioNode[];
    /**
     * Applies an array of filter nodes to the audio.
     * @param value Arrays of filters.
     */
    setFilters(value: AudioNode[]): this;

    /**
     * Return the value of {@link Audio.playbackRate | playbackRate}.
     */
    getPlaybackRate(): number;
    /**
     * If {@link Audio.hasPlaybackControl | hasPlaybackControl} is enabled, set the {@link Audio.playbackRate | playbackRate} to `value`.
     * @param value Expects a `Float`
     */
    setPlaybackRate(value: number): this;

    /**
     * Return the value of {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loop | source.loop} (whether playback should loop).
     */
    getLoop(): boolean;
    /**
     * Set {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loop | source.loop} to `value` (whether playback should loop).
     * @param value
     */
    setLoop(value: boolean): this;

    /**
     * Set {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loopStart | source.loopStart} to `value`.
     * @param value Expects a `Float`
     */
    setLoopStart(value: number): this;
    /**
     * Set {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loopEnd | source.loopEnd} to `value`.
     * @param value Expects a `Float`
     */
    setLoopEnd(value: number): this;

    /**
     * Return the current volume.
     */
    getVolume(): number;
    /**
     * Set the volume.
     * @param value Expects a `Float`
     */
    setVolume(value: number): this;
}
