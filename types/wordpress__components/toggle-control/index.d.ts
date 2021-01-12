import { ComponentType } from 'react';

import BaseControl from '../base-control';

declare namespace ToggleControl {
    interface Props extends BaseControl.ControlProps {
        /**
         * If checked is `true` the toggle will be checked. If checked is
         * `false` the toggle will be unchecked. If no value is passed the
         * toggle will be unchecked.
         */
        checked?: boolean;
        /**
         * A function that receives the checked state as input.
         */
        onChange?(isChecked: boolean): void;
    }
}
declare const ToggleControl: ComponentType<ToggleControl.Props>;

export default ToggleControl;
