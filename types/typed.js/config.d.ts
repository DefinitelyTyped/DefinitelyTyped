import Typed from "./index";

export interface TypedOptions {
    /**
     *  strings to be typed
     */
    strings?: string[];
    /**
     *  ID of element containing string children, defaults to null
     */
    stringsElement?: string | null;

    /**
     *  type speed in milliseconds, defaults to 0
     */
    typeSpeed?: number;

    /**
     *  time before typing starts in milliseconds, defaults to 0
     */
    startDelay?: number;

    /**
     *  backspacing speed in milliseconds, defaults to 0
     */
    backSpeed?: number;

    /**
     *  only backspace what doesn't match the previous string, defaults to true
     */
    smartBackspace?: boolean;

    /**
     *  shuffle the strings, defaults to false
     */
    shuffle?: boolean;

    /**
     *  time before backspacing in milliseconds, defaults to 700
     */
    backDelay?: number;

    /**
     *  Fade out instead of backspace, defaults to false
     */
    fadeOut?: boolean;
    /**
     *  css class for fade animation, defaults to "typed-fade-out"
     */
    fadeOutClass?: string;
    /**
     *  Fade out delay in milliseconds, defaults to 500
     */
    fadeOutDelay?: number;

    /**
     *  loop strings, defaults to false
     */
    loop?: boolean;
    /**
     *  amount of loops, , defaults to Infinity
     */
    loopCount?: number;

    /**
     *  show cursor, defaults to true
     */
    showCursor?: boolean;

    /**
     *  character for cursor, defaults to "|"
     */
    cursorChar?: string;

    /**
     *  insert CSS for cursor and fadeOut into HTML <head>, defaults to true
     */
    autoInsertCss?: boolean;

    /**
     *  attribute for typing
     * Ex: input placeholder, value, or just HTML text, defaults to null
     */
    attr?: string | null;

    /**
     *  bind to focus and blur if el is text input, defaults to false
     */
    bindInputFocusEvents?: boolean;

    /**
     *  'html' or 'null' for plaintext, defaults to 'html'
     */
    contentType?: "html" | null;

    /**
     * Before it begins typing
     * @param self
     */
    onBegin?: (self?: Typed) => void;

    /**
     * All typing is complete
     * @param self
     */
    onComplete?: (self?: Typed) => void;

    /**
     * Before each string is typed
     * @param arrayPos
     * @param self
     */
    preStringTyped?: (arrayPos: number, self?: Typed) => void;

    /**
     * After each string is typed
     * @param arrayPos
     * @param self
     */
    onStringTyped?: (arrayPos: number, self?: Typed) => void;

    /**
     * During looping, after last string is typed
     * @param self
     */
    onLastStringBackspaced?: (self?: Typed) => void;

    /**
     * Typing has been stopped
     * @param arrayPos
     * @param self
     */
    onTypingPaused?: (arrayPos: number, self?: Typed) => void;

    /**
     * Typing has been started after being stopped
     * @param arrayPos
     * @param self
     */
    onTypingResumed?: (arrayPos: number, self?: Typed) => void;

    /**
     * After reset
     * @param self
     */
    onReset?: (self?: Typed) => void;

    /**
     * After stop
     * @param arrayPos
     * @param self
     */
    onStop?: (arrayPos: number, self?: Typed) => void;

    /**
     * After start
     * @param arrayPos
     * @param self
     */
    onStart?: (arrayPos: number, self?: Typed) => void;

    /**
     * After destroy
     * @param self
     */
    onDestroy?: (self?: Typed) => void;
}

export type TypedConfig = Required<TypedOptions>;
