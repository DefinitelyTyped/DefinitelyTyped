declare class Toast {
    constructor(element: Element);

    /**
     * When using scrollspy in conjunction with adding or removing of
     * elements from the DOM, you’ll need to call the refresh method like
     * so:
     */
    refresh(): void;

    /**
     * Destroys an element’s scrollspy.
     */
    dispose(): void;

    /**
     * Static method which allows you to get the scrollspy instance associated
     * with a DOM element
     */
    static getInstance(element: Element): Toast;
}

declare namespace Toast {
    enum Events {
        /**
         * This event fires immediately when the show instance method is called.
         */
        show = 'show.bs.toast',

        /**
         * This event is fired when the toast has been made visible to the user.
         */
        shown = 'shown.bs.toast',

        /**
         * This event is fired immediately when the hide instance method has
         * been called.
         */
        hide = 'hide.bs.toast',

        /**
         * This event is fired when the toast has finished being hidden from the
         * user.
         */
        hidden = 'hidden.bs.toast',
    }

    interface Options {
        /**
         * Apply a CSS fade transition to the toast
         *
         * @default true
         */
        animation: boolean;

        /**
         * Auto hide the toast
         *
         * @default true
         */
        autohide: boolean;

        /**
         * Delay hiding the toast (ms)
         *
         * @default 500
         */
        delay: number;
    }
}

export default Toast;
