import { ComponentProps, ComponentType, ElementType } from '@wordpress/element';
import Card from '..';

declare namespace CardFooter {
    interface Props {
        /**
         * `className` of the container.
         */
        className?: string;

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

declare const CardFooter: ComponentType<CardFooter.Props>;

export default CardFooter;
