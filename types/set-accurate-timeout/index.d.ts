/**
 * @param callback This callback is called when the specified delay is passed
 * @param delay The time (in milliseconds) to wait, before calling the callback
 */
declare function setAccurateTimeout(callback: (...args: any[]) => void, delay: number): void;

export = setAccurateTimeout;
