import * as React from 'react';
import { ReactWidgetsCommonProps } from './CommonProps';

interface NumberPickerProps extends ReactWidgetsCommonProps<NumberPickerClass>{
    /**
     * The current value of the NumberPicker.
     */
    value?: number;
    /**
     * Default Value.
     */
    defaultValue?: number;
    /**
     * Change event Handler that is called when the value is changed. The handler is called with
     * the current numeric value or null.
     */
    onChange?: (value?: number) => void;
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
    parse?: string[] | ((str: string, culture: string) => number);
    /**
     * The minimum number that the NumberPicker value.
     * @default -Infinity
     */
    min?: number;
    /**
     * The maximum number that the NumberPicker value.
     * @default Infinity
     */
    max?: number;
    /**
     * Amount to increase or decrease value when using the spinner buttons.
     * @default 1
     */
    step?: number;
    /**
     * Specify how precise the value should be when typing, incrementing, or decrementing the
     * value. When empty, precision is parsed from the current format and culture.
     */
    precision?: number;
    /**
     * Object hash containing display text and/or text for screen readers. Use the messages
     * object to localize widget text and increase accessibility.
     */
    messages?: NumberPickerMessages;
}

interface NumberPickerMessages {
    /**
     * Number picker spinner up button text for screen readers.
     * @default "increment value"
     */
    increment?: string;
    /**
     * Number picker spinner down button text for screen readers.
     * @default "decrement value"
     */
    decrement?: string;
}

interface NumberPicker extends React.ReactElement<NumberPickerProps> {}
interface NumberPickerClass extends React.ComponentClass<NumberPickerProps> {}
declare var NumberPicker: NumberPickerClass;
export = NumberPicker;
