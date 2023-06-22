// Type definitions for fps 0.0
// Project: https://github.com/hughsk/fps
// Definitions by: LeoDog896 <https://github.com/LeoDog896>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace fps;

interface FPSOptions {
    /** How many frames to tick before emitting. Defaults to 1. */
    decay?: number;
    /** The rate of change between old and new results. 1 is instantaneous, 0 is never. */
    every?: number;
}

interface FPSObject {
    tick: () => void;
    on: (event: "data", callback: (frames: number) => void) => void;
    last: number;
    rate: number;
    time: number;
    decay: number;
    every: number;
    ticks: number;
}

declare function fps(options?: FPSOptions): FPSObject;

export = fps;
