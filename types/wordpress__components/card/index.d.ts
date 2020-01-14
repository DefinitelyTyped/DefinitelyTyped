import { ComponentType, HTMLProps } from '@wordpress/element';

declare namespace Card {
    type CardSize = 'large' | 'medium' | 'small' | 'extraSmall';
    type Props<T extends keyof JSX.IntrinsicElements> = {
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
        as?: T;
    } & JSX.IntrinsicElements[T];
}

declare function Card<T extends keyof JSX.IntrinsicElements = 'div'>(props: Card.Props<T>): JSX.Element;

export default Card;
