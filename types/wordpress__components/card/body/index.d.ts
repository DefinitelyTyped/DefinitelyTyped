import Card from '..';

declare namespace CardBody {
    type Props<T extends keyof JSX.IntrinsicElements> = {
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
        as?: T;
    } & JSX.IntrinsicElements[T];
}

// tslint:disable-next-line no-unnecessary-generics
declare function CardBody<T extends keyof JSX.IntrinsicElements = 'div'>(props: CardBody.Props<T>): JSX.Element;

export default CardBody;
