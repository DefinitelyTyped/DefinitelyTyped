// Type definitions for set-accurate-timeout 1.0
// Project: https://gitlab.com/notacircle/set-accurate-timeout
// Definitions by: Priyanshu Rav <https://github.com/priyanshurav>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @param callback This callback is called when the specified delay is passed
 * @param delay The time (in milliseconds) to wait, before calling the callback
 */
declare function setAccurateTimeout(callback: (...args: any[]) => void, delay: number): void;

export = setAccurateTimeout;
