import { ComponentType } from '@wordpress/element';
import { StyledComponent } from '@emotion/styled';

declare namespace Card {
    interface Props {
        /**
         * `className` of the container.
         */
        className?: string;
        /**
         * Renders a borderless card.
         */
        isBorderless?: boolean;
        /**
         * Renders an elevated card.
         */
        isElevated?: boolean;
        /**
         * Determines the amount of padding within the card.
         */
        size?: string;
    }
}
declare const Card: StyledComponent<React.ComponentProps<'div'>, Card.Props, {}>;

export default Card;
