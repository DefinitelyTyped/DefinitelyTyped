import { ComponentClass } from "react";
import { AutoFocus, ReactWidgetsCommonProps } from "./CommonProps";

declare namespace NumberPicker {
    interface NumberPickerProps extends ReactWidgetsCommonProps, AutoFocus {
        /**
         * Set the culture of the NumberPicker, passed to the configured localizer.
         */
        culture?: string | undefined;
        /**
         * An object of props that is passed directly to the underlying input component.
         */
        inputProps?: object | undefined;
        /**
         * The current value of the NumberPicker.
         */
        value?: number | undefined;
        /**
         * Default Value.
         */
        defaultValue?: number | undefined;
        /**
         * Change event Handler that is called when the value is changed. The handler is called with
         * the current numeric value or null.
         */
        onChange?: ((value?: number) => void) | undefined;
        /**
         * A format string used to display the number value. Localizer dependent, read localization
         * for more info.
         * @see http://jquense.github.io/react-widgets/docs/#i18n
         */
        format?: any;
        /**
         * Determines how the NumberPicker parses a number from the localized string representation.
         * You can also provide a parser Function to pair with a custom format.
         */
        parse?: string[] | ((str: string, culture: string) => number) | undefined;
        /**
         * The minimum number that the NumberPicker value.
         * @default -Infinity
         */
        min?: number | undefined;
        /**
         * The maximum number that the NumberPicker value.
         * @default Infinity
         */
        max?: number | undefined;
        /**
         * Amount to increase or decrease value when using the spinner buttons.
         * @default 1
         */
        step?: number | undefined;
        /**
         * Specify how precise the value should be when typing, incrementing, or decrementing the
         * value. When empty, precision is parsed from the current format and culture.
         */
        precision?: number | undefined;
        /**
         * Object hash containing display text and/or text for screen readers. Use the messages
         * object to localize widget text and increase accessibility.
         */
        messages?: NumberPickerMessages | undefined;
        /**
         * The HTML name attribute, passed directly to the input element.
         */
        name?: string | undefined;
        /**
         * The native onKeyDown event, called preventDefault will prevent any custom behavior, included keyboard shortcuts.
         */
        onKeyDown?: ((event: KeyboardEvent) => void) | undefined;
        /**
         * The native onKeyPress event, called preventDefault will stop any custom behavior.
         */
        onKeyPress?: ((event: KeyboardEvent) => void) | undefined;
        /**
         * Controls the visibility of the NumberPicker popup. Use defaultOpen to set an initial value for uncontrolled widgets.
         * @default false
         */
        open?: boolean | undefined;
        /**
         * Text to display in the input when the value is empty.
         */
        placeholder?: string | undefined;
    }

    interface NumberPickerMessages {
        /**
         * Number picker spinner up button text for screen readers.
         * @default "increment value"
         */
        increment?: string | undefined;
        /**
         * Number picker spinner down button text for screen readers.
         * @default "decrement value"
         */
        decrement?: string | undefined;
    }
}

interface NumberPickerClass extends ComponentClass<NumberPicker.NumberPickerProps> {}
declare var NumberPicker: NumberPickerClass;
export = NumberPicker;
