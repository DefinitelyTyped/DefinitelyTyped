// Type definitions for switchery 0.8.1
// Project: https://github.com/abpetkov/switchery
// Definitions by: Bruno Grieder <https://github.com/bgrieder>, Clayton Lautier <https://github.com/claylaut>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var switchery: Switchery.SwitcheryStatic;
export default switchery;
export as namespace Switchery;

declare namespace Switchery {

    interface SwitcheryStatic {
        new (node: Node, options?: Options): Switchery;
    }

    interface Options {

        /**
         * color of the switch element (HEX or RGB value)
         * @default '#64bd63'
         */
        color?: string;
        /**
         * secondary color for background color and border, when the switch is off
         * @default '#dfdfdf'
         */
        secondaryColor?: string;
        /**
         * color of the jack/handle element
         * @default '#fff'
         */
        jackColor?: string;
        /**
         * color of unchecked jack/handle element
         * @default 'null'
         */
        jackSecondaryColor?: string;
        /**
         * class name for the switch element (by default styled in switchery.css)
         * @default 'switchery'
         */
        className?: string;
        /**
         * enable or disable click events and changing the state of the switch (boolean value)
         * @default false
         */
        disabled?: boolean;
        /**
         * opacity of the switch when it's disabled (0 to 1)
         * @default 0.5
         */
        disabledOpacity?: number;
        /**
         * length of time that the transition will take, ex. '0.4s', '1s', '2.2s' (Note: transition speed of the handle is twice shorter)
         * @default '0.1s'
         */
        speed?: string;
        /**
         * size of the switch element (small or large)
         * @default 'default'
         */
        size?: string;
    }
}

interface Switchery {

    /**
     * Unbinding all event handlers attached to the switch element to prepare the object for garbage collection.
     * @returns {void}
     */
    destroy(): void;

    /**
     * Enable disabled switch by re-adding event handlers and changing the opacity to 1.
     * @returns {void}
     */
    enable(): void;

    /**
     * Disable switch by unbinding attached events and changing opacity to disabledOpacity value
     * @returns {void}
     */
    disable(): void;

    /**
     * Check if switch is currently disabled by checking the readonly and disabled attributes on the checkbox and the disabled option set via JS.
     *  If any of those are present, the returned value is true.
     * @returns {boolean} whether it's disabled or not.
     */
    isDisabled(): boolean;
}
