import { ComponentProps, ComponentType, ElementType } from '@wordpress/element';
import { HorizontalRule } from '../../primitives';
import { StyledComponent } from '@emotion/styled';

declare namespace CardDivider {
    interface Props {
        /**
         * `className` of the container.
         */
        className?: string;

        children?: never;

        /**
         * Render as a different element type
         */
        as?: ElementType;
    }
}

declare const CardDivider: StyledComponent<ComponentProps<typeof HorizontalRule>, CardDivider.Props, {}>;

export default CardDivider;
