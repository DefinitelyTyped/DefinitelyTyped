import { ComponentType } from 'react';

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
        className?: string;
        /**
         * Array of `ColorPalette.Color` to use.
         */
        colors: readonly Color[];
        /**
         * Should custom color selection be disabled?
         */
        disableCustomColors?: boolean;
        /**
         * Current active color value.
         */
        value: Color;
        /**
         * Function to be called when color is changed. `color` may be
         * `undefined` if the color selection is the same as the current `value`.
         */
        onChange(color?: Color): void;
    }
}
declare const ColorPalette: ComponentType<ColorPalette.Props>;

export default ColorPalette;
