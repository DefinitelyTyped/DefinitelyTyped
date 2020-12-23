// Type definitions for pause-me 1.1
// Project: https://github.com/jpehman/pause-mejs#readme
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace pauseMe {
    interface PausableTimeout {
        start(): void;
        pause(): void;
        resume(): void;
        stop(): void;
        timer(): NodeJS.Timeout | null;
    }
}

/**
 *
 * @param callback function or lambda that you want executed after duration
 * @param duration Milliseconds to set the timeout to
 * @param repeating When true the timeout is treated as an interval
 */
declare function pauseMe(callback: () => void, duration: number, repeating?: boolean): pauseMe.PausableTimeout;

export = pauseMe;
