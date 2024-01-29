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
