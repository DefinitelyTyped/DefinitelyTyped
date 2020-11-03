import * as Popper from 'popper.js';

declare class Dropdown {
    constructor(element: Element, options?: Partial<Dropdown.Options>);

    /**
     * Toggles the dropdown menu of a given navbar or tabbed navigation.
     */
    toggle(): void;

    /**
     * Shows the dropdown menu of a given navbar or tabbed navigation.
     */
    show(): void;

    /**
     * Hides the dropdown menu of a given navbar or tabbed navigation.
     */
    hide(): void;

    /**
     * Updates the position of an element's dropdown.
     */
    update(): void;

    /**
     * Destroys an element's dropdown.
     */
    dispose(): void;

    /**
     * Static method which allows you to get the dropdown instance associated
     * with a DOM element.
     */
    static getInstance(element: Element, options?: Partial<Dropdown.Options>): Dropdown;
}

declare namespace Dropdown {
    enum Events {
        /**
         * Fires immediately when the show instance method is called.
         */
        show = 'show.bs.dropdown',

        /**
         * Fired when the dropdown has been made visible to the user and CSS
         * transitions have completed.
         */
        shown = 'shown.bs.dropdown',

        /**
         * Fires immediately when the hide instance method has been called.
         */
        hide = 'hide.bs.dropdown',

        /**
         * Fired when the dropdown has finished being hidden from the user and
         * CSS transitions have completed.
         */
        hidden = 'hidden.bs.dropdown',
    }

    interface Options {
        /**
         * Offset of the dropdown relative to its target.
         *
         * When a function is used to determine the offset, it is called with an
         * object containing the offset data as its first argument. The function
         * must return an object with the same structure. The triggering element
         * DOM node is passed as the second argument.
         *
         * For more information refer to Popper.js's offset docs.
         *
         * @see {@link https://popper.js.org/docs/v1/#modifiers..offset.offset}
         * @default 0
         */
        offset: number;

        /**
         * Allow Dropdown to flip in case of an overlapping on the reference
         * element. For more information refer to Popper.js's flip docs.
         *
         * @see {@link https://popper.js.org/docs/v1/#modifiers..flip.enabled}
         * @default true
         */
        flip: boolean;

        /**
         * Overflow constraint boundary of the dropdown menu. Accepts the values
         * of 'viewport', 'window', 'scrollParent', or an HTMLElement reference
         * (JavaScript only). For more information refer to Popper.js's
         * preventOverflow docs.
         *
         * @see {@link https://popper.js.org/docs/v1/#modifiers..preventOverflow.boundariesElement}
         * @default "scrollParent"
         */
        boundary: Popper.Boundary | Element;

        /**
         * Reference element of the dropdown menu. Accepts the values of
         * 'toggle', 'parent', or an HTMLElement reference. For more information
         * refer to Popper.js's referenceObject docs.
         *
         * @see {@link https://popper.js.org/docs/v1/#referenceObject}
         * @default "toggle"
         */
        reference: 'toggle' | 'parent' | Element;

        /**
         * By default, we use Popper.js for dynamic positioning. Disable this
         * with static.
         *
         * @default "dynamic"
         */
        display: 'dynamic' | 'static';

        /**
         * To change Bootstrap's default Popper.js config, see Popper.js's
         * configuration
         *
         * @see {@link https://popper.js.org/docs/v1/#Popper.Defaults}
         * @default null
         */
        popperConfig: Popper.PopperOptions | null;
    }
}

export default Dropdown;
