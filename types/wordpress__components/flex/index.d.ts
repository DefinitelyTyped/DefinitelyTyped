import { ComponentType, HTMLProps, CSSProperties } from 'react';

declare namespace Flex {
    type FlexAlignments =
        | 'start'
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'end'
        | 'normal'
        | 'baseline'
        | 'first baseline'
        | 'last baseline'
        | 'stretch'
        | 'safe'
        | 'unsafe';


    interface FlexProps {
        /**
         * Sets align-items. Top and bottom are shorthand for flex-start and flex-end respectively.
         */
        align?: 
            | FlexAlignments
            | 'top'
            | 'bottom'
            | 'self-start'
            | 'self-end';

        /**
         * The size of padding to put between the children of the container.
         */
        gap?: number;

        /**
         * Sets jusifty-content. Left and right are shorthand for flex-start and flex-end respectively, not the actual CSS value.
         */
        justify?: 
            | FlexAlignments
            | 'left'
            | 'right'
            | 'space-between'
            | 'space-around'
            | 'space-evenly';

        /**
         * Reverses the flex rows.
         */
        isReversed?: boolean;
    }

    interface Props extends FlexProps, HTMLProps<HTMLDivElement> {}
}

declare const Flex: ComponentType<Flex.Props>;

export default Flex;
