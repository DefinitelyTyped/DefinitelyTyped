import Card from '..';

declare namespace CardFooter {
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
         * Add visual shading style.
         */
        isShady?: boolean;

        size?: Card.CardSize;

        /**
         * Render as a different element type
         */
        as?: T;
    } & JSX.IntrinsicElements[T];
}

// tslint:disable-next-line no-unnecessary-generics
declare function CardFooter<T extends keyof JSX.IntrinsicElements = 'div'>(props: CardFooter.Props<T>): JSX.Element;

export default CardFooter;
