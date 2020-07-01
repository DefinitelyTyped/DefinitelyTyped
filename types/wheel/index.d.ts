// Type definitions for wheel 0.0
// Project: https://github.com/anvaka/wheel
// Definitions by: Bradley Odell <https://github.com/BTOdell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Adds a callback to receive mouse wheel events from the given element.
 */
declare function wheel(element: GlobalEventHandlers,
    callback: (event: WheelEvent) => void,
    useCapture?: boolean): void;

declare namespace wheel {
    /**
     * Adds a callback to receive mouse wheel events from the given element.
     */
    function addWheelListener(element: GlobalEventHandlers,
        callback: (event: WheelEvent) => void,
        useCapture?: boolean): void;

    /**
     *  Removes a previously added wheel listener callback.
     */
    function removeWheelListener(element: GlobalEventHandlers,
        callback: (event: WheelEvent) => void,
        useCapture?: boolean): void;
}

export = wheel;
