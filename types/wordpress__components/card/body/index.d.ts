import Card from '..';

declare namespace CardBody {
    type Props<T extends keyof JSX.IntrinsicElements> = {
        /**
         * `className` of the container.
         */
        className?: string | undefined;

        /**
         * Add visual shading style.
         */
        isShady?: boolean | undefined;

        size?: Card.CardSize | undefined;

        /**
         * Render as a different element type
         */
        as?: T | undefined;
    } & JSX.IntrinsicElements[T];
}

// tslint:disable-next-line no-unnecessary-generics
declare function CardBody<T extends keyof JSX.IntrinsicElements = 'div'>(props: CardBody.Props<T>): JSX.Element;

export default CardBody;
