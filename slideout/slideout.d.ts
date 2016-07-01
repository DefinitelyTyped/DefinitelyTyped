// Type definitions for Slideout 0.1.12
// Project: https://github.com/mango/slideout
// Definitions by: Markus Peloso <https://github.com/ToastHawaii/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "slideout" {
    export = Slideout;
}

declare namespace Slideout {
    /**
     * Options to customize a new instance of Slideout.
     */
    interface Options {
        /**
         * The DOM element that contains all your application content (.slideout-panel).
         */
        panel: HTMLElement;

        /**
         * The DOM element that contains your menu application (.slideout-menu).
         */
        menu: HTMLElement;

        /**
         * The time (milliseconds) to open/close the slideout.
         * Default: 300.
         */
        duration?: number;

        /**
         * The CSS effect to use when animating the opening and closing of the slideout.
         * Default: ease.
        */
        fx?: string;

        /**
         *   Default: 256.
         */
        padding?: number;

        /**
         * The number of px needed for the menu can be opened completely, otherwise it closes.
         * Default: 70.
         */
        tolerance?: number;

        /**
         * Set this option to false to disable Slideout touch events.
         * Default: true.
         */
        touch?: boolean;

        /**
         * The side to open the slideout.
         * Default: left.
         */
        side?: "left" | "right";
    }

    type Events = "beforeopen" | "open" | "beforeclose" | "close" | "translatestart" | "translate" | "translateend";
}

/**
 * A touch slideout navigation menu for your mobile web apps.
 */
declare class Slideout {
    /**
     * A touch slideout navigation menu for your mobile web apps.
     * @param options Options to customize a new instance of Slideout.
     */
    constructor(options: Slideout.Options);

    /**
     * Opens the slideout menu. It emits beforeopen and open events.
     */
    open(): Slideout;

    /**
     * Closes the slideout menu. It emits beforeclose and close events.
     */
    close(): Slideout;

    /**
     * Toggles (open/close) the slideout menu.
     */
    toggle(): Slideout;

    /**
     * Returns true if the slideout is currently open, and false if it is closed.
     */
    isOpen(): boolean;

    /**
     * Cleans up the instance so another slideout can be created on the same area.
     */
    destroy(): Slideout;

    /**
     * Enables opening the slideout via touch events.
     */
    enableTouch(): Slideout;

    /**
     * Disables opening the slideout via touch events.
     */
    disableTouch(): Slideout;

    /**
     * Adds a listener to the collection for the specified event.
     * @param event The event name.
     * @param listener A listener function to add.
     */
    on(event: "translate", listener: (translateX: number) => any): Slideout;

    /**
     * Adds a listener to the collection for the specified event.
     * @param event The event name.
     * @param listener A listener function to add.
     */
    on(event: Slideout.Events, listener: Function): Slideout;

    /**
   * Adds a listener to the collection for the specified event that will be called only once.
   * @param event The event name.
   * @param listener A listener function to add.
   */
    once(event: "translate", listener: (translateX: number) => any): Slideout;

    /**
     * Adds a listener to the collection for the specified event that will be called only once.
     * @param event The event name.
     * @param listener A listener function to add.
     */
    once(event: Slideout.Events, listener: Function): Slideout;

    /**
     * Removes a listener from the collection for the specified event.
     * @param event The event name.
     * @param listener A listener function to remove.
     */
    off(event: "translate", listener: (translateX: number) => any): Slideout;

    /**
     * Removes a listener from the collection for the specified event.
     * @param event The event name.
     * @param listener A listener function to remove.
     */
    off(event: Slideout.Events, listener: Function): Slideout;

    /**
     * Execute each item in the listener collection in order with the specified data.
     * @param event The name of the event you want to emit.
     * @param data Data to pass to the listeners.
     */
    emit(event: Slideout.Events, ...data: any[]): Slideout;
}
