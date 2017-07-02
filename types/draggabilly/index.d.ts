// Type definitions for draggabilly 2.1
// Project: http://draggabilly.desandro.com/
// Definitions by: Jason Wu <https://github.com/jaydubu/>
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

export type DraggabillyEventName = 'dragStart' | 'dragMove' | 'dragEnd' | 'pointerDown' | 'pointerMove' | 'pointerUp'
    | 'staticClick';

export default class Draggabilly {
    position: Position;

    constructor(element: Element | string, options?: DraggabillyOptions);

    on(eventName: DraggabillyEventName, listener: (event: Event, pointer: MouseEvent | Touch, moveVector: Position) => void): Draggabilly;

    off(eventName: DraggabillyEventName, listener: (event: Event, pointer: MouseEvent | Touch, moveVector: Position) => void): Draggabilly;

    once(eventName: DraggabillyEventName, listener: (event: Event, pointer: MouseEvent | Touch, moveVector?: Position) => void): Draggabilly;

    enable(): void;

    disable(): void;

    destroy(): void;
}
