export interface Position {
    x: number;
    y: number;
}

export interface DraggabillyOptions {
    axis?: "x" | "y" | undefined;
    containment?: Element | string | boolean | undefined;
    grid?: [number, number] | undefined;
    handle?: string | undefined;
}

export type DraggabillyClickEventName = "dragStart" | "dragEnd" | "pointerDown" | "pointerUp" | "staticClick";

export type DraggabillyMoveEventName = "dragMove" | "pointerMove";

export default class Draggabilly {
    position: Position;

    constructor(element: Element | string, options?: DraggabillyOptions);

    on(
        eventName: DraggabillyClickEventName,
        listener: (event: Event, pointer: MouseEvent | Touch) => void,
    ): Draggabilly;

    on(
        eventName: DraggabillyMoveEventName,
        listener: (event: Event, pointer: MouseEvent | Touch, moveVector: Position) => void,
    ): Draggabilly;

    off(
        eventName: DraggabillyClickEventName,
        listener: (event: Event, pointer: MouseEvent | Touch) => void,
    ): Draggabilly;

    off(
        eventName: DraggabillyMoveEventName,
        listener: (event: Event, pointer: MouseEvent | Touch, moveVector: Position) => void,
    ): Draggabilly;

    once(
        eventName: DraggabillyClickEventName,
        listener: (event: Event, pointer: MouseEvent | Touch) => void,
    ): Draggabilly;

    once(
        eventName: DraggabillyMoveEventName,
        listener: (event: Event, pointer: MouseEvent | Touch, moveVector: Position) => void,
    ): Draggabilly;

    enable(): void;

    disable(): void;

    destroy(): void;
}
