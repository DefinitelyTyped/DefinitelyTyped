export type RunEvents = 'run.after' | 'run.before' | 'run.end' | 'run.offset' | 'run.start' | 'run';

export interface RunEventsBus {
    on(event: RunEvents, handler: (move: string) => void): { remove(): void };
    on(event: RunEvents[], handler: (move: string) => void): void;

    emit(event: RunEvents | RunEvents[], move: string): void;
}

export interface Run {
    /**
     * Initializes autorunning of the glide.
     */
    mount(): void;

    /**
     * Makes glides running based on the passed moving schema.
     */
    make(move: string): void;

    /**
     * Calculates current index based on defined move.
     */
    calculate(): number | undefined;

    /**
     * Checks if we are on the first slide.
     */
    isStart(): boolean;

    /**
     * Checks if we are on the last slide.
     */
    isEnd(): boolean;

    /**
     * Checks if we are making a offset run.
     */
    isOffset(direction?: string): boolean;

    /**
     * Checks if bound mode is active
     */
    isBound(): boolean;
}
