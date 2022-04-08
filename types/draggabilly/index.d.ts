// Type definitions for draggabilly 2.1
// Project: https://draggabilly.desandro.com
// Definitions by: Jason Wu <https://github.com/jaydubu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface Position {
    x: number;
    y: number;
}

export interface DraggabillyOptions {
    axis?: 'x' | 'y';
    containment?: Element | string | boolean;
    grid?: [number, number];
    handle?: string;
}

export type DraggabillyClickEventName = 'dragStart' | 'dragEnd' | 'pointerDown' | 'pointerUp' | 'staticClick';

export type DraggabillyMoveEventName = 'dragMove' | 'pointerMove';

export default class Draggabilly {
    position: Position;

    constructor(element: Element | string, options?: DraggabillyOptions);

    on(eventName: DraggabillyClickEventName, listener: (event: Event, pointer: MouseEvent | Touch) => void): Draggabilly;

    on(eventName: DraggabillyMoveEventName, listener: (event: Event, pointer: MouseEvent | Touch, moveVector: Position) => void): Draggabilly;

    off(eventName: DraggabillyClickEventName, listener: (event: Event, pointer: MouseEvent | Touch) => void): Draggabilly;

    off(eventName: DraggabillyMoveEventName, listener: (event: Event, pointer: MouseEvent | Touch, moveVector: Position) => void): Draggabilly;

    once(eventName: DraggabillyClickEventName, listener: (event: Event, pointer: MouseEvent | Touch) => void): Draggabilly;

    once(eventName: DraggabillyMoveEventName, listener: (event: Event, pointer: MouseEvent | Touch, moveVector: Position) => void): Draggabilly;

    enable(): void;

    disable(): void;

    destroy(): void;
}
