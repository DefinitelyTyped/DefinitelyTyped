declare namespace Draggabilly {
    interface Position {
        x: number;
        y: number;
    }

    interface DraggabillyOptions {
        /** Constrains movement to horizontal or vertical axis. */
        axis?: "x" | "y" | undefined;
        /** Contains movement to the bounds of the element. If true, the container will be the parent element. */
        containment?: Element | string | boolean | undefined;
        /** Snaps the element to a grid, every `x` and `y` pixels. */
        grid?: [number, number] | undefined;
        /**
         * Specifies on what element the drag interaction starts.
         *
         * `handle` is useful for when you do not want all inner elements to be used for dragging, like inputs and forms.
         * See [back handle example on CodePen](https://codepen.io/desandro/pen/znAuH).
         */
        handle?: string | HTMLElement | ReadonlyArray<HTMLElement> | NodeList | undefined;
    }

    type DraggabillyClickEventName = "dragStart" | "dragEnd" | "pointerDown" | "pointerUp" | "staticClick";

    type DraggabillyMoveEventName = "dragMove" | "pointerMove";

    interface DraggabillyEventCallback {
        (
            eventName: Draggabilly.DraggabillyClickEventName,
            listener: (
                /** The original event */
                event: Event,
                /** The event object that has `.pageX` and `.pageY` */
                pointer: MouseEvent | Touch,
            ) => void,
        ): Draggabilly;

        (
            eventName: Draggabilly.DraggabillyMoveEventName,
            listener: (
                /** The original event */
                event: Event,
                /** The event object that has `.pageX` and `.pageY` */
                pointer: MouseEvent | Touch,
                /** How far the pointer has moved from its start position */
                moveVector: Draggabilly.Position,
            ) => void,
        ): Draggabilly;
    }
}

declare class Draggabilly {
    position: Draggabilly.Position;

    constructor(element: Element | string, options?: Draggabilly.DraggabillyOptions);

    on: Draggabilly.DraggabillyEventCallback;

    off: Draggabilly.DraggabillyEventCallback;

    once: Draggabilly.DraggabillyEventCallback;

    disable(): void;

    enable(): void;

    setPosition(x: number, y: number): void;

    dragEnd(): void;

    destroy(): void;
}

export = Draggabilly;
