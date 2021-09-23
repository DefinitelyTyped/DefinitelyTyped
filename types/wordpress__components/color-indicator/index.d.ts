import { ComponentType, HTMLProps } from 'react';

declare namespace ColorIndicator {
    interface Props extends HTMLProps<HTMLSpanElement> {
        /**
         * A string color value.
         */
        colorValue: string;
    }
}
declare const ColorIndicator: ComponentType<ColorIndicator.Props>;

export default ColorIndicator;
