// Type definitions for wheel 0.0.5
// Project: https://github.com/anvaka/wheel
// Definitions by: Bradley Odell <https://github.com/BTOdell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Adds a callback to receive mouse wheel events from the given element.
 */
export default function addWheelListener(element: GlobalEventHandlers,
                                         callback: (event: WheelEvent) => void,
                                         useCapture?: boolean): void;

/**
 * Adds a callback to receive mouse wheel events from the given element.
 */
export function addWheelListener(element: GlobalEventHandlers,
                                 callback: (event: WheelEvent) => void,
                                 useCapture?: boolean): void;

/**
 * Removes a previously added wheel listener callback.
 */
export function removeWheelListener(element: GlobalEventHandlers,
                                    callback: (event: WheelEvent) => void,
                                    useCapture?: boolean): void;
