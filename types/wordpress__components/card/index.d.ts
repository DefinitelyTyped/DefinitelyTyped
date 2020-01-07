import { ComponentType } from '@wordpress/element';

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
declare const Card: ComponentType<Card.Props>;

export default Card;
