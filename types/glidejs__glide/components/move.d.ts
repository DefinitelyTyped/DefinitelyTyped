export type MoveEvents = 'move' | 'move.after';

export interface MoveEventContext {
    readonly movement: number;
}

export interface MoveEventsBus {
    on(event: MoveEvents, handler: (context: MoveEventContext) => void): { remove(): void };
    on(event: MoveEvents[], handler: (context: MoveEventContext) => void): void;

    emit(event: MoveEvents | MoveEvents[], context: MoveEventContext): void;
}

export interface Move {
    readonly offset: number;
    readonly translate: number;
    readonly value: number;

    /**
     * Constructs move component.
     */
    mount(): void;

    /**
     * Calculates a movement value based on passed offset and currently active index.
     */
    make(offset?: number): void;
}
