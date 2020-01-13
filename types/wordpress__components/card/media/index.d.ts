import { ComponentType, ElementType } from '@wordpress/element';

declare namespace CardMedia {
    interface Props {
        /**
         * `className` of the container.
         */
        className?: string;

        /**
         * Render as a different element type
         */
        as?: ElementType;
    }
}

declare const CardMedia: ComponentType<CardMedia.Props>;

export default CardMedia;
