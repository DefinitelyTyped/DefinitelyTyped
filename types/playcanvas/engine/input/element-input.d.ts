declare namespace pc {

    /**
     * @name pc.ElementInputEvent
     * @class Represents an input event fired on a {@link pc.ElementComponent}. When an event is raised on an ElementComponent it bubbles up to its parent ElementComponents unless we call stopPropagation().
     * @description Create an instance of a pc.ElementInputEvent.
     * @param {MouseEvent|TouchEvent} event The MouseEvent or TouchEvent that was originally raised.
     * @property {MouseEvent|TouchEvent} event The MouseEvent or TouchEvent that was originally raised.
     * @property {pc.ElementComponent} element The ElementComponent that this event was originally raised on.
     */
    class ElementInputEvent {
        constructor(event: BrowserMouseEvent | BrowserTouchEvent, element: pc.ElementComponent)

        event: BrowserMouseEvent | BrowserTouchEvent;
        element: pc.ElementComponent;

        /**
         * @function
         * @name pc.ElementInputEvent#stopPropagation
         * @description Stop propagation of the event to parent {@link pc.ElementComponent}s. This also stops propagation of the event to other event listeners of the original DOM Event.
         */
        stopPropagation(): void;
    }

    /**
     * @name pc.ElementMouseEvent
     * @class Represents a Mouse event fired on a {@link pc.ElementComponent}.
     * @extends pc.ElementInputEvent
     * @description Create an instance of a pc.ElementMouseEvent.
     * @param {MouseEvent} event The MouseEvent that was originally raised.
     * @param {pc.ElementComponent} element The ElementComponent that this event was originally raised on.
     * @param {Number} x The x coordinate
     * @param {Number} y The y coordinate
     * @param {Number} lastX The last x coordinate
     * @param {Number} lastY The last y coordinate
     * @property {Boolean} ctrlKey Whether the ctrl key was pressed
     * @property {Boolean} altKey Whether the alt key was pressed
     * @property {Boolean} shiftKey Whether the shift key was pressed
     * @property {Boolean} metaKey Whether the meta key was pressed
     * @property {Number} button The mouse button
     * @property {Number} dx The amount of horizontal movement of the cursor
     * @property {Number} dy The amount of vertical movement of the cursor
     * @property {Number} wheel The amount of the wheel movement
     */
    class ElementMouseEvent extends pc.ElementInputEvent {
        constructor(event: BrowserMouseEvent, element: pc.ElementComponent, x: number, y: number, lastX: number, lastY: number)

        ctrlKey: boolean;
        altKey: boolean;
        shiftKey: boolean;
        metaKey: boolean;
        button: number;
        dx: number;
        dy: number;
        wheel: number;
    }

    /**
     * @name pc.ElementTouchEvent
     * @class Represents a TouchEvent fired on a {@link pc.ElementComponent}.
     * @extends pc.ElementInputEvent
     * @description Create an instance of a pc.ElementTouchEvent.
     * @param {TouchEvent} event The TouchEvent that was originally raised.
     * @param {pc.ElementComponent} element The ElementComponent that this event was originally raised on.
     * @param {pc.ElementInput} input The pc.ElementInput instance
     * @property {Touch[]} touches The Touch objects representing all current points of contact with the surface, regardless of target or changed status.
     * @property {Touch[]} changedTouches The Touch objects representing individual points of contact whose states changed between the previous touch event and this one.
     */
    class ElementTouchEvent extends pc.ElementInputEvent {
        constructor(event: BrowserTouchEvent, element: pc.ElementComponent, input: pc.ElementInput)

        touches: BrowserTouch[];
        changedTouches: BrowserTouch[];
    }

    /**
     * @name pc.ElementInput
     * @class Handles mouse and touch events for {@link pc.ElementComponent}s. When input events
     * occur on an ElementComponent this fires the appropriate events on the ElementComponent.
     * @description Create a new pc.ElementInput instance.
     * @param {Element} domElement The DOM element
     */
    class ElementInput {
        constructor(domElement: Element)

        /**
         * @function
         * @name pc.ElementInput#attach
         * @description Attach mouse and touch events to a DOM element.
         * @param {Element} domElement The DOM element
         */
        attach(domElement: Element): void;

        /**
         * @function
         * @name pc.ElementInput#detach
         * @description Remove mouse and touch events from the DOM element that it is attached to
         */
        detach(): void;

        /**
         * @function
         * @name pc.ElementInput#addElement
         * @description Add a {@link pc.ElementComponent} to the internal list of ElementComponents that are being checked for input.
         * @param {pc.ElementComponent} element The ElementComponent
         */
        addElement(element: pc.ElementComponent): void;

        /**
         * @function
         * @name pc.ElementInput#removeElement
         * @description Remove a {@link pc.ElementComponent} from the internal list of ElementComponents that are being checked for input.
         * @param {pc.ElementComponent} element The ElementComponent
         */
        removeElement(element: pc.ElementComponent): void;
    }
}