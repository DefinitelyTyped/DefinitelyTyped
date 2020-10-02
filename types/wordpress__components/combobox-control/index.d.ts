import { ComponentType } from 'react';

declare namespace ComboboxControl {
    interface Option {
        value: string;
        label: string;
    }

    interface Props {
        /**
         * The label for the control.
         */
        label: string;
        /**
         * If true, the label will only be visible to screen readers.
         * @defaultValue false
         */
        hideLabelFromVision?: boolean;
        /**
         * If this property is added, a help text will be generated
         * using help property as the content.
         */
        help?: string;
        /**
         * The options from which a choice can be made.
         */
        options: Option[];
        /**
         * Function called with the control's search input
         * value changes. The argument contains the next
         * input value.
         */
        onInputChange?: (value: string) => void;
        /**
         * Function called with the selected value changes.
         */
        onChange?: (value: string) => void;
        /**
         * The current value of the input.
         */
        value: string;
    }
}
declare const ComboboxControl: ComponentType<ComboboxControl.Props>;

export default ComboboxControl;
