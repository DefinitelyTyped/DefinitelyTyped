// Type definitions for ngProgress 1.0.7
// Project: http://victorbjelkholm.github.io/ngProgress/
// Definitions by: Martin McWhorter <https://github.com/martinmcwhorter>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module NgProgress {

    export interface INgProgress {
        start(): void;
        height(height: string): void;
        color(color: string): void;
        status(): number;
        stop(): void;
        set(value: number): void;
        reset(): void;
        complete(): void;
    }

}

