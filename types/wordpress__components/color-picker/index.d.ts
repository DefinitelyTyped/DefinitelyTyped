import { ComponentType } from '@wordpress/element';

declare namespace ColorPicker {
    interface Props {
        /**
         * Machine-readable color value.
         */
        color: string;
        /**
         * Function to be called when color value changes.
         */
        onChangeComplete(value: { hex: string; hsl: string; hsv: string; rgb: string }): void;
        /**
         * Should alpha be disabled?
         */
        disableAlpha?: boolean;
    }
}
declare const ColorPicker: ComponentType<ColorPicker.Props>;

export default ColorPicker;
