import { ComponentType, HTMLProps, CSSProperties } from 'react';

declare namespace Flex {
    interface FlexProps {
        /**
         * Sets align-items. Top and bottom are shorthand for flex-start and flex-end respectively.
         */
        align?: CSSProperties['alignItems'] | 'top' | 'bottom';

        /**
         * Determines the spacing in between children components. The `gap` value is a multiplier to the base value of `4`.
         */
        gap?: number;

        /**
         * Sets jusifty-content. Left and right are shorthand for flex-start and flex-end respectively, not the actual CSS value.
         */
        justify?: CSSProperties['justifyContent'] | 'left' | 'right';

        /**
         * Reverses the flex direction.
         */
        isReversed?: boolean;
    }

    interface Props extends FlexProps, HTMLProps<HTMLDivElement> {}
}

declare const Flex: ComponentType<Flex.Props>;

export default Flex;
