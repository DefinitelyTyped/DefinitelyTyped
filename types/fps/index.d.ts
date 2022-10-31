// Type definitions for fps 0.0
// Project: https://github.com/hughsk/fps
// Definitions by: LeoDog896 <https://github.com/LeoDog896>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace fps;

interface FPSOptions {
    last?: number;
    rate?: number;
    time?: number;
    decay?: number;
    every?: number;
    ticks?: number;
}

interface FPSObject {
    tick: () => void;
    on: (event: "data", callback: (frames: number) => void) => void;
}

declare function fps(options?: FPSOptions): FPSObject;

export = fps;
