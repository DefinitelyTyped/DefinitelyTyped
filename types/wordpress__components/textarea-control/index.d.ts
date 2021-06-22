import { ComponentType, HTMLProps } from 'react';

import BaseControl from '../base-control';

declare namespace TextareaControl {
    interface Props
        extends Omit<HTMLProps<HTMLTextAreaElement>, keyof BaseControl.ControlProps | 'onChange'>,
            BaseControl.ControlProps {
        /**
         * The number of rows the textarea should contain.
         * @defaultValue 4
         */
        rows?: number;
        /**
         * The current value of the textarea.
         */
        value: string;
        /**
         * A function that receives the new value of the textarea each time it
         * changes.
         */
        onChange(value: string): void;
    }
}
declare const TextareaControl: ComponentType<TextareaControl.Props>;

export default TextareaControl;
