import { ComponentType, ElementType } from '@wordpress/element';
import Card from '..';

declare namespace CardHeader {
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
         * Add visual shading style.
         */
        isShady?: boolean;

        size?: Card.CardSize;

        /**
         * Render as a different element type
         */
        as?: ElementType;
    }
}

declare const CardHeader: ComponentType<CardHeader.Props>;

export default CardHeader;
