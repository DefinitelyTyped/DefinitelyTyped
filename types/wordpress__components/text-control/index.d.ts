import { ComponentType, HTMLProps } from '@wordpress/element';

import BaseControl from '../base-control';

declare namespace TextControl {
    interface Props
        extends Omit<HTMLProps<HTMLInputElement>, keyof BaseControl.ControlProps | 'onChange'>,
            BaseControl.ControlProps {
        /**
         * The current value of the input.
         */
        value: string | number;
        /**
         * A function that receives the value of the input.
         */
        onChange(value: string): void;
    }
}
declare const TextControl: ComponentType<TextControl.Props>;

export default TextControl;
