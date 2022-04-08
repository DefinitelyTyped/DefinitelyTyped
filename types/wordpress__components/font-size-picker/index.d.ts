import { ComponentType } from 'react';

declare namespace FontSizePicker {
    interface Props {
        /**
         * If `true`, it will not be possible to choose a custom fontSize. The
         * user will be forced to pick one of the pre-defined sizes passed in
         * fontSizes.
         */
        disableCustomFontSizes?: boolean;
        /**
         * If no value exists, this prop defines the starting position for the
         * font size picker slider. Only relevant if `withSlider` is `true`.
         */
        fallbackFontSize?: number;
        /**
         * An array of font size objects.
         */
        fontSizes?: FontSize[];
        /**
         * A function that receives the new font size value. If `size` is
         * undefined, it should reset the value, attending to what reset means
         * in that context, e.g., set the font size to undefined or set the font
         * size to a starting value.
         */
        onChange(size?: number): void;
        /**
         * The current font size value.
         */
        value?: number;
        /**
         * If `true`, the UI will contain a slider, instead of a numeric text
         * input field.
         */
        withSlider?: boolean;
    }
    interface FontSize {
        /**
         * Font size in px.
         */
        size: number;
        /**
         * Label for the font size (e.g. "Small")
         */
        name: string;
        /**
         * A unique identifier for the font size. Used for the class generation
         * process.
         */
        slug: string;
    }
}
declare const FontSizePicker: ComponentType<FontSizePicker.Props>;

export default FontSizePicker;
