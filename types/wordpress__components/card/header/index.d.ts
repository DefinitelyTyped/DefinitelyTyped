import Card from '..';

declare namespace CardHeader {
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
declare function CardHeader<T extends keyof JSX.IntrinsicElements = 'div'>(props: CardHeader.Props<T>): JSX.Element;

export default CardHeader;
