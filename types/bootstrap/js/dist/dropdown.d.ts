import * as Popper from '@popperjs/core';
import BaseComponent from './base-component';

declare class Dropdown extends BaseComponent {
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
     * Static method which allows you to get the dropdown instance associated
     * with a DOM element.
     */
    static getInstance(element: Element, options?: Partial<Dropdown.Options>): Dropdown;

    // static NAME: 'dropdown';

    /**
     * Default settings of this plugin
     *
     * @link https://getbootstrap.com/docs/5.0/getting-started/javascript/#default-settings
     */
    static Default: Record<string, any>;
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
         * Allow Dropdown to flip in case of an overlapping on the reference
         * element. For more information refer to Popper.js's flip docs.
         *
         * @see {@link https://popper.js.org/docs/v2/modifiers/flip}
         * @default true
         */
        flip: boolean;

        /**
         * Overflow constraint boundary of the dropdown menu. Accepts the values
         * of 'viewport', 'window', 'scrollParent', or an HTMLElement reference
         * (JavaScript only). For more information refer to Popper.js's
         * preventOverflow docs.
         *
         * @see {@link https://popper.js.org/docs/v2/modifiers/prevent-overflow/#boundary}
         * @default "scrollParent"
         */
        boundary: Popper.Boundary | Element;

        /**
         * Reference element of the dropdown menu. Accepts the values of
         * 'toggle', 'parent', or an HTMLElement reference. For more information
         * refer to Popper.js's referenceObject docs.
         *
         * @see {@link https://popper.js.org/docs/v2/constructors/#createpopper}
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
         * @see {@link https://popper.js.org/docs/v2}
         * @default null
         */
        popperConfig: Partial<Popper.Options> | null;
    }

    type jQueryInterface = (config?: Partial<Options> | 'toggle' | 'show' | 'hide' | 'update' | 'dispose') => void;
}

export default Dropdown;
