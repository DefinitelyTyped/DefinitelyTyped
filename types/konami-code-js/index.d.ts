// Type definitions for konami-code-js 0.8
// Project: https://github.com/Haeresis/konami-code-js#readme
// Definitions by: Josh Goldberg <https://github.com/JoshuaKGoldberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface KonamiOptions {
    /**
     * Function executed after the the Konami Code sequence has been entered.
     */
    callback?: KonamiCallback;

    /**
     * When true, allows you to see all debug messages in the console.
     *
     * @default false
     */
    debug?: boolean;

    /**
     * Pass some element to only recognize the Konami Code sequence from thatt element.
     *
     * @default window.document
     */
    listener?: Node;
}

type KonamiCallback = (instance: KonamiCode) => void;

declare class KonamiCode {
    constructor(options: KonamiCallback | KonamiOptions);

    /**
     * Activate the listening of the Konami Code sequence.
     */
    enable(): KonamiCode;

    /**
     * Activate the listening of the Konami Code sequence for keyboard keys.
     */
    enableKeyboardKeys(): KonamiCode;

    /**
     * Activate the listening of the Konami Code sequence for touch gestures.
     */
    enableTouchGesture(): KonamiCode;

    /**
     * Unactivate the listening of the Konami Code sequence.
     */
    disable(): KonamiCode;

    /**
     * Unactivate the listening of the Konami Code sequence for keyboard keys.
     */
    disableKeyboardKeys(): KonamiCode;

    /**
     * Unactivate the listening of the Konami Code sequence for touch gestures.
     */
    disableTouchGesture(): KonamiCode;

    /**
     * Change the callback called when the sequence fires.
     *
     * @remarks The old callback will no longer work.
     */
    setCallback(callback: KonamiCallback): KonamiCode;

    /**
     * Change the listener.
     *
     * @remarks The old listener will no longer work.
     */
    setListener(listener: Node): KonamiCode;

    /**
     * Change the options of the instance.
     */
    setOptions(options: KonamiOptions | (() => KonamiOptions)): KonamiCode;

    /**
     * If a previous KonamiCode variable already existed in the global environment,
     * this switches back to it.
     */
    static noConflict(): KonamiCode;

    /**
     * @returns The number of times KonamiCode was instantiated.
     */
    static getNumberOfInstance(): number;
}

export = KonamiCode;
