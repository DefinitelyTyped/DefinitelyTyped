import * as Popper from "@popperjs/core";
import BaseComponent from "./base-component";

declare class Dropdown extends BaseComponent {
    constructor(element: string | Element, options?: Partial<Dropdown.Options>);

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
    static getInstance(element: Element, options?: Partial<Dropdown.Options>): Dropdown | null;

    static jQueryInterface: Dropdown.jQueryInterface;

    // static NAME: 'dropdown';

    /**
     * Default settings of this plugin
     *
     * @link https://getbootstrap.com/docs/5.0/getting-started/javascript/#default-settings
     */
    static Default: Dropdown.Options;

    static DefaultType: Record<keyof Dropdown.Options, string>;

    static DATA_KEY: string;
}

declare namespace Dropdown {
    enum Events {
        /**
         * Fires immediately when the show instance method is called.
         */
        show = "show.bs.dropdown",

        /**
         * Fired when the dropdown has been made visible to the user and CSS
         * transitions have completed.
         */
        shown = "shown.bs.dropdown",

        /**
         * Fires immediately when the hide instance method has been called.
         */
        hide = "hide.bs.dropdown",

        /**
         * Fired when the dropdown has finished being hidden from the user and
         * CSS transitions have completed.
         */
        hidden = "hidden.bs.dropdown",
    }

    type Offset = [number, number];

    type OffsetFunction = () => Offset;

    type PopperConfigFunction = () => Partial<Popper.Options>;

    interface Options {
        /**
         * Offset of the dropdown relative to its target. You can pass a string
         * in data attributes with comma separated values like:
         * data-bs-offset="10,20"
         *
         * When a function is used to determine the offset, it is called with an
         * object containing the popper placement, the reference, and popper
         * rects as its first argument. The triggering element DOM node is
         * passed as the second argument. The function must return an array with
         * two numbers: [skidding, distance].
         *
         * For more information refer to Popper's offset docs.
         *
         * @default [0, 2]
         */
        offset: Offset | string | OffsetFunction;

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
         * 'toggle', 'parent', an HTMLElement reference or an object providing
         * getBoundingClientRect. For more information refer to Popper.js's
         * referenceObject docs.
         *
         * @see {@link https://popper.js.org/docs/v2/constructors/#createpopper}
         * @default "toggle"
         */
        reference: "toggle" | "parent" | Element | Popper.Rect;

        /**
         * By default, we use Popper.js for dynamic positioning. Disable this
         * with static.
         *
         * @default "dynamic"
         */
        display: "dynamic" | "static";

        /**
         * To change Bootstrap's default Popper.js config, see Popper.js's
         * configuration
         *
         * When a function is used to create the Popper configuration, it's
         * called with an object that contains the Bootstrap's default Popper
         * configuration. It helps you use and merge the default with your own
         * configuration. The function must return a configuration object for
         * Popper.
         *
         * @see {@link https://popper.js.org/docs/v2}
         * @default null
         */
        popperConfig: Partial<Popper.Options> | PopperConfigFunction | null;
    }

    type jQueryInterface = (config?: Partial<Options> | "toggle" | "show" | "hide" | "update" | "dispose") => void;
}

export default Dropdown;
