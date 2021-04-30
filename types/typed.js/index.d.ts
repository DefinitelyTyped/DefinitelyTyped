// Type definitions for typed.js 2.0
// Project: https://github.com/mattboldt/typed.js
// Definitions by: Hector Osuna <https://github.com/FanGoH>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { TypedConfig, TypedOptions } from "./config";
export { HTMLParser } from "./htmlparser";
export { Initializer } from "./initializer";
export { TypedConfig, TypedOptions };

export interface TypedPause {
    status: boolean;
    typewrite: boolean;
    curString: string;
    curStrPos: number;
}

/**
 * Welcome to Typed.js!
 * @param elementId HTML element ID _OR_ HTML element
 * @param options options object
 * @returns a new Typed object
 */
export default class Typed {
    constructor(elementId: string, options?: TypedOptions);

    // chosen element to manipulate text
    el: Element | string;

    // Options
    options: TypedConfig;

    // attribute to type into
    isInput: boolean;
    attr: TypedConfig["attr"];
    bindInputFocusEvents: TypedConfig["bindInputFocusEvents"];

    // show cursor
    showCursor: TypedConfig["showCursor"];

    // custom cursor
    cursorChar: TypedConfig["cursorChar"];

    // Is the cursor blinking
    cursorBlinking: boolean;

    // text content of element
    elContent: string;

    // html or plain text
    contentType: TypedConfig["contentType"];

    // typing speed
    typeSpeed: TypedConfig["typeSpeed"];

    // add a delay before typing starts
    startDelay: TypedConfig["startDelay"];

    // backspacing speed
    backSpeed: TypedConfig["backSpeed"];

    // only backspace what doesn't match the previous string
    smartBackspace: TypedConfig["smartBackspace"];

    // amount of time to wait before backspacing
    backDelay: TypedConfig["backDelay"];

    // Fade out instead of backspace
    fadeOut: TypedConfig["fadeOut"];

    fadeOutClass: TypedConfig["fadeOutClass"];
    fadeOutDelay: TypedConfig["fadeOutDelay"];

    // variable to check whether typing is currently paused
    isPaused: boolean;

    // input strings of text
    strings: TypedConfig["strings"];

    // div containing strings
    stringsElement: Element | TypedConfig["stringsElement"];

    // character number position of current string
    strPos: number;

    // current array position
    arrayPos: number;

    // index of string to stop backspacing on
    stopNum: number;

    // Looping logic
    loop: TypedConfig["loop"];
    loopCount: TypedConfig["loopCount"];
    curLoop: number;

    // shuffle the strings
    shuffle: TypedConfig["shuffle"];
    // the order of strings
    sequence: string[];

    pause: TypedPause;

    // When the typing is complete (when not looped)
    typingComplete: boolean;

    // If there is some text in the element
    currentElContent: string;

    autoInsertCss: TypedConfig["autoInsertCss"];

    temporaryPause: boolean;

    timeout: number;

    cursor?: HTMLSpanElement | null;

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
     * @param restart defaults to true
     */
    reset(restart?: boolean): void;

    /**
     * Begins the typing animation
     */
    begin(): void;

    /**
     * Called for each character typed
     * @param curString the current string in the strings array
     * @param curStrPos the current position in the curString
     */
    typewrite(curString: string, curStrPos: number): void;

    /**
     * Continue to the next string & begin typing
     * @param curString the current string in the strings array
     * @param curStrPos the current position in the curString
     */
    keepTyping(curString: string, curStrPos: number, numChars: number): void;
    /**
     * We're done typing the current string
     * @param curString the current string in the strings array
     * @param curStrPos the current position in the curString
     */
    doneTyping(curString: string, curStrPos: number): void;

    /**
     * Backspaces 1 character at a time
     * @param curString the current string in the strings array
     * @param curStrPos the current position in the curString
     */
    backspace(curString: string, curStrPos: number): number | void;

    /**
     * Full animation is complete
     */
    complete(): void;

    /**
     * Has the typing been stopped
     * @param curString the current string in the strings array
     * @param curStrPos the current position in the curString
     * @param isTyping
     */
    setPauseStatus(curString: string, curStrPos: number, isTyping: boolean): void;

    /**
     * Toggle the blinking cursor
     * @param isBlinking
     */
    toggleBlinking(isBlinking: boolean): void;

    /**
     * Speed in MS to type
     * @param speed
     */
    humanizer(speed: number): number;

    /**
     * Shuffle the sequence of the strings array
     */
    shuffleStringsIfNeeded(): void;

    /**
     * Adds a CSS class to fade out current string
     */
    initFadeOut(): number;

    /**
     * Replaces current text in the HTML element
     * depending on element type
     * @param str
     */
    replaceText(str: string): void;

    /**
     * If using input elements, bind focus in order to
     * start and stop the animation
     */
    bindFocusEvents(): void;

    /**
     * On init, insert the cursor element
     */
    insertCursor(): void;
}
