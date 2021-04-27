// Type definitions for ngProgress 1.0.7
// Project: https://github.com/victorb/ngProgress
// Definitions by: Martin McWhorter <https://github.com/martinmcwhorter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace NgProgress {

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

    export interface INgProgressFactory {
        createInstance(): INgProgress;
    }

}

