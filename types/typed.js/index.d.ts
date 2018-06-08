// Type definitions for typed.js 2.0
// Project: https://github.com/mattboldt/typed.js
// Definitions by: Davide Donadello <https://github.com/Dona278>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default Typed;

export class Typed {
    constructor(elementId: string, options: TypedJsOptions);

    /**
     * Toggle start() and stop() of the Typed instance
     */
    toggle(): void;

    /**
     * Stop typing / backspacing and enable cursor blinking
     */
    stop(): void;

    /**
     * Start typing / backspacing after being stopped
     */
    start(): void;

    /**
     * Destroy this instance of Typed
     */
    destroy(): void;

    /**
     * Reset Typed and optionally restarts
     */
    reset(restart: boolean): void;
}

export type TypedJsContentType = "html" | "null";

export interface TypedJsOptions {
    /**
     * Strings to be typed
     */
    strings?: string[];

    /**
     * ID of element containing string children
     */
    stringsElement?: string;

    /**
     * Type speed in milliseconds
     */
    typeSpeed?: number;

    /**
     * Time before typing starts in milliseconds
     */
    startDelay?: number;

    /**
     * Backspacing speed in milliseconds
     */
    backSpeed?: number;

    /**
     * Only backspace what doesn't match the previous string
     */
    smartBackspace?: boolean;

    /**
     * Shuffle the strings
     */
    shuffle?: boolean;

    /**
     * Time before backspacing in milliseconds
     */
    backDelay?: number;

    /**
     * Fade out instead of backspace
     */
    fadeOut?: boolean;

    /**
     * Css class for fade animation
     */
    fadeOutClass?: string;

    /**
     * Fade out delay in milliseconds
     */
    fadeOutDelay?: number;

    /**
     * Loop strings
     */
    loop?: boolean;

    /**
     * Amount of loops
     */
    loopCount?: number;

    /**
     * Show cursor
     */
    showCursor?: boolean;

    /**
     * Character for cursor
     */
    cursorChar?: string;

    /**
     * Insert CSS for cursor and fadeOut into HTML <head>
     */
    autoInsertCss?: boolean;

    /**
     * Attribute for typing
     * Ex: input placeholder, value, or just HTML text
     */
    attr?: string;

    /**
     * Bind to focus and blur if el is text input
     */
    bindInputFocusEvents?: boolean;

    /**
     * 'html' or 'null' for plaintext
     */
    contentType?: TypedJsContentType;

    /**
     * All typing is complete
     */
    onComplete?: (self: Typed) => void;

    /**
     * Before each string is typed
     */
    preStringTyped?: (arrayPos: number, self: Typed) => void;

    /**
     * After each string is typed
     */
    onStringTyped?: (arrayPos: number, self: Typed) => void;

    /**
     * During looping, after last string is typed
     */
    onLastStringBackspaced?: (self: Typed) => void;

    /**
     * Typing has been stopped
     */
    onTypingPaused?: (arrayPos: number, self: Typed) => void;

    /**
     * Typing has been started after being stopped
     */
    onTypingResumed?: (arrayPos: number, self: Typed) => void;

    /**
     * After reset
     */
    onReset?: (self: Typed) => void;

    /**
     * After stop
     */
    onStop?: (arrayPos: number, self: Typed) => void;

    /**
     * After start
     */
    onStart?: (arrayPos: number, self: Typed) => void;

    /**
     * After destroy
     */
    onDestroy?: (self: Typed) => void;
}
