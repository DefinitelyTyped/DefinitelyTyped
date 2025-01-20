import BaseComponent, { GetInstanceFactory, GetOrCreateInstanceFactory } from "./base-component";

declare class Collapse extends BaseComponent {
    /**
     * Static method which allows you to get the collapse instance associated
     * with a DOM element.
     */
    static getInstance: GetInstanceFactory<Collapse>;

    /**
     * Static method which returns a collapse instance associated to a DOM element
     *  or create a new one in case it wasn't initialised.
     * You can use it like this: bootstrap.Collapse.getOrCreateInstance(element)
     */
    static getOrCreateInstance: GetOrCreateInstanceFactory<Collapse, Partial<Collapse.Options>>;

    static jQueryInterface: Collapse.jQueryInterface;

    /**
     * Default settings of this plugin
     *
     * @link https://getbootstrap.com/docs/5.0/getting-started/javascript/#default-settings
     */
    static Default: Collapse.Options;
    constructor(element: string | Element, options?: Partial<Collapse.Options>);

    /**
     * Toggles a collapsible element to shown or hidden. Returns to the caller
     * before the collapsible element has actually been shown or hidden (i.e.
     * before the shown.bs.collapse or hidden.bs.collapse event occurs).
     */
    toggle(): void;

    /**
     * Shows a collapsible element. Returns to the caller before the collapsible
     * element has actually been shown (e.g., before the shown.bs.collapse event
     * occurs).
     */
    show(): void;

    /**
     * Hides a collapsible element. Returns to the caller before the collapsible
     * element has actually been hidden (e.g., before the hidden.bs.collapse
     * event occurs).
     */
    hide(): void;
}

declare namespace Collapse {
    enum Events {
        /**
         * This event fires immediately when the show instance method is called.
         */
        show = "show.bs.collapse",

        /**
         * This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).
         */
        shown = "shown.bs.collapse",

        /**
         * This event is fired immediately when the hide method has been called.
         */
        hide = "hide.bs.collapse",

        /**
         * This event is fired when a collapse element has been hidden from the
         * user (will wait for CSS transitions to complete).
         */
        hidden = "hidden.bs.collapse",
    }

    interface Options {
        /**
         * If parent is provided, then all collapsible elements under the specified
         * parent will be closed when this collapsible item is shown. (similar to
         * traditional accordion behavior - this is dependent on the card class).
         * The attribute has to be set on the target collapsible area.
         *
         * @default false
         */
        parent: string | Element | JQuery;

        /**
         * Toggles the collapsible element on invocation
         *
         * @default true
         */
        toggle: boolean;
    }

    type jQueryInterface = (config?: Partial<Options> | "show" | "hide" | "toggle" | "dispose") => JQuery;
}

export default Collapse;
