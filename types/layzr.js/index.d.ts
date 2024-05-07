declare namespace Layzr {
    type LayzrEvents = "src:before" | "src:after";

    interface LayzrInstance {
        /**
         * Manually check if elements are in the viewport. This method is called while the window is scrolled or resized.
         */
        check(): LayzrInstance;
        /**
         * Emit an event, firing all of its handlers.
         * @param name Event name
         * @param args Arguments that will be passed to each handler
         */
        emit(name: LayzrEvents, ...args: any[]): LayzrInstance;
        /**
         * Add or remove the scroll and resize event handlers.
         * @param flag
         */
        handlers(flag: boolean): LayzrInstance;
        /**
         * Remove a specific handler from an event.
         * @param name Event name
         * @param handler Event handler
         */
        off(name: LayzrEvents, handler?: () => {}): LayzrInstance;
        /**
         * This event is emitted immediately before/after an image source is set. The image node is passed to the event handler.
         * @param name Event name
         * @param handler Event handler
         */
        on(
            name: LayzrEvents,
            handler: (element: HTMLElement) => void,
        ): LayzrInstance;
        /**
         * This event is emitted immediately before/after an image source is set. The image node is passed to the event handler. Fires once.
         * @param name Event name
         * @param handler Event handler
         */
        once(
            name: LayzrEvents,
            handler: (element: HTMLElement) => void,
        ): LayzrInstance;
        /**
         * Update the elements Layzr is checking.
         */
        update(): LayzrInstance;
    }

    interface LayzrOptions {
        /**
         * Customize the attribute the normal resolution source is taken from.
         */
        normal?: string | undefined;
        /**
         * Customize the attribute the retina/high resolution source is taken from.
         */
        retina?: string | undefined;
        /**
         * Customize the attribute the source set is taken from.
         */
        srcset?: string | undefined;
        /**
         * Adjust when images load, relative to the viewport. Positive values make images load sooner, negative values make images load later.
         *
         * Threshold is a percentage of the viewport height, identical to the CSS vh unit.
         */
        threshold?: number | undefined;
    }
}
/**
 * @param options Options
 */
declare function Layzr(options?: Layzr.LayzrOptions): Layzr.LayzrInstance;

export = Layzr;
export as namespace Layzr;
