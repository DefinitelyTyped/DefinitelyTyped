/// <reference lib="dom" />

export interface Handlers {
    boundary?: (event: SpeechSynthesisEvent) => void;
    end?: (event: SpeechSynthesisEvent) => void;
    error?: (event: SpeechSynthesisErrorEvent) => void;
    mark?: (event: SpeechSynthesisEvent) => void;
    pause?: (event: SpeechSynthesisEvent) => void;
    resume?: (event: SpeechSynthesisEvent) => void;
    start?: (event: SpeechSynthesisEvent) => void;
}

export interface Defaults {
    voice?: SpeechSynthesisVoice | null;
    pitch?: number;
    rate?: number;
    volume?: number;
}

/**
 * Cross browser Speech Synthesis with easy API.
 * This project was created, because it's always a struggle to get the synthesis
 * part of `Web Speech API` running on most major browsers.
 *
 * Setup is very straight forward (see example).
 *
 * @example
 * import EasySpeech from 'easy-speech'
 *
 * const example = async () => {
 *   await EasySpeech.init() // required
 *   await EasySpeech.speak({ 'Hello, world' })
 * }
 *
 * @see https://wicg.github.io/speech-api/#tts-section
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
 */
interface EasySpeech {
    /*******************************************************************************
     *
     * AVAILABLE WITHOUT INIT
     *
     ******************************************************************************/

    /**
     * Enable module-internal debugging by passing your own callback function.
     * Debug will automatically pass through all updates to `status`
     *
     * @example
     * import EasySpeech from 'easy-speech'
     * import Log from '/path/to/my/Log'
     *
     * EasySpeech.debug(arg => Log.debug('EasySpeech:', arg))
     *
     * @param  fn A function, which always receives one argument, that
     *  represents a current debug message
     */
    debug(fn: (arg: string) => void): void;

    /**
     * Detects all possible occurrences of the main Web Speech API components
     * in the global scope.
     *
     * The returning object will have the following structure (see example).
     *
     * @example
     * EasySpeech.detect()
     *
     * {
     *     speechSynthesis: SpeechSynthesis|undefined,
     *     speechSynthesisUtterance: SpeechSynthesisUtterance|undefined, (constructor)
     *     speechSynthesisVoice: SpeechSynthesisVoice|undefined,
     *     speechSynthesisEvent: SpeechSynthesisEvent|undefined, (constructor)
     *     speechSynthesisErrorEvent: SpeechSynthesisErrorEvent|undefined, (constructor)
     *     onvoiceschanged: Boolean,
     *     onboundary: Boolean,
     *     onend: Boolean,
     *     onerror: Boolean,
     *     onmark: Boolean,
     *     onpause: Boolean,
     *     onresume: Boolean,
     *     onstart: Boolean
     * }
     *
     * @returns  An object containing all possible features and their status
     */
    detect(): {
        speechSynthesis: SpeechSynthesis | undefined;
        speechSynthesisUtterance: typeof SpeechSynthesisUtterance | undefined;
        speechSynthesisVoice: SpeechSynthesisVoice | undefined;
        speechSynthesisEvent: typeof SpeechSynthesisEvent | undefined;
        speechSynthesisErrorEvent: typeof SpeechSynthesisErrorEvent | undefined;
        onvoiceschanged: boolean;
        onboundary: boolean;
        onend: boolean;
        onerror: boolean;
        onmark: boolean;
        onpause: boolean;
        onresume: boolean;
        onstart: boolean;
    };

    /**
     * Returns a shallow copy of the current internal status. Depending of the
     * current state this might return an object with only a single field `status`
     * or a complete Object, including detected features, `defaults`, `handlers`
     * and supported `voices`.
     *
     * @example
     * import EasySpeech from 'easy-speech'
     *
     * // uninitialized
     * EasySpeech.status() // { status: 'created' }
     *
     * // after EasySpeech.init
     * EasySpeech.status()
     *
     * {
     *   status: 'init: complete',
     *   initialized: true,
     *   speechSynthesis: speechSynthesis,
     *   speechSynthesisUtterance: SpeechSynthesisUtterance,
     *   speechSynthesisVoice: SpeechSynthesisVoice,
     *   speechSynthesisEvent: SpeechSynthesisEvent,
     *   speechSynthesisErrorEvent: SpeechSynthesisErrorEvent,
     *   voices: [...],
     *   defaults: {
     *     pitch: 1,
     *     rate: 1,
     *     volume: 1,
     *     voice: null
     *   },
     *   handlers: {}
     * }
     *
     * @return  the internal status
     */
    status(): {
        status: string;
        initialized?: boolean;
        speechSynthesis?: SpeechSynthesis;
        speechSynthesisUtterance?: typeof SpeechSynthesisUtterance;
        speechSynthesisVoice?: SpeechSynthesisVoice;
        speechSynthesisEvent?: typeof SpeechSynthesisEvent;
        speechSynthesisErrorEvent?: typeof SpeechSynthesisErrorEvent;
        voices?: SpeechSynthesisVoice[];
        defaults?: Defaults;
        handlers?: Handlers;
    };

    /**
     * This is the function you need to run, before being able to speak.
     * It includes:
     * - feature detection
     * - feature assignment (into internal state)
     * - voices loading
     * - state update
     * - inform caller about success
     *
     * It will load voices by a variety of strategies:
     *
     * - detect and that SpeechSynthesis is basically supported, if not -> fail
     * - load voices directly
     * - if not loaded but `onvoiceschanged` is available: use `onvoiceschanged`
     * - if `onvoiceschanged` is not available: fallback to timeout
     * - if `onvoiceschanged` is fired but no voices available: fallback to timeout
     * - timeout reloads voices in a given `interval` until a `maxTimeout` is reached
     * - if voices are loaded until then -> complete
     * - if no voices found -> fail
     *
     * Note: if once initialized you can't re-init (will skip and resolve to
     * `false`) unless you run `EasySpeech.reset()`.
     *
     * @return
     * fulfil:  true, if initialized, false, if skipped (because already
     *   initialized)
     * reject: The error `message` property will always begin with
     *   `EasySpeech: ` and contain one of the following:
     *
     *   - `browser misses features` - The browser will not be able to use speech
     *      synthesis at all as it misses crucial features
     *   - `browser has no voices (timeout)` - No voice could be loaded with neither
     *      of the given strategies; chances are high the browser does not have
     *      any voices embedded (example: Chromium on *buntu os')
     */
    init(options?: {
        /**
         * max timeout in ms to wait for voices to be loaded
         */
        maxTimeout?: number;
        /**
         * interval in ms to wait between voice reloads
         */
        interval?: number;
    }): Promise<boolean>;

    /*******************************************************************************
     *
     * AVAILABLE ONLY AFTER INIT
     * (will throw an error otherwise)
     *
     ******************************************************************************/

    /**
     * Returns all available voices.
     *
     * condition: `EasySpeech.init` must have been called and resolved to `true`
     * @return
     */
    voices(): SpeechSynthesisVoice[];

    /**
     * Attaches global/default handlers to every utterance instance. The handlers
     * will run in parallel to any additional handlers, attached when calling
     * `EasySpeech.speak`
     *
     * condition: `EasySpeech.init` must have been called and resolved to `true`
     *
     * @param  handlers
     * @param  handlers.boundary - optional, event handler
     * @param  handlers.end - optional, event handler
     * @param  handlers.error - optional, event handler
     * @param  handlers.mark - optional, event handler
     * @param  handlers.pause - optional, event handler
     * @param  handlers.resume - optional, event handler
     * @param  handlers.start - optional, event handler
     *
     * @return  a shallow copy of the Object, containing all global handlers
     */
    on(handlers: Handlers): Handlers;

    /**
     * Sets defaults for utterances. Invalid values will be ignored without error
     * or warning.
     *
     * condition: `EasySpeech.init` must have been called and resolved to `true`
     *
     * @see https://wicg.github.io/speech-api/#utterance-attributes
     * @param  options - Optional object containing values to set values
     * @param  options.voice - Optional `SpeechSynthesisVoice` instance or
     *  `SpeechSynthesisVoice`-like Object
     * @param  options.pitch - Optional pitch value >= 0 and <= 2
     * @param  options.rate - Optional rate value >= 0.1 and <= 10
     * @param  options.volume - Optional volume value >= 0 and <= 1
     *
     * @return  a shallow copy of the current defaults
     */
    defaults(options: Defaults): Defaults;

    /**
     * Speaks a voice by given parameters, constructs utterance by best possible
     * combinations of parameters and defaults.
     *
     * condition: `EasySpeech.init` must have been called and resolved to `true`
     *
     * If the given utterance parameters are missing or invalid, defaults will be
     * used as fallback.
     *
     * @example
     * const voice = EasySpeech.voices()[10] // get a voice you like
     *
     * EasySpeech.speak({
     *   text: 'Hello, world',
     *   voice: voice,
     *   pitch: 1.2,  // a little bit higher
     *   rate: 1.7, // a little bit faster
     *   boundary: event => console.debug('word boundary reached', event.charIndex),
     *   error: e => notify(e)
     * })
     *
     * @param  options - required options
     * @param  options.text - required text to speak
     * @param  options.voice - optional `SpeechSynthesisVoice` instance or
     *   structural similar object (if `SpeechSynthesisUtterance` is not supported)
     * @param  options.pitch - Optional pitch value >= 0 and <= 2
     * @param  options.rate - Optional rate value >= 0.1 and <= 10
     * @param  options.volume - Optional volume value >= 0 and <= 1
     * @param  options.force - Optional set to true to force speaking, no matter the internal state
     * @param  handlers - optional additional local handlers, can be
     *   directly added as top-level properties of the options
     * @param  handlers.boundary - optional, event handler
     * @param  handlers.end - optional, event handler
     * @param  handlers.error - optional, event handler
     * @param  handlers.mark - optional, event handler
     * @param  handlers.pause - optional, event handler
     * @param  handlers.resume - optional, event handler
     * @param  handlers.start - optional, event handler
     *
     * @return
     * fulfill:  Resolves to the `end` event
     * reject:  rejects using the `error` event
     */
    speak(
        options: {
            text: string;
            voice?: SpeechSynthesisVoice;
            pitch?: number;
            rate?: number;
            volume?: number;
            force?: boolean;
        } & Handlers,
    ): Promise<SpeechSynthesisEvent | SpeechSynthesisErrorEvent>;

    /**
     * Cancels the current speaking, if any running
     *
     * condition: `EasySpeech.init` must have been called and resolved to `true`
     */
    cancel(): void;

    /**
     * Resumes to speak, if any paused
     *
     * condition: `EasySpeech.init` must have been called and resolved to `true`
     */
    resume(): void;

    /**
     * Pauses the current speaking, if any running
     *
     * condition: `EasySpeech.init` must have been called and resolved to `true`
     */
    pause(): void;

    /**
     * Resets the internal state to a default-uninitialized state
     *
     * condition: `EasySpeech.init` must have been called and resolved to `true`
     */
    reset(): void;
}

declare const EasySpeech: EasySpeech;
export default EasySpeech;
