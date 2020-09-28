import { ComponentType } from 'react';

declare namespace AnglePickerControl {
    interface Props {
        /**
         * The current value of the input. The value represents an angle in degrees and should be a value between 0 and 360.
         */
        value: number;

        /**
         * Label to use for the angle picker. If not set the a translated label "Angle" is used.
         */
        label?: string;

        /**
         * A function that receives the new value of the input.
         */
        onChange: (value: number) => void;
    }
}

declare const AnglePickerControl: ComponentType<AnglePickerControl.Props>;

export default AnglePickerControl;
