import { ComponentType, ElementType } from '@wordpress/element';

declare namespace Card {
    type CardSize = 'large' | 'medium' | 'small' | 'extraSmall';
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
         *
         * @defaultValue "medium"
         */
        size?: CardSize;

        /**
         * Render as a different element type
         */
        as?: ElementType;
    }
}

declare const Card: ComponentType<Card.Props>;

export default Card;
