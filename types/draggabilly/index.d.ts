// Type definitions for draggabilly 2.1
// Project: http://draggabilly.desandro.com/
// Definitions by: Jason Wu <https://github.com/jaydubu/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// export = Backbone;
// export as namespace Backbone;

declare module 'draggabilly' {
    interface Position {
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

        on(eventName: DraggabillyEventName,
           listener: (event: Event, pointer: MouseEvent | Touch, moveVector: Position) => void): void;

        off(eventName: DraggabillyEventName,
            listener: (event: Event, pointer: MouseEvent | Touch, moveVector: Position) => void): void;

        once(eventName: DraggabillyEventName,
             listener: (event: Event, pointer: MouseEvent | Touch, moveVector?: Position) => void): void;

        enable(): void;

        disable(): void;

        destroy(): void;
    }
}
