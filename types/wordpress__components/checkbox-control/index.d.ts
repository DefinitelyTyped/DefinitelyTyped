import { ComponentType, HTMLProps } from 'react';

import BaseControl from '../base-control';

declare namespace CheckboxControl {
    interface Props
        extends Omit<HTMLProps<HTMLInputElement>, keyof BaseControl.ControlProps | 'onChange'>,
            BaseControl.ControlProps {
        /**
         * A heading for the input field, that appears above the checkbox. If
         * the prop is not passed no heading will be rendered.
         */
        heading?: BaseControl.ControlProps['label'];
        /**
         * A function that receives the checked state (boolean) as input.
         */
        onChange(isChecked: boolean): void;
    }
}
declare const CheckboxControl: ComponentType<CheckboxControl.Props>;

export default CheckboxControl;
