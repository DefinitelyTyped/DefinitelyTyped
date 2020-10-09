/// <reference types="jquery"/>

declare class Collapse {
    constructor(element: Element, options?: Partial<Collapse.Options>);

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

    /**
     * Destroys an element's collapse.
     */
    dispose(): void;

    /**
     * Static method which allows you to get the collapse instance associated
     * with a DOM element.
     */
    static getInstance(element: Element, options?: Partial<Collapse.Options>): Collapse;
}

declare namespace Collapse {
    enum Events {
        /**
         * This event fires immediately when the show instance method is called.
         */
        show = 'show.bs.collapse',

        /**
         * This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).
         */
        shown = 'shown.bs.collapse',

        /**
         * This event is fired immediately when the hide method has been called.
         */
        hide = 'hide.bs.collapse',

        /**
         * This event is fired when a collapse element has been hidden from the
         * user (will wait for CSS transitions to complete).
         */
        hidden = 'hidden.bs.collapse',
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
}

export default Collapse;
