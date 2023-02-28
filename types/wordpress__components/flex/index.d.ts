import { ComponentType, HTMLProps, CSSProperties } from 'react';

declare namespace Flex {
    interface FlexProps {
        /**
         * Reverses the flex direction.
         *
         * @deprecated Use `direction` instead.
         */
        isReversed?: boolean | undefined;

        /**
         * Sets align-items. Top and bottom are shorthand for flex-start and flex-end respectively.
         */
        align?: CSSProperties['alignItems'] | 'top' | 'bottom' | undefined;

        /**
         * The direction flow of the children content can be adjusted with `direction`. `column` will
         * align children vertically and `row` will align children horizontally.
         */
        direction?: CSSProperties['flexDirection'] | undefined;

        /**
         * Expands to the maximum available width (if horizontal) or height (if vertical).
         */
        expanded?: boolean | undefined;

        /**
         * Spacing in between each child can be adjusted by using `gap`. The value of `gap` works as
         * a multiplier to the library's grid system (base of `4px`).
         */
        gap?: number | string | undefined;

        /**
         * Horizontally aligns content if the `direction` is `row`, or vertically aligns content
         * if the `direction` is `column`.
         */
        justify?: CSSProperties['justifyContent'] | undefined;

        /**
         * Determines if children should wrap.
         */
        wrap?: boolean | undefined;
    }

    interface Props extends FlexProps, Omit<HTMLProps<HTMLDivElement>, 'wrap'> {}
}

declare const Flex: ComponentType<Flex.Props>;

export default Flex;
