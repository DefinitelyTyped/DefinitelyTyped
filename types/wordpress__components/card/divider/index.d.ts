import { ComponentProps } from '@wordpress/element';
import { HorizontalRule } from '../../primitives';
import { StyledComponent } from '@emotion/styled';

declare namespace CardDivider {
    interface Props {
        /**
         * `className` of the container.
         */
        className?: string;

        children?: never;
    }
}

declare const CardDivider: StyledComponent<ComponentProps<typeof HorizontalRule>, CardDivider.Props, {}>;

export default CardDivider;
