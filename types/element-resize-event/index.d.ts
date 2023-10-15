// Type definitions for element-resize-event 3.0
// Project: https://github.com/KyleAMathews/element-resize-event
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
//                 Pierre-Luc Gregoire <https://github.com/plgregoire>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = elementResizeEvent;

/**
 * Make it easy to listen for element resize events.
 *
 * @example
 * import elementResizeEvent = require("element-resize-event");
 *
 * const element = document.getElementById("resize");
 *
 * if (element) {
 *     elementResizeEvent(element, () => {
 *         console.log("resized!");
 *         console.log(element.offsetWidth);
 *     });
 * }
 */
declare function elementResizeEvent(domNode: Element, callback: () => any): void;

declare namespace elementResizeEvent {
    /**
     * Unbind a previously registered event listener.
     *
     * @example
     * import elementResizeEvent = require("element-resize-event");
     *
     * const element = document.getElementById("resize");
     *
     * if (element) {
     *     // ...
     *     elementResizeEvent.unbind(element);
     * }
     */
    function unbind(domNode: Element, callback?: () => any): void;
}
