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
