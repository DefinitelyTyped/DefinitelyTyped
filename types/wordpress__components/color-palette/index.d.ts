import { ComponentType } from "react";

declare namespace ColorPalette {
    interface Color {
        /**
         * Human-readable color name.
         */
        name: string;
        /**
         * Machine-readable color value.
         */
        color: string;
    }
    interface Props {
        className?: string | undefined;
        /**
         * Array of `ColorPalette.Color` to use.
         */
        colors: readonly Color[];
        /**
         * Should custom color selection be disabled?
         * @defaultValue false
         */
        disableCustomColors?: boolean | undefined;
        /**
         * Current active color value.
         */
        value: string;
        /**
         * Function to be called when color is changed. `color` may be
         * `undefined` if the color selection is the same as the current `value`.
         */
        onChange(color?: string): void;
        /**
         * Whether the palette should have a clearing button or not.
         * @defaultValue `true`
         */
        clearable?: boolean | undefined;
    }
}
declare const ColorPalette: ComponentType<ColorPalette.Props>;

export default ColorPalette;
