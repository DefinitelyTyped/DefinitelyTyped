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
         * @defaultValue false
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
        /**
         * Whether the palette should have a clearing button or not.
         * @defaultValue `true`
         */
        clearable?: boolean;
    }
}
declare const ColorPalette: ComponentType<ColorPalette.Props>;

export default ColorPalette;
