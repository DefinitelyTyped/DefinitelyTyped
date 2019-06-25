import { ComponentType } from '@wordpress/element';

import BaseControl from '../base-control';

declare namespace RadioControl {
    interface Props extends BaseControl.ControlProps {
        options?: readonly Option[];
        /**
         * The value property of the currently selected option.
         */
        selected?: Option['value'];
        /**
         * A function that receives the value of the new option that is being
         * selected as input.
         */
        onChange(value: Option['value']): void;
    }
    interface Option {
        /**
         * The label to be shown to the user.
         */
        label: string;
        /**
         * The internal value compared against select and passed to `onChange`.
         */
        value: string;
    }
}
declare const RadioControl: ComponentType<RadioControl.Props>;

export default RadioControl;
