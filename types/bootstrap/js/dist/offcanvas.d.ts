import BaseComponent, { GetInstanceFactory, GetOrCreateInstanceFactory } from './base-component';

declare class Offcanvas extends BaseComponent {
    /**
     * Static method which allows you to get the offcanvas instance associated with a DOM element
     */
    static getInstance: GetInstanceFactory<Offcanvas>;

    /**
     * Static method which allows you to get the offcanvas instance associated with
     *  a DOM element, or create a new one in case it wasn’t initialised
     */
    static getOrCreateInstance: GetOrCreateInstanceFactory<Offcanvas, Partial<Offcanvas.Options>>;

    static jQueryInterface: Offcanvas.jQueryInterface;

    constructor(element: string | Element, options?: Partial<Offcanvas.Options>);

    /**
     * Toggles an offcanvas element to shown or hidden. Returns to the caller before the offcanvas element has actually
     * been shown or hidden (i.e. before the shown.bs.offcanvas or hidden.bs.offcanvas event occurs).
     */
    toggle(relatedTarget?: HTMLElement): void;

    /**
     * Shows an offcanvas element. Returns to the caller before the offcanvas element has actually been shown
     * (i.e. before the shown.bs.offcanvas event occurs).
     */
    show(relatedTarget?: HTMLElement): void;

    /**
     * Hides an offcanvas element. Returns to the caller before the offcanvas element has actually been hidden
     * (i.e. before the hidden.bs.offcanvas event occurs).
     */
    hide(): void;
}

declare namespace Offcanvas {
    interface Options {
        /**
         * Apply a backdrop on body while offcanvas is open. Alternatively, specify `static` for a backdrop which
         * doesn’t close the offcanvas when clicked.
         *
         * @default true
         */
        backdrop: boolean | 'static';

        /**
         * Closes the offcanvas when escape key is pressed
         *
         * @default true
         */
        keyboard: boolean;

        /**
         * Allow body scrolling while offcanvas is open
         *
         * @default false
         */
        scroll: boolean;
    }

    enum Events {
        /**
         * This event fires immediately when the show instance method is called.
         */
        show = 'show.bs.offcanvas',

        /**
         * This event is fired when an offcanvas element has been made visible to the user (will wait for CSS transitions to complete).
         */
        shown = 'shown.bs.offcanvas',

        /**
         * This event is fired immediately when the hide method has been called.
         */
        hide = 'hide.bs.offcanvas',

        /**
         * This event is fired when an offcanvas element has been hidden from the user (will wait for CSS transitions to complete).
         */
        hidden = 'hidden.bs.offcanvas',
    }

    type jQueryInterface = (config?: 'toggle' | 'show' | 'hide') => JQuery;
}

export default Offcanvas;
