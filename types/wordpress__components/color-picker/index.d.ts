import { ComponentType } from "react";
import * as tinycolor from "tinycolor2";

declare namespace ColorPicker {
    interface OnChangeCompleteValue {
        color: tinycolor.Instance;
        hex: string;
        hsl: string;
        hsv: string;
        rgb: string;
        oldHue: string;
        source: "rgb" | undefined;
        draftHex: string;
        draftHsl: string;
        draftRgb: string;
    }

    interface Props {
        /**
         * Machine-readable color value.
         * @defaultValue "0071a1"
         */
        color?: string | undefined;
        /**
         * Function to be called when color value changes.
         */
        onChangeComplete(value: OnChangeCompleteValue): void;
        /**
         * Should alpha be disabled?
         */
        disableAlpha?: boolean | undefined;
        /**
         * A reference to the hue of the previous color, otherwise
         * dragging the saturation to zero will reset the current
         * hue to zero as well.
         *
         * @see https://github.com/casesandberg/react-color/issues/29#issuecomment-132686909.
         */
        oldHue?: number | undefined;
    }
}
declare const ColorPicker: ComponentType<ColorPicker.Props>;

export default ColorPicker;
